---
sidebar_label: "Find Gradle dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Find Gradle dependency

**org.openrewrite.gradle.search.FindDependency**

```
Finds dependencies declared in gradle build files. See the [reference](https://docs.gradle.org/current/userguide/java_library_plugin.html#sec:java_library_configurations_graph) on Gradle configurations or the diagram below for a description of what configuration to use. A project's compile and runtime classpath is based on these configurations.

<img alt="Gradle compile classpath" src="https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-main.png" width="200px"/>
A project's test classpath is based on these configurations.

<img alt="Gradle test classpath" src="https://docs.gradle.org/current/userguide/img/java-library-ignore-deprecated-test.png" width="200px"/>.
```


## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | groupId | The first part of a dependency coordinate identifying its publisher. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate uniquely identifying it among artifacts from the same publisher. | `guava` |
| `String` | configuration | *Optional*. The dependency configuration to search for dependencies in. If omitted then all configurations will be searched. | `api` |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. | `3.0.0` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|groupId|`org.openrewrite`|
|artifactId|`rewrite-core`|
|configuration|`api`|
|version||
|versionPattern||


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    api "org.openrewrite:rewrite-core:latest.release"
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    /*~~>*/api "org.openrewrite:rewrite-core:latest.release"
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   api "org.openrewrite:rewrite-core:latest.release"
+   /*~~>*/api "org.openrewrite:rewrite-core:latest.release"
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindDependencyExample
displayName: Find Gradle dependency example
recipeList:
  - org.openrewrite.gradle.search.FindDependency:
      groupId: com.google.guava
      artifactId: guava
      configuration: api
      version: 3.0.0
      versionPattern: '-jre'
```

Now that `com.yourorg.FindDependencyExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.FindDependencyExample")
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
mod run . --recipe FindDependency --recipe-option "groupId=com.google.guava" --recipe-option "artifactId=guava" --recipe-option "configuration=api" --recipe-option "version=3.0.0" --recipe-option "versionPattern='-jre'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.search.FindDependency" />

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
