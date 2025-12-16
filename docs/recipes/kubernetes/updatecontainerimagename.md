---
sidebar_label: "Update image name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update image name

**org.openrewrite.kubernetes.UpdateContainerImageName**

_Search for image names that match patterns and replace the components of the name with new values._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | repoToFind | *Optional*. The repository part of the image name to search for in containers and initContainers. | `gcr.io` |
| `String` | imageToFind | The image name to search for in containers and initContainers. | `nginx` |
| `String` | tagToFind | *Optional*. The tag part of the image name to search for in containers and initContainers. | `v1.2.3` |
| `String` | digestToFind | *Optional*. The digest part of the image name to search for in containers and initContainers. | `sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229` |
| `String` | repoToUpdate | *Optional*. The repository part of the image name to update to in containers and initContainers. | `gcr.io/account/bucket` |
| `String` | imageToUpdate | *Optional*. The image name to update to in containers and initContainers. | `nginx` |
| `String` | tagToUpdate | *Optional*. The tag part of the image name to update to in containers and initContainers. | `v1.2.3` |
| `String` | digestToUpdate | *Optional*. The digest part of the image name to update to in containers and initContainers. | `sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229` |
| `boolean` | includeInitContainers | *Optional*. Boolean to indicate whether or not to treat initContainers/image identically to containers/image. | `false` |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. | `**/pod-*.yml` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|repoToFind|`null`|
|imageToFind|`nginx`|
|tagToFind|`null`|
|digestToFind|`null`|
|repoToUpdate|`gcr.io/myaccount/myrepo`|
|imageToUpdate|`nginx-custom`|
|tagToUpdate|`latest`|
|digestToUpdate|`null`|
|includeInitContainers|`false`|
|fileMatcher|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="yaml" label="yaml">


###### Before
```yaml
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: nginx
---
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: gcr.io/myaccount/myrepo/nginx
    initContainers:
    - image: gcr.io/myaccount/myrepo/myinit:latest
```

###### After
```yaml
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: gcr.io/myaccount/myrepo/nginx-custom:latest
---
apiVersion: v1
kind: Pod
spec:
    containers:
    - image: gcr.io/myaccount/myrepo/nginx
    initContainers:
    - image: gcr.io/myaccount/myrepo/myinit:latest
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
spec:
    containers:
-   - image: nginx
+   - image: gcr.io/myaccount/myrepo/nginx-custom:latest
---
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
name: com.yourorg.UpdateContainerImageNameExample
displayName: Update image name example
recipeList:
  - org.openrewrite.kubernetes.UpdateContainerImageName: 
      repoToFind: gcr.io
      imageToFind: nginx
      tagToFind: v1.2.3
      digestToFind: sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229
      repoToUpdate: gcr.io/account/bucket
      imageToUpdate: nginx
      tagToUpdate: v1.2.3
      digestToUpdate: sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229
      includeInitContainers: false
      fileMatcher: '**/pod-*.yml'
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdateContainerImageName --recipe-option "repoToFind=gcr.io" --recipe-option "imageToFind=nginx" --recipe-option "tagToFind=v1.2.3" --recipe-option "digestToFind=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229" --recipe-option "repoToUpdate=gcr.io/account/bucket" --recipe-option "imageToUpdate=nginx" --recipe-option "tagToUpdate=v1.2.3" --recipe-option "digestToUpdate=sha256:cb5c1bddd1b5665e1867a7fa1b5fa843a47ee433bbb75d4293888b71def53229" --recipe-option "includeInitContainers=false" --recipe-option "fileMatcher='**/pod-*.yml'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-kubernetes:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_KUBERNETES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.kubernetes.UpdateContainerImageName" />

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
