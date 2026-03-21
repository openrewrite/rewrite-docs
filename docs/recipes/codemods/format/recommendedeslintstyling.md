---
sidebar_label: "Recommended ESLint Styling"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Recommended ESLint Styling

**org.openrewrite.codemods.format.RecommendedESLintStyling**

_Collection of stylistic ESLint rules that are recommended by the [ESLint Style.](https://eslint.style/)._

### Tags

* [eslint](/reference/recipes-by-tag#eslint)
* [stylistic](/reference/recipes-by-tag#stylistic)

## Recipe source

[GitHub: stylistic.yml](https://github.com/moderneinc/rewrite-codemods/blob/main/src/main/resources/META-INF/rewrite/stylistic.yml),
[Issue Tracker](https://github.com/moderneinc/rewrite-codemods/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-codemods/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Lint source code with ESLint](../../codemods/eslint)
  * fix: `true`
  * configFile: `{   "root": true,   "parser": "@typescript-eslint/parser",   "parserOptions": { "project": ["./tsconfig.json"] },   "plugins": ["@stylistic"],   "rules": {     "@stylistic/array-bracket-newline": 2,     "@stylistic/array-bracket-spacing": 2,     "@stylistic/array-element-newline": 2,     "@stylistic/arrow-parens": 2,     "@stylistic/arrow-spacing": 2,     "@stylistic/block-spacing": 2,     "@stylistic/brace-style": 2,     "@stylistic/comma-dangle": 2,     "@stylistic/comma-spacing": 2,     "@stylistic/comma-style": 2,     "@stylistic/computed-property-spacing": 2,     "@stylistic/dot-location": 2,     "@stylistic/eol-last": 2,     "@stylistic/func-call-spacing": 2,     "@stylistic/function-call-argument-newline": 2,     "@stylistic/function-call-spacing": 2,     "@stylistic/function-paren-newline": 2,     "@stylistic/generator-star-spacing": 2,     "@stylistic/implicit-arrow-linebreak": 2,     "@stylistic/indent": 2,     "@stylistic/indent-binary-ops": 2,     "@stylistic/jsx-closing-bracket-location": 2,     "@stylistic/jsx-closing-tag-location": 2,     "@stylistic/jsx-curly-brace-presence": 2,     "@stylistic/jsx-curly-newline": 2,     "@stylistic/jsx-curly-spacing": 2,     "@stylistic/jsx-equals-spacing": 2,     "@stylistic/jsx-first-prop-new-line": 2,     "@stylistic/jsx-indent": 2,     "@stylistic/jsx-indent-props": 2,     "@stylistic/jsx-max-props-per-line": 2,     "@stylistic/jsx-newline": 2,     "@stylistic/jsx-one-expression-per-line": 2,     "@stylistic/jsx-pascal-case": 2,     "@stylistic/jsx-props-no-multi-spaces": 2,     "@stylistic/jsx-quotes": 2,     "@stylistic/jsx-self-closing-comp": 2,     "@stylistic/jsx-sort-props": 2,     "@stylistic/jsx-tag-spacing": 2,     "@stylistic/jsx-wrap-multilines": 2,     "@stylistic/key-spacing": 2,     "@stylistic/keyword-spacing": 2,     "@stylistic/linebreak-style": 2,     "@stylistic/lines-around-comment": 2,     "@stylistic/lines-between-class-members": 2,     "@stylistic/member-delimiter-style": 2,     "@stylistic/multiline-ternary": 2,     "@stylistic/new-parens": 2,     "@stylistic/newline-per-chained-call": 2,     "@stylistic/no-confusing-arrow": 2,     "@stylistic/no-extra-parens": 2,     "@stylistic/no-extra-semi": 2,     "@stylistic/no-floating-decimal": 2,     "@stylistic/no-multi-spaces": 2,     "@stylistic/no-multiple-empty-lines": 2,     "@stylistic/no-trailing-spaces": 2,     "@stylistic/no-whitespace-before-property": 2,     "@stylistic/nonblock-statement-body-position": 2,     "@stylistic/object-curly-newline": 2,     "@stylistic/object-curly-spacing": 2,     "@stylistic/object-property-newline": 2,     "@stylistic/one-var-declaration-per-line": 2,     "@stylistic/operator-linebreak": 2,     "@stylistic/padded-blocks": 2,     "@stylistic/padding-line-between-statements": 2,     "@stylistic/quote-props": 2,     "@stylistic/quotes": 2,     "@stylistic/rest-spread-spacing": 2,     "@stylistic/semi": 2,     "@stylistic/semi-spacing": 2,     "@stylistic/semi-style": 2,     "@stylistic/space-before-blocks": 2,     "@stylistic/space-before-function-paren": 2,     "@stylistic/space-in-parens": 2,     "@stylistic/space-infix-ops": 2,     "@stylistic/space-unary-ops": 2,     "@stylistic/spaced-comment": 2,     "@stylistic/switch-colon-spacing": 2,     "@stylistic/template-curly-spacing": 2,     "@stylistic/template-tag-spacing": 2,     "@stylistic/type-annotation-spacing": 2,     "@stylistic/type-generic-spacing": 2,     "@stylistic/type-named-tuple-spacing": 2,     "@stylistic/wrap-iife": 2,     "@stylistic/wrap-regex": 2,     "@stylistic/yield-star-spacing": 2,   },   "globals": {     "browser": true,     "node": true   } } `

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.codemods.format.RecommendedESLintStyling
displayName: Recommended ESLint Styling
description: |
  Collection of stylistic ESLint rules that are recommended by the [ESLint Style.](https://eslint.style/).
tags:
  - eslint
  - stylistic
recipeList:
  - org.openrewrite.codemods.ESLint:
      fix: true
      configFile: {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": ["./tsconfig.json"] },
  "plugins": ["@stylistic"],
  "rules": {
    "@stylistic/array-bracket-newline": 2,
    "@stylistic/array-bracket-spacing": 2,
    "@stylistic/array-element-newline": 2,
    "@stylistic/arrow-parens": 2,
    "@stylistic/arrow-spacing": 2,
    "@stylistic/block-spacing": 2,
    "@stylistic/brace-style": 2,
    "@stylistic/comma-dangle": 2,
    "@stylistic/comma-spacing": 2,
    "@stylistic/comma-style": 2,
    "@stylistic/computed-property-spacing": 2,
    "@stylistic/dot-location": 2,
    "@stylistic/eol-last": 2,
    "@stylistic/func-call-spacing": 2,
    "@stylistic/function-call-argument-newline": 2,
    "@stylistic/function-call-spacing": 2,
    "@stylistic/function-paren-newline": 2,
    "@stylistic/generator-star-spacing": 2,
    "@stylistic/implicit-arrow-linebreak": 2,
    "@stylistic/indent": 2,
    "@stylistic/indent-binary-ops": 2,
    "@stylistic/jsx-closing-bracket-location": 2,
    "@stylistic/jsx-closing-tag-location": 2,
    "@stylistic/jsx-curly-brace-presence": 2,
    "@stylistic/jsx-curly-newline": 2,
    "@stylistic/jsx-curly-spacing": 2,
    "@stylistic/jsx-equals-spacing": 2,
    "@stylistic/jsx-first-prop-new-line": 2,
    "@stylistic/jsx-indent": 2,
    "@stylistic/jsx-indent-props": 2,
    "@stylistic/jsx-max-props-per-line": 2,
    "@stylistic/jsx-newline": 2,
    "@stylistic/jsx-one-expression-per-line": 2,
    "@stylistic/jsx-pascal-case": 2,
    "@stylistic/jsx-props-no-multi-spaces": 2,
    "@stylistic/jsx-quotes": 2,
    "@stylistic/jsx-self-closing-comp": 2,
    "@stylistic/jsx-sort-props": 2,
    "@stylistic/jsx-tag-spacing": 2,
    "@stylistic/jsx-wrap-multilines": 2,
    "@stylistic/key-spacing": 2,
    "@stylistic/keyword-spacing": 2,
    "@stylistic/linebreak-style": 2,
    "@stylistic/lines-around-comment": 2,
    "@stylistic/lines-between-class-members": 2,
    "@stylistic/member-delimiter-style": 2,
    "@stylistic/multiline-ternary": 2,
    "@stylistic/new-parens": 2,
    "@stylistic/newline-per-chained-call": 2,
    "@stylistic/no-confusing-arrow": 2,
    "@stylistic/no-extra-parens": 2,
    "@stylistic/no-extra-semi": 2,
    "@stylistic/no-floating-decimal": 2,
    "@stylistic/no-multi-spaces": 2,
    "@stylistic/no-multiple-empty-lines": 2,
    "@stylistic/no-trailing-spaces": 2,
    "@stylistic/no-whitespace-before-property": 2,
    "@stylistic/nonblock-statement-body-position": 2,
    "@stylistic/object-curly-newline": 2,
    "@stylistic/object-curly-spacing": 2,
    "@stylistic/object-property-newline": 2,
    "@stylistic/one-var-declaration-per-line": 2,
    "@stylistic/operator-linebreak": 2,
    "@stylistic/padded-blocks": 2,
    "@stylistic/padding-line-between-statements": 2,
    "@stylistic/quote-props": 2,
    "@stylistic/quotes": 2,
    "@stylistic/rest-spread-spacing": 2,
    "@stylistic/semi": 2,
    "@stylistic/semi-spacing": 2,
    "@stylistic/semi-style": 2,
    "@stylistic/space-before-blocks": 2,
    "@stylistic/space-before-function-paren": 2,
    "@stylistic/space-in-parens": 2,
    "@stylistic/space-infix-ops": 2,
    "@stylistic/space-unary-ops": 2,
    "@stylistic/spaced-comment": 2,
    "@stylistic/switch-colon-spacing": 2,
    "@stylistic/template-curly-spacing": 2,
    "@stylistic/template-tag-spacing": 2,
    "@stylistic/type-annotation-spacing": 2,
    "@stylistic/type-generic-spacing": 2,
    "@stylistic/type-named-tuple-spacing": 2,
    "@stylistic/wrap-iife": 2,
    "@stylistic/wrap-regex": 2,
    "@stylistic/yield-star-spacing": 2,
  },
  "globals": {
    "browser": true,
    "node": true
  }
}


```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.codemods.format.RecommendedESLintStyling"
  displayName="Recommended ESLint Styling"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-codemods"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CODEMODS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.codemods.format.RecommendedESLintStyling" />

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
