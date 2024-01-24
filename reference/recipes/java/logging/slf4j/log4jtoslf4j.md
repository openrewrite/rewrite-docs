# Migrate Log4j to SLF4J

**org.openrewrite.java.logging.slf4j.Log4jToSlf4j**

_Migrates usage of Apache Log4j to using SLF4J directly. Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files._

### Tags

* slf4j
* logging
* log4j

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
    id("org.openrewrite.rewrite") version("6.7.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.Log4jToSlf4j")
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
    dependencies { classpath("org.openrewrite:plugin:6.7.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.4.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.slf4j.Log4jToSlf4j")
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
        <version>5.20.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.Log4jToSlf4j</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.Log4jToSlf4j
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Log4jToSlf4j
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate Log4j 1.x to SLF4J 1.x](../../../java/logging/slf4j/log4j1toslf4j1.md)
* [Loggers should be named for their enclosing classes](../../../java/logging/slf4j/loggersnamedforenclosingclass.md)
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-to-slf4j`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * newVersion: `latest.release`
  * overrideManagedVersion: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * newVersion: `latest.release`
  * overrideManagedVersion: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.slf4j`
  * artifactId: `slf4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-slf4j-impl`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.slf4j`
  * artifactId: `slf4j-api`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-slf4j-impl`
  * version: `latest.release`
  * onlyIfUsing: `org.apache.log4j.*`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Log4jToSlf4j
displayName: Migrate Log4j to SLF4J
description: Migrates usage of Apache Log4j to using SLF4J directly. Use of the traditional Log4j to SLF4J bridge can result in loss of performance, as the Log4j messages must be formatted before they can be passed to SLF4J. Note, this currently does not modify `log4j.properties` files.
tags:
  - slf4j
  - logging
  - log4j
recipeList:
  - org.openrewrite.java.logging.slf4j.Log4j1ToSlf4j1
  - org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-to-slf4j
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      newVersion: latest.release
      overrideManagedVersion: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      newVersion: latest.release
      overrideManagedVersion: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.slf4j
      artifactId: slf4j-api
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-slf4j-impl
      version: latest.release
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.slf4j
      artifactId: slf4j-api
      version: latest.release
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-slf4j-impl
      version: latest.release
      onlyIfUsing: org.apache.log4j.*

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Log4jToSlf4j)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Aaron Gershman, [Patrick](mailto:patway99@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Adriano Machado, [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Kun Li](mailto:kun@moderne.io), [Peter Streef](mailto:p.streef@gmail.com)
