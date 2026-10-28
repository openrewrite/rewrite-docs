package org.openrewrite.docs

/// Replaces the properties table between the markers in [page] with the one in the Gradle plugin's own [reference].
fun replaceGradlePluginProperties(page: String, reference: String): String {
    val table = reference.lines()
        .dropWhile { it.trim() != "### Properties" }
        .drop(1)
        .dropWhile { !it.startsWith("|") }
        .takeWhile { it.startsWith("|") }
    check(table.isNotEmpty()) { "No properties table found in the Gradle plugin reference" }

    return replaceBetweenMarkers(page, START_MARKER, END_MARKER, table.joinToString("\n"))
}

private const val START_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:START"
private const val END_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:END -->"
