---
sidebar_label: "Migrate Spring Boot properties to 3.4"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 3.4

**org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_4**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-34-properties.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.23.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.23.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.auditevents.enabled`
  * newPropertyKey: `management.endpoint.auditevents.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.beans.enabled`
  * newPropertyKey: `management.endpoint.beans.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.caches.enabled`
  * newPropertyKey: `management.endpoint.caches.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.conditions.enabled`
  * newPropertyKey: `management.endpoint.conditions.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.configprops.enabled`
  * newPropertyKey: `management.endpoint.configprops.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.env.enabled`
  * newPropertyKey: `management.endpoint.env.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.flyway.enabled`
  * newPropertyKey: `management.endpoint.flyway.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.health.enabled`
  * newPropertyKey: `management.endpoint.health.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.heapdump.enabled`
  * newPropertyKey: `management.endpoint.heapdump.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.httpexchanges.enabled`
  * newPropertyKey: `management.endpoint.httpexchanges.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.info.enabled`
  * newPropertyKey: `management.endpoint.info.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.integrationgraph.enabled`
  * newPropertyKey: `management.endpoint.integrationgraph.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.liquibase.enabled`
  * newPropertyKey: `management.endpoint.liquibase.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.logfile.enabled`
  * newPropertyKey: `management.endpoint.logfile.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.loggers.enabled`
  * newPropertyKey: `management.endpoint.loggers.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.mappings.enabled`
  * newPropertyKey: `management.endpoint.mappings.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.metrics.enabled`
  * newPropertyKey: `management.endpoint.metrics.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.prometheus.enabled`
  * newPropertyKey: `management.endpoint.prometheus.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.quartz.enabled`
  * newPropertyKey: `management.endpoint.quartz.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.sbom.enabled`
  * newPropertyKey: `management.endpoint.sbom.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.scheduledtasks.enabled`
  * newPropertyKey: `management.endpoint.scheduledtasks.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.sessions.enabled`
  * newPropertyKey: `management.endpoint.sessions.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.shutdown.enabled`
  * newPropertyKey: `management.endpoint.shutdown.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.startup.enabled`
  * newPropertyKey: `management.endpoint.startup.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.threaddump.enabled`
  * newPropertyKey: `management.endpoint.threaddump.access`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoints.enabled-by-default`
  * newPropertyKey: `management.endpoints.access.default`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.gson.lenient`
  * newPropertyKey: `spring.gson.strictness`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.retry.topic.delay`
  * newPropertyKey: `spring.kafka.retry.topic.backoff.delay`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.retry.topic.max-delay`
  * newPropertyKey: `spring.kafka.retry.topic.backoff.maxDelay`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.retry.topic.multiplier`
  * newPropertyKey: `spring.kafka.retry.topic.backoff.multiplier`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.retry.topic.random-back-off`
  * newPropertyKey: `spring.kafka.retry.topic.backoff.random`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBootProperties_3_4
displayName: Migrate Spring Boot properties to 3.4
description: Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.auditevents.enabled
      newPropertyKey: management.endpoint.auditevents.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.beans.enabled
      newPropertyKey: management.endpoint.beans.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.caches.enabled
      newPropertyKey: management.endpoint.caches.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.conditions.enabled
      newPropertyKey: management.endpoint.conditions.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.configprops.enabled
      newPropertyKey: management.endpoint.configprops.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.env.enabled
      newPropertyKey: management.endpoint.env.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.flyway.enabled
      newPropertyKey: management.endpoint.flyway.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.health.enabled
      newPropertyKey: management.endpoint.health.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.heapdump.enabled
      newPropertyKey: management.endpoint.heapdump.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.httpexchanges.enabled
      newPropertyKey: management.endpoint.httpexchanges.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.info.enabled
      newPropertyKey: management.endpoint.info.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.integrationgraph.enabled
      newPropertyKey: management.endpoint.integrationgraph.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.liquibase.enabled
      newPropertyKey: management.endpoint.liquibase.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.logfile.enabled
      newPropertyKey: management.endpoint.logfile.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.loggers.enabled
      newPropertyKey: management.endpoint.loggers.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.mappings.enabled
      newPropertyKey: management.endpoint.mappings.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.metrics.enabled
      newPropertyKey: management.endpoint.metrics.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.prometheus.enabled
      newPropertyKey: management.endpoint.prometheus.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.quartz.enabled
      newPropertyKey: management.endpoint.quartz.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.sbom.enabled
      newPropertyKey: management.endpoint.sbom.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.scheduledtasks.enabled
      newPropertyKey: management.endpoint.scheduledtasks.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.sessions.enabled
      newPropertyKey: management.endpoint.sessions.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.shutdown.enabled
      newPropertyKey: management.endpoint.shutdown.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.startup.enabled
      newPropertyKey: management.endpoint.startup.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.threaddump.enabled
      newPropertyKey: management.endpoint.threaddump.access
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoints.enabled-by-default
      newPropertyKey: management.endpoints.access.default
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.gson.lenient
      newPropertyKey: spring.gson.strictness
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.retry.topic.delay
      newPropertyKey: spring.kafka.retry.topic.backoff.delay
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.retry.topic.max-delay
      newPropertyKey: spring.kafka.retry.topic.backoff.maxDelay
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.retry.topic.multiplier
      newPropertyKey: spring.kafka.retry.topic.backoff.multiplier
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.retry.topic.random-back-off
      newPropertyKey: spring.kafka.retry.topic.backoff.random

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.23.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.27.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_4")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.23.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.27.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.23.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_4")
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
        <version>5.45.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.SpringBootProperties_3_4</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.23.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBootProperties_3_4 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_3_4
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBootProperties_3_4" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

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


## Contributors
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Patrick](mailto:patway99@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com)
