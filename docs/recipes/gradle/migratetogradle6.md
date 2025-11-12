---
sidebar_label: "Migrate to Gradle 6 from Gradle 5"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Gradle 6 from Gradle 5

**org.openrewrite.gradle.MigrateToGradle6**

_Migrate to version 6.x. See the Gradle upgrade guide from [version 5.x to 6.0](https://docs.gradle.org/current/userguide/upgrading_version_5.html) for more information._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/src/main/java/org/openrewrite/gradle/MigrateToGradle6.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Gradle 5 from Gradle 4](../gradle/migratetogradle5)
* [Update Gradle wrapper](../gradle/updategradlewrapper)
  * version: `6.x`
  * addIfMissing: `false`
* [Change a Gradle dependency configuration](../gradle/changedependencyconfiguration)
  * groupId: `*`
  * artifactId: `*`
  * newConfiguration: `runtimeOnly`
  * configuration: `runtime`
* [Change a Gradle dependency configuration](../gradle/changedependencyconfiguration)
  * groupId: `*`
  * artifactId: `*`
  * newConfiguration: `testImplementation`
  * configuration: `testCompile`
* [Change a Gradle dependency configuration](../gradle/changedependencyconfiguration)
  * groupId: `*`
  * artifactId: `*`
  * newConfiguration: `testRuntimeOnly`
  * configuration: `testRuntime`
* [Remove an enabled Gradle preview feature](../gradle/removeenablefeaturepreview)
  * previewFeatureName: `IMPROVED_POM_SUPPORT`
* [Remove an enabled Gradle preview feature](../gradle/removeenablefeaturepreview)
  * previewFeatureName: `STABLE_PUBLISHING`
* [Remove an enabled Gradle preview feature](../gradle/removeenablefeaturepreview)
  * previewFeatureName: `INCREMENTAL_ARTIFACT_TRANSFORMATIONS`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gradle.MigrateToGradle6
displayName: Migrate to Gradle 6 from Gradle 5
description: |
  Migrate to version 6.x. See the Gradle upgrade guide from [version 5.x to 6.0](https://docs.gradle.org/current/userguide/upgrading_version_5.html) for more information.
recipeList:
  - org.openrewrite.gradle.MigrateToGradle5
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 6.x
      addIfMissing: false
  - org.openrewrite.gradle.ChangeDependencyConfiguration:
      groupId: "*"
      artifactId: "*"
      newConfiguration: runtimeOnly
      configuration: runtime
  - org.openrewrite.gradle.ChangeDependencyConfiguration:
      groupId: "*"
      artifactId: "*"
      newConfiguration: testImplementation
      configuration: testCompile
  - org.openrewrite.gradle.ChangeDependencyConfiguration:
      groupId: "*"
      artifactId: "*"
      newConfiguration: testRuntimeOnly
      configuration: testRuntime
  - org.openrewrite.gradle.RemoveEnableFeaturePreview:
      previewFeatureName: IMPROVED_POM_SUPPORT
  - org.openrewrite.gradle.RemoveEnableFeaturePreview:
      previewFeatureName: STABLE_PUBLISHING
  - org.openrewrite.gradle.RemoveEnableFeaturePreview:
      previewFeatureName: INCREMENTAL_ARTIFACT_TRANSFORMATIONS

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Gradle 7 from Gradle 6](/recipes/gradle/migratetogradle7.md)


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.MigrateToGradle6")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:latest.release") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite:rewrite-java")
    }
    rewrite {
        activeRecipe("org.openrewrite.gradle.MigrateToGradle6")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```
</TabItem>

<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateToGradle6
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.MigrateToGradle6" />

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
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
