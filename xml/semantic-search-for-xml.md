# Semantic Search for XML

Rewrite provides high-level building block search functionality for the most common search needs. Additionally, you can build a custom [visitor](../v1beta/visitor.md) to build custom search logic, potentially composing some of these building blocks.

* Find single tag
* Find tags

### Search helpers

Several search shortcuts exist on `Xml.Tag`:

* `Optional<Xml.Tag> getChild(String name)` - Look for a child \(a direct descendant\) with a tag name. Return the first match if there are more than one.
* `List<Xml.Tag> getChildren(String name)` - Look for children \(a direct descendant\) with a tag name.
* `List<Xml.Tag> getChildren()` - Get all direct children of the tag.
* `Optional<String> getValue()` - If this tag's content is only character data, consider it the value.
* `Optional<String> getChildValue()` - A shortcut for `getChild(name)` and then `getValue()`.
* `Optional<Xml.Tag> getSibling(String name, Cursor cursor)` - Find a sibling \(at the same hierarchical level\) with a particular name.

