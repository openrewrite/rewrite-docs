# Use Mockito JUnit Jupiter extension

**org.openrewrite.java.testing.junit5.UseMockitoExtension** _Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`._

### Tags

* junit
* testing
* mockito

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.31.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.31.0

## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseMockitoExtension")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UseMockitoExtension</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.31.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:1.31.0 \
  -DactiveRecipes=org.openrewrite.java.testing.junit5.UseMockitoExtension
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.UseMockitoExtension`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Mockito 4.x upgrade](../mockito/mockito1to4migration.md)
* [JUnit 4 MockitoJUnitRunner.Silent to JUnit Jupiter MockitoExtension with LENIENT settings](../mockito/mockitojunitrunnersilenttoextension.md)
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](runnertoextension.md)
  * runners: `[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner]`
  * extension: `org.mockito.junit.jupiter.MockitoExtension`
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.UseMockitoExtension
displayName: Use Mockito JUnit Jupiter extension
description: Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`.
tags:
  - junit
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.testing.mockito.Mockito1to4Migration
  - org.openrewrite.java.testing.mockito.MockitoJUnitRunnerSilentToExtension
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner]
      extension: org.mockito.junit.jupiter.MockitoExtension
```
{% endtab %}
{% endtabs %}
