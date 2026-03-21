---
sidebar_label: "Change SDK S3EventNotification types from v1 to v2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change SDK S3EventNotification types from v1 to v2

**software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes**

_Change SDK S3EventNotification types from v1 to v2._

## Recipe source

[GitHub: search?type=code&q=software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.S3EventNotificationRecord`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.S3EventNotificationRecord`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.GlacierEventDataEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.GlacierEventData`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.IntelligentTieringEventDataEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.IntelligentTieringEventData`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.LifecycleEventDataEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.LifecycleEventData`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.ReplicationEventDataEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.ReplicationEventData`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.RequestParametersEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.RequestParameters`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.ResponseElementsEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.ResponseElements`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.RestoreEventDataEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.RestoreEventData`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.S3BucketEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.S3Bucket`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.S3Entity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.S3`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.S3ObjectEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.S3Object`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.TransitionEventDataEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.TransitionEventData`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification.UserIdentityEntity`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.UserIdentity`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.services.s3.event.S3EventNotification`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.eventnotifications.s3.model.S3EventNotification`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes
displayName: Change SDK S3EventNotification types from v1 to v2
description: |
  Change SDK S3EventNotification types from v1 to v2.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.S3EventNotificationRecord
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.S3EventNotificationRecord
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.GlacierEventDataEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.GlacierEventData
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.IntelligentTieringEventDataEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.IntelligentTieringEventData
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.LifecycleEventDataEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.LifecycleEventData
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.ReplicationEventDataEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.ReplicationEventData
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.RequestParametersEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.RequestParameters
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.ResponseElementsEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.ResponseElements
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.RestoreEventDataEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.RestoreEventData
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.S3BucketEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.S3Bucket
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.S3Entity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.S3
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.S3ObjectEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.S3Object
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.TransitionEventDataEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.TransitionEventData
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification.UserIdentityEntity
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.UserIdentity
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.services.s3.event.S3EventNotification
      newFullyQualifiedTypeName: software.amazon.awssdk.eventnotifications.s3.model.S3EventNotification

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2](/recipes/software/amazon/awssdk/v2migration/awssdkjavav1tov2.md)


## Usage

<RunRecipe
  recipeName="software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes"
  displayName="Change SDK S3EventNotification types from v1 to v2"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes" />

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
