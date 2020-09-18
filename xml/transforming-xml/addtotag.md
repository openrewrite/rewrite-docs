# AddToTag

## Java Definition

`AddToTag` adds a new tag to the specified node within the xml document. This transforming visitor is a building block for more complex visitors, so it does not have a declarative form.

## Example

The following transforming visitor adds a SLF4J `Logger` field to a class.

```java
String xmlDocumentContents = ...; // Filled in with the contents of an xml document
Xml.Document x = new XmlParser().parse(xmlDocumentContents).iterator().next();

Collection<Change> changes = new Refactor()
  .visit(new AddToTag.Scoped(x.root, "<bean id=\"myBean2\"/>"))
  .fixed(x);
```

Before:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<beans >
    <bean id="myBean"/>
</beans>
```

After:

```markup
<?xml version="1.0" encoding="UTF-8"?>
<beans >
    <bean id="myBean"/>
    <bean id="myBean2"/>
</beans>
```

