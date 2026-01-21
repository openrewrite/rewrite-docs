---
sidebar_label: "Migrate Fest 2.x to AssertJ"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Fest 2.x to AssertJ

**org.openrewrite.java.testing.assertj.FestToAssertj**

_AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability. Converts Fest 2.x imports to AssertJ imports._

### Tags

* [testing](/reference/recipes-by-tag#testing)
* [assertj](/reference/recipes-by-tag#assertj)

## Recipe source

[GitHub: assertj.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.fest.assertions.api.ObjectAssert#isLenientEqualsToByIgnoringFields(..)`
  * newMethodName: `isEqualToIgnoringGivenFields`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.fest.assertions.api.ObjectAssert#isLenientEqualsToByAcceptingFields(..)`
  * newMethodName: `isEqualToComparingOnlyGivenFields`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.fest.assertions.api.ObjectAssert#isLenientEqualsToByIgnoringNullFields(..)`
  * newMethodName: `isEqualToIgnoringNullFields`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.fest.assertions.api.ObjectAssert#isEqualsToByComparingFields(..)`
  * newMethodName: `isEqualToComparingFieldByField`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.fest.assertions.api`
  * newPackageName: `org.assertj.core.api`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.fest.assertions.core.Condition`
  * newFullyQualifiedTypeName: `org.assertj.core.api.Condition`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.fest.assertions.util`
  * newPackageName: `org.assertj.core.util`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.fest.assertions.data`
  * newPackageName: `org.assertj.core.data`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.easytesting`
  * oldArtifactId: `fest-assert-core`
  * newGroupId: `org.assertj`
  * newArtifactId: `assertj-core`
  * newVersion: `3.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.FestToAssertj
displayName: Migrate Fest 2.x to AssertJ
description: |
  AssertJ provides a rich set of assertions, truly helpful error messages, improves test code readability. Converts Fest 2.x imports to AssertJ imports.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.fest.assertions.api.ObjectAssert#isLenientEqualsToByIgnoringFields(..)
      newMethodName: isEqualToIgnoringGivenFields
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.fest.assertions.api.ObjectAssert#isLenientEqualsToByAcceptingFields(..)
      newMethodName: isEqualToComparingOnlyGivenFields
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.fest.assertions.api.ObjectAssert#isLenientEqualsToByIgnoringNullFields(..)
      newMethodName: isEqualToIgnoringNullFields
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.fest.assertions.api.ObjectAssert#isEqualsToByComparingFields(..)
      newMethodName: isEqualToComparingFieldByField
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.fest.assertions.api
      newPackageName: org.assertj.core.api
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.fest.assertions.core.Condition
      newFullyQualifiedTypeName: org.assertj.core.api.Condition
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.fest.assertions.util
      newPackageName: org.assertj.core.util
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.fest.assertions.data
      newPackageName: org.assertj.core.data
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.easytesting
      oldArtifactId: fest-assert-core
      newGroupId: org.assertj
      newArtifactId: assertj-core
      newVersion: 3.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [AssertJ best practices](/recipes/java/testing/assertj/assertj-best-practices.md)

## Examples
##### Example 1
`FestToAssertJTest#documentExample`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.fest.assertions.api.Assertions;

import static org.fest.assertions.api.Assertions.assertThat;

class MyTest {
    void test(Object value) {
        Assertions.assertThat(value).isEqualTo("foo");
        assertThat(value).isEqualTo("bar");
    }
}
```

###### After
```java
import org.assertj.core.api.Assertions;

import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void test(Object value) {
        Assertions.assertThat(value).isEqualTo("foo");
        assertThat(value).isEqualTo("bar");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.fest.assertions.api.Assertions;
+import org.assertj.core.api.Assertions;

@@ -3,1 +3,1 @@
import org.fest.assertions.api.Assertions;

-import static org.fest.assertions.api.Assertions.assertThat;
+import static org.assertj.core.api.Assertions.assertThat;

```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <groupId>com.example</groupId>
    <artifactId>sample-project</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.easytesting</groupId>
            <artifactId>fest-assert-core</artifactId>
            <version>2.0M10</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2
`FestToAssertJTest#documentExample`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.fest.assertions.api.Assertions;

import static org.fest.assertions.api.Assertions.assertThat;

class MyTest {
    void test(Object value) {
        Assertions.assertThat(value).isEqualTo("foo");
        assertThat(value).isEqualTo("bar");
    }
}
```

###### After
```java
import org.assertj.core.api.Assertions;

import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void test(Object value) {
        Assertions.assertThat(value).isEqualTo("foo");
        assertThat(value).isEqualTo("bar");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.fest.assertions.api.Assertions;
+import org.assertj.core.api.Assertions;

@@ -3,1 +3,1 @@
import org.fest.assertions.api.Assertions;

-import static org.fest.assertions.api.Assertions.assertThat;
+import static org.assertj.core.api.Assertions.assertThat;

```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
    <groupId>com.example</groupId>
    <artifactId>sample-project</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.easytesting</groupId>
            <artifactId>fest-assert-core</artifactId>
            <version>2.0M10</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.FestToAssertj")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.assertj.FestToAssertj")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.assertj.FestToAssertj</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.FestToAssertj -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe FestToAssertj
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.FestToAssertj" />

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
