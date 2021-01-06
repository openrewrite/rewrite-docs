---
description: Add a set method for a particular field to a class.
---

# GenerateSetter

`GenerateSetter` adds a "set" method for a particular field to a class, interface, or enum. `GenerateSetter` requires that the field the "set" method is for already exist on the class as it uses the name and type of the field in generating the method.

This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following code snippet uses `GenerateSetter` to add the `setFoo()` method to a class with a field named `foo`.

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

List<J.CompilationUnit> cus = jp.parse("class A {\n    String foo;\n}"); 
J.CompilationUnit cu = cus.get(0);

GenerateSetter.Scoped gs = GenerateSetter.Scoped(cu.getClasses.get(0), "foo");

Collection<Change> changes = new Refactor().visit(gs).fix(cus);
```

## Example

Before:

```java
class A {
    String foo;
}
```

After:

```java
class A {
    String foo;

    void setFoo(String value) {
        foo = value;
    }
}
```

