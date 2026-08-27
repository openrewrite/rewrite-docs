---
title: "Replace Dependabot `reviewers` with `CODEOWNERS`"
sidebar_label: "Replace Dependabot `reviewers` with `CODEOWNERS`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace Dependabot `reviewers` with `CODEOWNERS`

**org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners**

_Replaces the [removed](https://github.blog/changelog/2025-04-29-dependabot-reviewers-configuration-option-being-replaced-by-code-owners/) `reviewers` option in `.github/dependabot.yml` with equivalent `CODEOWNERS` entries. Each reviewer is mapped onto the manifest files Dependabot updates for that `package-ecosystem` and `directory`, so ownership stays as narrow as the Dependabot configuration was. Update entries whose `package-ecosystem` has no known manifests are left untouched._

### Tags

* [dependabot](/reference/recipes-by-tag#dependabot)
* [dependencies](/reference/recipes-by-tag#dependencies)
* [github](/reference/recipes-by-tag#github)

## Recipe source

[GitHub: ReplaceDependabotReviewersWithCodeowners.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/ReplaceDependabotReviewersWithCodeowners.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | codeownersPath | *Optional*. Where to write the migrated reviewers when the repository does not have a `CODEOWNERS` file yet. Defaults to `.github/CODEOWNERS`. When a `CODEOWNERS` file already exists in any of the locations GitHub recognizes, that file is appended to instead and this option is ignored. | `CODEOWNERS` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|codeownersPath|`null`|


<Tabs groupId="beforeAfter">
<TabItem value=".github/dependabot.yml" label=".github/dependabot.yml">


###### Before
```yaml title=".github/dependabot.yml"
version: 2
updates:
  - package-ecosystem: maven
    directory: /
    schedule:
      interval: weekly
    reviewers:
      - acme/backend
  - package-ecosystem: npm
    directory: /frontend
    schedule:
      interval: weekly
    reviewers:
      - acme/frontend
```

###### After
```yaml title=".github/dependabot.yml"
version: 2
updates:
  - package-ecosystem: maven
    directory: /
    schedule:
      interval: weekly
  - package-ecosystem: npm
    directory: /frontend
    schedule:
      interval: weekly
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/dependabot.yml
+++ .github/dependabot.yml
@@ -7,2 +7,0 @@
    schedule:
      interval: weekly
-   reviewers:
-     - acme/backend
  - package-ecosystem: npm
@@ -13,2 +11,0 @@
    schedule:
      interval: weekly
-   reviewers:
-     - acme/frontend

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners"
  displayName="Replace Dependabot `reviewers` with `CODEOWNERS`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.ReplaceDependabotReviewersWithCodeowners" />

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
