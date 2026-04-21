---
sidebar_label: "OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`

**org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse**

_Replace usages of OkHttp MockWebServer `MockResponse` with 5.x MockWebServer3 `MockResponse` and it's `Builder`._

## Recipe source

[GitHub: UpdateMockWebServerMockResponse.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/UpdateMockWebServerMockResponse.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setBody(*)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setBody(*)`
  * newMethodName: `body`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setTrailers(okhttp3.Headers)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setTrailers(okhttp3.Headers)`
  * newMethodName: `trailers`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#withSettings(okhttp3.internal.http2.Settings)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#withSettings(okhttp3.internal.http2.Settings)`
  * newMethodName: `settings`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setStatus(java.lang.String)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setStatus(java.lang.String)`
  * newMethodName: `status`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#withWebSocketUpgrade(okhttp3.WebSocketListener)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#withWebSocketUpgrade(okhttp3.WebSocketListener)`
  * newMethodName: `webSocketUpgrade`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setHeaders(okhttp3.Headers)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setHeaders(okhttp3.Headers)`
  * newMethodName: `headers`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setHttp2ErrorCode(int)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setHttp2ErrorCode(int)`
  * newMethodName: `code`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setChunkedBody(*, int)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setChunkedBody(*, int)`
  * newMethodName: `chunkedBody`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setThrottleBody(long, long, java.util.concurrent.TimeUnit)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setThrottleBody(long, long, java.util.concurrent.TimeUnit)`
  * newMethodName: `throttleBody`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setErrorCode(int)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setErrorCode(int)`
  * newMethodName: `code`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setBodyDelay(long, java.util.concurrent.TimeUnit)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setBodyDelay(long, java.util.concurrent.TimeUnit)`
  * newMethodName: `bodyDelay`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setHeadersDelay(long, java.util.concurrent.TimeUnit)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setHeadersDelay(long, java.util.concurrent.TimeUnit)`
  * newMethodName: `headersDelay`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setResponseCode(int)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#setResponseCode(int)`
  * newMethodName: `code`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method invocation return type](../../../java/changemethodinvocationreturntype)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#withPush(okhttp3.mockwebserver.PushPromise)`
  * newReturnType: `mockwebserver3.MockResponse.Builder`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.MockResponse#withPush(okhttp3.mockwebserver.PushPromise)`
  * newMethodName: `addPush`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.RecordedRequest getPath()`
  * newMethodName: `getTarget`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `okhttp3.mockwebserver.RecordedRequest getRequestUrl()`
  * newMethodName: `getUrl`
  * matchOverrides: `true`
  * ignoreDefinition: `false`
* [Preserve `MockResponse` return type for `Dispatcher.dispatch()` overrides](../../../java/testing/junit5/updatemockwebserverdispatcher)
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `okhttp3.mockwebserver.MockResponse`
  * newFullyQualifiedTypeName: `mockwebserver3.MockResponse$Builder`
  * ignoreDefinition: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `okhttp3.mockwebserver`
  * newPackageName: `mockwebserver3`
  * recursive: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse
displayName: OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`
description: |
  Replace usages of OkHttp MockWebServer `MockResponse` with 5.x MockWebServer3 `MockResponse` and it's `Builder`.
recipeList:
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setBody(*)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setBody(*)
      newMethodName: body
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setTrailers(okhttp3.Headers)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setTrailers(okhttp3.Headers)
      newMethodName: trailers
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#withSettings(okhttp3.internal.http2.Settings)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#withSettings(okhttp3.internal.http2.Settings)
      newMethodName: settings
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setStatus(java.lang.String)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setStatus(java.lang.String)
      newMethodName: status
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#withWebSocketUpgrade(okhttp3.WebSocketListener)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#withWebSocketUpgrade(okhttp3.WebSocketListener)
      newMethodName: webSocketUpgrade
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setHeaders(okhttp3.Headers)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setHeaders(okhttp3.Headers)
      newMethodName: headers
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setHttp2ErrorCode(int)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setHttp2ErrorCode(int)
      newMethodName: code
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setChunkedBody(*, int)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setChunkedBody(*, int)
      newMethodName: chunkedBody
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setThrottleBody(long, long, java.util.concurrent.TimeUnit)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setThrottleBody(long, long, java.util.concurrent.TimeUnit)
      newMethodName: throttleBody
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setErrorCode(int)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setErrorCode(int)
      newMethodName: code
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setBodyDelay(long, java.util.concurrent.TimeUnit)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setBodyDelay(long, java.util.concurrent.TimeUnit)
      newMethodName: bodyDelay
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setHeadersDelay(long, java.util.concurrent.TimeUnit)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setHeadersDelay(long, java.util.concurrent.TimeUnit)
      newMethodName: headersDelay
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#setResponseCode(int)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#setResponseCode(int)
      newMethodName: code
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodInvocationReturnType:
      methodPattern: okhttp3.mockwebserver.MockResponse#withPush(okhttp3.mockwebserver.PushPromise)
      newReturnType: mockwebserver3.MockResponse.Builder
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.MockResponse#withPush(okhttp3.mockwebserver.PushPromise)
      newMethodName: addPush
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.RecordedRequest getPath()
      newMethodName: getTarget
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: okhttp3.mockwebserver.RecordedRequest getRequestUrl()
      newMethodName: getUrl
      matchOverrides: true
      ignoreDefinition: false
  - org.openrewrite.java.testing.junit5.UpdateMockWebServerDispatcher
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: okhttp3.mockwebserver.MockResponse
      newFullyQualifiedTypeName: mockwebserver3.MockResponse$Builder
      ignoreDefinition: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: okhttp3.mockwebserver
      newPackageName: mockwebserver3
      recursive: false

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Use OkHttp 3 MockWebServer for JUnit 5](/recipes/java/testing/junit5/upgradeokhttpmockwebserver.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;

class ApiUnitTest {
    private MockWebServer mockWebServer = new MockWebServer();
    void testGet() {
        String body = "{\"message\":\"Hello, World!\"}";
        mockWebServer.enqueue(new MockResponse()
                .setHeader("Content-Type", "application/json; charset=utf-8")
                .setBody(body)
                .setResponseCode(200));
    }
}
```

###### After
```java
import mockwebserver3.MockResponse;
import mockwebserver3.MockWebServer;

class ApiUnitTest {
    private MockWebServer mockWebServer = new MockWebServer();
    void testGet() {
        String body = "{\"message\":\"Hello, World!\"}";
        mockWebServer.enqueue(new MockResponse.Builder()
                .setHeader("Content-Type", "application/json; charset=utf-8")
                .body(body)
                .code(200)
                .build());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import okhttp3.mockwebserver.MockResponse;
-import okhttp3.mockwebserver.MockWebServer;
+import mockwebserver3.MockResponse;
+import mockwebserver3.MockWebServer;

@@ -8,1 +8,1 @@
    void testGet() {
        String body = "{\"message\":\"Hello, World!\"}";
-       mockWebServer.enqueue(new MockResponse()
+       mockWebServer.enqueue(new MockResponse.Builder()
                .setHeader("Content-Type", "application/json; charset=utf-8")
@@ -10,2 +10,3 @@
        mockWebServer.enqueue(new MockResponse()
                .setHeader("Content-Type", "application/json; charset=utf-8")
-               .setBody(body)
-               .setResponseCode(200));
+               .body(body)
+               .code(200)
+               .build());
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse"
  displayName="OkHttp `MockWebServer` `MockResponse` to 5.x `MockWebServer3` `MockResponse`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UpdateMockWebServerMockResponse" />

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
