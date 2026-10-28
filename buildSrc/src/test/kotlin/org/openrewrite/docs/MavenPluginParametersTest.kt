package org.openrewrite.docs

import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.Test

class MavenPluginParametersTest {
    private fun descriptor(vararg mojos: String) = """
        <?xml version="1.0" encoding="UTF-8"?>
        <plugin>
          <mojos>
            ${mojos.joinToString("\n")}
          </mojos>
        </plugin>
    """.trimIndent().byteInputStream()

    private fun mojo(goal: String, vararg parameters: Pair<String, String>) = """
        <mojo>
          <goal>$goal</goal>
          <parameters>
            ${parameters.joinToString("\n") { (name, description) -> parameter(name, description) }}
            <parameter>
              <name>project</name>
              <editable>false</editable>
              <description></description>
            </parameter>
          </parameters>
          <configuration>
            <configLocation implementation="java.lang.String" default-value="${'$'}{maven.multiModuleProjectDirectory}/rewrite.yml">${'$'}{rewrite.configLocation}</configLocation>
            <reportOutputDirectory implementation="java.lang.String">${'$'}{reportOutputDirectory}</reportOutputDirectory>
            <project implementation="org.apache.maven.project.MavenProject" default-value="${'$'}{project}"/>
          </configuration>
        </mojo>
    """

    private fun parameter(name: String, description: String) = """
        <parameter>
          <name>$name</name>
          <editable>true</editable>
          <description>${description.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")}</description>
        </parameter>
    """

    @Test
    fun readsTheParametersOfEveryGoalButHelp() {
        val configLocation = "configLocation" to "The configuration file."
        val reportOutputDirectory = "reportOutputDirectory" to "The directory to write <code>rewrite.patch</code> to."
        val parameters = mavenPluginParameters(
            descriptor(
                mojo("run", configLocation),
                mojo("dryRun", configLocation, reportOutputDirectory),
                mojo("help", "detail" to "Whether to show all parameters."),
            )
        )

        assertThat(mavenPluginParametersTable(parameters)).isEqualTo(
            """
            | Parameter | Description |
            | --------- | ----------- |
            | `configLocation`<br/>`rewrite.configLocation` | The configuration file. Defaults to `${'$'}{maven.multiModuleProjectDirectory}/rewrite.yml`. |
            | `reportOutputDirectory`<br/>`reportOutputDirectory` | The directory to write `rewrite.patch` to. Only for the `dryRun` goal. |
            """.trimIndent()
        )
    }

    @Test
    fun convertsJavadocHtmlToMarkdown() {
        assertThat(
            markdown(
                """
                Paths not to parse, as <a href="https://example.com/PathMatcher.html"><code>PathMatcher</code></a> globs,
                like <code>**&#47;*.md</code>, relative to <code>exclusions</code><!-- no javadoc sites associated -->.
                <p>Not &lt;b&gt; or {braces} or a|pipe, but <code>${'$'}{a|b}</code>.</p>
                """.trimIndent(),
                "exclusions",
            )
        ).isEqualTo(
            "Paths not to parse, as [`PathMatcher`](https://example.com/PathMatcher.html) globs, " +
                "like `**/*.md`, relative to `exclusions`. " +
                "Not \\<b\\> or \\{braces\\} or a\\|pipe, but `${'$'}{a\\|b}`."
        )
    }

    @Test
    fun failsOnHtmlThatDoesNotFitInATableCell() {
        assertThatThrownBy { markdown("<ul><li>One</li></ul>", "masks") }
            .hasMessageContaining("Unsupported HTML in the description of masks")
    }

    @Test
    fun replacesTheTableBetweenTheMarkers() {
        val page = """
            Intro

            <!-- AUTO-GENERATED-MAVEN-PARAMETERS:START - Do not edit manually -->

            | Parameter |
            | --------- |
            | `old` |

            <!-- AUTO-GENERATED-MAVEN-PARAMETERS:END -->

            Outro
        """.trimIndent()

        assertThat(replaceMavenPluginParameters(page, listOf(MavenPluginParameter("skip", null, "false", listOf("run"), "Whether to skip."))))
            .isEqualTo(
                """
                Intro

                <!-- AUTO-GENERATED-MAVEN-PARAMETERS:START - Do not edit manually -->

                | Parameter | Description |
                | --------- | ----------- |
                | `skip` | Whether to skip. Defaults to `false`. |

                <!-- AUTO-GENERATED-MAVEN-PARAMETERS:END -->

                Outro
                """.trimIndent()
            )
    }
}
