---
title: "`StringRules` Refaster recipes"
sidebar_label: "`StringRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `StringRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.StringRulesRecipes**

_Refaster rules related to expressions dealing with `String`s. [Source](https://error-prone.picnic.tech/refasterrules/StringRules)._

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.StringRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.StringRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `StringRules.EmptyString`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$emptystringrecipe)
* [Refaster template `StringRules.StringIdentity`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringidentityrecipe)
* [Refaster template `StringRules.StringIsEmptyWithString`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptywithstringrecipe)
* [Refaster template `StringRules.StringIsEmpty`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptyrecipe)
* [Refaster template `StringRules.NotStringIsEmpty`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$notstringisemptyrecipe)
* [Refaster template `StringRules.StringsIsNullOrEmpty`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringsisnulloremptyrecipe)
* [Prefer `String#isBlank()` over less efficient alternatives](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringisblankrecipe)
* [Refaster template `StringRules.OptionalOfNullableFilterNotStringIsEmpty`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$optionalofnullablefilternotstringisemptyrecipe)
* [Refaster template `StringRules.OptionalFilterNotStringIsEmpty`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$optionalfilternotstringisemptyrecipe)
* [Refaster template `StringRules.StringJoin`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringjoinrecipe)
* [Refaster template `StringRules.StringJoinVarargs`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringjoinvarargsrecipe)
* [Refaster template `StringRules.StringValueOfWithObject`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofwithobjectrecipe)
* [Refaster template `StringRules.NewString3`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$newstring3recipe)
* [Refaster template `StringRules.NewString1`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$newstring1recipe)
* [Refaster template `StringRules.StringValueOf`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofrecipe)
* [Refaster template `StringRules.StringSubstring`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringsubstringrecipe)
* [Refaster template `StringRules.Utf8EncodedLength`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$utf8encodedlengthrecipe)
* [Refaster template `StringRules.MathMaxNegativeOneStringIndexOfMinusInt`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusintrecipe)
* [Refaster template `StringRules.MathMaxNegativeOneStringIndexOfMinusIntWithInt`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusintwithintrecipe)
* [Refaster template `StringRules.MathMaxNegativeOneStringIndexOfMinusString`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusstringrecipe)
* [Refaster template `StringRules.MathMaxNegativeOneStringIndexOfMinusStringWithInt`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringindexofminusstringwithintrecipe)
* [Refaster template `StringRules.MathMaxNegativeOneStringLastIndexOfMinusInt`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringlastindexofminusintrecipe)
* [Refaster template `StringRules.MathMaxNegativeOneStringLastIndexOfMinusString`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$mathmaxnegativeonestringlastindexofminusstringrecipe)
* [Refaster template `StringRules.StringLastIndexOfMinusOneInt`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofminusoneintrecipe)
* [Prefer `String#lastIndexOf(String, int)` over less efficient alternatives](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofminusonestringrecipe)
* [Refaster template `StringRules.StringStartsWith`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$stringstartswithrecipe)
* [Refaster template `StringRules.Formatted`](../../../picnic/errorprone/refasterrules/stringrulesrecipes$formattedrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.StringRulesRecipes
displayName: `StringRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with `String`s. [Source](https://error-prone.picnic.tech/refasterrules/StringRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$EmptyStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIdentityRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyWithStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$NotStringIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringsIsNullOrEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsBlankRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$OptionalOfNullableFilterNotStringIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$OptionalFilterNotStringIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringJoinRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringJoinVarargsRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfWithObjectRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewString3Recipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewString1Recipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringSubstringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$Utf8EncodedLengthRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusIntRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusIntWithIntRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringIndexOfMinusStringWithIntRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringLastIndexOfMinusIntRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$MathMaxNegativeOneStringLastIndexOfMinusStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfMinusOneIntRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfMinusOneStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringStartsWithRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$FormattedRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.Objects;
class Test {
  String test(Object object) {
    return Objects.toString(object);
  }
}
```

###### After
```java
class Test {
  String test(Object object) {
    return String.valueOf(object);
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,0 @@
-import java.util.Objects;
class Test {
@@ -4,1 +3,1 @@
class Test {
  String test(Object object) {
-   return Objects.toString(object);
+   return String.valueOf(object);
  }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.StringRulesRecipes"
  displayName="`StringRules` Refaster recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.StringRulesRecipes" />

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
