---
description: >-
  High-level abstractions are provided to perform common refactoring tasks on
  Java source code.
---

# Transforming Java Code

The basic building blocks are included in the [refactor](https://github.com/openrewrite/rewrite/tree/master/rewrite-java/src/main/java/org/openrewrite/java/refactor) package, which are detailed in the subsequent pages, include:

* Add annotation to a class, method, or variable.
* Add a field to a class.
* Add/remove an import, which can be configured to expand/collapse star imports.
* Change field name \(including its references, even across other source files that _use_ this field not just where the field is defined\).
* Change a field type.
* Change a literal expression.
* Change a method name, including anywhere that method is referenced.
* Change a method target to a static from instance method.
* Change a method target to an instance method from a static.
* Change a type reference, anywhere it is found in the tree.
* Insert/delete method arguments.
* Delete any statement.
* Generate constructors using fields.
* Rename a variable.
* Reorder method arguments.
* Unwrap parentheses.
* Implement an interface.

Each one of these operations is defined as a `JavaRefactorVisitor`designed for mutating the AST, ultimately leading to a `Change` object at the end of the refactoring operation.

