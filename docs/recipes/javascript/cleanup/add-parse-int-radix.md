---
sidebar_label: "Add radix to `parseInt`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Add radix to `parseInt`

**org.openrewrite.javascript.cleanup.add-parse-int-radix**

_Adds the radix parameter (base 10) to `parseInt()` calls that are missing it, preventing potential parsing issues._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.cleanup.add-parse-int-radix](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.add-parse-int-radix),
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
mod run . --recipe org.openrewrite.javascript.cleanup.add-parse-int-radix
```
