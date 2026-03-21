---
sidebar_label: "`String.format()` in logging statements should use SLF4J parameterized logging"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `String.format()` in logging statements should use SLF4J parameterized logging

**org.openrewrite.java.logging.slf4j.StringFormatToParameterizedLogging**

_Replace `String.format()` calls in SLF4J logging statements with parameterized placeholders for improved performance._

### Tags

* [slf4j](/reference/recipes-by-tag#slf4j)
* [logging](/reference/recipes-by-tag#logging)

## Recipe source

[GitHub: StringFormatToParameterizedLogging.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/slf4j/StringFormatToParameterizedLogging.java),
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

    void method(String username, int count, double value, String message) {
        Exception exception = new Exception();

        LOGGER.trace(String.format("Trace %s", username));
        LOGGER.debug(String.format("Debug %s", username));
        LOGGER.info(String.format("User %s logged in", username));
        LOGGER.warn(String.format("Warning %s", username));
        LOGGER.error(String.format("Error %s", username));

        LOGGER.info(String.format("Count: %d", count));
        LOGGER.info(String.format("Value: %f", value));
        LOGGER.info(String.format("User %s has %d items", username, count));
        LOGGER.info(String.format("User %s has %d items worth $%f", username, count, value));

        LOGGER.info(String.format("String: %s", username));
        LOGGER.info(String.format("Decimal: %d", count));
        LOGGER.info(String.format("Hex: %x", count));
        LOGGER.info(String.format("Octal: %o", count));
        LOGGER.info(String.format("Float: %f", value));
        LOGGER.info(String.format("Boolean: %b", true));
        LOGGER.info(String.format("Char: %c", 'x'));

        LOGGER.info(MARKER, String.format("Message %s", message));
        LOGGER.error(String.format("Failed: %s", message), exception);
        LOGGER.error(MARKER, String.format("Failed: %s", message), exception);

        LOGGER.info(String.format("User %s"
                + " logged in", username));
        LOGGER.info(String.format("isHTML"
                + " '%s', body: %s", username, message));
        LOGGER.info(String.format("part1"
                + " part2"
                + " %s", username));
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

    void method(String username, int count, double value, String message) {
        Exception exception = new Exception();

        LOGGER.trace("Trace {}", username);
        LOGGER.debug("Debug {}", username);
        LOGGER.info("User {} logged in", username);
        LOGGER.warn("Warning {}", username);
        LOGGER.error("Error {}", username);

        LOGGER.info("Count: {}", count);
        LOGGER.info("Value: {}", value);
        LOGGER.info("User {} has {} items", username, count);
        LOGGER.info("User {} has {} items worth ${}", username, count, value);

        LOGGER.info("String: {}", username);
        LOGGER.info("Decimal: {}", count);
        LOGGER.info("Hex: {}", count);
        LOGGER.info("Octal: {}", count);
        LOGGER.info("Float: {}", value);
        LOGGER.info("Boolean: {}", true);
        LOGGER.info("Char: {}", 'x');

        LOGGER.info(MARKER, "Message {}", message);
        LOGGER.error("Failed: {}", message, exception);
        LOGGER.error(MARKER, "Failed: {}", message, exception);

        LOGGER.info("User {} logged in", username);
        LOGGER.info("isHTML '{}', body: {}", username, message);
        LOGGER.info("part1 part2 {}", username);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -13,5 +13,5 @@
        Exception exception = new Exception();

-       LOGGER.trace(String.format("Trace %s", username));
-       LOGGER.debug(String.format("Debug %s", username));
-       LOGGER.info(String.format("User %s logged in", username));
-       LOGGER.warn(String.format("Warning %s", username));
-       LOGGER.error(String.format("Error %s", username));
+       LOGGER.trace("Trace {}", username);
+       LOGGER.debug("Debug {}", username);
+       LOGGER.info("User {} logged in", username);
+       LOGGER.warn("Warning {}", username);
+       LOGGER.error("Error {}", username);

@@ -19,4 +19,4 @@
        LOGGER.error(String.format("Error %s", username));

-       LOGGER.info(String.format("Count: %d", count));
-       LOGGER.info(String.format("Value: %f", value));
-       LOGGER.info(String.format("User %s has %d items", username, count));
-       LOGGER.info(String.format("User %s has %d items worth $%f", username, count, value));
+       LOGGER.info("Count: {}", count);
+       LOGGER.info("Value: {}", value);
+       LOGGER.info("User {} has {} items", username, count);
+       LOGGER.info("User {} has {} items worth ${}", username, count, value);

@@ -24,7 +24,7 @@
        LOGGER.info(String.format("User %s has %d items worth $%f", username, count, value));

-       LOGGER.info(String.format("String: %s", username));
-       LOGGER.info(String.format("Decimal: %d", count));
-       LOGGER.info(String.format("Hex: %x", count));
-       LOGGER.info(String.format("Octal: %o", count));
-       LOGGER.info(String.format("Float: %f", value));
-       LOGGER.info(String.format("Boolean: %b", true));
-       LOGGER.info(String.format("Char: %c", 'x'));
+       LOGGER.info("String: {}", username);
+       LOGGER.info("Decimal: {}", count);
+       LOGGER.info("Hex: {}", count);
+       LOGGER.info("Octal: {}", count);
+       LOGGER.info("Float: {}", value);
+       LOGGER.info("Boolean: {}", true);
+       LOGGER.info("Char: {}", 'x');

@@ -32,3 +32,3 @@
        LOGGER.info(String.format("Char: %c", 'x'));

-       LOGGER.info(MARKER, String.format("Message %s", message));
-       LOGGER.error(String.format("Failed: %s", message), exception);
-       LOGGER.error(MARKER, String.format("Failed: %s", message), exception);
+       LOGGER.info(MARKER, "Message {}", message);
+       LOGGER.error("Failed: {}", message, exception);
+       LOGGER.error(MARKER, "Failed: {}", message, exception);

@@ -36,7 +36,3 @@
        LOGGER.error(MARKER, String.format("Failed: %s", message), exception);

-       LOGGER.info(String.format("User %s"
-               + " logged in", username));
-       LOGGER.info(String.format("isHTML"
-               + " '%s', body: %s", username, message));
-       LOGGER.info(String.format("part1"
-               + " part2"
-               + " %s", username));
+       LOGGER.info("User {} logged in", username);
+       LOGGER.info("isHTML '{}', body: {}", username, message);
+       LOGGER.info("part1 part2 {}", username);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.StringFormatToParameterizedLogging"
  displayName="`String.format()` in logging statements should use SLF4J parameterized logging"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.StringFormatToParameterizedLogging" />

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
