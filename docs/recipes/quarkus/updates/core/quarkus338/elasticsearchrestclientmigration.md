---
title: "io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration"
sidebar_label: "io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration

**io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration**

_Migrate Elasticsearch low-level REST client from org.elasticsearch.client to co.elastic.clients.transport.rest5_client.low_level._

## Recipe source

[GitHub: search?type=code&q=io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.RestClientBuilder.HttpClientConfigCallback`
  * newFullyQualifiedTypeName: `io.quarkus.elasticsearch.restclient.lowlevel.ElasticsearchClientConfigConfigurer`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.RestClient`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.Rest5Client`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.RestClientBuilder`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.Rest5ClientBuilder`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.Request`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.Request`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.Response`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.Response`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.ResponseException`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.ResponseException`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.ResponseListener`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.ResponseListener`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.RequestOptions`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.RequestOptions`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.Cancellable`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.Cancellable`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.HttpAsyncResponseConsumerFactory`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.HttpAsyncResponseConsumerFactory`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.WarningFailureException`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.WarningFailureException`
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.elasticsearch.client.WarningsHandler`
  * newFullyQualifiedTypeName: `co.elastic.clients.transport.rest5_client.low_level.WarningsHandler`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration
displayName: io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration
description: |
  Migrate Elasticsearch low-level REST client from org.elasticsearch.client to co.elastic.clients.transport.rest5_client.low_level.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.RestClientBuilder.HttpClientConfigCallback
      newFullyQualifiedTypeName: io.quarkus.elasticsearch.restclient.lowlevel.ElasticsearchClientConfigConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.RestClient
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.Rest5Client
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.RestClientBuilder
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.Rest5ClientBuilder
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.Request
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.Request
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.Response
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.Response
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.ResponseException
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.ResponseException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.ResponseListener
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.ResponseListener
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.RequestOptions
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.RequestOptions
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.Cancellable
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.Cancellable
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.HttpAsyncResponseConsumerFactory
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.HttpAsyncResponseConsumerFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.WarningFailureException
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.WarningFailureException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.elasticsearch.client.WarningsHandler
      newFullyQualifiedTypeName: co.elastic.clients.transport.rest5_client.low_level.WarningsHandler

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Quarkus Updates Aggregate 3.38.0](/recipes/quarkus/migratetoquarkus_v3_38_0.md)


## Usage

<RunRecipe
  recipeName="io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration"
  displayName="io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus338.ElasticsearchRestClientMigration" />

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
