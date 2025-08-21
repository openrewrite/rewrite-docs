---
sidebar_label: "Change Android SDK version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Android SDK version

**org.openrewrite.android.ChangeAndroidSdkVersion**

_Change `compileSdk`, `compileSdkVersion`, `targetSdk` and `targetSdkVersion` in an Android Gradle build file to the argument version._

## Recipe source

This recipe is only available to users of [Moderne](https://docs.moderne.io/).


This recipe is available under the [Moderne Proprietary License](https://docs.moderne.io/licensing/overview).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `Integer` | version | The version of the Android SDK to use. | `35` |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Android SDK 33](/recipes/android/upgradetoandroidsdk33.md)
* [Upgrade to Android SDK 34](/recipes/android/upgradetoandroidsdk34.md)
* [Upgrade to Android SDK 35](/recipes/android/upgradetoandroidsdk35.md)

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|version|`35`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
buildscript {
    repositories {
        mavenCentral()
        google()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.6.1'
    }
}
repositories {
    mavenCentral()
}
apply plugin: 'com.android.application'
group = "org.example"
version = "1.0-SNAPSHOT"
android {
   compileSdk 28
   defaultConfig {
       targetSdk 28
   }
   namespace = "com.example.myapp"
}
```

###### After
```groovy title="build.gradle"
buildscript {
    repositories {
        mavenCentral()
        google()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:8.6.1'
    }
}
repositories {
    mavenCentral()
}
apply plugin: 'com.android.application'
group = "org.example"
version = "1.0-SNAPSHOT"
android {
   compileSdk 35
   defaultConfig {
       targetSdk 35
   }
   namespace = "com.example.myapp"
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -17,1 +17,1 @@
version = "1.0-SNAPSHOT"
android {
-  compileSdk 28
+  compileSdk 35
   defaultConfig {
@@ -19,1 +19,1 @@
   compileSdk 28
   defaultConfig {
-      targetSdk 28
+      targetSdk 35
   }
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters and can only be run by users of Moderne.
To run this recipe, you will need to provide the Moderne CLI run command with the required options. 
Or, if you'd like to create a declarative recipe, please see the below example of a `rewrite.yml` file:

```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeAndroidSdkVersionExample
displayName: Change Android SDK version example
recipeList:
  - org.openrewrite.android.ChangeAndroidSdkVersion: 
      version: 35
```

<Tabs groupId="projectType">
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeAndroidSdkVersion --recipe-option "version=35"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-android:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_ANDROID}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.android.ChangeAndroidSdkVersion" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
