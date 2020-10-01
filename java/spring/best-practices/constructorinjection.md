# ConstructorInjection

> "Always use constructor injection. Every time you use @Autowired field injection a unit test dies." -- Josh Long

Starting with Spring 4.3, `@Autowired` is no longer required on constructors. This made using tools like Lombok and IDEs to generate constructors off of required \(final\) fields generally more useful. Field injection fell out of favor as the preferred mode of dependency injection.

The `ConstructorInjection` visitor removes [@Autowired](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Autowired.html) from fields, adding parameters to the constructor as necessary. This visitor is compatible with the Lombok annotation processor. If Lombok is present, then the class being refactored will have [@RequiredArgsConstructor](https://projectlombok.org/api/lombok/RequiredArgsConstructor.html) annotation applied, rather than having a constructor generated. This visitor is aware of the `@javax.annotation.Nonnull` annotation and will apply it to fields previously annotated with `@Autowired(required = false)`.

There is no required or optional configuration for this visitor.

## Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-beans")
    .build();

Collection<Change> changes = new Refactor()
    .visit(new ConstructorInjection())
    .fix(jp.parse(javaSourceCodeToBeRefactored))

String refactoredJavaSource = changes.get(0).getFixed().print();
```

## YAML Definition

No recipe distributed by Rewrite currently includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.spring.ConstructorInjection
```

## Example

### Before

```java
import org.springframework.beans.factory.annotation.Autowired;

public class UsersController {
    @Autowired(required = false)
    private UsersService usersService;

    @Autowired
    UsernameService usernameService;
}
```

### After

```java
import javax.annotation.Nonnull;

public class UsersController {
    @Nonnull
    private final UsersService usersService;

    private final UsernameService usernameService;

    public UsersController(UsersService usersService, UsernameService usernameService) {
        this.usersService = usersService;
        this.usernameService = usernameService;
    }
}
```

