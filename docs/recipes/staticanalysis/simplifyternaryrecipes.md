---
sidebar_label: "Simplify ternary expressions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Simplify ternary expressions

**org.openrewrite.staticanalysis.SimplifyTernaryRecipes**

_Simplifies various types of ternary expressions to improve code readability. Ternaries that simply select between `true` and `false` are redundant wrappers around the condition itself and add unnecessary complexity._

### Tags

* [RSPEC-S1125](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1125&open=java%3AS1125)

## Recipe source

[GitHub: SimplifyTernary.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/SimplifyTernary.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `booleanExpression ? true : false` with `booleanExpression`](../staticanalysis/simplifyternaryrecipes$simplifyternarytruefalserecipe)
* [Replace `booleanExpression ? false : true` with `!booleanExpression`](../staticanalysis/simplifyternaryrecipes$simplifyternaryfalsetruerecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.SimplifyTernaryRecipes
displayName: Simplify ternary expressions
description: |
  Simplifies various types of ternary expressions to improve code readability. Ternaries that simply select between `true` and `false` are redundant wrappers around the condition itself and add unnecessary complexity.
tags:
  - RSPEC-S1125
recipeList:
  - org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryTrueFalseRecipe
  - org.openrewrite.staticanalysis.SimplifyTernaryRecipes$SimplifyTernaryFalseTrueRecipe

```
</TabItem>
</Tabs>
## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    boolean trueCondition1 = true ? true : false;
    boolean trueCondition2 = false ? false : true;
    boolean trueCondition3 = booleanExpression() ? true : false;
    boolean trueCondition4 = trueCondition1 && trueCondition2 ? true : false;
    boolean trueCondition5 = !true ? false : true;
    boolean trueCondition6 = !false ? true : false;

    boolean falseCondition1 = true ? false : true;
    boolean falseCondition2 = !false ? false : true;
    boolean falseCondition3 = booleanExpression() ? false : true;
    boolean falseCondition4 = trueCondition1 && trueCondition2 ? false : true;
    boolean falseCondition5 = !false ? false : true;
    boolean falseCondition6 = !true ? true : false;

    boolean binary1 = booleanExpression() && booleanExpression() ? true : false;
    boolean binary2 = booleanExpression() && booleanExpression() ? false : true;
    boolean binary3 = booleanExpression() || booleanExpression() ? true : false;
    boolean binary4 = booleanExpression() || booleanExpression() ? false : true;

    boolean booleanExpression() {
      return true;
    }
}
```

###### After
```java
class Test {
    boolean trueCondition1 = true;
    boolean trueCondition2 = true;
    boolean trueCondition3 = booleanExpression();
    boolean trueCondition4 = trueCondition1 && trueCondition2;
    boolean trueCondition5 = true;
    boolean trueCondition6 = true;

    boolean falseCondition1 = false;
    boolean falseCondition2 = false;
    boolean falseCondition3 = !booleanExpression();
    boolean falseCondition4 = !(trueCondition1 && trueCondition2);
    boolean falseCondition5 = false;
    boolean falseCondition6 = false;

    boolean binary1 = booleanExpression() && booleanExpression();
    boolean binary2 = !(booleanExpression() && booleanExpression());
    boolean binary3 = booleanExpression() || booleanExpression();
    boolean binary4 = !(booleanExpression() || booleanExpression());

    boolean booleanExpression() {
      return true;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,6 +2,6 @@
class Test {
-   boolean trueCondition1 = true ? true : false;
-   boolean trueCondition2 = false ? false : true;
-   boolean trueCondition3 = booleanExpression() ? true : false;
-   boolean trueCondition4 = trueCondition1 && trueCondition2 ? true : false;
-   boolean trueCondition5 = !true ? false : true;
-   boolean trueCondition6 = !false ? true : false;
+   boolean trueCondition1 = true;
+   boolean trueCondition2 = true;
+   boolean trueCondition3 = booleanExpression();
+   boolean trueCondition4 = trueCondition1 && trueCondition2;
+   boolean trueCondition5 = true;
+   boolean trueCondition6 = true;

@@ -9,6 +9,6 @@
    boolean trueCondition6 = !false ? true : false;

-   boolean falseCondition1 = true ? false : true;
-   boolean falseCondition2 = !false ? false : true;
-   boolean falseCondition3 = booleanExpression() ? false : true;
-   boolean falseCondition4 = trueCondition1 && trueCondition2 ? false : true;
-   boolean falseCondition5 = !false ? false : true;
-   boolean falseCondition6 = !true ? true : false;
+   boolean falseCondition1 = false;
+   boolean falseCondition2 = false;
+   boolean falseCondition3 = !booleanExpression();
+   boolean falseCondition4 = !(trueCondition1 && trueCondition2);
+   boolean falseCondition5 = false;
+   boolean falseCondition6 = false;

@@ -16,4 +16,4 @@
    boolean falseCondition6 = !true ? true : false;

-   boolean binary1 = booleanExpression() && booleanExpression() ? true : false;
-   boolean binary2 = booleanExpression() && booleanExpression() ? false : true;
-   boolean binary3 = booleanExpression() || booleanExpression() ? true : false;
-   boolean binary4 = booleanExpression() || booleanExpression() ? false : true;
+   boolean binary1 = booleanExpression() && booleanExpression();
+   boolean binary2 = !(booleanExpression() && booleanExpression());
+   boolean binary3 = booleanExpression() || booleanExpression();
+   boolean binary4 = !(booleanExpression() || booleanExpression());

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.SimplifyTernaryRecipes"
  displayName="Simplify ternary expressions"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.SimplifyTernaryRecipes" />

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
