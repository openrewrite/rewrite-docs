---
title: "Migrate a PMD 6 ruleset to PMD 7"
sidebar_label: "Migrate a PMD 6 ruleset to PMD 7"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate a PMD 6 ruleset to PMD 7

**org.openrewrite.java.pmd.Pmd6to7Migration**

_PMD 7 deleted the rules that had been deprecated throughout the PMD 6 line, and PMD refuses to load a ruleset that references a rule it does not know. Update the `<rule>` references and `<exclude>` elements in PMD ruleset XML files to name each deleted rule's successor, and drop the references to rules that were deleted without one. Rules whose behaviour PMD split across several successors, such as `VariableNamingConventions` and the primitive wrapper `*Instantiation` rules, are left alone because picking a single replacement for them requires a judgement call._

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
  * oldRule: `category/java/bestpractices.xml/PositionLiteralsFirstInCaseInsensitiveComparisons`
  * newRule: `LiteralsFirstInComparisons`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/PositionLiteralsFirstInComparisons`
  * newRule: `LiteralsFirstInComparisons`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/UnusedImports`
  * newRule: `category/java/codestyle.xml/UnnecessaryImport`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/UseAssertEqualsInsteadOfAssertTrue`
  * newRule: `SimplifiableTestAssertion`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/UseAssertNullInsteadOfAssertEquals`
  * newRule: `SimplifiableTestAssertion`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/UseAssertSameInsteadOfAssertEquals`
  * newRule: `SimplifiableTestAssertion`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/bestpractices.xml/UseAssertTrueInsteadOfAssertEquals`
  * newRule: `SimplifiableTestAssertion`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/AbstractNaming`
  * newRule: `ClassNamingConventions`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/AvoidPrefixingMethodParameters`
  * newRule: `FormalParameterNamingConventions`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/DefaultPackage`
  * newRule: `CommentDefaultAccessModifier`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/DontImportJavaLang`
  * newRule: `UnnecessaryImport`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/DuplicateImports`
  * newRule: `UnnecessaryImport`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/ForLoopsMustUseBraces`
  * newRule: `ControlStatementBraces`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/IfElseStmtsMustUseBraces`
  * newRule: `ControlStatementBraces`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/IfStmtsMustUseBraces`
  * newRule: `ControlStatementBraces`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/WhileLoopsMustUseBraces`
  * newRule: `ControlStatementBraces`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/codestyle.xml/SuspiciousConstantFieldName`
  * newRule: `FieldNamingConventions`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/ExcessiveClassLength`
  * newRule: `NcssCount`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/ExcessiveMethodLength`
  * newRule: `NcssCount`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/ModifiedCyclomaticComplexity`
  * newRule: `CyclomaticComplexity`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/StdCyclomaticComplexity`
  * newRule: `CyclomaticComplexity`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/NcssConstructorCount`
  * newRule: `NcssCount`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/NcssMethodCount`
  * newRule: `NcssCount`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/NcssTypeCount`
  * newRule: `NcssCount`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/design.xml/SimplifyBooleanAssertion`
  * newRule: `category/java/bestpractices.xml/SimplifiableTestAssertion`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/BadComparison`
  * newRule: `ComparisonWithNaN`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/BeanMembersShouldSerialize`
  * newRule: `NonSerializableClass`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/DataflowAnomalyAnalysis`
  * newRule: `category/java/bestpractices.xml/UnusedAssignment`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/DoNotCallSystemExit`
  * newRule: `DoNotTerminateVM`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyFinallyBlock`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyIfStmt`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyInitializer`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyStatementBlock`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptySwitchStatements`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptySynchronizedBlock`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyTryBlock`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyWhileStmt`
  * newRule: `category/java/codestyle.xml/EmptyControlStatement`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/EmptyStatementNotInLoop`
  * newRule: `category/java/codestyle.xml/UnnecessarySemicolon`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/ImportFromSamePackage`
  * newRule: `category/java/codestyle.xml/UnnecessaryImport`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/InvalidSlf4jMessageFormat`
  * newRule: `InvalidLogMessageFormat`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/LoggerIsNotStaticFinal`
  * newRule: `ProperLogger`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/MissingBreakInSwitch`
  * newRule: `ImplicitSwitchFallThrough`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/errorprone.xml/ReturnEmptyArrayRatherThanNull`
  * newRule: `ReturnEmptyCollectionRatherThanNull`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/multithreading.xml/UnsynchronizedStaticDateFormatter`
  * newRule: `UnsynchronizedStaticFormatter`
* [Replace a PMD rule in a ruleset](../../java/pmd/replacepmdrule)
  * oldRule: `category/java/performance.xml/UnnecessaryWrapperObjectCreation`
  * newRule: `category/java/codestyle.xml/UnnecessaryBoxing`
* [Remove a PMD rule from a ruleset](../../java/pmd/removepmdrule)
  * rule: `category/java/codestyle.xml/AvoidFinalLocalVariable`
* [Remove a PMD rule from a ruleset](../../java/pmd/removepmdrule)
  * rule: `category/java/errorprone.xml/CloneThrowsCloneNotSupportedException`
* [Remove a PMD rule from a ruleset](../../java/pmd/removepmdrule)
  * rule: `category/java/performance.xml/AvoidUsingShortType`
* [Remove a PMD rule from a ruleset](../../java/pmd/removepmdrule)
  * rule: `category/java/performance.xml/SimplifyStartsWith`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.pmd.Pmd6to7Migration
displayName: Migrate a PMD 6 ruleset to PMD 7
description: |
  PMD 7 deleted the rules that had been deprecated throughout the PMD 6 line, and PMD refuses to load a ruleset that references a rule it does not know. Update the `&lt;rule&gt;` references and `&lt;exclude&gt;` elements in PMD ruleset XML files to name each deleted rule's successor, and drop the references to rules that were deleted without one. Rules whose behaviour PMD split across several successors, such as `VariableNamingConventions` and the primitive wrapper `*Instantiation` rules, are left alone because picking a single replacement for them requires a judgement call.
recipeList:
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/PositionLiteralsFirstInCaseInsensitiveComparisons
      newRule: LiteralsFirstInComparisons
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/PositionLiteralsFirstInComparisons
      newRule: LiteralsFirstInComparisons
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/UnusedImports
      newRule: category/java/codestyle.xml/UnnecessaryImport
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/UseAssertEqualsInsteadOfAssertTrue
      newRule: SimplifiableTestAssertion
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/UseAssertNullInsteadOfAssertEquals
      newRule: SimplifiableTestAssertion
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/UseAssertSameInsteadOfAssertEquals
      newRule: SimplifiableTestAssertion
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/bestpractices.xml/UseAssertTrueInsteadOfAssertEquals
      newRule: SimplifiableTestAssertion
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/AbstractNaming
      newRule: ClassNamingConventions
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/AvoidPrefixingMethodParameters
      newRule: FormalParameterNamingConventions
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/DefaultPackage
      newRule: CommentDefaultAccessModifier
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/DontImportJavaLang
      newRule: UnnecessaryImport
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/DuplicateImports
      newRule: UnnecessaryImport
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/ForLoopsMustUseBraces
      newRule: ControlStatementBraces
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/IfElseStmtsMustUseBraces
      newRule: ControlStatementBraces
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/IfStmtsMustUseBraces
      newRule: ControlStatementBraces
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/WhileLoopsMustUseBraces
      newRule: ControlStatementBraces
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/codestyle.xml/SuspiciousConstantFieldName
      newRule: FieldNamingConventions
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/ExcessiveClassLength
      newRule: NcssCount
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/ExcessiveMethodLength
      newRule: NcssCount
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/ModifiedCyclomaticComplexity
      newRule: CyclomaticComplexity
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/StdCyclomaticComplexity
      newRule: CyclomaticComplexity
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/NcssConstructorCount
      newRule: NcssCount
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/NcssMethodCount
      newRule: NcssCount
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/NcssTypeCount
      newRule: NcssCount
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/design.xml/SimplifyBooleanAssertion
      newRule: category/java/bestpractices.xml/SimplifiableTestAssertion
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/BadComparison
      newRule: ComparisonWithNaN
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/BeanMembersShouldSerialize
      newRule: NonSerializableClass
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/DataflowAnomalyAnalysis
      newRule: category/java/bestpractices.xml/UnusedAssignment
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/DoNotCallSystemExit
      newRule: DoNotTerminateVM
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyFinallyBlock
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyIfStmt
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyInitializer
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyStatementBlock
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptySwitchStatements
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptySynchronizedBlock
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyTryBlock
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyWhileStmt
      newRule: category/java/codestyle.xml/EmptyControlStatement
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/EmptyStatementNotInLoop
      newRule: category/java/codestyle.xml/UnnecessarySemicolon
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/ImportFromSamePackage
      newRule: category/java/codestyle.xml/UnnecessaryImport
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/InvalidSlf4jMessageFormat
      newRule: InvalidLogMessageFormat
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/LoggerIsNotStaticFinal
      newRule: ProperLogger
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/MissingBreakInSwitch
      newRule: ImplicitSwitchFallThrough
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/errorprone.xml/ReturnEmptyArrayRatherThanNull
      newRule: ReturnEmptyCollectionRatherThanNull
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/multithreading.xml/UnsynchronizedStaticDateFormatter
      newRule: UnsynchronizedStaticFormatter
  - org.openrewrite.java.pmd.ReplacePmdRule:
      oldRule: category/java/performance.xml/UnnecessaryWrapperObjectCreation
      newRule: category/java/codestyle.xml/UnnecessaryBoxing
  - org.openrewrite.java.pmd.RemovePmdRule:
      rule: category/java/codestyle.xml/AvoidFinalLocalVariable
  - org.openrewrite.java.pmd.RemovePmdRule:
      rule: category/java/errorprone.xml/CloneThrowsCloneNotSupportedException
  - org.openrewrite.java.pmd.RemovePmdRule:
      rule: category/java/performance.xml/AvoidUsingShortType
  - org.openrewrite.java.pmd.RemovePmdRule:
      rule: category/java/performance.xml/SimplifyStartsWith

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Modernize a PMD ruleset](/recipes/java/pmd/modernizepmd.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.pmd.Pmd6to7Migration"
  displayName="Migrate a PMD 6 ruleset to PMD 7"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-pmd"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PMD"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.pmd.Pmd6to7Migration" />

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
