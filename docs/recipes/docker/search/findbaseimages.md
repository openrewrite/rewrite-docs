---
sidebar_label: "Find Docker base images"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Find Docker base images

**org.openrewrite.docker.search.FindBaseImages**

_Find all base images (`FROM` instructions) in Dockerfiles._

## Recipe source

[GitHub: FindBaseImages.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/java/org/openrewrite/docker/search/FindBaseImages.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-docker/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | imageNamePattern | *Optional*. A glob pattern to match against base image names. If not specified, all base images are matched. | `ubuntu*` |
| `String` | tagPattern | *Optional*. A glob pattern to match against image tags. If not specified, all tags are matched. | `20.*` |
| `String` | digestPattern | *Optional*. A glob pattern to match against image digests. If not specified, all digests are matched. | `sha256:*` |
| `String` | platformPattern | *Optional*. A glob pattern to match against platform flags. If not specified, all platforms are matched. | `linux/amd64` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|imageNamePattern|`null`|
|tagPattern|`null`|
|digestPattern|`null`|
|platformPattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="docker" label="docker">


###### Before
```docker
FROM ubuntu:22.04
RUN apt-get update
```

###### After
```docker
~~(ubuntu:22.04)~~>FROM ubuntu:22.04
RUN apt-get update
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-FROM ubuntu:22.04
+~~(ubuntu:22.04)~~>FROM ubuntu:22.04
RUN apt-get update
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.docker.search.FindBaseImages"
  displayName="Find Docker base images"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.docker.search.FindBaseImages" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.docker.table.BaseImages" label="BaseImages">

### Docker base images
**org.openrewrite.docker.table.BaseImages**

_Records the base images found in Dockerfiles._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The Dockerfile containing the base image. |
| Stage name | The build stage name (from AS clause), if specified. |
| Image name | The name of the base image (without tag or digest). |
| Tag | The image tag, if specified. |
| Digest | The image digest, if specified. |
| Platform | The platform flag value, if specified. |

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
