# Migrate JUL to Log4j 2.x API

**org.openrewrite.java.logging.log4j.JulToLog4j**

_Transforms code written using `java.util.logging` to use Log4j 2.x API._

### Tags

* java-util-logging
* logging
* log4j

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/log4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.10.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.10.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.10.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.log4j.JulToLog4j")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.10.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.10.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.log4j.JulToLog4j")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.log4j.JulToLog4j</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.10.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.log4j.JulToLog4j 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JulToLog4j
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUL Level arguments with the corresponding method calls](../../../java/logging/jul/loggerlevelargumenttomethodrecipes.md)
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `java.util.logging.Logger getLogger(..)`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.logging.Logger config(..)`
  * newMethodName: `info`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.logging.Logger fine(..)`
  * newMethodName: `debug`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.logging.Logger finer(..)`
  * newMethodName: `trace`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.logging.Logger finest(..)`
  * newMethodName: `trace`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.logging.Logger severe(..)`
  * newMethodName: `error`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `java.util.logging.Logger warning(..)`
  * newMethodName: `warn`
* [Rewrites JUL's Logger#entering method to Log4j API](../../../java/logging/log4j/convertjulentering.md)
* [Rewrites JUL's Logger#exiting method to Log4j API](../../../java/logging/log4j/convertjulexiting.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `java.util.logging.Logger`
  * newFullyQualifiedTypeName: `org.apache.logging.log4j.Logger`
* [Replace any Lombok log annotations with target logging framework annotation](../../../java/logging/changelomboklogannotation.md)
  * loggingFramework: `Log4j2`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.log4j.JulToLog4j
displayName: Migrate JUL to Log4j 2.x API
description: Transforms code written using `java.util.logging` to use Log4j 2.x API.
tags:
  - java-util-logging
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: java.util.logging.Logger getLogger(..)
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.logging.Logger config(..)
      newMethodName: info
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.logging.Logger fine(..)
      newMethodName: debug
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.logging.Logger finer(..)
      newMethodName: trace
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.logging.Logger finest(..)
      newMethodName: trace
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.logging.Logger severe(..)
      newMethodName: error
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: java.util.logging.Logger warning(..)
      newMethodName: warn
  - org.openrewrite.java.logging.log4j.ConvertJulEntering
  - org.openrewrite.java.logging.log4j.ConvertJulExiting
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: java.util.logging.Logger
      newFullyQualifiedTypeName: org.apache.logging.log4j.Logger
  - org.openrewrite.java.logging.ChangeLombokLogAnnotation:
      loggingFramework: Log4j2

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.log4j.JulToLog4j)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Piotr P. Karwasz](mailto:piotr.github@karwasz.org), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)
