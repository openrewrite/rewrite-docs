---
description: A quick check to see if there is any reference to a named type in a sub-tree.
---

# HasType

### Definition

`HasType` is a quick true/false check for whether a particular type is referenced explicitly by name in a sub-tree.

```java
J.CompilationUnit cu = ...
J.MethodDecl method = ...

// whether a type is referenced anywhere in a source file
boolean anywhereInFile = new HasType("java.util.logging.Logger")
  .visit(cu);
  
// whether a type is referenced in the method declaration or its implementation.
boolean anywhereInMethod = new HashType("java.util.logging.Logger")
  .visit(method);
```

Note that this does _not_ locate implicit uses of a type. Consider the following class:

```java
import java.util.logging.Logger;

class Sample {
    Logger logger;
    
    Logger getLogger() {
      return logger;
    }
    
    void method() {
      var logger2 = getLogger();
      logger.info("hi");
    }
}
```

The `J.MethodDecl` representing the method `getLogger` does refer to the type in its return expression.

The `J.MethodDecl` representing the method `method()` does _not_ refer to the type because the type name `Logger` does not occur anywhere in the method declaration or body, even though the body uses this type via the `logger` field and through the call to `getLogger()`.

