---
title: "Use `ASN1*String` for the result of `DER*String.getInstance(..)`"
sidebar_label: "Use `ASN1*String` for the result of `DER*String.getInstance(..)`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `ASN1*String` for the result of `DER*String.getInstance(..)`

**org.openrewrite.java.migrate.BouncyCastleDerStringGetInstanceReturnType**

_In Bouncy Castle 1.71 the `getInstance(..)` methods on the `DER*String` ASN.1 types were pulled up to their `ASN1*String` supertypes, widening their return type. The call itself still compiles, as static methods are inherited, but assigning the result to a `DER*String` variable or field no longer does. This recipe widens those declared types to the matching `ASN1*String`, which compiles against both the `-jdk15on` and `-jdk18on` artifacts, and can therefore safely be applied ahead of the upgrade._

### Tags

* [bouncycastle](/reference/recipes-by-tag#bouncycastle)

## Recipe source

[GitHub: bouncycastle-jdk18on.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/bouncycastle-jdk18on.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERBMPString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1BMPString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERBitString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1BitString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERGeneralString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1GeneralString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERGraphicString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1GraphicString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERIA5String getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1IA5String`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERNumericString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1NumericString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERPrintableString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1PrintableString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERT61String getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1T61String`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERUTF8String getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1UTF8String`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERUniversalString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1UniversalString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERVideotexString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1VideotexString`
* [Change method invocation return type](../../java/changemethodinvocationreturntype)
  * methodPattern: `org.bouncycastle.asn1.DERVisibleString getInstance(..)`
  * newReturnType: `org.bouncycastle.asn1.ASN1VisibleString`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.BouncyCastleDerStringGetInstanceReturnType
displayName: Use `ASN1*String` for the result of `DER*String.getInstance(..)`
description: |
  In Bouncy Castle 1.71 the `getInstance(..)` methods on the `DER*String` ASN.1 types were pulled up to their `ASN1*String` supertypes, widening their return type. The call itself still compiles, as static methods are inherited, but assigning the result to a `DER*String` variable or field no longer does. This recipe widens those declared types to the matching `ASN1*String`, which compiles against both the `-jdk15on` and `-jdk18on` artifacts, and can therefore safely be applied ahead of the upgrade.
tags:
  - bouncycastle
recipeList:
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERBMPString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1BMPString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERBitString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1BitString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERGeneralString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1GeneralString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERGraphicString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1GraphicString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERIA5String getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1IA5String
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERNumericString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1NumericString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERPrintableString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1PrintableString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERT61String getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1T61String
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERUTF8String getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1UTF8String
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERUniversalString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1UniversalString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERVideotexString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1VideotexString
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: org.bouncycastle.asn1.DERVisibleString getInstance(..)
      newReturnType: org.bouncycastle.asn1.ASN1VisibleString

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Bouncy Castle to `jdk18on`](/recipes/java/migrate/bouncecastlefromjdk15ontojdk18on.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.BouncyCastleDerStringGetInstanceReturnType"
  displayName="Use `ASN1*String` for the result of `DER*String.getInstance(..)`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.BouncyCastleDerStringGetInstanceReturnType" />

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
