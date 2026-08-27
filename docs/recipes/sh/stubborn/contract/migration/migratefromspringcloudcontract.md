---
title: "Migrate from Spring Cloud Contract to Stubborn Contract"
sidebar_label: "Migrate from Spring Cloud Contract to Stubborn Contract"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from Spring Cloud Contract to Stubborn Contract

**sh.stubborn.contract.migration.MigrateFromSpringCloudContract**

_Composite recipe that updates Maven/Gradle coordinates, Java package names, and drops JUnit 4 StubRunner / Verifier usage. Run this after adding stubborn-contract-migration to your build's rewrite plugin configuration._

### Tags

* [migration](/reference/recipes-by-tag#migration)
* [spring-cloud-contract](/reference/recipes-by-tag#spring)
* [stubborn-contract](/reference/recipes-by-tag#stubborn)

## Recipe source

[GitHub: search?type=code&q=sh.stubborn.contract.migration.MigrateFromSpringCloudContract](https://github.com/search?type=code&q=sh.stubborn.contract.migration.MigrateFromSpringCloudContract),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Update Spring Cloud Contract coordinates to Stubborn Contract](../../../../sh/stubborn/contract/migration/updatedependencies)
* [Rename org.springframework.cloud.contract packages to sh.stubborn.contract](../../../../sh/stubborn/contract/migration/renamejavapackages)
* [Migrate deprecated Stub Runner property prefix to the canonical one](../../../../sh/stubborn/contract/migration/migratestubrunnerproperties)
* [Migrate deprecated Verifier property prefix to the canonical one](../../../../sh/stubborn/contract/migration/migrateverifierproperties)
* [Migrate StubRunner JUnit 4 Rule to JUnit 5 Extension](../../../../sh/stubborn/contract/migration/dropjunit4support)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: sh.stubborn.contract.migration.MigrateFromSpringCloudContract
displayName: Migrate from Spring Cloud Contract to Stubborn Contract
description: |
  Composite recipe that updates Maven/Gradle coordinates, Java package names, and drops JUnit 4 StubRunner / Verifier usage. Run this after adding stubborn-contract-migration to your build's rewrite plugin configuration.
tags:
  - migration
  - spring-cloud-contract
  - stubborn-contract
recipeList:
  - sh.stubborn.contract.migration.UpdateDependencies
  - sh.stubborn.contract.migration.RenameJavaPackages
  - sh.stubborn.contract.migration.MigrateStubRunnerProperties
  - sh.stubborn.contract.migration.MigrateVerifierProperties
  - sh.stubborn.contract.migration.DropJUnit4Support

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="sh.stubborn.contract.migration.MigrateFromSpringCloudContract"
  displayName="Migrate from Spring Cloud Contract to Stubborn Contract"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/sh.stubborn.contract.migration.MigrateFromSpringCloudContract" />

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
