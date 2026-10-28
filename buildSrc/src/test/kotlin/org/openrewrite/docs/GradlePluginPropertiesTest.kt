package org.openrewrite.docs

import org.assertj.core.api.Assertions.assertThat
import org.assertj.core.api.Assertions.assertThatThrownBy
import org.junit.jupiter.api.Test

class GradlePluginPropertiesTest {
    private val page = """
        Intro

        <!-- AUTO-GENERATED-GRADLE-PROPS:START - Do not edit manually -->

        | Property | Type |
        | -------- | ---- |
        | `old` | `boolean` |

        <!-- AUTO-GENERATED-GRADLE-PROPS:END -->

        Outro
    """.trimIndent()

    @Test
    fun replacesTheTableBetweenTheMarkers() {
        val reference = """
            # Plugin reference

            ### Properties

            | Property | Type | Default | Description |
            | -------- | ---- | ------- | ----------- |
            | `new` | `String` | Empty list | A new property, not a\|pipe. |

            ### Tasks
        """.trimIndent()

        assertThat(replaceGradlePluginProperties(page, reference)).isEqualTo(
            """
            Intro

            <!-- AUTO-GENERATED-GRADLE-PROPS:START - Do not edit manually -->

            | Property | Description |
            | -------- | ----------- |
            | `new`<br/>`String` | A new property, not a\|pipe. Defaults to empty list. |

            <!-- AUTO-GENERATED-GRADLE-PROPS:END -->

            Outro
            """.trimIndent()
        )
    }

    @Test
    fun failsOnUnexpectedColumns() {
        val reference = """
            ### Properties

            | Property | Type |
            | -------- | ---- |
            | `new` | `String` |
        """.trimIndent()

        assertThatThrownBy { replaceGradlePluginProperties(page, reference) }
            .hasMessageContaining("Unexpected columns")
    }

    @Test
    fun failsWithoutATable() {
        assertThatThrownBy { replaceGradlePluginProperties(page, "# Plugin reference") }
            .hasMessageContaining("No properties table")
    }
}
