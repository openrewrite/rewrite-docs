---
title: "Find non-`case` labels in `switch` statements"
sidebar_label: "Find non-`case` labels in `switch` statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find non-`case` labels in `switch` statements

**org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch**

_Marks statement labels placed directly among the `case` labels of a `switch`. Such a label is often a `case` with a missing keyword, which compiles but never matches, or a labeled loop whose `break` is easily misread as leaving the `switch`. Labels nested in a block or statement within a case are not marked. Review these before running `RemoveUnusedLabels`, which would remove unused ones._

### Tags

* [RSPEC-S1219](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1219&open=java%3AS1219)

## Recipe source

[GitHub: FindNonCaseLabelsInSwitch.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/FindNonCaseLabelsInSwitch.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    enum Day { MONDAY, TUESDAY, WEDNESDAY }

    void test(Day day) {
        switch (day) {
            case MONDAY:
            case TUESDAY:
            WEDNESDAY:
                System.out.println(day);
                break;
        }
    }
}
```

###### After
```java
class Test {
    enum Day { MONDAY, TUESDAY, WEDNESDAY }

    void test(Day day) {
        switch (day) {
            case MONDAY:
            case TUESDAY:
            /*~~(`WEDNESDAY` is a statement label, not a `case`, so `WEDNESDAY` never matches. Add the missing `case` keyword.)~~>*/WEDNESDAY:
                System.out.println(day);
                break;
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -8,1 +8,1 @@
            case MONDAY:
            case TUESDAY:
-           WEDNESDAY:
+           /*~~(`WEDNESDAY` is a statement label, not a `case`, so `WEDNESDAY` never matches. Add the missing `case` keyword.)~~>*/WEDNESDAY:
                System.out.println(day);
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch"
  displayName="Find non-`case` labels in `switch` statements"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.FindNonCaseLabelsInSwitch" />

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
