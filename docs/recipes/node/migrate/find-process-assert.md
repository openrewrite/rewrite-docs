---
sidebar_label: "Find deprecated `process.assert()` usage"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find deprecated `process.assert()` usage

**org.openrewrite.node.migrate.find-process-assert**

_`process.assert()` was deprecated in Node.js 10 (DEP0100) and removed in Node.js 23. Use the `assert` module instead._

### Tags

* [DEP0100](/reference/recipes-by-tag#dep0100)

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.find-process-assert](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.find-process-assert),
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
mod run . --recipe org.openrewrite.node.migrate.find-process-assert
```
