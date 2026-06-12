---
title: "Upgrade to free Axon Framework 5"
sidebar_label: "Upgrade to free Axon Framework 5"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to free Axon Framework 5

**org.axonframework.migration.UpgradeAxon4ToAxon5**

_Migrates an Axon Framework 4.x application to free (Apache 2.0) Axon Framework 5. Bumps the Axon Framework dependency versions, applies per-module rename recipes (one per core framework module), and renames Maven coordinates within the `org.axonframework.*` namespace. Does NOT touch features dropped from free AF5 (Axon Server, DLQ, DistributedCommandBus) — see `UpgradeAxon4ToAxoniq5` for the commercial path._

## Recipe source

[GitHub: search?type=code&q=org.axonframework.migration.UpgradeAxon4ToAxon5](https://github.com/search?type=code&q=org.axonframework.migration.UpgradeAxon4ToAxon5),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Java compiler target for Axon Framework 5](../../axonframework/migration/upgradejava)
* [Upgrade Kotlin to 2.x for Axon Framework 5](../../axonframework/migration/upgradekotlin)
* [Migrate to Spring Boot 3.5 (Community Edition)](../../java/spring/boot3/upgradespringboot_3_5-community-edition)
* [Migrate the Axon Framework BOM coordinates](../../axonframework/migration/axon4toaxon5bom)
* [Apply Axon Framework 5 common module renames](../../axonframework/migration/axon4toaxon5common)
* [Apply Axon Framework 5 serialization → conversion rename](../../axonframework/migration/axon4toaxon5conversion)
* [Apply Axon Framework 5 messaging module renames](../../axonframework/migration/axon4toaxon5messaging)
* [Apply Axon Framework 5 modelling module renames](../../axonframework/migration/axon4toaxon5modelling)
* [Apply Axon Framework 5 event-sourcing module renames](../../axonframework/migration/axon4toaxon5eventsourcing)
* [Apply Axon Framework 5 test module renames](../../axonframework/migration/axon4toaxon5test)
* [Migrate the Spring extension to Axon Framework 5](../../axonframework/migration/axon4toaxon5springextension)
* [Migrate the Spring Boot extension to Axon Framework 5](../../axonframework/migration/axon4toaxon5springbootextension)
* [Migrate the Spring Boot Actuator extension to Axon Framework 5](../../axonframework/migration/axon4toaxon5springbootactuatorextension)
* [Remove the unported axon-spring-aot extension](../../axonframework/migration/axon4toaxon5springaotextension)
* [Migrate the Dropwizard Metrics extension to Axon Framework 5](../../axonframework/migration/axon4toaxon5metricsdropwizardextension)
* [Migrate the Micrometer Metrics extension to Axon Framework 5](../../axonframework/migration/axon4toaxon5metricsmicrometerextension)
* [Migrate the OpenTelemetry tracing extension to Axon Framework 5 (placeholder)](../../axonframework/migration/axon4toaxon5tracingopentelemetryextension)
* [Migrate the Reactor extension to Axon Framework 5](../../axonframework/migration/axon4toaxon5reactorextension)
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.axonframework`
  * artifactId: `*`
  * newVersion: `5.1.1`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.axonframework.extensions.spring`
  * artifactId: `*`
  * newVersion: `5.1.1`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.axonframework.extensions.metrics`
  * artifactId: `*`
  * newVersion: `5.1.1`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.axonframework.extensions.tracing`
  * artifactId: `*`
  * newVersion: `5.1.1`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.axonframework.extensions.reactor`
  * artifactId: `*`
  * newVersion: `5.1.1`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.axonframework.migration.UpgradeAxon4ToAxon5
displayName: Upgrade to free Axon Framework 5
description: |
  Migrates an Axon Framework 4.x application to free (Apache 2.0) Axon Framework 5. Bumps the Axon Framework dependency versions, applies per-module rename recipes (one per core framework module), and renames Maven coordinates within the `org.axonframework.*` namespace. Does NOT touch features dropped from free AF5 (Axon Server, DLQ, DistributedCommandBus) — see `UpgradeAxon4ToAxoniq5` for the commercial path.
recipeList:
  - org.axonframework.migration.UpgradeJava
  - org.axonframework.migration.UpgradeKotlin
  - org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_5
  - org.axonframework.migration.Axon4ToAxon5Bom
  - org.axonframework.migration.Axon4ToAxon5Common
  - org.axonframework.migration.Axon4ToAxon5Conversion
  - org.axonframework.migration.Axon4ToAxon5Messaging
  - org.axonframework.migration.Axon4ToAxon5Modelling
  - org.axonframework.migration.Axon4ToAxon5EventSourcing
  - org.axonframework.migration.Axon4ToAxon5Test
  - org.axonframework.migration.Axon4ToAxon5SpringExtension
  - org.axonframework.migration.Axon4ToAxon5SpringBootExtension
  - org.axonframework.migration.Axon4ToAxon5SpringBootActuatorExtension
  - org.axonframework.migration.Axon4ToAxon5SpringAotExtension
  - org.axonframework.migration.Axon4ToAxon5MetricsDropwizardExtension
  - org.axonframework.migration.Axon4ToAxon5MetricsMicrometerExtension
  - org.axonframework.migration.Axon4ToAxon5TracingOpenTelemetryExtension
  - org.axonframework.migration.Axon4ToAxon5ReactorExtension
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.axonframework
      artifactId: "*"
      newVersion: 5.1.1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.axonframework.extensions.spring
      artifactId: "*"
      newVersion: 5.1.1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.axonframework.extensions.metrics
      artifactId: "*"
      newVersion: 5.1.1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.axonframework.extensions.tracing
      artifactId: "*"
      newVersion: 5.1.1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.axonframework.extensions.reactor
      artifactId: "*"
      newVersion: 5.1.1

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Axoniq Framework 5 (commercial)](/recipes/axoniq/framework/migration/upgradeaxon4toaxoniq5.md)


## Usage

<RunRecipe
  recipeName="org.axonframework.migration.UpgradeAxon4ToAxon5"
  displayName="Upgrade to free Axon Framework 5"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.axonframework.migration.UpgradeAxon4ToAxon5" />

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
