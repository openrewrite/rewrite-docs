---
sidebar_label: "Order imports"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Order imports

**org.openrewrite.javascript.cleanup.order-imports**

_Sort imports by category and module path. Categories: side-effect, namespace, default, named, type. Within each category, imports are sorted alphabetically by module path. Named specifiers within each import are also sorted alphabetically._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.cleanup.order-imports](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.order-imports),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.cleanup.order-imports"
  displayName="Order imports"
  npmPackage="@openrewrite/rewrite"
/>
