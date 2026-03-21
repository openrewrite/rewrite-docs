---
sidebar_label: "Enforce order of component top-level elements"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Enforce order of component top-level elements

**org.openrewrite.codemods.cleanup.vue.BlockOrder**

_Enforce order of component top-level elements See rule details for [vue/block-order](https://eslint.vuejs.org/rules/block-order.html)._

### Tags

* [ESLint](/reference/recipes-by-tag#eslint)
* [vue](/reference/recipes-by-tag#vue)
* [eslint-plugin-vue](/reference/recipes-by-tag#eslint)

## Recipe source

[GitHub: eslint-plugin-vue.yml](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/resources/META-INF/rewrite/eslint-plugin-vue.yml),
[Issue Tracker](https://github.com/moderneinc/rewrite-codemods/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Lint source code with ESLint](../../../codemods/eslint)
  * fix: `true`
  * configFile: `{   "root": true,   "parser": "vue-eslint-parser",   "parserOptions": {     "parser": "@typescript-eslint/parser",     "ecmaVersion": "2015",     "sourceType": "module",       "ecmaFeatures": {       "jsx": true,       "experimentalObjectRestSpread": true     }   },   "plugins": ["vue"],   "rules": {     "vue/block-order": 2   },   "globals": {     "browser": true,     "node": true   } }. `

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.codemods.cleanup.vue.BlockOrder
displayName: Enforce order of component top-level elements
description: |
  Enforce order of component top-level elements See rule details for [vue/block-order](https://eslint.vuejs.org/rules/block-order.html).
tags:
  - ESLint
  - vue
  - eslint-plugin-vue
recipeList:
  - org.openrewrite.codemods.ESLint:
      fix: true
      configFile: {
  "root": true,
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "@typescript-eslint/parser",
    "ecmaVersion": "2015",
    "sourceType": "module",
      "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": ["vue"],
  "rules": {
    "vue/block-order": 2
  },
  "globals": {
    "browser": true,
    "node": true
  }
}.


```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.codemods.cleanup.vue.BlockOrder"
  displayName="Enforce order of component top-level elements"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-codemods"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.cleanup.vue.BlockOrder" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.codemods.ESLintMessages" label="ESLintMessages">

### ESLint messages
**org.openrewrite.codemods.ESLintMessages**

_Errors and warnings as reported by ESLint._

| Column Name | Description |
| ----------- | ----------- |
| Source Path | The source path of the file. |
| Rule ID | ESLint Rule ID. |
| Severity | Either `Warning` or `Error`. |
| Fatal | Is this a fatal error (like a parse error). |
| Message | The message created by the rule. |
| Line | Line in source file this message pertains to. |
| Column | Column in source file this message pertains to. |

</TabItem>

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
