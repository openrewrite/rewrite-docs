# NoAutowired

The `NoAutowired` visitor removes [@Autowired](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/annotation/Autowired.html) from method and constructor declarations. Generally we almost never need to use `@Autowired` anymore. It isn't needed on constructors or fields any longer. This visitor removes `@Autowired` from constructors.

There is no required or optional configuration for this visitor.

## Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-beans")
    .build();

Collection<Change> changes = new Refactor()
    .visit(new NoAutowired())
    .fix(jp.parse(javaSourceCodeToBeRefactored))

String refactoredJavaSource = changes.get(0).getFixed().print();
```

## YAML Definition

The `org.openrewrite.java.Spring` recipe includes this visitor. Here is how to include this visitor in a custom recipe you define called `com.yourorg.MyCustomRecipe`:

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MyCustomRecipe 
visitors:
  - org.openrewrite.spring.NoAutowired
```

## Example

### Before

```java
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;

public class DatabaseConfiguration { 
    private final DataSource dataSource;

    @Autowired
    public DatabaseConfiguration(DataSource dataSource) {
    }
}
```

### After

```java
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;

public class DatabaseConfiguration { 
    private final DataSource dataSource;

    public DatabaseConfiguration(DataSource dataSource) {
    }
}
```

