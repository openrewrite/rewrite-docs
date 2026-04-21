---
sidebar_label: "Replace duplicate `String` literals"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace duplicate `String` literals

**org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals**

_Replaces `String` literals with a length of 5 or greater repeated a minimum of 3 times. Qualified `String` literals include final Strings, method invocations, and new class invocations. Adds a new `private static final String` or uses an existing equivalent class field. A new variable name will be generated based on the literal value if an existing field does not exist. The generated name will append a numeric value to the variable name if a name already exists in the compilation unit. Centralizing repeated string values into constants makes refactoring safer and reduces the risk of inconsistent updates._

### Tags

* [RSPEC-S1192](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1192&open=java%3AS1192)
* [RSPEC-S1889](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1889&open=java%3AS1889)

## Recipe source

[GitHub: ReplaceDuplicateStringLiterals.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/ReplaceDuplicateStringLiterals.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Boolean` | includeTestSources | *Optional*. Changes only apply to main by default. `includeTestSources` will apply the recipe to `test` source files. |  |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|includeTestSources|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package org.foo;
class A {
    final String val1 = "value";
    final String val2 = "value";
    final String val3 = "value";
}
```

###### After
```java
package org.foo;
class A {
    private static final String VALUE = "value";
    final String val1 = VALUE;
    final String val2 = VALUE;
    final String val3 = VALUE;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,3 +3,4 @@
package org.foo;
class A {
-   final String val1 = "value";
-   final String val2 = "value";
-   final String val3 = "value";
+   private static final String VALUE = "value";
+   final String val1 = VALUE;
+   final String val2 = VALUE;
+   final String val3 = VALUE;
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals"
  displayName="Replace duplicate `String` literals"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.ReplaceDuplicateStringLiterals" />

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
