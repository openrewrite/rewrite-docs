---
sidebar_label: "Use object property shorthand"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use object property shorthand

**org.openrewrite.javascript.cleanup.use-object-property-shorthand**

_Simplifies object properties where the property name and value/variable name are the same (e.g., `{ x: x }` becomes `{ x }`). Applies to both destructuring patterns and object literals._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.cleanup.use-object-property-shorthand](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.use-object-property-shorthand),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.cleanup.use-object-property-shorthand"
  displayName="Use object property shorthand"
  npmPackage="@openrewrite/rewrite"
/>
