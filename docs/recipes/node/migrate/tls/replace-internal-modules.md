---
sidebar_label: "Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace deprecated `node:_tls_common` and `node:_tls_wrap` with `node:tls`

**org.openrewrite.node.migrate.tls.replace-internal-modules**

_Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module._

### Tags

* [DEP0192](/reference/recipes-by-tag#dep0192)

## Recipe source

[GitHub](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.node.migrate.tls.replace-internal-modules),
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
mod run . --recipe org.openrewrite.node.migrate.tls.replace-internal-modules
```
