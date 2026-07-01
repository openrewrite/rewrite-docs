---
title: "Upgrade Kotlin to 2.3 for Java 25 compatibility"
sidebar_label: "Upgrade Kotlin to 2.3 for Java 25 compatibility"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade Kotlin to 2.3 for Java 25 compatibility

**org.openrewrite.java.migrate.UpgradeKotlinForJava25**

_Only Kotlin 2.3 and later can target Java 25 bytecode, so modules on an older Kotlin are otherwise capped at Java 24. This recipe upgrades modules that compile Kotlin (i.e. contain `.kt` source files) and are already on Kotlin 2.0, 2.1, or 2.2 up to the latest Kotlin 2.3, so they can subsequently be migrated to Java 25. Modules on Kotlin 1.x are left untouched, as crossing the K2 compiler default introduced in Kotlin 2.0 is a source-breaking change that should not be applied automatically. As a safety net the module is also floored at Java 24: if the Kotlin upgrade cannot be applied (for instance because the version is managed externally by a parent or BOM), the module still lands on Java 24 rather than being left behind, and is raised the rest of the way to Java 25 only once it actually reaches Kotlin 2.3._

### Tags

* [kotlin](/reference/recipes-by-tag#kotlin)
* [java25](/reference/recipes-by-tag#java25)

## Recipe source

[GitHub: java-version-25.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-25.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Module has Kotlin source files](../../java/migrate/search/modulehaskotlinsource)
* [Module has dependency](../../java/dependencies/search/modulehasdependency)
  * groupIdPattern: `org.jetbrains.kotlin`
  * artifactIdPattern: `kotlin-stdlib*`
  * version: `[2.0,2.3)`

**Recipes**

* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.jetbrains.kotlin`
  * artifactId: `*`
  * newVersion: `2.3.x`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion)
  * groupId: `org.jetbrains.kotlin`
  * artifactId: `kotlin-maven-plugin`
  * newVersion: `2.3.x`
* [Update a Gradle plugin by id](../../gradle/plugins/upgradepluginversion)
  * pluginIdPattern: `org.jetbrains.kotlin.*`
  * newVersion: `2.3.x`
* [Upgrade Java version](../../java/migrate/upgradejavaversion)
  * version: `24`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.UpgradeKotlinForJava25
displayName: Upgrade Kotlin to 2.3 for Java 25 compatibility
description: |
  Only Kotlin 2.3 and later can target Java 25 bytecode, so modules on an older Kotlin are otherwise capped at Java 24. This recipe upgrades modules that compile Kotlin (i.e. contain `.kt` source files) and are already on Kotlin 2.0, 2.1, or 2.2 up to the latest Kotlin 2.3, so they can subsequently be migrated to Java 25. Modules on Kotlin 1.x are left untouched, as crossing the K2 compiler default introduced in Kotlin 2.0 is a source-breaking change that should not be applied automatically. As a safety net the module is also floored at Java 24: if the Kotlin upgrade cannot be applied (for instance because the version is managed externally by a parent or BOM), the module still lands on Java 24 rather than being left behind, and is raised the rest of the way to Java 25 only once it actually reaches Kotlin 2.3.
tags:
  - kotlin
  - java25
preconditions:
  - org.openrewrite.java.migrate.search.ModuleHasKotlinSource
  - org.openrewrite.java.dependencies.search.ModuleHasDependency:
      groupIdPattern: org.jetbrains.kotlin
      artifactIdPattern: kotlin-stdlib*
      version: [2.0,2.3)
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.jetbrains.kotlin
      artifactId: "*"
      newVersion: 2.3.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.jetbrains.kotlin
      artifactId: kotlin-maven-plugin
      newVersion: 2.3.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.jetbrains.kotlin.*
      newVersion: 2.3.x
  - org.openrewrite.java.migrate.UpgradeJavaVersion:
      version: 24

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 25](/recipes/java/migrate/upgradetojava25.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.UpgradeKotlinForJava25"
  displayName="Upgrade Kotlin to 2.3 for Java 25 compatibility"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.UpgradeKotlinForJava25" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

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
