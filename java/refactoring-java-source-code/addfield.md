---
description: Add a new field to a class declaration.
---

# AddField

`AddField` builds and adds a field to a class declaration. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following refactoring visitor uses `AddLogger` adds a SLF4J `Logger` field to a class.

```java
public class AddLogger extends JavaRefactorVisitor {
  public J visitClassDecl(J.ClassDecl clazz) {
    if(needsLogger(clazz) && clazz
      .findFields("org.slf4j.Logger")
      .isEmpty()) {

      andThen(new AddField.Scoped(
        clazz,
        emptyList(), // modifiers
        "org.slf4j.Logger",
        "logger", // field name
        "LoggerFactory.getLogger(" + clazz.getSimpleName() + ".class);" // Assignment expression
      ));

      // since this is used in the initializer above
      maybeAddImport("org.slf4j.LoggerFactory");
    }
    return super.visitClassDecl(clazz);
  }

  private boolean needsLogger(J.ClassDecl clazz) {
    // however this is determined for your project
  }
}
```

## Example

Using the `AddLogger` class above, assuming its `needsLogger()` returns true for this example class.

Before:

```java
class A {
}
```

After:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class A {
    Logger logger = LoggerFactory.getLogger(A.class);
}
```

