---
sidebar_label: "Upgrade to Node.js 22"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Node.js 22

**org.openrewrite.node.migrate.upgrade-node-22**

_Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions._

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.upgrade-node-22](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.upgrade-node-22),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace deprecated `util.types.isWebAssemblyCompiledModule()`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/util/replace-is-webassembly-compiled-module)
* [Replace deprecated `util.isX()` methods with native JavaScript](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/util/use-native-type-checking-methods)
* [Replace deprecated `util._extend()` with `Object.assign()`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/util/replace-util-extend)
* [Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/crypto/replace-hash-constructor)
* [Coerce `process.exit()` and `process.exitCode` to integer](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/process/coerce-process-exit-code)
* [Replace deprecated `Buffer.slice()` with `Buffer.subarray()`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/buffer/replace-deprecated-slice)
* [Remove usage of deprecated `process.features.tls_*` properties](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/process/remove-usage-of-features-tls-underscore_constants)
* [Remove unnecessary `util.promisify()` on Promise-returning functions](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/util/remove-promisify-on-promise)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.node.migrate.upgrade-node-22
displayName: Upgrade to Node.js 22
description: |
  Migrate deprecated APIs for Node.js 22 compatibility. Addresses Node 22 runtime deprecations and deprecations from earlier versions.
recipeList:
  - org.openrewrite.node.migrate.util.replace-is-webassembly-compiled-module
  - org.openrewrite.node.migrate.util.use-native-type-checking-methods
  - org.openrewrite.node.migrate.util.replace-util-extend
  - org.openrewrite.node.migrate.crypto.replace-hash-constructor
  - org.openrewrite.node.migrate.process.coerce-process-exit-code
  - org.openrewrite.node.migrate.buffer.replace-deprecated-slice
  - org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants
  - org.openrewrite.node.migrate.util.remove-promisify-on-promise

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 24](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-24)


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.upgrade-node-22
```
