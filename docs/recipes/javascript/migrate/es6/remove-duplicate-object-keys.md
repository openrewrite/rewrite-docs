---
title: "Remove duplicate object keys"
sidebar_label: "Remove duplicate object keys"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove duplicate object keys

**org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys**

_Remove duplicate keys in object literals, keeping only the last occurrence (last-wins semantics)._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys"
  displayName="Remove duplicate object keys"
  npmPackage="@openrewrite/rewrite"
/>
