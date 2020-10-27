---
description: >-
  Sorts declarations in a class body according to the source file's declaration
  order style
---

# OrderDeclarations

`OrderDeclarations` performs the familiar action from IDEs. It sorts imports according to the source file's layout style, optionally removing unused imports.

By default, `OrderDeclarations` infers the layout style from the `DeclarationOrderStyle` stored on the `J.CompilationUnit`. If this is not present, it falls back on the IntelliJ IDEA default import layout style.

The source file's layout style can be overriden by setting a layout on `OrderDeclarations` directly.

## Java Definition

```java
JavaParser jp = JavaParser.fromJavaVersion().build();

// Fill in arguments with Java sources to be refactored
List<J.CompilationUnit> cus = jp.parse(...);

DeclarationOrderStyle layout = ...

OrderDeclarations o = new OrderDeclarations();
o.setLayout(layout); // optional

Collection<Change> changes = new Refactor().visit(o).fix(cus);
```

## Declarative Definition

Adding the following to your rewrite.yml and setting the `com.yourorg.OrderDeclarationsRecipe` recipe as active in your build plugin will apply the `OrderDeclarations` visitor.

```yaml
---
type: specs.openrewrite.org/v1beta/visitor
name: io.moderne.OrderDeclarations
visitors:
  - org.openrewrite.java.OrderDeclarations
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.OrderDeclarationsRecipe
include:
  - 'com.yourorg.OrderDeclarations'
```

## Example

Before:

```java
class A {
    private final int unsettable = 1;
    private String s;
    private static final A internalA = new A();
    public static final A a = new A();
    private A() {}
    public A(String s) {
        this.s = s;
    }
    public void setS(String s) {
        this.s = s;
    }
    @Override
    public boolean equals(Object obj) {
        return true;
    }
    @Override
    public int hashCode() {
        return 42;
    }
    @Override
    public String toString() {
        return "a";
    }
    private void internalDetail() {}
    public String getS() {
        return this.s;
    }
    public A withS(String s) {
        return new A(s);
    }
}
```

After:

```java
class A {
    public static final A a = new A();

    private static final A internalA = new A();

    private final int unsettable = 1;

    private String s;

    public A(String s) {
        this.s = s;
    }

    private A() {}

    private void internalDetail() {}

    public String getS() {
        return this.s;
    }

    public void setS(String s) {
        this.s = s;
    }

    public A withS(String s) {
        return new A(s);
    }

    @Override
    public boolean equals(Object obj) {
        return true;
    }

    @Override
    public int hashCode() {
        return 42;
    }

    @Override
    public String toString() {
        return "a";
    }
}
```

