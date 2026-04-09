---
sidebar_label: "Migrate Log4j 1.x to Log4j 2.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Log4j 1.x to Log4j 2.x

**org.openrewrite.java.logging.log4j.Log4j1ToLog4j2**

_Migrates Log4j 1.x to Log4j 2.x._

### Tags

* [logging](/reference/recipes-by-tag#logging)
* [log4j](/reference/recipes-by-tag#log4j)

## Recipe source

[GitHub: log4j.yml](https://github.com/openrewrite/rewrite-logging-frameworks/blob/main/src/main/resources/META-INF/rewrite/log4j.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-logging-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-logging-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Replace any Lombok log annotations with target logging framework annotation](../../../java/logging/changelomboklogannotation)
  * loggingFramework: `Log4J2`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.apache.log4j.Logger getLogger(..)`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.apache.log4j.Logger getRootLogger()`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Convert Log4j `Logger.setLevel` to Log4j2 `Configurator.setLevel`](../../../java/logging/log4j/loggersetleveltoconfiguratorrecipe)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.log4j.Priority isGreaterOrEqual(org.apache.log4j.Priority)`
  * newMethodName: `isMoreSpecificThan`
  * matchOverrides: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.log4j.Category isEnabledFor(org.apache.log4j.Priority)`
  * newMethodName: `isEnabled`
  * matchOverrides: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.log4j.Priority`
  * newFullyQualifiedTypeName: `org.apache.logging.log4j.Level`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.apache.log4j.Category getInstance(Class)`
  * fullyQualifiedTargetTypeName: `org.apache.logging.log4j.LogManager`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.logging.log4j.LogManager getInstance(Class)`
  * newMethodName: `getLogger`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.log4j.Category getEffectiveLevel()`
  * newMethodName: `getLevel`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.log4j.Category`
  * newFullyQualifiedTypeName: `org.apache.logging.log4j.Logger`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.apache.log4j`
  * newPackageName: `org.apache.logging.log4j`
* [Parameterize Log4j 2.x logging statements](../../../java/logging/log4j/parameterizedlogging)
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * version: `2.x`
  * onlyIfUsing: `org.apache.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * version: `2.x`
  * onlyIfUsing: `org.apache.log4j.*`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `log4j`
  * artifactId: `log4j`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `ch.qos.reload4j`
  * artifactId: `reload4j`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-api`
  * version: `2.x`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.apache.logging.log4j`
  * artifactId: `log4j-core`
  * version: `2.x`
  * onlyIfUsing: `org.apache.logging.log4j.*`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.slf4j`
  * oldArtifactId: `slf4j-log4j12`
  * newGroupId: `org.apache.logging.log4j`
  * newArtifactId: `log4j-slf4j-impl`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.slf4j`
  * oldArtifactId: `slf4j-reload4j`
  * newGroupId: `org.apache.logging.log4j`
  * newArtifactId: `log4j-slf4j-impl`
  * newVersion: `2.x`
* [Upgrade Log4j 2.x dependency version](../../../java/logging/log4j/upgradelog4j2dependencyversion)
* [Inline `log4j-api-2` methods annotated with `@InlineMe`](../../../org/apache/logging/log4j/inlinelog4japimethods)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.logging.log4j.Log4j1ToLog4j2
displayName: Migrate Log4j 1.x to Log4j 2.x
description: |
  Migrates Log4j 1.x to Log4j 2.x.
tags:
  - logging
  - log4j
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.logging.ChangeLombokLogAnnotation:
      loggingFramework: Log4J2
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.log4j.Logger getLogger(..)
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.log4j.Logger getRootLogger()
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.logging.log4j.LoggerSetLevelToConfiguratorRecipe
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.log4j.Priority isGreaterOrEqual(org.apache.log4j.Priority)
      newMethodName: isMoreSpecificThan
      matchOverrides: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.log4j.Category isEnabledFor(org.apache.log4j.Priority)
      newMethodName: isEnabled
      matchOverrides: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.log4j.Priority
      newFullyQualifiedTypeName: org.apache.logging.log4j.Level
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.apache.log4j.Category getInstance(Class)
      fullyQualifiedTargetTypeName: org.apache.logging.log4j.LogManager
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.logging.log4j.LogManager getInstance(Class)
      newMethodName: getLogger
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.log4j.Category getEffectiveLevel()
      newMethodName: getLevel
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.log4j.Category
      newFullyQualifiedTypeName: org.apache.logging.log4j.Logger
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.log4j
      newPackageName: org.apache.logging.log4j
  - org.openrewrite.java.logging.log4j.ParameterizedLogging
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      version: 2.x
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      version: 2.x
      onlyIfUsing: org.apache.log4j.*
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: log4j
      artifactId: log4j
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: ch.qos.reload4j
      artifactId: reload4j
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-api
      version: 2.x
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.apache.logging.log4j
      artifactId: log4j-core
      version: 2.x
      onlyIfUsing: org.apache.logging.log4j.*
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.slf4j
      oldArtifactId: slf4j-log4j12
      newGroupId: org.apache.logging.log4j
      newArtifactId: log4j-slf4j-impl
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.slf4j
      oldArtifactId: slf4j-reload4j
      newGroupId: org.apache.logging.log4j
      newArtifactId: log4j-slf4j-impl
      newVersion: 2.x
  - org.openrewrite.java.logging.log4j.UpgradeLog4J2DependencyVersion
  - org.apache.logging.log4j.InlineLog4jApiMethods

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Log4j 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/log4j1toslf4j1.md)

## Examples
##### Example 1
`Log4j1ToLog4j2Test#loggerToLogManager`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.log4j.Logger;

class Test {
    Logger logger = Logger.getLogger(Test.class);
}
```

###### After
```java
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

class Test {
    Logger logger = LogManager.getLogger(Test.class);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.apache.log4j.Logger;
+import org.apache.logging.log4j.Logger;
+import org.apache.logging.log4j.LogManager;

@@ -4,1 +5,1 @@

class Test {
-   Logger logger = Logger.getLogger(Test.class);
+   Logger logger = LogManager.getLogger(Test.class);
}
```
</TabItem>
</Tabs>

---

##### Example 2
`Log4j1ToLog4j2Test#loggerToLogManager`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.log4j.Logger;

class Test {
    Logger logger = Logger.getLogger(Test.class);
}
```

###### After
```java
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;

class Test {
    Logger logger = LogManager.getLogger(Test.class);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import org.apache.log4j.Logger;
+import org.apache.logging.log4j.Logger;
+import org.apache.logging.log4j.LogManager;

@@ -4,1 +5,1 @@

class Test {
-   Logger logger = Logger.getLogger(Test.class);
+   Logger logger = LogManager.getLogger(Test.class);
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.logging.log4j.Log4j1ToLog4j2"
  displayName="Migrate Log4j 1.x to Log4j 2.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-logging-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LOGGING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.logging.log4j.Log4j1ToLog4j2" />

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
