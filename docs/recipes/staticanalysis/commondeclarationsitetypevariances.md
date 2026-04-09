---
sidebar_label: "Properly use declaration-site type variance for well-known types"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Properly use declaration-site type variance for well-known types

**org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances**

_When using a method parameter like `Function<IN, OUT>`, it should rather be `Function<? super IN, ? extends OUT>`. This recipe checks for method parameters of well-known types._

### Tags

* [RSPEC-S1217](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1217&open=java%3AS1217)

## Recipe source

[GitHub: static-analysis.yml](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../core/singleton)

**Recipes**

* [Properly use declaration-site type variance](../staticanalysis/declarationsitetypevariance)
  * variantTypes: `[java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances
displayName: Properly use declaration-site type variance for well-known types
description: |
  When using a method parameter like `Function&lt;IN, OUT&gt;`, it should rather be `Function&lt;? super IN, ? extends OUT&gt;`. This recipe checks for method parameters of well-known types.
tags:
  - RSPEC-S1217
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.staticanalysis.DeclarationSiteTypeVariance:
      variantTypes: [java.util.function.Consumer<IN>, java.util.function.BiPredicate<IN, IN>, java.util.function.DoubleFunction<OUT>, java.util.function.Function<IN, OUT>, java.util.function.IntFunction<OUT>, java.util.function.LongFunction<OUT>, java.util.function.ObjDoubleConsumer<IN>, java.util.function.ObjIntConsumer<IN>, java.util.function.ObjLongConsumer<IN>, java.util.function.Predicate<IN>, java.util.function.Supplier<OUT>, java.util.function.ToDoubleBiFunction<IN, IN>, java.util.function.ToDoubleFunction<IN>, java.util.function.ToIntBiFunction<IN, IN>, java.util.function.ToIntFunction<IN>, java.util.function.ToLongBiFunction<IN, IN>, java.util.function.ToLongFunction<IN>]

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances"
  displayName="Properly use declaration-site type variance for well-known types"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CommonDeclarationSiteTypeVariances" />

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
