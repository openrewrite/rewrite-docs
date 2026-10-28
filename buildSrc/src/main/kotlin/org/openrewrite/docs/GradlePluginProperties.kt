package org.openrewrite.docs

/// Replaces the properties table between the markers in [page] with the one in the Gradle plugin's own [reference].
fun replaceGradlePluginProperties(page: String, reference: String): String {
    val table = reference.lines()
        .dropWhile { it.trim() != "### Properties" }
        .drop(1)
        .dropWhile { !it.startsWith("|") }
        .takeWhile { it.startsWith("|") }
    check(table.isNotEmpty()) { "No properties table found in the Gradle plugin reference" }

    val start = page.indexOf(START_MARKER)
    val end = page.indexOf(END_MARKER)
    check(start != -1 && end != -1) { "No $START_MARKER and $END_MARKER markers found" }
    val startLineEnd = page.indexOf('\n', start) + 1
    return page.substring(0, startLineEnd) + "\n" + table.joinToString("\n") + "\n\n" + page.substring(end)
}

private const val START_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:START"
private const val END_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:END -->"
