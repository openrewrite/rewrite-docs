---
sidebar_label: "Remove npm dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove npm dependency

**org.openrewrite.javascript.dependencies.remove-dependency**

_Removes a dependency from `package.json` and updates the lock file by running the package manager._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.dependencies.remove-dependency](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.dependencies.remove-dependency),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | packageName | The name of the npm package to remove (e.g., `lodash`, `@types/node`) | `lodash` |
| `null` | scope | *Optional*. The dependency scope to remove from. If not specified, the dependency is removed from all scopes where it is found. | `dependencies` |


## Used by

This recipe is used as part of the following composite recipes:

* [Replace `node-sass` with `sass`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/migration/replace-node-sass-with-sass)
* [Upgrade to Angular 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8)


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.dependencies.remove-dependency"
  displayName="Remove npm dependency"
  npmPackage="@openrewrite/rewrite"
/>
