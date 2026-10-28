package org.openrewrite.docs

import java.time.Instant
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test

class ChangelogTest {
    private val bom = "https://github.com/openrewrite/rewrite-recipe-bom"
    private val spring = "https://github.com/openrewrite/rewrite-spring"

    private fun version(version: String) = Version.parse(version)!!

    private fun release(version: String, body: String = "* Change in $version") =
        Release(version(version), "$spring/releases/tag/v$version", Instant.parse("2026-10-01T00:00:00Z"), body)

    @Test
    fun listsTheReleasesBetweenConsecutiveBoms() {
        val boms = listOf(
            BomRelease(version("3.41.0"), "$bom/releases/tag/v3.41.0", Instant.parse("2026-10-09T21:30:41Z"), mapOf(spring to version("6.41.0"))),
            BomRelease(version("3.42.0"), "$bom/releases/tag/v3.42.0", Instant.parse("2026-10-27T02:14:09Z"), mapOf(spring to version("6.42.1"))),
        )
        val releases = mapOf(spring to listOf(release("6.43.0"), release("6.42.1"), release("6.42.0"), release("6.41.0")))

        assertThat(Changelog(boms, releases).markdown().substringAfter("## ")).isEqualTo(
            """
            [rewrite-recipe-bom 3.42.0]($bom/releases/tag/v3.42.0)

            Released on October 27, 2026.

            #### [rewrite-spring 6.42.1]($spring/releases/tag/v6.42.1)

            * Change in 6.42.1

            #### [rewrite-spring 6.42.0]($spring/releases/tag/v6.42.0)

            * Change in 6.42.0

            """.trimIndent()
        )
    }

    @Test
    fun stripsWhatGitHubGeneratesAroundTheChanges() {
        val body = """
            ## What's Changed
            * Migrate `management.context-path` by @jkschneider in https://github.com/openrewrite/rewrite-spring/pull/1160
            * Bump actions/checkout from 4 to 5 by @dependabot[bot] in https://github.com/openrewrite/rewrite-spring/pull/1161
            * Upgrade to Gradle 9.8.2 by @jkschneider in https://github.com/openrewrite/rewrite-spring/pull/1162

            ### Fixes
            * Handle Map<String, Object>, Array[Type]() and {placeholders} in `List<String>` by @timtebeek in https://github.com/openrewrite/rewrite-spring/pull/1163

            ## New Contributors
            * @someone made their first contribution in https://github.com/openrewrite/rewrite-spring/pull/1158

            **Full Changelog**: https://github.com/openrewrite/rewrite-spring/compare/v6.41.0...v6.42.0
        """.trimIndent().replace("\n", "\r\n")

        assertThat(Changelog.releaseNotes(body)).isEqualTo(
            """
            * Migrate `management.context-path` by @jkschneider in [#1160](https://github.com/openrewrite/rewrite-spring/pull/1160)

            **Fixes**
            * Handle Map&lt;String, Object>, Array[Type]\(\) and \{placeholders\} in `List<String>` by @timtebeek in [#1163](https://github.com/openrewrite/rewrite-spring/pull/1163)
            """.trimIndent()
        )
    }

    @Test
    fun leavesFencedCodeAlone() {
        val body = """
            Use it like this:
            ```xml
            <plugin>{x}</plugin>
            ```
        """.trimIndent()

        assertThat(Changelog.releaseNotes(body)).isEqualTo(body)
    }
}
