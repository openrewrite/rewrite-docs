---
title: "Refaster rules that replace TestNG APIs with AssertJ equivalents"
sidebar_label: "Refaster rules that replace TestNG APIs with AssertJ equivalents"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Refaster rules that replace TestNG APIs with AssertJ equivalents

**tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes**

Some of the classes below have TestNG `@BeforeTemplate`s that reference wildcard type
 bounds (`<?>`), while the associated AssertJ `@AfterTemplate`s reference stricter
 type bounds. This introduces the risk of producing invalid code. We do this anyway, because
 TestNG's wildcard types can cause javac to infer less specific types than AssertJ requires, while
 the appropriate (more specific) types _will_ be inferred properly when plugged into AssertJ's
 API.

 The following is an example of a TestNG statement, which would not be rewritten if it weren't
 for the wildcard matching (note that the type parameters of the map on the right-hand side will
 be inferred to be `<Object, Object>` rather than `<String, Object>`).

 ```java
 List<Map<String, Object>> myMaps = new ArrayList<>();
 assertEquals(myMaps, ImmutableList.of(ImmutableMap.of()));
 ```


 <strong>Warning:</strong> while both libraries throw an `AssertionError` in case of an
 assertion failure, the exact subtype used generally differs.
[Source](https://error-prone.picnic.tech/refasterrules/TestNGToAssertJRules).

## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `TestNGToAssertJRules.Fail`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$failrecipe)
* [Refaster template `TestNGToAssertJRules.FailWithString`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$failwithstringrecipe)
* [Refaster template `TestNGToAssertJRules.FailWithStringAndThrowable`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$failwithstringandthrowablerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsTrue`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatistruerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsTrue`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageistruerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsFalse`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisfalserecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsFalse`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisfalserecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsNull`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnullrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsNull`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnullrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsNotNull`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotnullrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsNotNull`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotnullrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsSameAs`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatissameasrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsSameAs`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageissameasrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsNotSameAs`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotsameasrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsNotSameAs`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotsameasrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsEqualTo`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisequaltorecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsEqualTo`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisequaltorecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsCloseToOffsetFloat`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisclosetooffsetfloatrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsCloseToOffsetFloat`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisclosetooffsetfloatrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsCloseToOffsetDouble`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisclosetooffsetdoublerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsCloseToOffsetDouble`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisclosetooffsetdoublerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatContainsExactly`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageContainsExactly`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatContainsExactlyOffsetFloat`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyoffsetfloatrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageContainsExactlyOffsetFloat`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetfloatrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatContainsExactlyOffsetDouble`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyoffsetdoublerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageContainsExactlyOffsetDouble`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetdoublerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatContainsExactlyInAnyOrder`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyinanyorderrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageContainsExactlyInAnyOrder`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyinanyorderrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatToIterableContainsExactlyElementsOfImmutableListCopyOf`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthattoiterablecontainsexactlyelementsofimmutablelistcopyofrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatToIterableWithFailMessageContainsExactlyElementsOfImmutableListCopyOf`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthattoiterablewithfailmessagecontainsexactlyelementsofimmutablelistcopyofrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatContainsExactlyElementsOf`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatcontainsexactlyelementsofrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageContainsExactlyElementsOf`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyelementsofrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatHasSameElementsAs`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthathassameelementsasrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageHasSameElementsAs`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessagehassameelementsasrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsNotEqualTo`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotequaltorecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsNotEqualTo`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotequaltorecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsNotCloseToOffsetFloat`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotclosetooffsetfloatrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsNotCloseToOffsetFloat`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotclosetooffsetfloatrecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatIsNotCloseToOffsetDouble`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatisnotclosetooffsetdoublerecipe)
* [Refaster template `TestNGToAssertJRules.AssertThatWithFailMessageIsNotCloseToOffsetDouble`](../../../picnic/errorprone/refasterrules/testngtoassertjrulesrecipes$assertthatwithfailmessageisnotclosetooffsetdoublerecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes
displayName: Refaster rules that replace TestNG APIs with AssertJ equivalents
description: |
  Some of the classes below have TestNG `@BeforeTemplate`s that reference wildcard type  bounds (`&lt;?&gt;`), while the associated AssertJ `@AfterTemplate`s reference stricter  type bounds. This introduces the risk of producing invalid code. We do this anyway, because  TestNG's wildcard types can cause javac to infer less specific types than AssertJ requires, while  the appropriate (more specific) types _will_ be inferred properly when plugged into AssertJ's  API.   The following is an example of a TestNG statement, which would not be rewritten if it weren't  for the wildcard matching (note that the type parameters of the map on the right-hand side will  be inferred to be `&lt;Object, Object&gt;` rather than `&lt;String, Object&gt;`).   ```java  List&lt;Map&lt;String, Object&gt;&gt; myMaps = new ArrayList&lt;&gt;();  assertEquals(myMaps, ImmutableList.of(ImmutableMap.of()));  ```    &lt;strong&gt;Warning:&lt;/strong&gt; while both libraries throw an `AssertionError` in case of an  assertion failure, the exact subtype used generally differs. [Source](https://error-prone.picnic.tech/refasterrules/TestNGToAssertJRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailWithStringRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$FailWithStringAndThrowableRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNullRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNullRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsEqualToRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsEqualToRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsCloseToOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsCloseToOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsCloseToOffsetDoubleRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsCloseToOffsetDoubleRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyOffsetDoubleRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetDoubleRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyInAnyOrderRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyInAnyOrderRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatToIterableContainsExactlyElementsOfImmutableListCopyOfRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatToIterableWithFailMessageContainsExactlyElementsOfImmutableListCopyOfRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatContainsExactlyElementsOfRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyElementsOfRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatHasSameElementsAsRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageHasSameElementsAsRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotEqualToRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotEqualToRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotCloseToOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotCloseToOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatIsNotCloseToOffsetDoubleRecipe
  - tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThatWithFailMessageIsNotCloseToOffsetDoubleRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)
* [Migrate TestNG assertions to AssertJ](/recipes/java/testing/testng/testngtoassertj.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes"
  displayName="Refaster rules that replace TestNG APIs with AssertJ equivalents"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes" />

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
