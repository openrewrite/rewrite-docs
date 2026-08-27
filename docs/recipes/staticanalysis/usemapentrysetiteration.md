---
title: "Iterate a `Map`'s `entrySet()` rather than its `keySet()`"
sidebar_label: "Iterate a `Map`'s `entrySet()` rather than its `keySet()`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Iterate a `Map`'s `entrySet()` rather than its `keySet()`

**org.openrewrite.staticanalysis.UseMapEntrySetIteration**

A loop over `map.keySet()` that calls `map.get(key)` hashes and probes the map again for every element, which on a `TreeMap` costs an extra `O(log n)` lookup per iteration. Iterating `map.entrySet()` instead hands the loop both the key and the value. The loop is only rewritten when:
 - The map is a simple reference that is neither modified nor reassigned inside the loop.
 - `get` is called only with the loop variable.
 - The loop variable is neither reassigned nor captured by a lambda or anonymous class.

Every candidate loop, converted or not, is recorded in a data table along with the reason it was left alone.

### Tags

* [RSPEC-S2864](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S2864&open=java%3AS2864)

## Recipe source

[GitHub: UseMapEntrySetIteration.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UseMapEntrySetIteration.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.Map;

class Test {
    void test(Map<String, Integer> map) {
        for (String key : map.keySet()) {
            Integer w = map.get(key);
            System.out.println(key + "=" + w);
        }
    }
}
```

###### After
```java
import java.util.Map;

class Test {
    void test(Map<String, Integer> map) {
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            Integer w = entry.getValue();
            System.out.println(entry.getKey() + "=" + w);
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,3 +5,3 @@
class Test {
    void test(Map<String, Integer> map) {
-       for (String key : map.keySet()) {
-           Integer w = map.get(key);
-           System.out.println(key + "=" + w);
+       for (Map.Entry<String, Integer> entry : map.entrySet()) {
+           Integer w = entry.getValue();
+           System.out.println(entry.getKey() + "=" + w);
        }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.UseMapEntrySetIteration"
  displayName="Iterate a `Map`'s `entrySet()` rather than its `keySet()`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UseMapEntrySetIteration" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.staticanalysis.table.MapKeySetIterations" label="MapKeySetIterations">

### Map `keySet()` iterations
**org.openrewrite.staticanalysis.table.MapKeySetIterations**

_Loops that iterate a map's `keySet()` and look the value up again with `get(key)`, and whether they were converted to `entrySet()` iteration._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path to the source file containing the loop. |
| Class | The fully qualified name of the class containing the loop. |
| Map expression | The expression the `keySet()` and `get(key)` calls are made on. |
| Updated | Whether the loop was rewritten to iterate `entrySet()`. |
| Reason | Why the loop was left unchanged. Empty when the loop was updated. |

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
