---
sidebar_label: "Add radix to `parseInt`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add radix to `parseInt`

**org.openrewrite.javascript.cleanup.add-parse-int-radix**

_Adds the radix parameter (base 10) to `parseInt()` calls that are missing it, preventing potential parsing issues._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.cleanup.add-parse-int-radix](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.add-parse-int-radix),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.cleanup.add-parse-int-radix"
  displayName="Add radix to `parseInt`"
  npmPackage="@openrewrite/rewrite"
/>
