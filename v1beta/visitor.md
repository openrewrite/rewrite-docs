---
description: >-
  Observes each element of an AST and reduces all these observations to a single
  value.
---

# Visitors

### Reduction

You define a default return with `defaultTo` and can provide a custom reduction operation by overriding `reduce` on the visitor.

### Invoking Visitors

Invoke a custom visitor by instantiating the visitor and calling `visit` on the root AST node. A visitor can return any type.

```java
J.CompilationUnit cu = ...;

// this visitor can return any type you wish, ultimately
// being a reduction of visiting every AST element
new MyCustomVisitor().visit(cu);
```

### Next Steps

In [Recipes](recipes.md) we'll talk about how refactoring visitors can be grouped together to form recipes which encapsulate individual operations into a suite of transformations to accomplish a complete migration or fix.

