---
sidebar_label: "Detect async callbacks in synchronous array methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

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

[GitHub: rewrite+org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method"
  displayName="Detect async callbacks in synchronous array methods"
  npmPackage="@openrewrite/rewrite"
/>
