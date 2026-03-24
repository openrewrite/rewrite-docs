---
sidebar_label: "Change Gradle task eager creation to lazy registration"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change Gradle task eager creation to lazy registration

**org.openrewrite.gradle.ChangeTaskToTasksRegister**

_Changes eager task creation `task exampleName(type: ExampleType)` to lazy registration `tasks.register("exampleName", ExampleType)`. Also supports Kotlin DSL: `task<ExampleType>("exampleName")` to `tasks.register<ExampleType>("exampleName")`._

## Recipe source

[GitHub: ChangeTaskToTasksRegister.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/ChangeTaskToTasksRegister.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Used by

This recipe is used as part of the following composite recipes:

* [Apply Gradle best practices](/recipes/gradle/gradlebestpractices.md)

## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
task exampleName(type: Copy) {
    from 'src/main/resources'
    into 'build/generated-resources'
}
```

###### After
```groovy title="build.gradle"
tasks.register("exampleName", Copy) {
    from 'src/main/resources'
    into 'build/generated-resources'
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -1,1 +1,1 @@
-task exampleName(type: Copy) {
+tasks.register("exampleName", Copy) {
    from 'src/main/resources'
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle.kts" label="build.gradle.kts">


###### Before
```kotlin title="build.gradle.kts"
task<Copy>("exampleName") {
    from("src")
    into("dest")
}
```

###### After
```kotlin title="build.gradle.kts"
tasks.register<Copy>("exampleName") {
    from("src")
    into("dest")
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle.kts
+++ build.gradle.kts
@@ -1,1 +1,1 @@
-task<Copy>("exampleName") {
+tasks.register<Copy>("exampleName") {
    from("src")
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.gradle.ChangeTaskToTasksRegister"
  displayName="Change Gradle task eager creation to lazy registration"
  groupId="org.openrewrite"
  artifactId="rewrite-gradle"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_GRADLE"
  isCoreLibrary
  showMaven={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.ChangeTaskToTasksRegister" />

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
