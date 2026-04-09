---
sidebar_label: "Add npm dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add npm dependency

**org.openrewrite.javascript.dependencies.add-dependency**

_Adds a new dependency to `package.json` and updates the lock file by running the package manager._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.dependencies.add-dependency](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.dependencies.add-dependency),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | packageName | The name of the npm package to add (e.g., `lodash`, `@types/node`) | `lodash` |
| `null` | version | The version constraint to set (e.g., `^5.0.0`, `~2.1.0`, `3.0.0`) | `^5.0.0` |
| `null` | scope | *Optional*. The dependency scope: `dependencies`, `devDependencies`, `peerDependencies`, or `optionalDependencies` | `dependencies` |


## Used by

This recipe is used as part of the following composite recipes:

* [Replace `node-sass` with `sass`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/migration/replace-node-sass-with-sass)


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.dependencies.add-dependency"
  displayName="Add npm dependency"
  npmPackage="@openrewrite/rewrite"
/>
