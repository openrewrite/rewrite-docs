# Add trailing slash to Spring routes

**org.openrewrite.java.spring.boot3.AddRouteTrailingSlash**

_This is part of Spring MVC and WebFlux URL Matching Changes, as of Spring Framework 6.0, the trailing slash matching configuration option has been deprecated and its default value set to false. This means that previously, a controller `@GetMapping("/some/greeting")` would match both `GET /some/greeting` and `GET /some/greeting/`, but it doesn't match `GET /some/greeting/` anymore by default and will result in an HTTP 404 error. This recipe is to add declaration of additional route explicitly on the controller handler (like `@GetMapping("/some/greeting", "/some/greeting/")`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot3/AddRouteTrailingSlash.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.5

## Example


{% tabs %}
{% tab title="ExampleController.java" %}

###### Before
{% code title="ExampleController.java" %}
```java
import org.springframework.web.bind.annotation.*;

@RestController
public class ExampleController {

    @GetMapping("/get")
    public String getExample() {
        return "This is a GET example.";
    }
}
```
{% endcode %}

###### After
{% code title="ExampleController.java" %}
```java
import org.springframework.web.bind.annotation.*;

@RestController
public class ExampleController {

    @GetMapping({"/get", "/get/"})
    public String getExample() {
        return "This is a GET example.";
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ExampleController.java
+++ ExampleController.java
@@ -6,1 +6,1 @@
public class ExampleController {

-   @GetMapping("/get")
+   @GetMapping({"/get", "/get/"})
    public String getExample() {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.AddRouteTrailingSlash")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.5")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.AddRouteTrailingSlash</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.5</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.AddRouteTrailingSlash
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Kun Li](mailto:kun@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.AddRouteTrailingSlash)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
