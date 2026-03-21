---
sidebar_label: "Modernize octal escape sequences"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

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

<RunRecipe
  recipeName="org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences"
  displayName="Modernize octal escape sequences"
  npmPackage="@openrewrite/rewrite"
/>
