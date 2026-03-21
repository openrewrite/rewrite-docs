---
sidebar_label: "Remove non existing camel-quarkus extensions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove non existing camel-quarkus extensions

**org.openrewrite.java.camel.migrate.removedExtensions**

_Removal of maven dependencies for extension, which are no longer part of Camel 3.x._

## Recipe source

[GitHub: search?type=code&q=org.openrewrite.java.camel.migrate.removedExtensions](https://github.com/search?type=code&q=org.openrewrite.java.camel.migrate.removedExtensions),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-activemq`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-activemq`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-atmos`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-avro-rpc`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-caffeine-lrucache`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-datasonnet`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-dozer`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-elasticsearch-rest`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-gora`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-hbase`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-iota`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-jbpm`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-jclouds`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-johnzon`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-microprofile-metrics`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-milo`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-opentracing`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-optaplanner`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-rabbitmq`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-smallrye-reactive-messaging`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-solr`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-tika`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-vm`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-xmlsecurity`
* [Remove Maven dependency](../../../maven/removedependency)
  * groupId: `org.apache.camel.quarkus`
  * artifactId: `camel-quarkus-xstream`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.camel.migrate.removedExtensions
displayName: Remove non existing camel-quarkus extensions
description: |
  Removal of maven dependencies for extension, which are no longer part of Camel 3.x.
recipeList:
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-activemq
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-activemq
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-atmos
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-avro-rpc
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-caffeine-lrucache
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-datasonnet
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-dozer
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-elasticsearch-rest
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-gora
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-hbase
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-iota
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-jbpm
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-jclouds
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-johnzon
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-microprofile-metrics
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-milo
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-opentracing
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-optaplanner
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-rabbitmq
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-smallrye-reactive-messaging
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-solr
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-tika
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-vm
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-xmlsecurity
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.apache.camel.quarkus
      artifactId: camel-quarkus-xstream

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Quarkus Updates Aggregate 3.0.0](/recipes/quarkus/migratetoquarkus_v3_0_0.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.camel.migrate.removedExtensions"
  displayName="Remove non existing camel-quarkus extensions"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.camel.migrate.removedExtensions" />

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
