---
sidebar_label: "Generate `InlineMethodCalls` recipes for deprecated delegating methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Generate `InlineMethodCalls` recipes for deprecated delegating methods

**org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes**

_Finds `@Deprecated` method declarations whose body is a single delegation call to another method in the same class, and generates a declarative YAML recipe file containing `InlineMethodCalls` entries for each._

## Recipe source

[GitHub: GenerateDeprecatedMethod.java](https://github.com/openrewrite/rewrite-rewrite/blob/main/src/main/java/org/openrewrite/java/recipes/GenerateDeprecatedMethod.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-rewrite/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [OpenRewrite recipe best practices](/recipes/recipes/rewrite/openrewriterecipebestpractices.md)

## Example


###### Unchanged
```java
package com.example;

public class Foo {
    private final String a;
    private final String b;

    public Foo(String a, String b) {
        this.a = a;
        this.b = b;
    }

    @Deprecated
    public Foo(String a) {
        this(a, null);
    }
}
```


###### New file
```yaml title="src/main/resources/META-INF/rewrite/inline-deprecated-methods.yml"
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.recipes.InlineDeprecatedMethods
displayName: Inline deprecated delegating methods
description: Automatically generated recipes to inline deprecated method calls that delegate to other methods in the same class.
recipeList:
  - org.openrewrite.java.InlineMethodCalls:
      methodPattern: 'com.example.Foo <constructor>(java.lang.String)'
      replacement: 'this(a, null)'
```



## Usage

<RunRecipe
  recipeName="org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes"
  displayName="Generate `InlineMethodCalls` recipes for deprecated delegating methods"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-rewrite"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_REWRITE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.recipes.GenerateDeprecatedMethodRecipes" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.recipes.DeprecatedMethodDelegations" label="DeprecatedMethodDelegations">

### Deprecated method delegations
**org.openrewrite.java.recipes.DeprecatedMethodDelegations**

_Deprecated methods that delegate to another method in the same class, suitable for inlining via `InlineMethodCalls`._

| Column Name | Description |
| ----------- | ----------- |
| Method pattern | The method pattern of the deprecated method. |
| Replacement | The replacement expression to inline. |
| Recipe YAML | A YAML snippet that can be copied into a recipe list. |

</TabItem>

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
