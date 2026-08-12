---
title: "Remove dead `throws` declarations for unchecked Jackson exceptions"
sidebar_label: "Remove dead `throws` declarations for unchecked Jackson exceptions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove dead `throws` declarations for unchecked Jackson exceptions

**org.openrewrite.java.jackson.RemoveDeadJacksonThrows**

_In Jackson 3 the exception hierarchy is rerooted under `JacksonException`, which extends `RuntimeException`. Any surviving `throws` for a Jackson exception type is dead: callers are not required to handle it, and the declaration misleads readers into thinking checked-exception handling is needed. Removes `throws` for `JacksonException` and its subtypes (e.g. `DatabindException`) from both methods and constructors. Assumes the Jackson 2 to 3 package changes have already run, so all Jackson exception types live under `tools.jackson`. Does not touch `throws IOException` (still a checked exception) or non-Jackson exception types._

### Tags

* [jackson-3](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub: jackson-2-3.yml](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/jackson-2-3.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-jackson/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove elements from a method declaration `throws` clause](../../java/removemethodthrows)
  * methodPattern: `*..* *(..)`
  * exceptionTypePattern: `tools.jackson.core.JacksonException`
* [Remove elements from a method declaration `throws` clause](../../java/removemethodthrows)
  * methodPattern: `*..* <constructor>(..)`
  * exceptionTypePattern: `tools.jackson.core.JacksonException`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.RemoveDeadJacksonThrows
displayName: Remove dead `throws` declarations for unchecked Jackson exceptions
description: |
  In Jackson 3 the exception hierarchy is rerooted under `JacksonException`, which extends `RuntimeException`. Any surviving `throws` for a Jackson exception type is dead: callers are not required to handle it, and the declaration misleads readers into thinking checked-exception handling is needed. Removes `throws` for `JacksonException` and its subtypes (e.g. `DatabindException`) from both methods and constructors. Assumes the Jackson 2 to 3 package changes have already run, so all Jackson exception types live under `tools.jackson`. Does not touch `throws IOException` (still a checked exception) or non-Jackson exception types.
tags:
  - jackson-3
recipeList:
  - org.openrewrite.java.RemoveMethodThrows:
      methodPattern: *..* *(..)
      exceptionTypePattern: tools.jackson.core.JacksonException
  - org.openrewrite.java.RemoveMethodThrows:
      methodPattern: *..* <constructor>(..)
      exceptionTypePattern: tools.jackson.core.JacksonException

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrates from Jackson 2.x to Jackson 3.x](/recipes/java/jackson/upgradejackson_2_3.md)

## Examples
##### Example 1
`RemoveDeadJacksonThrowsTest#removesJackson3JacksonException`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import tools.jackson.core.JacksonException;

class JsonUtil {
    String toJson(Object obj) throws JacksonException {
        return obj.toString();
    }
}
```

###### After
```java
class JsonUtil {
    String toJson(Object obj) {
        return obj.toString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import tools.jackson.core.JacksonException;
-
class JsonUtil {
@@ -4,1 +2,1 @@

class JsonUtil {
-   String toJson(Object obj) throws JacksonException {
+   String toJson(Object obj) {
        return obj.toString();
```
</TabItem>
</Tabs>

---

##### Example 2
`RemoveDeadJacksonThrowsTest#removesJackson3JacksonException`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import tools.jackson.core.JacksonException;

class JsonUtil {
    String toJson(Object obj) throws JacksonException {
        return obj.toString();
    }
}
```

###### After
```java
class JsonUtil {
    String toJson(Object obj) {
        return obj.toString();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import tools.jackson.core.JacksonException;
-
class JsonUtil {
@@ -4,1 +2,1 @@

class JsonUtil {
-   String toJson(Object obj) throws JacksonException {
+   String toJson(Object obj) {
        return obj.toString();
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.jackson.RemoveDeadJacksonThrows"
  displayName="Remove dead `throws` declarations for unchecked Jackson exceptions"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jackson"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.RemoveDeadJacksonThrows" />

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
