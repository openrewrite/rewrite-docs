# Migrate from JMockit to Mockito

**org.openrewrite.java.testing.jmockit.JMockitToMockito**

_This recipe will apply changes commonly needed when migrating from JMockit to Mockito._

### Tags

* jmockit
* testing

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/jmockit.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.1.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.1.5

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.jmockit.JMockitToMockito")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5")
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
    dependencies { classpath("org.openrewrite:plugin:6.6.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.jmockit.JMockitToMockito")
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
        <version>5.17.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.jmockit.JMockitToMockito</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.1.5</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.jmockit.JMockitToMockito
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JMockitToMockito
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `mockit.Mocked`
  * newFullyQualifiedTypeName: `org.mockito.Mock`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `mockit.integration.junit5.JMockitExtension`
  * newFullyQualifiedTypeName: `org.mockito.junit.jupiter.MockitoExtension`
* [Rewrite JMockit Expectations](../../../java/testing/jmockit/jmockitexpectationstomockito.md)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.mockito`
  * artifactId: `mockito-core`
  * version: `5.x`
  * onlyIfUsing: `org.mockito.*`
  * acceptTransitive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.jmockit.JMockitToMockito
displayName: Migrate from JMockit to Mockito
description: This recipe will apply changes commonly needed when migrating from JMockit to Mockito.
tags:
  - jmockit
  - testing
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.Mocked
      newFullyQualifiedTypeName: org.mockito.Mock
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: mockit.integration.junit5.JMockitExtension
      newFullyQualifiedTypeName: org.mockito.junit.jupiter.MockitoExtension
  - org.openrewrite.java.testing.jmockit.JMockitExpectationsToMockito
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.mockito
      artifactId: mockito-core
      version: 5.x
      onlyIfUsing: org.mockito.*
      acceptTransitive: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.jmockit.JMockitToMockito)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[tinder-dthomson](mailto:devin.thomson@gotinder.com)
