---
sidebar_label: "SLF4J best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# SLF4J best practices

**org.openrewrite.java.logging.slf4j.Slf4jBestPractices**

_Applies best practices to logging with SLF4J._

### Tags

* [slf4j](/reference/recipes-by-tag#slf4j)
* [logging](/reference/recipes-by-tag#logging)

## Recipe source

[GitHub: slf4j.yml](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/slf4j.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Unpack Logger method `new Object[] \{...\}` into varargs](../../../java/logging/argumentarraytovarargs)
* [Loggers should be named for their enclosing classes](../../../java/logging/slf4j/loggersnamedforenclosingclass)
* [SLF4J logging statements should begin with constants](../../../java/logging/slf4j/slf4jlogshouldbeconstant)
* [`String.format()` in logging statements should use SLF4J parameterized logging](../../../java/logging/slf4j/stringformattoparameterizedlogging)
* [`MessageFormat.format()` in logging statements should use SLF4J parameterized logging](../../../java/logging/slf4j/messageformattoparameterizedlogging)
* [Parameterize SLF4J's logging statements](../../../java/logging/slf4j/parameterizedlogging)
* [Enhances logging of exceptions by including the full stack trace in addition to the exception message](../../../java/logging/slf4j/completeexceptionlogging)
* [Catch block log level](../../../java/logging/catchblockloglevel)
* [Change logger fields to `private`](../../../java/logging/changeloggerstoprivate)
* [Match `if (is*Enabled())` with logging statements](../../../java/logging/slf4j/matchisloglevelenabledwithlogstatements)
* [Optimize log statements](../../../java/logging/slf4j/wrapexpensivelogstatementsinconditionals)
* [Strip `toString()` from arguments](../../../java/logging/slf4j/striptostringfromarguments)
* [Remove unnecessary log level guards](../../../java/logging/slf4j/removeunnecessaryloglevelguards)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.slf4j.Slf4jBestPractices
displayName: SLF4J best practices
description: |
  Applies best practices to logging with SLF4J.
tags:
  - slf4j
  - logging
recipeList:
  - org.openrewrite.java.logging.ArgumentArrayToVarargs
  - org.openrewrite.java.logging.slf4j.LoggersNamedForEnclosingClass
  - org.openrewrite.java.logging.slf4j.Slf4jLogShouldBeConstant
  - org.openrewrite.java.logging.slf4j.StringFormatToParameterizedLogging
  - org.openrewrite.java.logging.slf4j.MessageFormatToParameterizedLogging
  - org.openrewrite.java.logging.slf4j.ParameterizedLogging
  - org.openrewrite.java.logging.slf4j.CompleteExceptionLogging
  - org.openrewrite.java.logging.CatchBlockLogLevel
  - org.openrewrite.java.logging.ChangeLoggersToPrivate
  - org.openrewrite.java.logging.slf4j.MatchIsLogLevelEnabledWithLogStatements
  - org.openrewrite.java.logging.slf4j.WrapExpensiveLogStatementsInConditionals
  - org.openrewrite.java.logging.slf4j.StripToStringFromArguments
  - org.openrewrite.java.logging.slf4j.RemoveUnnecessaryLogLevelGuards

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`Slf4jBestPracticesTest#applyBestPractices`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(String.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
        logger.warn(String.valueOf(e));
        logger.error(e.getMessage());
        logger.error(e.getLocalizedMessage());
    }
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
        logger.warn("Exception", e);
        logger.error("", e);
        logger.error("", e);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
import org.slf4j.LoggerFactory;
class Test {
-   Logger logger = LoggerFactory.getLogger(String.class);
+   private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
@@ -8,1 +8,1 @@
        Object obj1 = new Object();
        Object obj2 = new Object();
-       logger.info("Hello " + obj1 + ", " + obj2);
+       logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
@@ -10,3 +10,3 @@
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
-       logger.warn(String.valueOf(e));
-       logger.error(e.getMessage());
-       logger.error(e.getLocalizedMessage());
+       logger.warn("Exception", e);
+       logger.error("", e);
+       logger.error("", e);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`Slf4jBestPracticesTest#applyBestPractices`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    Logger logger = LoggerFactory.getLogger(String.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
        logger.warn(String.valueOf(e));
        logger.error(e.getMessage());
        logger.error(e.getLocalizedMessage());
    }
}
```

###### After
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
class Test {
    private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
        Object obj1 = new Object();
        Object obj2 = new Object();
        logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
        logger.warn("Exception", e);
        logger.error("", e);
        logger.error("", e);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
import org.slf4j.LoggerFactory;
class Test {
-   Logger logger = LoggerFactory.getLogger(String.class);
+   private Logger logger = LoggerFactory.getLogger(Test.class);
    void test() {
@@ -8,1 +8,1 @@
        Object obj1 = new Object();
        Object obj2 = new Object();
-       logger.info("Hello " + obj1 + ", " + obj2);
+       logger.info("Hello {}, {}", obj1, obj2);
        Exception e = new Exception();
@@ -10,3 +10,3 @@
        logger.info("Hello " + obj1 + ", " + obj2);
        Exception e = new Exception();
-       logger.warn(String.valueOf(e));
-       logger.error(e.getMessage());
-       logger.error(e.getLocalizedMessage());
+       logger.warn("Exception", e);
+       logger.error("", e);
+       logger.error("", e);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.slf4j.Slf4jBestPractices"
  displayName="SLF4J best practices"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.slf4j.Slf4jBestPractices" />

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
