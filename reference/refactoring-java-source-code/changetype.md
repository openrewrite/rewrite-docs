# java.ChangeType

### Definition

* Fully qualified name: `org.openrewrite.java.ChangeType`
* Included in module: `org.openrewrite:rewrite-java`

### Description

Change type changes type references anywhere they occur \(variable declarations, generic parameters, return types, class extension/implementation, etc. Also corrects any import statements as necessary.

### Parameters

* `type` - The fully qualified type name that should be changed.
* `targetType` - The fully qualified type name to change to.

The type name doesn't have to be fully qualified in the source code to match. Rewrite looks at the type attributed to a particular identifier in the source code to see whether it represents the type that should change.

### Declarative Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: NAMEME
visitors:
  - org.openrewrite.java.ChangeType:
    type: java.util.List
    targetType: java.util.Collection
```

### Example

Before:

```java
import java.util.List;

class A {
  List<String> list;
}
```

After:

```java
import java.util.Collection;

class A {
  Collection<String> list;
}
```

