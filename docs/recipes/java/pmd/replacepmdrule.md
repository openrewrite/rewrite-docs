---
title: "Replace a PMD rule in a ruleset"
sidebar_label: "Replace a PMD rule in a ruleset"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace a PMD rule in a ruleset

**org.openrewrite.java.pmd.ReplacePmdRule**

_Updates `<rule ref="..."/>` references and `<exclude name="..."/>` elements in PMD ruleset XML files to name a rule's replacement. An `<exclude>` is only renamed when the replacement lives in the same ruleset file, because an exclusion can only name a rule from the ruleset its enclosing `<rule>` refers to; when the replacement moved to another ruleset file the exclusion no longer names a rule PMD knows, so it is removed instead._

## Recipe source

[GitHub: ReplacePmdRule.java](https://github.com/openrewrite/rewrite-pmd/blob/main/src/main/java/org/openrewrite/java/pmd/ReplacePmdRule.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-pmd/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-pmd/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | oldRule | The rule to replace, either a fully qualified reference such as `category/java/errorprone.xml/MissingBreakInSwitch` or just the rule name, in which case the rule is replaced regardless of which ruleset file it is referenced from. | `category/java/errorprone.xml/MissingBreakInSwitch` |
| `String` | newRule | The rule to replace it with. Give a fully qualified reference when the replacement lives in a different ruleset file; a bare rule name keeps the existing ruleset file. | `ImplicitSwitchFallThrough` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate a PMD 6 ruleset to PMD 7](/recipes/java/pmd/pmd6to7migration.md)
* [Rename PMD rules that were renamed within the PMD 7 line](/recipes/java/pmd/pmd7rulerenames.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplacePmdRuleExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplacePmdRuleExample
displayName: Replace a PMD rule in a ruleset example
recipeList:
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/MissingBreakInSwitch
      newRule: ImplicitSwitchFallThrough
```

<RunRecipe
  recipeName="org.openrewrite.java.pmd.ReplacePmdRule"
  displayName="Replace a PMD rule in a ruleset"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-pmd"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PMD"
  requiresConfiguration
  cliOptions={' --recipe-option "oldRule=category/java/errorprone.xml/MissingBreakInSwitch" --recipe-option "newRule=ImplicitSwitchFallThrough"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.pmd.ReplacePmdRule" />

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
