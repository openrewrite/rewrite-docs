---
sidebar_label: "Copy YAML value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Copy YAML value

**org.openrewrite.yaml.CopyValue**

_Copies a YAML value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to merge the copied value into the new key if it already exists. By default, attempts to create the new key if it does not exist._

## Recipe source

[GitHub: CopyValue.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/CopyValue.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | oldKeyPath | A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression to locate a YAML key/value pair to copy. | `$.source.kind` |
| `String` | oldFilePath | *Optional*. The file path to the YAML file to copy the value from. If `null` then the value will be copied from any yaml file it appears within. | `src/main/resources/application.yaml` |
| `String` | newKey | A [JsonPath](https://docs.openrewrite.org/reference/jsonpath-and-jsonpathmatcher-reference) expression defining where the value should be written. | `$.dest.kind` |
| `String` | newFilePath | *Optional*. The file path to the YAML file to copy the value to. If `null` then the value will be copied only into the same file it was found in. | `src/main/resources/application.yaml` |
| `Boolean` | createNewKeys | *Optional*. When the key path does _not_ match any keys, create new keys on the spot. Default is `true`. |  |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|oldKeyPath|`$.source`|
|oldFilePath|`null`|
|newKey|`$.destination`|
|newFilePath|`null`|
|createNewKeys|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
source: value
destination: original
```

###### After
```yaml
source: value
destination: value
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
source: value
-destination: original
+destination: value

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CopyValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CopyValueExample
displayName: Copy YAML value example
recipeList:
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.source.kind
      oldFilePath: src/main/resources/application.yaml
      newKey: $.dest.kind
      newFilePath: src/main/resources/application.yaml
```

<RunRecipe
  recipeName="org.openrewrite.yaml.CopyValue"
  displayName="Copy YAML value"
  groupId="org.openrewrite"
  artifactId="rewrite-yaml"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_YAML"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "oldKeyPath=$.source.kind" --recipe-option "oldFilePath=src/main/resources/application.yaml" --recipe-option "newKey=$.dest.kind" --recipe-option "newFilePath=src/main/resources/application.yaml"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.yaml.CopyValue" />

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
