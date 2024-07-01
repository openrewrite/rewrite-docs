# Migrate JUL to SLF4J

**org.openrewrite.java.logging.slf4j.JulToSlf4j**

_Migrates usage of Java Util Logging (JUL) to using SLF4J directly._

### Tags

* slf4j
* java-util-logging
* logging

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.9.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.9.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.9.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.JulToSlf4j")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.9.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.9.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.slf4j.JulToSlf4j")
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.JulToSlf4j</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.9.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.JulToSlf4j 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JulToSlf4j
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUL Logger creation with SLF4J LoggerFactory](../../../java/logging/slf4j/julgetloggertologgerfactoryrecipes.md)
* [Replace JUL active Level check with corresponding SLF4J method calls](../../../java/logging/slf4j/julisloggabletoisenabledrecipes.md)
* [Replace JUL `Level.ALL` logging with SLF4J's trace level](../../../java/logging/slf4j/jullevelalltotracerecipe.md)
* [Migrate JUL to Log4j 2.x API](../../../java/logging/log4j/jultolog4j.md)
* [Migrate Log4j 2.x to SLF4J 1.x](../../../java/logging/slf4j/log4j2toslf4j1.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.JulToSlf4j
displayName: Migrate JUL to SLF4J
description: Migrates usage of Java Util Logging (JUL) to using SLF4J directly.
tags:
  - slf4j
  - java-util-logging
  - logging
recipeList:
  - org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes
  - org.openrewrite.java.logging.slf4j.JulLevelAllToTraceRecipe
  - org.openrewrite.java.logging.log4j.JulToLog4j
  - org.openrewrite.java.logging.slf4j.Log4j2ToSlf4j1

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.JulToSlf4j)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Aaron Gershman, [Patrick](mailto:patway99@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Piotr P. Karwasz](mailto:piotr.github@karwasz.org), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), Adriano Machado, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
