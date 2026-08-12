---
title: "Upgrade to Cucumber-JVM 2.x"
sidebar_label: "Upgrade to Cucumber-JVM 2.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to Cucumber-JVM 2.x

**org.openrewrite.cucumber.jvm.UpgradeCucumber2x**

_Upgrade to Cucumber-JVM 2.x from any previous version._

### Tags

* [cucumber](/reference/recipes-by-tag#cucumber)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub: cucumber.yml](https://github.com/openrewrite/rewrite-cucumber-jvm/blob/main/src/main/resources/META-INF/rewrite/cucumber.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-cucumber-jvm/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-cucumber-jvm/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-android`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-android`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-clojure`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-clojure`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-core`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-core`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-gosu`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-gosu`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-groovy`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-groovy`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-guice`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-guice`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-java`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-java`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-java8`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-java8`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-jruby`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-jruby`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-junit`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-junit`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-jython`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-jython`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-needle`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-needle`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-openejb`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-openejb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-osgi`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-osgi`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-picocontainer`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-picocontainer`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-rhino`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-rhino`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-scala_2.10`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-scala_2.10`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-scala_2.11`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-scala_2.11`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-scala_2.12`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-scala_2.12`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-spring`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-spring`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-testng`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-testng`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `info.cukes`
  * oldArtifactId: `cucumber-weld`
  * newGroupId: `io.cucumber`
  * newArtifactId: `cucumber-weld`
  * newVersion: `2.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.cucumber.jvm.UpgradeCucumber2x
displayName: Upgrade to Cucumber-JVM 2.x
description: |
  Upgrade to Cucumber-JVM 2.x from any previous version.
tags:
  - cucumber
  - testing
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-android
      newGroupId: io.cucumber
      newArtifactId: cucumber-android
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-clojure
      newGroupId: io.cucumber
      newArtifactId: cucumber-clojure
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-core
      newGroupId: io.cucumber
      newArtifactId: cucumber-core
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-gosu
      newGroupId: io.cucumber
      newArtifactId: cucumber-gosu
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-groovy
      newGroupId: io.cucumber
      newArtifactId: cucumber-groovy
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-guice
      newGroupId: io.cucumber
      newArtifactId: cucumber-guice
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-java
      newGroupId: io.cucumber
      newArtifactId: cucumber-java
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-java8
      newGroupId: io.cucumber
      newArtifactId: cucumber-java8
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-jruby
      newGroupId: io.cucumber
      newArtifactId: cucumber-jruby
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-junit
      newGroupId: io.cucumber
      newArtifactId: cucumber-junit
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-jython
      newGroupId: io.cucumber
      newArtifactId: cucumber-jython
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-needle
      newGroupId: io.cucumber
      newArtifactId: cucumber-needle
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-openejb
      newGroupId: io.cucumber
      newArtifactId: cucumber-openejb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-osgi
      newGroupId: io.cucumber
      newArtifactId: cucumber-osgi
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-picocontainer
      newGroupId: io.cucumber
      newArtifactId: cucumber-picocontainer
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-rhino
      newGroupId: io.cucumber
      newArtifactId: cucumber-rhino
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-scala_2.10
      newGroupId: io.cucumber
      newArtifactId: cucumber-scala_2.10
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-scala_2.11
      newGroupId: io.cucumber
      newArtifactId: cucumber-scala_2.11
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-scala_2.12
      newGroupId: io.cucumber
      newArtifactId: cucumber-scala_2.12
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-spring
      newGroupId: io.cucumber
      newArtifactId: cucumber-spring
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-testng
      newGroupId: io.cucumber
      newArtifactId: cucumber-testng
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: info.cukes
      oldArtifactId: cucumber-weld
      newGroupId: io.cucumber
      newArtifactId: cucumber-weld
      newVersion: 2.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Cucumber-JVM 5.x](/recipes/cucumber/jvm/upgradecucumber5x.md)

## Examples
##### Example 1
`UpgradeCucumber2xTest#changeRunnerAndGlueArtifacts`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.example</groupId>
    <artifactId>app</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.5</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-spring</artifactId>
            <version>1.2.5</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.example</groupId>
    <artifactId>app</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>2.4.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-spring</artifactId>
            <version>2.4.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -7,1 +7,1 @@
    <dependencies>
        <dependency>
-           <groupId>info.cukes</groupId>
+           <groupId>io.cucumber</groupId>
            <artifactId>cucumber-junit</artifactId>
@@ -9,1 +9,1 @@
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
-           <version>1.2.5</version>
+           <version>2.4.0</version>
            <scope>test</scope>
@@ -13,1 +13,1 @@
        </dependency>
        <dependency>
-           <groupId>info.cukes</groupId>
+           <groupId>io.cucumber</groupId>
            <artifactId>cucumber-spring</artifactId>
@@ -15,1 +15,1 @@
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-spring</artifactId>
-           <version>1.2.5</version>
+           <version>2.4.0</version>
            <scope>test</scope>
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeCucumber2xTest#changeRunnerAndGlueArtifacts`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.example</groupId>
    <artifactId>app</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>1.2.5</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-spring</artifactId>
            <version>1.2.5</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.example</groupId>
    <artifactId>app</artifactId>
    <version>1.0.0</version>
    <dependencies>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-junit</artifactId>
            <version>2.4.0</version>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>io.cucumber</groupId>
            <artifactId>cucumber-spring</artifactId>
            <version>2.4.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -7,1 +7,1 @@
    <dependencies>
        <dependency>
-           <groupId>info.cukes</groupId>
+           <groupId>io.cucumber</groupId>
            <artifactId>cucumber-junit</artifactId>
@@ -9,1 +9,1 @@
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-junit</artifactId>
-           <version>1.2.5</version>
+           <version>2.4.0</version>
            <scope>test</scope>
@@ -13,1 +13,1 @@
        </dependency>
        <dependency>
-           <groupId>info.cukes</groupId>
+           <groupId>io.cucumber</groupId>
            <artifactId>cucumber-spring</artifactId>
@@ -15,1 +15,1 @@
            <groupId>info.cukes</groupId>
            <artifactId>cucumber-spring</artifactId>
-           <version>1.2.5</version>
+           <version>2.4.0</version>
            <scope>test</scope>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.cucumber.jvm.UpgradeCucumber2x"
  displayName="Upgrade to Cucumber-JVM 2.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-cucumber-jvm"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_CUCUMBER_JVM"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.cucumber.jvm.UpgradeCucumber2x" />

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
