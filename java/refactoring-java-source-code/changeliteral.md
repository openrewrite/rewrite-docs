---
description: Transform a literal argument by applying a mapping function.
---

# ChangeLiteral

`ChangeLiteral` transforms Java literals according to a supplied `Function<Object, Object>`.
This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following refactoring visitor uses `ChangeLiteral` to replace instances of "%s" inside of string literals with "{}".

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

## Example 
Using the `BracketStringTemplates` defined above.

Before:
```java
class A {
    String curlies = "%s";
}
``` 

After:
```java
class A {
    String curlies = "{}";
}
```
