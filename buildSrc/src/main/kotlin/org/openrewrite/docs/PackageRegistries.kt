package org.openrewrite.docs

/// Resolves the recipe modules published to npm, NuGet or as Go modules alone, which have no Maven artifact to
/// resolve a version from.
class PackageRegistries(codegenomeUsername: String, codegenomePassword: String) {
    private enum class Registry { CodeGenomeNpm, CodeGenomeNuGet, Go }

    private class Package(val groupId: String, val artifactId: String, val name: String, val repository: String, val registry: Registry)

    private val codegenomeAuthorization = basicAuthorization(codegenomeUsername, codegenomePassword)

    fun modules(warn: (String) -> Unit): List<Module> = PACKAGES.mapNotNull { pkg ->
        runCatching { latestVersion(pkg) }
            .onFailure { warn("Could not resolve the latest version of ${pkg.name}: ${it.message}") }
            .getOrNull()
            ?.let { Module(pkg.groupId, pkg.artifactId, it, License.Proprietary, pkg.repository) }
    }

    private fun latestVersion(pkg: Package): String? = when (pkg.registry) {
        // moderneinc/recipes-javascript stopped publishing to registry.npmjs.org at 0.1.2.
        Registry.CodeGenomeNpm ->
            (codegenomeJson("npm/${pkg.name}")["dist-tags"] as Map<*, *>)["latest"] as String?
        // The Code Genome Project replaces nuget.org as the registry these are published to.
        Registry.CodeGenomeNuGet ->
            (codegenomeJson("nuget/v3/flatcontainer/${pkg.name.lowercase()}/index.json")["versions"] as List<*>)
                .map { it as String }
                .lastOrNull { '-' !in it }
        Registry.Go -> {
            val escaped = pkg.name.replace(Regex("[A-Z]")) { "!" + it.value.lowercase() }
            (json("https://proxy.golang.org/$escaped/@latest")["Version"] as String).removePrefix("v").takeIf { '-' !in it }
        }
    }

    private fun codegenomeJson(path: String) =
        json("https://artifacts.codegenomeproject.org/$path", mapOf("Authorization" to codegenomeAuthorization))

    private fun json(url: String, headers: Map<String, String> = emptyMap()) = httpGetJson(url, headers) as Map<*, *>

    private companion object {
        const val RECIPES_JAVASCRIPT = "https://github.com/moderneinc/recipes-javascript"
        const val RECIPES_CSHARP = "https://github.com/moderneinc/recipes-csharp"

        val PACKAGES = listOf(
            Package("io.moderne.recipe", "recipes-javascript-code-quality", "@openrewrite/recipes-code-quality", RECIPES_JAVASCRIPT, Registry.CodeGenomeNpm),
            Package("io.moderne.recipe", "recipes-javascript-date-libraries", "@openrewrite/recipes-date-libraries", RECIPES_JAVASCRIPT, Registry.CodeGenomeNpm),
            Package("io.moderne.recipe", "recipes-code-quality", "OpenRewrite.Recipes.CSharp.CodeQuality", RECIPES_CSHARP, Registry.CodeGenomeNuGet),
            Package("io.moderne.recipe", "recipes-migrate-dotnet", "OpenRewrite.Recipes.CSharp.Migration.Dotnet", RECIPES_CSHARP, Registry.CodeGenomeNuGet),
            Package("io.moderne.recipe", "recipes-tunit", "OpenRewrite.Recipes.CSharp.Migration.TUnit", RECIPES_CSHARP, Registry.CodeGenomeNuGet),
            Package("io.moderne.recipe", "recipes-csharp-core", "OpenRewrite.Recipes.CSharp.Core", RECIPES_CSHARP, Registry.CodeGenomeNuGet),
            Package("org.openrewrite.recipe", "recipes-go", "github.com/moderneinc/recipes-go", "https://github.com/moderneinc/recipes-go", Registry.Go),
        )
    }
}
