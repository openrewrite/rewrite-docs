---
title: "`AssertJRules` Refaster recipes"
sidebar_label: "`AssertJRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `AssertJRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.AssertJRulesRecipes**

_Refaster rules related to AssertJ expressions and statements. [Source](https://error-prone.picnic.tech/refasterrules/AssertJRules)._

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `AssertJRules.AssertThatHasValueOptionalDouble`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathasvalueoptionaldoublerecipe)
* [Refaster template `AssertJRules.AssertThatHasValueOptionalInt`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathasvalueoptionalintrecipe)
* [Refaster template `AssertJRules.AssertThatHasValueOptionalLong`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathasvalueoptionallongrecipe)
* [Refaster template `AssertJRules.ObjectEnumerableAssertContains`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$objectenumerableassertcontainsrecipe)
* [Refaster template `AssertJRules.ObjectEnumerableAssertDoesNotContain`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$objectenumerableassertdoesnotcontainrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlySet`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlysetrecipe)
* [Prefer `ListAssert#containsExactlyElementsOf(Iterable)` over less explicit alternatives](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyelementsoflistrecipe)
* [Prefer `AbstractCollectionAssert#hasSameElementsAs(Iterable)` over less explicit or more contrived alternatives](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathassameelementsassetrecipe)
* [Prefer `AbstractCollectionAssert#containsExactlyInAnyOrderElementsOf(Iterable)` over less explicit alternatives](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyorderelementsofmultisetrecipe)
* [Prefer `MapAssert#containsEntry(Object, Object)` over more contrived alternatives](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsentryrecipe)
* [Refaster template `AssertJRules.AssertThatContainsAnyElementsOf`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsanyelementsofrecipe)
* [Refaster template `AssertJRules.AssertThatContainsAnyOf`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsanyofrecipe)
* [Refaster template `AssertJRules.AssertThatContainsAnyOfVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsanyofvarargsrecipe)
* [Refaster template `AssertJRules.AssertThatContainsAll`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsallrecipe)
* [Refaster template `AssertJRules.AssertThatContains`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsrecipe)
* [Refaster template `AssertJRules.AssertThatContainsVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsvarargsrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlyElementsOfStream`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyelementsofstreamrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlyStream`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlystreamrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlyVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyvarargsrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlyInAnyOrderElementsOfStream`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyorderelementsofstreamrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlyInAnyOrder`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyorderrecipe)
* [Refaster template `AssertJRules.AssertThatContainsExactlyInAnyOrderVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsexactlyinanyordervarargsrecipe)
* [Refaster template `AssertJRules.AssertThatContainsSequence`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssequencerecipe)
* [Refaster template `AssertJRules.AssertThatContainsSequenceVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssequencevarargsrecipe)
* [Refaster template `AssertJRules.AssertThatContainsSubsequence`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssubsequencerecipe)
* [Refaster template `AssertJRules.AssertThatContainsSubsequenceVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainssubsequencevarargsrecipe)
* [Refaster template `AssertJRules.AssertThatDoesNotContainAnyElementsOf`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainanyelementsofrecipe)
* [Refaster template `AssertJRules.AssertThatDoesNotContain`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainrecipe)
* [Refaster template `AssertJRules.AssertThatDoesNotContainVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainvarargsrecipe)
* [Refaster template `AssertJRules.AssertThatDoesNotContainSequence`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainsequencerecipe)
* [Refaster template `AssertJRules.AssertThatDoesNotContainSequenceVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatdoesnotcontainsequencevarargsrecipe)
* [Refaster template `AssertJRules.AssertThatHasSameElementsAsStream`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthathassameelementsasstreamrecipe)
* [Refaster template `AssertJRules.AssertThatContainsOnly`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsonlyrecipe)
* [Refaster template `AssertJRules.AssertThatContainsOnlyVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatcontainsonlyvarargsrecipe)
* [Refaster template `AssertJRules.AssertThatIsSubsetOf`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatissubsetofrecipe)
* [Refaster template `AssertJRules.AssertThatIsSubsetOfVarargs`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatissubsetofvarargsrecipe)
* [Refaster template `AssertJRules.AssertThatAccepts`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatacceptsrecipe)
* [Refaster template `AssertJRules.AssertThatRejects`](../../../picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatrejectsrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.AssertJRulesRecipes
displayName: `AssertJRules` Refaster recipes
description: |
  Refaster rules related to AssertJ expressions and statements. [Source](https://error-prone.picnic.tech/refasterrules/AssertJRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasValueOptionalDoubleRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasValueOptionalIntRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasValueOptionalLongRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableAssertContainsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableAssertDoesNotContainRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlySetRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyElementsOfListRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasSameElementsAsSetRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderElementsOfMultisetRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsEntryRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAnyElementsOfRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAnyOfRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAnyOfVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsAllRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyElementsOfStreamRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyStreamRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderElementsOfStreamRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSequenceRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSequenceVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSubsequenceRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsSubsequenceVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainAnyElementsOfRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainSequenceRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatDoesNotContainSequenceVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatHasSameElementsAsStreamRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsOnlyRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatContainsOnlyVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatIsSubsetOfRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatIsSubsetOfVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatAcceptsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatRejectsRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)
* [AssertJ best practices](/recipes/java/testing/assertj/assertj-best-practices.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.AssertJRulesRecipes"
  displayName="`AssertJRules` Refaster recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJRulesRecipes" />

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
