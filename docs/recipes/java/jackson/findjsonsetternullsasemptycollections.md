---
title: "Find `@JsonSetter(nulls = Nulls.AS_EMPTY)` on empty collection fields"
sidebar_label: "Find `@JsonSetter(nulls = Nulls.AS_EMPTY)` on empty collection fields"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find `@JsonSetter(nulls = Nulls.AS_EMPTY)` on empty collection fields

**org.openrewrite.java.jackson.FindJsonSetterNullsAsEmptyCollections**

_Find `Map` and `Collection` fields that carry `@JsonSetter(nulls = Nulls.AS_EMPTY)`, are initialized with an empty collection, and are no longer hidden by `@JsonIgnore` on the field or its getter, or by a class level `@JsonIgnoreProperties`. In rewrite-jackson 1.17.0 through 1.28.0 the Jackson 2 to 3 migration replaced `@JsonIgnore` with `@JsonSetter(nulls = Nulls.AS_EMPTY)` on exactly these fields, which starts serializing properties that were deliberately hidden wherever the field is otherwise visible, such as through a getter. Run this recipe to audit repositories migrated with those versions; every match that should stay out of the JSON output needs `@JsonIgnore` restored, which the `addJsonIgnore` option does for you._

### Tags

* [jackson-3](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub: FindJsonSetterNullsAsEmptyCollections.java](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/java/org/openrewrite/java/jackson/FindJsonSetterNullsAsEmptyCollections.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-jackson/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Boolean` | addJsonIgnore | *Optional*. Add `@JsonIgnore` back to every match instead of only marking it, removing the `@JsonSetter(nulls = Nulls.AS_EMPTY)` that replaced it where `nulls` is its only argument. Only enable this once you have confirmed that none of the matches should be serialized. Defaults to `false`. |  |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|addJsonIgnore|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import java.util.LinkedHashMap;
import java.util.Map;

class Model {
    @JsonSetter(nulls = Nulls.AS_EMPTY)
    private Map<String, Object> additionalProperties = new LinkedHashMap<>();

    public Map<String, Object> getAdditionalProperties() {
        return additionalProperties;
    }
}
```

###### After
```java
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import java.util.LinkedHashMap;
import java.util.Map;

class Model {
    /*~~(Verify this field should be serialized; `@JsonIgnore` may have been removed here)~~>*/@JsonSetter(nulls = Nulls.AS_EMPTY)
    private Map<String, Object> additionalProperties = new LinkedHashMap<>();

    public Map<String, Object> getAdditionalProperties() {
        return additionalProperties;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@

class Model {
-   @JsonSetter(nulls = Nulls.AS_EMPTY)
+   /*~~(Verify this field should be serialized; `@JsonIgnore` may have been removed here)~~>*/@JsonSetter(nulls = Nulls.AS_EMPTY)
    private Map<String, Object> additionalProperties = new LinkedHashMap<>();
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.jackson.FindJsonSetterNullsAsEmptyCollections"
  displayName="Find `@JsonSetter(nulls = Nulls.AS_EMPTY)` on empty collection fields"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jackson"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.FindJsonSetterNullsAsEmptyCollections" />

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
