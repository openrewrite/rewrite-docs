package org.openrewrite.docs

import java.io.InputStream
import javax.xml.parsers.DocumentBuilderFactory
import org.w3c.dom.Element

internal fun parseXml(xml: InputStream): Element =
    DocumentBuilderFactory.newInstance().newDocumentBuilder().parse(xml).documentElement

internal fun Element.children(): List<Element> {
    val nodes = childNodes
    return (0 until nodes.length).map(nodes::item).filterIsInstance<Element>()
}

internal fun Element.children(name: String): List<Element> = children().filter { it.tagName == name }

internal fun Element.child(name: String): Element? = children(name).firstOrNull()

internal fun Element.text(name: String): String? = child(name)?.textContent?.trim()
