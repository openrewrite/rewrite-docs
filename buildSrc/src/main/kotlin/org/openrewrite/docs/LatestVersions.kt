package org.openrewrite.docs

data class Module(
    val groupId: String,
    val artifactId: String,
    val version: String,
    val license: License,
    val repository: String,
) {
    val coordinates get() = "$groupId:$artifactId"

    val versionToken get() = "{{VERSION_${groupId}_$artifactId}}".uppercase().replace('-', '_').replace('.', '_')

    companion object {
        fun of(pom: Pom) = Module(pom.groupId, pom.artifactId, pom.version, pom.license, pom.repository)
    }
}

class LatestVersions(
    val rewriteBom: String,
    val rewriteRecipeBom: String,
    val gradlePlugin: String,
    val mavenPlugin: String,
    modules: Collection<Module>,
) {
    val modules = modules.sortedWith(compareBy(Module::groupId, Module::artifactId))

    private val listedModules = this.modules.filter { it.license != License.Proprietary && it.artifactId !in UNLISTED_MODULES }

    fun javascript(): String = buildString {
        appendLine("const latestVersions = {")
        appendLine("  \"{{VERSION_REWRITE_RECIPE_BOM}}\": \"$rewriteRecipeBom\",")
        appendLine("  \"{{VERSION_REWRITE_GRADLE_PLUGIN}}\": \"$gradlePlugin\",")
        appendLine("  \"{{VERSION_REWRITE_MAVEN_PLUGIN}}\": \"$mavenPlugin\",")
        for (module in modules) {
            appendLine("  \"${module.versionToken}\": \"${module.version}\",")
        }
        appendLine("};")
        appendLine("export default latestVersions;")
    }

    fun markdown(): String = buildString {
        append(HEADER)
        appendLine(headlineRow("org.openrewrite:rewrite-bom", "https://github.com/openrewrite/rewrite", rewriteBom))
        appendLine(headlineRow("org.openrewrite:rewrite-maven-plugin", "https://github.com/openrewrite/rewrite-maven-plugin", mavenPlugin))
        appendLine(headlineRow("org.openrewrite:rewrite-gradle-plugin", "https://github.com/openrewrite/rewrite-gradle-plugin", gradlePlugin))
        appendLine(headlineRow("org.openrewrite.recipe:rewrite-recipe-bom", "https://github.com/openrewrite/rewrite-recipe-bom", rewriteRecipeBom))
        for (module in listedModules) {
            val name = if (module.repository.isEmpty()) module.coordinates else "[${module.coordinates}](${module.repository})"
            appendLine("| $name | ${release(module.repository, module.version)} | ${module.license.markdown()} |")
        }
        append(INSTALLATION)
        appendLine(installCommands { it.versionToken })
        append(LATEST_INSTALLATION)
        appendLine(installCommands { null })
        append(FOOTER)
    }

    private fun headlineRow(name: String, repository: String, version: String) =
        "| [**$name**]($repository) | **${release(repository, version)}** | ${License.Apache2.markdown()} |"

    private fun release(repository: String, version: String) =
        if (repository.isEmpty()) version else "[$version]($repository/releases/tag/v$version)"

    private fun installCommands(version: (Module) -> String?): String {
        // Source-available modules resolve from the Code Genome Project for Moderne customers only, so
        // only their pip and npm packages, which come from public registries, are installed here.
        val jars = listedModules
            .filter { it.license == License.Apache2 && it.artifactId !in VERSION_ONLY_MODULES }
            .map { "${it.coordinates}:${version(it) ?: "LATEST"}" }
        val pip = listedModules.mapNotNull { module ->
            PIP_PACKAGES[module.artifactId]?.let { pkg -> version(module)?.let { "$pkg==$it" } ?: pkg }
        }
        val npm = listedModules.mapNotNull { module ->
            NPM_PACKAGES[module.artifactId]?.let { pkg -> version(module)?.let { "$pkg@$it" } ?: pkg }
        }
        return listOf("jar" to jars, "pip" to pip, "npm" to npm)
            .filter { (_, packages) -> packages.isNotEmpty() }
            .joinToString("\n") { (type, packages) -> "mod config recipes $type install ${packages.joinToString(" ")}" }
    }

    companion object {
        /// Modules listed for their version alone, as they ship no recipes to install.
        val VERSION_ONLY_MODULES = setOf("rewrite-polyglot", "rewrite-templating")

        /// Modules whose recipes are documented on docs.moderne.io rather than here.
        val UNLISTED_MODULES = setOf("rewrite-csharp", "rewrite-devcenter", "rewrite-go", "recipes-go")

        val PIP_PACKAGES = mapOf(
            "rewrite-python" to "openrewrite",
            "rewrite-migrate-python" to "openrewrite-migrate-python",
            "rewrite-static-analysis-python" to "openrewrite-static-analysis",
        )

        val NPM_PACKAGES = mapOf(
            "rewrite-javascript" to "@openrewrite/rewrite",
            "rewrite-nodejs" to "@openrewrite/recipes-nodejs",
            "rewrite-angular" to "@openrewrite/recipes-angular",
            "rewrite-react" to "@openrewrite/recipes-react",
        )
    }
}
