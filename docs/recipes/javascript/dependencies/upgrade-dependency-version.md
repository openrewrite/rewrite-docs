---
title: "Upgrade npm dependency version"
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


## Usage

<RunRecipe
  recipeName="org.openrewrite.javascript.dependencies.upgrade-dependency-version"
  displayName="Upgrade npm dependency version"
  npmPackage="@openrewrite/rewrite"
/>
