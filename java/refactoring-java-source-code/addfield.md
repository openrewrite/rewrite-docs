---
description: Add a new field to a class declaration.
---

# AddField

`AddField` builds and adds a field to a class declaration. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following refactoring visitor uses `AddField` to add a SLF4J `Logger` field to a class.
Note that the initializing expression `"LoggerFactory.getLogger(" + clazz.getSimpleName() + ".class)"` is provided as plain text, rather than as an AST element.
This is for convenience but does have some consequences which must be accounted for.
`AddField` doesn't know that the symbol "LoggerFactory" refers to `org.slf4j.LoggerFactory` so it can't automatically type-attribute the corresponding AST element.
To compensate for this limitation, the example uses `AddImport` to add the appropriate import.


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
        "LoggerFactory.getLogger(" + clazz.getSimpleName() + ".class)"
      ));
      // Add import for "LoggerFactory" since that symbol is referenced in the initializing expression
      AddImport addImport = new AddImport();
      addImport.setType("org.slf4j.LoggerFactory");
      addImport.setOnlyIfReferenced(false); 
      andThen(addImport);
    }
    return super.visitClassDecl(clazz);
  }
  
  private boolean needsLogger(J.ClassDecl clazz) {
    // however this is determined...
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

