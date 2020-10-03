# ChangeTagValue

## Java Definition

`ChangeTagValue` alters the contents of a tag. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Example

```java
String xmlDocumentContents = ...; // Filled in with the contents of an xml document
Xml.Document xml = new XmlParser()
    .parse(xmlDocumentContents)
    .iterator()
    .next();

Change fixed = new Refactor()
    .visit(new ChangeTagValue.Scoped((Xml.Tag) xml.getRoot.getContent().get(0), "2.0"))
    .fixed(xml)
    .iterator()
    .next();
```

Before:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<dependency>
    <version/>
</dependency>
```

After:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<dependency>
    <version>2.0</version>
</dependency>
```

