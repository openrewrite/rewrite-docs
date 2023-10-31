# Parameterize SLF4J logging statements

**org.openrewrite.java.logging.slf4j.ParameterizedLogging**

_SLF4J supports parameterized logging, which can significantly boost logging performance for disabled logging statements._

### Tags

* RSPEC-2629
* slf4j
* logging

## Source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.0.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.0.6


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.0.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.ParameterizedLogging")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.6")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.0.6")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.slf4j.ParameterizedLogging")
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
        <version>5.10.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.ParameterizedLogging</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.0.6</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.ParameterizedLogging
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe ParameterizedLogging
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger trace(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger debug(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger info(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger warn(..)`
* [Parameterize logging statements](../../../java/logging/parameterizedlogging.md)
  * methodPattern: `org.slf4j.Logger error(..)`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.ParameterizedLogging
displayName: Parameterize SLF4J logging statements
description: SLF4J supports parameterized logging, which can significantly boost logging performance for disabled logging statements.
tags:
  - RSPEC-2629
  - slf4j
  - logging
recipeList:
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger trace(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger debug(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger info(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger warn(..)
  - org.openrewrite.java.logging.ParameterizedLogging:
      methodPattern: org.slf4j.Logger error(..)

```
{% endtab %}
{% endtabs %}

## Contributors
* Aaron Gershman
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.ParameterizedLogging)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
