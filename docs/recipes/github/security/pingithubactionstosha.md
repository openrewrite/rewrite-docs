---
title: "Pin GitHub Actions to commit SHAs"
sidebar_label: "Pin GitHub Actions to commit SHAs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Pin GitHub Actions to commit SHAs

**org.openrewrite.github.security.PinGitHubActionsToSha**

_Replaces mutable tag or branch references in GitHub Actions `uses:` declarations with immutable commit SHAs. A static mapping of well-known actions is checked first; if the action is not found, the GitHub API is used to resolve the reference at recipe run time. By default only third-party actions are pinned; set `pinOfficialActions` to include actions from the `actions` and `github` organizations. To pin only a specific allow-list of actions, set `includedActions`._

### Tags

* [supply-chain](/reference/recipes-by-tag#supply)
* [github](/reference/recipes-by-tag#github)
* [security](/reference/recipes-by-tag#security)
* [actions](/reference/recipes-by-tag#actions)

## Recipe source

[GitHub: PinGitHubActionsToSha.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/security/PinGitHubActionsToSha.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Boolean` | pinOfficialActions | *Optional*. When set to `true`, also pins actions from official GitHub organizations (e.g., `actions/*`, `github/*`). Defaults to `false`, meaning only third-party actions are pinned. |  |
| `String` | githubApiToken | *Optional*. A GitHub personal access token used to resolve tags/branches to commit SHAs via the GitHub API. Only needed for actions not found in the built-in static mapping. Without a token, unauthenticated requests are rate-limited to 60/hour. | `TODO Provide a usage example for the docs` |
| `List` | trustedOwners | *Optional*. Optional list of trusted owners/organizations, actions that belong to these organizations will not be pinned. This option overrides the 'Included actions' list. | `my-organization, my-other-organization` |
| `List` | includedActions | *Optional*. Optional allow-list of actions to pin. When provided, only `uses:` references matching one of these patterns are pinned; all other actions are left untouched. Patterns may be `owner/repo` (exact match), `owner/*` (any repo in an org), or `owner/repo/subpath` (exact match including a subpath). When omitted or empty, all third-party actions (and optionally official actions, per `pinOfficialActions`) are pinned. | `codecov/codecov-action` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|pinOfficialActions|`false`|
|githubApiToken|`null`|
|trustedOwners|`null`|
|includedActions|`null`|


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/ci.yml" label=".github/workflows/ci.yml">


###### Before
```yaml title=".github/workflows/ci.yml"
name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: codecov/codecov-action@v4
        name: Upload coverage
```

###### After
```yaml title=".github/workflows/ci.yml"
name: CI
on: push
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: codecov/codecov-action@b9fd7d16f6d7d1b5d2bec1a2887e65ceed900238 # v4
        name: Upload coverage
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/ci.yml
+++ .github/workflows/ci.yml
@@ -7,1 +7,1 @@
    runs-on: ubuntu-latest
    steps:
-     - uses: codecov/codecov-action@v4
+     - uses: codecov/codecov-action@b9fd7d16f6d7d1b5d2bec1a2887e65ceed900238 # v4
        name: Upload coverage
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.security.PinGitHubActionsToSha"
  displayName="Pin GitHub Actions to commit SHAs"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.security.PinGitHubActionsToSha" />

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
