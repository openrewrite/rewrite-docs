---
sidebar_label: "Migrate to Spring Batch 6.0 from 5.2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Spring Batch 6.0 from 5.2

**org.openrewrite.java.spring.batch.SpringBatch5To6Migration**

_Migrate applications built on Spring Batch 5.2 to the latest Spring Batch 6.0 release._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [batch](/reference/recipes-by-tag#batch)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-batch-6.0.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Spring Batch 5.0 from 4.3](../../../java/spring/batch/springbatch4to5migration)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework.batch`
  * artifactId: `*`
  * newVersion: `6.0.x`
  * overrideManagedVersion: `false`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.batch.item`
  * newPackageName: `org.springframework.batch.infrastructure.item`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.batch.poller`
  * newPackageName: `org.springframework.batch.infrastructure.poller`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.batch.repeat`
  * newPackageName: `org.springframework.batch.infrastructure.repeat`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.batch.support`
  * newPackageName: `org.springframework.batch.infrastructure.support`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.batch.core.explore`
  * newPackageName: `org.springframework.batch.core.repository.explore`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.JdbcExecutionContextDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.jdbc.JdbcExecutionContextDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.JdbcJobExecutionDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.jdbc.JdbcJobExecutionDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.JdbcJobInstanceDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.jdbc.JdbcJobInstanceDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.JdbcStepExecutionDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.jdbc.JdbcStepExecutionDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.MongoExecutionContextDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.mongo.MongoExecutionContextDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.MongoJobExecutionDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.mongo.MongoJobExecutionDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.MongoJobInstanceDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.mongo.MongoJobInstanceDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.MongoStepExecutionDao`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.mongo.MongoStepExecutionDao`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.MongoSequenceIncrementer`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.dao.mongo.MongoSequenceIncrementer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.partition.support.Partitioner`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.partition.Partitioner`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.partition.support.PartitionNameProvider`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.partition.PartitionNameProvider`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.partition.support.PartitionStep`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.partition.PartitionStep`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.partition.support.StepExecutionAggregator`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.partition.StepExecutionAggregator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.ChunkListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.ChunkListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.ItemProcessListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.ItemProcessListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.ItemReadListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.ItemReadListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.ItemWriteListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.ItemWriteListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobExecutionListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.JobExecutionListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.SkipListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.SkipListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.StepExecutionListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.StepExecutionListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.StepListener`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.listener.StepListener`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.Job`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.Job`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobExecution`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.JobExecution`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobExecutionException`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.JobExecutionException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobInstance`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.JobInstance`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobInterruptedException`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.JobInterruptedException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobKeyGenerator`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.JobKeyGenerator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.DefaultJobKeyGenerator`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.DefaultJobKeyGenerator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.StartLimitExceededException`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.StartLimitExceededException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.UnexpectedJobExecutionException`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.UnexpectedJobExecutionException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.CompositeJobParametersValidator`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.CompositeJobParametersValidator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.DefaultJobParametersValidator`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.DefaultJobParametersValidator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobParameter`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.JobParameter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobParameters`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.JobParameters`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobParametersBuilder`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.JobParametersBuilder`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobParametersIncrementer`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.JobParametersIncrementer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobParametersInvalidException`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.JobParametersInvalidException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.JobParametersValidator`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.JobParametersValidator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.job.launch.support.RunIdIncrementer`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.RunIdIncrementer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.job.launch.support.DataFieldMaxValueJobParametersIncrementer`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.job.parameters.DataFieldMaxValueJobParametersIncrementer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.Step`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.step.Step`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.StepContribution`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.step.StepContribution`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.StepExecution`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.step.StepExecution`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.integration.chunk.ChunkHandler`
  * newFullyQualifiedTypeName: `org.springframework.batch.integration.chunk.ChunkRequestHandler`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.support.JobRepositoryFactoryBean`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.support.JdbcJobRepositoryFactoryBean`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.explore.support.JobExplorerFactoryBean`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.explore.support.JdbcJobExplorerFactoryBean`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.springframework.batch.core.step.job.JobStep setJobLauncher(org.springframework.batch.core.launch.JobLauncher)`
  * newMethodName: `setJobOperator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.springframework.batch.core.step.job.JobStepBuilder launcher(org.springframework.batch.core.launch.JobLauncher)`
  * newMethodName: `operator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.launch.JobLauncher`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.launch.JobOperator`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.springframework.batch.core.step.tasklet.SystemCommandTasklet setJobExplorer(org.springframework.batch.core.repository.explore.JobExplorer)`
  * newMethodName: `setJobRepository`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.springframework.batch.core.partition.support.RemoteStepExecutionAggregator setJobExplorer(org.springframework.batch.core.repository.explore.JobExplorer)`
  * newMethodName: `setJobRepository`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.batch.core.repository.explore.JobExplorer`
  * newFullyQualifiedTypeName: `org.springframework.batch.core.repository.JobRepository`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.batch.SpringBatch5To6Migration
displayName: Migrate to Spring Batch 6.0 from 5.2
description: |
  Migrate applications built on Spring Batch 5.2 to the latest Spring Batch 6.0 release.
tags:
  - spring
  - batch
recipeList:
  - org.openrewrite.java.spring.batch.SpringBatch4To5Migration
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.batch
      artifactId: "*"
      newVersion: 6.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.batch.item
      newPackageName: org.springframework.batch.infrastructure.item
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.batch.poller
      newPackageName: org.springframework.batch.infrastructure.poller
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.batch.repeat
      newPackageName: org.springframework.batch.infrastructure.repeat
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.batch.support
      newPackageName: org.springframework.batch.infrastructure.support
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.batch.core.explore
      newPackageName: org.springframework.batch.core.repository.explore
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.JdbcExecutionContextDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.jdbc.JdbcExecutionContextDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.JdbcJobExecutionDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.jdbc.JdbcJobExecutionDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.JdbcJobInstanceDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.jdbc.JdbcJobInstanceDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.JdbcStepExecutionDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.jdbc.JdbcStepExecutionDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.MongoExecutionContextDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.mongo.MongoExecutionContextDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.MongoJobExecutionDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.mongo.MongoJobExecutionDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.MongoJobInstanceDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.mongo.MongoJobInstanceDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.MongoStepExecutionDao
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.mongo.MongoStepExecutionDao
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.MongoSequenceIncrementer
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.dao.mongo.MongoSequenceIncrementer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.partition.support.Partitioner
      newFullyQualifiedTypeName: org.springframework.batch.core.partition.Partitioner
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.partition.support.PartitionNameProvider
      newFullyQualifiedTypeName: org.springframework.batch.core.partition.PartitionNameProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.partition.support.PartitionStep
      newFullyQualifiedTypeName: org.springframework.batch.core.partition.PartitionStep
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.partition.support.StepExecutionAggregator
      newFullyQualifiedTypeName: org.springframework.batch.core.partition.StepExecutionAggregator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.ChunkListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.ChunkListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.ItemProcessListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.ItemProcessListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.ItemReadListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.ItemReadListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.ItemWriteListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.ItemWriteListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobExecutionListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.JobExecutionListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.SkipListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.SkipListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.StepExecutionListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.StepExecutionListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.StepListener
      newFullyQualifiedTypeName: org.springframework.batch.core.listener.StepListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.Job
      newFullyQualifiedTypeName: org.springframework.batch.core.job.Job
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobExecution
      newFullyQualifiedTypeName: org.springframework.batch.core.job.JobExecution
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobExecutionException
      newFullyQualifiedTypeName: org.springframework.batch.core.job.JobExecutionException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobInstance
      newFullyQualifiedTypeName: org.springframework.batch.core.job.JobInstance
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobInterruptedException
      newFullyQualifiedTypeName: org.springframework.batch.core.job.JobInterruptedException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobKeyGenerator
      newFullyQualifiedTypeName: org.springframework.batch.core.job.JobKeyGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.DefaultJobKeyGenerator
      newFullyQualifiedTypeName: org.springframework.batch.core.job.DefaultJobKeyGenerator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.StartLimitExceededException
      newFullyQualifiedTypeName: org.springframework.batch.core.job.StartLimitExceededException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.UnexpectedJobExecutionException
      newFullyQualifiedTypeName: org.springframework.batch.core.job.UnexpectedJobExecutionException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.CompositeJobParametersValidator
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.CompositeJobParametersValidator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.DefaultJobParametersValidator
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.DefaultJobParametersValidator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobParameter
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.JobParameter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobParameters
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.JobParameters
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobParametersBuilder
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.JobParametersBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobParametersIncrementer
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.JobParametersIncrementer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobParametersInvalidException
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.JobParametersInvalidException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.JobParametersValidator
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.JobParametersValidator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.job.launch.support.RunIdIncrementer
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.RunIdIncrementer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.job.launch.support.DataFieldMaxValueJobParametersIncrementer
      newFullyQualifiedTypeName: org.springframework.batch.core.job.parameters.DataFieldMaxValueJobParametersIncrementer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.Step
      newFullyQualifiedTypeName: org.springframework.batch.core.step.Step
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.StepContribution
      newFullyQualifiedTypeName: org.springframework.batch.core.step.StepContribution
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.StepExecution
      newFullyQualifiedTypeName: org.springframework.batch.core.step.StepExecution
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.integration.chunk.ChunkHandler
      newFullyQualifiedTypeName: org.springframework.batch.integration.chunk.ChunkRequestHandler
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.support.JobRepositoryFactoryBean
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.support.JdbcJobRepositoryFactoryBean
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.explore.support.JobExplorerFactoryBean
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.explore.support.JdbcJobExplorerFactoryBean
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.batch.core.step.job.JobStep setJobLauncher(org.springframework.batch.core.launch.JobLauncher)
      newMethodName: setJobOperator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.batch.core.step.job.JobStepBuilder launcher(org.springframework.batch.core.launch.JobLauncher)
      newMethodName: operator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.launch.JobLauncher
      newFullyQualifiedTypeName: org.springframework.batch.core.launch.JobOperator
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.batch.core.step.tasklet.SystemCommandTasklet setJobExplorer(org.springframework.batch.core.repository.explore.JobExplorer)
      newMethodName: setJobRepository
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.batch.core.partition.support.RemoteStepExecutionAggregator setJobExplorer(org.springframework.batch.core.repository.explore.JobExplorer)
      newMethodName: setJobRepository
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.batch.core.repository.explore.JobExplorer
      newFullyQualifiedTypeName: org.springframework.batch.core.repository.JobRepository

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 4.0 (Community Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition.md)

## Examples
##### Example 1
`MigrateJobStepTest#jobLauncherInjectedWithBeanAnnotation`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.Step;
import org.springframework.batch.core.step.job.JobStep;
import org.springframework.context.annotation.Bean;

class MyJobConfig {

    @Bean
    JobStep myStep(JobRepository jobRepository, JobLauncher jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
        jobStep.setJobLauncher(jobLauncher);
        return jobStep;
    }
}
```

###### After
```java
import org.springframework.batch.core.launch.JobOperator;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.Step;
import org.springframework.batch.core.step.job.JobStep;
import org.springframework.context.annotation.Bean;

class MyJobConfig {

    @Bean
    JobStep myStep(JobRepository jobRepository, JobOperator jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
        jobStep.setJobOperator(jobLauncher);
        return jobStep;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.springframework.batch.core.launch.JobLauncher;
+import org.springframework.batch.core.launch.JobOperator;
import org.springframework.batch.core.repository.JobRepository;
@@ -10,1 +10,1 @@

    @Bean
-   JobStep myStep(JobRepository jobRepository, JobLauncher jobLauncher) {
+   JobStep myStep(JobRepository jobRepository, JobOperator jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
@@ -12,1 +12,1 @@
    JobStep myStep(JobRepository jobRepository, JobLauncher jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
-       jobStep.setJobLauncher(jobLauncher);
+       jobStep.setJobOperator(jobLauncher);
        return jobStep;
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateJobStepTest#jobLauncherInjectedWithBeanAnnotation`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.Step;
import org.springframework.batch.core.step.job.JobStep;
import org.springframework.context.annotation.Bean;

class MyJobConfig {

    @Bean
    JobStep myStep(JobRepository jobRepository, JobLauncher jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
        jobStep.setJobLauncher(jobLauncher);
        return jobStep;
    }
}
```

###### After
```java
import org.springframework.batch.core.launch.JobOperator;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.Step;
import org.springframework.batch.core.step.job.JobStep;
import org.springframework.context.annotation.Bean;

class MyJobConfig {

    @Bean
    JobStep myStep(JobRepository jobRepository, JobOperator jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
        jobStep.setJobOperator(jobLauncher);
        return jobStep;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.springframework.batch.core.launch.JobLauncher;
+import org.springframework.batch.core.launch.JobOperator;
import org.springframework.batch.core.repository.JobRepository;
@@ -10,1 +10,1 @@

    @Bean
-   JobStep myStep(JobRepository jobRepository, JobLauncher jobLauncher) {
+   JobStep myStep(JobRepository jobRepository, JobOperator jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
@@ -12,1 +12,1 @@
    JobStep myStep(JobRepository jobRepository, JobLauncher jobLauncher) {
        JobStep jobStep = new JobStep(jobRepository);
-       jobStep.setJobLauncher(jobLauncher);
+       jobStep.setJobOperator(jobLauncher);
        return jobStep;
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.batch.SpringBatch5To6Migration")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.batch.SpringBatch5To6Migration")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.batch.SpringBatch5To6Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.batch.SpringBatch5To6Migration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBatch5To6Migration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.batch.SpringBatch5To6Migration" />

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
