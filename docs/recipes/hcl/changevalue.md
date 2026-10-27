---
title: "Change value"
sidebar_label: "Change value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change value

**org.openrewrite.hcl.ChangeValue**

_Change the value of an HCL attribute while leaving its key intact. The new value replaces the whole existing expression, unless `regex` is enabled._

## Recipe source

[GitHub: ChangeValue.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-hcl/src/main/java/org/openrewrite/hcl/ChangeValue.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-hcl/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | keyPath | A JSONPath expression locating the attribute whose value to change. | `$.resource.aws_db_instance.engine_version` |
| `String` | value | The new value as an HCL expression. String values have to be quoted, e.g. `"8.0"`, while `true`, `8`, `["a", "b"]` or `var.engine_version` are used as is. If `regex` is enabled, the replacement for the parts of the current value matching `oldValue` instead, keeping its quotes. Capturing groups can be used, e.g. `db.t3.$1`. | `"8.0"` |
| `String` | oldValue | *Optional*. Only change the value if it matches the configured `oldValue`. It is compared to numbers, booleans and strings without interpolation, the latter without their quotes. Any other value, like a reference, is left unchanged when `oldValue` is set. | `5.7` |
| `Boolean` | regex | *Optional*. Default `false`. If enabled, `oldValue` will be interpreted as a Regular Expression, to replace only all parts that match the regex. Capturing group can be used in `value`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade AWS Aurora MySQL to version 3 (MySQL 8.0)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsauroramysqltov3)
* [Upgrade AWS Aurora PostgreSQL to 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsaurorapostgrestov17)
* [Upgrade AWS RDS MySQL to 8.4](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsrdsmysqltov8_4)
* [Upgrade AWS RDS PostgreSQL to 17](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/terraform/aws/upgradeawsrdspostgrestov17)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeValueExample
displayName: Change value example
recipeList:
  - org.openrewrite.hcl.ChangeValue:
      keyPath: $.resource.aws_db_instance.engine_version
      value: "8.0"
      oldValue: 5.7
```

<RunRecipe
  recipeName="org.openrewrite.hcl.ChangeValue"
  displayName="Change value"
  groupId="org.openrewrite"
  artifactId="rewrite-hcl"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_HCL"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "keyPath=$.resource.aws_db_instance.engine_version" --recipe-option "value="8.0""'}
  optionalCliOptions={' --recipe-option "oldValue=5.7" --recipe-option "regex=true"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.hcl.ChangeValue" />

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
