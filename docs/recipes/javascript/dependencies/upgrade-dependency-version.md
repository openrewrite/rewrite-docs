---
sidebar_label: "Upgrade npm dependency version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade npm dependency version

**org.openrewrite.javascript.dependencies.upgrade-dependency-version**

_Upgrades the version of a direct dependency in `package.json` and updates the lock file by running the package manager. Either `packageName` or `packagePattern` must be specified._

## Recipe source

[GitHub: rewrite+org.openrewrite.javascript.dependencies.upgrade-dependency-version](https://github.com/search?type=code&q=repo:openrewrite/rewrite+org.openrewrite.javascript.dependencies.upgrade-dependency-version),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `null` | packageName | *Optional*. The exact name of the npm package to upgrade (e.g., `lodash`, `@types/node`). Either this or `packagePattern` must be specified. | `lodash` |
| `null` | packagePattern | *Optional*. A glob expression to match package names (e.g., `@angular/*`, `@types/*`). Either this or `packageName` must be specified. | `@angular/*` |
| `null` | newVersion | The version constraint to set (e.g., `^5.0.0`, `~2.1.0`, `3.0.0`) | `^5.0.0` |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Angular 10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular10)
* [Upgrade to Angular 11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular11)
* [Upgrade to Angular 12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular12)
* [Upgrade to Angular 13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular13)
* [Upgrade to Angular 14](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular14)
* [Upgrade to Angular 15](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular15)
* [Upgrade to Angular 16](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular16)
* [Upgrade to Angular 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular17)
* [Upgrade to Angular 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular18)
* [Upgrade to Angular 19](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular19)
* [Upgrade to Angular 20](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular20)
* [Upgrade to Angular 21](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular21)
* [Upgrade to Angular 8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular8)
* [Upgrade to Angular 9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/upgradetoangular9)


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.dependencies.upgrade-dependency-version"
  displayName="Upgrade npm dependency version"
  npmPackage="@openrewrite/rewrite"
/>
