---
sidebar_label: "Migrate Spring Boot properties to 2.6"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 2.6

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_6**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-26-properties.yml), 
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
  * oldPropertyKey: `management.metrics.export.dynatrace.device-id`
  * newPropertyKey: `management.metrics.export.dynatrace.v1.device-id`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.export.dynatrace.group`
  * newPropertyKey: `management.metrics.export.dynatrace.v1.group`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.export.dynatrace.technology-type`
  * newPropertyKey: `management.metrics.export.dynatrace.v1.technology-type`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.connection-timeout`
  * newPropertyKey: `spring.elasticsearch.connection-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.endpoints`
  * newPropertyKey: `spring.elasticsearch.uris`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.max-in-memory-size`
  * newPropertyKey: `spring.elasticsearch.webclient.max-in-memory-size`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.password`
  * newPropertyKey: `spring.elasticsearch.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.socket-timeout`
  * newPropertyKey: `spring.elasticsearch.socket-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.username`
  * newPropertyKey: `spring.elasticsearch.username`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.connection-timeout`
  * newPropertyKey: `spring.elasticsearch.connection-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.password`
  * newPropertyKey: `spring.elasticsearch.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.read-timeout`
  * newPropertyKey: `spring.elasticsearch.socket-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.sniffer.delay-after-failure`
  * newPropertyKey: `spring.elasticsearch.restclient.sniffer.delay-after-failure`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.sniffer.interval`
  * newPropertyKey: `spring.elasticsearch.restclient.sniffer.interval`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.uris`
  * newPropertyKey: `spring.elasticsearch.uris`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.elasticsearch.rest.username`
  * newPropertyKey: `spring.elasticsearch.username`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.flyway.ignore-future-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.flyway.ignore-ignored-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.flyway.ignore-missing-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.flyway.ignore-pending-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.flyway.oracle-kerberos-config-file`
  * newPropertyKey: `spring.flyway.kerberos-config-file`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.gzipped`
  * newPropertyKey: `spring.web.resources.chain.compressed`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.webflux.session.cookie.same-site`
  * newPropertyKey: `server.reactive.session.cookie.same-site`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.elasticsearch.client.reactive.use-ssl`
  * comment: `This property is deprecated: Use of SSL should be indicated through an https URI scheme`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.vault-secrets`
  * comment: `This property is deprecated: Removed in the open source release of Flyway 7.12.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.vault-token`
  * comment: `This property is deprecated: Removed in the open source release of Flyway 7.12.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.vault-url`
  * comment: `This property is deprecated: Removed in the open source release of Flyway 7.12.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.kafka.listener.only-log-record-metadata`
  * comment: `This property is deprecated: Use KafkaUtils#setConsumerRecordFormatter instead.`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
displayName: Migrate Spring Boot properties to 2.6
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.device-id
      newPropertyKey: management.metrics.export.dynatrace.v1.device-id
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.group
      newPropertyKey: management.metrics.export.dynatrace.v1.group
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.technology-type
      newPropertyKey: management.metrics.export.dynatrace.v1.technology-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.connection-timeout
      newPropertyKey: spring.elasticsearch.connection-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.endpoints
      newPropertyKey: spring.elasticsearch.uris
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.max-in-memory-size
      newPropertyKey: spring.elasticsearch.webclient.max-in-memory-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.password
      newPropertyKey: spring.elasticsearch.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.socket-timeout
      newPropertyKey: spring.elasticsearch.socket-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.username
      newPropertyKey: spring.elasticsearch.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.connection-timeout
      newPropertyKey: spring.elasticsearch.connection-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.password
      newPropertyKey: spring.elasticsearch.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.read-timeout
      newPropertyKey: spring.elasticsearch.socket-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.sniffer.delay-after-failure
      newPropertyKey: spring.elasticsearch.restclient.sniffer.delay-after-failure
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.sniffer.interval
      newPropertyKey: spring.elasticsearch.restclient.sniffer.interval
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.uris
      newPropertyKey: spring.elasticsearch.uris
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.username
      newPropertyKey: spring.elasticsearch.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-future-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-ignored-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-missing-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-pending-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.oracle-kerberos-config-file
      newPropertyKey: spring.flyway.kerberos-config-file
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.gzipped
      newPropertyKey: spring.web.resources.chain.compressed
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.webflux.session.cookie.same-site
      newPropertyKey: server.reactive.session.cookie.same-site
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.elasticsearch.client.reactive.use-ssl
      comment: This property is deprecated: Use of SSL should be indicated through an https URI scheme
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.vault-secrets
      comment: This property is deprecated: Removed in the open source release of Flyway 7.12.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.vault-token
      comment: This property is deprecated: Removed in the open source release of Flyway 7.12.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.vault-url
      comment: This property is deprecated: Removed in the open source release of Flyway 7.12.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.kafka.listener.only-log-record-metadata
      comment: This property is deprecated: Use KafkaUtils#setConsumerRecordFormatter instead.

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 2.6](/recipes/java/spring/boot2/upgradespringboot_2_6.md)


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
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_6")
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
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_6")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_6</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_6 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_2_6
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_6" />

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
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
