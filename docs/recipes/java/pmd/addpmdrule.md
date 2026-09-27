---
title: "Add a PMD rule to a ruleset"
sidebar_label: "Add a PMD rule to a ruleset"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add a PMD rule to a ruleset

**org.openrewrite.java.pmd.AddPmdRule**

_Adds a `<rule ref="..."/>` reference to PMD ruleset XML files that do not have one yet. When the ruleset already pulls in the whole ruleset file the rule lives in, the rule is enabled by removing the `<exclude name="..."/>` that was keeping it out rather than by adding a second reference to it._

## Recipe source

[GitHub: AddPmdRule.java](https://github.com/openrewrite/rewrite-pmd/blob/main/src/main/java/org/openrewrite/java/pmd/AddPmdRule.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-pmd/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-pmd/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | rule | The rule to add, as a fully qualified reference naming both the ruleset file and the rule within it. A bare rule name is not enough, since PMD resolves a rule through the ruleset file it lives in. | `category/java/errorprone.xml/EmptyCatchBlock` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPmdRuleExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPmdRuleExample
displayName: Add a PMD rule to a ruleset example
recipeList:
  - org.openrewrite.java.pmd.AddPmdRule:
      rule: category/java/errorprone.xml/EmptyCatchBlock
```

<RunRecipe
  recipeName="org.openrewrite.java.pmd.AddPmdRule"
  displayName="Add a PMD rule to a ruleset"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-pmd"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PMD"
  requiresConfiguration
  cliOptions={' --recipe-option "rule=category/java/errorprone.xml/EmptyCatchBlock"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.pmd.AddPmdRule" />

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
