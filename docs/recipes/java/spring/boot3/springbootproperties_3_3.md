---
sidebar_label: "Migrate Spring Boot properties to 3.3"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Spring Boot properties to 3.3

**org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_3**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: spring-boot-33-properties.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-33-properties.yml),
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

* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.env.ssl.key-store`
  * newPropertyKey: `spring.couchbase.env.ssl.bundle`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.env.ssl.key-store-password`
  * newPropertyKey: `spring.couchbase.env.ssl.bundle`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.streams.cache-max-bytes-buffering`
  * newPropertyKey: `spring.kafka.streams.state-store-cache-max-size`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.prometheus.metrics.export.histogram-flavor`
  * comment: `This property is deprecated: No longer supported. Works only when using the Prometheus simpleclient.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.cherry-pick`
  * comment: `This property is deprecated: Removed in Flyway 10`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.license-key`
  * comment: `This property is deprecated: Removed in Flyway 10`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBootProperties_3_3
displayName: Migrate Spring Boot properties to 3.3
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.ssl.key-store
      newPropertyKey: spring.couchbase.env.ssl.bundle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.ssl.key-store-password
      newPropertyKey: spring.couchbase.env.ssl.bundle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.streams.cache-max-bytes-buffering
      newPropertyKey: spring.kafka.streams.state-store-cache-max-size
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.prometheus.metrics.export.histogram-flavor
      comment: This property is deprecated: No longer supported. Works only when using the Prometheus simpleclient.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.cherry-pick
      comment: This property is deprecated: Removed in Flyway 10
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.license-key
      comment: This property is deprecated: Removed in Flyway 10

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.3](/recipes/java/spring/boot3/upgradespringboot_3_3.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot3.SpringBootProperties_3_3"
  displayName="Migrate Spring Boot properties to 3.3"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBootProperties_3_3" />

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
