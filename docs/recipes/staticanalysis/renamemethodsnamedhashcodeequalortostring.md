---
sidebar_label: "Rename methods named `hashcode`, `equal`, or `tostring`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename methods named `hashcode`, `equal`, or `tostring`

**org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString**

_Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. These near-miss names are almost certainly spelling mistakes that silently introduce a new method instead of overriding the intended one._

### Tags

* [RSPEC-S1221](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1221&open=java%3AS1221)

## Recipe source

[GitHub: RenameMethodsNamedHashcodeEqualOrToString.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/RenameMethodsNamedHashcodeEqualOrToString.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Common static analysis issues](/recipes/staticanalysis/commonstaticanalysis.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
interface ITest {
    int HASHcoDE();

    boolean equal(Object obj);

    String tostring();
}

class Test {
    public int hashcode() {
        return 0;
    }

    public boolean equal(Object obj) {
        return false;
    }

    public String tostring() {
        return "";
    }
}
```

###### After
```java
interface ITest {
    int hashCode();

    boolean equals(Object obj);

    String toString();
}

class Test {
    public int hashCode() {
        return 0;
    }

    public boolean equals(Object obj) {
        return false;
    }

    public String toString() {
        return "";
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
interface ITest {
-   int HASHcoDE();
+   int hashCode();

@@ -4,1 +4,1 @@
    int HASHcoDE();

-   boolean equal(Object obj);
+   boolean equals(Object obj);

@@ -6,1 +6,1 @@
    boolean equal(Object obj);

-   String tostring();
+   String toString();
}
@@ -10,1 +10,1 @@

class Test {
-   public int hashcode() {
+   public int hashCode() {
        return 0;
@@ -14,1 +14,1 @@
    }

-   public boolean equal(Object obj) {
+   public boolean equals(Object obj) {
        return false;
@@ -18,1 +18,1 @@
    }

-   public String tostring() {
+   public String toString() {
        return "";
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString"
  displayName="Rename methods named `hashcode`, `equal`, or `tostring`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString" />

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
