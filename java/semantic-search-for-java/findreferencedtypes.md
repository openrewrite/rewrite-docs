---
description: List the types that are referred to explicitly in a sub-tree.
---

# FindReferencedTypes

### Definition

`FindReferencedTypes` lists all fully qualified class names referred to by a sub-tree. It does list primitive types referred to.

```java
J.CompilationUnit cu = ...

// all the types referred to in a source file
Set<JavaType.Class> anywhereInFile = new FindReferencedTypes("java.util.logging.Logger")
  .visit(cu);
```

Note that this does _not_ include implicit uses of a type. Consider the following class:

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

The `J.MethodDecl` representing the method `getLogger` returns a set including the class `java.util.logging.Logger`.

The `J.MethodDecl` representing the method `method()` returns an empty set, even though the body uses the `java.util.logging.Logger` type via the `logger` field and through the call to `getLogger()`. There are no explicit type names anywhere in either the method declaration or body.

