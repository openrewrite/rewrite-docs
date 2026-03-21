---
sidebar_label: "Migrate from OptaPlanner to Timefold Solver"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from OptaPlanner to Timefold Solver

**ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver**

_Replaces your method/field calls, GAVs, etc. To replace deprecated methods too, use the recipe ToLatest_

## Recipe source

[GitHub: search?type=code&q=ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver](https://github.com/search?type=code&q=ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.optaplanner.persistence.jackson.api.OptaPlannerJacksonModule`
  * newFullyQualifiedTypeName: `ai.timefold.solver.jackson.api.TimefoldJacksonModule`
  * ignoreDefinition: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.optaplanner.persistence.jackson`
  * newPackageName: `ai.timefold.solver.jackson`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.optaplanner.persistence.jaxb`
  * newPackageName: `ai.timefold.solver.jaxb`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.optaplanner.persistence.jsonb`
  * newPackageName: `ai.timefold.solver.jsonb`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.optaplanner.persistence.xstream`
  * newPackageName: `ai.timefold.solver.xstream`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.optaplanner.persistence.jpa`
  * newPackageName: `ai.timefold.solver.jpa`
  * recursive: `true`
* [Rename package name](../../../../java/changepackage)
  * oldPackageName: `org.optaplanner`
  * newPackageName: `ai.timefold.solver`
  * recursive: `true`
* [Change property key](../../../../properties/changepropertykey)
  * oldPropertyKey: `^optaplanner\.(.*)`
  * newPropertyKey: `timefold.$1`
  * regex: `true`
* [Change property key](../../../../properties/changepropertykey)
  * oldPropertyKey: `^(%[^.]*\.)?quarkus\.optaplanner\.(.*)`
  * newPropertyKey: `$1quarkus.timefold.$2`
  * regex: `true`
* [Change property key](../../../../properties/changepropertykey)
  * oldPropertyKey: `^(%[^.]*\.)?quarkus\.log\.category\."org\.optaplanner"\.level`
  * newPropertyKey: `$1quarkus.log.category."ai.timefold.solver".level`
  * regex: `true`
* [Change property key](../../../../properties/changepropertykey)
  * oldPropertyKey: `^(%[^.]*\.)?logging\.level\.org\.optaplanner`
  * newPropertyKey: `$1logging.level.ai.timefold.solver`
  * regex: `true`
* [Change XML attribute](../../../../xml/changetagattribute)
  * elementName: `solver`
  * attributeName: `xmlns`
  * newValue: `https://timefold.ai/xsd/solver`
  * oldValue: `https://www.optaplanner.org/xsd/solver`
* [Change XML attribute](../../../../xml/changetagattribute)
  * elementName: `solver`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://timefold.ai/xsd/solver https://timefold.ai/xsd/solver/solver.xsd`
  * oldValue: `https://www.optaplanner.org/xsd/solver https://www.optaplanner.org/xsd/solver/solver.xsd`
* [Change XML attribute](../../../../xml/changetagattribute)
  * elementName: `plannerBenchmark`
  * attributeName: `xmlns`
  * newValue: `https://timefold.ai/xsd/benchmark`
  * oldValue: `https://www.optaplanner.org/xsd/benchmark`
* [Change XML attribute](../../../../xml/changetagattribute)
  * elementName: `plannerBenchmark`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://timefold.ai/xsd/benchmark https://timefold.ai/xsd/benchmark/benchmark.xsd`
  * oldValue: `https://www.optaplanner.org/xsd/benchmark https://www.optaplanner.org/xsd/benchmark/benchmark.xsd`
* [Change XML attribute](../../../../xml/changetagattribute)
  * elementName: `logger`
  * attributeName: `name`
  * newValue: `ai.timefold.solver`
  * oldValue: `org.optaplanner`
* [Change XML attribute](../../../../xml/changetagattribute)
  * elementName: `logger`
  * attributeName: `name`
  * newValue: `ai.timefold.solver`
  * oldValue: `org.optaplanner`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `version.org.optaplanner`
  * newKey: `version.ai.timefold.solver`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `version.optaPlanner`
  * newKey: `version.timefold`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `version.optaplanner`
  * newKey: `version.timefold`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `org.optaplanner.version`
  * newKey: `ai.timefold.solver.version`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `optaPlanner.version`
  * newKey: `timefold.version`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `optaplanner.version`
  * newKey: `timefold.version`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `optaplannerVersion`
  * newKey: `timefoldVersion`
* [Rename Maven property key](../../../../maven/renamepropertykey)
  * oldKey: `optaPlannerVersion`
  * newKey: `timefoldVersion`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver
displayName: Migrate from OptaPlanner to Timefold Solver
description: |
  Replaces your method/field calls, GAVs, etc. To replace deprecated methods too, use the recipe ToLatest
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.optaplanner.persistence.jackson.api.OptaPlannerJacksonModule
      newFullyQualifiedTypeName: ai.timefold.solver.jackson.api.TimefoldJacksonModule
      ignoreDefinition: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jackson
      newPackageName: ai.timefold.solver.jackson
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jaxb
      newPackageName: ai.timefold.solver.jaxb
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jsonb
      newPackageName: ai.timefold.solver.jsonb
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.xstream
      newPackageName: ai.timefold.solver.xstream
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner.persistence.jpa
      newPackageName: ai.timefold.solver.jpa
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.optaplanner
      newPackageName: ai.timefold.solver
      recursive: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^optaplanner\.(.*)
      newPropertyKey: timefold.$1
      regex: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^(%[^.]*\.)?quarkus\.optaplanner\.(.*)
      newPropertyKey: $1quarkus.timefold.$2
      regex: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^(%[^.]*\.)?quarkus\.log\.category\."org\.optaplanner"\.level
      newPropertyKey: $1quarkus.log.category."ai.timefold.solver".level
      regex: true
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: ^(%[^.]*\.)?logging\.level\.org\.optaplanner
      newPropertyKey: $1logging.level.ai.timefold.solver
      regex: true
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: solver
      attributeName: xmlns
      newValue: https://timefold.ai/xsd/solver
      oldValue: https://www.optaplanner.org/xsd/solver
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: solver
      attributeName: xsi:schemaLocation
      newValue: https://timefold.ai/xsd/solver https://timefold.ai/xsd/solver/solver.xsd
      oldValue: https://www.optaplanner.org/xsd/solver https://www.optaplanner.org/xsd/solver/solver.xsd
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: plannerBenchmark
      attributeName: xmlns
      newValue: https://timefold.ai/xsd/benchmark
      oldValue: https://www.optaplanner.org/xsd/benchmark
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: plannerBenchmark
      attributeName: xsi:schemaLocation
      newValue: https://timefold.ai/xsd/benchmark https://timefold.ai/xsd/benchmark/benchmark.xsd
      oldValue: https://www.optaplanner.org/xsd/benchmark https://www.optaplanner.org/xsd/benchmark/benchmark.xsd
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: logger
      attributeName: name
      newValue: ai.timefold.solver
      oldValue: org.optaplanner
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: logger
      attributeName: name
      newValue: ai.timefold.solver
      oldValue: org.optaplanner
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version.org.optaplanner
      newKey: version.ai.timefold.solver
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version.optaPlanner
      newKey: version.timefold
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: version.optaplanner
      newKey: version.timefold
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: org.optaplanner.version
      newKey: ai.timefold.solver.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaPlanner.version
      newKey: timefold.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaplanner.version
      newKey: timefold.version
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaplannerVersion
      newKey: timefoldVersion
  - org.openrewrite.maven.RenamePropertyKey:
      oldKey: optaPlannerVersion
      newKey: timefoldVersion

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to the latest Timefold Solver](/recipes/ai/timefold/solver/migration/tolatest.md)


## Usage

<RunRecipe
  recipeName="ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver"
  displayName="Migrate from OptaPlanner to Timefold Solver"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/ai.timefold.solver.migration.FromOptaPlannerToTimefoldSolver" />

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
