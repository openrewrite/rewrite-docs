---
description: Find all matching tags on an XML document by XPath
---

# FindTags

## Definition

```java
Xml.Document xml;

FindTags ft = new FindTags("/dependencies/dependency");
List<Xml.Tag> tags = ft.visit(xml);
```

`FindTag` takes a single parameter, `xpath`, with the tag to search for. Applied to the following example, it locates both `<dependency>` tags.

```markup
<?xml version="1.0" encoding="UTF-8"?>
<dependencies>
  <dependency>
    <artifactId scope="compile">org.openrewrite</artifactId>
  </dependency>
  <dependency>
    <artifactId scope="compile">io.moderne</artifactId>
  </dependency>
</dependency>
```

