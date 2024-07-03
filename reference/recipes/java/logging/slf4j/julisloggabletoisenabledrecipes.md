# Replace JUL active Level check with corresponding SLF4J method calls

**org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes**

_Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/JulIsLoggableToIsEnabled.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.10.0/jar)

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
    activeRecipe("org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes")
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
        activeRecipe("org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes")
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
            <recipe>org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JulIsLoggableToIsEnabledRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUL `Logger.isLoggable(Level.ALL)` with SLF4J's `Logger.isTraceEnabled`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelallrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINEST)` with SLF4J's `Logger.isTraceEnabled`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelfinestrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINER)` with SLF4J's `Logger.isTraceEnabled()`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelfinerrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.FINE)` with SLF4J's `Logger.isDebugEnabled()`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelfinerecipe.md)
* [Replace JUL `Logger.isLoggable(Level.CONFIG)` with SLF4J's `Logger.isInfoEnabled()`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelconfigrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.INFO)` with SLF4J's `Logger.isInfoEnabled()`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelinforecipe.md)
* [Replace JUL `Logger.isLoggable(Level.WARNING)` with SLF4J's `Logger.isWarnEnabled()`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelwarningrecipe.md)
* [Replace JUL `Logger.isLoggable(Level.SEVERE)` with SLF4J's `Logger.isErrorEnabled()`](../../../java/logging/slf4j/julisloggabletoisenabledrecipes$loggerisloggablelevelsevererecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes
displayName: Replace JUL active Level check with corresponding SLF4J method calls
description: Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls.
recipeList:
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelAllRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelFinestRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelFinerRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelFineRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelConfigRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelInfoRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelWarningRecipe
  - org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes$LoggerIsLoggableLevelSevereRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.JulIsLoggableToIsEnabledRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
