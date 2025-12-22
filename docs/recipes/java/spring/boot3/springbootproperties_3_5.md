---
sidebar_label: "Migrate Spring Boot properties to 3.5"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 3.5

**org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_5**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-35-properties.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.base-url`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.address`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.promethus.metrics.export.pushgateway.base-url`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.address`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.codec.log-request-details`
  * newPropertyKey: `spring.http.codecs.log-request-details`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.codec.max-in-memory-size`
  * newPropertyKey: `spring.http.codecs.max-in-memory-size`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.graphql.path`
  * newPropertyKey: `spring.graphql.http.path`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.graphql.sse.timeout`
  * newPropertyKey: `spring.graphql.http.sse.timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.auto-escape`
  * newPropertyKey: `spring.groovy.template.auto-escape`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.auto-indent`
  * newPropertyKey: `spring.groovy.template.auto-indent`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.auto-indent-string`
  * newPropertyKey: `spring.groovy.template.auto-indent-string`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.auto-new-line`
  * newPropertyKey: `spring.groovy.template.auto-new-line`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.base-template-class`
  * newPropertyKey: `spring.groovy.template.base-template-class`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.cache-templates`
  * newPropertyKey: `spring.groovy.template.cache`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.declaration-encoding`
  * newPropertyKey: `spring.groovy.template.declaration-encoding`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.expand-empty-elements`
  * newPropertyKey: `spring.groovy.template.expand-empty-elements`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.locale`
  * newPropertyKey: `spring.groovy.template.locale`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.new-line-string`
  * newPropertyKey: `spring.groovy.template.new-line-string`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.resource-loader-path`
  * newPropertyKey: `spring.groovy.template.resource-loader-path`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.groovy.template.configuration.use-double-quotes`
  * newPropertyKey: `spring.groovy.template.use-double-quotes`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.converters.preferred-json-mapper`
  * newPropertyKey: `spring.http.converters.preferred-json-mapper`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.prometheus.histogram-flavor`
  * comment: `This property is deprecated: No longer supported by the Prometheus client.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.access-token`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.batch-size`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.connect-timeout`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.enabled`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.published-histogram-type`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.read-timeout`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.source`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.step`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.signalfx.metrics.export.uri`
  * comment: `This property is deprecated: Deprecated in Micrometer 1.15.0`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBootProperties_3_5
displayName: Migrate Spring Boot properties to 3.5
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.base-url
      newPropertyKey: management.prometheus.metrics.export.pushgateway.address
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.promethus.metrics.export.pushgateway.base-url
      newPropertyKey: management.prometheus.metrics.export.pushgateway.address
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.codec.log-request-details
      newPropertyKey: spring.http.codecs.log-request-details
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.codec.max-in-memory-size
      newPropertyKey: spring.http.codecs.max-in-memory-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.graphql.path
      newPropertyKey: spring.graphql.http.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.graphql.sse.timeout
      newPropertyKey: spring.graphql.http.sse.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.auto-escape
      newPropertyKey: spring.groovy.template.auto-escape
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.auto-indent
      newPropertyKey: spring.groovy.template.auto-indent
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.auto-indent-string
      newPropertyKey: spring.groovy.template.auto-indent-string
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.auto-new-line
      newPropertyKey: spring.groovy.template.auto-new-line
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.base-template-class
      newPropertyKey: spring.groovy.template.base-template-class
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.cache-templates
      newPropertyKey: spring.groovy.template.cache
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.declaration-encoding
      newPropertyKey: spring.groovy.template.declaration-encoding
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.expand-empty-elements
      newPropertyKey: spring.groovy.template.expand-empty-elements
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.locale
      newPropertyKey: spring.groovy.template.locale
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.new-line-string
      newPropertyKey: spring.groovy.template.new-line-string
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.resource-loader-path
      newPropertyKey: spring.groovy.template.resource-loader-path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.groovy.template.configuration.use-double-quotes
      newPropertyKey: spring.groovy.template.use-double-quotes
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.converters.preferred-json-mapper
      newPropertyKey: spring.http.converters.preferred-json-mapper
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.prometheus.histogram-flavor
      comment: This property is deprecated: No longer supported by the Prometheus client.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.access-token
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.batch-size
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.connect-timeout
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.enabled
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.published-histogram-type
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.read-timeout
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.source
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.step
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.signalfx.metrics.export.uri
      comment: This property is deprecated: Deprecated in Micrometer 1.15.0

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.5 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition.md)


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
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_5")
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
        activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_5")
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
            <recipe>org.openrewrite.java.spring.boot3.SpringBootProperties_3_5</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBootProperties_3_5 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_3_5
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBootProperties_3_5" />

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
