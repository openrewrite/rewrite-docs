---
title: "Rename PMD rules that were renamed within the PMD 7 line"
sidebar_label: "Rename PMD rules that were renamed within the PMD 7 line"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Rename PMD rules that were renamed within the PMD 7 line

**org.openrewrite.java.pmd.Pmd7RuleRenames**

_PMD renamed a number of rules during the PMD 7 line, keeping the old name as a deprecated alias that PMD still loads but warns about. Update the `<rule>` references and `<exclude>` elements in PMD ruleset XML files to name each rule's current name, so the ruleset stops emitting deprecation warnings and keeps loading once PMD 8 drops the aliases. Only true renames are applied, meaning the cases where PMD kept the old name as an alias pointing at the new one. Rules PMD deprecated in favour of a *different* rule, such as `AvoidCatchingNPE` in favour of the configurable `AvoidCatchingGenericException`, `GenericsNaming` in favour of `TypeParameterNamingConventions`, `UnnecessaryLocalBeforeReturn` in favour of `VariableCanBeInlined`, `UseObjectForClearerAPI` in favour of `ExcessiveParameterList`, and `CheckSkipResult`, `AvoidLosingExceptionInformation` and `UselessOperationOnImmutable` in favour of `UnusedReturnValue`, are left alone, because the successor reports different things and adopting it is a judgement call rather than a rename. The new names require PMD 7.27.0 or later; a ruleset for an earlier PMD 7 fails to load a name that its version does not know yet._

## Recipe source

[GitHub: pmd.yml](https://github.com/openrewrite/rewrite-pmd/blob/main/src/main/resources/META-INF/rewrite/pmd.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-pmd/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-pmd/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/DefaultLabelNotLastInSwitchStmt`
  * newRule: `DefaultLabelNotLastInSwitch`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnit4TestShouldUseAfterAnnotation`
  * newRule: `UnitTestShouldUseAfterAnnotation`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnit4TestShouldUseBeforeAnnotation`
  * newRule: `UnitTestShouldUseBeforeAnnotation`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnit4TestShouldUseTestAnnotation`
  * newRule: `UnitTestShouldUseTestAnnotation`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnitAssertionsShouldIncludeMessage`
  * newRule: `UnitTestAssertionsShouldIncludeMessage`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnitTestContainsTooManyAsserts`
  * newRule: `UnitTestContainsTooManyAsserts`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnitTestsShouldIncludeAssert`
  * newRule: `UnitTestShouldIncludeAssert`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/SwitchStmtsShouldHaveDefault`
  * newRule: `NonExhaustiveSwitch`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/NonCaseLabelInSwitchStatement`
  * newRule: `NonCaseLabelInSwitch`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/performance.xml/TooFewBranchesForASwitchStatement`
  * newRule: `TooFewBranchesForSwitch`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/AvoidCatchingGenericException`
  * newRule: `category/java/errorprone.xml/AvoidCatchingGenericException`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/JUnit5TestShouldBePackagePrivate`
  * newRule: `JUnitJupiterTestShouldBePackagePrivate`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/UseUtilityClass`
  * newRule: `InstantiableUtilityClass`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.pmd.Pmd7RuleRenames
displayName: Rename PMD rules that were renamed within the PMD 7 line
description: |
  PMD renamed a number of rules during the PMD 7 line, keeping the old name as a deprecated alias that PMD still loads but warns about. Update the `&lt;rule&gt;` references and `&lt;exclude&gt;` elements in PMD ruleset XML files to name each rule's current name, so the ruleset stops emitting deprecation warnings and keeps loading once PMD 8 drops the aliases. Only true renames are applied, meaning the cases where PMD kept the old name as an alias pointing at the new one. Rules PMD deprecated in favour of a *different* rule, such as `AvoidCatchingNPE` in favour of the configurable `AvoidCatchingGenericException`, `GenericsNaming` in favour of `TypeParameterNamingConventions`, `UnnecessaryLocalBeforeReturn` in favour of `VariableCanBeInlined`, `UseObjectForClearerAPI` in favour of `ExcessiveParameterList`, and `CheckSkipResult`, `AvoidLosingExceptionInformation` and `UselessOperationOnImmutable` in favour of `UnusedReturnValue`, are left alone, because the successor reports different things and adopting it is a judgement call rather than a rename. The new names require PMD 7.27.0 or later; a ruleset for an earlier PMD 7 fails to load a name that its version does not know yet.
recipeList:
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/DefaultLabelNotLastInSwitchStmt
      newRule: DefaultLabelNotLastInSwitch
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnit4TestShouldUseAfterAnnotation
      newRule: UnitTestShouldUseAfterAnnotation
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnit4TestShouldUseBeforeAnnotation
      newRule: UnitTestShouldUseBeforeAnnotation
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnit4TestShouldUseTestAnnotation
      newRule: UnitTestShouldUseTestAnnotation
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnitAssertionsShouldIncludeMessage
      newRule: UnitTestAssertionsShouldIncludeMessage
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnitTestContainsTooManyAsserts
      newRule: UnitTestContainsTooManyAsserts
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnitTestsShouldIncludeAssert
      newRule: UnitTestShouldIncludeAssert
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/SwitchStmtsShouldHaveDefault
      newRule: NonExhaustiveSwitch
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/NonCaseLabelInSwitchStatement
      newRule: NonCaseLabelInSwitch
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/performance.xml/TooFewBranchesForASwitchStatement
      newRule: TooFewBranchesForSwitch
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/AvoidCatchingGenericException
      newRule: category/java/errorprone.xml/AvoidCatchingGenericException
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/JUnit5TestShouldBePackagePrivate
      newRule: JUnitJupiterTestShouldBePackagePrivate
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/UseUtilityClass
      newRule: InstantiableUtilityClass

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Modernize a PMD ruleset](/recipes/java/pmd/modernizepmd.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.pmd.Pmd7RuleRenames"
  displayName="Rename PMD rules that were renamed within the PMD 7 line"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-pmd"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PMD"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.pmd.Pmd7RuleRenames" />

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
