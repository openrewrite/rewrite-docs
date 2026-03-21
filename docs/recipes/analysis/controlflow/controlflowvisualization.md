---
sidebar_label: "Control flow visualization"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Control flow visualization

**org.openrewrite.analysis.controlflow.ControlFlowVisualization**

_Visualize the control flow of a Java program._

## Recipe source

[GitHub: ControlFlowVisualization.java](https://github.com/openrewrite/rewrite-analysis/blob/main/src/main/java/org/openrewrite/analysis/controlflow/ControlFlowVisualization.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.meta/rewrite-analysis/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `boolean` | includeDotfile | Also output with a Dotfile which can be then later visualized by Graphviz. |  |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|includeDotfile|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
abstract class Test {
    abstract int start();
    void test() {
        int x = start();
        x++;
    }
}
```

###### After
```java
abstract class Test {
    abstract int start();
    void test() /*~~(BB: 1 CN: 0 EX: 1 | 1L)~~>*/{
        int x = start();
        x++;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
abstract class Test {
    abstract int start();
-   void test() {
+   void test() /*~~(BB: 1 CN: 0 EX: 1 | 1L)~~>*/{
        int x = start();
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ControlFlowVisualizationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ControlFlowVisualizationExample
displayName: Control flow visualization example
recipeList:
  - org.openrewrite.analysis.controlflow.ControlFlowVisualization:
      includeDotfile: false
```

<RunRecipe
  recipeName="org.openrewrite.analysis.controlflow.ControlFlowVisualization"
  displayName="Control flow visualization"
  groupId="org.openrewrite.meta"
  artifactId="rewrite-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_META_REWRITE_ANALYSIS"
  requiresConfiguration
  cliOptions={' --recipe-option "includeDotfile=false"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.analysis.controlflow.ControlFlowVisualization" />

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
