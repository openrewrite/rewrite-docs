---
sidebar_label: "Migrate Spring Boot Testing to Quarkus Testing"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot Testing to Quarkus Testing

**org.openrewrite.quarkus.spring.MigrateSpringTesting**

_Migrates Spring Boot test annotations and utilities to Quarkus test equivalents. Converts @SpringBootTest to @QuarkusTest, @MockBean to @InjectMock, etc._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [quarkus](/reference/recipes-by-tag#quarkus)
* [testing](/reference/recipes-by-tag#testing)
* [migration](/reference/recipes-by-tag#migration)

## Recipe source

[GitHub: spring-testing.yml](https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/spring-testing.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring-to-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring-to-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.boot`
  * oldArtifactId: `spring-boot-starter-test`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-junit5`
  * newVersion: `x`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-junit5-mockito`
  * version: `x`
  * onlyIfUsing: `org.springframework.boot.test.mock.mockito.MockBean`
  * scope: `test`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.context.SpringBootTest`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.QuarkusTest`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.mock.mockito.MockBean`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.mockito.InjectMock`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.mock.mockito.SpyBean`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.mockito.InjectSpy`
* [Remove annotation](../../java/removeannotation)
  * annotationPattern: `org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc`
* [Remove annotation](../../java/removeannotation)
  * annotationPattern: `org.springframework.test.context.ActiveProfiles`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `io.rest-assured`
  * artifactId: `rest-assured`
  * version: `5.x`
  * onlyIfUsing: `org.springframework.boot.test.web.client.TestRestTemplate`
  * scope: `test`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.spring.MigrateSpringTesting
displayName: Migrate Spring Boot Testing to Quarkus Testing
description: |
  Migrates Spring Boot test annotations and utilities to Quarkus test equivalents. Converts @SpringBootTest to @QuarkusTest, @MockBean to @InjectMock, etc.
tags:
  - spring
  - quarkus
  - testing
  - migration
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.boot
      oldArtifactId: spring-boot-starter-test
      newGroupId: io.quarkus
      newArtifactId: quarkus-junit5
      newVersion: x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.quarkus
      artifactId: quarkus-junit5-mockito
      version: x
      onlyIfUsing: org.springframework.boot.test.mock.mockito.MockBean
      scope: test
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.context.SpringBootTest
      newFullyQualifiedTypeName: io.quarkus.test.junit.QuarkusTest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.mock.mockito.MockBean
      newFullyQualifiedTypeName: io.quarkus.test.junit.mockito.InjectMock
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.mock.mockito.SpyBean
      newFullyQualifiedTypeName: io.quarkus.test.junit.mockito.InjectSpy
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: org.springframework.test.context.ActiveProfiles
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.rest-assured
      artifactId: rest-assured
      version: 5.x
      onlyIfUsing: org.springframework.boot.test.web.client.TestRestTemplate
      scope: test

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring Boot to Quarkus](/recipes/quarkus/spring/springboottoquarkus.md)

## Examples
##### Example 1
`MigrateSpringTestingTest#convertSpringBootTestToQuarkusTest`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;

@SpringBootTest
class MyApplicationTest {
    @Test
    void contextLoads() {
    }
}
```

###### After
```java
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

@QuarkusTest
class MyApplicationTest {
    @Test
    void contextLoads() {
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.springframework.boot.test.context.SpringBootTest;
+import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
@@ -4,1 +4,1 @@
import org.junit.jupiter.api.Test;

-@SpringBootTest
+@QuarkusTest
class MyApplicationTest {
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateSpringTestingTest#convertSpringBootTestToQuarkusTest`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.Test;

@SpringBootTest
class MyApplicationTest {
    @Test
    void contextLoads() {
    }
}
```

###### After
```java
import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

@QuarkusTest
class MyApplicationTest {
    @Test
    void contextLoads() {
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.springframework.boot.test.context.SpringBootTest;
+import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;
@@ -4,1 +4,1 @@
import org.junit.jupiter.api.Test;

-@SpringBootTest
+@QuarkusTest
class MyApplicationTest {
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring-to-quarkus` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.spring.MigrateSpringTesting")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.spring.MigrateSpringTesting")
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
            <recipe>org.openrewrite.quarkus.spring.MigrateSpringTesting</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring-to-quarkus</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring-to-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.spring.MigrateSpringTesting -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateSpringTesting
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.MigrateSpringTesting" />

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
