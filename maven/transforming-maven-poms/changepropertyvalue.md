---
description: Updates a Maven property value.
---

# ChangePropertyValue

### Definition

`ChangePropertyValue` replaces a property value.

```java
Iterable<Maven.Pom> poms;

ChangePropertyValue cpv = new ChangePropertyValue();
cpv.setKey("java.version");
cpv.setToValue("11");

Collection<Change> changes = new Refactor().visit(cpv).fix(poms);
```

* `key` - The property key to update.
* `toValue`- The desired value. 

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.UpdateJavaVersion
visitors:
  - org.openrewrite.maven.ChangePropertyVersion:
    key: java.version
    toValue: 11
```

### Example

Before:

```markup
<project>
   ...
   <properties>
     <java.version>1.8</java.version>
   </properties>
</project>
```

After:

```markup
<project>
   ...
   <properties>
      <java.version>11</java.version>
   </properties>
</project>
```

