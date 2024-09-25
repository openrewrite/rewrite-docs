# Replace JUL active Level check with corresponding SLF4J method calls

**org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes**

_Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/JulToSlf4jLambdaSupplier.java), [Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/2.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-logging-frameworks
* version: 2.14.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace JUL `Logger.finest(Supplier<String>)` with SLF4J's `Logger.atTrace().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinestrecipe.md)
* [Replace JUL `Logger.finer(Supplier<String>)` with SLF4J's `Logger.atTrace().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerrecipe.md)
* [Replace JUL `Logger.fine(Supplier<String>)` with SLF4J's `Logger.atDebug().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerecipe.md)
* [Replace JUL `Logger.config(Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierconfigrecipe.md)
* [Replace JUL `Logger.info(Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierinforecipe.md)
* [Replace JUL `Logger.warning(Supplier<String>)` with SLF4J's `Logger.atWarn().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierwarningrecipe.md)
* [Replace JUL `Logger.severe(Supplier<String>)` with SLF4J's `Logger.atError().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsuppliersevererecipe.md)
* [Replace JUL `Logger.log(Level.FINEST, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinestrecipe.md)
* [Replace JUL `Logger.log(Level.FINER, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerrecipe.md)
* [Replace JUL `Logger.log(Level.FINE, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerecipe.md)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogconfigrecipe.md)
* [Replace JUL `Logger.log(Level.INFO, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierloginforecipe.md)
* [Replace JUL `Logger.log(Level.WARNING, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogwarningrecipe.md)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogsevererecipe.md)
* [Replace JUL `Logger.log(Level.ALL, Supplier<String>)` with SLF4J's `Logger.atInfo().log(Supplier<String>)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogallrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes
displayName: Replace JUL active Level check with corresponding SLF4J method calls
description: Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls.
recipeList:
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierFinestRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierFinerRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierFineRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierConfigRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierInfoRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierWarningRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierSevereRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogFinestRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogFinerRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogFineRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogConfigRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogInfoRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogWarningRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogSevereRecipe
  - org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes$JulToSlf4jSupplierLogAllRecipe

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks:2.14.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.14.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:2.14.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes")
        exportDatatables = true
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
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>2.14.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe JulToSlf4jLambdaSupplierRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

