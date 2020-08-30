---
description: Transform a literal argument by applying a mapping function.
---

# ChangeLiteral



### Definition

`ChangeLiteral` transforms Java literals with . This transformation visitor is meant to be used on specific classes so it doesn't have a declarative form. `ChangeLiteral` automatically performs normalization and escaping of values returned by the mapping function for writing back to the source file.

### Example

The following transforming visitor updates a string templating mechanism.

```java
public class BracketStringTemplates extends JavaRefactorVisitor {
  public J visitLiteral(J.Literal lit) {
    if(lit.getType().equals(JavaType.Primitive.String) &&
      lit.getValue().toString().contains("%s")) {
      
      andThen(new ChangeLiteral.Scoped(
        lit, 
        s -> s.toString().replace("%s", "{}")
      )); 
    }
    return super.visitLiteral(lit);
  }
}
```

