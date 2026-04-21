---
sidebar_label: "Fix missing braces"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Fix missing braces

**org.openrewrite.staticanalysis.NeedBraces**

_Adds missing braces around code such as single-line `if`, `for`, `while`, and `do-while` block bodies. Omitting braces can lead to dangling-statement bugs when additional lines are later added to a block without realizing they fall outside the control structure._

### Tags

* [RSPEC-S121](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S121&open=java%3AS121)

## Recipe source

[GitHub: NeedBraces.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/NeedBraces.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Code cleanup](/recipes/staticanalysis/codecleanup.md)
* [Common static analysis issues](/recipes/staticanalysis/commonstaticanalysis.md)
* [Java Recipe best practices](/recipes/java/recipes/javarecipebestpractices.md)
* [Recipe testing best practices](/recipes/java/recipes/recipetestingbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    static void addToWhile() {
        while (true) ;
    }

    static void addToWhileWithBody() {
        while (true) return;
    }

    static void addToIf(int n) {
        if (n == 1) return;
        // foo
    }

    static void addToIfElse(int n) {
        if (n == 1) return;
        else return;
    }

    static void addToIfElseIfElse(int n) {
        if (n == 1) return;
        else if (n == 2) return;
        else return;
    }

    static void addToDoWhile(Object obj) {
        do obj.notify(); while (true);
    }

    static void addToIterativeFor(Object obj) {
        for (int i = 0; ; ) obj.notify();
    }

    static void addToForEach(int[] arr) {
        for (int i : arr) System.out.println(i);
    }
}
```

###### After
```java
class Test {
    static void addToWhile() {
        while (true) {
        }
    }

    static void addToWhileWithBody() {
        while (true) {
            return;
        }
    }

    static void addToIf(int n) {
        if (n == 1) {
            return;
        }
        // foo
    }

    static void addToIfElse(int n) {
        if (n == 1) {
            return;
        } else {
            return;
        }
    }

    static void addToIfElseIfElse(int n) {
        if (n == 1) {
            return;
        } else if (n == 2) {
            return;
        } else {
            return;
        }
    }

    static void addToDoWhile(Object obj) {
        do {
            obj.notify();
        } while (true);
    }

    static void addToIterativeFor(Object obj) {
        for (int i = 0; ; ) {
            obj.notify();
        }
    }

    static void addToForEach(int[] arr) {
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,2 @@
class Test {
    static void addToWhile() {
-       while (true) ;
+       while (true) {
+       }
    }
@@ -7,1 +8,3 @@

    static void addToWhileWithBody() {
-       while (true) return;
+       while (true) {
+           return;
+       }
    }
@@ -11,1 +14,3 @@

    static void addToIf(int n) {
-       if (n == 1) return;
+       if (n == 1) {
+           return;
+       }
        // foo
@@ -16,2 +21,5 @@

    static void addToIfElse(int n) {
-       if (n == 1) return;
-       else return;
+       if (n == 1) {
+           return;
+       } else {
+           return;
+       }
    }
@@ -21,3 +29,7 @@

    static void addToIfElseIfElse(int n) {
-       if (n == 1) return;
-       else if (n == 2) return;
-       else return;
+       if (n == 1) {
+           return;
+       } else if (n == 2) {
+           return;
+       } else {
+           return;
+       }
    }
@@ -27,1 +39,3 @@

    static void addToDoWhile(Object obj) {
-       do obj.notify(); while (true);
+       do {
+           obj.notify();
+       } while (true);
    }
@@ -31,1 +45,3 @@

    static void addToIterativeFor(Object obj) {
-       for (int i = 0; ; ) obj.notify();
+       for (int i = 0; ; ) {
+           obj.notify();
+       }
    }
@@ -35,1 +51,3 @@

    static void addToForEach(int[] arr) {
-       for (int i : arr) System.out.println(i);
+       for (int i : arr) {
+           System.out.println(i);
+       }
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.NeedBraces"
  displayName="Fix missing braces"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.NeedBraces" />

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
