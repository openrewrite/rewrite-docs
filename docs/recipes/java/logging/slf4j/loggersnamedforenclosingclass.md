---
sidebar_label: "Loggers should be named for their enclosing classes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Loggers should be named for their enclosing classes

**org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass**

_Ensure `LoggerFactory#getLogger(Class)` is called with the enclosing class as argument._

### Tags

* [RSPEC-S3416](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S3416&open=java%3AS3416)
* [slf4j](/reference/recipes-by-tag#slf4j)
* [logging](/reference/recipes-by-tag#logging)

## Recipe source

[GitHub: LoggersNamedForEnclosingClass.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/LoggersNamedForEnclosingClass.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Log4j to SLF4J](/recipes/java/logging/slf4j/log4jtoslf4j.md)
* [SLF4J best practices](/recipes/java/logging/slf4j/slf4jbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class WrongClass {}
class A {
    Logger log = LoggerFactory.getLogger(WrongClass.class);
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class WrongClass {}
class A {
    Logger log = LoggerFactory.getLogger(A.class);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
class WrongClass {}
class A {
-   Logger log = LoggerFactory.getLogger(WrongClass.class);
+   Logger log = LoggerFactory.getLogger(A.class);
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass"
  displayName="Loggers should be named for their enclosing classes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass" />

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
