---
description: 'Add an annotation to a class, method, or variable.'
---

# AddAnnotation

### Definition

`AddAnnotation` builds and adds an annotation to a class, method declarations, or variable. This transformation visitor is meant to be used on specific classes, methods, or variables and so it doesn't have a declarative form. 

### Example

The following refactoring visitor adds the [API guardian](https://github.com/apiguardian-team/apiguardian) annotation to public API signatures.

```java
public class MarkPublicApiMethods extends JavaRefactorVisitor {
  public J visitMethodDecl(J.MethodDecl method) {
    if(isPublicApi(method) && method
      .findAnnotations("org.apiguardian.api.API")
      .isEmpty()) {
      
      andThen(new AddAnnotation.Scoped(
        classDecl,
        JavaType.Class.build("org.apiguardian.api.API"),
        emptyList() // annotation arguments
      ));
    }
    return super.visitMethodDecl(method);
  }
  
  private boolean isPublicApi(J.MethodDecl method) {
    // however this is determined...
  }
}
```

