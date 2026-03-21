---
sidebar_label: "Change auth related classes from v1 to v2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change auth related classes from v1 to v2

**software.amazon.awssdk.v2migration.ChangeAuthTypes**

_Change auth related classes from v1 to v2._

## Recipe source

[GitHub: search?type=code&q=software.amazon.awssdk.v2migration.ChangeAuthTypes](https://github.com/search?type=code&q=software.amazon.awssdk.v2migration.ChangeAuthTypes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.DefaultAWSCredentialsProviderChain getInstance()`
  * newMethodName: `create`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.AWSCredentialsProviderChain getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.DefaultAWSCredentialsProviderChain`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.AWSCredentials getAWSAccessKeyId()`
  * newMethodName: `accessKeyId`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.AWSCredentials getAWSSecretKey()`
  * newMethodName: `secretAccessKey`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.AWSSessionCredentials getSessionToken()`
  * newMethodName: `sessionToken`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.AWSCredentials`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.AwsCredentials`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.BasicAWSCredentials getAWSAccessKeyId()`
  * newMethodName: `accessKeyId`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.BasicAWSCredentials getAWSSecretKey()`
  * newMethodName: `secretAccessKey`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.BasicAWSCredentials`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.AwsBasicCredentials`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.BasicSessionCredentials getAWSAccessKeyId()`
  * newMethodName: `accessKeyId`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.BasicSessionCredentials getAWSSecretKey()`
  * newMethodName: `secretAccessKey`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.BasicSessionCredentials getSessionToken()`
  * newMethodName: `sessionToken`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.BasicSessionCredentials`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.AwsSessionCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.AWSCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.AwsCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.AwsCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.AWSStaticCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.StaticCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.StaticCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.EnvironmentVariableCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.EnvironmentVariableCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.EnvironmentVariableCredentialsProvider`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.profile.ProfileCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.ContainerCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.ContainerCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.ContainerCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.WebIdentityTokenCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.WebIdentityTokenFileCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `com.amazonaws.auth.InstanceProfileCredentialsProvider getInstance()`
  * newMethodName: `create`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.InstanceProfileCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.InstanceProfileCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.InstanceProfileCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.STSAssumeRoleSessionCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.services.sts.auth.StsAssumeRoleCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.StsAssumeRoleCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.STSSessionCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.services.sts.auth.EnvironmentVariableCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.EnvironmentVariableCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.STSAssumeRoleWithWebIdentitySessionCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.services.sts.auth.StsAssumeRoleWithWebIdentityCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.StsAssumeRoleWithWebIdentityCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.amazonaws.auth.ProcessCredentialsProvider`
  * newFullyQualifiedTypeName: `software.amazon.awssdk.auth.credentials.ProcessCredentialsProvider`
* [Change method name](../../../../java/changemethodname)
  * methodPattern: `software.amazon.awssdk.auth.credentials.ProcessCredentialsProvider getCredentials()`
  * newMethodName: `resolveCredentials`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: software.amazon.awssdk.v2migration.ChangeAuthTypes
displayName: Change auth related classes from v1 to v2
description: |
  Change auth related classes from v1 to v2.
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.DefaultAWSCredentialsProviderChain getInstance()
      newMethodName: create
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.AWSCredentialsProviderChain getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.DefaultAWSCredentialsProviderChain
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.AWSCredentials getAWSAccessKeyId()
      newMethodName: accessKeyId
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.AWSCredentials getAWSSecretKey()
      newMethodName: secretAccessKey
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.AWSSessionCredentials getSessionToken()
      newMethodName: sessionToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.AWSCredentials
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.AwsCredentials
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.BasicAWSCredentials getAWSAccessKeyId()
      newMethodName: accessKeyId
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.BasicAWSCredentials getAWSSecretKey()
      newMethodName: secretAccessKey
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.BasicAWSCredentials
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.AwsBasicCredentials
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.BasicSessionCredentials getAWSAccessKeyId()
      newMethodName: accessKeyId
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.BasicSessionCredentials getAWSSecretKey()
      newMethodName: secretAccessKey
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.BasicSessionCredentials getSessionToken()
      newMethodName: sessionToken
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.BasicSessionCredentials
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.AwsSessionCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.AWSCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.AwsCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.AwsCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.AWSStaticCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.StaticCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.StaticCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.EnvironmentVariableCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.EnvironmentVariableCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.EnvironmentVariableCredentialsProvider
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.profile.ProfileCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.ProfileCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.ContainerCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.ContainerCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.ContainerCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.WebIdentityTokenCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.WebIdentityTokenFileCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.amazonaws.auth.InstanceProfileCredentialsProvider getInstance()
      newMethodName: create
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.InstanceProfileCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.InstanceProfileCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.InstanceProfileCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.STSAssumeRoleSessionCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.services.sts.auth.StsAssumeRoleCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.StsAssumeRoleCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.STSSessionCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.services.sts.auth.EnvironmentVariableCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.EnvironmentVariableCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.STSAssumeRoleWithWebIdentitySessionCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.services.sts.auth.StsAssumeRoleWithWebIdentityCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.StsAssumeRoleWithWebIdentityCredentialsProvider getCredentials()
      newMethodName: resolveCredentials
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.amazonaws.auth.ProcessCredentialsProvider
      newFullyQualifiedTypeName: software.amazon.awssdk.auth.credentials.ProcessCredentialsProvider
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: software.amazon.awssdk.auth.credentials.ProcessCredentialsProvider getCredentials()
      newMethodName: resolveCredentials

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Change SDK core types from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changesdkcoretypes.md)


## Usage

<RunRecipe
  recipeName="software.amazon.awssdk.v2migration.ChangeAuthTypes"
  displayName="Change auth related classes from v1 to v2"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/software.amazon.awssdk.v2migration.ChangeAuthTypes" />

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
