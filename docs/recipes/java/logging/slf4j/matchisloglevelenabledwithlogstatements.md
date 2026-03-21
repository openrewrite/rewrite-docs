---
sidebar_label: "Match `if (is*Enabled())` with logging statements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Match `if (is*Enabled())` with logging statements

**org.openrewrite.java.logging.slf4j.MatchIsLogLevelEnabledWithLogStatements**

_Change any `if (is*Enabled())` statements that do not match the maximum log level used in the `then` part to use the matching `is*Enabled()` method for that log level. This ensures that the logging condition is consistent with the actual logging statements._

## Recipe source

[GitHub: MatchIsLogLevelEnabledWithLogStatements.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/MatchIsLogLevelEnabledWithLogStatements.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [SLF4J best practices](/recipes/java/logging/slf4j/slf4jbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class Test {
    void test(org.slf4j.Logger logger) {
        if (logger.isDebugEnabled()) {
            logger.info("message");
        }
    }
}
```

###### After
```java
class Test {
    void test(org.slf4j.Logger logger) {
        if (logger.isInfoEnabled()) {
            logger.info("message");
        }
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,1 +3,1 @@
class Test {
    void test(org.slf4j.Logger logger) {
-       if (logger.isDebugEnabled()) {
+       if (logger.isInfoEnabled()) {
            logger.info("message");
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.MatchIsLogLevelEnabledWithLogStatements"
  displayName="Match `if (is*Enabled())` with logging statements"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.MatchIsLogLevelEnabledWithLogStatements" />

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
