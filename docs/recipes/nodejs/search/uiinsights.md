---
sidebar_label: "Javascript UI library insights"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Javascript UI library insights

**org.openrewrite.nodejs.search.UIInsights**

_Discover which popular javascript UI libraries (React, Vue.js, Angular, etc.) are being used in your projects._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-nodejs/blob/main/src/main/resources/META-INF/rewrite/insights.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-nodejs/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-nodejs/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `react`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `vue`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@angular/core`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `svelte`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `next`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `gatsby`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `three`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `preact`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `alpinejs`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `mithril`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `ember-source`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `backbone`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `aurelia-framework`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@polymer/polymer`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `riot`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `inferno`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@stencil/core`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `hyperapp`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `marko`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `lit`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `@quasar/extras`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `electron`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `meteor`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `nuxt`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `jquery`
  * onlyDirect: `false`
* [Node.js dependency insight](../../nodejs/search/dependencyinsight)
  * namePattern: `astro`
  * onlyDirect: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.nodejs.search.UIInsights
displayName: Javascript UI library insights
description: Discover which popular javascript UI libraries (React, Vue.js, Angular, etc.) are being used in your projects.
recipeList:
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: react
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: vue
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @angular/core
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: svelte
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: next
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: gatsby
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: three
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: preact
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: alpinejs
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: mithril
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: ember-source
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: backbone
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: aurelia-framework
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @polymer/polymer
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: riot
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: inferno
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @stencil/core
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: hyperapp
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: marko
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: lit
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: @quasar/extras
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: electron
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: meteor
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: nuxt
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: jquery
      onlyDirect: false
  - org.openrewrite.nodejs.search.DependencyInsight:
      namePattern: astro
      onlyDirect: false

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-nodejs:{{VERSION_REWRITE_NODEJS}}` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">


<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UIInsights
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-nodejs:{{VERSION_REWRITE_NODEJS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.nodejs.search.UIInsights" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

