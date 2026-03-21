---
sidebar_label: "Migrate OpenTracing API to OpenTelemetry API"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate OpenTracing API to OpenTelemetry API

**org.openrewrite.java.spring.opentelemetry.MigrateOpenTracingToOpenTelemetry**

_Migrate Java code using OpenTracing API to OpenTelemetry API. OpenTracing has been superseded by OpenTelemetry and is no longer actively maintained._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [opentracing](/reference/recipes-by-tag#opentracing)
* [migration](/reference/recipes-by-tag#migration)
* [opentelemetry](/reference/recipes-by-tag#opentelemetry)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: opentelemetry.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/opentelemetry.yml),
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
  * groupId: `io.opentracing`
  * artifactId: `*`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `io.opentracing.contrib`
  * artifactId: `*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.opentelemetry`
  * artifactId: `opentelemetry-api`
  * version: `1.x`
  * onlyIfUsing: `io.opentelemetry.api.*`
  * acceptTransitive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.Tracer`
  * newFullyQualifiedTypeName: `io.opentelemetry.api.trace.Tracer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.Span`
  * newFullyQualifiedTypeName: `io.opentelemetry.api.trace.Span`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.SpanContext`
  * newFullyQualifiedTypeName: `io.opentelemetry.api.trace.SpanContext`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.Scope`
  * newFullyQualifiedTypeName: `io.opentelemetry.context.Scope`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.ScopeManager`
  * newFullyQualifiedTypeName: `io.opentelemetry.context.Context`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.propagation.Format`
  * newFullyQualifiedTypeName: `io.opentelemetry.context.propagation.TextMapPropagator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.propagation.TextMapExtract`
  * newFullyQualifiedTypeName: `io.opentelemetry.context.propagation.TextMapGetter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.opentracing.propagation.TextMapInject`
  * newFullyQualifiedTypeName: `io.opentelemetry.context.propagation.TextMapSetter`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `io.opentracing.contrib`
  * newPackageName: `io.opentelemetry.instrumentation`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.opentelemetry.MigrateOpenTracingToOpenTelemetry
displayName: Migrate OpenTracing API to OpenTelemetry API
description: |
  Migrate Java code using OpenTracing API to OpenTelemetry API. OpenTracing has been superseded by OpenTelemetry and is no longer actively maintained.
tags:
  - spring
  - opentracing
  - migration
  - opentelemetry
  - boot
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: io.opentracing
      artifactId: "*"
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: io.opentracing.contrib
      artifactId: "*"
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.opentelemetry
      artifactId: opentelemetry-api
      version: 1.x
      onlyIfUsing: io.opentelemetry.api.*
      acceptTransitive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.Tracer
      newFullyQualifiedTypeName: io.opentelemetry.api.trace.Tracer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.Span
      newFullyQualifiedTypeName: io.opentelemetry.api.trace.Span
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.SpanContext
      newFullyQualifiedTypeName: io.opentelemetry.api.trace.SpanContext
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.Scope
      newFullyQualifiedTypeName: io.opentelemetry.context.Scope
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.ScopeManager
      newFullyQualifiedTypeName: io.opentelemetry.context.Context
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.propagation.Format
      newFullyQualifiedTypeName: io.opentelemetry.context.propagation.TextMapPropagator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.propagation.TextMapExtract
      newFullyQualifiedTypeName: io.opentelemetry.context.propagation.TextMapGetter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.opentracing.propagation.TextMapInject
      newFullyQualifiedTypeName: io.opentelemetry.context.propagation.TextMapSetter
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.opentracing.contrib
      newPackageName: io.opentelemetry.instrumentation
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Complete migration to OpenTelemetry](/recipes/java/spring/opentelemetry/migratetoopentelemetry.md)

## Examples
##### Example 1
`MigrateOpenTracingToOpenTelemetryTest#migrateTracer`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.opentracing.Tracer;

class OpenTracingService {
    Tracer tracer;
}
```

###### After
```java
import io.opentelemetry.api.trace.Tracer;

class OpenTracingService {
    Tracer tracer;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import io.opentracing.Tracer;
+import io.opentelemetry.api.trace.Tracer;

```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateOpenTracingToOpenTelemetryTest#migrateTracer`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.opentracing.Tracer;

class OpenTracingService {
    Tracer tracer;
}
```

###### After
```java
import io.opentelemetry.api.trace.Tracer;

class OpenTracingService {
    Tracer tracer;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import io.opentracing.Tracer;
+import io.opentelemetry.api.trace.Tracer;

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.opentelemetry.MigrateOpenTracingToOpenTelemetry"
  displayName="Migrate OpenTracing API to OpenTelemetry API"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.opentelemetry.MigrateOpenTracingToOpenTelemetry" />

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
