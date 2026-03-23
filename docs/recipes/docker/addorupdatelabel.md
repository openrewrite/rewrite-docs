---
sidebar_label: "Add Docker LABEL instruction"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add Docker LABEL instruction

**org.openrewrite.docker.AddOrUpdateLabel**

_Adds or updates a LABEL instruction in a Dockerfile. By default, adds to the final stage only._

## Recipe source

[GitHub: AddOrUpdateLabel.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/java/org/openrewrite/docker/AddOrUpdateLabel.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-docker/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | key | The key of the label to add. | `org.opencontainers.image.version` |
| `String` | value | The value of the label. | `1.0.0` |
| `Boolean` | overwriteExisting | *Optional*. If true, overwrite the label if it already exists. If false, skip if exists. Defaults to true. |  |
| `String` | stageName | *Optional*. Only add the label to this build stage. If null, adds to the final stage only. | `final` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|key|`version`|
|value|`1.0.0`|
|overwriteExisting|`null`|
|stageName|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="docker" label="docker">


###### Before
```docker
FROM ubuntu:22.04
RUN apt-get update
```

###### After
```docker
FROM ubuntu:22.04
LABEL version=1.0.0
RUN apt-get update
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,0 +2,1 @@
FROM ubuntu:22.04
+LABEL version=1.0.0
RUN apt-get update
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddOrUpdateLabelExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddOrUpdateLabelExample
displayName: Add Docker LABEL instruction example
recipeList:
  - org.openrewrite.docker.AddOrUpdateLabel:
      key: org.opencontainers.image.version
      value: 1.0.0
      stageName: final
```

<RunRecipe
  recipeName="org.openrewrite.docker.AddOrUpdateLabel"
  displayName="Add Docker LABEL instruction"
  requiresConfiguration
  cliOptions={' --recipe-option "key=org.opencontainers.image.version" --recipe-option "value=1.0.0" --recipe-option "stageName=final"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.docker.AddOrUpdateLabel" />

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
