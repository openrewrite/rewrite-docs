---
title: "Cucumber JUnit 4 `@RunWith(Cucumber.class)` to JUnit Platform `@Suite`"
sidebar_label: "Cucumber JUnit 4 `@RunWith(Cucumber.class)` to JUnit Platform `@Suite`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Cucumber JUnit 4 `@RunWith(Cucumber.class)` to JUnit Platform `@Suite`

**org.openrewrite.cucumber.jvm.CucumberRunWithToSuite**

_Replaces the Cucumber JUnit 4 runner with a JUnit Platform `@Suite` that runs the Cucumber engine. The `@CucumberOptions` become `@ConfigurationParameter` annotations, and the features become `@SelectClasspathResource` selectors where they are on the classpath. The JUnit 4 runner looks for glue in the package of the annotated class by default, and the Cucumber engine in the whole classpath, so that package becomes the explicit glue when none is configured. Class-level setup and teardown methods become `@BeforeSuite` and `@AfterSuite` methods, as a `@Suite` does not run `@BeforeClass` or `@BeforeAll`. A class that extends another class, which may contribute `@CucumberOptions`, or that has an option that cannot be carried over, such as one that refers to a constant, keeps the JUnit 4 runner, with a comment explaining why._

## Recipe source

[GitHub: CucumberRunWithToSuite.java](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/java/org/openrewrite/cucumber/jvm/CucumberRunWithToSuite.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-cucumber-jvm/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Used by

This recipe is used as part of the following composite recipes:

* [Cucumber to JUnit test `@Suite`](/recipes/cucumber/jvm/cucumbertojunitplatformsuite.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.cucumber.jvm.CucumberRunWithToSuite"
  displayName="Cucumber JUnit 4 `@RunWith(Cucumber.class)` to JUnit Platform `@Suite`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-cucumber-jvm"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.CucumberRunWithToSuite" />

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
