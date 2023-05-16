# Migrate to Micronaut 3 from Micronaut 2

In this guide we'll look at using OpenRewrite to perform an automated migration from Micronaut 2.x to Micronaut 3.x

## Example Configuration

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.Micronaut2to3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite(platform("org.openrewrite.recipe:rewrite-recipe-bom:1.18.0"))
    rewrite("org.openrewrite.recipe:rewrite-micronaut")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.Micronaut2to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>1.23.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

### Before and After

For the full list of changes this recipe will make, see its [reference page](https://github.com/openrewrite/rewrite-docs/blob/b187223ddcbf369a77a86efd6950e924fd91f00d/reference/recipes/java/micronaut/micronaut2to3migration.md).

**Deprecated Exception Handler constructors**

Several micronaut `ExceptionHandlers` have been refactored such that the no-args constructor has been deprecated and replaced with one taking an `ErrorResponseProcessor`.

{% tabs %}
{% tab title="Before" %}
```java
import io.micronaut.validation.exceptions.ConstraintExceptionHandler;
public class ApiClientValidationExceptionHandler extends ConstraintExceptionHandler {
    ...
}
```
{% endtab %}

{% tab title="After" %}
```java
import io.micronaut.validation.exceptions.ConstraintExceptionHandler;
import jakarta.inject.Inject;

public class ApiClientValidationExceptionHandler extends ConstraintExceptionHandler {

    @Inject
    public ApiClientValidationExceptionHandler(ErrorResponseProcessor errorResponseProcessor) {
        super(errorResponseProcessor);
    }
    ...
}
```
{% endtab %}
{% endtabs %}

**Subclasses Returned From Factories Not Injectable**

It is no longer possible to inject the internal implementation type from beans produced via factories. The type returned from the factory or any of its supertypes are able to be injected.

{% tabs %}
{% tab title="Before" %}
```java
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ExecutorService;
import javax.inject.Singleton;

public class ExecutorFactory {

    @Singleton
    public ExecutorService executorService() {
        return ForkJoinPool.commonPool();
    }
}
```
{% endtab %}

{% tab title="After" %}
```java
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ExecutorService;
import javax.inject.Singleton;

public class ExecutorFactory {

    @Singleton
    public ForkJoinPool executorService() {
        return ForkJoinPool.commonPool();
    }
}
```
{% endtab %}
{% endtabs %}

**Reflective Bean Map**

In several places in Micronaut, it is required to get a map representation of your object. In previous versions, a reflection based strategy was used to retrieve that information if the class was not annotated with `@Introspected`. That functionality has been removed and it is now required to annotate classes with `@Introspected` that are being used in this way. Any class may be affected if it is passed as an argument or returned from any controller or client, among other use cases.

{% tabs %}
{% tab title="Controller" %}
```java
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Post;

@Controller("/orders")
public class OrdersController {
    @Get("/order")
    public Order getOrder(Long orderId) {
        ...
        return order;
    }
}
```
{% endtab %}

{% tab title="Dto Before" %}
```java
public class Order {
    ...
}
```
{% endtab %}

{% tab title="Dto After" %}
```java
import io.micronaut.core.annotation.Introspected;

@Introspected
public class Order {
    ...
}
```
{% endtab %}
{% endtabs %}

### Known Limitations

| Unsupported Functionality                                                            | Issue                                                             |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Maybe add RxJava2 dependencies                                                       | [#26](https://github.com/openrewrite/rewrite-micronaut/issues/26) |
| Non-Inherited annotations from super-class method are not copied to overridden method | [#13](https://github.com/openrewrite/rewrite-micronaut/issues/13) |
| DefaultContext doCreateBean deprecated                                               | [#23](https://github.com/openrewrite/rewrite-micronaut/issues/23) |
| DefaultHttpHostResolver constructor arg Provider to BeanProvider                     | [#22](https://github.com/openrewrite/rewrite-micronaut/issues/22) |
| Change io.micronaut.core.beans.PropertyDescriptor to BeanProperty                    | [#21](https://github.com/openrewrite/rewrite-micronaut/issues/21) |
