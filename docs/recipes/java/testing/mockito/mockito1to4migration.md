---
sidebar_label: "Mockito 4.x upgrade"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Mockito 4.x upgrade

**org.openrewrite.java.testing.mockito.Mockito1to4Migration**

_Upgrade Mockito from 1.x to 4.x._

### Tags

* [testing](/reference/recipes-by-tag#testing)
* [mockito](/reference/recipes-by-tag#mockito)

## Recipe source

[GitHub: mockito.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

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

* [Mockito 3.x migration from 1.x](../../../java/testing/mockito/mockito1to3migration)
* [Replace `Mockito.when` on static (non mock) with try-with-resource with MockedStatic](../../../java/testing/mockito/mockitowhenonstatictomockstatic)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `4.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `net.bytebuddy`
  * artifactId: `byte-buddy*`
  * newVersion: `1.12.19`
* [Replace `MockitoAnnotations.initMocks(this)` to `MockitoAnnotations.openMocks(this)`](../../../java/testing/mockito/replaceinitmocktoopenmock)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.Mockito1to4Migration
displayName: Mockito 4.x upgrade
description: |
  Upgrade Mockito from 1.x to 4.x.
tags:
  - testing
  - mockito
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.testing.mockito.Mockito1to3Migration
  - org.openrewrite.java.testing.mockito.MockitoWhenOnStaticToMockStatic
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: "*"
      newVersion: 4.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: net.bytebuddy
      artifactId: byte-buddy*
      newVersion: 1.12.19
  - org.openrewrite.java.testing.mockito.ReplaceInitMockToOpenMock

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Mockito 4 to 5.x upgrade only](/recipes/java/testing/mockito/mockito4to5only.md)
* [Mockito 5.x upgrade](/recipes/java/testing/mockito/mockito1to5migration.md)
* [Use Mockito JUnit Jupiter extension](/recipes/java/testing/junit5/usemockitoextension.md)

## Examples
##### Example 1
`Mockito1to4MigrationTest#modifyMockitoDependencies`


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
    implementation("org.apache.commons:commons-lang3:3.17.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-core:3.12.4")
    testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
}
test {
   useJUnitPlatform()
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
    implementation("org.apache.commons:commons-lang3:3.17.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-core:4.11.0")
    testImplementation("org.mockito:mockito-junit-jupiter:4.11.0")
}
test {
   useJUnitPlatform()
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,2 +10,2 @@
    implementation("org.apache.commons:commons-lang3:3.17.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
-   testImplementation("org.mockito:mockito-core:3.12.4")
-   testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
+   testImplementation("org.mockito:mockito-core:4.11.0")
+   testImplementation("org.mockito:mockito-junit-jupiter:4.11.0")
}
```
</TabItem>
</Tabs>

###### Unchanged
```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class MyTest {
    @Test
    public void test() {
        List<String> list = Mockito.mock(List.class);
    }
}
```

---

##### Example 2
`Mockito1to4MigrationTest#modifyMockitoDependencies`


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
    implementation("org.apache.commons:commons-lang3:3.17.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-core:3.12.4")
    testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
}
test {
   useJUnitPlatform()
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
    implementation("org.apache.commons:commons-lang3:3.17.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
    testImplementation("org.mockito:mockito-core:4.11.0")
    testImplementation("org.mockito:mockito-junit-jupiter:4.11.0")
}
test {
   useJUnitPlatform()
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,2 +10,2 @@
    implementation("org.apache.commons:commons-lang3:3.17.0")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.4")
-   testImplementation("org.mockito:mockito-core:3.12.4")
-   testImplementation("org.mockito:mockito-junit-jupiter:3.12.4")
+   testImplementation("org.mockito:mockito-core:4.11.0")
+   testImplementation("org.mockito:mockito-junit-jupiter:4.11.0")
}
```
</TabItem>
</Tabs>

###### Unchanged
```java
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class MyTest {
    @Test
    public void test() {
        List<String> list = Mockito.mock(List.class);
    }
}
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.Mockito1to4Migration"
  displayName="Mockito 4.x upgrade"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.Mockito1to4Migration" />

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
