---
title: "Update Spring Cloud Contract coordinates to Stubborn Contract"
sidebar_label: "Update Spring Cloud Contract coordinates to Stubborn Contract"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Update Spring Cloud Contract coordinates to Stubborn Contract

**sh.stubborn.contract.migration.UpdateDependencies**

_Replaces org.springframework.cloud:spring-cloud-contract-* GAVs with sh.stubborn:stubborn-* equivalents, migrates the spring-cloud-contract-dependencies BOM, and swaps both build plugins, in Maven and Gradle builds alike. The com.toomuchcoding JSON/XML assertion coordinates are swapped alongside the sh.stubborn.jsonassert / sh.stubborn.xmlassert package renames. Every coordinate is repinned to latest.release._

### Tags

* [gradle](/reference/recipes-by-tag#gradle)
* [spring-cloud-contract](/reference/recipes-by-tag#spring)
* [stubborn-contract](/reference/recipes-by-tag#stubborn)

## Recipe source

[GitHub: search?type=code&q=sh.stubborn.contract.migration.UpdateDependencies](https://github.com/search?type=code&q=sh.stubborn.contract.migration.UpdateDependencies),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-verifier`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-verifier`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-stub-runner`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-stub-runner`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-contract-verifier`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-starter-verifier`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-contract-stub-runner`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-starter-stub-runner`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-contract-stub-runner-jetty`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-starter-stub-runner-jetty`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-wiremock`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-wiremock`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-converters`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-converters`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-spec`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-spec`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-spec-java`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-spec-java`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-spec-groovy`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-spec-groovy`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-spec-kotlin`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-spec-kotlin`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.toomuchcoding.jsonassert`
  * oldArtifactId: `jsonassert`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-jsonassert`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `com.toomuchcoding.xmlassert`
  * oldArtifactId: `xmlassert`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-xmlassert`
  * newVersion: `latest.release`
* [Change Gradle or Maven dependency](../../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-dependencies`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-dependencies`
  * newVersion: `latest.release`
* [Change Maven plugin group and artifact ID](../../../../maven/changeplugingroupidandartifactid)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-contract-maven-plugin`
  * newGroupId: `sh.stubborn`
  * newArtifactId: `stubborn-contract-maven-plugin`
  * newVersion: `latest.release`
* [Change a Gradle plugin](../../../../gradle/plugins/changeplugin)
  * pluginId: `org.springframework.cloud.contract`
  * newPluginId: `sh.stubborn.contract`
  * newVersion: `latest.release`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: sh.stubborn.contract.migration.UpdateDependencies
displayName: Update Spring Cloud Contract coordinates to Stubborn Contract
description: |
  Replaces org.springframework.cloud:spring-cloud-contract-* GAVs with sh.stubborn:stubborn-* equivalents, migrates the spring-cloud-contract-dependencies BOM, and swaps both build plugins, in Maven and Gradle builds alike. The com.toomuchcoding JSON/XML assertion coordinates are swapped alongside the sh.stubborn.jsonassert / sh.stubborn.xmlassert package renames. Every coordinate is repinned to latest.release.
tags:
  - gradle
  - spring-cloud-contract
  - stubborn-contract
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-verifier
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-verifier
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-stub-runner
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-stub-runner
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-contract-verifier
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-starter-verifier
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-contract-stub-runner
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-starter-stub-runner
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-contract-stub-runner-jetty
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-starter-stub-runner-jetty
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-wiremock
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-wiremock
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-converters
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-converters
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-spec
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-spec
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-spec-java
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-spec-java
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-spec-groovy
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-spec-groovy
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-spec-kotlin
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-spec-kotlin
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.toomuchcoding.jsonassert
      oldArtifactId: jsonassert
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-jsonassert
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: com.toomuchcoding.xmlassert
      oldArtifactId: xmlassert
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-xmlassert
      newVersion: latest.release
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-dependencies
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-dependencies
      newVersion: latest.release
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-contract-maven-plugin
      newGroupId: sh.stubborn
      newArtifactId: stubborn-contract-maven-plugin
      newVersion: latest.release
  - org.openrewrite.gradle.plugins.ChangePlugin:
      pluginId: org.springframework.cloud.contract
      newPluginId: sh.stubborn.contract
      newVersion: latest.release

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Spring Cloud Contract to Stubborn Contract](/recipes/sh/stubborn/contract/migration/migratefromspringcloudcontract.md)


## Usage

<RunRecipe
  recipeName="sh.stubborn.contract.migration.UpdateDependencies"
  displayName="Update Spring Cloud Contract coordinates to Stubborn Contract"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/sh.stubborn.contract.migration.UpdateDependencies" />

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
