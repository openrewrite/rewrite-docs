---
sidebar_label: "Node.js dependency insight"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Node.js dependency insight

**org.openrewrite.nodejs.search.DependencyInsight**

_Identify the direct and transitive Node.js dependencies used in a project._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | namePattern | Name glob pattern used to match dependencies. | `@apollo*` |
| `String` | version | *Optional*. Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used.All versions are searched by default. | `1.x` |
| `Boolean` | onlyDirect | *Optional*. If enabled, transitive dependencies will not be considered. All dependencies are searched by default. | `true` |


## Used by

This recipe is used as part of the following composite recipes:

* [Javascript UI library insights](/recipes/nodejs/search/uiinsights.md)
* [Javascript database interaction library insights](/recipes/nodejs/search/databaseinteractioninsights.md)
* [Javascript form handling library insights](/recipes/nodejs/search/formhandlinginsights.md)
* [Javascript linting &amp; formatting library insights](/recipes/nodejs/search/lintingformattinginsights.md)
* [Javascript real-time communication library insights](/recipes/nodejs/search/realtimecommunicationinsights.md)
* [Javascript security library insights](/recipes/nodejs/search/securityinsights.md)
* [Javascript server-side frameworks insights](/recipes/nodejs/search/serversideframeworksinsights.md)
* [Javascript state management library insights](/recipes/nodejs/search/statemanagementinsights.md)
* [Javascript task runners &amp; build tools insights](/recipes/nodejs/search/taskrunnersbuildtoolsinsights.md)
* [Javascript testing library insights](/recipes/nodejs/search/testinginsights.md)
* [Javascript utility library insights](/recipes/nodejs/search/utilityinsights.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|namePattern|`lodash*`|
|version|`null`|
|onlyDirect|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="package.json" label="package.json">


###### Before
```json title="package.json"
{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "jwt-decode": "^4.0.0",
    "lodash.camelcase": "^4.3.0",
    "lodash.kebabcase": "^4.1.0"
  }
}
```

###### After
```json title="package.json"
{
  "name": "example",
  "version": "1.0.0",
  "dependencies": {
    "jwt-decode": "^4.0.0",
    /*~~(4.3.0)~~>*/"lodash.camelcase": "^4.3.0",
    /*~~(4.1.1)~~>*/"lodash.kebabcase": "^4.1.0"
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- package.json
+++ package.json
@@ -6,2 +6,2 @@
  "dependencies": {
    "jwt-decode": "^4.0.0",
-   "lodash.camelcase": "^4.3.0",
-   "lodash.kebabcase": "^4.1.0"
+   /*~~(4.3.0)~~>*/"lodash.camelcase": "^4.3.0",
+   /*~~(4.1.1)~~>*/"lodash.kebabcase": "^4.1.0"
  }
```
</TabItem>
</Tabs>

###### Unchanged
```json title="package-lock.json"
{
  "name": "example",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "example",
      "version": "1.0.0",
      "dependencies": {
        "jwt-decode": "^4.0.0",
        "lodash.camelcase": "^4.3.0",
        "lodash.kebabcase": "^4.1.0"
      }
    },
    "node_modules/jwt-decode": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/jwt-decode/-/jwt-decode-4.0.0.tgz",
      "integrity": "sha512-+KJGIyHgkGuIq3IEBNftfhW/LfWhXUIY6OmyVWjliu5KH1y0fw7VQ8YndE2O4qZdMSd9SqbnC8GOcZEy0Om7sA==",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/lodash.camelcase": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz",
      "integrity": "sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA=="
    },
    "node_modules/lodash.kebabcase": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/lodash.kebabcase/-/lodash.kebabcase-4.1.1.tgz",
      "integrity": "sha512-N8XRTIMMqqDgSy4VLKPnJ/+hpGZN+PHQiJnSenYqPaVV/NCqEogTnAdZLQiGKhxX+JCs8waWq2t1XHWKOmlY8g=="
    }
  }
}
```


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyInsightExample
displayName: Node.js dependency insight example
recipeList:
  - org.openrewrite.nodejs.search.DependencyInsight: 
      namePattern: '@apollo*'
      version: 1.x
      onlyDirect: true
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe DependencyInsight --recipe-option "namePattern='@apollo*'" --recipe-option "version=1.x" --recipe-option "onlyDirect=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-nodejs:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NODEJS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.nodejs.search.DependencyInsight" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.nodejs.table.DependenciesInUse" label="DependenciesInUse">

### Dependencies in use
**org.openrewrite.nodejs.table.DependenciesInUse**

_Direct and transitive dependencies in use._

| Column Name | Description |
| ----------- | ----------- |
| Name | The name of the node package. |
| Requested version | The requested version. |
| Version | The resolved version. |

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
