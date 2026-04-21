---
sidebar_label: "Code cleanup"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Code cleanup

**org.openrewrite.staticanalysis.CodeCleanup**

_Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions._

## Recipe source

[GitHub: static-analysis.yml](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/resources/META-INF/rewrite/static-analysis.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../core/singleton)

**Recipes**

* [Default comes last](../staticanalysis/defaultcomeslast)
* [Remove empty blocks](../staticanalysis/emptyblock)
* [End files with a single newline](../java/format/emptynewlineatendoffile)
* [`for` loop counters should use postfix operators](../staticanalysis/forloopcontrolvariablepostfixoperators)
* [Finalize private fields](../staticanalysis/finalizeprivatefields)
* [Method parameter padding](../java/format/methodparampad)
* [No whitespace after](../java/format/nowhitespaceafter)
* [No whitespace before](../java/format/nowhitespacebefore)
* [Pad empty `for` loop components](../java/format/pademptyforloopcomponents)
* [Typecast parenthesis padding](../staticanalysis/typecastparenpad)
* [Equals avoids null](../staticanalysis/equalsavoidsnull)
* [Explicit initialization](../staticanalysis/explicitinitialization)
* [Fall through](../staticanalysis/fallthrough)
* [Hide utility class constructor](../staticanalysis/hideutilityclassconstructor)
* [Fix missing braces](../staticanalysis/needbraces)
* [Operator wrapping](../staticanalysis/operatorwrap)
* [Remove unnecessary parentheses](../staticanalysis/unnecessaryparentheses)
* [Replace calls to `Thread.run()` with `Thread.start()`](../staticanalysis/replacethreadrunwiththreadstart)
* [Chain `StringBuilder.append()` calls](../staticanalysis/chainstringbuilderappendcalls)
* [Remove methods that only call super](../staticanalysis/removemethodsonlycallsuper)
* [Replace `StringBuilder#append` with `String`](../staticanalysis/replacestringbuilderwithstring)
* [Add imports for fully qualified references to types](../java/shortenfullyqualifiedtypereferences)
* [Simplify single-element annotation](../java/simplifysingleelementannotation)
* [Order imports](../java/orderimports)
* [Remove unused labels](../staticanalysis/removeunusedlabels)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.staticanalysis.CodeCleanup
displayName: Code cleanup
description: |
  Automatically cleanup code, e.g. remove unnecessary parentheses, simplify expressions.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.staticanalysis.DefaultComesLast
  - org.openrewrite.staticanalysis.EmptyBlock
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.staticanalysis.ForLoopControlVariablePostfixOperators
  - org.openrewrite.staticanalysis.FinalizePrivateFields
  - org.openrewrite.java.format.MethodParamPad
  - org.openrewrite.java.format.NoWhitespaceAfter
  - org.openrewrite.java.format.NoWhitespaceBefore
  - org.openrewrite.java.format.PadEmptyForLoopComponents
  - org.openrewrite.staticanalysis.TypecastParenPad
  - org.openrewrite.staticanalysis.EqualsAvoidsNull
  - org.openrewrite.staticanalysis.ExplicitInitialization
  - org.openrewrite.staticanalysis.FallThrough
  - org.openrewrite.staticanalysis.HideUtilityClassConstructor
  - org.openrewrite.staticanalysis.NeedBraces
  - org.openrewrite.staticanalysis.OperatorWrap
  - org.openrewrite.staticanalysis.UnnecessaryParentheses
  - org.openrewrite.staticanalysis.ReplaceThreadRunWithThreadStart
  - org.openrewrite.staticanalysis.ChainStringBuilderAppendCalls
  - org.openrewrite.staticanalysis.RemoveMethodsOnlyCallSuper
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.java.ShortenFullyQualifiedTypeReferences
  - org.openrewrite.java.SimplifySingleElementAnnotation
  - org.openrewrite.java.OrderImports
  - org.openrewrite.staticanalysis.RemoveUnusedLabels

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.CodeCleanup"
  displayName="Code cleanup"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.CodeCleanup" />

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
