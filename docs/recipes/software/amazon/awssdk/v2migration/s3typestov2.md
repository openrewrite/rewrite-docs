---
sidebar_label: "Change S3 types to v2."
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change S3 types to v2.

**software.amazon.awssdk.v2migration.S3TypesToV2**

_Change S3 types to v2._

## Recipe source

[GitHub: search?type=code&q=software.amazon.awssdk.v2migration.S3TypesToV2](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.S3TypesToV2),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getObject(com.amazonaws.services.s3.model.GetObjectRequest, java.io.File)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetObjectResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketAcl(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketAclResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getObjectAcl(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetObjectAclResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketAccelerateConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketAccelerateConfigurationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketLifecycleConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketLifecycleConfigurationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketCrossOriginConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketCorsResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketLoggingConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketLoggingResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketNotificationConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketNotificationConfigurationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketPolicy(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketPolicyResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketReplicationConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketReplicationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketTaggingConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketTaggingResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketVersioningConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketVersioningResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3 getBucketWebsiteConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketWebsiteResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getObject(com.amazonaws.services.s3.model.GetObjectRequest, java.io.File)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetObjectResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketAcl(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketAclResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getObjectAcl(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetObjectAclResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketAccelerateConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketAccelerateConfigurationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketLifecycleConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketLifecycleConfigurationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketCrossOriginConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketCorsResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketLoggingConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketLoggingResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketNotificationConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketNotificationConfigurationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketPolicy(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketPolicyResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketReplicationConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketReplicationResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketTaggingConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketTaggingResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketVersioningConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketVersioningResponse`
* [Change method invocation return type](../../../../java/changemethodinvocationreturntype)
  * methodPattern: `com.amazonaws.services.s3.AmazonS3Client getBucketWebsiteConfiguration(..)`
  * newReturnType: `software.amazon.awssdk.services.s3.model.GetBucketWebsiteResponse`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.S3TypesToV2
displayName: Change S3 types to v2.
description: |
  Change S3 types to v2.
recipeList:
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getObject(com.amazonaws.services.s3.model.GetObjectRequest, java.io.File)
      newReturnType: software.amazon.awssdk.services.s3.model.GetObjectResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketAcl(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketAclResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getObjectAcl(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetObjectAclResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketAccelerateConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketAccelerateConfigurationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketLifecycleConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketLifecycleConfigurationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketCrossOriginConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketCorsResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketLoggingConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketLoggingResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketNotificationConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketNotificationConfigurationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketPolicy(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketPolicyResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketReplicationConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketReplicationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketTaggingConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketTaggingResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketVersioningConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketVersioningResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3 getBucketWebsiteConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketWebsiteResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getObject(com.amazonaws.services.s3.model.GetObjectRequest, java.io.File)
      newReturnType: software.amazon.awssdk.services.s3.model.GetObjectResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketAcl(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketAclResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getObjectAcl(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetObjectAclResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketAccelerateConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketAccelerateConfigurationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketLifecycleConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketLifecycleConfigurationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketCrossOriginConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketCorsResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketLoggingConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketLoggingResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketNotificationConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketNotificationConfigurationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketPolicy(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketPolicyResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketReplicationConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketReplicationResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketTaggingConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketTaggingResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketVersioningConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketVersioningResponse
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: com.amazonaws.services.s3.AmazonS3Client getBucketWebsiteConfiguration(..)
      newReturnType: software.amazon.awssdk.services.s3.model.GetBucketWebsiteResponse

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from the AWS SDK for Java v1 to the AWS SDK for Java v2](/recipes/software/amazon/awssdk/v2migration/awssdkjavav1tov2.md)


## Usage

<RunRecipe
  recipeName="software.amazon.awssdk.v2migration.S3TypesToV2"
  displayName="Change S3 types to v2."
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.S3TypesToV2" />

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
