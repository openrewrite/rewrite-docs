package org.openrewrite.docs

import java.io.InputStream
import org.w3c.dom.Element

data class MavenPluginParameter(
    val name: String,
    val property: String?,
    val defaultValue: String?,
    val goals: List<String>,
    val description: String,
)

/// Reads the parameters of every goal but `help` from the Maven plugin's `plugin-enhanced.xml` [descriptor],
/// which unlike its `plugin.xml` keeps the HTML of the Javadoc descriptions.
fun mavenPluginParameters(descriptor: InputStream): List<MavenPluginParameter> {
    val mojos = parseXml(descriptor).child("mojos")!!.children("mojo").filter { it.text("goal") != "help" }
    return mojos
        .flatMap { mojo -> mojo.editableParameters().map { mojo to it } }
        .groupBy({ (_, parameter) -> parameter.text("name")!! }, { (mojo, parameter) -> mojo to parameter })
        .map { (name, declarations) ->
            val (mojo, parameter) = declarations.first()
            val configuration = mojo.child("configuration")?.child(name)
            MavenPluginParameter(
                name = name,
                property = configuration?.textContent?.trim()?.removeSurrounding("\${", "}"),
                defaultValue = configuration?.getAttribute("default-value")?.ifEmpty { null },
                goals = declarations.map { (mojo, _) -> mojo.text("goal")!! },
                description = markdown(parameter.text("description").orEmpty(), name),
            )
        }
        .sortedBy { it.name }
}

/// Renders [parameters] as a table of only two columns, with the user property, default and goals folded into
/// the others, as the code in separate columns cannot wrap and would make the table wider than the page.
fun mavenPluginParametersTable(parameters: List<MavenPluginParameter>): String {
    val allGoals = parameters.flatMap { it.goals }.toSet()
    return buildString {
        appendLine("| Parameter | Description |")
        appendLine("| --------- | ----------- |")
        for (parameter in parameters) {
            val name = listOfNotNull(parameter.name, parameter.property).joinToString("<br/>") { code(it) }
            val description = listOfNotNull(
                parameter.description,
                parameter.defaultValue?.let { "Defaults to ${code(it)}." },
                parameter.goals.takeIf { it.toSet() != allGoals }?.let(::onlyFor),
            ).joinToString(" ")
            appendLine("| $name | $description |")
        }
    }.trimEnd()
}

private fun onlyFor(goals: List<String>): String {
    val codes = goals.map { code(it) }
    val list = if (codes.size == 1) codes.single() else codes.dropLast(1).joinToString(", ") + " and " + codes.last()
    return "Only for the $list ${if (codes.size == 1) "goal" else "goals"}."
}

/// Replaces the parameters table between the markers in [page] with one for [parameters].
fun replaceMavenPluginParameters(page: String, parameters: List<MavenPluginParameter>): String =
    replaceBetweenMarkers(page, START_MARKER, END_MARKER, mavenPluginParametersTable(parameters))

private fun Element.editableParameters() =
    child("parameters")?.children("parameter").orEmpty().filter { it.text("editable") == "true" }

private val COMMENT = Regex("<!--.*?-->", RegexOption.DOT_MATCHES_ALL)
private val LINK = Regex("<a href=\"([^\"]*)\">(.*?)</a>", RegexOption.DOT_MATCHES_ALL)
private val CODE = Regex("<code>(.*?)</code>", RegexOption.DOT_MATCHES_ALL)
private val PARAGRAPH = Regex("</?p>")
private val ENTITY = Regex("&(#\\d+|lt|gt|amp|quot|apos);")
private val MDX_SPECIAL = Regex("[{}<>|]")

/// Converts the Javadoc HTML of the parameter [name] to Markdown that fits in an MDX table cell.
internal fun markdown(html: String, name: String): String {
    val withLinks = html.replace(COMMENT, "").replace(LINK) { "[${it.groupValues[2]}](${it.groupValues[1]})" }
    val markdown = buildString {
        var last = 0
        for (match in CODE.findAll(withLinks)) {
            append(text(withLinks.substring(last, match.range.first), name))
            append(code(decode(match.groupValues[1])))
            last = match.range.last + 1
        }
        append(text(withLinks.substring(last), name))
    }
    return markdown.replace(Regex("\\s+"), " ").trim()
}

private fun text(html: String, name: String): String {
    val withoutParagraphs = html.replace(PARAGRAPH, " ")
    check('<' !in withoutParagraphs) { "Unsupported HTML in the description of $name: $html" }
    return decode(withoutParagraphs).replace(MDX_SPECIAL) { "\\" + it.value }
}

private fun code(text: String) = "`" + text.replace("|", "\\|") + "`"

private fun decode(html: String) = html.replace(ENTITY) {
    when (val entity = it.groupValues[1]) {
        "lt" -> "<"
        "gt" -> ">"
        "amp" -> "&"
        "quot" -> "\""
        "apos" -> "'"
        else -> entity.drop(1).toInt().toChar().toString()
    }
}

private const val START_MARKER = "<!-- AUTO-GENERATED-MAVEN-PARAMETERS:START"
private const val END_MARKER = "<!-- AUTO-GENERATED-MAVEN-PARAMETERS:END -->"
