---
description: Add an interface implementation to a class declaration.
---

# ImplementInterface

### Definition

`ImplementInterface` adds an interface extension to a class declaration if it does not already extend from this interface. It also adds an import for the interface type, if necessary. This transformation visitor is meant to be used on specific classes and so it doesn't have a declarative form.

### Example

The following transforming visitor adds a `Serializable` interface to a data class.

```java
public class AddSerializable extends JavaRefactorVisitor {
  public J visitClassDecl(J.ClassDecl classDecl) {
    andThen(new ImplementInterface.Scoped(
      classDecl,
      "java.io.Serializable"
    ));
    return super.visitClassDecl(classDecl);
  }
}
```

