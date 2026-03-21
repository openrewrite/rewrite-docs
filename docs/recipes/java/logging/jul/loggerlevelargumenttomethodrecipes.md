---
sidebar_label: "Replace JUL Level arguments with the corresponding method calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace JUL Level arguments with the corresponding method calls

**org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes**

_Replace calls to `Logger.log(Level, String)` with the corresponding method calls._

## Recipe source

[GitHub: LoggerLevelArgumentToMethod.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/jul/LoggerLevelArgumentToMethod.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace JUL `Logger.log(Level.FINEST, String)` with `Logger.finest(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesttomethodrecipe)
* [Replace JUL `Logger.log(Level.FINEST, Supplier&lt;String&gt;)` with `Logger.finest(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinestsuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.FINER, String)` with `Logger.finer(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinertomethodrecipe)
* [Replace JUL `Logger.log(Level.FINER, Supplier&lt;String&gt;)` with `Logger.finer(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinersuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.FINE, String)` with `Logger.fine(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinetomethodrecipe)
* [Replace JUL `Logger.log(Level.FINE, Supplier&lt;String&gt;)` with `Logger.fine(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelfinesuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.INFO, String)` with `Logger.info(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfotomethodrecipe)
* [Replace JUL `Logger.log(Level.INFO, Supplier&lt;String&gt;)` with `Logger.info(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelinfosuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.WARNING, String)` with `Logger.warning(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningtomethodrecipe)
* [Replace JUL `Logger.log(Level.WARNING, Supplier&lt;String&gt;)` with `Logger.warning(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelwarningsuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.SEVERE, String)` with `Logger.severe(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveretomethodrecipe)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier&lt;String&gt;)` with `Logger.severe(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelseveresuppliertomethodrecipe)
* [Replace JUL `Logger.log(Level.CONFIG, String)` with `Logger.config(String)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigtomethodrecipe)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier&lt;String&gt;)` with `Logger.config(Supplier&lt;String&gt;)`](../../../java/logging/jul/loggerlevelargumenttomethodrecipes$loglevelconfigsuppliertomethodrecipe)

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

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate JUL to Log4j 2.x API](/recipes/java/logging/log4j/jultolog4j.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.logging.Level;
import java.util.logging.Logger;

class Test {
    void test(Logger logger, String message) {
        logger.log(Level.FINEST, message);
        logger.log(Level.FINER, message);
        logger.log(Level.FINE, message);
        logger.log(Level.INFO, message);
        logger.log(Level.WARNING, message);
        logger.log(Level.SEVERE, message);
        logger.log(Level.CONFIG, message);
    }
}
```

###### After
```java
import java.util.logging.Logger;

class Test {
    void test(Logger logger, String message) {
        logger.finest(message);
        logger.finer(message);
        logger.fine(message);
        logger.info(message);
        logger.warning(message);
        logger.severe(message);
        logger.config(message);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,0 @@
-import java.util.logging.Level;
import java.util.logging.Logger;
@@ -6,7 +5,7 @@
class Test {
    void test(Logger logger, String message) {
-       logger.log(Level.FINEST, message);
-       logger.log(Level.FINER, message);
-       logger.log(Level.FINE, message);
-       logger.log(Level.INFO, message);
-       logger.log(Level.WARNING, message);
-       logger.log(Level.SEVERE, message);
-       logger.log(Level.CONFIG, message);
+       logger.finest(message);
+       logger.finer(message);
+       logger.fine(message);
+       logger.info(message);
+       logger.warning(message);
+       logger.severe(message);
+       logger.config(message);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes"
  displayName="Replace JUL Level arguments with the corresponding method calls"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.jul.LoggerLevelArgumentToMethodRecipes" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
