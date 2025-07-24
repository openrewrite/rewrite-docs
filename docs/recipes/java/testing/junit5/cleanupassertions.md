---
sidebar_label: "Clean Up Assertions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Clean Up Assertions

**org.openrewrite.java.testing.junit5.CleanupAssertions**

_Simplifies JUnit Jupiter assertions to their most-direct equivalents._

### Tags

* [junit](/reference/recipes-by-tag#junit)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/junit5.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace JUnit `assertTrue(!&lt;boolean&gt;)` to `assertFalse(&lt;boolean&gt;)`](../../../java/testing/cleanup/asserttruenegationtoassertfalse)
* [Replace JUnit `assertFalse(!&lt;boolean&gt;)` to `assertTrue(&lt;boolean&gt;)`](../../../java/testing/cleanup/assertfalsenegationtoasserttrue)
* [Replace JUnit `assertTrue(a.equals(b))` to `assertEquals(a,b)`](../../../java/testing/cleanup/asserttrueequalstoassertequals)
* [Junit `assertTrue(a == b)` to `assertEquals(a,b)`](../../../java/testing/cleanup/asserttruecomparisontoassertequals)
* [Replace JUnit `assertFalse(a.equals(b))` to `assertNotEquals(a,b)`](../../../java/testing/cleanup/assertfalseequalstoassertnotequals)
* [`assertEquals(a, null)` to `assertNull(a)`](../../../java/testing/cleanup/assertequalsnulltoassertnull)
* [Replace JUnit `assertFalse(a == null)` to `assertNotNull(a)`](../../../java/testing/cleanup/assertfalsenulltoassertnotnull)
* [Replace JUnit `assertTrue(a == null)` to `assertNull(a)`](../../../java/testing/cleanup/asserttruenulltoassertnull)
* [Replace JUnit `assertEquals(false, &lt;boolean&gt;)` to `assertFalse(&lt;boolean&gt;)` / `assertTrue(&lt;boolean&gt;)`](../../../java/testing/cleanup/assertequalsbooleantoassertboolean)
* [Replace JUnit `assertNotEquals(false, &lt;boolean&gt;)` to `assertFalse(&lt;boolean&gt;)` / `assertTrue(&lt;boolean&gt;)`](../../../java/testing/cleanup/assertnotequalsbooleantoassertboolean)
* [Assertion arguments should be passed in the correct order](../../../java/testing/cleanup/assertionsargumentorder)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.junit5.CleanupAssertions
displayName: Clean Up Assertions
description: |
  Simplifies JUnit Jupiter assertions to their most-direct equivalents.
tags:
  - junit
  - testing
recipeList:
  - org.openrewrite.java.testing.cleanup.AssertTrueNegationToAssertFalse
  - org.openrewrite.java.testing.cleanup.AssertFalseNegationToAssertTrue
  - org.openrewrite.java.testing.cleanup.AssertTrueEqualsToAssertEquals
  - org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals
  - org.openrewrite.java.testing.cleanup.AssertFalseEqualsToAssertNotEquals
  - org.openrewrite.java.testing.cleanup.AssertEqualsNullToAssertNull
  - org.openrewrite.java.testing.cleanup.AssertFalseNullToAssertNotNull
  - org.openrewrite.java.testing.cleanup.AssertTrueNullToAssertNull
  - org.openrewrite.java.testing.cleanup.AssertEqualsBooleanToAssertBoolean
  - org.openrewrite.java.testing.cleanup.AssertNotEqualsBooleanToAssertBoolean
  - org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertTrue("" == null);
    }
}
```

###### After
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertNull("");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
    @Test
    void test() {
-       Assertions.assertTrue("" == null);
+       Assertions.assertNull("");
    }
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertTrue("" == null);
    }
}
```

###### After
```java
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class ExampleTest {
    @Test
    void test() {
        Assertions.assertNull("");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,1 +7,1 @@
    @Test
    void test() {
-       Assertions.assertTrue("" == null);
+       Assertions.assertNull("");
    }
```
</TabItem>
</Tabs>


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
    activeRecipe("org.openrewrite.java.testing.junit5.CleanupAssertions")
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
        activeRecipe("org.openrewrite.java.testing.junit5.CleanupAssertions")
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
            <recipe>org.openrewrite.java.testing.junit5.CleanupAssertions</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.CleanupAssertions -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CleanupAssertions
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.CleanupAssertions" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
Yeikel, Adriano Machado, [Patrick](mailto:patway99@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Patrick Way, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Adam Birem](mailto:adam.birem@praxedo.com), [Sam Snyder](mailto:sam@moderne.io), [Nick McKinney](mailto:mckinneynicholas@gmail.com), Ties van de Ven, timo-abele
