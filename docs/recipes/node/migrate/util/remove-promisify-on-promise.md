---
sidebar_label: "Remove unnecessary `util.promisify()` on Promise-returning functions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove unnecessary `util.promisify()` on Promise-returning functions

**org.openrewrite.node.migrate.util.remove-promisify-on-promise**

_Removes `util.promisify()` calls on functions that already return a Promise. Since Node.js v17.0.0, calling promisify on a function that returns a Promise emits a runtime deprecation warning (DEP0174)._

### Tags

* [DEP0174](/reference/recipes-by-tag#dep0174)

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.util.remove-promisify-on-promise](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.util.remove-promisify-on-promise),
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
mod run . --recipe org.openrewrite.node.migrate.util.remove-promisify-on-promise
```
