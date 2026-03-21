---
sidebar_label: "Replace `MockitoTestExecutionListener` with the equivalent Mockito test initialization"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `MockitoTestExecutionListener` with the equivalent Mockito test initialization

**org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListener**

_Replace `@TestExecutionListeners(MockitoTestExecutionListener.class)` with the appropriate Mockito initialization for the test framework in use: `@ExtendWith(MockitoExtension.class)` for JUnit 5, `@RunWith(MockitoJUnitRunner.class)` for JUnit 4, or `MockitoAnnotations.openMocks(this)` for TestNG._

## Recipe source

[GitHub: ReplaceMockitoTestExecutionListener.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/ReplaceMockitoTestExecutionListener.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | targetFramework | *Optional*. The test framework to use when imports alone cannot determine the framework. Typically set by wrapper recipes that check project dependencies. Valid options: `jupiter`, `junit4`, `testng` |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Replace `MockitoTestExecutionListener` (JUnit 4 projects)](/recipes/java/testing/mockito/replacemockitotestexecutionlistenerforjunit4.md)
* [Replace `MockitoTestExecutionListener` (JUnit Jupiter projects)](/recipes/java/testing/mockito/replacemockitotestexecutionlistenerforjupiter.md)
* [Replace `MockitoTestExecutionListener` (TestNG projects)](/recipes/java/testing/mockito/replacemockitotestexecutionlistenerfortestng.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|targetFramework|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.boot.test.mock.mockito.MockitoTestExecutionListener;
import org.junit.jupiter.api.Test;

@TestExecutionListeners(mergeMode = TestExecutionListeners.MergeMode.MERGE_WITH_DEFAULTS, listeners = {MockitoTestExecutionListener.class})
public class SampleTest {
    @Test
    void test() {}
}
```

###### After
```java
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.Test;

@ExtendWith(MockitoExtension.class)
public class SampleTest {
    @Test
    void test() {}
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.springframework.test.context.TestExecutionListeners;
-import org.springframework.boot.test.mock.mockito.MockitoTestExecutionListener;
+import org.junit.jupiter.api.extension.ExtendWith;
+import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.Test;
@@ -5,1 +5,1 @@
import org.junit.jupiter.api.Test;

-@TestExecutionListeners(mergeMode = TestExecutionListeners.MergeMode.MERGE_WITH_DEFAULTS, listeners = {MockitoTestExecutionListener.class})
+@ExtendWith(MockitoExtension.class)
public class SampleTest {
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListener"
  displayName="Replace `MockitoTestExecutionListener` with the equivalent Mockito test initialization"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.ReplaceMockitoTestExecutionListener" />

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
