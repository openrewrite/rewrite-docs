---
sidebar_label: "Replace JUL active Level check with corresponding SLF4J method calls"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace JUL active Level check with corresponding SLF4J method calls

**org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes**

_Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls._

## Recipe source

[GitHub: JulToSlf4jLambdaSupplier.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/JulToSlf4jLambdaSupplier.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace JUL `Logger.finest(Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinestrecipe)
* [Replace JUL `Logger.finer(Supplier&lt;String&gt;)` with SLF4J's `Logger.atTrace().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerrecipe)
* [Replace JUL `Logger.fine(Supplier&lt;String&gt;)` with SLF4J's `Logger.atDebug().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierfinerecipe)
* [Replace JUL `Logger.config(Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierconfigrecipe)
* [Replace JUL `Logger.info(Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierinforecipe)
* [Replace JUL `Logger.warning(Supplier&lt;String&gt;)` with SLF4J's `Logger.atWarn().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierwarningrecipe)
* [Replace JUL `Logger.severe(Supplier&lt;String&gt;)` with SLF4J's `Logger.atError().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsuppliersevererecipe)
* [Replace JUL `Logger.log(Level.FINEST, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinestrecipe)
* [Replace JUL `Logger.log(Level.FINER, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerrecipe)
* [Replace JUL `Logger.log(Level.FINE, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogfinerecipe)
* [Replace JUL `Logger.log(Level.CONFIG, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogconfigrecipe)
* [Replace JUL `Logger.log(Level.INFO, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierloginforecipe)
* [Replace JUL `Logger.log(Level.WARNING, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogwarningrecipe)
* [Replace JUL `Logger.log(Level.SEVERE, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogsevererecipe)
* [Replace JUL `Logger.log(Level.ALL, Supplier&lt;String&gt;)` with SLF4J's `Logger.atInfo().log(Supplier&lt;String&gt;)`](../../../java/logging/slf4j/jultoslf4jlambdasupplierrecipes$jultoslf4jsupplierlogallrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes
displayName: Replace JUL active Level check with corresponding SLF4J method calls
description: |
  Replace calls to `Logger.isLoggable(Level)` with the corresponding SLF4J method calls.
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
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate JUL to SLF4J](/recipes/java/logging/slf4j/jultoslf4j.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes"
  displayName="Replace JUL active Level check with corresponding SLF4J method calls"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.JulToSlf4jLambdaSupplierRecipes" />

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
