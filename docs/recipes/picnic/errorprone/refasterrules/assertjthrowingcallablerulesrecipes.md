---
title: "Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype"
sidebar_label: "Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype

**tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes**

_For reasons of consistency we prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over static methods for specific exception  types. Note that only the most common assertion expressions are rewritten here; covering all  cases would require the implementation of an Error Prone check instead. [Source](https://error-prone.picnic.tech/refasterrules/AssertJThrowingCallableRules)._

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOf`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClass`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclassrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassRootCauseHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclassrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageVarargs`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagevarargsrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageStartingWith`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageNotContainingAny`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalargumentexceptionclasshasmessagenotcontaininganyrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClass`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclassrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClassRootCauseHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclassrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageVarargs`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagevarargsrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageStartingWith`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageNotContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofillegalstateexceptionclasshasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClass`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclassrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClassRootCauseHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclassrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageVarargs`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagevarargsrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageStartingWith`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageNotContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofnullpointerexceptionclasshasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClass`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclassrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClassHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClassRootCauseHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclassrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageVarargs`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagevarargsrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageStartingWith`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageNotContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofioexceptionclasshasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByAsInstanceOfThrowable`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyasinstanceofthrowablerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfRootCauseHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofrootcausehasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfHasMessageVarargs`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagevarargsrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfHasMessageStartingWith`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagestartingwithrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfHasMessageContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagecontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AssertThatThrownByIsInstanceOfHasMessageNotContaining`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyisinstanceofhasmessagenotcontainingrecipe)
* [Refaster template `AssertJThrowingCallableRules.AbstractThrowableAssertHasMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$abstractthrowableasserthasmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AbstractThrowableAssertWithFailMessage`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$abstractthrowableassertwithfailmessagerecipe)
* [Refaster template `AssertJThrowingCallableRules.AbstractThrowableAssertCauseIsSameAs`](../../../picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$abstractthrowableassertcauseissameasrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes
displayName: Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype
description: |
  For reasons of consistency we prefer `org.assertj.core.api.Assertions#assertThatThrownBy` over static methods for specific exception  types. Note that only the most common assertion expressions are rewritten here; covering all  cases would require the implementation of an Error Prone check instead. [Source](https://error-prone.picnic.tech/refasterrules/AssertJThrowingCallableRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalArgumentExceptionClassHasMessageNotContainingAnyRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIllegalStateExceptionClassHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfNullPointerExceptionClassHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfIOExceptionClassHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByAsInstanceOfThrowableRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfRootCauseHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageVarargsRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageStartingWithRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfHasMessageNotContainingRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AbstractThrowableAssertHasMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AbstractThrowableAssertWithFailMessageRecipe
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AbstractThrowableAssertCauseIsSameAsRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)
* [AssertJ best practices](/recipes/java/testing/assertj/assertj-best-practices.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes"
  displayName="Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes" />

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
