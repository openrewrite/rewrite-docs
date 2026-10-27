---
title: "Add content"
sidebar_label: "Add content"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add content

**org.openrewrite.hcl.AddContent**

_Add an attribute or a block to HCL blocks selected by a JSONPath expression, unless an attribute with the same name or a block with the same type and labels is already there. Existing values are left unchanged, use `ChangeValue` to change them._

## Recipe source

[GitHub: AddContent.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/AddContent.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-hcl/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | blockPath | A JSONPath expression selecting the blocks to add `content` to. `$` selects the top level of the file, e.g. of a `.tfvars` file. A path selecting an attribute whose value is an object, such as `$.resource.aws_instance.tags`, adds `content` to that object. | `$.resource.aws_db_instance` |
| `String` | content | The HCL source of exactly one attribute, or of one block with its body. | `publicly_accessible = false` |
| `Boolean` | prepend | *Optional*. If `true`, `content` is added as the first element instead of the last one. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade AWS Aurora MySQL to version 3 (MySQL 8.0)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsauroramysqltov3)
* [Upgrade AWS Aurora PostgreSQL to 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsaurorapostgrestov17)
* [Upgrade AWS RDS MySQL to 8.4](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsrdsmysqltov8_4)
* [Upgrade AWS RDS PostgreSQL to 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsrdspostgrestov17)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddContentExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddContentExample
displayName: Add content example
recipeList:
  - org.openrewrite.hcl.AddContent:
      blockPath: $.resource.aws_db_instance
      content: publicly_accessible = false
```

<RunRecipe
  recipeName="org.openrewrite.hcl.AddContent"
  displayName="Add content"
  groupId="org.openrewrite"
  artifactId="rewrite-hcl"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_HCL"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "blockPath=$.resource.aws_db_instance" --recipe-option "content=publicly_accessible = false"'}
  optionalCliOptions={' --recipe-option "prepend=true"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hcl.AddContent" />

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
