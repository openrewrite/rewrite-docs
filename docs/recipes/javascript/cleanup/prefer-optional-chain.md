---
sidebar_label: "Prefer optional chaining"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Prefer optional chaining

**org.openrewrite.javascript.cleanup.prefer-optional-chain**

_Converts ternary expressions like `foo ? foo.bar : undefined` to use optional chaining syntax `foo?.bar`._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.cleanup.prefer-optional-chain](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.cleanup.prefer-optional-chain),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.cleanup.prefer-optional-chain"
  displayName="Prefer optional chaining"
  npmPackage="@openrewrite/rewrite"
/>
