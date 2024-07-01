# Replace JUL Level arguments with the corresponding method calls

**org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes**

_Replace calls to `Logger.log(Level, String)` with the corresponding method calls._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/jul/LoggerLevelArgumentToMethod.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.9.1/jar)

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
    activeRecipe("org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes")
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
        activeRecipe("org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes")
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
            <recipe>org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe LoggerLevelArgumentToMethodRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUL `Logger.log(Level.FINEST, String)` with `Logger.finest(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesttomethodrecipe.md)
* [Replace JUL `Logger.log(Level.FINEST, Supplier<String>)` with `Logger.finest(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinestsuppliertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.FINER, String)` with `Logger.finer(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.FINER, Supplier<String>)` with `Logger.finer(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinersuppliertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.FINE, String)` with `Logger.fine(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinetomethodrecipe.md)
* [Replace JUL `Logger.log(Level.FINE, Supplier<String>)` with `Logger.fine(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesuppliertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.INFO, String)` with `Logger.info(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfotomethodrecipe.md)
* [Replace JUL `Logger.log(Level.INFO, Supplier<String>)` with `Logger.info(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfosuppliertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.WARNING, String)` with `Logger.warning(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningtomethodrecipe.md)
* [Replace JUL `Logger.log(Level.WARNING, Supplier<String>)` with `Logger.warning(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningsuppliertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.SEVERE, String)` with `Logger.severe(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveretomethodrecipe.md)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier<String>)` with `Logger.severe(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveresuppliertomethodrecipe.md)
* [Replace JUL `Logger.log(Level.CONFIG, String)` with `Logger.config(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigtomethodrecipe.md)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier<String>)` with `Logger.config(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigsuppliertomethodrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes
displayName: Replace JUL Level arguments with the corresponding method calls
description: Replace calls to `Logger.log(Level, String)` with the corresponding method calls.
recipeList:
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinestToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinestSupplierToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinerToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFinerSupplierToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFineToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelFineSupplierToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelInfoToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelInfoSupplierToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelWarningToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelWarningSupplierToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelSevereToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelSevereSupplierToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelConfigToMethodRecipe
  - org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes$LogLevelConfigSupplierToMethodRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
