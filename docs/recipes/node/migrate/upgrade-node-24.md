---
sidebar_label: "Upgrade to Node.js 24"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Node.js 24

**org.openrewrite.node.migrate.upgrade-node-24**

_Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations._

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.upgrade-node-24](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.upgrade-node-24),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to Node.js 22](../../node/migrate/upgrade-node-22)
* [Replace deprecated `util.log()` with `console.log()`](../../node/migrate/util/replace-util-log)
* [Replace deprecated `zlib.bytesRead` with `zlib.bytesWritten`](../../node/migrate/zlib/replace-bytes-read)
* [Replace `OutgoingMessage._headers` and `._headerNames` with public methods](../../node/migrate/http/replace-outgoing-message-headers)
* [Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`](../../node/migrate/fs/replace-fs-truncate-fd)
* [Replace `dirent.path` with `dirent.parentPath`](../../node/migrate/fs/replace-dirent-path)
* [Replace deprecated `crypto.fips` with `crypto.getFips()` and `crypto.setFips()`](../../node/migrate/crypto/replace-crypto-fips)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.node.migrate.upgrade-node-24
displayName: Upgrade to Node.js 24
description: |
  Migrate deprecated APIs for Node.js 24 compatibility. Includes all migrations from Node.js 22, plus Node 23 and Node 24 deprecations.
recipeList:
  - org.openrewrite.node.migrate.upgrade-node-22
  - org.openrewrite.node.migrate.util.replace-util-log
  - org.openrewrite.node.migrate.zlib.replace-bytes-read
  - org.openrewrite.node.migrate.http.replace-outgoing-message-headers
  - org.openrewrite.node.migrate.fs.replace-fs-truncate-fd
  - org.openrewrite.node.migrate.fs.replace-dirent-path
  - org.openrewrite.node.migrate.crypto.replace-crypto-fips

```
</TabItem>
</Tabs>

## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.upgrade-node-24
```
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
