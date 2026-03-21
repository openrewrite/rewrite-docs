---
sidebar_label: "Migrates from Netty 4.1.x to Netty 4.2.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates from Netty 4.1.x to Netty 4.2.x

**org.openrewrite.netty.UpgradeNetty\_4\_1\_to\_4\_2**

_Migrate applications to the latest Netty 4.2.x release._

### Tags

* [netty](/reference/recipes-by-tag#netty)

## Recipe source

[GitHub: netty-4_1_to_4_2.yml](https://github.com/openrewrite/rewrite-netty/blob/main/src/main/resources/META-INF/rewrite/netty-4_1_to_4_2.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-netty/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-netty/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Gradle or Maven dependency versions](../java/dependencies/upgradedependencyversion)
  * groupId: `io.netty`
  * artifactId: `*`
  * newVersion: `4.2.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `io.netty.incubator`
  * oldArtifactId: `netty-incubator-transport-classes-io_uring`
  * newGroupId: `io.netty`
  * newArtifactId: `netty-transport-classes-io_uring`
  * newVersion: `4.2.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency)
  * oldGroupId: `io.netty.incubator`
  * oldArtifactId: `netty-incubator-transport-native-io_uring`
  * newGroupId: `io.netty`
  * newArtifactId: `netty-transport-native-io_uring`
  * newVersion: `4.2.x`
* [Change type](../java/changetype)
  * oldFullyQualifiedTypeName: `io.netty.incubator.channel.uring.IOUring`
  * newFullyQualifiedTypeName: `io.netty.channel.uring.IoUring`
* [Rename package name](../java/changepackage)
  * oldPackageName: `io.netty.incubator.channel.uring`
  * newPackageName: `io.netty.channel.uring`
  * recursive: `true`
* [Replace all `EventLoopGroup`s with `MultiThreadIoEventLoopGroup`](../java/netty/eventloopgrouptomultithreadioeventloopgrouprecipes)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.netty.UpgradeNetty_4_1_to_4_2
displayName: Migrates from Netty 4.1.x to Netty 4.2.x
description: |
  Migrate applications to the latest Netty 4.2.x release.
tags:
  - netty
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: io.netty
      artifactId: "*"
      newVersion: 4.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.netty.incubator
      oldArtifactId: netty-incubator-transport-classes-io_uring
      newGroupId: io.netty
      newArtifactId: netty-transport-classes-io_uring
      newVersion: 4.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.netty.incubator
      oldArtifactId: netty-incubator-transport-native-io_uring
      newGroupId: io.netty
      newArtifactId: netty-transport-native-io_uring
      newVersion: 4.2.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.netty.incubator.channel.uring.IOUring
      newFullyQualifiedTypeName: io.netty.channel.uring.IoUring
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.netty.incubator.channel.uring
      newPackageName: io.netty.channel.uring
      recursive: true
  - org.openrewrite.java.netty.EventLoopGroupToMultiThreadIoEventLoopGroupRecipes

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`UpgradeNetty_4_1_to_4_2Test#changeType`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.netty.buffer.ByteBuf;
import io.netty.incubator.channel.uring.IOUring;

class Test {
    boolean isAvailable = IOUring.isAvailable();
}
```

###### After
```java
import io.netty.buffer.ByteBuf;
import io.netty.channel.uring.IoUring;

class Test {
    boolean isAvailable = IoUring.isAvailable();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
import io.netty.buffer.ByteBuf;
-import io.netty.incubator.channel.uring.IOUring;
+import io.netty.channel.uring.IoUring;

@@ -5,1 +5,1 @@

class Test {
-   boolean isAvailable = IOUring.isAvailable();
+   boolean isAvailable = IoUring.isAvailable();
}
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeNetty_4_1_to_4_2Test#changeType`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.netty.buffer.ByteBuf;
import io.netty.incubator.channel.uring.IOUring;

class Test {
    boolean isAvailable = IOUring.isAvailable();
}
```

###### After
```java
import io.netty.buffer.ByteBuf;
import io.netty.channel.uring.IoUring;

class Test {
    boolean isAvailable = IoUring.isAvailable();
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
import io.netty.buffer.ByteBuf;
-import io.netty.incubator.channel.uring.IOUring;
+import io.netty.channel.uring.IoUring;

@@ -5,1 +5,1 @@

class Test {
-   boolean isAvailable = IOUring.isAvailable();
+   boolean isAvailable = IoUring.isAvailable();
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.netty.UpgradeNetty_4_1_to_4_2"
  displayName="Migrates from Netty 4.1.x to Netty 4.2.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-netty"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_NETTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.netty.UpgradeNetty_4_1_to_4_2" />

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
