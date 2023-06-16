# Remove `@RequestMapping` annotations

**org.openrewrite.java.spring.NoRequestMappingAnnotation**

_Replace method declaration `@RequestMapping` annotations with `@GetMapping`, `@PostMapping`, etc. when possible._

### Tags

* RSPEC-4488

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/NoRequestMappingAnnotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="UsersController.java" %}

###### Before
{% code title="UsersController.java" %}
```java
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
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
{% endcode %}

###### After
{% code title="UsersController.java" %}
```java
import java.util.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
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
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- UsersController.java
+++ UsersController.java
@@ -3,0 +3,1 @@
import java.util.*;
import org.springframework.http.ResponseEntity;
+import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
@@ -4,1 +5,0 @@
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
-import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.HEAD;
@@ -15,1 +15,1 @@
    }

-   @RequestMapping(method = GET)
+   @GetMapping
    public ResponseEntity<List<String>> getUsers() {
@@ -20,1 +20,1 @@
    }

-   @RequestMapping(path = "/{id}", method = RequestMethod.GET)
+   @GetMapping("/{id}")
    public ResponseEntity<String> getUser(@PathVariable("id") Long id) {
@@ -25,1 +25,1 @@
    }

-   @RequestMapping
+   @GetMapping
    public ResponseEntity<List<String>> getUsersNoRequestMethod() {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.NoRequestMappingAnnotation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.NoRequestMappingAnnotation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.NoRequestMappingAnnotation
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Patrick](patway99@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.NoRequestMappingAnnotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
