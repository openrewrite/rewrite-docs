---
description: Sorts imports according to the source file's layout style
---

# OrderImports

`OrderImports` performs the familiar action from IDEs. It sorts imports according to the source file's layout style, optionally removing unused imports.

By default, `OrderImports` infers the layout style from the `ImportLayoutStyle` stored on the `J.CompilationUnit`. If this is not present, it falls back on the IntelliJ IDEA default import layout style.

The source file's layout style can be overriden by setting a layout on `OrderImports` directly.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

ImportLayoutStyle layout = ...

OrderImports o = new OrderImports();
o.setRemoveUnused(true);
o.setLayout(layout); // optional

Collection<Change> changes = new Refactor().visit(o).fix(cus);
```

## YAML Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.OrderImportsRecipe` recipe as active in your build plugin will apply the `OrderImports` visitor.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: com.yourorg.OrderImports
visitors:
  - org.openrewrite.java.OrderImports
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.OrderImportsRecipe
include:
  - 'com.yourorg.OrderImports'
```


## Example 
Before:
```java
import static java.util.stream.Collectors.joining;
import java.util.ArrayList;
import java.util.regex.Pattern;
import java.util.Objects;
import java.util.Set;
import org.openrewrite.java.tree.JavaType;
import org.openrewrite.java.tree.TypeUtils;

class A {}
```
After:
```java
import org.openrewrite.java.tree.JavaType;
import org.openrewrite.java.tree.TypeUtils;

import java.util.ArrayList;
import java.util.Objects;
import java.util.Set;
import java.util.regex.Pattern;

import static java.util.stream.Collectors.joining;

class A {}
```