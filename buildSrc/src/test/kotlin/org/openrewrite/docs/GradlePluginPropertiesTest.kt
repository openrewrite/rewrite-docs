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

            | Property | Type |
            | -------- | ---- |
            | `new` | `String` |

            ### Tasks
        """.trimIndent()

        assertThat(replaceGradlePluginProperties(page, reference)).isEqualTo(
            """
            Intro

            <!-- AUTO-GENERATED-GRADLE-PROPS:START - Do not edit manually -->

            | Property | Type |
            | -------- | ---- |
            | `new` | `String` |

            <!-- AUTO-GENERATED-GRADLE-PROPS:END -->

            Outro
            """.trimIndent()
        )
    }

    @Test
    fun failsWithoutATable() {
        assertThatThrownBy { replaceGradlePluginProperties(page, "# Plugin reference") }
            .hasMessageContaining("No properties table")
    }
}
