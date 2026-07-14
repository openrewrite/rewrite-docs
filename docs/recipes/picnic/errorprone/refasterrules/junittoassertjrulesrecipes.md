---
title: "Refaster rules that replace JUnit APIs with AssertJ equivalents"
sidebar_label: "Refaster rules that replace JUnit APIs with AssertJ equivalents"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Refaster rules that replace JUnit APIs with AssertJ equivalents

**tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes**

```
<strong>Warning:</strong> while both libraries throw an `AssertionError` in case of an
 assertion failure, the exact subtype used generally differs.
[Source](https://error-prone.picnic.tech/refasterrules/JUnitToAssertJRules).
```


## Recipe source

[GitHub: search?type=code&q=tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyBoolean`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlybooleanrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyBooleanString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybooleanstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyBooleanSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybooleansupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyByte`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlybyterecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyByteString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybytestringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyByteSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlybytesupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyChar`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlycharrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyCharString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlycharstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyCharSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlycharsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyShort`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyshortrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyShortString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyshortstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyShortSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyshortsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyInt`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyintrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyIntString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyintstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyIntSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyintsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyLong`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlylongrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyLongString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlylongstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyLongSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlylongsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyFloat`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyfloatrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyFloatString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyfloatstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyFloatSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyfloatsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyOffsetFloat`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyoffsetfloatrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyOffsetFloatString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetfloatstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyOffsetFloatSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetfloatsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyDouble`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlydoublerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyDoubleString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlydoublestringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyDoubleSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlydoublesupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyOffsetDouble`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyoffsetdoublerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyOffsetDoubleString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetdoublestringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyOffsetDoubleSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyoffsetdoublesupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatContainsExactlyObject`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatcontainsexactlyobjectrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyObjectString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyobjectstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageContainsExactlyObjectSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessagecontainsexactlyobjectsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.Fail`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failrecipe)
* [Refaster template `JUnitToAssertJRules.FailWithString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwithstringrecipe)
* [Refaster template `JUnitToAssertJRules.FailWithStringAndThrowable`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwithstringandthrowablerecipe)
* [Refaster template `JUnitToAssertJRules.FailWithThrowable`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$failwiththrowablerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsTrue`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatistruerecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsTrueString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageistruestringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsTrueSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageistruesupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsFalse`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisfalserecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsFalseString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisfalsestringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsFalseSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisfalsesupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNull`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsNullString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnullstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsNullSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnullsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNotNull`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnotnullrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsNotNullString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotnullstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsNotNullSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotnullsupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsSameAs`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatissameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsSameAsString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageissameasstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsSameAsSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageissameassupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsNotSameAs`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisnotsameasrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsNotSameAsString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotsameasstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsNotSameAsSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisnotsameassupplierrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatIsInstanceOf`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatisinstanceofrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsInstanceOfString`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisinstanceofstringrecipe)
* [Refaster template `JUnitToAssertJRules.AssertThatWithFailMessageIsInstanceOfSupplier`](../../../picnic/errorprone/refasterrules/junittoassertjrulesrecipes$assertthatwithfailmessageisinstanceofsupplierrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes
displayName: Refaster rules that replace JUnit APIs with AssertJ equivalents
description: |
  &lt;strong&gt;Warning:&lt;/strong&gt; while both libraries throw an `AssertionError` in case of an  assertion failure, the exact subtype used generally differs. [Source](https://error-prone.picnic.tech/refasterrules/JUnitToAssertJRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyBooleanRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyBooleanStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyBooleanSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyByteRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyByteStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyByteSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyCharRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyCharStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyCharSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyShortRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyShortStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyShortSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyIntRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyIntStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyIntSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyLongRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyLongStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyLongSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyFloatRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyFloatStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyFloatSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyOffsetFloatRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetFloatStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetFloatSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyDoubleRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyDoubleStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyDoubleSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyOffsetDoubleRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetDoubleStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyOffsetDoubleSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatContainsExactlyObjectRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyObjectStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageContainsExactlyObjectSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithStringAndThrowableRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithThrowableRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsTrueRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsTrueStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsTrueSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsFalseRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsFalseStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsFalseSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNullStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNullSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNotNullRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotNullStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotNullSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsSameAsStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsSameAsSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsNotSameAsRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotSameAsStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsNotSameAsSupplierRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsInstanceOfRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsInstanceOfStringRecipe
  - tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageIsInstanceOfSupplierRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/picnic/errorprone/refasterrules/allrefasterrules.md)
* [Migrate JUnit asserts to AssertJ](/recipes/java/testing/assertj/junittoassertj.md)


## Usage

<RunRecipe
  recipeName="tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes"
  displayName="Refaster rules that replace JUnit APIs with AssertJ equivalents"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes" />

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
