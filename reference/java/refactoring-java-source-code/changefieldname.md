---
description: Change the name of a field with a particular name and type.
---

# ChangeFieldName

`ChangeFieldName` changes the name of a field with the specified name and type. It also updates any references to that field with the new name. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following refactoring visitor changes fields of SLF4J `Logger` to have a consistent name.

```java
import static org.openrewrite.java.tree.TypeUtils.isOfClassType;

public class ConsistentLoggerName extends JavaIsoRefactorVisitor {
  public J.VariableDecls visitVariableDecls(J.VariableDecls v) {
    if(isOfClassType(v.getTypeAsClass(), "org.slf4j.Logger")) {      
      v.getVars().stream()
        .map(J.VariableDecls.NamedVar::getSimpleName)
        .filter(n -> !n.equals("logger"))
        .forEach(n -> andThen(new ChangeFieldName.Scoped(
          JavaType.Class.build("org.slf4j.Logger"), 
          n,  // the current name
          "logger" // the desired name
        )));
    }
    return super.visitClassDecl(clazz);
  }
}
```

## Example

Using the `ConsistentLoggerName` defined above.

Before:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class A {
    private static Logger log = LoggerFactory.getLogger(A.class); 
}
```

After:

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class A {
    private static Logger logger = LoggerFactory.getLogger(A.class); 
}
```

