# Replace any Lombok log annotations with target logging framework annotation

**org.openrewrite.java.logging.ChangeLombokLogAnnotation**

_Replace Lombok annotations such as `@CommonsLog` and `@Log4j` with the target logging framework annotation, or `@Sl4fj` if not provided._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/ChangeLombokLogAnnotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.6.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.6.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}
## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | loggingFramework | *Optional*. The logging framework to use. Valid options: `SLF4J`, `Log4J1`, `Log4J2`, `JUL`, `COMMONS` |  |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.6.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.ChangeLombokLogAnnotation")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.6.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.13.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.6.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.ChangeLombokLogAnnotation")
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
        <version>5.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.ChangeLombokLogAnnotation</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.6.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.ChangeLombokLogAnnotation
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ChangeLombokLogAnnotation
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.java.Log`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.apachecommons.CommonsLog`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.flogger.Flogger`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.jbosslog.JBossLog`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.log4j.Log4j`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.log4j.Log4j2`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.extern.slf4j.XSlf4j`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `lombok.CustomLog`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.ChangeLombokLogAnnotation
displayName: Replace any Lombok log annotations with target logging framework annotation
description: Replace Lombok annotations such as `@CommonsLog` and `@Log4j` with the target logging framework annotation, or `@Sl4fj` if not provided.

recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.java.Log
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.apachecommons.CommonsLog
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.flogger.Flogger
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.jbosslog.JBossLog
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.log4j.Log4j
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.log4j.Log4j2
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.slf4j.XSlf4j
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.CustomLog
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.ChangeLombokLogAnnotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
