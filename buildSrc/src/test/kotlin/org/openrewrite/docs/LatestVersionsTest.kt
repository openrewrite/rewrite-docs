package org.openrewrite.docs

import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class LatestVersionsTest {
    private val latestVersions = LatestVersions(
        rewriteRecipeBom = "3.43.0",
        gradlePlugin = "7.44.1",
        mavenPlugin = "6.52.0",
        modules = listOf(
            Module("org.openrewrite.recipe", "rewrite-spring", "6.43.0"),
            Module("org.openrewrite", "rewrite-core", "8.95.0"),
            Module("io.moderne.recipe", "rewrite-spring", "0.46.0"),
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
              "{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}": "6.43.0",
            };
            export default latestVersions;

            """.trimIndent()
        )
    }
}
