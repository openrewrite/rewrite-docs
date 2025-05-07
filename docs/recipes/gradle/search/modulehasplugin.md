---
sidebar_label: "Module has plugin"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Module has plugin

**org.openrewrite.gradle.search.ModuleHasPlugin**

_Searches for Gradle Projects (modules) that have a plugin matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring dependency management plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/ModuleHasPlugin.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | pluginId | The unique identifier used to apply a plugin in the `plugins` block. Note that this alone is insufficient to search for plugins applied by fully qualified class name and the `buildscript` block. | ``com.jfrog.bintray`` |
| `String` | pluginClass | *Optional*. The fully qualified name of a class implementing a Gradle plugin.  | `com.jfrog.bintray.gradle.BintrayPlugin` |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|pluginId|`org.openrewrite.rewrite`|
|pluginClass|`org.openrewrite.gradle.RewritePlugin`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java'
    id 'org.openrewrite.rewrite' version '6.18.0'
}
```

###### After
```groovy title="build.gradle"
/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/plugins {
    id 'java'
    id 'org.openrewrite.rewrite' version '6.18.0'
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -1,1 +1,1 @@
-plugins {
+/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/plugins {
    id 'java'
```
</TabItem>
</Tabs>

###### Unchanged
```groovy title="build.gradle"
plugins {
    id 'java'
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {}
```

###### After
```java
/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/class A {}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-class A {}
+/*~~(Module has plugin: org.openrewrite.rewrite)~~>*/class A {}

```
</TabItem>
</Tabs>

###### Unchanged
```java
class B {}
```

###### Unchanged
```mavenProject
multi-project-build
```

###### Unchanged
```mavenProject
other-project
```

###### Unchanged
```mavenProject
project-applies-openrewrite-plugin
```

###### Unchanged
```settingsGradle
include 'project-applies-openrewrite-plugin'
include 'other-project'
```


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ModuleHasPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ModuleHasPluginExample
displayName: Module has plugin example
recipeList:
  - org.openrewrite.gradle.search.ModuleHasPlugin:
      pluginId: '`com.jfrog.bintray`'
      pluginClass: com.jfrog.bintray.gradle.BintrayPlugin
```

Now that `com.yourorg.ModuleHasPluginExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("com.yourorg.ModuleHasPluginExample")
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
mod run . --recipe ModuleHasPlugin --recipe-option "pluginId='`com.jfrog.bintray`'" --recipe-option "pluginClass=com.jfrog.bintray.gradle.BintrayPlugin"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.search.ModuleHasPlugin" />

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
