---
title: "Rename removed Camel 3.x dependencies to their Camel 4.0 replacements"
sidebar_label: "Rename removed Camel 3.x dependencies to their Camel 4.0 replacements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename removed Camel 3.x dependencies to their Camel 4.0 replacements

**org.apache.camel.upgrade.camel40.renamedDependencies**

_Rename removed Camel 3.x dependencies to their Camel 4.0 replacements._

## Recipe source

[GitHub: search?type=code&q=org.apache.camel.upgrade.camel40.renamedDependencies](https://github.com/search?type=code&q=org.apache.camel.upgrade.camel40.renamedDependencies),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-swagger-java`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-openapi-java`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-rest-swagger`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-rest-openapi`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-directvm`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-direct`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-dozer`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-mapstruct`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-elasticsearch-rest`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-elasticsearch`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-rabbitmq`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-spring-rabbitmq`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-websocket`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-vertx-websocket`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-websocket-jsr356`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-vertx-websocket`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-vertx-kafka`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-kafka`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-vm`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-seda`
* [Change Maven dependency](../../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.apache.camel`
  * oldArtifactId: `camel-xstream`
  * newGroupId: `org.apache.camel`
  * newArtifactId: `camel-jacksonxml`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.apache.camel.upgrade.camel40.renamedDependencies
displayName: Rename removed Camel 3.x dependencies to their Camel 4.0 replacements
description: |
  Rename removed Camel 3.x dependencies to their Camel 4.0 replacements.
recipeList:
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-swagger-java
      newGroupId: org.apache.camel
      newArtifactId: camel-openapi-java
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-rest-swagger
      newGroupId: org.apache.camel
      newArtifactId: camel-rest-openapi
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-directvm
      newGroupId: org.apache.camel
      newArtifactId: camel-direct
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-dozer
      newGroupId: org.apache.camel
      newArtifactId: camel-mapstruct
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-elasticsearch-rest
      newGroupId: org.apache.camel
      newArtifactId: camel-elasticsearch
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-rabbitmq
      newGroupId: org.apache.camel
      newArtifactId: camel-spring-rabbitmq
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-websocket
      newGroupId: org.apache.camel
      newArtifactId: camel-vertx-websocket
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-websocket-jsr356
      newGroupId: org.apache.camel
      newArtifactId: camel-vertx-websocket
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-vertx-kafka
      newGroupId: org.apache.camel
      newArtifactId: camel-kafka
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-vm
      newGroupId: org.apache.camel
      newArtifactId: camel-seda
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.apache.camel
      oldArtifactId: camel-xstream
      newGroupId: org.apache.camel
      newArtifactId: camel-jacksonxml

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate `camel3` application to `camel4.`](/recipes/apache/camel/upgrade/camel40/camelmigrationrecipe.md)


## Usage

<RunRecipe
  recipeName="org.apache.camel.upgrade.camel40.renamedDependencies"
  displayName="Rename removed Camel 3.x dependencies to their Camel 4.0 replacements"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.apache.camel.upgrade.camel40.renamedDependencies" />

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
