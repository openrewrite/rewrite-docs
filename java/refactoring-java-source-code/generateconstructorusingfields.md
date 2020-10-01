---
description: Generate a constructor using fields.
---

# GenerateConstructorUsingFields

### Definition

`GenerateConstructorUsingFields` builds a new constructor if necessary. This transformation visitor is meant to be used on specific classes and so it doesn't have a declarative form. This visitor is also generative, so requires a `JavaParser`, which can be built from the styles preserved on the top-level `J.CompilationUnit`.

### Example

The following refactoring visitor builds a new constructor using all the fields found in a class.

```java
public class AllArgsConstructor extends JavaRefactorVisitor {
  private JavaParser jp;
  
  public boolean isIdempotent() {
    // so we don't generate multiple identical constructors.
    // this simplifies the example by not having to check if a
    // constructor already exists each cycle.
    return false;
  }

  public J visitCompilationUnit(J.CompilationUnit cu) {
    jp = JavaParser.fromJavaVersion()
      .styles(cu.getStyles())
      .build();
    return super.visitCompilationUnit(cu);
  }

  public J visitClassDecl(J.ClassDecl classDecl) {
    andThen(new GenerateConstructorUsingFields.Scoped(
      jp,
      classDecl,
      classDecl.getFields()
    ));
    return super.visitClassDecl(classDecl);
  }
}
```

