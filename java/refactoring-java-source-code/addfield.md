---
description: Add a new field to a class declaration.
---

# AddField

### Definition

`AddField` builds and adds a field to a class declaration. This transformation visitor is meant to be used on specific classes so it doesn't have a declarative form.

### Example

The following refactoring visitor adds a SLF4J `Logger` field to a class.

```java
public class AddLogger extends JavaRefactorVisitor {
  public J visitClassDecl(J.ClassDecl clazz) {
    if(needsLogger(clazz) && clazz
      .findFields("org.slf4j.Logger")
      .isEmpty()) {
      
      andThen(new AddField.Scoped(
        classDecl,
        emptyList(), // modifiers
        "org.slf4j.Logger",
        "logger", // field name
        "LoggerFactory.getLogger(" + clazz.getSimpleName() ".class)"
      ));
      
      // since this is used in the initializer above
      maybeAddImport("org.slf4j.LoggerFactory");
    }
    return super.visitClassDecl(clazz);
  }
  
  private boolean needsLogger(J.ClassDecl clazz) {
    // however this is determined...
  }
}
```



