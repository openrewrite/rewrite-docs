# Copy non-inherited annotations from super class

**org.openrewrite.java.micronaut.CopyNonInheritedAnnotations**

_As of Micronaut 3.x only [annotations](https://github.com/micronaut-projects/micronaut-core/blob/3.0.x/src/main/docs/guide/appendix/breaks.adoc#annotation-inheritance) that are explicitly meta-annotated with `@Inherited` are inherited from parent classes and interfaces._

## Source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/java/org/openrewrite/java/micronaut/CopyNonInheritedAnnotations.java), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.1.1

## Example


{% tabs %}
{% tab title="BaseController.java" %}

###### Before
{% code title="BaseController.java" %}
```java
    package abc;
    import io.micronaut.runtime.context.scope.Refreshable;

    @Refreshable
    public abstract class BaseController {
    }

    public abstract class MiddleController extends BaseController {
    }
```
{% endcode %}

###### After
{% code title="BaseController.java" %}
```java
    package abc;
    import io.micronaut.runtime.context.scope.Refreshable;

    @Refreshable
    public abstract class BaseController {
    }

    @Refreshable
    public abstract class MiddleController extends BaseController {
    }
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- BaseController.java
+++ BaseController.java
@@ -8,0 +8,1 @@
    }

+   @Refreshable
    public abstract class MiddleController extends BaseController {
```
{% endcode %}
{% endtab %}
{% endtabs %}

{% tabs %}
{% tab title="SuperClass.java" %}

###### Before
{% code title="SuperClass.java" %}
```java
    package abc;
    import io.micronaut.http.annotation.Controller;
    import io.micronaut.http.annotation.Get;

    public class SuperClass {

        @Controller
        public class MyController extends MiddleController {
            @Get
            public String info() {
                return "system info: ";
            }
        }
    }
```
{% endcode %}

###### After
{% code title="SuperClass.java" %}
```java
    package abc;
    import io.micronaut.http.annotation.Controller;
    import io.micronaut.http.annotation.Get;
    import io.micronaut.runtime.context.scope.Refreshable;

    public class SuperClass {

        @Controller
        @Refreshable
        public class MyController extends MiddleController {
            @Get
            public String info() {
                return "system info: ";
            }
        }
    }
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- SuperClass.java
+++ SuperClass.java
@@ -4,0 +4,1 @@
    import io.micronaut.http.annotation.Controller;
    import io.micronaut.http.annotation.Get;
+   import io.micronaut.runtime.context.scope.Refreshable;

@@ -8,0 +9,1 @@

        @Controller
+       @Refreshable
        public class MyController extends MiddleController {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.1.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.CopyNonInheritedAnnotations")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.1.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.CopyNonInheritedAnnotations</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.1.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.micronaut.CopyNonInheritedAnnotations
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.micronaut.CopyNonInheritedAnnotations)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
