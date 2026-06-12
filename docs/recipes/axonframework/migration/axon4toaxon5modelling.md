---
title: "Apply Axon Framework 5 modelling module renames"
sidebar_label: "Apply Axon Framework 5 modelling module renames"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apply Axon Framework 5 modelling module renames

**org.axonframework.migration.Axon4ToAxon5Modelling**

_Migrates the modelling layer from the `aggregate` vocabulary to the `entity` vocabulary: relocates `org.axonframework.modelling.command` to `org.axonframework.modelling.entity`, renames `TargetAggregateIdentifier` to `TargetEntityId`, `AggregateMember` to `EntityMember`, `Repository` into `modelling.repository`, and `CommandTargetResolver` to `EntityIdResolver`. Strips AF4-only modelling annotations (`@AggregateIdentifier`, `@CreationPolicy`) that have no AF5 successor — id resolution moved onto commands via `@TargetEntityId`, and the AF4 creation-policy semantics map onto static command handlers in AF5 (a manual rewrite the recipe cannot infer beyond removing the annotation itself)._

## Recipe source

[GitHub: search?type=code&q=org.axonframework.migration.Axon4ToAxon5Modelling](https://github.com/search?type=code&q=org.axonframework.migration.Axon4ToAxon5Modelling),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Rename package name](../../java/changepackage)
  * oldPackageName: `org.axonframework.modelling.command`
  * newPackageName: `org.axonframework.modelling.entity`
  * recursive: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.entity.TargetAggregateIdentifier`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.annotation.TargetEntityId`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.entity.AggregateMember`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.entity.annotation.EntityMember`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.entity.Repository`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.repository.Repository`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.entity.CommandTargetResolver`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.EntityIdResolver`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.MetaDataAssociationResolver`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.MetadataAssociationResolver`
* [Add @EventTag to the aggregate-identifier field of event payload classes](../../axonframework/migration/addeventtagannotation)
* [Remove annotation](../../java/removeannotation)
  * annotationPattern: `@org.axonframework.modelling.entity.AggregateIdentifier`
* [Remove annotation](../../java/removeannotation)
  * annotationPattern: `@org.axonframework.modelling.entity.CreationPolicy`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `org.axonframework`
  * artifactId: `axon-modelling`
  * version: `5.1.1`
  * onlyIfUsing: `org.axonframework.modelling.command.TargetAggregateIdentifier`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.axonframework.migration.Axon4ToAxon5Modelling
displayName: Apply Axon Framework 5 modelling module renames
description: |
  Migrates the modelling layer from the `aggregate` vocabulary to the `entity` vocabulary: relocates `org.axonframework.modelling.command` to `org.axonframework.modelling.entity`, renames `TargetAggregateIdentifier` to `TargetEntityId`, `AggregateMember` to `EntityMember`, `Repository` into `modelling.repository`, and `CommandTargetResolver` to `EntityIdResolver`. Strips AF4-only modelling annotations (`@AggregateIdentifier`, `@CreationPolicy`) that have no AF5 successor — id resolution moved onto commands via `@TargetEntityId`, and the AF4 creation-policy semantics map onto static command handlers in AF5 (a manual rewrite the recipe cannot infer beyond removing the annotation itself).
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.modelling.command
      newPackageName: org.axonframework.modelling.entity
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.entity.TargetAggregateIdentifier
      newFullyQualifiedTypeName: org.axonframework.modelling.annotation.TargetEntityId
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.entity.AggregateMember
      newFullyQualifiedTypeName: org.axonframework.modelling.entity.annotation.EntityMember
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.entity.Repository
      newFullyQualifiedTypeName: org.axonframework.modelling.repository.Repository
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.entity.CommandTargetResolver
      newFullyQualifiedTypeName: org.axonframework.modelling.EntityIdResolver
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.MetaDataAssociationResolver
      newFullyQualifiedTypeName: org.axonframework.modelling.MetadataAssociationResolver
  - org.axonframework.migration.AddEventTagAnnotation
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @org.axonframework.modelling.entity.AggregateIdentifier
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @org.axonframework.modelling.entity.CreationPolicy
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.axonframework
      artifactId: axon-modelling
      version: 5.1.1
      onlyIfUsing: org.axonframework.modelling.command.TargetAggregateIdentifier

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to free Axon Framework 5](/recipes/axonframework/migration/upgradeaxon4toaxon5.md)


## Usage

<RunRecipe
  recipeName="org.axonframework.migration.Axon4ToAxon5Modelling"
  displayName="Apply Axon Framework 5 modelling module renames"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.axonframework.migration.Axon4ToAxon5Modelling" />

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
