---
sidebar_label: "Update Gradle project Java compatibility"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update Gradle project Java compatibility

**org.openrewrite.gradle.UpdateJavaCompatibility**

_Find and updates the Java compatibility for the Gradle project._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateJavaCompatibility.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `Integer` | version | The Java version to upgrade to. | `11` |
| `CompatibilityType` | compatibilityType | *Optional*. The compatibility type to change Valid options: `source`, `target` |  |
| `DeclarationStyle` | declarationStyle | *Optional*. The desired style to write the new version as when being written to the `sourceCompatibility` or `targetCompatibility` variables. Default, match current source style. (ex. Enum: `JavaVersion.VERSION_11`, Number: 11, or String: "11") Valid options: `Enum`, `Number`, `String` |  |
| `Boolean` | allowDowngrade | *Optional*. Allow downgrading the Java version. |  |
| `Boolean` | addIfMissing | *Optional*. Adds the specified compatibility type if one is not found. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade Java version](/recipes/io/quarkus/updates/core/quarkus37/upgradejavaversion.md)
* [Upgrade Java version](/recipes/java/migrate/upgradejavaversion.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|version|`11`|
|compatibilityType|`UpdateJavaCompatibility.CompatibilityType.source`|
|declarationStyle|`null`|
|allowDowngrade|`null`|
|addIfMissing|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id "java"
}

sourceCompatibility = 1.8
targetCompatibility = 1.8
```

###### After
```groovy title="build.gradle"
plugins {
    id "java"
}

sourceCompatibility = 11
targetCompatibility = 1.8
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -5,1 +5,1 @@
}

-sourceCompatibility = 1.8
+sourceCompatibility = 11
targetCompatibility = 1.8
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateJavaCompatibilityExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateJavaCompatibilityExample
displayName: Update Gradle project Java compatibility example
recipeList:
  - org.openrewrite.gradle.UpdateJavaCompatibility:
      version: 11
```

Now that `com.yourorg.UpdateJavaCompatibilityExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.UpdateJavaCompatibilityExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpdateJavaCompatibility --recipe-option "version=11"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateJavaCompatibility" />

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
