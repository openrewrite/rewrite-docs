---
sidebar_label: "Find call graph"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find call graph

**org.openrewrite.FindCallGraph**

_Produces a data table where each row represents a method call._

## Recipe source

[GitHub: FindCallGraph.java](https://github.com/openrewrite/rewrite-all/blob/main/src/main/java/org/openrewrite/FindCallGraph.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-all/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-all/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `boolean` | includeStdLib | *Optional*. When enabled calls to methods in packages beginning with "java", "groovy", and "kotlin" will be included in the report. By default these are omitted. |  |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|includeStdLib|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
    String s = foo();
}
```

###### After
```java
class A {
    String s = /*~~(Method type not found)~~>*/foo();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
class A {
-   String s = foo();
+   String s = /*~~(Method type not found)~~>*/foo();
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.FindCallGraph"
  displayName="Find call graph"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-all"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ALL"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.FindCallGraph" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.CallGraph" label="CallGraph">

### Method call graph
**org.openrewrite.table.CallGraph**

_Records method callers and the methods they invoke._

| Column Name | Description |
| ----------- | ----------- |
| From source set | The source set from which the action is issued. |
| From class | The fully qualified name of the class from which the action is issued. |
| From name | The name of the method or scope from which the action is issued. |
| From arguments | The argument types, if any, to the method or scope from which the action is issued. Expressed as a comma-separated list |
| From type | The type of resource the action is being issued from. |
| Action | The type of access being made to the resource. |
| To class | The fully-qualified name of the class containing the resource being accessed. |
| To name | The name of the resource being accessed. |
| To arguments | The argument types, if any, to the resource being accessed. Expressed as a comma-separated list |
| To type | The type of resource being accessed. |
| Return type | The return type of the method. |

</TabItem>

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
