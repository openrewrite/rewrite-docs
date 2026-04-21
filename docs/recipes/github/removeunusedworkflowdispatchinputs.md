---
sidebar_label: "Remove unused workflow dispatch inputs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove unused workflow dispatch inputs

**org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs**

_Remove workflow_dispatch inputs that are not referenced anywhere in the workflow file._

## Recipe source

[GitHub: RemoveUnusedWorkflowDispatchInputs.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/RemoveUnusedWorkflowDispatchInputs.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [GitHub Actions best practices](/recipes/github/githubactionsbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/test.yml" label=".github/workflows/test.yml">


###### Before
```yaml title=".github/workflows/test.yml"
name: Test Workflow
on:
  workflow_dispatch:
    inputs:
      used-input:
        description: 'This input is used'
        required: true
      unused_input:
        description: 'This input is not used anywhere'
        required: false
      anotherUnusedInput:
        description: 'Also not used'
        default: 'default-value'
      usedInGithubActionSyntax:
        description: 'Used in Github Action syntax'

jobs:
  test-job:
    runs-on: ubuntu-latest
    steps:
      - name: Use input
        run: echo "Used input - ${{ github.event.inputs.used-input }}"
      - name: Another step
        run: echo "Just a step without input reference"
      - name: Step 3
        if: inputs . usedInGithubActionSyntax == 'true'
        run: echo "Conditional step"
```

###### After
```yaml title=".github/workflows/test.yml"
name: Test Workflow
on:
  workflow_dispatch:
    inputs:
      used-input:
        description: 'This input is used'
        required: true
      usedInGithubActionSyntax:
        description: 'Used in Github Action syntax'

jobs:
  test-job:
    runs-on: ubuntu-latest
    steps:
      - name: Use input
        run: echo "Used input - ${{ github.event.inputs.used-input }}"
      - name: Another step
        run: echo "Just a step without input reference"
      - name: Step 3
        if: inputs . usedInGithubActionSyntax == 'true'
        run: echo "Conditional step"
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/test.yml
+++ .github/workflows/test.yml
@@ -8,6 +8,0 @@
        description: 'This input is used'
        required: true
-     unused_input:
-       description: 'This input is not used anywhere'
-       required: false
-     anotherUnusedInput:
-       description: 'Also not used'
-       default: 'default-value'
      usedInGithubActionSyntax:
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs"
  displayName="Remove unused workflow dispatch inputs"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.RemoveUnusedWorkflowDispatchInputs" />

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
