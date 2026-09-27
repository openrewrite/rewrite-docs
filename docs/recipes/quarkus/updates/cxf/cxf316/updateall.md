---
title: "Migrate quarkus-cxf to 3.16"
sidebar_label: "Migrate quarkus-cxf to 3.16"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate quarkus-cxf to 3.16

**io.quarkus.updates.cxf.cxf316.UpdateAll**

_quarkus-cxf 3.16.0 switched the default HTTP conduit to the Vert.x HttpClient, where hostname-verifier fails at runtime, and deprecated the per client trust-store*/key-store* options in favor of the Quarkus TLS registry. A safe automatic rewrite is not possible for every configuration, so this recipe only adds a deprecation warning comment at the top of the affected properties files and leaves the migration to the user._

## Recipe source

[GitHub: search?type=code&q=io.quarkus.updates.cxf.cxf316.UpdateAll](https://github.com/search?type=code&q=io.quarkus.updates.cxf.cxf316.UpdateAll),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Comment on deprecated properties](../../../../quarkus/updates/quarkiverse/cxf/commentdeprecatedproperties)
  * keyPattern: `(%[^.]+\.)?quarkus\.cxf\.client\.[^.]+\.(hostname-verifier|trust-store(-password|-type)?|key-store(-password|-type)?|key-password)`
  * comment: `Deprecation warning: this file uses deprecated quarkus-cxf TLS options (hostname-verifier, trust-store*, key-store*); if they are not migrated to the Quarkus TLS registry, they can silently stop working in 4.x - see https://docs.quarkiverse.io/quarkus-cxf/dev/release-notes/3.16.0.html`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.cxf.cxf316.UpdateAll
displayName: Migrate quarkus-cxf to 3.16
description: |
  quarkus-cxf 3.16.0 switched the default HTTP conduit to the Vert.x HttpClient, where hostname-verifier fails at runtime, and deprecated the per client trust-store*/key-store* options in favor of the Quarkus TLS registry. A safe automatic rewrite is not possible for every configuration, so this recipe only adds a deprecation warning comment at the top of the affected properties files and leaves the migration to the user.
recipeList:
  - io.quarkus.updates.quarkiverse.cxf.CommentDeprecatedProperties:
      keyPattern: (%[^.]+\.)?quarkus\.cxf\.client\.[^.]+\.(hostname-verifier|trust-store(-password|-type)?|key-store(-password|-type)?|key-password)
      comment: Deprecation warning: this file uses deprecated quarkus-cxf TLS options (hostname-verifier, trust-store*, key-store*); if they are not migrated to the Quarkus TLS registry, they can silently stop working in 4.x - see https://docs.quarkiverse.io/quarkus-cxf/dev/release-notes/3.16.0.html

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Quarkus Updates Aggregate 3.16.0](/recipes/quarkus/migratetoquarkus_v3_16_0.md)


## Usage

<RunRecipe
  recipeName="io.quarkus.updates.cxf.cxf316.UpdateAll"
  displayName="Migrate quarkus-cxf to 3.16"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.quarkus.updates.cxf.cxf316.UpdateAll" />

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
