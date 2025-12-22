---
sidebar_label: "Coerce `process.exit()` and `process.exitCode` to integer"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Coerce `process.exit()` and `process.exitCode` to integer

**org.openrewrite.node.migrate.process.coerce-process-exit-code**

_Wraps non-integer values passed to `process.exit()` or assigned to `process.exitCode` with `Math.trunc()` to avoid the DEP0164 deprecation warning about implicit coercion to integer._

### Tags

* [DEP0164](/reference/recipes-by-tag#dep0164)

## Recipe source

[GitHub](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.process.coerce-process-exit-code),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Node.js 22](/recipes/node/migrate/upgrade-node-22.md)


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.process.coerce-process-exit-code
```
