---
sidebar_label: "Replace any Lombok log annotations with target logging framework annotation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace any Lombok log annotations with target logging framework annotation

**org.openrewrite.java.logging.ChangeLombokLogAnnotation**

_Replace Lombok annotations such as `@CommonsLog` and `@Log4j` with the target logging framework annotation, or `@Sl4fj` if not provided._

## Recipe source

[GitHub: ChangeLombokLogAnnotation.java](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/java/org/openrewrite/java/logging/ChangeLombokLogAnnotation.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | loggingFramework | *Optional*. The logging framework to use. Valid options: `SLF4J`, `Log4J1`, `Log4J2`, `JUL`, `COMMONS` |  |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.java.Log`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.apachecommons.CommonsLog`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.flogger.Flogger`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.jbosslog.JBossLog`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.log4j.Log4j`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.log4j.Log4j2`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.extern.slf4j.XSlf4j`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `lombok.CustomLog`
  * newFullyQualifiedTypeName: `lombok.extern.slf4j.Slf4j`
  * ignoreDefinition: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.ChangeLombokLogAnnotation
displayName: Replace any Lombok log annotations with target logging framework annotation
description: |
  Replace Lombok annotations such as `@CommonsLog` and `@Log4j` with the target logging framework annotation, or `@Sl4fj` if not provided.

recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.java.Log
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.apachecommons.CommonsLog
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.flogger.Flogger
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.jbosslog.JBossLog
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.log4j.Log4j
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.log4j.Log4j2
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.extern.slf4j.XSlf4j
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: lombok.CustomLog
      newFullyQualifiedTypeName: lombok.extern.slf4j.Slf4j
      ignoreDefinition: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/commonslogging1toslf4j1.md)
* [Migrate JCL to Log4j 2.x API](/recipes/java/logging/log4j/commonsloggingtolog4j.md)
* [Migrate JUL to Log4j 2.x API](/recipes/java/logging/log4j/jultolog4j.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to SLF4J 1.x](/recipes/java/logging/slf4j/log4j2toslf4j1.md)
* [Migrate SLF4J to Log4j 2.x API](/recipes/java/logging/log4j/slf4jtolog4j.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.ChangeLombokLogAnnotation"
  displayName="Replace any Lombok log annotations with target logging framework annotation"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.ChangeLombokLogAnnotation" />

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
