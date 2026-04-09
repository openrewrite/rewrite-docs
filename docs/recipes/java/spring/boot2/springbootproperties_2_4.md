---
sidebar_label: "Migrate Spring Boot properties to 2.4"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Spring Boot properties to 2.4

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_4**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: spring-boot-24-properties.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24-properties.yml),
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
  * oldPropertyKey: `logging.file.clean-history-on-start`
  * newPropertyKey: `logging.logback.rollingpolicy.clean-history-on-start`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.max-history`
  * newPropertyKey: `logging.logback.rollingpolicy.max-history`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.max-size`
  * newPropertyKey: `logging.logback.rollingpolicy.max-file-size`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.file.total-size-cap`
  * newPropertyKey: `logging.logback.rollingpolicy.total-size-cap`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `logging.pattern.rolling-file-name`
  * newPropertyKey: `logging.logback.rollingpolicy.file-name-pattern`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.server.servlet.context-path`
  * newPropertyKey: `management.server.base-path`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.grid-fs-database`
  * newPropertyKey: `spring.data.mongodb.gridfs.database`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.password`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.repositories.enabled`
  * newPropertyKey: `spring.data.neo4j.repositories.type`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.uri`
  * newPropertyKey: `spring.neo4j.uri`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.username`
  * newPropertyKey: `spring.neo4j.authentication.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.locale`
  * newPropertyKey: `spring.web.locale`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.locale-resolver`
  * newPropertyKey: `spring.web.locale-resolver`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.profiles`
  * newPropertyKey: `spring.config.activate.on-profile`
  * except: `[active, default, group, include]`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.add-mappings`
  * newPropertyKey: `spring.web.resources.add-mappings`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.cache-private`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.cache-private`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.cache-public`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.cache-public`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.max-age`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.max-age`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.must-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.must-revalidate`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-cache`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-cache`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-store`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-store`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.no-transform`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.no-transform`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.proxy-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.proxy-revalidate`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.s-max-age`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.s-max-age`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.stale-if-error`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.stale-if-error`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.cachecontrol.stale-while-revalidate`
  * newPropertyKey: `spring.web.resources.cache.cachecontrol.stale-while-revalidate`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.period`
  * newPropertyKey: `spring.web.resources.cache.period`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.cache.use-last-modified`
  * newPropertyKey: `spring.web.resources.cache.use-last-modified`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.cache`
  * newPropertyKey: `spring.web.resources.chain.cache`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.compressed`
  * newPropertyKey: `spring.web.resources.chain.compressed`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.enabled`
  * newPropertyKey: `spring.web.resources.chain.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.content.enabled`
  * newPropertyKey: `spring.web.resources.chain.strategy.content.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.content.paths`
  * newPropertyKey: `spring.web.resources.chain.strategy.content.paths`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.enabled`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.paths`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.paths`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.strategy.fixed.version`
  * newPropertyKey: `spring.web.resources.chain.strategy.fixed.version`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
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
preconditions:
  - org.openrewrite.Singleton
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

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 2.4](/recipes/java/spring/boot2/upgradespringboot_2_4.md)

## Examples
##### Example 1
`UpgradeSpringBoot2ConfigurationTest#activateOnProfileDoNotMoveActivate`


###### Unchanged
```mavenProject
test
```

<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
# application.properties
spring.profiles.active=production
spring.profiles=dev
```

###### After
```properties
# application.properties
spring.profiles.active=production
spring.config.activate.on-profile=dev
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
# application.properties
spring.profiles.active=production
-spring.profiles=dev
+spring.config.activate.on-profile=dev

```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
---
spring:
  profiles:
    active: dev
---
spring:
  profiles: prod
```

###### After
```yaml
---
spring:
  profiles:
    active: dev
---
spring:
  config.activate.on-profile: prod
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
---
spring:
- profiles: prod
+ config.activate.on-profile: prod

```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeSpringBoot2ConfigurationTest#activateOnProfileDoNotMoveActivate`


###### Unchanged
```mavenProject
test
```

<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
# application.properties
spring.profiles.active=production
spring.profiles=dev
```

###### After
```properties
# application.properties
spring.profiles.active=production
spring.config.activate.on-profile=dev
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
# application.properties
spring.profiles.active=production
-spring.profiles=dev
+spring.config.activate.on-profile=dev

```
</TabItem>
</Tabs>

<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
---
spring:
  profiles:
    active: dev
---
spring:
  profiles: prod
```

###### After
```yaml
---
spring:
  profiles:
    active: dev
---
spring:
  config.activate.on-profile: prod
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
---
spring:
- profiles: prod
+ config.activate.on-profile: prod

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot2.SpringBootProperties_2_4"
  displayName="Migrate Spring Boot properties to 2.4"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_4" />

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
