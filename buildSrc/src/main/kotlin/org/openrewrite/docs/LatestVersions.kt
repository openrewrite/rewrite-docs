package org.openrewrite.docs

data class Module(val groupId: String, val artifactId: String, val version: String) {
    val versionToken get() = "{{VERSION_${groupId}_$artifactId}}".uppercase().replace('-', '_').replace('.', '_')

    companion object {
        fun of(pom: Pom) = Module(pom.groupId, pom.artifactId, pom.version)
    }
}

class LatestVersions(
    val rewriteRecipeBom: String,
    val gradlePlugin: String,
    val mavenPlugin: String,
    modules: Collection<Module>,
) {
    val modules = modules.sortedWith(compareBy(Module::groupId, Module::artifactId))

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
}
