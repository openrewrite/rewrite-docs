---
sidebar_label: "Remove with debugging mode"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove with debugging mode

**org.openrewrite.cobol.cleanup.RemoveWithDebuggingMode**

_Remove debugging mode from SOURCE-COMPUTER paragraphs._

### Tags

* [RSPEC-4057](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S4057&open=java%3AS4057)

## Recipe source

[GitHub: RemoveWithDebuggingMode.java](https://github.com/moderneinc/rewrite-cobol/blob/main/src/main/java/org/openrewrite/cobol/cleanup/RemoveWithDebuggingMode.java),
[Issue Tracker](https://github.com/moderneinc/rewrite-cobol/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-cobol/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Boolean` | updateSequenceAreas | *Optional*. When set to `true` the existing sequence are updated to preserve ordering. This is default to false, and is used to prevent large diffs since COBOL has a line limit of 999k. | `true` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|updateSequenceAreas|`true`|


<Tabs groupId="beforeAfter">
<TabItem value="cobol" label="cobol">


###### Before
```cobol
000100 IDENTIFICATION DIVISION.                                         DB1014.2
000200 PROGRAM-ID.                                                      DB1014.2
000300     DB101A.                                                      DB1014.2
000400 ENVIRONMENT DIVISION.                                            DB1014.2
000500 CONFIGURATION SECTION.                                           DB1014.2
000600 SOURCE-COMPUTER.                                                 DB1014.2
000700     XXXXX082                                                     DB1014.2
000800         WITH DEBUGGING MODE.                                     DB1014.2
000900 OBJECT-COMPUTER.                                                 DB1014.2
001000     XXXXX083.                                                    DB1014.2
```

###### After
```cobol
000100 IDENTIFICATION DIVISION.                                         DB1014.2
000200 PROGRAM-ID.                                                      DB1014.2
000300     DB101A.                                                      DB1014.2
000400 ENVIRONMENT DIVISION.                                            DB1014.2
000500 CONFIGURATION SECTION.                                           DB1014.2
000600 SOURCE-COMPUTER.                                                 DB1014.2
000700     XXXXX082.                                                    DB1014.2
000800 OBJECT-COMPUTER.                                                 DB1014.2
000900     XXXXX083.                                                    DB1014.2
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,4 +7,3 @@
000500 CONFIGURATION SECTION.                                           DB1014.2
000600 SOURCE-COMPUTER.                                                 DB1014.2
-000700     XXXXX082                                                     DB1014.2
-000800         WITH DEBUGGING MODE.                                     DB1014.2
-000900 OBJECT-COMPUTER.                                                 DB1014.2
-001000     XXXXX083.                                                    DB1014.2
+000700     XXXXX082.                                                    DB1014.2
+000800 OBJECT-COMPUTER.                                                 DB1014.2
+000900     XXXXX083.                                                    DB1014.2

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.cobol.cleanup.RemoveWithDebuggingMode"
  displayName="Remove with debugging mode"
  groupId="org.openrewrite"
  artifactId="rewrite-cobol"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_COBOL"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.cobol.cleanup.RemoveWithDebuggingMode" />

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
