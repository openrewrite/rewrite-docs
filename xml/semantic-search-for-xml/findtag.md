---
description: Find the first matching tag on an XML document by XPath
---

# FindTag

### Definition

```java
Xml.Document xml;

FindTag ft = new FindTag("/dependencies/dependency");
Xml.Tag tag = ft.visit(xml);
```

`FindTag` takes a single parameter, `xpath`, with the tag to search for. Applied to the following example, it locates the `<dependency>` tag.

```markup
<?xml version="1.0" encoding="UTF-8"?>
<dependencies>
  <dependency>
    <artifactId scope="compile">org.openrewrite</artifactId>
  </dependency>
</dependency>
```

