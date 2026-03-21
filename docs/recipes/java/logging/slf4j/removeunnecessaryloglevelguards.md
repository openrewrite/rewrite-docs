---
sidebar_label: "Remove unnecessary log level guards"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unnecessary log level guards

**org.openrewrite.java.logging.slf4j.RemoveUnnecessaryLogLevelGuards**

_Remove `if` statement guards around SLF4J logging calls when parameterized logging makes them unnecessary._

### Tags

* [slf4j](/reference/recipes-by-tag#slf4j)
* [logging](/reference/recipes-by-tag#logging)

## Recipe source

[GitHub: RemoveUnnecessaryLogLevelGuards.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/RemoveUnnecessaryLogLevelGuards.java),
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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;
import org.slf4j.MarkerFactory;

class Test {
    private static final Logger LOGGER = LoggerFactory.getLogger(Test.class);
    private static final Marker MARKER = MarkerFactory.getMarker("TEST");

    void test(String name, int count, Exception ex) {
        // all log levels
        if (LOGGER.isTraceEnabled()) {
            LOGGER.trace("Trace: {} count={}", name, count);
        }
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Debug: {} count={}", name, count);
        }
        if (LOGGER.isInfoEnabled()) {
            LOGGER.info("Info: {} count={}", name, count);
        }
        if (LOGGER.isWarnEnabled()) {
            LOGGER.warn("Warning: {} count={}", name, count);
        }
        if (LOGGER.isErrorEnabled()) {
            LOGGER.error("Error: {} count={}", name, count);
        }

        // multiple statements in guard
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("First message: {}", name);
            LOGGER.debug("Second message: {}", count);
            LOGGER.debug("Third message");
        }

        // guard with marker
        if (LOGGER.isDebugEnabled(MARKER)) {
            LOGGER.debug(MARKER, "Message: {}", name);
        }

        // exception.getMessage() allowed
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Error: {}", ex.getMessage());
        }
        if (LOGGER.isErrorEnabled()) {
            LOGGER.error("Failed: {}", ex.getMessage(), ex);
        }

        // single statement without braces
        if (LOGGER.isDebugEnabled())
            LOGGER.debug("No braces: {}", name);

        // mixed log levels in guard
        if (LOGGER.isDebugEnabled()) {
            LOGGER.debug("Debug: {}", name);
            LOGGER.info("Also info: {}", name);
        }
    }
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;
import org.slf4j.MarkerFactory;

class Test {
    private static final Logger LOGGER = LoggerFactory.getLogger(Test.class);
    private static final Marker MARKER = MarkerFactory.getMarker("TEST");

    void test(String name, int count, Exception ex) {
        // all log levels
        LOGGER.trace("Trace: {} count={}", name, count);
        LOGGER.debug("Debug: {} count={}", name, count);
        LOGGER.info("Info: {} count={}", name, count);
        LOGGER.warn("Warning: {} count={}", name, count);
        LOGGER.error("Error: {} count={}", name, count);

        // multiple statements in guard
        LOGGER.debug("First message: {}", name);
        LOGGER.debug("Second message: {}", count);
        LOGGER.debug("Third message");

        // guard with marker
        LOGGER.debug(MARKER, "Message: {}", name);

        // exception.getMessage() allowed
        LOGGER.debug("Error: {}", ex.getMessage());
        LOGGER.error("Failed: {}", ex.getMessage(), ex);

        // single statement without braces
        LOGGER.debug("No braces: {}", name);

        // mixed log levels in guard
        LOGGER.debug("Debug: {}", name);
        LOGGER.info("Also info: {}", name);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,15 +12,5 @@
    void test(String name, int count, Exception ex) {
        // all log levels
-       if (LOGGER.isTraceEnabled()) {
-           LOGGER.trace("Trace: {} count={}", name, count);
-       }
-       if (LOGGER.isDebugEnabled()) {
-           LOGGER.debug("Debug: {} count={}", name, count);
-       }
-       if (LOGGER.isInfoEnabled()) {
-           LOGGER.info("Info: {} count={}", name, count);
-       }
-       if (LOGGER.isWarnEnabled()) {
-           LOGGER.warn("Warning: {} count={}", name, count);
-       }
-       if (LOGGER.isErrorEnabled()) {
-           LOGGER.error("Error: {} count={}", name, count);
-       }
+       LOGGER.trace("Trace: {} count={}", name, count);
+       LOGGER.debug("Debug: {} count={}", name, count);
+       LOGGER.info("Info: {} count={}", name, count);
+       LOGGER.warn("Warning: {} count={}", name, count);
+       LOGGER.error("Error: {} count={}", name, count);

@@ -29,5 +19,3 @@

        // multiple statements in guard
-       if (LOGGER.isDebugEnabled()) {
-           LOGGER.debug("First message: {}", name);
-           LOGGER.debug("Second message: {}", count);
-           LOGGER.debug("Third message");
-       }
+       LOGGER.debug("First message: {}", name);
+       LOGGER.debug("Second message: {}", count);
+       LOGGER.debug("Third message");

@@ -36,3 +24,1 @@

        // guard with marker
-       if (LOGGER.isDebugEnabled(MARKER)) {
-           LOGGER.debug(MARKER, "Message: {}", name);
-       }
+       LOGGER.debug(MARKER, "Message: {}", name);

@@ -41,6 +27,2 @@

        // exception.getMessage() allowed
-       if (LOGGER.isDebugEnabled()) {
-           LOGGER.debug("Error: {}", ex.getMessage());
-       }
-       if (LOGGER.isErrorEnabled()) {
-           LOGGER.error("Failed: {}", ex.getMessage(), ex);
-       }
+       LOGGER.debug("Error: {}", ex.getMessage());
+       LOGGER.error("Failed: {}", ex.getMessage(), ex);

@@ -49,2 +31,1 @@

        // single statement without braces
-       if (LOGGER.isDebugEnabled())
-           LOGGER.debug("No braces: {}", name);
+       LOGGER.debug("No braces: {}", name);

@@ -53,4 +34,2 @@

        // mixed log levels in guard
-       if (LOGGER.isDebugEnabled()) {
-           LOGGER.debug("Debug: {}", name);
-           LOGGER.info("Also info: {}", name);
-       }
+       LOGGER.debug("Debug: {}", name);
+       LOGGER.info("Also info: {}", name);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.RemoveUnnecessaryLogLevelGuards"
  displayName="Remove unnecessary log level guards"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.RemoveUnnecessaryLogLevelGuards" />

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
