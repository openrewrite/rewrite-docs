# ImplicitWebAnnotationNames

The `ImplicitWebAnnotationNames` visitor removes redundant value declarations from 
[@PathVariable](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/PathVariable.html),
[@RequestParam](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestParam.html),
[@RequestHeader](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestHeader.html),
[@RequestAttribute](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestAttribute.html),
[@CookieValue](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/CookieValue.html),
[@ModelAttribute](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/ModelAttribute.html),
and [@SessionAttribute](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/SessionAttribute.html)
annotations.

There is no required or optional configuration for this visitor.

### Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-web")
    .build();
    
Collection<Change> changes = new Refactor()
    .visit(new ImplicitWebAnnotationNames())
    .fix(jp.parse(javaSourceCodeToBeRefactored))

String refactoredJavaSource = changes.get(0).getFixed().print();
```

### YAML Definition

The `org.openrewrite.java.Spring` recipe includes this visitor.
Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.org.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.spring.ImplicitWebAnnotationNames
```

### Example

#### Before

```java
import org.springframework.web.bind.annotation.*;

public class UsersController {
    public ResponseEntity<String> getUser(@PathVariable("id") Long id,
                                          @PathVariable(value = "another_name") Long anotherName) {
    }
}
```

#### After
Note that the visitor is smart enough to recognize that `value = "another_name"` should remain in this case as it differs from the name of the `anotherName` parameter.
```java
import org.springframework.web.bind.annotation.*;

public class UsersController {
    public ResponseEntity<String> getUser(@PathVariable Long id,
                                          @PathVariable(value = "another_name") Long anotherName) {
    }
}
```

