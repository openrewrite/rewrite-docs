---
sidebar_label: "`ImmutableMapRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `ImmutableMapRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes**

_Refaster rules related to expressions dealing with `ImmutableMap`s. [Source](https://error-prone.picnic.tech/refasterrules/ImmutableMapRules)._

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `ImmutableMapRules.ImmutableMapBuilder`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapbuilderrecipe)
* [Refaster template `ImmutableMapRules.ImmutableMapBuilderBuildOrThrow`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapbuilderbuildorthrowrecipe)
* [Refaster template `ImmutableMapRules.EntryToImmutableMap`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$entrytoimmutablemaprecipe)
* [Refaster template `ImmutableMapRules.EntryIterableToImmutableMap`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$entryiterabletoimmutablemaprecipe)
* [Refaster template `ImmutableMapRules.ImmutableMapOf`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapofrecipe)
* [Refaster template `ImmutableMapRules.ImmutableMapOf1`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof1recipe)
* [Refaster template `ImmutableMapRules.ImmutableMapOf2`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof2recipe)
* [Refaster template `ImmutableMapRules.ImmutableMapOf3`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof3recipe)
* [Refaster template `ImmutableMapRules.ImmutableMapOf4`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof4recipe)
* [Refaster template `ImmutableMapRules.ImmutableMapOf5`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapof5recipe)
* [Refaster template `ImmutableMapRules.ImmutableMapBuilderPut`](../../../../tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapbuilderputrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes
displayName: `ImmutableMapRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with `ImmutableMap`s. [Source](https://error-prone.picnic.tech/refasterrules/ImmutableMapRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderRecipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderBuildOrThrowRecipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$EntryToImmutableMapRecipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$EntryIterableToImmutableMapRecipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOfRecipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf1Recipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf2Recipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf3Recipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf4Recipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf5Recipe
  - tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderPutRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/tech/picnic/errorprone/refasterrules/allrefasterrules.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes"
  displayName="`ImmutableMapRules` Refaster recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes" />

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
