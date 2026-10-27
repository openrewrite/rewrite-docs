---
title: "Upgrade `mockito-core` along with the Mockito that replaces PowerMock"
sidebar_label: "Upgrade `mockito-core` along with the Mockito that replaces PowerMock"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade `mockito-core` along with the Mockito that replaces PowerMock

**org.openrewrite.java.testing.mockito.UpgradeMockitoCoreReplacingPowerMock**

_Upgrades a declared `mockito-core` to at least the Mockito 3.x that replaces the PowerMock Mockito API. An older `mockito-core` would otherwise take precedence over the one `mockito-inline` depends on, so that `Mockito.mockStatic` and `MockedStatic` do not resolve. A declared `mockito-inline` is upgraded as well, as before 3.4 it depends on a `mockito-core` without `Mockito.mockStatic`. This runs after the PowerMock dependencies are replaced, so that it also upgrades the Mockito artifact that replaces them. A version managed by a BOM, such as the Mockito 3.3 of Spring Boot 2.2 and 2.3, is overridden as well, through its `mockito.version` property where the BOM uses one, so that the other Mockito artifacts it manages stay aligned._

### Tags

* [mockito](/reference/recipes-by-tag#mockito)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub: powermockito.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/powermockito.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Repository has dependency](../../../java/dependencies/search/repositoryhasdependency)
  * groupIdPattern: `org.powermock`
  * artifactIdPattern: `powermock-api-mockito*`

**Recipes**

* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.mockito`
  * artifactId: `mockito-core`
  * newVersion: `3.x`
  * overrideManagedVersion: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.mockito`
  * artifactId: `mockito-inline`
  * newVersion: `3.x`
  * overrideManagedVersion: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.UpgradeMockitoCoreReplacingPowerMock
displayName: Upgrade `mockito-core` along with the Mockito that replaces PowerMock
description: |
  Upgrades a declared `mockito-core` to at least the Mockito 3.x that replaces the PowerMock Mockito API. An older `mockito-core` would otherwise take precedence over the one `mockito-inline` depends on, so that `Mockito.mockStatic` and `MockedStatic` do not resolve. A declared `mockito-inline` is upgraded as well, as before 3.4 it depends on a `mockito-core` without `Mockito.mockStatic`. This runs after the PowerMock dependencies are replaced, so that it also upgrades the Mockito artifact that replaces them. A version managed by a BOM, such as the Mockito 3.3 of Spring Boot 2.2 and 2.3, is overridden as well, through its `mockito.version` property where the BOM uses one, so that the other Mockito artifacts it manages stay aligned.
tags:
  - mockito
  - testing
preconditions:
  - org.openrewrite.java.dependencies.search.RepositoryHasDependency:
      groupIdPattern: org.powermock
      artifactIdPattern: powermock-api-mockito*
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: mockito-core
      newVersion: 3.x
      overrideManagedVersion: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: mockito-inline
      newVersion: 3.x
      overrideManagedVersion: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Swap the PowerMock dependencies for Mockito](/recipes/java/testing/mockito/removepowermockdependencies.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.UpgradeMockitoCoreReplacingPowerMock"
  displayName="Upgrade `mockito-core` along with the Mockito that replaces PowerMock"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.UpgradeMockitoCoreReplacingPowerMock" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

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
