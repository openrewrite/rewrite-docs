---
title: "Migrate to the new chunk-oriented step model"
sidebar_label: "Migrate to the new chunk-oriented step model"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to the new chunk-oriented step model

**org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder**

_Spring Batch 6.0 deprecates `StepBuilder.chunk(int, PlatformTransactionManager)` in favor of a new chunk-oriented model, where the transaction manager is configured through `ChunkOrientedStepBuilder.transactionManager(PlatformTransactionManager)`. Replaces `chunk(chunkSize, transactionManager)` with `chunk(chunkSize).transactionManager(transactionManager)`, but only where every other method in the builder chain has an equivalent on `ChunkOrientedStepBuilder`. The new model dropped the Spring Retry based chunk and retry APIs without a drop-in replacement, so chains calling `backOffPolicy`, `retryPolicy`, `retryContextCache`, `keyGenerator`, `noRetry`, `noRollback`, `noSkip`, `processorNonTransactional`, `readerIsTransactionalQueue`, `chunkOperations`, `stepOperations`, `exceptionHandler`, `listener(RetryListener)`, `chunk(CompletionPolicy, PlatformTransactionManager)` or `taskExecutor(TaskExecutor)` with a non-async executor are left untouched, and remain a manual migration step. See the [Spring Batch 6.0 migration guide](https://github.com/spring-projects/spring-batch/wiki/Spring-Batch-6.0-Migration-Guide#new-chunk-oriented-model-implementation)._

## Recipe source

[GitHub: MigrateToChunkOrientedStepBuilder.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/batch/MigrateToChunkOrientedStepBuilder.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Batch 6.0 from 5.2](/recipes/java/spring/batch/springbatch5to6migration.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.transaction.PlatformTransactionManager;

class MyJobConfig {
    Step myStep(JobRepository jobRepository, PlatformTransactionManager transactionManager,
                ItemReader<String> reader, ItemWriter<String> writer) {
        return new StepBuilder("myStep", jobRepository)
                .<String, String>chunk(10, transactionManager)
                .reader(reader)
                .writer(writer)
                .build();
    }
}
```

###### After
```java
import org.springframework.batch.core.Step;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.batch.item.ItemReader;
import org.springframework.batch.item.ItemWriter;
import org.springframework.transaction.PlatformTransactionManager;

class MyJobConfig {
    Step myStep(JobRepository jobRepository, PlatformTransactionManager transactionManager,
                ItemReader<String> reader, ItemWriter<String> writer) {
        return new StepBuilder("myStep", jobRepository)
                .<String, String>chunk(10)
                .transactionManager(transactionManager)
                .reader(reader)
                .writer(writer)
                .build();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,1 +12,2 @@
                ItemReader<String> reader, ItemWriter<String> writer) {
        return new StepBuilder("myStep", jobRepository)
-               .<String, String>chunk(10, transactionManager)
+               .<String, String>chunk(10)
+               .transactionManager(transactionManager)
                .reader(reader)
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder"
  displayName="Migrate to the new chunk-oriented step model"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.MigrateToChunkOrientedStepBuilder" />

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
