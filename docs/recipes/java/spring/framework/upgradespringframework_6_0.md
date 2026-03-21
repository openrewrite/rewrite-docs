---
sidebar_label: "Migrate to Spring Framework 6.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Framework 6.0

**org.openrewrite.java.spring.framework.UpgradeSpringFramework\_6\_0**

_Migrate applications to the latest Spring Framework 6.0 release._

## Recipe source

[GitHub: spring-framework-60.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-framework-60.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Spring Framework 5.3 (Community Edition)](../../../java/spring/framework/upgradespringframework_5_3-community-edition)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `6.0.x`
* [Migrate removed Spring `Assert` methods](../../../java/spring/framework/migratespringassert)
* [Migrate to ApacheHttpClient 5.x](../../../apache/httpclient5/upgradeapachehttpclient_5)
* [Migrate `setReadTimeout(java.lang.int)` to SocketConfig `setSoTimeout(..)`](../../../java/spring/framework/httpcomponentsclienthttprequestfactoryreadtimeout)
* [Migrate `ResponseEntityExceptionHandler` from HttpStatus to HttpStatusCode](../../../java/spring/framework/migrateresponseentityexceptionhandlerhttpstatustohttpstatuscode)
* [Migrate breaking changes in `ResponseStatusException`](../../../java/spring/framework/migrateresponsestatusexception)
* [Convert `JdbcTemplate.queryForLong(..)` to `queryForObject(..)`](../../../java/spring/data/jdbctemplatequeryforlongmigration)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_0
displayName: Migrate to Spring Framework 6.0
description: |
  Migrate applications to the latest Spring Framework 6.0 release.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: "*"
      newVersion: 6.0.x
  - org.openrewrite.java.spring.framework.MigrateSpringAssert
  - org.openrewrite.apache.httpclient5.UpgradeApacheHttpClient_5
  - org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout
  - org.openrewrite.java.spring.framework.MigrateResponseEntityExceptionHandlerHttpStatusToHttpStatusCode
  - org.openrewrite.java.spring.framework.MigrateResponseStatusException
  - org.openrewrite.java.spring.data.JdbcTemplateQueryForLongMigration

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)
* [Migrate to Spring Framework 6.1](/recipes/java/spring/framework/upgradespringframework_6_1.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_0"
  displayName="Migrate to Spring Framework 6.0"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_0" />

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
