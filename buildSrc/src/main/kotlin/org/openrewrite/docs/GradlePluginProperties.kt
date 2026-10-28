package org.openrewrite.docs

/// Replaces the properties table between the markers in [page] with the one in the Gradle plugin's own [reference],
/// reshaped like the Maven plugin parameters table to fit the width of the page.
fun replaceGradlePluginProperties(page: String, reference: String): String {
    val table = reference.lines()
        .dropWhile { it.trim() != "### Properties" }
        .drop(1)
        .dropWhile { !it.startsWith("|") }
        .takeWhile { it.startsWith("|") }
    check(table.isNotEmpty()) { "No properties table found in the Gradle plugin reference" }
    check(cells(table.first()) == listOf("Property", "Type", "Default", "Description")) {
        "Unexpected columns in the Gradle plugin properties table: ${table.first()}"
    }

    return replaceBetweenMarkers(page, START_MARKER, END_MARKER, gradlePluginPropertiesTable(table.drop(2).map(::cells)))
}

private fun gradlePluginPropertiesTable(rows: List<List<String>>) = buildString {
    appendLine("| Property | Description |")
    appendLine("| -------- | ----------- |")
    for ((property, type, default, description) in rows) {
        val defaults = if (description.contains("defaults to", ignoreCase = true)) "" else " Defaults to ${lowercaseFirstLetter(default)}."
        appendLine("| $property<br/>$type | $description$defaults |")
    }
}.trimEnd()

private val FIRST_LETTER = Regex("^\\[?[A-Z]")

private fun lowercaseFirstLetter(text: String) = FIRST_LETTER.replace(text) { it.value.lowercase() }

private val CELL_SEPARATOR = Regex("(?<!\\\\)\\|")

private fun cells(row: String) = row.trim().removeSurrounding("|").split(CELL_SEPARATOR).map { it.trim() }

private const val START_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:START"
private const val END_MARKER = "<!-- AUTO-GENERATED-GRADLE-PROPS:END -->"
