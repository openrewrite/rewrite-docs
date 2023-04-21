# Use Mockito JUnit Jupiter extension

**org.openrewrite.java.testing.junit5.UseMockitoExtension**

_Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`._

### Tags

* junit
* testing
* mockito

## Source

[Github](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/1.37.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 1.37.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:1.37.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseMockitoExtension")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:1.37.0")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UseMockitoExtension</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>1.37.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.UseMockitoExtension
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Mockito 4.x upgrade](../../../java/testing/mockito/mockito1to4migration.md)
* [JUnit 4 MockitoJUnitRunner.Silent to JUnit Jupiter MockitoExtension with LENIENT settings](../../../java/testing/mockito/mockitojunitrunnersilenttoextension.md)
* [JUnit 4 `@RunWith` to JUnit Jupiter `@ExtendWith`](../../../java/testing/junit5/runnertoextension.md)
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.UseMockitoExtension)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
