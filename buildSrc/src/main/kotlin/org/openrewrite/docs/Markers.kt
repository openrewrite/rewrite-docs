package org.openrewrite.docs

/// Replaces everything between the line holding [startMarker] and the [endMarker] in [page] with [content].
fun replaceBetweenMarkers(page: String, startMarker: String, endMarker: String, content: String): String {
    val start = page.indexOf(startMarker)
    val end = page.indexOf(endMarker)
    check(start != -1 && end != -1) { "No $startMarker and $endMarker markers found" }
    val startLineEnd = page.indexOf('\n', start) + 1
    return page.substring(0, startLineEnd) + "\n" + content + "\n\n" + page.substring(end)
}
