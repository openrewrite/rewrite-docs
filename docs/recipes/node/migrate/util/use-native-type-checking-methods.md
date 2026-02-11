---
sidebar_label: "Replace deprecated `util.isX()` methods with native JavaScript"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated `util.isX()` methods with native JavaScript

**org.openrewrite.node.migrate.util.use-native-type-checking-methods**

_The `util` module's type-checking methods have been removed in Node 22._

### Tags

* [DEP0052](/reference/recipes-by-tag#dep0052)
* [DEP0053](/reference/recipes-by-tag#dep0053)
* [DEP0054](/reference/recipes-by-tag#dep0054)
* [DEP0044](/reference/recipes-by-tag#dep0044)
* [DEP0055](/reference/recipes-by-tag#dep0055)
* [DEP0050](/reference/recipes-by-tag#dep0050)
* [DEP0051](/reference/recipes-by-tag#dep0051)
* [DEP0049](/reference/recipes-by-tag#dep0049)
* [DEP0045](/reference/recipes-by-tag#dep0045)
* [DEP0056](/reference/recipes-by-tag#dep0056)
* [DEP0046](/reference/recipes-by-tag#dep0046)
* [DEP0057](/reference/recipes-by-tag#dep0057)
* [DEP0047](/reference/recipes-by-tag#dep0047)
* [DEP0058](/reference/recipes-by-tag#dep0058)
* [DEP0048](/reference/recipes-by-tag#dep0048)

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.util.use-native-type-checking-methods](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.util.use-native-type-checking-methods),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/node/migrate/upgrade-node-22)


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.util.use-native-type-checking-methods
```
