---
title: "Migrate from tibdex/github-app-token to actions/create-github-app-token"
sidebar_label: "Migrate from tibdex/github-app-token to actions/create-github-app-token"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from tibdex/github-app-token to actions/create-github-app-token

**org.openrewrite.github.MigrateTibdexGitHubAppTokenToActions**

_Migrates from the deprecated `tibdex/github-app-token@v2` to `actions/create-github-app-token@v3`, which runs on Node.js 24 instead of the deprecated Node.js 20. Renames the `app_id`, `private_key`, and `github_api_url` inputs to their kebab-case equivalents `app-id`, `private-key`, and `github-api-url`._

### Tags

* [actions](/reference/recipes-by-tag#actions)
* [github](/reference/recipes-by-tag#github)

## Recipe source

[GitHub: github.yml](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/resources/META-INF/rewrite/github.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change GitHub Action](../github/changeaction)
  * oldAction: `tibdex/github-app-token`
  * newAction: `actions/create-github-app-token`
  * newVersion: `v3`
* [Change key](../yaml/changekey)
  * oldKeyPath: `$.jobs..[?(@.uses =~ 'actions/create-github-app-token.*')].with.app_id`
  * newKey: `app-id`
* [Change key](../yaml/changekey)
  * oldKeyPath: `$.jobs..[?(@.uses =~ 'actions/create-github-app-token.*')].with.private_key`
  * newKey: `private-key`
* [Change key](../yaml/changekey)
  * oldKeyPath: `$.jobs..[?(@.uses =~ 'actions/create-github-app-token.*')].with.github_api_url`
  * newKey: `github-api-url`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.github.MigrateTibdexGitHubAppTokenToActions
displayName: Migrate from tibdex/github-app-token to actions/create-github-app-token
description: |
  Migrates from the deprecated `tibdex/github-app-token@v2` to `actions/create-github-app-token@v3`, which runs on Node.js 24 instead of the deprecated Node.js 20. Renames the `app_id`, `private_key`, and `github_api_url` inputs to their kebab-case equivalents `app-id`, `private-key`, and `github-api-url`.
tags:
  - actions
  - github
recipeList:
  - org.openrewrite.github.ChangeAction:
      oldAction: tibdex/github-app-token
      newAction: actions/create-github-app-token
      newVersion: v3
  - org.openrewrite.yaml.ChangeKey:
      oldKeyPath: $.jobs..[?(@.uses =~ 'actions/create-github-app-token.*')].with.app_id
      newKey: app-id
  - org.openrewrite.yaml.ChangeKey:
      oldKeyPath: $.jobs..[?(@.uses =~ 'actions/create-github-app-token.*')].with.private_key
      newKey: private-key
  - org.openrewrite.yaml.ChangeKey:
      oldKeyPath: $.jobs..[?(@.uses =~ 'actions/create-github-app-token.*')].with.github_api_url
      newKey: github-api-url

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`MigrateTibdexGitHubAppTokenToActionsTest#migratesActionAndRenamesInputs`


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/ci.yml" label=".github/workflows/ci.yml">


###### Before
```yaml title=".github/workflows/ci.yml"
jobs:
  token:
    runs-on: ubuntu-latest
    steps:
      - id: create_token
        uses: tibdex/github-app-token@v2
        with:
          app_id: ${{ secrets.APP_ID }}
          private_key: ${{ secrets.APP_PRIVATE_KEY }}
```

###### After
```yaml title=".github/workflows/ci.yml"
jobs:
  token:
    runs-on: ubuntu-latest
    steps:
      - id: create_token
        uses: actions/create-github-app-token@v3
        with:
          app-id: ${{ secrets.APP_ID }}
          private-key: ${{ secrets.APP_PRIVATE_KEY }}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/ci.yml
+++ .github/workflows/ci.yml
@@ -6,1 +6,1 @@
    steps:
      - id: create_token
-       uses: tibdex/github-app-token@v2
+       uses: actions/create-github-app-token@v3
        with:
@@ -8,2 +8,2 @@
        uses: tibdex/github-app-token@v2
        with:
-         app_id: ${{ secrets.APP_ID }}
-         private_key: ${{ secrets.APP_PRIVATE_KEY }}
+         app-id: ${{ secrets.APP_ID }}
+         private-key: ${{ secrets.APP_PRIVATE_KEY }}

```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateTibdexGitHubAppTokenToActionsTest#migratesActionAndRenamesInputs`


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/ci.yml" label=".github/workflows/ci.yml">


###### Before
```yaml title=".github/workflows/ci.yml"
jobs:
  token:
    runs-on: ubuntu-latest
    steps:
      - id: create_token
        uses: tibdex/github-app-token@v2
        with:
          app_id: ${{ secrets.APP_ID }}
          private_key: ${{ secrets.APP_PRIVATE_KEY }}
```

###### After
```yaml title=".github/workflows/ci.yml"
jobs:
  token:
    runs-on: ubuntu-latest
    steps:
      - id: create_token
        uses: actions/create-github-app-token@v3
        with:
          app-id: ${{ secrets.APP_ID }}
          private-key: ${{ secrets.APP_PRIVATE_KEY }}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/ci.yml
+++ .github/workflows/ci.yml
@@ -6,1 +6,1 @@
    steps:
      - id: create_token
-       uses: tibdex/github-app-token@v2
+       uses: actions/create-github-app-token@v3
        with:
@@ -8,2 +8,2 @@
        uses: tibdex/github-app-token@v2
        with:
-         app_id: ${{ secrets.APP_ID }}
-         private_key: ${{ secrets.APP_PRIVATE_KEY }}
+         app-id: ${{ secrets.APP_ID }}
+         private-key: ${{ secrets.APP_PRIVATE_KEY }}

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.MigrateTibdexGitHubAppTokenToActions"
  displayName="Migrate from tibdex/github-app-token to actions/create-github-app-token"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.MigrateTibdexGitHubAppTokenToActions" />

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
