---
sidebar_label: "Remove unused local variables"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unused local variables

**org.openrewrite.staticanalysis.RemoveUnusedLocalVariables**

_If a local variable is declared but not used, it is dead code and should be removed. Unused variables increase cognitive load for readers who must determine whether the variable matters, and they may signal incomplete implementations or missed refactoring._

### Tags

* [RSPEC-S1481](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1481&open=java%3AS1481)

## Recipe source

[GitHub: RemoveUnusedLocalVariables.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RemoveUnusedLocalVariables.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String[]` | ignoreVariablesNamed | *Optional*. An array of variable identifier names for local variables to ignore, even if the local variable is unused. | `[unused, notUsed, IGNORE_ME]` |
| `String` | withType | *Optional*. A fully qualified class name. Only unused local variables whose type matches this will be removed. If empty or not set, all unused local variables are considered for removal. | `java.lang.String` |
| `Boolean` | withSideEffects | *Optional*. Whether to remove unused local variables despite side effects in the initializer. Default false. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [OpenRewrite recipe best practices](/recipes/recipes/rewrite/openrewriterecipebestpractices.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|ignoreVariablesNamed|`null`|
|withType|`null`|
|withSideEffects|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    static int method(int x) {
        int a = 0;
        int b = 0;
        return a;
    }
}
```

###### After
```java
class Test {
    static int method(int x) {
        int a = 0;
        return a;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,0 @@
    static int method(int x) {
        int a = 0;
-       int b = 0;
        return a;
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.RemoveUnusedLocalVariables"
  displayName="Remove unused local variables"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RemoveUnusedLocalVariables" />

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
