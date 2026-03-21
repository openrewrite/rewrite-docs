---
sidebar_label: "Convert `export =` to `export default`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Convert `export =` to `export default`

**org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default**

_Converts TypeScript `export =` syntax to ES module `export default` syntax for compatibility with ECMAScript modules._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default"
  displayName="Convert `export =` to `export default`"
  npmPackage="@openrewrite/rewrite"
/>
