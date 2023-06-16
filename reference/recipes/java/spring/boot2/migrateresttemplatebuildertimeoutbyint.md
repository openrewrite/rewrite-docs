# Use `RestTemplateBuilder#setConnectTimeout(Duration)` and `RestTemplateBuilder#setReadTimeout(Duration)`

**org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderTimeoutByInt**

_`RestTemplateBuilder#setConnectTimeout(int)` and `RestTemplateBuilder#setReadTimeout(int)` were deprecated in Spring Boot 2.1._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot2/MigrateRestTemplateBuilderTimeoutByInt.java), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

class Test {
    RestTemplate template = new RestTemplateBuilder()
            .setConnectTimeout(1)
            .setReadTimeout(1)
            .build();
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;

class Test {
    RestTemplate template = new RestTemplateBuilder()
            .setConnectTimeout(Duration.ofMillis(1))
            .setReadTimeout(Duration.ofMillis(1))
            .build();
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -4,0 +4,2 @@
+import java.time.Duration;

@@ -6,2 +8,2 @@
-            .setConnectTimeout(1)
            .setReadTimeout(1)
+            .setConnectTimeout(Duration.ofMillis(1))
            .setReadTimeout(Duration.ofMillis(1))
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
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderTimeoutByInt")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderTimeoutByInt</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderTimeoutByInt
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Kun Li](122563761+kunli2@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.MigrateRestTemplateBuilderTimeoutByInt)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
