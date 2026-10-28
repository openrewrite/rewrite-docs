import org.openrewrite.docs.GitHub
import org.openrewrite.docs.Pom
import org.openrewrite.docs.Version
import org.openrewrite.docs.UpdateChangelog
import org.openrewrite.docs.UpdateGradlePluginProperties
import org.openrewrite.docs.UpdateLatestVersions

repositories {
    maven {
        name = "codegenome"
        url = uri("https://artifacts.codegenomeproject.org/maven")
        credentials(PasswordCredentials::class)
        content {
            includeGroupAndSubgroups("org.openrewrite")
            includeGroupAndSubgroups("io.moderne")
        }
    }
    // For the BOMs that module POMs import
    mavenCentral()
}

val recipeBomGroups = setOf("org.openrewrite", "org.openrewrite.recipe", "io.moderne.recipe")
val nonRecipeBomModules = setOf("org.openrewrite:plugin", "org.openrewrite:rewrite-test")
// Parsers, Lombok support and test harness for rewrite-java
val javaSupportModule = Regex("org\\.openrewrite:rewrite-java-.+")
val modulesOutsideBom = setOf("io.moderne.recipe:rewrite-cve-2026-22732")

// Each module at its latest release rather than the version the BOM pins, so the docs show its latest patch release.
val recipeModulePoms = configurations.create("recipeModulePoms") {
    isCanBeConsumed = false
    withDependencies {
        (bomModules("io.moderne.recipe:moderne-recipe-bom:latest.release") + modulesOutsideBom)
            .filter { it.substringBefore(':') in recipeBomGroups }
            .filterNot { it in nonRecipeBomModules || javaSupportModule.matches(it) }
            .forEach { add(project.dependencies.create("$it:latest.release@pom")) }
    }
}

configurations.all {
    // Far short of the nightly cadence of the docs updates, so each run sees the latest releases.
    resolutionStrategy.cacheDynamicVersionsFor(1, TimeUnit.HOURS)
}

val updateLatestVersions = tasks.register<UpdateLatestVersions>("updateLatestVersions") {
    group = "documentation"
    description = "Updates the latest versions of every OpenRewrite module."
    modulePoms.from(recipeModulePoms)
    rewriteBomPom.from(latestPom("org.openrewrite:rewrite-bom"))
    rewriteRecipeBomPom.from(latestPom("org.openrewrite.recipe:rewrite-recipe-bom"))
    gradlePluginPom.from(latestPom("org.openrewrite:plugin"))
    mavenPluginPom.from(latestPom("org.openrewrite.maven:rewrite-maven-plugin"))
    codegenomeUsername = providers.gradleProperty("codegenomeUsername")
    codegenomePassword = providers.gradleProperty("codegenomePassword")
    markdownFile = layout.projectDirectory.file("docs/reference/latest-versions-of-every-openrewrite-module.md")
    javascriptFile = layout.projectDirectory.file("src/plugins/latest-versions.js")
}

val githubAccessToken = providers.environmentVariable("GITHUB_TOKEN")
    .orElse(providers.exec { commandLine("gh", "auth", "token") }.standardOutput.asText.map(String::trim))

val bomReleases by lazy { UpdateChangelog.bomReleases(GitHub(githubAccessToken.get())) }

// A configuration per release, as one configuration would resolve them all to the newest.
val recipeBomPoms = files(provider { bomReleases.map { pom("org.openrewrite.recipe:rewrite-recipe-bom:${it.version}") } })

// The latest version of each module in those BOMs, as the repository a module is released from rarely changes.
val releaseNoteModulePoms = configurations.create("releaseNoteModulePoms") {
    isCanBeConsumed = false
    withDependencies {
        recipeBomPoms.map(Pom::parse)
            .flatMap(UpdateChangelog::releaseNoteModules)
            .groupBy { it.coordinates }
            .map { (_, versions) -> versions.maxBy { Version.parse(it.version) ?: Version(emptyList()) } }
            .forEach { add(project.dependencies.create("${it.coordinates}:${it.version}@pom")) }
    }
}

val updateChangelog = tasks.register<UpdateChangelog>("updateChangelog") {
    group = "documentation"
    description = "Updates the changelog from the release notes of the modules in each rewrite-recipe-bom release."
    bomPoms.from(recipeBomPoms)
    modulePoms.from(releaseNoteModulePoms)
    githubToken = githubAccessToken
    changelogFile = layout.projectDirectory.file("docs/changelog.md")
}

val updateGradlePluginProperties = tasks.register<UpdateGradlePluginProperties>("updateGradlePluginProperties") {
    group = "documentation"
    description = "Updates the Gradle plugin properties table from the rewrite-gradle-plugin reference."
    pageFile = layout.projectDirectory.file("docs/reference/gradle-plugin-configuration.md")
}

tasks.register("updateDocs") {
    group = "documentation"
    description = "Updates every generated page of the docs."
    dependsOn(updateLatestVersions, updateChangelog, updateGradlePluginProperties)
}

/// Returns the `groupId:artifactId` of every module managed by the BOM at [coordinate], following `import`-scoped BOMs.
fun bomModules(coordinate: String): Set<String> =
    Pom.parse(pom(coordinate).singleFile).managedDependencies.flatMapTo(mutableSetOf()) {
        if (it.scope == "import") bomModules("${it.groupId}:${it.artifactId}:${it.version}")
        else setOf("${it.groupId}:${it.artifactId}")
    }

fun latestPom(module: String) = pom("$module:latest.release")

// Detached configurations are not in the configuration container, so `configurations.all` above never sees them.
fun pom(coordinate: String) = configurations.detachedConfiguration(dependencies.create("$coordinate@pom"))
    .apply { resolutionStrategy.cacheDynamicVersionsFor(1, TimeUnit.HOURS) }
