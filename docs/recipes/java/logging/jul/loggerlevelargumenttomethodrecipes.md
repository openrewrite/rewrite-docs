---
sidebar_label: "Replace JUL Level arguments with the corresponding method calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace JUL Level arguments with the corresponding method calls

**org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes**

_Replace calls to `Logger.log(Level, String)` with the corresponding method calls._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/jul/LoggerLevelArgumentToMethod.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace JUL `Logger.log(Level.FINEST, String)` with `Logger.finest(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesttomethodrecipe)
* [Replace JUL `Logger.log(Level.FINEST, Supplier<String>)` with `Logger.finest(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinestsuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.FINER, String)` with `Logger.finer(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinertomethodrecipe)
* [Replace JUL `Logger.log(Level.FINER, Supplier<String>)` with `Logger.finer(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinersuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.FINE, String)` with `Logger.fine(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinetomethodrecipe)
* [Replace JUL `Logger.log(Level.FINE, Supplier<String>)` with `Logger.fine(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.INFO, String)` with `Logger.info(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfotomethodrecipe)
* [Replace JUL `Logger.log(Level.INFO, Supplier<String>)` with `Logger.info(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfosuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.WARNING, String)` with `Logger.warning(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningtomethodrecipe)
* [Replace JUL `Logger.log(Level.WARNING, Supplier<String>)` with `Logger.warning(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningsuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.SEVERE, String)` with `Logger.severe(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveretomethodrecipe)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier<String>)` with `Logger.severe(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveresuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.CONFIG, String)` with `Logger.config(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigtomethodrecipe)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier<String>)` with `Logger.config(Supplier<String>)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigsuppliertomethodrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes
displayName: Replace JUL Level arguments with the corresponding method calls
description: |
  Replace calls to `Logger.log(Level, String)` with the corresponding method calls.
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
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-logging-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-logging-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-logging-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe LoggerLevelArgumentToMethodRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-logging-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes" />

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

