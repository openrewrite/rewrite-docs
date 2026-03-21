---
sidebar_label: "Find manual credentials instead of trusted publishing"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find manual credentials instead of trusted publishing

**org.openrewrite.github.security.TrustedPublishingRecipe**

_Find workflows that use manual credentials for publishing instead of OIDC trusted publishing. Trusted publishing eliminates the need for long-lived API tokens and provides better security through short-lived, automatically-rotated tokens. Based on [zizmor's use-trusted-publishing audit](https://github.com/woodruffw/zizmor/blob/main/crates/zizmor/src/audit/use_trusted_publishing.rs)._

## Recipe source

[GitHub: TrustedPublishing.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/security/TrustedPublishing.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [GitHub Actions security insights](/recipes/github/security/githubactionssecurity.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value=".github/workflows/publish.yml" label=".github/workflows/publish.yml">


###### Before
```yaml title=".github/workflows/publish.yml"
name: Publish to PyPI
on: push
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: pypa/gh-action-pypi-publish@v1.5.0
        with:
          password: ${{ secrets.PYPI_API_TOKEN }}
          repository-url: https://upload.pypi.org/legacy/
```

###### After
```yaml title=".github/workflows/publish.yml"
name: Publish to PyPI
on: push
jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - ~~(Uses manual credentials instead of trusted publishing. Consider using OIDC trusted publishing for better security.)~~>uses: pypa/gh-action-pypi-publish@v1.5.0
        with:
          ~~(Manual credential used here)~~>password: ${{ secrets.PYPI_API_TOKEN }}
          repository-url: https://upload.pypi.org/legacy/
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/workflows/publish.yml
+++ .github/workflows/publish.yml
@@ -7,1 +7,1 @@
    runs-on: ubuntu-latest
    steps:
-     - uses: pypa/gh-action-pypi-publish@v1.5.0
+     - ~~(Uses manual credentials instead of trusted publishing. Consider using OIDC trusted publishing for better security.)~~>uses: pypa/gh-action-pypi-publish@v1.5.0
        with:
@@ -9,1 +9,1 @@
      - uses: pypa/gh-action-pypi-publish@v1.5.0
        with:
-         password: ${{ secrets.PYPI_API_TOKEN }}
+         ~~(Manual credential used here)~~>password: ${{ secrets.PYPI_API_TOKEN }}
          repository-url: https://upload.pypi.org/legacy/
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.security.TrustedPublishingRecipe"
  displayName="Find manual credentials instead of trusted publishing"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.security.TrustedPublishingRecipe" />

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
