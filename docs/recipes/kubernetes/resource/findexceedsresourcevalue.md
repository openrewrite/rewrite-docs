---
sidebar_label: "Find exceeds resource limit"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find exceeds resource limit

**org.openrewrite.kubernetes.resource.FindExceedsResourceValue**

_Find resource manifests that have limits set beyond a specific maximum._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | resourceValueType | The type of resource value to search for. Valid options: `limits`, `requests` | `limits` |
| `String` | resourceType | The type of resource limit to search for. Valid options: `cpu`, `memory` | `memory` |
| `String` | resourceLimit | The resource limit maximum to search for to find resources that request more than the maximum. | `2Gi` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pod-*.yml` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|resourceValueType|`limits`|
|resourceType|`memory`|
|resourceLimit|`64m`|
|fileMatcher|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: application
spec:
  containers:
  - image: nginx:latest
    resources:
        limits:
            cpu: "500Mi"
            memory: "256m"
```

###### After
```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    app: application
spec:
  containers:
  - image: nginx:latest
    resources:
        limits:
            cpu: "500Mi"
            memory: ~~(exceeds maximum of 64M)~~>"256m"
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -12,1 +12,1 @@
        limits:
            cpu: "500Mi"
-           memory: "256m"
+           memory: ~~(exceeds maximum of 64M)~~>"256m"

```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindExceedsResourceValueExample
displayName: Find exceeds resource limit example
recipeList:
  - org.openrewrite.kubernetes.resource.FindExceedsResourceValue: 
      resourceValueType: limits
      resourceType: memory
      resourceLimit: 2Gi
      fileMatcher: '**/pod-*.yml'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FindExceedsResourceValue --recipe-option "resourceValueType=limits" --recipe-option "resourceType=memory" --recipe-option "resourceLimit=2Gi" --recipe-option "fileMatcher='**/pod-*.yml'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.kubernetes.resource.FindExceedsResourceValue" />

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
