---
sidebar_label: "Show `@DocumentExample`s first"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Show `@DocumentExample`s first

**org.openrewrite.java.recipes.ReorderTestMethods**

_Reorders `RewriteTest` methods to place `defaults` first, followed by any `@DocumentExample`s._

## Recipe source

[GitHub: ReorderTestMethods.java](https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/ReorderTestMethods.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-rewrite/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Recipe testing best practices](/recipes/java/recipes/recipetestingbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package org.openrewrite.java.cleanup;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openrewrite.DocumentExample;
import org.openrewrite.Recipe;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class UnnecessaryParenthesesTest implements RewriteTest {

    private static void leadingHelperMethod() {
        // This method should not affect the ordering of test methods.
    }

    @Test
    void test2() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(Recipe.noop());
    }

    @BeforeEach void foo(){}

    @AfterEach void bar(){}

    @DocumentExample
    @Test
    void test1() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }

    private static void trailingHelperMethod() {
        // This method should not affect the ordering of test methods.
    }
}
```

###### After
```java
package org.openrewrite.java.cleanup;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openrewrite.DocumentExample;
import org.openrewrite.Recipe;
import org.openrewrite.test.RecipeSpec;
import org.openrewrite.test.RewriteTest;

import static org.openrewrite.java.Assertions.java;

class UnnecessaryParenthesesTest implements RewriteTest {

    private static void leadingHelperMethod() {
        // This method should not affect the ordering of test methods.
    }

    @BeforeEach void foo(){}

    @AfterEach void bar(){}

    @Override
    public void defaults(RecipeSpec spec) {
        spec.recipe(Recipe.noop());
    }

    @DocumentExample
    @Test
    void test1() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }

    @Test
    void test2() {
        rewriteRun(
          java(
            """
              BEFORE
              """,
            """
              AFTER
              """
          )
        );
    }

    private static void trailingHelperMethod() {
        // This method should not affect the ordering of test methods.
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -19,0 +19,10 @@
    }

+   @BeforeEach void foo(){}
+
+   @AfterEach void bar(){}
+
+   @Override
+   public void defaults(RecipeSpec spec) {
+       spec.recipe(Recipe.noop());
+   }
+
+   @DocumentExample
    @Test
@@ -20,1 +30,1 @@

    @Test
-   void test2() {
+   void test1() {
        rewriteRun(
@@ -33,10 +43,0 @@
    }

-   @Override
-   public void defaults(RecipeSpec spec) {
-       spec.recipe(Recipe.noop());
-   }
-
-   @BeforeEach void foo(){}
-
-   @AfterEach void bar(){}
-
-   @DocumentExample
    @Test
@@ -44,1 +44,1 @@
    @DocumentExample
    @Test
-   void test1() {
+   void test2() {
        rewriteRun(
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.recipes.ReorderTestMethods"
  displayName="Show `@DocumentExample`s first"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-rewrite"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.recipes.ReorderTestMethods" />

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
