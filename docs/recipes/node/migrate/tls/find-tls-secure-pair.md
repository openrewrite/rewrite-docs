---
sidebar_label: "Find deprecated `tls.SecurePair` and `tls.createSecurePair()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `tls.SecurePair` and `tls.createSecurePair()` usage

**org.openrewrite.node.migrate.tls.find-tls-secure-pair**

_`tls.SecurePair` (DEP0043) and `tls.createSecurePair()` (DEP0064) were deprecated and removed in Node.js 24. Use `tls.TLSSocket` instead._

### Tags

* [DEP0064](/reference/recipes-by-tag#dep0064)
* [DEP0043](/reference/recipes-by-tag#dep0043)

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.tls.find-tls-secure-pair](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.tls.find-tls-secure-pair),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


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
mod run . --recipe org.openrewrite.node.migrate.tls.find-tls-secure-pair
```
