---
sidebar_label: "Find Node.js dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find Node.js dependency

**org.openrewrite.javascript.dependencies.find-dependency**

_Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.dependencies.find-dependency](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.dependencies.find-dependency),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | packageName | The name of the npm package to find. Supports glob patterns. | `lodash` |
| `null` | version | *Optional*. An exact version number or semver selector used to select the version number. Leave empty to match any version. | `^18.0.0` |
| `null` | onlyDirect | *Optional*. If true (default), only matches dependencies that directly match the package name. If false, also marks direct dependencies that have the target package as a transitive dependency. | `true` |


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.javascript.dependencies.find-dependency
```
