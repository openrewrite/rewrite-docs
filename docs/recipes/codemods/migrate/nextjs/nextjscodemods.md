---
sidebar_label: "Next.js Codemods for API Updates"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Next.js Codemods for API Updates

**org.openrewrite.codemods.migrate.nextjs.NextJsCodemods**

_Next.js provides Codemod transformations to help upgrade your [Next.js](https://nextjs.org/) codebase when an API is updated or deprecated._

### Tags

* [nextjs](/reference/recipes-by-tag#nextjs)
* [codemods](/reference/recipes-by-tag#codemods)

## Recipe source

[GitHub: nextjs.yml](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/resources/META-INF/rewrite/nextjs.yml),
[Issue Tracker](https://github.com/moderneinc/rewrite-codemods/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use `withRouter`](../../../codemods/migrate/nextjs/v6/urltowithrouter)
* [Transform AMP HOC into page config](../../../codemods/migrate/nextjs/v8/withamptoconfig)
* [Transform Anonymous Components into Named Components](../../../codemods/migrate/nextjs/v9/namedefaultcomponent)
* [Add React imports](../../../codemods/migrate/nextjs/v10/addmissingreactimport)
* [Rename Next Image Imports](../../../codemods/migrate/nextjs/v11/cratonext)
* [Rename Next Image Imports](../../../codemods/migrate/nextjs/v13_0/nextimagetolegacyimage)
* [Migrate to the New Image Component](../../../codemods/migrate/nextjs/v13_0/nextimageexperimental)
* [Remove `&lt;a&gt;` Tags From Link Components](../../../codemods/migrate/nextjs/v13_0/newlink)
* [Use Built-in Font](../../../codemods/migrate/nextjs/v13_2/builtinnextfont)
* [Migrate `ImageResponse` imports](../../../codemods/migrate/nextjs/v14_0/nextogimport)
* [Use `viewport` export](../../../codemods/migrate/nextjs/v14_0/metadatatoviewportexport)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.codemods.migrate.nextjs.NextJsCodemods
displayName: Next.js Codemods for API Updates
description: |
  Next.js provides Codemod transformations to help upgrade your [Next.js](https://nextjs.org/) codebase when an API is updated or deprecated.
tags:
  - nextjs
  - codemods
recipeList:
  - org.openrewrite.codemods.migrate.nextjs.v6.UrlToWithrouter
  - org.openrewrite.codemods.migrate.nextjs.v8.WithampToConfig
  - org.openrewrite.codemods.migrate.nextjs.v9.NameDefaultComponent
  - org.openrewrite.codemods.migrate.nextjs.v10.AddMissingReactImport
  - org.openrewrite.codemods.migrate.nextjs.v11.CraToNext
  - org.openrewrite.codemods.migrate.nextjs.v13_0.NextImageToLegacyImage
  - org.openrewrite.codemods.migrate.nextjs.v13_0.NextImageExperimental
  - org.openrewrite.codemods.migrate.nextjs.v13_0.NewLink
  - org.openrewrite.codemods.migrate.nextjs.v13_2.BuiltInNextFont
  - org.openrewrite.codemods.migrate.nextjs.v14_0.NextOgImport
  - org.openrewrite.codemods.migrate.nextjs.v14_0.MetadataToViewportExport

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.codemods.migrate.nextjs.NextJsCodemods"
  displayName="Next.js Codemods for API Updates"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-codemods"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.migrate.nextjs.NextJsCodemods" />

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
