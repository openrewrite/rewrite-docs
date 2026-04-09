---
sidebar_label: "Migrate to Spring Framework 6.2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate to Spring Framework 6.2

**org.openrewrite.java.spring.framework.UpgradeSpringFramework\_6\_2**

_Migrate applications to the latest Spring Framework 6.2 release._

## Recipe source

[GitHub: spring-framework-62.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-framework-62.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Spring Framework 6.1](../../../java/spring/framework/upgradespringframework_6_1)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `6.2.x`
* [Migrate `org.springframework.util.Base64Utils` to `java.io.Base64`](../../../java/spring/framework/migratebase64utils)
* [Migrate `HandlerResult.hasExceptionHandler()` to `getExceptionHandler()`](../../../java/spring/framework/migratehandlerresulthasexceptionhandlermethod)
* [Migrate `org.springframework.web.reactive.HandlerResult.setExceptionHandler` method](../../../java/spring/framework/migratehandlerresultsetexceptionhandlermethod)
* [Migrate `MethodArgumentNotValidException.errorsToStringList` and `resolveErrorMessages`](../../../java/spring/framework/migratemethodargumentnotvalidexceptionerrormethod)
* [Migrate `ResourceHttpMessageWriter.addHeaders`](../../../java/spring/framework/migrateresourcehttpmessagewriteraddheadersmethod)
* [Migrate deprecated `UriComponentsBuilder` methods](../../../java/spring/framework/migrateuricomponentsbuildermethods)
* [Migrate `WebExchangeBindException.resolveErrorMessages`](../../../java/spring/framework/migratewebexchangebindexceptionresolveerrormethod)
* [Replaces deprecated `ClientHttpResponse#getRawStatusCode()`](../../../java/spring/framework/migrateclienthttpresponsegetrawstatuscodemethod)
* [Migrate `setConnectTimeout(..)` to ConnectionConfig `setConnectTimeout(..)`](../../../java/spring/framework/httpcomponentsclienthttprequestfactoryconnecttimeout)
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.http.client.observation.ClientHttpObservationDocumentation.HighCardinalityKeyNames.CLIENT_NAME`
  * fullyQualifiedConstantName: `org.springframework.http.client.observation.ClientHttpObservationDocumentation.LowCardinalityKeyNames.CLIENT_NAME`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.web.reactive.function.client.ClientHttpObservationDocumentation.HighCardinalityKeyNames.CLIENT_NAME`
  * fullyQualifiedConstantName: `org.springframework.web.reactive.function.client.ClientHttpObservationDocumentation.LowCardinalityKeyNames.CLIENT_NAME`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.springframework.web.filter.reactive.ServerWebExchangeContextFilter get(reactor.util.context.Context)`
  * newMethodName: `getExchange`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.springframework.web.reactive.function.client.support.WebClientAdapter forClient(org.springframework.web.reactive.function.client.WebClient)`
  * newMethodName: `create`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.web.reactive.socket.client.JettyWebSocketClient`
  * newFullyQualifiedTypeName: `org.springframework.web.reactive.socket.client.StandardWebSocketClient`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.web.socket.client.jetty.JettyWebSocketClient`
  * newFullyQualifiedTypeName: `org.springframework.web.socket.client.standard.StandardWebSocketClient`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_2
displayName: Migrate to Spring Framework 6.2
description: |
  Migrate applications to the latest Spring Framework 6.2 release.
recipeList:
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_1
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: "*"
      newVersion: 6.2.x
  - org.openrewrite.java.spring.framework.MigrateBase64Utils
  - org.openrewrite.java.spring.framework.MigrateHandlerResultHasExceptionHandlerMethod
  - org.openrewrite.java.spring.framework.MigrateHandlerResultSetExceptionHandlerMethod
  - org.openrewrite.java.spring.framework.MigrateMethodArgumentNotValidExceptionErrorMethod
  - org.openrewrite.java.spring.framework.MigrateResourceHttpMessageWriterAddHeadersMethod
  - org.openrewrite.java.spring.framework.MigrateUriComponentsBuilderMethods
  - org.openrewrite.java.spring.framework.MigrateWebExchangeBindExceptionResolveErrorMethod
  - org.openrewrite.java.spring.framework.MigrateClientHttpResponseGetRawStatusCodeMethod
  - org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryConnectTimeout
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.http.client.observation.ClientHttpObservationDocumentation.HighCardinalityKeyNames.CLIENT_NAME
      fullyQualifiedConstantName: org.springframework.http.client.observation.ClientHttpObservationDocumentation.LowCardinalityKeyNames.CLIENT_NAME
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.web.reactive.function.client.ClientHttpObservationDocumentation.HighCardinalityKeyNames.CLIENT_NAME
      fullyQualifiedConstantName: org.springframework.web.reactive.function.client.ClientHttpObservationDocumentation.LowCardinalityKeyNames.CLIENT_NAME
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.web.filter.reactive.ServerWebExchangeContextFilter get(reactor.util.context.Context)
      newMethodName: getExchange
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springframework.web.reactive.function.client.support.WebClientAdapter forClient(org.springframework.web.reactive.function.client.WebClient)
      newMethodName: create
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.web.reactive.socket.client.JettyWebSocketClient
      newFullyQualifiedTypeName: org.springframework.web.reactive.socket.client.StandardWebSocketClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.web.socket.client.jetty.JettyWebSocketClient
      newFullyQualifiedTypeName: org.springframework.web.socket.client.standard.StandardWebSocketClient

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.4 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_4-community-edition.md)
* [Migrate to Spring Framework 7.0](/recipes/java/spring/framework/upgradespringframework_7_0.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_2"
  displayName="Migrate to Spring Framework 6.2"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_2" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
