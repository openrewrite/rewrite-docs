---
sidebar_label: "Apply Docker security best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apply Docker security best practices

**org.openrewrite.docker.DockerSecurityBestPractices**

_Apply security-focused Docker best practices to Dockerfiles. This includes running as a non-root user (CIS 4.1) and using COPY instead of ADD where appropriate (CIS 4.9)._

### Tags

* [security](/reference/recipes-by-tag#security)
* [docker](/reference/recipes-by-tag#docker)

## Recipe source

[GitHub: docker.yml](https://github.com/openrewrite/rewrite/blob/main/rewrite-docker/src/main/resources/META-INF/rewrite/docker.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-docker/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add `USER` instruction](../docker/adduserinstruction)
  * userName: `appuser`
* [Replace `ADD` with `COPY`](../docker/replaceaddwithcopy)
* [Find containers running as root](../docker/search/findrootuser)
* [Find unpinned base images](../docker/search/findunpinnedbaseimages)
* [Find end-of-life Docker base images](../docker/search/findendoflifeimages)
* [Find missing `HEALTHCHECK`](../docker/search/findmissinghealthcheck)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.docker.DockerSecurityBestPractices
displayName: Apply Docker security best practices
description: |
  Apply security-focused Docker best practices to Dockerfiles. This includes running as a non-root user (CIS 4.1) and using COPY instead of ADD where appropriate (CIS 4.9).
tags:
  - security
  - docker
recipeList:
  - org.openrewrite.docker.AddUserInstruction:
      userName: appuser
  - org.openrewrite.docker.ReplaceAddWithCopy
  - org.openrewrite.docker.search.FindRootUser
  - org.openrewrite.docker.search.FindUnpinnedBaseImages
  - org.openrewrite.docker.search.FindEndOfLifeImages
  - org.openrewrite.docker.search.FindMissingHealthcheck

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Apply Docker best practices](/recipes/docker/dockerbestpractices.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.docker.DockerSecurityBestPractices"
  displayName="Apply Docker security best practices"
  groupId="org.openrewrite"
  artifactId="rewrite-docker"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_DOCKER"
  isCoreLibrary
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.docker.DockerSecurityBestPractices" />

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

<TabItem value="org.openrewrite.docker.table.EolDockerImages" label="EolDockerImages">

### End-of-life Docker images
**org.openrewrite.docker.table.EolDockerImages**

_Records Docker base images that have reached end-of-life._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The Dockerfile containing the EOL base image. |
| Stage name | The build stage name (from AS clause), if specified. |
| Image name | The name of the base image. |
| Tag | The image tag. |
| EOL date | The date when the image reached end-of-life. |
| Suggested replacement | Recommended newer version to migrate to. |

</TabItem>

</Tabs>
