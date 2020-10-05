---
description: >-
  Sorts declarations in a class body according to the source file's declaration
  order style
---

# OrderDeclarations

## Definition

`OrderDeclarations` performs the familiar action from IDEs. It sorts imports according to the source file's layout style, optionally removing unused imports.

By default, `OrderDeclarations` infers the layout style from the `DeclarationOrderStyle` stored on the `J.CompilationUnit`. If this is not present, it falls back on the IntelliJ IDEA default import layout style.

The source file's layout style can be overriden by setting a layout on `OrderDeclarations` directly.

```java
Iterable<J.CompilationUnit> cus;

DeclarationOrderStyle layout = ...

OrderDeclarations o = new OrderDeclarations();
o.setLayout(layout); // optional

Collection<Change> changes = new Refactor().visit(o).fix(cus);
```

## Declarative Definition

```text
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.OrderDeclarations
visitors:
  - org.openrewrite.java.OrderDeclarations
```

