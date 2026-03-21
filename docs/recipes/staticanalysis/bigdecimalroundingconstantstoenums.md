---
sidebar_label: "`BigDecimal` rounding constants to `RoundingMode` enums"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `BigDecimal` rounding constants to `RoundingMode` enums

**org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums**

_Convert `BigDecimal` rounding constants to the equivalent `RoundingMode` enum._

### Tags

* [RSPEC-S2111](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S2111&open=java%3AS2111)

## Recipe source

[GitHub: BigDecimalRoundingConstantsToEnums.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/BigDecimalRoundingConstantsToEnums.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Common static analysis issues](/recipes/staticanalysis/commonstaticanalysis.md)
* [Migrate to Java 11](/recipes/java/migrate/java8tojava11.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.math.BigDecimal;

class A {
    void divide() {
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
        BigDecimal bd3 = bd.divide(bd2, BigDecimal.ROUND_DOWN);
        bd.divide(bd2, 1);
        bd.divide(bd2, 1, BigDecimal.ROUND_CEILING);
        bd.divide(bd2, 1, 1);
        bd.setScale(2, 1);
    }
}
```

###### After
```java
import java.math.BigDecimal;
import java.math.RoundingMode;

class A {
    void divide() {
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
        BigDecimal bd3 = bd.divide(bd2, RoundingMode.DOWN);
        bd.divide(bd2, RoundingMode.DOWN);
        bd.divide(bd2, 1, RoundingMode.CEILING);
        bd.divide(bd2, 1, RoundingMode.DOWN);
        bd.setScale(2, RoundingMode.DOWN);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,0 +2,1 @@
import java.math.BigDecimal;
+import java.math.RoundingMode;

@@ -7,5 +8,5 @@
        BigDecimal bd = BigDecimal.valueOf(10);
        BigDecimal bd2 = BigDecimal.valueOf(2);
-       BigDecimal bd3 = bd.divide(bd2, BigDecimal.ROUND_DOWN);
-       bd.divide(bd2, 1);
-       bd.divide(bd2, 1, BigDecimal.ROUND_CEILING);
-       bd.divide(bd2, 1, 1);
-       bd.setScale(2, 1);
+       BigDecimal bd3 = bd.divide(bd2, RoundingMode.DOWN);
+       bd.divide(bd2, RoundingMode.DOWN);
+       bd.divide(bd2, 1, RoundingMode.CEILING);
+       bd.divide(bd2, 1, RoundingMode.DOWN);
+       bd.setScale(2, RoundingMode.DOWN);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums"
  displayName="`BigDecimal` rounding constants to `RoundingMode` enums"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.BigDecimalRoundingConstantsToEnums" />

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
