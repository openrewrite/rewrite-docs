# Migrate Apache Commons Logging 1.x to SLF4J 1.x

**org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1**

_Transforms usages of Apache Commons Logging 1.x to leveraging SLF4J 1.x directly._

### Tags

* slf4j
* logging
* commons-logging

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.4.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.4.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.4.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.4.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.8.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.4.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1")
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
        <version>5.21.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.4.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe CommonsLogging1ToSlf4j1
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Simplify a call chain](../../../java/simplifymethodchain.md)
  * methodPatternChain: `[org.apache.commons.logging.LogFactory getFactory(), org.apache.commons.logging.LogFactory getInstance(..)]`
  * newMethodName: `getLogger`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.commons.logging.LogFactory getLog(..)`
  * newMethodName: `getLogger`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.logging.LogFactory`
  * newFullyQualifiedTypeName: `org.slf4j.LoggerFactory`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.commons.logging.Log fatal(..)`
  * newMethodName: `error`
* [Change method name](../../../java/changemethodname.md)
  * methodPattern: `org.apache.commons.logging.Log isFatalEnabled()`
  * newMethodName: `isErrorEnabled`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.apache.commons.logging.Log`
  * newFullyQualifiedTypeName: `org.slf4j.Logger`
* [Replace any Lombok log annotations with target logging framework annotation](../../../java/logging/changelomboklogannotation.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1
displayName: Migrate Apache Commons Logging 1.x to SLF4J 1.x
description: Transforms usages of Apache Commons Logging 1.x to leveraging SLF4J 1.x directly.
tags:
  - slf4j
  - logging
  - commons-logging
recipeList:
  - org.openrewrite.java.SimplifyMethodChain:
      methodPatternChain: [org.apache.commons.logging.LogFactory getFactory(), org.apache.commons.logging.LogFactory getInstance(..)]
      newMethodName: getLogger
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.logging.LogFactory getLog(..)
      newMethodName: getLogger
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.logging.LogFactory
      newFullyQualifiedTypeName: org.slf4j.LoggerFactory
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.logging.Log fatal(..)
      newMethodName: error
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.logging.Log isFatalEnabled()
      newMethodName: isErrorEnabled
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.logging.Log
      newFullyQualifiedTypeName: org.slf4j.Logger
  - org.openrewrite.java.logging.ChangeLombokLogAnnotation:

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.CommonsLogging1ToSlf4j1)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
