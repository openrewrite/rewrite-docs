---
sidebar_label: "Add cooldown periods to Dependabot configuration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add cooldown periods to Dependabot configuration

**org.openrewrite.github.AddDependabotCooldown**

_Adds a `cooldown` section to each update configuration in Dependabot files. Supports `default-days`, `semver-major-days`, `semver-minor-days`, `semver-patch-days`, `include`, and `exclude` options. This implements a security best practice where dependencies are not immediately adopted upon release, allowing time for security vendors to identify potential supply chain compromises. Cooldown applies only to version updates, not security updates. [Read more about dependency cooldowns](https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns). [The available configuration options for dependabot are listed on GitHub](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates)._

### Tags

* [github](/reference/recipes-by-tag#github)
* [security](/reference/recipes-by-tag#security)
* [dependabot](/reference/recipes-by-tag#dependabot)
* [dependencies](/reference/recipes-by-tag#dependencies)

## Recipe source

[GitHub: AddDependabotCooldown.java](https://github.com/openrewrite/rewrite-github-actions/blob/main/src/main/java/org/openrewrite/github/AddDependabotCooldown.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-github-actions/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-github-actions/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Integer` | cooldownDays | *Optional*. The number of days to wait before considering a published dependency suitable for use (1-90). This delay allows security vendors time to identify potential compromises. Applied to all version types unless specific semver options are set. | `7` |
| `Integer` | semverMajorDays | *Optional*. The number of days to wait for major version updates (1-90). Only applies to package managers that support semantic versioning. | `14` |
| `Integer` | semverMinorDays | *Optional*. The number of days to wait for minor version updates (1-90). Only applies to package managers that support semantic versioning. | `7` |
| `Integer` | semverPatchDays | *Optional*. The number of days to wait for patch version updates (1-90). Only applies to package managers that support semantic versioning. | `3` |
| `List` | include | *Optional*. List of up to 150 dependencies to apply cooldown to. Supports wildcard patterns with `*`. If not specified, cooldown applies to all dependencies. | `lodash, react*` |
| `List` | exclude | *Optional*. List of up to 150 dependencies to exempt from cooldown. Supports wildcard patterns with `*`. Exclude list takes precedence over include list. | `critical-security-package` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|cooldownDays|`null`|
|semverMajorDays|`null`|
|semverMinorDays|`null`|
|semverPatchDays|`null`|
|include|`null`|
|exclude|`null`|


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
  - package-ecosystem: maven
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
    cooldown:
      default-days: 7
  - package-ecosystem: maven
    directory: /
    schedule:
      interval: weekly
    cooldown:
      default-days: 7
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- .github/dependabot.yml
+++ .github/dependabot.yml
@@ -7,0 +7,2 @@
    schedule:
      interval: daily
+   cooldown:
+     default-days: 7
  - package-ecosystem: maven
@@ -11,0 +13,2 @@
    schedule:
      interval: weekly
+   cooldown:
+     default-days: 7

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.github.AddDependabotCooldown"
  displayName="Add cooldown periods to Dependabot configuration"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-github-actions"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_GITHUB_ACTIONS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.github.AddDependabotCooldown" />

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
