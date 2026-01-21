---
sidebar_label: "Detect async callbacks in synchronous array methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Detect async callbacks in synchronous array methods

**org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method**

_Detects async callbacks passed to array methods like .some(), .every(), .filter() which don't await promises. This is a common bug where Promise objects are always truthy._

### Tags

* [async](/reference/recipes-by-tag#async)
* [bug](/reference/recipes-by-tag#bug)
* [cleanup](/reference/recipes-by-tag#cleanup)
* [typescript](/reference/recipes-by-tag#typescript)
* [javascript](/reference/recipes-by-tag#javascript)

## Recipe source

[GitHub: org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method),
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
mod run . --recipe org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method
```
