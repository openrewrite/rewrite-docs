---
description: 'Change all references to a type, adjusting imports as necessary.'
---

# ChangeType

## Java Definition

`ChangeType` changes type references anywhere they occur \(variable declarations, generic parameters, return types, class extension/implementation, etc. It also corrects any import statements as necessary.

```java
Iterable<J.CompilationUnit> cus;

ChangeType ct = new ChangeType();
ct.setType("java.util.List");
ct.setTargetType("java.util.Collection");

Collection<Change> changes = new Refactor().visit(ct).fix(cus);
```

* `type` - The fully qualified type name that should be changed.
* `targetType` - The fully qualified type name to change to.

The type name doesn't have to be fully qualified in the source code to match. Rewrite looks at the type attributed to a particular identifier in the source code to see whether it represents the type that should change.

## YAML Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.ListToCollection
visitors:
  - org.openrewrite.java.ChangeType:
    type: java.util.List
    targetType: java.util.Collection
```

## Example

Before:

```java
import java.util.List;

class Sample {
  List<String> list;
}
```

After:

```java
import java.util.Collection;

class Sample {
  Collection<String> list;
}
```

