---
title: "Disable tests using PowerMock features with no Mockito equivalent"
sidebar_label: "Disable tests using PowerMock features with no Mockito equivalent"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Disable tests using PowerMock features with no Mockito equivalent

**org.openrewrite.java.testing.mockito.DisableUnsupportedPowerMockTests**

_Disables tests that reach into private members through PowerMock, which Mockito deliberately does not support, so that the rest of the repository can migrate. The test is annotated `@Disabled`, `@Ignore` or TestNG's `@Ignore` and recorded in a data table as an action item: rework the test not to depend on private members, then re-enable it. A usage outside a test method, such as in a setup method or a class-level annotation, disables the whole class._

## Recipe source

[GitHub: DisableUnsupportedPowerMockTests.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/DisableUnsupportedPowerMockTests.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Used by

This recipe is used as part of the following composite recipes:

* [Replace PowerMock with raw Mockito](/recipes/java/testing/mockito/replacepowermockito.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.DisableUnsupportedPowerMockTests"
  displayName="Disable tests using PowerMock features with no Mockito equivalent"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.DisableUnsupportedPowerMockTests" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.testing.mockito.table.PowerMockTestsDisabled" label="PowerMockTestsDisabled">

### PowerMock tests disabled for manual migration
**org.openrewrite.java.testing.mockito.table.PowerMockTestsDisabled**

_Tests disabled because they use a PowerMock feature with no Mockito equivalent. Each row is an action item: rework the test so it does not reach into private members, then re-enable it._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path of the test source file. |
| Test class | The test class the disabled test belongs to. |
| Disabled element | The test method that was disabled, or the class name when the usage sits outside a test method and the whole class had to be disabled. |
| Scope | `METHOD` when a single test was disabled, `CLASS` when the whole test class was. |
| Reason | The PowerMock usage that cannot be migrated. |

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
