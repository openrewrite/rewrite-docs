---
title: "Add npm dependency"
sidebar_label: "Add npm dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add npm dependency

**org.openrewrite.javascript.AddDependency**

_Add an npm dependency to `package.json` and regenerate the lock file by running the package manager. If the dependency already exists in any scope, the recipe is a no-op. Not safe to use as a precondition: invokes the package manager and publishes per-project state shared with other dependency recipes._

## Recipe source

[GitHub: AddDependency.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-javascript/src/main/java/org/openrewrite/javascript/AddDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | packageName | The name of the npm package to add (e.g., `lodash`, `@types/node`). | `lodash` |
| `String` | version | The version constraint to set (e.g., `^5.0.0`, `~2.1.0`, `3.0.0`). | `^5.0.0` |
| `String` | scope | *Optional*. The dependency scope: `dependencies`, `devDependencies`, `peerDependencies`, or `optionalDependencies`. Defaults to `dependencies`. Valid options: `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies` | `dependencies` |


## Used by

This recipe is used as part of the following composite recipes:

* [Replace `node-sass` with `sass`](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/angular/migration/replace-node-sass-with-sass)
* [Upgrade to PrimeNG 18](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/primeng/upgradeto18)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDependencyExample
displayName: Add npm dependency example
recipeList:
  - org.openrewrite.javascript.AddDependency:
      packageName: lodash
      version: ^5.0.0
      scope: dependencies
```

<RunRecipe
  recipeName="org.openrewrite.javascript.AddDependency"
  displayName="Add npm dependency"
  groupId="org.openrewrite"
  artifactId="rewrite-javascript"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "packageName=lodash" --recipe-option "version=^5.0.0" --recipe-option "scope=dependencies"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.javascript.AddDependency" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
