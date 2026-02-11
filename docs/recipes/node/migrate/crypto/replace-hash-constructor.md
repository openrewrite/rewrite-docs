---
sidebar_label: "Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated `new crypto.Hash()` and `new crypto.Hmac()` with factory methods

**org.openrewrite.node.migrate.crypto.replace-hash-constructor**

_Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods._

### Tags

* [DEP0179](/reference/recipes-by-tag#dep0179)
* [DEP0181](/reference/recipes-by-tag#dep0181)

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.crypto.replace-hash-constructor](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.crypto.replace-hash-constructor),
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
mod run . --recipe org.openrewrite.node.migrate.crypto.replace-hash-constructor
```
