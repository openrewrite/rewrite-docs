---
description: Change the name of a field with a particular name and type.
---

# ChangeFieldName

### Definition

`ChangeFieldName` changes the name of a field with a particular name and type. It also updates any references to that field with the new name. This transformation visitor is meant to be used on specific classes so it doesn't have a declarative form.

### Example

The following refactoring visitor changes fields of SLF4J `Logger` to have a consistent name.

```java
import static org.openrewrite.java.tree.TypeUtils.isOfClassType;

public class ConsistentLoggerName extends JavaRefactorVisitor {
  public J visitVariableDecls(J.VariableDecls v) {
    if(isOfClassType(v.getTypeAsClass(), "org.slf4j.Logger")) {      
      v.getVars().stream()
        .map(J.VariableDecls.NamedVar::getSimpleName)
        .filter(n -> !n.equals("logger"))
        .forEach(n -> andThen(new ChangeFieldName.Scoped(
          JavaType.Class.build("org.slf4j.Logger"), 
          n,  // the bad name
          "logger" // the name we want
        )));
    }
    return super.visitClassDecl(clazz);
  }
}
```

