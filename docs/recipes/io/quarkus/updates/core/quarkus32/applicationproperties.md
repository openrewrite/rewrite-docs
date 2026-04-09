---
sidebar_label: "io.quarkus.updates.core.quarkus32.ApplicationProperties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# io.quarkus.updates.core.quarkus32.ApplicationProperties

**io.quarkus.updates.core.quarkus32.ApplicationProperties**

__

## Recipe source

[GitHub: search?type=code&q=io.quarkus.updates.core.quarkus32.ApplicationProperties](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus32.ApplicationProperties),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Find files](../../../../../core/findsourcefiles)
  * filePattern: `**/application*.properties`

**Recipes**

* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.transaction-manager.object-store-directory`
  * newPropertyKey: `quarkus.transaction-manager.object-store.directory`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.enabled`
  * newPropertyKey: `quarkus.otel.enabled`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.enabled`
  * newPropertyKey: `quarkus.otel.traces.enabled`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.suppress-non-application-uris`
  * newPropertyKey: `quarkus.otel.traces.suppress-non-application-uris`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.include-static-resources`
  * newPropertyKey: `quarkus.otel.traces.include-static-resources`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.propagators`
  * newPropertyKey: `quarkus.otel.propagators`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.resource-attributes`
  * newPropertyKey: `quarkus.otel.resource.attributes`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.exporter.otlp.enabled`
  * newPropertyKey: `quarkus.otel.exporter.otlp.enabled`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.exporter.otlp.headers`
  * newPropertyKey: `quarkus.otel.exporter.otlp.traces.headers`
* [Change property key](../../../../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.opentelemetry.tracer.exporter.otlp.endpoint`
  * newPropertyKey: `quarkus.otel.exporter.otlp.traces.legacy-endpoint`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.core.quarkus32.ApplicationProperties
displayName: io.quarkus.updates.core.quarkus32.ApplicationProperties
description: |
  
preconditions:
  - org.openrewrite.FindSourceFiles:
      filePattern: **/application*.properties
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.transaction-manager.object-store-directory
      newPropertyKey: quarkus.transaction-manager.object-store.directory
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.enabled
      newPropertyKey: quarkus.otel.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.enabled
      newPropertyKey: quarkus.otel.traces.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.suppress-non-application-uris
      newPropertyKey: quarkus.otel.traces.suppress-non-application-uris
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.include-static-resources
      newPropertyKey: quarkus.otel.traces.include-static-resources
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.propagators
      newPropertyKey: quarkus.otel.propagators
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.resource-attributes
      newPropertyKey: quarkus.otel.resource.attributes
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.exporter.otlp.enabled
      newPropertyKey: quarkus.otel.exporter.otlp.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.exporter.otlp.headers
      newPropertyKey: quarkus.otel.exporter.otlp.traces.headers
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.opentelemetry.tracer.exporter.otlp.endpoint
      newPropertyKey: quarkus.otel.exporter.otlp.traces.legacy-endpoint

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Quarkus Updates Aggregate 3.2.0](/recipes/quarkus/migratetoquarkus_v3_2_0.md)


## Usage

<RunRecipe
  recipeName="io.quarkus.updates.core.quarkus32.ApplicationProperties"
  displayName="io.quarkus.updates.core.quarkus32.ApplicationProperties"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus32.ApplicationProperties" />

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
