---
description: Generate a constructor using fields.
---

# GenerateConstructorUsingFields

`GenerateConstructorUsingFields` adds a new constructor to the specified class based on one or more fields on that class. This refactoring visitor is a building block for more complex visitors, so it does not have a declarative form.

## Java Definition

The following refactoring visitor builds a new constructor using all the fields found in a class.

```java
public class AllArgsConstructor extends JavaIsoRefactorVisitor {
  private JavaParser jp;

  public boolean isIdempotent() {
    // so we don't generate multiple identical constructors.
    // this simplifies the example by not having to check if a
    // constructor already exists each cycle.
    return false;
  }

  public J.CompilationUnit visitCompilationUnit(J.CompilationUnit cu) {
    jp = JavaParser.fromJavaVersion()
      .styles(cu.getStyles())
      .build();
    return super.visitCompilationUnit(cu);
  }

  public J.ClassDecl visitClassDecl(J.ClassDecl classDecl) {
    andThen(new GenerateConstructorUsingFields.Scoped(
      jp,
      classDecl,
      classDecl.getFields()
    ));
    return super.visitClassDecl(classDecl);
  }
}
```

## Example

Applying the `AllArgsConstructor` visitor defined above.

Before:

```java
public class UsersController {
    private final UsersService usersService;
    private final UsernameService usernameService;

    public User findUser(String name) {
    }
}
```

After:

```java
public class UsersController {
    private final UsersService usersService;
    private final UsernameService usernameService;

    public UsersController(UsersService usersService, UsernameService usernameService) {
        this.usersService = usersService;
        this.usernameService = usernameService;
    }

    public User findUser(String name) {
    }
}
```

