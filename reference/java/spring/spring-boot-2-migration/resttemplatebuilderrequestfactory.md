# RestTemplateBuilderRequestFactory

Between Spring Boot 1 and 2 the `requestFactory(ClientHttpRequestFactory)` method has been replaced by a new `requestFactory(Supplier<ClientHttpRequestFactory> requestFactorySupplier)` method. The `RestTemplateBuilderRequestFactory` visitor swaps the Spring 1 method for the Spring 2 method. See the [Spring Boot 2.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Migration-Guide#resttemplatebuilder) for more details.

There is no required or optional configuration for this visitor.

## Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-boot", "spring-web")
    .build();

Collection<Change> changes = new Refactor()
    .visit(new RestTemplateBuilderRequestFactory())
    .fix(jp.parse(javaSourceCodeToBeRefactored))

String refactoredJavaSource = changes.get(0).getFixed().print();
```

## YAML Definition

The `org.openrewrite.java.SpringBoot2Migration` recipe includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.spring.boot2.ConditionalOnBeanAnyNestedCondition
```

## Example

### Before

```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;

public class A {
    {
        new RestTemplateBuilder()
            .requestFactory(new SimpleClientHttpRequestFactory());
    }
}
```

### After

```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.client.ClientHttpRequestFactory;
import org.springframework.http.client.SimpleClientHttpRequestFactory;

public class A {
    {
        new RestTemplateBuilder()
            .requestFactory(() -> new SimpleClientHttpRequestFactory());
    }
}
```

