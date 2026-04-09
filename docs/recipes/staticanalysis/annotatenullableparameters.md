---
sidebar_label: "Annotate null-checked method parameters with `@Nullable`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Annotate null-checked method parameters with `@Nullable`

**org.openrewrite.staticanalysis.AnnotateNullableParameters**

_Add `@Nullable` to parameters of public methods that are explicitly checked for `null`. By default `org.jspecify.annotations.Nullable` is used, but through the `nullableAnnotationClass` option a custom annotation can be provided. Both `@Target(TYPE_USE)` and declaration annotations (e.g. `javax.annotation.CheckForNull`) are supported. Parameters that already carry a known nullable annotation are skipped to avoid duplication. This recipe scans for methods that do not already have parameters annotated with a nullable annotation and checks their usages for potential null checks. Additional null-checking methods can be specified via the `additionalNullCheckingMethods` option._

## Recipe source

[GitHub: AnnotateNullableParameters.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/AnnotateNullableParameters.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | nullableAnnotationClass | *Optional*. The fully qualified name of the @Nullable annotation to add. Both `@Target(TYPE_USE)` and declaration annotations (e.g. `javax.annotation.CheckForNull`) are supported. Defaults to `org.jspecify.annotations.Nullable`. | `org.jspecify.annotations.Nullable` |
| `List` | additionalNullCheckingMethods | *Optional*. A list of method patterns (in OpenRewrite MethodMatcher format) that should be considered as null-checking methods. These will be added to the built-in list of known null-checking methods. Use `..` for any parameters, e.g., `com.mycompany.utils.StringUtil isEmpty(..)` or `com.mycompany.utils.CollectionUtil isNullOrEmpty(java.util.Collection)` | `com.mycompany.utils.StringUtil isEmpty(..), com.mycompany.utils.CollectionUtil isNullOrEmpty(..)` |


## Used by

This recipe is used as part of the following composite recipes:

* [JSpecify best practices](/recipes/java/jspecify/jspecifybestpractices.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|nullableAnnotationClass|`null`|
|additionalNullCheckingMethods|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
public class PersonBuilder {
    private String name = "Unknown";

    public PersonBuilder setName(String name) {
        if (name == null) {
            return this;
        }
        this.name = name.substring(0, 1).toUpperCase() + name.substring(1);
        return this;
    }
}
```

###### After
```java
import org.jspecify.annotations.Nullable;

public class PersonBuilder {
    private String name = "Unknown";

    public PersonBuilder setName(@Nullable String name) {
        if (name == null) {
            return this;
        }
        this.name = name.substring(0, 1).toUpperCase() + name.substring(1);
        return this;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,0 +1,2 @@
+import org.jspecify.annotations.Nullable;
+
public class PersonBuilder {
@@ -4,1 +6,1 @@
    private String name = "Unknown";

-   public PersonBuilder setName(String name) {
+   public PersonBuilder setName(@Nullable String name) {
        if (name == null) {
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.AnnotateNullableParameters"
  displayName="Annotate null-checked method parameters with `@Nullable`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.AnnotateNullableParameters" />

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
