---
sidebar_label: "DataNucleus 4.0 property migrations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# DataNucleus 4.0 property migrations

**org.openrewrite.java.migrate.datanucleus.DataNucleusProperties\_4\_0**

_Rename property keys that changed in DataNucleus 4.0._

## Recipe source

[GitHub: datanucleus-4.0.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/datanucleus-4.0.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.autoCreateSchema`
  * newPropertyKey: `datanucleus.schema.autoCreateAll`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.autoCreateTables`
  * newPropertyKey: `datanucleus.schema.autoCreateTables`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.autoCreateColumns`
  * newPropertyKey: `datanucleus.schema.autoCreateColumns`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.autoCreateConstraints`
  * newPropertyKey: `datanucleus.schema.autoCreateConstraints`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.validateSchema`
  * newPropertyKey: `datanucleus.schema.validateAll`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.validateTables`
  * newPropertyKey: `datanucleus.schema.validateTables`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.validateColumns`
  * newPropertyKey: `datanucleus.schema.validateColumns`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.validateConstraints`
  * newPropertyKey: `datanucleus.schema.validateConstraints`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.metadata.validate`
  * newPropertyKey: `datanucleus.metadata.xml.validate`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.defaultInheritanceStrategy`
  * newPropertyKey: `datanucleus.metadata.defaultInheritanceStrategy`
* [Change property key](../../../properties/changepropertykey)
  * oldPropertyKey: `datanucleus.managedRuntime`
  * newPropertyKey: `datanucleus.jmxType`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.autoCreateAll`
  * oldValue: `datanucleus.autoCreateSchema`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.autoCreateTables`
  * oldValue: `datanucleus.autoCreateTables`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.autoCreateColumns`
  * oldValue: `datanucleus.autoCreateColumns`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.autoCreateConstraints`
  * oldValue: `datanucleus.autoCreateConstraints`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.validateAll`
  * oldValue: `datanucleus.validateSchema`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.validateTables`
  * oldValue: `datanucleus.validateTables`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.validateColumns`
  * oldValue: `datanucleus.validateColumns`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.schema.validateConstraints`
  * oldValue: `datanucleus.validateConstraints`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.metadata.xml.validate`
  * oldValue: `datanucleus.metadata.validate`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.metadata.defaultInheritanceStrategy`
  * oldValue: `datanucleus.defaultInheritanceStrategy`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `property`
  * attributeName: `name`
  * newValue: `datanucleus.jmxType`
  * oldValue: `datanucleus.managedRuntime`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_4_0
displayName: DataNucleus 4.0 property migrations
description: |
  Rename property keys that changed in DataNucleus 4.0.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.autoCreateSchema
      newPropertyKey: datanucleus.schema.autoCreateAll
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.autoCreateTables
      newPropertyKey: datanucleus.schema.autoCreateTables
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.autoCreateColumns
      newPropertyKey: datanucleus.schema.autoCreateColumns
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.autoCreateConstraints
      newPropertyKey: datanucleus.schema.autoCreateConstraints
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.validateSchema
      newPropertyKey: datanucleus.schema.validateAll
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.validateTables
      newPropertyKey: datanucleus.schema.validateTables
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.validateColumns
      newPropertyKey: datanucleus.schema.validateColumns
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.validateConstraints
      newPropertyKey: datanucleus.schema.validateConstraints
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.metadata.validate
      newPropertyKey: datanucleus.metadata.xml.validate
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.defaultInheritanceStrategy
      newPropertyKey: datanucleus.metadata.defaultInheritanceStrategy
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: datanucleus.managedRuntime
      newPropertyKey: datanucleus.jmxType
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.autoCreateAll
      oldValue: datanucleus.autoCreateSchema
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.autoCreateTables
      oldValue: datanucleus.autoCreateTables
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.autoCreateColumns
      oldValue: datanucleus.autoCreateColumns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.autoCreateConstraints
      oldValue: datanucleus.autoCreateConstraints
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.validateAll
      oldValue: datanucleus.validateSchema
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.validateTables
      oldValue: datanucleus.validateTables
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.validateColumns
      oldValue: datanucleus.validateColumns
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.schema.validateConstraints
      oldValue: datanucleus.validateConstraints
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.metadata.xml.validate
      oldValue: datanucleus.metadata.validate
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.metadata.defaultInheritanceStrategy
      oldValue: datanucleus.defaultInheritanceStrategy
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: property
      attributeName: name
      newValue: datanucleus.jmxType
      oldValue: datanucleus.managedRuntime

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to DataNucleus 4.0](/recipes/java/migrate/datanucleus/upgradedatanucleus_4_0.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_4_0"
  displayName="DataNucleus 4.0 property migrations"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.datanucleus.DataNucleusProperties_4_0" />

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
