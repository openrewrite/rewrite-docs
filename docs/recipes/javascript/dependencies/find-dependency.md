---
sidebar_label: "Find Node.js dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Node.js dependency

**org.openrewrite.javascript.dependencies.find-dependency**

_Finds dependencies in a project's `package.json`. Can find both direct dependencies and dependencies that transitively include the target package. This recipe is commonly used as a precondition for other recipes._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.dependencies.find-dependency](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.dependencies.find-dependency),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | packageName | The name of the npm package to find. Supports glob patterns. | `lodash` |
| `null` | version | *Optional*. An exact version number or semver selector used to select the version number. Leave empty to match any version. | `^18.0.0` |
| `null` | onlyDirect | *Optional*. If true (default), only matches dependencies that directly match the package name. If false, also marks direct dependencies that have the target package as a transitive dependency. | `true` |


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.dependencies.find-dependency"
  displayName="Find Node.js dependency"
  npmPackage="@openrewrite/rewrite"
/>
