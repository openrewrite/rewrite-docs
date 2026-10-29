import org.openrewrite.docs.GitHub
import org.openrewrite.docs.Pom
import org.openrewrite.docs.Version
import org.openrewrite.docs.UpdateChangelog
import org.openrewrite.docs.UpdateGradlePluginProperties
import org.openrewrite.docs.UpdateLatestVersions
import org.openrewrite.docs.UpdateMavenPluginParameters

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

configurations.all {
    // Far short of the nightly cadence of the docs updates, so each run sees the latest releases.
    resolutionStrategy.cacheDynamicVersionsFor(1, TimeUnit.HOURS)
}

val updateLatestVersions = tasks.register<UpdateLatestVersions>("updateLatestVersions") {
    group = "documentation"
    description = "Updates the versions behind the {{VERSION_*}} placeholders in the docs from moderne-docs."
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

val updateMavenPluginParameters = tasks.register<UpdateMavenPluginParameters>("updateMavenPluginParameters") {
    group = "documentation"
    description = "Updates the Maven plugin parameters table from the descriptor in the rewrite-maven-plugin jar."
    pluginJar.from(latestJar("org.openrewrite.maven:rewrite-maven-plugin"))
    pageFile = layout.projectDirectory.file("docs/reference/rewrite-maven-plugin.md")
}

tasks.register("updateDocs") {
    group = "documentation"
    description = "Updates every generated page of the docs."
    dependsOn(updateLatestVersions, updateChangelog, updateGradlePluginProperties, updateMavenPluginParameters)
}

fun latestJar(module: String) = artifact("$module:latest.release@jar")

fun pom(coordinate: String) = artifact("$coordinate@pom")

// Detached configurations are not in the configuration container, so `configurations.all` above never sees them.
fun artifact(notation: String) = configurations.detachedConfiguration(dependencies.create(notation))
    .apply { resolutionStrategy.cacheDynamicVersionsFor(1, TimeUnit.HOURS) }
