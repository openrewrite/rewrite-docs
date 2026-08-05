---
title: "Convert `export =` to `export default`"
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
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default"
  displayName="Convert `export =` to `export default`"
  npmPackage="@openrewrite/rewrite"
/>
