# Use Mockito JUnit Jupiter extension

**org.openrewrite.java.testing.junit5.UseMockitoExtension**

_Migrate uses of `@RunWith(MockitoJUnitRunner.class)` (and similar annotations) to `@ExtendWith(MockitoExtension.class)`._

### Tags

* junit
* testing
* mockito

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.10.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.10.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.10.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.UseMockitoExtension")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.10.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.14.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.10.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.junit5.UseMockitoExtension")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.junit5.UseMockitoExtension</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.10.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.UseMockitoExtension 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UseMockitoExtension
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UseMockitoExtension)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Greg Adams](mailto:gadams@gmail.com), [Greg Adams](mailto:greg@moderne.io), [Tim te Beek](mailto:tim@moderne.io), Patrick Way, [Sam Snyder](mailto:sam@moderne.io), John Burns, [Aaron Gershman](mailto:aegershman@gmail.com), [Scott Jungling](mailto:scott.jungling@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Tyler Van Gorder, [Michael Keppler](mailto:bananeweizen@gmx.de)
