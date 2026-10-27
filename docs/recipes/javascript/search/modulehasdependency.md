---
title: "Module has dependency"
sidebar_label: "Module has dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Module has dependency

**org.openrewrite.javascript.search.ModuleHasDependency**

_Searches for Node.js packages that have an npm dependency matching the specified package name. Places a `SearchResult` marker on all sources within a package with a matching dependency. A source belongs to the `package.json` in its nearest enclosing directory, so each member of a workspace is its own module. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a migration to only packages that use a specific version of a library. If the search result you want is instead just the dependency entry in `package.json`, use the `DependencyInsight` recipe instead._

## Recipe source

[GitHub: ModuleHasDependency.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-javascript/src/main/java/org/openrewrite/javascript/search/ModuleHasDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-javascript/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | packageNamePattern | A glob pattern to match npm package names. Use `*` as a wildcard. | `@angular/*` |
| `String` | scope | *Optional*. Match dependencies declared in the specified scope. All scopes are searched by default. Valid options: `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies`, `bundledDependencies` | `dependencies` |
| `String` | version | *Optional*. Match only dependencies whose installed version satisfies this npm semver range. When a dependency is not resolved from a lock file, the lowest version its constraint admits is used. All versions are searched by default. | `^17.0.0` |
| `Boolean` | onlyDirect | *Optional*. If enabled, transitive dependencies will not be considered. All dependencies are searched by default. | `true` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ModuleHasDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ModuleHasDependencyExample
displayName: Module has dependency example
recipeList:
  - org.openrewrite.javascript.search.ModuleHasDependency:
      packageNamePattern: '@angular/*'
      scope: dependencies
      version: ^17.0.0
      onlyDirect: true
```

<RunRecipe
  recipeName="org.openrewrite.javascript.search.ModuleHasDependency"
  displayName="Module has dependency"
  groupId="org.openrewrite"
  artifactId="rewrite-javascript"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_JAVASCRIPT"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "packageNamePattern=\'@angular/*\'"'}
  optionalCliOptions={' --recipe-option "scope=dependencies" --recipe-option "version=^17.0.0" --recipe-option "onlyDirect=true"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.javascript.search.ModuleHasDependency" />

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
