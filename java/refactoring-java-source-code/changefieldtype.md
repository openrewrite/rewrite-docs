---
description: 'Like ChangeType, but only applies to field definitions.'
---

# ChangeFieldType

`ChangeFieldType` changes fields from one type to another.
It updates import statements as necessary.

`ChangeFieldType` is configured with these arguments:

* `type` - The fully qualified name of the type to be changed.
* `targetType` - The fully qualified type name to change to.

The type name doesn't have to be fully qualified in the source code to match.
Rewrite looks at the type attributed to a particular identifier in the source code to see whether it represents the type that should change.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

ChangeFieldType cft = new ChangeFieldType();
cft.setType("java.util.logging.Logger");
cft.setTargetType("org.slf4j.Logger");

Collection<Change> changes = new Refactor().visit(cft).fix(cus);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.UseSlf4jRecipe` recipe as active in 
your build plugin will apply a `ChangeFieldType` visitor  configured to swap `java.util.logging.Logger` for `org.slf4j.Logger`.  
```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.UseSlf4j
visitors:
  - org.openrewrite.java.ChangeFieldType:
    type: java.util.logging.Logger
    targetType: org.slf4j.Logger
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseSlf4jRecipe
include:
  - 'com.yourorg.UseSlf4j'

```

## Example
This example applies `ChangeFieldType` configured to swap `java.util.logging.Logger` for `org.slf4j.Logger`. 

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
