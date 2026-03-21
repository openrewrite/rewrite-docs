---
sidebar_label: "Upgrade to JUnit 5.14"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to JUnit 5.14

**org.openrewrite.java.testing.junit5.UpgradeToJUnit514**

_Upgrades JUnit 5 to 5.14.x and migrates all deprecated APIs._

### Tags

* [junit](/reference/recipes-by-tag#junit)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub: junit5.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade to JUnit 5.13](../../../java/testing/junit5/upgradetojunit513)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.junit`
  * artifactId: `junit-bom`
  * newVersion: `5.14.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.junit.jupiter`
  * artifactId: `*`
  * newVersion: `5.14.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.junit.platform`
  * artifactId: `*`
  * newVersion: `1.14.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.junit.vintage`
  * artifactId: `*`
  * newVersion: `5.14.x`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.junit.platform.engine.reporting.OutputDirectoryProvider`
  * newFullyQualifiedTypeName: `org.junit.platform.engine.OutputDirectoryCreator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.junit.platform.commons.support.Resource`
  * newFullyQualifiedTypeName: `org.junit.platform.commons.io.Resource`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.junit.jupiter.api.extension.MediaType`
  * newFullyQualifiedTypeName: `org.junit.jupiter.api.MediaType`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.junit.jupiter.params.support.ParameterInfo`
  * newFullyQualifiedTypeName: `org.junit.jupiter.params.ParameterInfo`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.junit.platform.engine.discovery.DiscoverySelectors selectClasspathResource(java.util.Set)`
  * newMethodName: `selectClasspathResourceByName`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.junit.platform.engine.discovery.ClasspathResourceSelector getClasspathResources()`
  * newMethodName: `getResources`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.gradle.internal.impldep.org.junit.platform.engine.support.discovery.EngineDiscoveryRequestResolver.Builder addResourceContainerSelectorResolver(java.util.function.Predicate)`
  * newMethodName: `addResourceContainerSelectorResolver`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.UpgradeToJUnit514
displayName: Upgrade to JUnit 5.14
description: |
  Upgrades JUnit 5 to 5.14.x and migrates all deprecated APIs.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.junit5.UpgradeToJUnit513
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.junit
      artifactId: junit-bom
      newVersion: 5.14.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.junit.jupiter
      artifactId: "*"
      newVersion: 5.14.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.junit.platform
      artifactId: "*"
      newVersion: 1.14.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.junit.vintage
      artifactId: "*"
      newVersion: 5.14.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.platform.engine.reporting.OutputDirectoryProvider
      newFullyQualifiedTypeName: org.junit.platform.engine.OutputDirectoryCreator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.platform.commons.support.Resource
      newFullyQualifiedTypeName: org.junit.platform.commons.io.Resource
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.jupiter.api.extension.MediaType
      newFullyQualifiedTypeName: org.junit.jupiter.api.MediaType
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.jupiter.params.support.ParameterInfo
      newFullyQualifiedTypeName: org.junit.jupiter.params.ParameterInfo
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.junit.platform.engine.discovery.DiscoverySelectors selectClasspathResource(java.util.Set)
      newMethodName: selectClasspathResourceByName
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.junit.platform.engine.discovery.ClasspathResourceSelector getClasspathResources()
      newMethodName: getResources
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.gradle.internal.impldep.org.junit.platform.engine.support.discovery.EngineDiscoveryRequestResolver.Builder addResourceContainerSelectorResolver(java.util.function.Predicate)
      newMethodName: addResourceContainerSelectorResolver

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [JUnit 5 best practices](/recipes/java/testing/junit5/junit5bestpractices.md)
* [JUnit 6 migration from JUnit 5.x](/recipes/java/testing/junit6/junit5to6migration.md)
* [Migrate to Dropwizard 5.0.x from 4.x](/recipes/java/dropwizard/migratetodropwizard5.md)

## Examples
##### Example 1
`UpgradeToJUnit514Test#migrateOutputDirectoryProvider`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.platform.engine.reporting.OutputDirectoryProvider;

public class TestClass {
    private OutputDirectoryProvider provider;

    public void useProvider(OutputDirectoryProvider p) {
        this.provider = p;
    }
}
```

###### After
```java
import org.junit.platform.engine.OutputDirectoryCreator;

public class TestClass {
    private OutputDirectoryCreator provider;

    public void useProvider(OutputDirectoryCreator p) {
        this.provider = p;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.junit.platform.engine.reporting.OutputDirectoryProvider;
+import org.junit.platform.engine.OutputDirectoryCreator;

@@ -4,1 +4,1 @@

public class TestClass {
-   private OutputDirectoryProvider provider;
+   private OutputDirectoryCreator provider;

@@ -6,1 +6,1 @@
    private OutputDirectoryProvider provider;

-   public void useProvider(OutputDirectoryProvider p) {
+   public void useProvider(OutputDirectoryCreator p) {
        this.provider = p;
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeToJUnit514Test#migrateOutputDirectoryProvider`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.platform.engine.reporting.OutputDirectoryProvider;

public class TestClass {
    private OutputDirectoryProvider provider;

    public void useProvider(OutputDirectoryProvider p) {
        this.provider = p;
    }
}
```

###### After
```java
import org.junit.platform.engine.OutputDirectoryCreator;

public class TestClass {
    private OutputDirectoryCreator provider;

    public void useProvider(OutputDirectoryCreator p) {
        this.provider = p;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.junit.platform.engine.reporting.OutputDirectoryProvider;
+import org.junit.platform.engine.OutputDirectoryCreator;

@@ -4,1 +4,1 @@

public class TestClass {
-   private OutputDirectoryProvider provider;
+   private OutputDirectoryCreator provider;

@@ -6,1 +6,1 @@
    private OutputDirectoryProvider provider;

-   public void useProvider(OutputDirectoryProvider p) {
+   public void useProvider(OutputDirectoryCreator p) {
        this.provider = p;
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.junit5.UpgradeToJUnit514"
  displayName="Upgrade to JUnit 5.14"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.UpgradeToJUnit514" />

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
