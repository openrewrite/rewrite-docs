---
sidebar_label: "Modernize octal escape sequences"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Modernize octal escape sequences

**org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences**

_Convert old-style octal escape sequences (e.g., `\0`, `\123`) to modern hex escape sequences (e.g., `\x00`, `\x53`) or Unicode escape sequences (e.g., `\u0000`, `\u0053`)._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | useUnicodeEscapes | *Optional*. Use Unicode escape sequences (`\uXXXX`) instead of hex escape sequences (`\xXX`). Default is `false`. | `true` |


## Usage

In order to run JavaScript recipes, you will need to use the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro).
For JavaScript specific configuration instructions, please see our [configuring JavaScript guide](https://docs.moderne.io/user-documentation/moderne-cli/how-to-guides/javascript).

Once the CLI is installed, you can install this JavaScript recipe package by running the following command:

```shell title="Install the recipe package"
mod config recipes npm install @openrewrite/rewrite
```

Then, you can run the recipe via:

```shell title="Run the recipe"
mod run . --recipe org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences
```
