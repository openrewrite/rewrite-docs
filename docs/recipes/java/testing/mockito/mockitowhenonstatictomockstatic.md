---
sidebar_label: "Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic

**org.openrewrite.java.testing.mockito.MockitoWhenOnStaticToMockStatic**

_Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic as Mockito4 no longer allows this. For JUnit 4/5 & TestNG: When `@Before*` is used, a `close` call is added to the corresponding `@After*` method. This change moves away from implicit bytecode manipulation for static method stubbing, making mocking behavior more explicit and scoped to avoid unintended side effects._

## Recipe source

[GitHub: MockitoWhenOnStaticToMockStatic.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/MockitoWhenOnStaticToMockStatic.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Mockito 4.x upgrade](/recipes/java/testing/mockito/mockito1to4migration.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.example.A;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

class Test {
    void test() {
        System.out.println("some statement");
        when(A.getNumber()).thenReturn(-1);
        assertEquals(A.getNumber(), -1);
    }
}
```

###### After
```java
import org.example.A;
import org.mockito.MockedStatic;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

class Test {
    void test() {
        System.out.println("some statement");
        try (MockedStatic<A> mockA1 = mockStatic(A.class)) {
            mockA1.when(() -> A.getNumber()).thenReturn(-1);
            assertEquals(A.getNumber(), -1);
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,0 +2,1 @@
import org.example.A;
+import org.mockito.MockedStatic;

@@ -9,2 +10,4 @@
    void test() {
        System.out.println("some statement");
-       when(A.getNumber()).thenReturn(-1);
-       assertEquals(A.getNumber(), -1);
+       try (MockedStatic<A> mockA1 = mockStatic(A.class)) {
+           mockA1.when(() -> A.getNumber()).thenReturn(-1);
+           assertEquals(A.getNumber(), -1);
+       }
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.MockitoWhenOnStaticToMockStatic"
  displayName="Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.MockitoWhenOnStaticToMockStatic" />

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
