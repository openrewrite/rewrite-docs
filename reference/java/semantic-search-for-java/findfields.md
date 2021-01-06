---
description: Find class fields and variable declarations down scope.
---

# FindFields

### Definition

```java
J.CompilationUnit cu;

FindFields ff = new FindFields("java.util.logging.Logger");
List<J.VariableDecls> fields = ff.visit(cu);
```

`FindFields` takes a single parameter, `fullyQualifiedName`, with the field type to search for. In the actual code, the type on the field doesn't need to be fully qualified like this. Fields are found in every name scope below the tree given to the `visit` method. Rewrite's type attribution phase discovers which package the type is defined in even when star imports make this distinction not determinable from the source code alone, as in the following example.

```java
import java.util.logging.*;
import java.util.*;

class Sample {
  Logger logger; // matches
  
  void method() {
    Logger blockLevelLogger; // matches
  }
  
  class Inner {
    Logger logger; // matches
  }
}
```

`FindFields` does _not_ match on catch clause variables matching a type. So `new FindFields("java.lang.IllegalArgumentException")` would not match on the `e` variable in the following example.

```java
class Sample {
  {
    try {
      ...
    } catch(IllegalArgumentException e) { // no match
    }
  }
}
```

### Shortcut

A `findFields` method is also available on `J.ClassDecl`.

```java
J.ClassDecl clazz = ...
clazz.findFields("java.util.logging.Logger");
```

