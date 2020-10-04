---
description: 'Change all references to a type, adjusting imports as necessary.'
---

# ChangeType
`ChangeType` changes type references anywhere they occur (variable declarations, generic parameters, return types, class extension/implementation, etc.)
It updates import statements as necessary.

`ChangeType` is configured with these arguments:

* `type` - The fully qualified name of the type to replace.
* `targetType` - The fully qualified name of the type to change to.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

ChangeType ct = new ChangeType();
ct.setType("java.util.List");
ct.setTargetType("java.util.Collection");

Collection<Change> changes = new Refactor().visit(ct).fix(cus);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.ListToCollectionRecipe` recipe as active in 
your build plugin will apply the `ChangeType` visitor configured to replace `List` with `Collection`. 

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.ListToCollection
visitors:
  - org.openrewrite.java.ChangeType:
    type: java.util.List
    targetType: java.util.Collection
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ListToCollectionRecipe
include:
  - 'com.yourorg.ListToCollection'
```

## Example

Before:

```java
import java.util.List;

class Sample {
  List<String> strings;
}
```

After:

```java
import java.util.Collection;

class Sample {
  Collection<String> strings;
}
```

