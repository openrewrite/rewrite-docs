---
sidebar_label: "Add missing `@Override` to overriding and implementing methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add missing `@Override` to overriding and implementing methods

**org.openrewrite.staticanalysis.MissingOverrideAnnotation**

_Adds `@Override` to methods overriding superclass methods or implementing interface methods. Annotating methods improves readability by showing the author's intent to override. Additionally, when annotated, the compiler will emit an error when a signature of the overridden method does not match the superclass method._

### Tags

* [RSPEC-S1161](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S1161&open=java%3AS1161)

## Recipe source

[GitHub: MissingOverrideAnnotation.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/MissingOverrideAnnotation.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Boolean` | ignoreAnonymousClassMethods | *Optional*. When enabled, ignore missing annotations on methods which override methods when the class definition is within an anonymous class. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [OpenRewrite recipe best practices](/recipes/recipes/rewrite/openrewriterecipebestpractices.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|ignoreAnonymousClassMethods|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
package com.example;

class Test {
    public void method() {
        //noinspection all
        Runnable t = new Runnable() {
            public void run() {
            }
        };
    }
}
```

###### After
```java
package com.example;

class Test {
    public void method() {
        //noinspection all
        Runnable t = new Runnable() {
            @Override
            public void run() {
            }
        };
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,0 +7,1 @@
        //noinspection all
        Runnable t = new Runnable() {
+           @Override
            public void run() {
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.MissingOverrideAnnotation"
  displayName="Add missing `@Override` to overriding and implementing methods"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.MissingOverrideAnnotation" />

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
