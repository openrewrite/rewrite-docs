---
description: 'Like ChangeType, but only applies to field definitions.'
---

# ChangeFieldType

### Java Definition

`ChangeFieldType` changes fields from one type to another. It also corrects any import statements as necessary.

```java
Iterable<J.CompilationUnit> cus;

ChangeFieldType cft = new ChangeFieldType();
cft.setType("java.util.logging.Logger");
cft.setTargetType("org.slf4j.Logger");

Collection<Change> changes = new Refactor().visit(cft).fix(cus);
```

* `type` - The fully qualified type name that should be changed.
* `targetType` - The fully qualified type name to change to.

The type name doesn't have to be fully qualified in the source code to match. Rewrite looks at the type attributed to a particular identifier in the source code to see whether it represents the type that should change.

### YAML Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.JultoSlf4j
visitors:
  - org.openrewrite.java.ChangeFieldType:
    type: java.util.logging.Logger
    targetType: org.slf4j.Logger
```

### Example

Before:

```java
import java.util.logging.Logger;

class Sample {
  Logger logger;
}
```

After:

```java
import org.slf4j.Logger;

class Sample {
  Logger logger;
}
```

