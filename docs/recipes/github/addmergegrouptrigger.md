---
title: "Add `merge_group` workflow trigger"
sidebar_label: "Add `merge_group` workflow trigger"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `merge_group` workflow trigger

**org.openrewrite.github.AddMergeGroupTrigger**

_Trigger workflows for pull requests queued in a [merge queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue)._

### Tags

* [github](/reference/recipes-by-tag#github)

## Recipe source

[GitHub: github.yml](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/github.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Find YAML entries](../yaml/search/findkey)
  * key: `$.on.pull_request`

**Recipes**

* [Merge YAML snippet](../yaml/mergeyaml)
  * key: `$.on`
  * yaml: `merge_group:`
  * acceptTheirs: `true`
  * filePattern: `.github/workflows/*.{yml,yaml}`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.AddMergeGroupTrigger
displayName: Add `merge_group` workflow trigger
description: |
  Trigger workflows for pull requests queued in a [merge queue](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue).
tags:
  - github
preconditions:
  - org.openrewrite.yaml.search.FindKey:
      key: $.on.pull_request
recipeList:
  - org.openrewrite.yaml.MergeYaml:
      key: $.on
      yaml: merge_group:
      acceptTheirs: true
      filePattern: .github/workflows/*.{yml,yaml}

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`AddMergeGroupTriggerTest#addsMergeGroupTriggerToPullRequestWorkflow`


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/ci.yml" label=".github/workflows/ci.yml">


###### Before
```yaml title=".github/workflows/ci.yml"
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
```

###### After
```yaml title=".github/workflows/ci.yml"
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  merge_group:
jobs:
  build:
    runs-on: ubuntu-latest
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/ci.yml
+++ .github/workflows/ci.yml
@@ -8,0 +8,1 @@
    branches:
      - main
+ merge_group:
jobs:
```
</TabItem>
</Tabs>

---

##### Example 2
`AddMergeGroupTriggerTest#addsMergeGroupTriggerToPullRequestWorkflow`


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/ci.yml" label=".github/workflows/ci.yml">


###### Before
```yaml title=".github/workflows/ci.yml"
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
```

###### After
```yaml title=".github/workflows/ci.yml"
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  merge_group:
jobs:
  build:
    runs-on: ubuntu-latest
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/ci.yml
+++ .github/workflows/ci.yml
@@ -8,0 +8,1 @@
    branches:
      - main
+ merge_group:
jobs:
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.AddMergeGroupTrigger"
  displayName="Add `merge_group` workflow trigger"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.AddMergeGroupTrigger" />

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
