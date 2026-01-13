---
sidebar_label: "Migrate from Spring Cloud Sleuth to OpenTelemetry"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from Spring Cloud Sleuth to OpenTelemetry

**org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry**

_Migrate from Spring Cloud Sleuth to OpenTelemetry. [Spring Cloud Sleuth has been deprecated](https://github.com/spring-cloud/spring-cloud-sleuth#spring-cloud-sleuth) and is replaced by Micrometer Tracing with OpenTelemetry as a backend. This recipe removes Sleuth dependencies and adds OpenTelemetry instrumentation._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [sleuth](/reference/recipes-by-tag#sleuth)
* [migration](/reference/recipes-by-tag#migration)
* [opentelemetry](/reference/recipes-by-tag#opentelemetry)
* [boot](/reference/recipes-by-tag#boot)
* [observability](/reference/recipes-by-tag#observability)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/opentelemetry.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-sleuth`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-sleuth*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.micrometer`
  * artifactId: `micrometer-tracing-bridge-otel`
  * version: `1.x`
  * onlyIfUsing: `org.springframework.cloud.sleuth.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.opentelemetry`
  * artifactId: `opentelemetry-exporter-otlp`
  * version: `1.x`
  * onlyIfUsing: `org.springframework.cloud.sleuth.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.opentelemetry.instrumentation`
  * artifactId: `opentelemetry-instrumentation-bom`
  * version: `2.x`
  * onlyIfUsing: `org.springframework.boot.*`
  * scope: `import`
  * type: `pom`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.opentelemetry.instrumentation`
  * artifactId: `opentelemetry-spring-boot-starter`
  * version: `2.x`
  * onlyIfUsing: `org.springframework.boot.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.opentelemetry.instrumentation`
  * artifactId: `opentelemetry-instrumentation-annotations`
  * version: `2.x`
  * onlyIfUsing: `org.springframework.cloud.sleuth.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-aop`
  * version: `3.x`
  * onlyIfUsing: `io.opentelemetry.instrumentation.annotations.*`
  * acceptTransitive: `true`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.enabled`
  * newPropertyKey: `management.tracing.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.sampler.probability`
  * newPropertyKey: `management.tracing.sampling.probability`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.propagation.type`
  * newPropertyKey: `management.tracing.propagation.type`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.baggage.remote-fields`
  * newPropertyKey: `management.tracing.baggage.remote-fields`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.baggage.correlation-fields`
  * newPropertyKey: `management.tracing.baggage.correlation.fields`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.otel.exporter.otlp.endpoint`
  * newPropertyKey: `management.otlp.tracing.endpoint`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.otel.exporter.otlp.headers`
  * newPropertyKey: `management.otlp.tracing.headers`
* [Delete a spring configuration property](../../../java/spring/deletespringproperty)
  * propertyKey: `spring.sleuth.otel.config.trace-id-ratio-based`
* [Delete a spring configuration property](../../../java/spring/deletespringproperty)
  * propertyKey: `spring.sleuth.otel.resource.enabled`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.sleuth.exporter.SpanFilter`
  * newFullyQualifiedTypeName: `io.micrometer.tracing.exporter.SpanExportingPredicate`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.sleuth.annotation.NewSpan`
  * newFullyQualifiedTypeName: `io.opentelemetry.instrumentation.annotations.WithSpan`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.sleuth.annotation.SpanTag`
  * newFullyQualifiedTypeName: `io.opentelemetry.instrumentation.annotations.SpanAttribute`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.sleuth.annotation.ContinueSpan`
  * newFullyQualifiedTypeName: `io.opentelemetry.instrumentation.annotations.WithSpan`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.cloud.sleuth`
  * newPackageName: `io.micrometer.tracing`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry
displayName: Migrate from Spring Cloud Sleuth to OpenTelemetry
description: |
  Migrate from Spring Cloud Sleuth to OpenTelemetry. [Spring Cloud Sleuth has been deprecated](https://github.com/spring-cloud/spring-cloud-sleuth#spring-cloud-sleuth) and is replaced by Micrometer Tracing with OpenTelemetry as a backend. This recipe removes Sleuth dependencies and adds OpenTelemetry instrumentation.
tags:
  - spring
  - sleuth
  - migration
  - opentelemetry
  - boot
  - observability
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-sleuth
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-sleuth*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.micrometer
      artifactId: micrometer-tracing-bridge-otel
      version: 1.x
      onlyIfUsing: org.springframework.cloud.sleuth.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.opentelemetry
      artifactId: opentelemetry-exporter-otlp
      version: 1.x
      onlyIfUsing: org.springframework.cloud.sleuth.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.opentelemetry.instrumentation
      artifactId: opentelemetry-instrumentation-bom
      version: 2.x
      onlyIfUsing: org.springframework.boot.*
      scope: import
      type: pom
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.opentelemetry.instrumentation
      artifactId: opentelemetry-spring-boot-starter
      version: 2.x
      onlyIfUsing: org.springframework.boot.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.opentelemetry.instrumentation
      artifactId: opentelemetry-instrumentation-annotations
      version: 2.x
      onlyIfUsing: org.springframework.cloud.sleuth.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-aop
      version: 3.x
      onlyIfUsing: io.opentelemetry.instrumentation.annotations.*
      acceptTransitive: true
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.enabled
      newPropertyKey: management.tracing.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.sampler.probability
      newPropertyKey: management.tracing.sampling.probability
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.propagation.type
      newPropertyKey: management.tracing.propagation.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.baggage.remote-fields
      newPropertyKey: management.tracing.baggage.remote-fields
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.baggage.correlation-fields
      newPropertyKey: management.tracing.baggage.correlation.fields
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.otel.exporter.otlp.endpoint
      newPropertyKey: management.otlp.tracing.endpoint
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.otel.exporter.otlp.headers
      newPropertyKey: management.otlp.tracing.headers
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: spring.sleuth.otel.config.trace-id-ratio-based
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: spring.sleuth.otel.resource.enabled
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.sleuth.exporter.SpanFilter
      newFullyQualifiedTypeName: io.micrometer.tracing.exporter.SpanExportingPredicate
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.sleuth.annotation.NewSpan
      newFullyQualifiedTypeName: io.opentelemetry.instrumentation.annotations.WithSpan
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.sleuth.annotation.SpanTag
      newFullyQualifiedTypeName: io.opentelemetry.instrumentation.annotations.SpanAttribute
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.sleuth.annotation.ContinueSpan
      newFullyQualifiedTypeName: io.opentelemetry.instrumentation.annotations.WithSpan
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.cloud.sleuth
      newPackageName: io.micrometer.tracing
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Complete migration to OpenTelemetry](/recipes/java/spring/opentelemetry/migratetoopentelemetry.md)


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
    activeRecipe("org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry")
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
        activeRecipe("org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry")
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
            <recipe>org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateSleuthToOpenTelemetry
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.opentelemetry.MigrateSleuthToOpenTelemetry" />

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
