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
* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)
* [Replace deprecated `util.log()` with `console.log()`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/util/replace-util-log)
* [Replace deprecated `zlib.bytesRead` with `zlib.bytesWritten`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/zlib/replace-bytes-read)
* [Replace `OutgoingMessage._headers` and `._headerNames` with public methods](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/http/replace-outgoing-message-headers)
* [Replace `fs.truncate()` with file descriptor to `fs.ftruncate()`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/fs/replace-fs-truncate-fd)
* [Replace `dirent.path` with `dirent.parentPath`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/fs/replace-dirent-path)
* [Replace deprecated `crypto.fips` with `crypto.getFips()` and `crypto.setFips()`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/crypto/replace-crypto-fips)

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
