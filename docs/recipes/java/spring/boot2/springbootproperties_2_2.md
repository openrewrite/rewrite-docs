---
sidebar_label: "Migrate Spring Boot properties to 2.2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Spring Boot properties to 2.2

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_2**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: spring-boot-22-properties.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-22-properties.yml),
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
  * oldPropertyKey: `management.health.status.http-mapping`
  * newPropertyKey: `management.endpoint.health.status.http-mapping`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.health.status.order`
  * newPropertyKey: `management.endpoint.health.status.order`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.web.client.requests-metric-name`
  * newPropertyKey: `management.metrics.web.client.request.metric-name`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.web.server.auto-time-requests`
  * newPropertyKey: `management.metrics.web.server.request.autotime.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.web.server.requests-metric-name`
  * newPropertyKey: `management.metrics.web.server.request.metric-name`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.date-format`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.extended-format`
  * newPropertyKey: `server.jetty.accesslog.format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.locale`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.log-cookies`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.log-latency`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.log-server`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.time-zone`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.use-forward-headers`
  * newPropertyKey: `server.forward-headers-strategy`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.jmx-enabled`
  * newPropertyKey: `spring.datasource.tomcat.jmx-enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.jackson.joda-date-time-format`
  * newPropertyKey: `dateFormat`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.rabbitmq.listener.simple.transaction-size`
  * newPropertyKey: `spring.rabbitmq.listener.simple.batch-size`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.rabbitmq.publisher-confirms`
  * newPropertyKey: `spring.rabbitmq.publisher-confirm-type`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.reactor.stacktrace-mode.enabled`
  * newPropertyKey: `spring.reactor.debug-agent.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
  * except: `[.+]`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.path`
  * newPropertyKey: `logging.file.path`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.health.elasticsearch.indices`
  * comment: `This property is deprecated: Upstream elasticsearch transport is deprecated.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.health.elasticsearch.response-timeout`
  * comment: `This property is deprecated: Upstream elasticsearch transport is deprecated.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.appoptics.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.datadog.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.dynatrace.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.elastic.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.humio.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.humio.repository`
  * comment: `This property is deprecated: No longer used as repository is resolved from the api token.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.influx.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.kairos.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.newrelic.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.signalfx.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.wavefront.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.elasticsearch.cluster-name`
  * comment: `This property is deprecated: The transport client support is deprecated. Use other supported clients instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.elasticsearch.cluster-nodes`
  * comment: `This property is deprecated: The transport client support is deprecated. Use other supported clients instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.elasticsearch.properties`
  * comment: `This property is deprecated: The transport client support is deprecated. Use other supported clients instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.datasource.dbcp2.enable-auto-commit-on-return`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.uris`
  * comment: `This property is deprecated: The Jest client support is deprecated. Use other supported clients instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.mvc.contentnegotiation.favor-path-extension`
  * comment: `This property is deprecated: Use of path extensions for request mapping and for content negotiation is discouraged.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.mvc.favicon.enabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.mvc.pathmatch.use-registered-suffix-pattern`
  * comment: `This property is deprecated: Use of path extensions for request mapping and for content negotiation is discouraged.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.mvc.pathmatch.use-suffix-pattern`
  * comment: `This property is deprecated: Use of path extensions for request mapping and for content negotiation is discouraged.`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_2
displayName: Migrate Spring Boot properties to 2.2
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.health.status.http-mapping
      newPropertyKey: management.endpoint.health.status.http-mapping
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.health.status.order
      newPropertyKey: management.endpoint.health.status.order
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.client.requests-metric-name
      newPropertyKey: management.metrics.web.client.request.metric-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.server.auto-time-requests
      newPropertyKey: management.metrics.web.server.request.autotime.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.server.requests-metric-name
      newPropertyKey: management.metrics.web.server.request.metric-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.date-format
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.extended-format
      newPropertyKey: server.jetty.accesslog.format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.locale
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-cookies
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-latency
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-server
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.time-zone
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.use-forward-headers
      newPropertyKey: server.forward-headers-strategy
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.jmx-enabled
      newPropertyKey: spring.datasource.tomcat.jmx-enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.jackson.joda-date-time-format
      newPropertyKey: dateFormat
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.rabbitmq.listener.simple.transaction-size
      newPropertyKey: spring.rabbitmq.listener.simple.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.rabbitmq.publisher-confirms
      newPropertyKey: spring.rabbitmq.publisher-confirm-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.reactor.stacktrace-mode.enabled
      newPropertyKey: spring.reactor.debug-agent.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file
      newPropertyKey: logging.file.name
      except: [.+]
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.path
      newPropertyKey: logging.file.path
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.health.elasticsearch.indices
      comment: This property is deprecated: Upstream elasticsearch transport is deprecated.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.health.elasticsearch.response-timeout
      comment: This property is deprecated: Upstream elasticsearch transport is deprecated.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.appoptics.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.datadog.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.dynatrace.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.elastic.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.humio.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.humio.repository
      comment: This property is deprecated: No longer used as repository is resolved from the api token.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.influx.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.kairos.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.newrelic.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.signalfx.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.wavefront.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.elasticsearch.cluster-name
      comment: This property is deprecated: The transport client support is deprecated. Use other supported clients instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.elasticsearch.cluster-nodes
      comment: This property is deprecated: The transport client support is deprecated. Use other supported clients instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.elasticsearch.properties
      comment: This property is deprecated: The transport client support is deprecated. Use other supported clients instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.datasource.dbcp2.enable-auto-commit-on-return
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.uris
      comment: This property is deprecated: The Jest client support is deprecated. Use other supported clients instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.mvc.contentnegotiation.favor-path-extension
      comment: This property is deprecated: Use of path extensions for request mapping and for content negotiation is discouraged.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.mvc.favicon.enabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.mvc.pathmatch.use-registered-suffix-pattern
      comment: This property is deprecated: Use of path extensions for request mapping and for content negotiation is discouraged.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.mvc.pathmatch.use-suffix-pattern
      comment: This property is deprecated: Use of path extensions for request mapping and for content negotiation is discouraged.

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 2.2](/recipes/java/spring/boot2/upgradespringboot_2_2.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot2.SpringBootProperties_2_2"
  displayName="Migrate Spring Boot properties to 2.2"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_2" />

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
