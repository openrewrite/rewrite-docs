---
sidebar_label: "Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`

**org.openrewrite.hibernate.EmptyInterceptorToInterface**

_In Hibernate 6.0 the `Interceptor` interface received default implementations therefore the NOOP implementation that could be extended was no longer needed. This recipe migrates 5.x `Interceptor#onPrepareStatement(String)` to 6.0 `StatementInspector#inspect()`._

## Recipe source

[GitHub: EmptyInterceptorToInterface.java](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/java/org/openrewrite/hibernate/EmptyInterceptorToInterface.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-hibernate/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-hibernate/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Hibernate 6.0.x (Community Edition)](/recipes/hibernate/migratetohibernate60-community-edition.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.hibernate.EmptyInterceptor;

class MyInterceptor extends EmptyInterceptor {

    @Override
    public String onPrepareStatement(String sql) {
        return sql;
    }
}
```

###### After
```java
import org.hibernate.Interceptor;
import org.hibernate.resource.jdbc.spi.StatementInspector;

class MyInterceptor implements Interceptor, StatementInspector {

    @Override
    public String inspect(String sql) {
        return sql;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.hibernate.EmptyInterceptor;
+import org.hibernate.Interceptor;
+import org.hibernate.resource.jdbc.spi.StatementInspector;

@@ -3,1 +4,1 @@
import org.hibernate.EmptyInterceptor;

-class MyInterceptor extends EmptyInterceptor {
+class MyInterceptor implements Interceptor, StatementInspector {

@@ -6,1 +7,1 @@

    @Override
-   public String onPrepareStatement(String sql) {
+   public String inspect(String sql) {
        return sql;
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.hibernate.EmptyInterceptorToInterface"
  displayName="Replace `extends EmptyInterceptor` with `implements Interceptor` and potentially `StatementInspector`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-hibernate"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_HIBERNATE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hibernate.EmptyInterceptorToInterface" />

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
