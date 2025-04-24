---
sidebar_label: "Migrate Spring Boot properties to 2.2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 2.2

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_2**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-22-properties.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.health.status.http-mapping`
  * newPropertyKey: `management.endpoint.health.status.http-mapping`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.health.status.order`
  * newPropertyKey: `management.endpoint.health.status.order`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.web.client.requests-metric-name`
  * newPropertyKey: `management.metrics.web.client.request.metric-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.web.server.auto-time-requests`
  * newPropertyKey: `management.metrics.web.server.request.autotime.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.web.server.requests-metric-name`
  * newPropertyKey: `management.metrics.web.server.request.metric-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.date-format`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.extended-format`
  * newPropertyKey: `server.jetty.accesslog.format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.locale`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.log-cookies`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.log-latency`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.log-server`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.accesslog.time-zone`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.use-forward-headers`
  * newPropertyKey: `server.forward-headers-strategy`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.jmx-enabled`
  * newPropertyKey: `spring.datasource.tomcat.jmx-enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.jackson.joda-date-time-format`
  * newPropertyKey: `dateFormat`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.rabbitmq.listener.simple.transaction-size`
  * newPropertyKey: `spring.rabbitmq.listener.simple.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.rabbitmq.publisher-confirms`
  * newPropertyKey: `spring.rabbitmq.publisher-confirm-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.reactor.stacktrace-mode.enabled`
  * newPropertyKey: `spring.reactor.debug-agent.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
  * except: `[.+]`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
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

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_2")
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
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_2")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_2</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_2 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_2_2
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

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
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
ashakirin, Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com)
