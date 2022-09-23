# Use Vertx JUnit 5 Extension

** org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5**
_Migrates Vertx `@RunWith` `VertxUnitRunner` to the JUnit Jupiter `@ExtendWith` `VertxExtension`._

### Tags

* junit
* testing

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.28.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.28.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.28.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.28.0")
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
        <version>4.34.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.28.0</version>
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
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.34.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.28.0 \
  -DactiveRecipes=org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
  * runners: `[org.vertx.testtools.VertxUnitRunner]`
  * extension: `org.vertx.testtools.VertxExtension`
* [Add Maven dependency](../../../maven/adddependency.md)
  * groupId: `io.vertx`
  * artifactId: `vertx-junit5`
  * version: `4.x`
  * onlyIfUsing: `io.vertx.junit5.VertxExtension`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.VertxUnitToVertxJunit5
displayName: Use Vertx JUnit 5 Extension
description: Migrates Vertx `@RunWith` `VertxUnitRunner` to the JUnit Jupiter `@ExtendWith` `VertxExtension`.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.vertx.testtools.VertxUnitRunner]
      extension: org.vertx.testtools.VertxExtension
  - org.openrewrite.maven.AddDependency:
      groupId: io.vertx
      artifactId: vertx-junit5
      version: 4.x
      onlyIfUsing: io.vertx.junit5.VertxExtension

```
{% endtab %}
{% endtabs %}
