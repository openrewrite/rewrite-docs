---
description: Sorts imports according to the source file's layout style
---

# OrderImports

## Java Definition

`OrderImports` performs the familiar action from IDEs. It sorts imports according to the source file's layout style, optionally removing unused imports.

By default, `OrderImports` infers the layout style from the `ImportLayoutStyle` stored on the `J.CompilationUnit`. If this is not present, it falls back on the IntelliJ IDEA default import layout style.

The source file's layout style can be overriden by setting a layout on `OrderImports` directly.

```java
Iterable<J.CompilationUnit> cus;

ImportLayoutStyle layout = ...

OrderImports o = new OrderImports();
o.setRemoveUnused(true);
o.setLayout(layout); // optional

Collection<Change> changes = new Refactor().visit(o).fix(cus);
```

## YAML Definition

```text
---
type: specs.org.openrewrite.org/v1beta/visitor
name: io.moderne.OrderImports
visitors:
  - org.openrewrite.java.OrderImports
```

