# BeanMethodsNotPublic

The `BeanMethodsNotPublic` visitor removes the `public` access modifier from methods annotated with [@Bean](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html). This is more a matter of stylistic preference than necessity. Note this visitor will always remove the `public` modifier, even if something may require this level of access. 

There is no required or optional configuration for this visitor.

### Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled in with a pertinent Java source

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-beans") // So that the definition of @Bean is known
    .build();
    
Collection<Change> changes = new Refactor()
    .visit(new BeanMethodsNotPublic())
    .fix(jp.parse(javaSourceCodeToBeRefactored))
```

### YAML Definition

This visitor is included in the recipe `org.openrewrite.java.Spring`. If you'd prefer to include it in a custom recipe you define called `com.yourorg.MyCustomSpringRecipe`, here's how:

```yaml
---
type: specs.org.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomSpringRecipe 
visitors:
  - org.openrewrite.spring.BeanMethodsNotPublic
```

### Example

#### Before

```java
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;

public class DatabaseConfiguration { 
    @Bean
    public DataSource dataSource() {
        return new DataSource();
    }
    
    @Bean
    public final DataSource dataSource2() {
        return new DataSource();
    }
}
```

#### After

```java
import javax.sql.DataSource;
import org.springframework.context.annotation.Bean;

public class DatabaseConfiguration { 
    @Bean
    DataSource dataSource() {
        return new DataSource();
    }
    
    @Bean
    final DataSource dataSource2() {
        return new DataSource();
    }
}
```

