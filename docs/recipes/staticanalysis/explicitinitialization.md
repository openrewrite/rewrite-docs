---
sidebar_label: "Explicit initialization"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Explicit initialization

**org.openrewrite.staticanalysis.ExplicitInitialization**

Checks if any class or object member is explicitly initialized to default for its type value:
 - `null` for object references
 - zero for numeric types and `char`
 - and `false` for `boolean`
Removes explicit initializations where they aren't necessary.

### Tags

* [RSPEC-S3052](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S3052&open=java%3AS3052)

## Recipe source

[GitHub: ExplicitInitialization.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ExplicitInitialization.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Code cleanup](/recipes/staticanalysis/codecleanup.md)
* [Common static analysis issues](/recipes/staticanalysis/commonstaticanalysis.md)

## Examples
##### Example 1
`ExplicitInitializationTest#removeExplicitInitialization`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    private int a = 0;
    private long b = 0L;
    private short c = 0;
    private int d = 1;
    private long e = 2L;
    private int f;
    private char g = '\0';

    private boolean h = false;
    private boolean i = true;

    private Object j = new Object();
    private Object k = null;

    int[] l = null;
    int[] m = new int[0];

    private final Long n = null;
}
```

###### After
```java
class Test {
    private int a;
    private long b;
    private short c;
    private int d = 1;
    private long e = 2L;
    private int f;
    private char g;

    private boolean h;
    private boolean i = true;

    private Object j = new Object();
    private Object k;

    int[] l;
    int[] m = new int[0];

    private final Long n = null;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,3 +2,3 @@
class Test {
-   private int a = 0;
-   private long b = 0L;
-   private short c = 0;
+   private int a;
+   private long b;
+   private short c;
    private int d = 1;
@@ -8,1 +8,1 @@
    private long e = 2L;
    private int f;
-   private char g = '\0';
+   private char g;

@@ -10,1 +10,1 @@
    private char g = '\0';

-   private boolean h = false;
+   private boolean h;
    private boolean i = true;
@@ -14,1 +14,1 @@

    private Object j = new Object();
-   private Object k = null;
+   private Object k;

@@ -16,1 +16,1 @@
    private Object k = null;

-   int[] l = null;
+   int[] l;
    int[] m = new int[0];
```
</TabItem>
</Tabs>

---

##### Example 2
`ExplicitInitializationVisitorCsharpTest#removeExplicitInitialization`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
    // C#: int? a
    Nullable<Integer> a = null;
    // C#: int? a = 0
    Nullable<Integer> a = new Nullable<>(0);
}
```

###### After
```java
class A {
    // C#: int? a
    Nullable<Integer> a;
    // C#: int? a = 0
    Nullable<Integer> a = new Nullable<>(0);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
class A {
    // C#: int? a
-   Nullable<Integer> a = null;
+   Nullable<Integer> a;
    // C#: int? a = 0
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.ExplicitInitialization"
  displayName="Explicit initialization"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ExplicitInitialization" />

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
