# NoRequestMappingAnnotation

The `NoRequestMappingAnnotation` visitor replaces usages of the [@RequestMapping](https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/bind/annotation/RequestMapping.html) annotation on method declarations with more specific annotations based on the appropriate HTTP verb. 
This visitor does not remove or alter `@RequestMapping` annotations on classes. 

There is no required or optional configuration for this visitor.

### Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-web")
    .build();
    
Collection<Change> changes = new Refactor()
    .visit(new NoRequestMappingAnnotation())
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
  - org.openrewrite.spring.NoAutowired
```

### Example

#### Before

```java
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.HEAD;

@RestController
@RequestMapping("/users")
public class UsersController {
    @RequestMapping(method = HEAD)
    public ResponseEntity<List<String>> getUsersHead() {
        return null;
    }

    @RequestMapping(method = GET)
    public ResponseEntity<List<String>> getUsers() {
        return null;
    }

    @RequestMapping(path = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<String> getUser(@PathVariable("id") Long id) {
        return null;
    }
    
    @RequestMapping
    public ResponseEntity<List<String>> getUsersNoRequestMethod() {
        return null;
    }
}
```

#### After
Note how this visitor is smart enough to leave @RequestMapping annotations alone when it is, in fact, the most appropriate annotation.
```java
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import static org.springframework.web.bind.annotation.RequestMethod.HEAD;

@RestController
@RequestMapping("/users")
public class UsersController {
    @RequestMapping(method = HEAD)
    public ResponseEntity<List<String>> getUsersHead() {
        return null;
    }

    @GetMapping
    public ResponseEntity<List<String>> getUsers() {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<String> getUser(@PathVariable("id") Long id) {
        return null;
    }
    
    @GetMapping
    public ResponseEntity<List<String>> getUsersNoRequestMethod() {
        return null;
    }
}
```

