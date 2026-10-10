---
title: "Upgrade Android Gradle Plugin version"
sidebar_label: "Upgrade Android Gradle Plugin version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade Android Gradle Plugin version

**org.openrewrite.android.UpgradeAndroidGradlePluginVersion**

_Upgrade the Android Gradle Plugin (AGP) version. Handles both the legacy `buildscript { dependencies { classpath 'com.android.tools.build:gradle:...' } }` form (delegating to the upstream `UpgradeDependencyVersion` recipe for full DSL coverage) and the modern `plugins { id("com.android.application") version "..." }` form._

## Recipe source

[GitHub: UpgradeAndroidGradlePluginVersion.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-android/src/main/java/org/openrewrite/android/UpgradeAndroidGradlePluginVersion.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-android/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. | `8.5.0` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. | `8.5.0` |


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Gradle dependency versions](../gradle/upgradedependencyversion)
  * groupId: `com.android.tools.build`
  * artifactId: `gradle`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.android.UpgradeAndroidGradlePluginVersion
displayName: Upgrade Android Gradle Plugin version
description: |
  Upgrade the Android Gradle Plugin (AGP) version. Handles both the legacy `buildscript { dependencies { classpath 'com.android.tools.build:gradle:...' } }` form (delegating to the upstream `UpgradeDependencyVersion` recipe for full DSL coverage) and the modern `plugins { id(&quot;com.android.application&quot;) version &quot;...&quot; }` form.


recipeList:
  - org.openrewrite.gradle.UpgradeDependencyVersion:
      groupId: com.android.tools.build
      artifactId: gradle

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Android Gradle Plugin 7.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_7_2)
* [Migrate to Android Gradle Plugin 7.3](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_7_3)
* [Migrate to Android Gradle Plugin 7.4](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_7_4)
* [Migrate to Android Gradle Plugin 8.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_0)
* [Migrate to Android Gradle Plugin 8.10](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_10)
* [Migrate to Android Gradle Plugin 8.11](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_11)
* [Migrate to Android Gradle Plugin 8.12](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_12)
* [Migrate to Android Gradle Plugin 8.13](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_13)
* [Migrate to Android Gradle Plugin 8.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_1)
* [Migrate to Android Gradle Plugin 8.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_2)
* [Migrate to Android Gradle Plugin 8.3](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_3)
* [Migrate to Android Gradle Plugin 8.4](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_4)
* [Migrate to Android Gradle Plugin 8.5](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_5)
* [Migrate to Android Gradle Plugin 8.6](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_6)
* [Migrate to Android Gradle Plugin 8.7](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_7)
* [Migrate to Android Gradle Plugin 8.8](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_8)
* [Migrate to Android Gradle Plugin 8.9](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_8_9)
* [Migrate to Android Gradle Plugin 9.0](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_9_0)
* [Migrate to Android Gradle Plugin 9.1](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_9_1)
* [Migrate to Android Gradle Plugin 9.2](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/migratetoandroidgradleplugin_9_2)
* [Upgrade to Android SDK 34](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/android/upgradetoandroidsdk34)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|newVersion|`8.5.0`|
|versionPattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'com.android.application' version '8.0.0'
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'com.android.application' version '8.5.0'
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -2,1 +2,1 @@
plugins {
-   id 'com.android.application' version '8.0.0'
+   id 'com.android.application' version '8.5.0'
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeAndroidGradlePluginVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeAndroidGradlePluginVersionExample
displayName: Upgrade Android Gradle Plugin version example
recipeList:
  - org.openrewrite.android.UpgradeAndroidGradlePluginVersion:
      newVersion: 8.5.0
      versionPattern: 8.5.0
```

<RunRecipe
  recipeName="org.openrewrite.android.UpgradeAndroidGradlePluginVersion"
  displayName="Upgrade Android Gradle Plugin version"
  groupId="org.openrewrite"
  artifactId="rewrite-android"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_ANDROID"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "newVersion=8.5.0"'}
  optionalCliOptions={' --recipe-option "versionPattern=8.5.0"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.android.UpgradeAndroidGradlePluginVersion" />

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
