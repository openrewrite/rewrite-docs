---
title: "Add `open-pull-requests-limit` to Dependabot configuration"
sidebar_label: "Add `open-pull-requests-limit` to Dependabot configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add `open-pull-requests-limit` to Dependabot configuration

**org.openrewrite.github.AddDependabotOpenPullRequestsLimit**

_Adds an `open-pull-requests-limit` to each update configuration in Dependabot files, and replaces an existing value when it differs. The option caps the number of version update pull requests Dependabot keeps open; setting it to `0` temporarily disables version updates for that `package-ecosystem`. Security update pull requests are not subject to this limit and do not count towards it. [The available configuration options for dependabot are listed on GitHub](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/dependabot-options-reference#open-pull-requests-limit)._

### Tags

* [github](/reference/recipes-by-tag#github)
* [dependabot](/reference/recipes-by-tag#dependabot)
* [dependencies](/reference/recipes-by-tag#dependencies)

## Recipe source

[GitHub: AddDependabotOpenPullRequestsLimit.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/AddDependabotOpenPullRequestsLimit.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Integer` | openPullRequestsLimit | The maximum number of version update pull requests Dependabot keeps open for an update configuration. Set to `0` to temporarily disable version updates for the matched entries. Security update pull requests are not subject to this limit. | `5` |
| `String` | packageEcosystem | *Optional*. Restrict the change to a single `package-ecosystem`, for example `gradle`. When omitted, every update configuration is changed. | `gradle` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|openPullRequestsLimit|`10`|
|packageEcosystem|`null`|


<Tabs groupId="beforeAfter">
<TabItem value=".github/dependabot.yml" label=".github/dependabot.yml">


###### Before
```yaml title=".github/dependabot.yml"
version: 2
updates:
  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: daily
  - package-ecosystem: gradle
    directory: /
    schedule:
      interval: weekly
```

###### After
```yaml title=".github/dependabot.yml"
version: 2
updates:
  - package-ecosystem: github-actions
    directory: /
    schedule:
      interval: daily
    open-pull-requests-limit: 10
  - package-ecosystem: gradle
    directory: /
    schedule:
      interval: weekly
    open-pull-requests-limit: 10
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/dependabot.yml
+++ .github/dependabot.yml
@@ -7,0 +7,1 @@
    schedule:
      interval: daily
+   open-pull-requests-limit: 10
  - package-ecosystem: gradle
@@ -11,0 +12,1 @@
    schedule:
      interval: weekly
+   open-pull-requests-limit: 10

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDependabotOpenPullRequestsLimitExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDependabotOpenPullRequestsLimitExample
displayName: Add `open-pull-requests-limit` to Dependabot configuration example
recipeList:
  - org.openrewrite.github.AddDependabotOpenPullRequestsLimit:
      openPullRequestsLimit: 5
      packageEcosystem: gradle
```

<RunRecipe
  recipeName="org.openrewrite.github.AddDependabotOpenPullRequestsLimit"
  displayName="Add `open-pull-requests-limit` to Dependabot configuration"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  requiresConfiguration
  cliOptions={' --recipe-option "openPullRequestsLimit=5" --recipe-option "packageEcosystem=gradle"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.AddDependabotOpenPullRequestsLimit" />

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
