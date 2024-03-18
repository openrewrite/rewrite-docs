# Migrate to Micronaut 3 from Micronaut 2

In this guide we'll look at using OpenRewrite to perform an automated migration from Micronaut 2.x to Micronaut 3.x

## Configuration

See various ways you can configure your project to run this recipe on the [recipe reference page](/reference/recipes/java/micronaut/micronaut2to3migration.md). This is also where you can find the full list of changes it will make.

Once you've configured your project, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` (or equivalent), manually fix anything that wasn't able to be migrated automatically, and commit the results.

### Before and After

**Deprecated Exception Handler constructors**

Several Micronaut `ExceptionHandlers` have been refactored such that the no-args constructor has been deprecated and replaced with one taking an `ErrorResponseProcessor`:

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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut2to3Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.