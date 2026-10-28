package org.openrewrite.docs

import java.time.Instant
import java.time.ZoneOffset
import java.time.format.DateTimeFormatter
import java.util.Locale

/// A rewrite-recipe-bom release, with the version of each module repository it manages.
data class BomRelease(val version: Version, val url: String, val publishedAt: Instant, val repositoryVersions: Map<String, Version>)

/// Release notes of the modules that changed in each of [boms] but the first, which only sets where the second starts.
class Changelog(private val boms: List<BomRelease>, private val releases: Map<String, List<Release>>) {
    fun markdown(): String = buildString {
        append(HEADER)
        for ((previous, bom) in boms.zipWithNext().reversed()) {
            appendLine()
            appendLine("## [rewrite-recipe-bom ${bom.version}](${bom.url})")
            appendLine()
            val rewrite = bom.repositoryVersions[REWRITE]?.let { ", with OpenRewrite $it" }.orEmpty()
            appendLine("Released on ${DATE.format(bom.publishedAt)}$rewrite.")
            for ((repository, version) in bom.repositoryVersions.toSortedMap(compareBy(::name))) {
                val since = previous.repositoryVersions[repository]
                releases[repository].orEmpty()
                    .filter { if (since == null) it.version == version else it.version > since && it.version <= version }
                    .sortedByDescending { it.version }
                    .forEach { release ->
                        val notes = releaseNotes(release.body)
                        if (notes.isNotEmpty()) {
                            appendLine()
                            appendLine("#### [${name(repository)} ${release.version}](${release.url})")
                            appendLine()
                            appendLine(notes)
                        }
                    }
            }
        }
    }

    private fun name(repository: String) = repository.substringAfterLast('/')

    companion object {
        private const val REWRITE = "https://github.com/openrewrite/rewrite"
        private val DATE = DateTimeFormatter.ofPattern("MMMM d, yyyy", Locale.ENGLISH).withZone(ZoneOffset.UTC)

        private val HEADING = Regex("^#{1,6}\\s+(.+?)\\s*$")
        private val PULL_REQUEST = Regex("https://github\\.com/[^/\\s]+/[^/\\s]+/pull/(\\d+)")
        private val NOISE = listOf(
            Regex("by @(dependabot|renovate|github-actions)(\\[bot])?\\b"),
            Regex("^[*-]\\s+(Bump|chore\\(deps\\)|Upgrade to Gradle|Upgrade Gradle|Update Gradle)\\b", RegexOption.IGNORE_CASE),
        )

        /// Strips what GitHub generates around the list of changes, and the dependency and build tool upgrades in it,
        /// and escapes what MDX would otherwise read as JSX.
        fun releaseNotes(body: String): String {
            var inFence = false
            return body.replace("\r\n", "\n")
                .substringBefore("## New Contributors")
                .lines()
                .filterNot { line -> line.startsWith("**Full Changelog**") || NOISE.any { it.containsMatchIn(line) } }
                .mapNotNull { line ->
                    if (line.trimStart().startsWith("```")) {
                        inFence = !inFence
                        return@mapNotNull line
                    }
                    if (inFence) return@mapNotNull line
                    val heading = HEADING.find(line)?.groupValues?.get(1)
                    when {
                        heading == null -> escape(PULL_REQUEST.replace(line) { "[#${it.groupValues[1]}](${it.value})" })
                        heading.equals("What's Changed", ignoreCase = true) -> null
                        else -> "**${escape(heading)}**"
                    }
                }
                .joinToString("\n")
                .replace(Regex("\n{3,}"), "\n\n")
                .trim()
        }

        /// Escapes what MDX reads as JSX, `<`, `{` and `}`, and as an empty link, `[Type]()`, outside of inline code.
        private fun escape(line: String): String = line.split('`').mapIndexed { i, part ->
            if (i % 2 == 1) part
            else part.replace("<", "&lt;").replace("{", "\\{").replace("}", "\\}").replace("]()", "]\\(\\)")
        }.joinToString("`")

        //language=markdown
        private val HEADER = """
            ---
            description: Release notes of the OpenRewrite modules in each release of the rewrite-recipe-bom.
            ---

            # Changelog

            Each release of the [rewrite-recipe-bom](https://github.com/openrewrite/rewrite-recipe-bom), OpenRewrite's bill of materials, aligns the versions of its modules.
            These are the release notes of the modules that changed in each release over the past year, taken from their GitHub releases.
            For the current version of each module, see the [latest versions of every OpenRewrite module](./reference/latest-versions-of-every-openrewrite-module.md).

        """.trimIndent()
    }
}
