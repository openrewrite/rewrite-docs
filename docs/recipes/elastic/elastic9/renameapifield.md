---
sidebar_label: "Rename `Elasticsearch valueBody()` methods"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rename `Elasticsearch valueBody()` methods

**io.moderne.elastic.elastic9.RenameApiField**

_In Elasticsearch Java Client 9.0, the generic `valueBody()` method and `valueBody(...)` builder methods have been replaced with specific getter and setter methods that better reflect the type of data being returned. Similarly, for `GetRepositoryResponse`, the `result` field also got altered to `repositories`._

### Tags

* [elasticsearch](/reference/recipes-by-tag#elasticsearch)
* [migration](/reference/recipes-by-tag#migration)

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | fullyQualifiedName | The fully qualified name of the class containing the field to rename. | `co.elastic.clients.elasticsearch.snapshot.RepositoryVerifyIntegrityResponse` |
| `String` | field | The name of the field/method to rename. | `valueBody` |
| `String` | newField | The new name for the field/method. | `result` |


## Used by

This recipe is used as part of the following composite recipes:

* [Rename API fields for Elasticsearch 9](/recipes/elastic/elastic9/renameapifields.md)


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RenameApiFieldExample
displayName: Rename `Elasticsearch valueBody()` methods example
recipeList:
  - io.moderne.elastic.elastic9.RenameApiField: 
      fullyQualifiedName: co.elastic.clients.elasticsearch.snapshot.RepositoryVerifyIntegrityResponse
      field: valueBody
      newField: result
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RenameApiField --recipe-option "fullyQualifiedName=co.elastic.clients.elasticsearch.snapshot.RepositoryVerifyIntegrityResponse" --recipe-option "field=valueBody" --recipe-option "newField=result"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install io.moderne.recipe:rewrite-elastic:{{VERSION_IO_MODERNE_RECIPE_REWRITE_ELASTIC}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.moderne.elastic.elastic9.RenameApiField" />

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
