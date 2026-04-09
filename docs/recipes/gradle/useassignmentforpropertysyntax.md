---
sidebar_label: "Use `=` assignment syntax for well-known Gradle properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `=` assignment syntax for well-known Gradle properties

**org.openrewrite.gradle.UseAssignmentForPropertySyntax**

_Converts deprecated Groovy DSL property assignment syntax from space/method-call form (e.g., `description 'text'` or `description('text')`) to assignment form (`description = 'text'`) for well-known Gradle project and task properties. See the [Gradle 8.14 upgrade guide](https://docs.gradle.org/8.14/userguide/upgrading_version_8.html#groovy_space_assignment_syntax) for more information._

## Recipe source

[GitHub: gradle-8.yml](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/resources/META-INF/rewrite/gradle-8.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `description`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `group`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `version`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `sourceCompatibility`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `targetCompatibility`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `archivesBaseName`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `encoding`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `destinationDirectory`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `archiveClassifier`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `archiveBaseName`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `archiveVersion`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `archiveExtension`
* [Use `=` assignment syntax for Gradle properties](../gradle/usepropertyassignmentsyntax)
  * propertyName: `archiveFileName`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gradle.UseAssignmentForPropertySyntax
displayName: Use `=` assignment syntax for well-known Gradle properties
description: |
  Converts deprecated Groovy DSL property assignment syntax from space/method-call form (e.g., `description 'text'` or `description('text')`) to assignment form (`description = 'text'`) for well-known Gradle project and task properties. See the [Gradle 8.14 upgrade guide](https://docs.gradle.org/8.14/userguide/upgrading_version_8.html#groovy_space_assignment_syntax) for more information.
recipeList:
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: description
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: group
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: version
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: sourceCompatibility
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: targetCompatibility
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: archivesBaseName
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: encoding
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: destinationDirectory
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: archiveClassifier
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: archiveBaseName
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: archiveVersion
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: archiveExtension
  - org.openrewrite.gradle.UsePropertyAssignmentSyntax:
      propertyName: archiveFileName

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Gradle 8 from Gradle 7](/recipes/gradle/migratetogradle8.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.gradle.UseAssignmentForPropertySyntax"
  displayName="Use `=` assignment syntax for well-known Gradle properties"
  groupId="org.openrewrite"
  artifactId="rewrite-gradle"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_GRADLE"
  isCoreLibrary
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.UseAssignmentForPropertySyntax" />

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
