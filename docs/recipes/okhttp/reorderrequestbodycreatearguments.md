---
sidebar_label: "Reorder the arguments of `RequestBody.create()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Reorder the arguments of `RequestBody.create()`

**org.openrewrite.okhttp.ReorderRequestBodyCreateArguments**

_Reorder the arguments of `RequestBody.create()` to put the `MediaType` argument after the `String` body._

## Recipe source

[GitHub: okhttp-5.yml](https://github.com/openrewrite/rewrite-okhttp/blob/main/src/main/resources/META-INF/rewrite/okhttp-5.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-okhttp/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-okhttp/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Reorder method arguments](../java/reordermethodarguments)
  * methodPattern: `okhttp3.RequestBody create(okhttp3.MediaType, java.lang.String)`
  * newParameterNames: `[contentType, content]`
  * oldParameterNames: `[content, contentType]`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.okhttp.ReorderRequestBodyCreateArguments
displayName: Reorder the arguments of `RequestBody.create()`
description: |
  Reorder the arguments of `RequestBody.create()` to put the `MediaType` argument after the `String` body.
recipeList:
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: okhttp3.RequestBody create(okhttp3.MediaType, java.lang.String)
      newParameterNames:
        - contentType
        - content
      oldParameterNames:
        - content
        - contentType

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to OkHttp 5.x](/recipes/okhttp/upgradeokhttp5.md)

## Examples
##### Example 1
`ReorderRequestBodyCreateArgumentsTest#reorderArguments`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import okhttp3.MediaType;
import okhttp3.RequestBody;

class MyTest {
    void testMethod() {
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "some request");
    }
}
```

###### After
```java
import okhttp3.MediaType;
import okhttp3.RequestBody;

class MyTest {
    void testMethod() {
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create("some request", mediaType);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
    void testMethod() {
        MediaType mediaType = MediaType.parse("application/json");
-       RequestBody body = RequestBody.create(mediaType, "some request");
+       RequestBody body = RequestBody.create("some request", mediaType);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`ReorderRequestBodyCreateArgumentsTest#reorderArguments`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import okhttp3.MediaType;
import okhttp3.RequestBody;

class MyTest {
    void testMethod() {
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "some request");
    }
}
```

###### After
```java
import okhttp3.MediaType;
import okhttp3.RequestBody;

class MyTest {
    void testMethod() {
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create("some request", mediaType);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
    void testMethod() {
        MediaType mediaType = MediaType.parse("application/json");
-       RequestBody body = RequestBody.create(mediaType, "some request");
+       RequestBody body = RequestBody.create("some request", mediaType);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.okhttp.ReorderRequestBodyCreateArguments"
  displayName="Reorder the arguments of `RequestBody.create()`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-okhttp"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OKHTTP"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.okhttp.ReorderRequestBodyCreateArguments" />

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
