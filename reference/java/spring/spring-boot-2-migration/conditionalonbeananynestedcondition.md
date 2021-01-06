# ConditionalOnBeanAnyNestedCondition

Between Spring Boot 1 and 2 there was a breaking change to the [@ConditionalOnBean](https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/condition/ConditionalOnBean.html) annotation. The `ConditionalOnBeanAnyNestedCondition` visitor adapts Spring 1 usage of this annotation to Spring 2 usage of this annotation. See the [Spring Boot 2.0 migration guide](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.0-Migration-Guide#conditionalonbean-semantic-change) for more details on the changes to `@ConditionalOnBean`.

There is no required or optional configuration for this visitor.

## Java Definition

```java
String javaSourceCodeToBeRefactored = ...; // Assume this is filled with Java source code

JavaParser jp = JavaParser.fromJavaVersion()
    .classpath("spring-boot-autoconfigure", "spring-boot", "spring-web")
    .build();

Collection<Change> changes = new Refactor()
    .visit(new ConditionalOnBeanAnyNestedCondition())
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

This example assumes that there exist classes called `This` and `That` within the same package as `ThisOrthatCondition`. As the contents of `This` and `That` are unimportant to this example they are omitted for brevity.

### Before

```java
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;

class ThisOrThatCondition {

    @ConditionalOnBean(This.class)
    static class ThisCondition {
    }

    @ConditionalOnBean(That.class)
    static class ThatCondition {
    }
}
```

### After

```java
import org.springframework.boot.autoconfigure.condition.AnyNestedCondition;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.ConfigurationPhase;

class ThisOrThatCondition extends AnyNestedCondition {

    public ThisOrThatCondition() {
        super(ConfigurationPhase.REGISTER_BEAN);
    }

    @ConditionalOnBean(This.class)
    static class ThisCondition {
    }

    @ConditionalOnBean(That.class)
    static class ThatCondition {
    }
}
```

