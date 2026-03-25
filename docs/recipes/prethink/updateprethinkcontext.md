---
sidebar_label: "Update Prethink context"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Update Prethink context

**org.openrewrite.prethink.UpdatePrethinkContext**

_Generate FINOS CALM architecture diagram and update agent configuration files. This recipe expects CALM-related data tables (ServiceEndpoints, DatabaseConnections, ExternalServiceCalls, MessagingConnections, etc.) to be populated by other recipes in a composite._

## Recipe source

[GitHub: UpdatePrethinkContext.java](https://github.com/openrewrite/rewrite-prethink/blob/main/src/main/java/org/openrewrite/prethink/UpdatePrethinkContext.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-prethink/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-prethink/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | targetConfigFile | *Optional*. Which agent config file to update. If not specified, updates all found files. | `CLAUDE.md` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Generate CALM architecture](../prethink/calm/generatecalmarchitecture)
* [Export context files](../prethink/exportcontext)
  * displayName: `Architecture`
  * shortDescription: `FINOS CALM architecture diagram`
  * longDescription: `FINOS CALM (Common Architecture Language Model) architecture diagram showing services, databases, external integrations, and messaging connections. Use this to understand the high-level system architecture and component relationships.`
  * dataTables: `[org.openrewrite.prethink.table.ServiceEndpoints, org.openrewrite.prethink.table.DatabaseConnections, org.openrewrite.prethink.table.ExternalServiceCalls, org.openrewrite.prethink.table.MessagingConnections, org.openrewrite.prethink.table.ServerConfiguration, org.openrewrite.prethink.table.DataAssets, org.openrewrite.prethink.table.ProjectMetadata, org.openrewrite.prethink.table.SecurityConfiguration, org.openrewrite.prethink.table.DeploymentArtifacts]`
* [Update agent configuration files](../prethink/updateagentconfig)
* [Update .gitignore for Prethink context](../prethink/updategitignore)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.prethink.UpdatePrethinkContext
displayName: Update Prethink context
description: |
  Generate FINOS CALM architecture diagram and update agent configuration files. This recipe expects CALM-related data tables (ServiceEndpoints, DatabaseConnections, ExternalServiceCalls, MessagingConnections, etc.) to be populated by other recipes in a composite.

recipeList:
  - org.openrewrite.prethink.calm.GenerateCalmArchitecture
  - org.openrewrite.prethink.ExportContext:
      displayName: Architecture
      shortDescription: FINOS CALM architecture diagram
      longDescription: FINOS CALM (Common Architecture Language Model) architecture diagram showing services, databases, external integrations, and messaging connections. Use this to understand the high-level system architecture and component relationships.
      dataTables: [org.openrewrite.prethink.table.ServiceEndpoints, org.openrewrite.prethink.table.DatabaseConnections, org.openrewrite.prethink.table.ExternalServiceCalls, org.openrewrite.prethink.table.MessagingConnections, org.openrewrite.prethink.table.ServerConfiguration, org.openrewrite.prethink.table.DataAssets, org.openrewrite.prethink.table.ProjectMetadata, org.openrewrite.prethink.table.SecurityConfiguration, org.openrewrite.prethink.table.DeploymentArtifacts]
  - org.openrewrite.prethink.UpdateAgentConfig
  - org.openrewrite.prethink.UpdateGitignore

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.prethink.UpdatePrethinkContext"
  displayName="Update Prethink context"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-prethink"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_PRETHINK"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.prethink.UpdatePrethinkContext" />

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
