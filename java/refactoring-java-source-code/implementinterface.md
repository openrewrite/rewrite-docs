---
description: Add an interface implementation to a class declaration.
---

# ImplementInterface

`ImplementInterface` adds an interface extension to a class declaration if it does not already extend from this interface. It also adds an import for the interface type, if necessary. While this adds the `implements <interface>` to the class definition, it makes no effort to provide implementations for any methods which may be part of the new interface. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following refactoring visitor adds a `Serializable` interface to a data class.

```java
public class AddSerializable extends JavaIsoRefactorVisitor {
  public J.ClassDecl visitClassDecl(J.ClassDecl classDecl) {
    andThen(new ImplementInterface.Scoped(
      classDecl,
      "java.io.Serializable"
    ));
    return super.visitClassDecl(classDecl);
  }
}
```

## Example

Using the `AddSerializable` defined above.

Before:

```java
class A {
}
```

After:

```java
import java.io.Serializable;

class A implements Serializable {
}
```

