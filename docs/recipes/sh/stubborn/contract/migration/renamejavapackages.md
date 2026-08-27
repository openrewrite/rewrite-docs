---
title: "Rename org.springframework.cloud.contract packages to sh.stubborn.contract"
sidebar_label: "Rename org.springframework.cloud.contract packages to sh.stubborn.contract"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename org.springframework.cloud.contract packages to sh.stubborn.contract

**sh.stubborn.contract.migration.RenameJavaPackages**

_Recursively rewrites all Java import statements from org.springframework.cloud.contract.* to sh.stubborn.contract.*, and the JSON/XML assertion packages from com.toomuchcoding.* to sh.stubborn.*._

### Tags

* [spring-cloud-contract](/reference/recipes-by-tag#spring)
* [stubborn-contract](/reference/recipes-by-tag#stubborn)

## Recipe source

[GitHub: search?type=code&q=sh.stubborn.contract.migration.RenameJavaPackages](https://github.com/search?type=code&q=sh.stubborn.contract.migration.RenameJavaPackages),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.springframework.cloud.contract.verifier.openapivalidation`
  * newPackageName: `sh.stubborn.contract.openapi.validation`
  * recursive: `true`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.OpenApiContractConverter`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.OpenApiContractConverter`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.Oa3ToScc`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.Oa3ToScc`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.Oa3ToSccRequest`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.Oa3ToSccRequest`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.Oa3ToSccResponse`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.Oa3ToSccResponse`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.Oa3Spec`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.Oa3Spec`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.Oa3Parser`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.Oa3Parser`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.TempYamlToContracts`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.TempYamlToContracts`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.contract.verifier.converter.ServiceNameVerifier`
  * newFullyQualifiedTypeName: `sh.stubborn.contract.openapi.converter.ServiceNameVerifier`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.springframework.cloud.contract`
  * newPackageName: `sh.stubborn.contract`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `com.toomuchcoding.jsonassert`
  * newPackageName: `sh.stubborn.jsonassert`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `com.toomuchcoding.xmlassert`
  * newPackageName: `sh.stubborn.xmlassert`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: sh.stubborn.contract.migration.RenameJavaPackages
displayName: Rename org.springframework.cloud.contract packages to sh.stubborn.contract
description: |
  Recursively rewrites all Java import statements from org.springframework.cloud.contract.* to sh.stubborn.contract.*, and the JSON/XML assertion packages from com.toomuchcoding.* to sh.stubborn.*.
tags:
  - spring-cloud-contract
  - stubborn-contract
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.cloud.contract.verifier.openapivalidation
      newPackageName: sh.stubborn.contract.openapi.validation
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.OpenApiContractConverter
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.OpenApiContractConverter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.Oa3ToScc
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.Oa3ToScc
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.Oa3ToSccRequest
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.Oa3ToSccRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.Oa3ToSccResponse
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.Oa3ToSccResponse
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.Oa3Spec
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.Oa3Spec
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.Oa3Parser
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.Oa3Parser
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.TempYamlToContracts
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.TempYamlToContracts
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.contract.verifier.converter.ServiceNameVerifier
      newFullyQualifiedTypeName: sh.stubborn.contract.openapi.converter.ServiceNameVerifier
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.cloud.contract
      newPackageName: sh.stubborn.contract
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.toomuchcoding.jsonassert
      newPackageName: sh.stubborn.jsonassert
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.toomuchcoding.xmlassert
      newPackageName: sh.stubborn.xmlassert
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Spring Cloud Contract to Stubborn Contract](/recipes/sh/stubborn/contract/migration/migratefromspringcloudcontract.md)


## Usage

<RunRecipe
  recipeName="sh.stubborn.contract.migration.RenameJavaPackages"
  displayName="Rename org.springframework.cloud.contract packages to sh.stubborn.contract"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/sh.stubborn.contract.migration.RenameJavaPackages" />

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
