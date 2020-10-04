---
description: 'Add an annotation to a class, method, or variable.'
---

# AddAnnotation

`AddAnnotation` builds and adds an annotation to a class, method declaration, or variable. 
This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form. 

## Java Definition

The following refactoring visitor uses `AddAnnotation` to add the [API guardian](https://github.com/apiguardian-team/apiguardian) annotation to public API signatures.

```java
public class MarkPublicApiMethods extends JavaRefactorVisitor {
  public J visitMethodDecl(J.MethodDecl method) {
    if(isPublicApi(method) && method
        .findAnnotations("@org.apiguardian.api.API")
        .isEmpty()) {
      
      andThen(new AddAnnotation.Scoped(
        method,
        JavaType.Class.build("org.apiguardian.api.API"),
        emptyList() // annotation arguments
      ));
    }
    return super.visitMethodDecl(method);
  }
  
  private boolean isPublicApi(J.MethodDecl method) {
    // however this is determined for your project
  }
}
```

## Example
Using the `MarkPublicApiMethods` class above, assuming its `isPublicApi()` function returns `true` for this example.

Before:
```java
public class A {
    public void partOfThePublicApi() {
    }
}
```
After:
```java
import org.apiguardian.api.API;

public class A {
    @API
    public void partOfThePublicApi() {
    }
}
```
