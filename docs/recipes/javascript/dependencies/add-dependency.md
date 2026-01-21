---
sidebar_label: "Add npm dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add npm dependency

**org.openrewrite.javascript.dependencies.add-dependency**

_Adds a new dependency to `package.json` and updates the lock file by running the package manager._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.dependencies.add-dependency](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.dependencies.add-dependency),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | packageName | The name of the npm package to add (e.g., `lodash`, `@types/node`) | `lodash` |
| `null` | version | The version constraint to set (e.g., `^5.0.0`, `~2.1.0`, `3.0.0`) | `^5.0.0` |
| `null` | scope | *Optional*. The dependency scope: `dependencies`, `devDependencies`, `peerDependencies`, or `optionalDependencies` | `dependencies` |


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.javascript.dependencies.add-dependency
```
