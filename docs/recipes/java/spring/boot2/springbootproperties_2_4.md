---
sidebar_label: "Migrate Spring Boot properties to 2.4"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 2.4

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_4**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24-properties.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license/).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.clean-history-on-start`
  * newPropertyKey: `logging.logback.rollingpolicy.clean-history-on-start`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.max-history`
  * newPropertyKey: `logging.logback.rollingpolicy.max-history`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.max-size`
  * newPropertyKey: `logging.logback.rollingpolicy.max-file-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.total-size-cap`
  * newPropertyKey: `logging.logback.rollingpolicy.total-size-cap`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.pattern.rolling-file-name`
  * newPropertyKey: `logging.logback.rollingpolicy.file-name-pattern`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.server.servlet.context-path`
  * newPropertyKey: `management.server.base-path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.grid-fs-database`
  * newPropertyKey: `spring.data.mongodb.gridfs.database`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.password`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.repositories.enabled`
  * newPropertyKey: `spring.data.neo4j.repositories.type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.uri`
  * newPropertyKey: `spring.neo4j.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.username`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.locale`
  * newPropertyKey: `spring.web.locale`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.locale-resolver`
  * newPropertyKey: `spring.web.locale-resolver`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.profiles`
  * newPropertyKey: `spring.config.activate.on-profile`
  * except: `[active, default, group, include]`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.add-mappings`
  * newPropertyKey: `spring.web.resources.add-mappings`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.cache-private`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.cache-private`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.cache-public`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.cache-public`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.max-age`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.max-age`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.must-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.must-revalidate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-cache`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-cache`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-store`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-store`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-transform`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-transform`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.proxy-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.proxy-revalidate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.s-max-age`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.s-max-age`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.stale-if-error`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.stale-if-error`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.stale-while-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.stale-while-revalidate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.period`
  * newPropertyKey: `spring.web.resources.cache.period`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.use-last-modified`
  * newPropertyKey: `spring.web.resources.cache.use-last-modified`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.cache`
  * newPropertyKey: `spring.web.resources.chain.cache`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.compressed`
  * newPropertyKey: `spring.web.resources.chain.compressed`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.enabled`
  * newPropertyKey: `spring.web.resources.chain.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.content.enabled`
  * newPropertyKey: `spring.web.resources.chain.strategy.content.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.content.paths`
  * newPropertyKey: `spring.web.resources.chain.strategy.content.paths`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.enabled`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.paths`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.paths`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.version`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.version`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.static-locations`
  * newPropertyKey: `spring.web.resources.static-locations`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.neo4j.auto-index`
  * comment: `This property is deprecated: Automatic index creation is no longer supported.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.neo4j.embedded.enabled`
  * comment: `This property is deprecated: Embedded mode is no longer supported, please use Testcontainers instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.neo4j.open-in-view`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.neo4j.use-native-types`
  * comment: `This property is deprecated: Native type support is now built-in.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.resources.chain.html-application-cache`
  * comment: `This property is deprecated: The appcache manifest feature is being removed from browsers.`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_4
displayName: Migrate Spring Boot properties to 2.4
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.clean-history-on-start
      newPropertyKey: logging.logback.rollingpolicy.clean-history-on-start
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.max-history
      newPropertyKey: logging.logback.rollingpolicy.max-history
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.max-size
      newPropertyKey: logging.logback.rollingpolicy.max-file-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file.total-size-cap
      newPropertyKey: logging.logback.rollingpolicy.total-size-cap
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.pattern.rolling-file-name
      newPropertyKey: logging.logback.rollingpolicy.file-name-pattern
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.server.servlet.context-path
      newPropertyKey: management.server.base-path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.grid-fs-database
      newPropertyKey: spring.data.mongodb.gridfs.database
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.password
      newPropertyKey: spring.neo4j.authentication.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.repositories.enabled
      newPropertyKey: spring.data.neo4j.repositories.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.uri
      newPropertyKey: spring.neo4j.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.username
      newPropertyKey: spring.neo4j.authentication.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.locale
      newPropertyKey: spring.web.locale
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.locale-resolver
      newPropertyKey: spring.web.locale-resolver
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.profiles
      newPropertyKey: spring.config.activate.on-profile
      except: [active, default, group, include]
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.add-mappings
      newPropertyKey: spring.web.resources.add-mappings
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.cache-private
      newPropertyKey: spring.web.resources.cache.cachecontrol.cache-private
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.cache-public
      newPropertyKey: spring.web.resources.cache.cachecontrol.cache-public
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.max-age
      newPropertyKey: spring.web.resources.cache.cachecontrol.max-age
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.must-revalidate
      newPropertyKey: spring.web.resources.cache.cachecontrol.must-revalidate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.no-cache
      newPropertyKey: spring.web.resources.cache.cachecontrol.no-cache
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.no-store
      newPropertyKey: spring.web.resources.cache.cachecontrol.no-store
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.no-transform
      newPropertyKey: spring.web.resources.cache.cachecontrol.no-transform
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.proxy-revalidate
      newPropertyKey: spring.web.resources.cache.cachecontrol.proxy-revalidate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.s-max-age
      newPropertyKey: spring.web.resources.cache.cachecontrol.s-max-age
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.stale-if-error
      newPropertyKey: spring.web.resources.cache.cachecontrol.stale-if-error
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.cachecontrol.stale-while-revalidate
      newPropertyKey: spring.web.resources.cache.cachecontrol.stale-while-revalidate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.period
      newPropertyKey: spring.web.resources.cache.period
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache.use-last-modified
      newPropertyKey: spring.web.resources.cache.use-last-modified
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.cache
      newPropertyKey: spring.web.resources.chain.cache
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.compressed
      newPropertyKey: spring.web.resources.chain.compressed
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.enabled
      newPropertyKey: spring.web.resources.chain.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.content.enabled
      newPropertyKey: spring.web.resources.chain.strategy.content.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.content.paths
      newPropertyKey: spring.web.resources.chain.strategy.content.paths
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.fixed.enabled
      newPropertyKey: spring.web.resources.chain.strategy.fixed.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.fixed.paths
      newPropertyKey: spring.web.resources.chain.strategy.fixed.paths
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.strategy.fixed.version
      newPropertyKey: spring.web.resources.chain.strategy.fixed.version
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.static-locations
      newPropertyKey: spring.web.resources.static-locations
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.neo4j.auto-index
      comment: This property is deprecated: Automatic index creation is no longer supported.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.neo4j.embedded.enabled
      comment: This property is deprecated: Embedded mode is no longer supported, please use Testcontainers instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.neo4j.open-in-view
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.neo4j.use-native-types
      comment: This property is deprecated: Native type support is now built-in.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.resources.chain.html-application-cache
      comment: This property is deprecated: The appcache manifest feature is being removed from browsers.

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
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_4")
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
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_4")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_4</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_4 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_2_4
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_4" />

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
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), ashakirin, [Tim te Beek](mailto:tim@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com)
