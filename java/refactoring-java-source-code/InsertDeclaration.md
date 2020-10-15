---
description: Add a declaration to a class.
---

# InsertDeclaration

`InsertDeclaration` adds an inner class, field, or method declaration to a class, interface, or enum.

This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following code snippet uses `InsertDeclaration` to add the `setSomething()` method to a class.

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

List<J.CompilationUnit> cus = jp.parse("class A {\n}"); 
J.CompilationUnit cu = cus.get(0);

InsertDeclaration.Scoped id = InsertDeclaration.Scoped(
        cu.getClasses.get(0),
        new TreeBuilder(cu).buildDeclaration(
                cu.getClasses.get(0),
                "void setSomething() {}"
        )
    );

Collection<Change> changes = new Refactor().visit(id).fix(cus);
```

## Example

Before:
```java
class A {
}
```

After:
```java
class A {

    void setSomething() {}
}
```
