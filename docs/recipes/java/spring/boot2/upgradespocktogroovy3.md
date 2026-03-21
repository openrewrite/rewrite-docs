---
sidebar_label: "Upgrade Spock to a Groovy 3 compatible variant"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade Spock to a Groovy 3 compatible variant

**org.openrewrite.java.spring.boot2.UpgradeSpockToGroovy3**

_Upgrade Spock dependencies to a Groovy 3 compatible 2.0 variant when Groovy 3 is on the classpath._

## Recipe source

[GitHub: spring-boot-25.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.spockframework`
  * artifactId: `*`
  * newVersion: `2.0-groovy-3.0`
  * overrideManagedVersion: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpockToGroovy3
displayName: Upgrade Spock to a Groovy 3 compatible variant
description: |
  Upgrade Spock dependencies to a Groovy 3 compatible 2.0 variant when Groovy 3 is on the classpath.
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.spockframework
      artifactId: "*"
      newVersion: 2.0-groovy-3.0
      overrideManagedVersion: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)

## Examples
##### Example 1
`UpgradeSpockToGroovy3Test#upgradeSpockWhenUsingGroovy3Maven`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>org.codehaus.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>3.0.9</version>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
      <version>1.3-groovy-2.5</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-spring</artifactId>
      <version>1.3-groovy-2.5</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>org.codehaus.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>3.0.9</version>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
      <version>2.0-groovy-3.0</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-spring</artifactId>
      <version>2.0-groovy-3.0</version>
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
@@ -15,1 +15,1 @@
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
-     <version>1.3-groovy-2.5</version>
+     <version>2.0-groovy-3.0</version>
      <scope>test</scope>
@@ -21,1 +21,1 @@
      <groupId>org.spockframework</groupId>
      <artifactId>spock-spring</artifactId>
-     <version>1.3-groovy-2.5</version>
+     <version>2.0-groovy-3.0</version>
      <scope>test</scope>
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeSpockToGroovy3Test#upgradeSpockWhenUsingGroovy3Maven`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>org.codehaus.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>3.0.9</version>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
      <version>1.3-groovy-2.5</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-spring</artifactId>
      <version>1.3-groovy-2.5</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>org.codehaus.groovy</groupId>
      <artifactId>groovy</artifactId>
      <version>3.0.9</version>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
      <version>2.0-groovy-3.0</version>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.spockframework</groupId>
      <artifactId>spock-spring</artifactId>
      <version>2.0-groovy-3.0</version>
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
@@ -15,1 +15,1 @@
      <groupId>org.spockframework</groupId>
      <artifactId>spock-core</artifactId>
-     <version>1.3-groovy-2.5</version>
+     <version>2.0-groovy-3.0</version>
      <scope>test</scope>
@@ -21,1 +21,1 @@
      <groupId>org.spockframework</groupId>
      <artifactId>spock-spring</artifactId>
-     <version>1.3-groovy-2.5</version>
+     <version>2.0-groovy-3.0</version>
      <scope>test</scope>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot2.UpgradeSpockToGroovy3"
  displayName="Upgrade Spock to a Groovy 3 compatible variant"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpockToGroovy3" />

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
