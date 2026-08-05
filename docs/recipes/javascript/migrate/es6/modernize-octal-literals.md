---
title: "Modernize octal literals"
sidebar_label: "Modernize octal literals"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Modernize octal literals

**org.openrewrite.javascript.migrate.es6.modernize-octal-literals**

_Convert old-style octal literals (e.g., `0777`) to modern ES6 syntax (e.g., `0o777`)._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.migrate.es6.modernize-octal-literals](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.migrate.es6.modernize-octal-literals),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.migrate.es6.modernize-octal-literals"
  displayName="Modernize octal literals"
  npmPackage="@openrewrite/rewrite"
/>
