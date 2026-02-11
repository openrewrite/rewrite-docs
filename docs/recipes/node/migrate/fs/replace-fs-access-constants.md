---
sidebar_label: "Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated `fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK` with `fs.constants.*`

**org.openrewrite.node.migrate.fs.replace-fs-access-constants**

_Replace deprecated file access constants (`fs.F_OK`, `fs.R_OK`, `fs.W_OK`, `fs.X_OK`) with their equivalents from `fs.constants`. These constants were removed in Node.js v24+ and should be accessed through the constants namespace._

### Tags

* [DEP0176](/reference/recipes-by-tag#dep0176)

## Recipe source

[GitHub: rewrite+org.openrewrite.node.migrate.fs.replace-fs-access-constants](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.fs.replace-fs-access-constants),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.migrate.fs.replace-fs-access-constants
```
