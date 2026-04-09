---
sidebar_label: "Migrate to Spring Batch 5.0 from 4.3"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Batch 5.0 from 4.3

**org.openrewrite.java.spring.batch.SpringBatch4To5Migration**

_Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [batch](/reference/recipes-by-tag#batch)

## Recipe source

[GitHub: spring-batch-5.0.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-batch-5.0.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.batch`
  * artifactId: `*`
  * newVersion: `5.0.x`
  * overrideManagedVersion: `false`
* [Transform classes that extend `*ListenerSupport` to implement the `*Listener` interfaces instead](../../../java/spring/batch/listenersupportclasstointerface)
* [Migrate `JobBuilderFactory` to `JobBuilder`](../../../java/spring/batch/migratejobbuilderfactory)
* [Migrate `StepBuilderFactory` to `StepBuilder`](../../../java/spring/batch/migratestepbuilderfactory)
* [Add `PlatformTransactionManager` to `tasklet()` and `chunk()` calls](../../../java/spring/batch/addtransactionmanagertotaskletandchunk)
* [Migrate `ItemWriter`](../../../java/spring/batch/migrateitemwriterwrite)
* [Remove `DefaultBatchConfigurer`](../../../java/spring/batch/removedefaultbatchconfigurer)
* [Change the type of `skipCount` parameter in `SkipPolicy` from `int` to `long`](../../../java/spring/batch/upgradeskippolicyparametertype)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.metrics.BatchMetrics`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.observability.BatchMetrics`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.step.item.Chunk`
  * newFullyQualifiedTypeName: `org.springframework.batch.item.Chunk`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.configuration.annotation.ScopeConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.configuration.support.ScopeConfiguration`
* [Convert receive type in some invocation of StepExecution.xx()](../../../java/spring/batch/convertreceivetypewhencallstepexecutionmethod)
* [Migrate `Date` to `LocalDateTime` for Spring Batch timestamp methods](../../../java/spring/batch/migratestepexecutiontimestamptypes)
* [Migration invocation of JobParameter.toString to JobParameter.getValue.toString](../../../java/spring/batch/jobparametertostring)
* [Add class argument to `JobParameters`](../../../java/spring/batch/migratejobparameter)
* [Migrate method when it annotated by Spring Batch API](../../../java/spring/batch/migratemethodannotatedbybatchapi)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.configuration.support.JobRegistryBeanPostProcessor`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.configuration.support.JobRegistrySmartInitializingSingleton`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.batch.SpringBatch4To5Migration
displayName: Migrate to Spring Batch 5.0 from 4.3
description: |
  Migrate applications built on Spring Batch 4.3 to the latest Spring Batch 5.0 release.
tags:
  - spring
  - batch
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.batch
      artifactId: "*"
      newVersion: 5.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.spring.batch.ListenerSupportClassToInterface
  - org.openrewrite.java.spring.batch.MigrateJobBuilderFactory
  - org.openrewrite.java.spring.batch.MigrateStepBuilderFactory
  - org.openrewrite.java.spring.batch.AddTransactionManagerToTaskletAndChunk
  - org.openrewrite.java.spring.batch.MigrateItemWriterWrite
  - org.openrewrite.java.spring.batch.RemoveDefaultBatchConfigurer
  - org.openrewrite.java.spring.batch.UpgradeSkipPolicyParameterType
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.metrics.BatchMetrics
      newFullyQualifiedTypeName: org.springframework.batch.core.observability.BatchMetrics
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.step.item.Chunk
      newFullyQualifiedTypeName: org.springframework.batch.item.Chunk
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.configuration.annotation.ScopeConfiguration
      newFullyQualifiedTypeName: org.springframework.batch.core.configuration.support.ScopeConfiguration
  - org.openrewrite.java.spring.batch.ConvertReceiveTypeWhenCallStepExecutionMethod
  - org.openrewrite.java.spring.batch.MigrateStepExecutionTimestampTypes
  - org.openrewrite.java.spring.batch.JobParameterToString
  - org.openrewrite.java.spring.batch.MigrateJobParameter
  - org.openrewrite.java.spring.batch.MigrateMethodAnnotatedByBatchAPI
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.configuration.support.JobRegistryBeanPostProcessor
      newFullyQualifiedTypeName: org.springframework.batch.core.configuration.support.JobRegistrySmartInitializingSingleton

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Batch 6.0 from 5.2](/recipes/java/spring/batch/springbatch5to6migration.md)
* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.batch.SpringBatch4To5Migration"
  displayName="Migrate to Spring Batch 5.0 from 4.3"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.SpringBatch4To5Migration" />

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
