# Migrate to Micronaut 3 from Micronaut 2

In this guide we'll look at using OpenRewrite to perform an automated migration from Micronaut 2.x to Micronaut 3.x

## Example Configuration

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```text
plugins {
    id("org.openrewrite.rewrite") version("5.15.7")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.Micronaut2to3Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:1.5.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```text
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.17.3</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.Micronaut2to3Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>1.5.0</version>
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

### Running on JDK 16 and newer

OpenRewrite requires access to Java compiler internals to function.
JDK 16 and newer require explicit opt-in to access these internals via `--add-exports`.
The workaround for this issue is to add explicit exports for packages used by rewrite's java parser.

{% tabs %}
{% tab title="Gradle" %}
In a gradle.properties file at the root of your project, add or update `org.gradle.jvmargs` to include this content:

{% code title="gradle.properties" %}
```
org.gradle.jvmargs= \
    --add-exports jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED \
    --add-exports jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED \
    --add-exports jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED \
    --add-exports jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED \
    --add-exports jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED \
    --add-exports jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
Set or update your MAVEN_OPTS environment variable to include this content:

{% code title="MAVEN_OPS environment variable" %}
```
MAVEN_OPTS="--add-exports jdk.compiler/com.sun.tools.javac.code=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.comp=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.file=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.jvm=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.main=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.model=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.processing=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.tree=ALL-UNNAMED --add-exports jdk.compiler/com.sun.tools.javac.util=ALL-UNNAMED"
```
{% endcode %}
{% endtab %}
{% endtabs %}

At this point, you're ready to execute the migration by running `mvn rewrite:run` or `gradlew rewriteRun`. After running the migration you can inspect the results with `git diff` \(or equivalent\), manually fix anything that wasn't able to be migrated automatically, and commit the results.

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

| Unsupported Functionality | Issue |
| :--- | :--- |
| Maybe add RxJava2 dependencies | [\#26](https://github.com/openrewrite/rewrite-micronaut/issues/26) |
| Non-Inherited annotations from super-class method are not copied to overriden method | [\#13](https://github.com/openrewrite/rewrite-micronaut/issues/13) |
| DefaultContext doCreateBean deprecated | [\#23](https://github.com/openrewrite/rewrite-micronaut/issues/23) |
| DefaultHttpHostResolver constructor arg Provider to BeanProvider | [\#22](https://github.com/openrewrite/rewrite-micronaut/issues/22) |
| Change io.micronaut.core.beans.PropertyDescriptor to BeanProperty | [\#21](https://github.com/openrewrite/rewrite-micronaut/issues/21) |

