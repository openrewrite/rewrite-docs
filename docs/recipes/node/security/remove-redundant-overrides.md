---
sidebar_label: "Remove redundant dependency overrides"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove redundant dependency overrides

**org.openrewrite.node.security.remove-redundant-overrides**

_Removes overrides/resolutions from package.json that are redundant because the dependency tree already resolves to the overridden version or higher._

## Recipe source

[GitHub: rewrite+org.openrewrite.node.security.remove-redundant-overrides](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.security.remove-redundant-overrides),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | dryRun | *Optional*. If true, only report which overrides are redundant without removing them. | `true` |


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.node.security.remove-redundant-overrides
```
