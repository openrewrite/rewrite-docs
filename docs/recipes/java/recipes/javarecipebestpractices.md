---
sidebar_label: "Java Recipe best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Java Recipe best practices

**org.openrewrite.java.recipes.JavaRecipeBestPractices**

_Best practices for Java recipe development._

## Recipe source

[GitHub: recipebestpractice.yml](https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/resources/META-INF/rewrite/recipebestpractice.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-rewrite/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add a blank line around fields with annotations](../../java/recipes/blanklinesaroundfieldswithannotations)
* [Correctly spaced descriptions](../../java/recipes/correctlyspaceddescriptions)
* [Use a standard name for `ExecutionContext`](../../java/recipes/executioncontextparametername)
* [Use `J.Literal.isLiteralValue(expression, null)`](../../java/recipes/isliteralnullrecipe)
* [Find missing `@Option` `example` values](../../java/recipes/missingoptionexample)
* [Recipe classes should not have mutable `static` fields](../../java/recipes/nomutablestaticfieldsinrecipes)
* [Use of `@EqualsAndHashCode` on `Recipe`](../../java/recipes/recipeequalsandhashcodecallsuper)
* [Recipe classes should be public](../../java/recipes/recipeclassesshouldbepublic)
* [Reorder `maybeRemoveImport` before `maybeAddImport`](../../java/recipes/removeimportbeforeaddimport)
* [Replace `getDisplayName()` and `getDescription()` methods with fields](../../java/recipes/usedisplaynameanddescriptionfields)
* [Replace `getEstimatedEffortPerOccurrence()` method with field](../../java/recipes/useestimatedeffortperoccurrencefield)
* [Use `StringUtils` utility methods](../../java/recipes/usestringutilsrecipes)
* [Replace `getTags()` method with field](../../java/recipes/usetagsfield)
* [Use `Tree.randomId()` in LST constructors](../../java/recipes/usetreerandomid)
* [Use `visit` with parent cursor when calling from another visitor](../../java/recipes/usevisitwithparentcursor)
* [Fix missing braces](../../staticanalysis/needbraces)
* [Remove `System.out#println` statements](../../staticanalysis/removesystemoutprintln)
* [Remove `@NlsRewrite` annotations from `Recipe` classes](../../java/recipes/removenlsrewriteannotations)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.recipes.JavaRecipeBestPractices
displayName: Java Recipe best practices
description: |
  Best practices for Java recipe development.
recipeList:
  - org.openrewrite.java.recipes.BlankLinesAroundFieldsWithAnnotations
  - org.openrewrite.java.recipes.CorrectlySpacedDescriptions
  - org.openrewrite.java.recipes.ExecutionContextParameterName
  - org.openrewrite.java.recipes.IsLiteralNullRecipe
  - org.openrewrite.java.recipes.MissingOptionExample
  - org.openrewrite.java.recipes.NoMutableStaticFieldsInRecipes
  - org.openrewrite.java.recipes.RecipeEqualsAndHashCodeCallSuper
  - org.openrewrite.java.recipes.RecipeClassesShouldBePublic
  - org.openrewrite.java.recipes.RemoveImportBeforeAddImport
  - org.openrewrite.java.recipes.UseDisplayNameAndDescriptionFields
  - org.openrewrite.java.recipes.UseEstimatedEffortPerOccurrenceField
  - org.openrewrite.java.recipes.UseStringUtilsRecipes
  - org.openrewrite.java.recipes.UseTagsField
  - org.openrewrite.java.recipes.UseTreeRandomId
  - org.openrewrite.java.recipes.UseVisitWithParentCursor
  - org.openrewrite.staticanalysis.NeedBraces
  - org.openrewrite.staticanalysis.RemoveSystemOutPrintln
  - org.openrewrite.java.recipes.RemoveNlsRewriteAnnotations

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [OpenRewrite recipe best practices](/recipes/recipes/rewrite/openrewriterecipebestpractices.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.recipes.JavaRecipeBestPractices"
  displayName="Java Recipe best practices"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-rewrite"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.recipes.JavaRecipeBestPractices" />

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
