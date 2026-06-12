---
title: "Upgrade to Axoniq Framework 5 (commercial)"
sidebar_label: "Upgrade to Axoniq Framework 5 (commercial)"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Axoniq Framework 5 (commercial)

**io.axoniq.framework.migration.UpgradeAxon4ToAxoniq5**

_Migrates an Axon Framework 4.x application to Axoniq Framework 5 (commercial). Composes `UpgradeAxon4ToAxon5` (the free leg) and then layers commercial-only migrations: BOM swap to `io.axoniq.framework:axoniq-framework-bom`, Spring Boot starter swap to `io.axoniq.framework:axoniq-spring-boot-starter`, source rewrites and Maven adds for Axon Server connector, sequenced dead-letter queue, and distributed messaging._

## Recipe source

[GitHub: search?type=code&q=io.axoniq.framework.migration.UpgradeAxon4ToAxoniq5](https://github.com/search?type=code&q=io.axoniq.framework.migration.UpgradeAxon4ToAxoniq5),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to free Axon Framework 5](../../../axonframework/migration/upgradeaxon4toaxon5)
* [Swap the BOM to Axoniq Framework 5 commercial](../../../axoniq/framework/migration/axon4toaxoniq5bom)
* [Migrate the Axon Server connector to Axoniq Framework 5](../../../axoniq/framework/migration/axon4toaxoniq5axonserverconnector)
* [Migrate the Sequenced Dead-Letter Queue to Axoniq Framework 5](../../../axoniq/framework/migration/axon4toaxoniq5deadletter)
* [Migrate distributed messaging components to Axoniq Framework 5](../../../axoniq/framework/migration/axon4toaxoniq5distributedmessaging)
* [Migrate to Axoniq event streaming (placeholder)](../../../axoniq/framework/migration/axon4toaxoniq5eventstreaming)
* [Swap the Spring Boot starter to Axoniq Framework 5 commercial](../../../axoniq/framework/migration/axon4toaxoniq5springboot)
* [Migrate the Axon Server Testcontainer to Axoniq Framework 5](../../../axoniq/framework/migration/axon4toaxoniq5testcontainer)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `io.axoniq.framework`
  * artifactId: `*`
  * newVersion: `5.1.1`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.axoniq.framework.migration.UpgradeAxon4ToAxoniq5
displayName: Upgrade to Axoniq Framework 5 (commercial)
description: |
  Migrates an Axon Framework 4.x application to Axoniq Framework 5 (commercial). Composes `UpgradeAxon4ToAxon5` (the free leg) and then layers commercial-only migrations: BOM swap to `io.axoniq.framework:axoniq-framework-bom`, Spring Boot starter swap to `io.axoniq.framework:axoniq-spring-boot-starter`, source rewrites and Maven adds for Axon Server connector, sequenced dead-letter queue, and distributed messaging.
recipeList:
  - org.axonframework.migration.UpgradeAxon4ToAxon5
  - io.axoniq.framework.migration.Axon4ToAxoniq5Bom
  - io.axoniq.framework.migration.Axon4ToAxoniq5AxonServerConnector
  - io.axoniq.framework.migration.Axon4ToAxoniq5DeadLetter
  - io.axoniq.framework.migration.Axon4ToAxoniq5DistributedMessaging
  - io.axoniq.framework.migration.Axon4ToAxoniq5EventStreaming
  - io.axoniq.framework.migration.Axon4ToAxoniq5SpringBoot
  - io.axoniq.framework.migration.Axon4ToAxoniq5Testcontainer
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: io.axoniq.framework
      artifactId: "*"
      newVersion: 5.1.1

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="io.axoniq.framework.migration.UpgradeAxon4ToAxoniq5"
  displayName="Upgrade to Axoniq Framework 5 (commercial)"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.axoniq.framework.migration.UpgradeAxon4ToAxoniq5" />

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
