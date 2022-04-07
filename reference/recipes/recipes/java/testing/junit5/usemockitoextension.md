# Use Mockito JUnit Jupiter extension

** org.openrewrite.java.testing.junit5.UseMockitoExtension**
_Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`._

### Tags

* junit
* testing
* mockito

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.20.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.20.2


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-testing-frameworks:1.20.2 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseMockitoExtension")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.20.2")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.22.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UseMockitoExtension</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.20.2</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.testing.junit5.UseMockitoExtension`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
  * runners: `[org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner]`
  * extension: `org.mockito.junit.jupiter.MockitoExtension`
* [Mockito 3.x migration from 1.x](../../../java/testing/mockito/mockito1to3migration.md)

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
  - org.openrewrite.java.testing.junit5.RunnerToExtension:
      runners: [org.mockito.runners.MockitoJUnitRunner, org.mockito.junit.MockitoJUnitRunner, org.mockito.runners.MockitoJUnit44Runner, org.mockito.junit.MockitoJUnit44Runner]
      extension: org.mockito.junit.jupiter.MockitoExtension
  - org.openrewrite.java.testing.mockito.Mockito1to3Migration

```
{% endtab %}
{% endtabs %}
