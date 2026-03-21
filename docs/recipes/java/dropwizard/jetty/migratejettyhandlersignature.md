---
sidebar_label: "Migrate Jetty `AbstractHandler` to Jetty 12 `Handler.Abstract`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Jetty `AbstractHandler` to Jetty 12 `Handler.Abstract`

**org.openrewrite.java.dropwizard.jetty.MigrateJettyHandlerSignature**

_Migrates custom Jetty handler implementations from Jetty 11's `AbstractHandler` (used in Dropwizard 4.x) to Jetty 12's `Handler.Abstract` (used in Dropwizard 5.x). This changes the `handle` method signature and updates `baseRequest.setHandled(true)` to use `Callback` and return `true`._

## Recipe source

[GitHub: MigrateJettyHandlerSignature.java](https://github.com/openrewrite/rewrite-dropwizard/blob/main/src/main/java/org/openrewrite/java/dropwizard/jetty/MigrateJettyHandlerSignature.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-dropwizard/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-dropwizard/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Dropwizard 5.0.x from 4.x](/recipes/java/dropwizard/migratetodropwizard5.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.handler.AbstractHandler;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

class MyHandler extends AbstractHandler {
    @Override
    public void handle(String target, Request baseRequest,
                       HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setStatus(200);
        baseRequest.setHandled(true);
    }
}
```

###### After
```java
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Response;
import org.eclipse.jetty.util.Callback;
import jakarta.servlet.http.HttpServletResponse;

class MyHandler extends Handler.Abstract {
    @Override
    public boolean handle(Request request, Response response, Callback callback) throws Exception {
        response.setStatus(200);
        callback.succeeded();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,1 @@
+import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.Request;
@@ -2,2 +3,2 @@
import org.eclipse.jetty.server.Request;
-import org.eclipse.jetty.server.handler.AbstractHandler;
-import jakarta.servlet.http.HttpServletRequest;
+import org.eclipse.jetty.server.Response;
+import org.eclipse.jetty.util.Callback;
import jakarta.servlet.http.HttpServletResponse;
@@ -6,1 +7,1 @@
import jakarta.servlet.http.HttpServletResponse;

-class MyHandler extends AbstractHandler {
+class MyHandler extends Handler.Abstract {
    @Override
@@ -8,2 +9,1 @@
class MyHandler extends AbstractHandler {
    @Override
-   public void handle(String target, Request baseRequest,
-                      HttpServletRequest request, HttpServletResponse response) throws Exception {
+   public boolean handle(Request request, Response response, Callback callback) throws Exception {
        response.setStatus(200);
@@ -11,1 +11,1 @@
                       HttpServletRequest request, HttpServletResponse response) throws Exception {
        response.setStatus(200);
-       baseRequest.setHandled(true);
+       callback.succeeded();
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.dropwizard.jetty.MigrateJettyHandlerSignature"
  displayName="Migrate Jetty `AbstractHandler` to Jetty 12 `Handler.Abstract`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-dropwizard"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dropwizard.jetty.MigrateJettyHandlerSignature" />

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
