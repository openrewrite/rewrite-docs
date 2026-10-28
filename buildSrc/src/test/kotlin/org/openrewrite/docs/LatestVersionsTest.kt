package org.openrewrite.docs

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class LatestVersionsTest {
    private val rewrite = "https://github.com/openrewrite/rewrite"
    private val latestVersions = LatestVersions(
        rewriteBom = "8.95.0",
        rewriteRecipeBom = "3.43.0",
        gradlePlugin = "7.44.1",
        mavenPlugin = "6.52.0",
        modules = listOf(
            Module("org.openrewrite.recipe", "rewrite-spring", "6.43.0", License.MSAL, "https://github.com/openrewrite/rewrite-spring"),
            Module("org.openrewrite", "rewrite-python", "8.95.0", License.MSAL, rewrite),
            Module("org.openrewrite", "rewrite-core", "8.95.0", License.Apache2, rewrite),
            Module("org.openrewrite", "rewrite-templating", "1.48.0", License.Apache2, "https://github.com/openrewrite/rewrite-templating"),
            Module("org.openrewrite", "rewrite-csharp", "8.95.0", License.MSAL, rewrite),
            Module("io.moderne.recipe", "rewrite-spring", "0.46.0", License.Proprietary, "https://github.com/moderneinc/rewrite-spring"),
        ),
    )

    @Test
    fun javascriptHasEveryModule() {
        assertThat(latestVersions.javascript()).isEqualTo(
            """
            const latestVersions = {
              "{{VERSION_REWRITE_RECIPE_BOM}}": "3.43.0",
              "{{VERSION_REWRITE_GRADLE_PLUGIN}}": "7.44.1",
              "{{VERSION_REWRITE_MAVEN_PLUGIN}}": "6.52.0",
              "{{VERSION_IO_MODERNE_RECIPE_REWRITE_SPRING}}": "0.46.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}": "8.95.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_CSHARP}}": "8.95.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}": "8.95.0",
              "{{VERSION_ORG_OPENREWRITE_REWRITE_TEMPLATING}}": "1.48.0",
              "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}": "6.43.0",
            };
            export default latestVersions;

            """.trimIndent()
        )
    }

    @Test
    fun tableLeavesOutProprietaryAndModerneDocsModules() {
        val rows = latestVersions.markdown().lines().filter { it.startsWith("| [") }

        assertThat(rows).containsExactly(
            "| [**org.openrewrite:rewrite-bom**]($rewrite) | **[8.95.0]($rewrite/releases/tag/v8.95.0)** | ${License.Apache2.markdown()} |",
            "| [**org.openrewrite:rewrite-maven-plugin**](https://github.com/openrewrite/rewrite-maven-plugin) | **[6.52.0](https://github.com/openrewrite/rewrite-maven-plugin/releases/tag/v6.52.0)** | ${License.Apache2.markdown()} |",
            "| [**org.openrewrite:rewrite-gradle-plugin**](https://github.com/openrewrite/rewrite-gradle-plugin) | **[7.44.1](https://github.com/openrewrite/rewrite-gradle-plugin/releases/tag/v7.44.1)** | ${License.Apache2.markdown()} |",
            "| [**org.openrewrite.recipe:rewrite-recipe-bom**](https://github.com/openrewrite/rewrite-recipe-bom) | **[3.43.0](https://github.com/openrewrite/rewrite-recipe-bom/releases/tag/v3.43.0)** | ${License.Apache2.markdown()} |",
            "| [org.openrewrite:rewrite-core]($rewrite) | [8.95.0]($rewrite/releases/tag/v8.95.0) | ${License.Apache2.markdown()} |",
            "| [org.openrewrite:rewrite-python]($rewrite) | [8.95.0]($rewrite/releases/tag/v8.95.0) | ${License.MSAL.markdown()} |",
            "| [org.openrewrite:rewrite-templating](https://github.com/openrewrite/rewrite-templating) | [1.48.0](https://github.com/openrewrite/rewrite-templating/releases/tag/v1.48.0) | ${License.Apache2.markdown()} |",
            "| [org.openrewrite.recipe:rewrite-spring](https://github.com/openrewrite/rewrite-spring) | [6.43.0](https://github.com/openrewrite/rewrite-spring/releases/tag/v6.43.0) | ${License.MSAL.markdown()} |",
        )
    }

    @Test
    fun installsApacheJarsAndPublicPackages() {
        val installs = latestVersions.markdown().lines().filter { it.startsWith("mod config recipes") && "install" in it }

        assertThat(installs).containsExactly(
            "mod config recipes jar install org.openrewrite:rewrite-core:{{VERSION_ORG_OPENREWRITE_REWRITE_CORE}}",
            "mod config recipes pip install openrewrite=={{VERSION_ORG_OPENREWRITE_REWRITE_PYTHON}}",
            "mod config recipes jar install org.openrewrite:rewrite-core:LATEST",
            "mod config recipes pip install openrewrite",
        )
    }
}
