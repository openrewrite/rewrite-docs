---
sidebar_label: "AssertJ best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# AssertJ best practices

**org.openrewrite.java.testing.assertj.Assertj**

_Migrates JUnit asserts to AssertJ and applies best practices to assertions._

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
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.assertj.core.annotations.Beta`
  * newFullyQualifiedTypeName: `org.assertj.core.annotation.Beta`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.assertj.core.util.CanIgnoreReturnValue`
  * newFullyQualifiedTypeName: `org.assertj.core.annotation.CanIgnoreReturnValue`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.assertj.core.util.CheckReturnValue`
  * newFullyQualifiedTypeName: `org.assertj.core.annotation.CheckReturnValue`
* [Migrate Hamcrest assertions to AssertJ](../../../java/testing/hamcrest/migratehamcresttoassertj)
* [Migrate Google Truth to AssertJ](../../../java/testing/truth/migratetruthtoassertj)
* [Migrate Fest 2.x to AssertJ](../../../java/testing/assertj/festtoassertj)
* [Migrate JUnit asserts to AssertJ](../../../java/testing/assertj/junittoassertj)
* [Migrate TestNG assertions to AssertJ](../../../java/testing/testng/testngtoassertj)
* [Adopt AssertJ Duration assertions](../../../java/testing/assertj/adoptassertjdurationassertions)
* [Replace `AbstractDateAssert#isEqualToIgnoringMillis(java.util.Date)` by `by isCloseTo(Date, long)`](../../../java/testing/assertj/isequaltoignoringmillistoisclosetorecipe)
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertions)
* [Shorten AssertJ assertions](../../../java/testing/assertj/simplifyassertjassertions)
* [Simplify AssertJ assertions with `hasSize` argument](../../../java/testing/assertj/simplifyhassizeassertion)
* [Simplify AssertJ assertions on SequencedCollection](../../../java/testing/assertj/simplifysequencedcollectionassertions)
* [Simplify `assertThat(collection.stream().map(...))` to `assertThat(collection).extracting(...)`](../../../java/testing/assertj/simplifystreammaptoextracting)
* [Refaster rules related to AssertJ assertions over `BigDecimal`s](../../../tech/picnic/errorprone/refasterrules/assertjbigdecimalrulesrecipes)
* [Adopt AssertJ BigInteger Assertions](../../../java/testing/assertj/assertjbigintegerrulesrecipes)
* [`AssertJBooleanRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjbooleanrulesrecipes)
* [Adopt AssertJ Byte Assertions](../../../java/testing/assertj/assertjbyterulesrecipes)
* [`AssertJCharSequenceRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjcharsequencerulesrecipes)
* [`AssertJComparableRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipes)
* [Adopt AssertJ Double Assertions](../../../java/testing/assertj/assertjdoublerulesrecipes)
* [`AssertJEnumerableRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipes)
* [Refaster rules related to AssertJ assertions over `Duration`s](../../../tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes)
* [Adopt AssertJ Float Assertions](../../../java/testing/assertj/assertjfloatrulesrecipes)
* [Refaster rules related to AssertJ assertions over `Instant`s](../../../tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes)
* [Adopt AssertJ Integer Assertions](../../../java/testing/assertj/assertjintegerrulesrecipes)
* [`AssertJIterableRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipes)
* [`AssertJIteratorRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjiteratorrulesrecipes)
* [Adopt AssertJ Long Assertions](../../../java/testing/assertj/assertjlongrulesrecipes)
* [`AssertJMapRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjmaprulesrecipes)
* [`AssertJNumberRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjnumberrulesrecipes)
* [`AssertJObjectRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes)
* [`AssertJOptionalRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipes)
* [Refaster rules related to AssertJ assertions over `Path`s](../../../tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes)
* [`AssertJPrimitiveRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjprimitiverulesrecipes)
* [`AssertJRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjrulesrecipes)
* [Adopt AssertJ Short Assertions](../../../java/testing/assertj/assertjshortrulesrecipes)
* [`AssertJStringRules` Refaster recipes](../../../tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes)
* [Refaster rules related to AssertJ assertions over expressions that may throw a `Throwable` subtype](../../../tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes)
* [Collapse consecutive `assertThat` statements](../../../java/testing/assertj/collapseconsecutiveassertthatstatements)
* [Simplify redundant AssertJ assertion chains](../../../java/testing/assertj/simplifyredundantassertjchains)
* [Statically import AssertJ's `assertThat`](../../../java/testing/assertj/staticimports)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.Assertj
displayName: AssertJ best practices
description: |
  Migrates JUnit asserts to AssertJ and applies best practices to assertions.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.assertj.core.annotations.Beta
      newFullyQualifiedTypeName: org.assertj.core.annotation.Beta
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.assertj.core.util.CanIgnoreReturnValue
      newFullyQualifiedTypeName: org.assertj.core.annotation.CanIgnoreReturnValue
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.assertj.core.util.CheckReturnValue
      newFullyQualifiedTypeName: org.assertj.core.annotation.CheckReturnValue
  - org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ
  - org.openrewrite.java.testing.truth.MigrateTruthToAssertJ
  - org.openrewrite.java.testing.assertj.FestToAssertj
  - org.openrewrite.java.testing.assertj.JUnitToAssertj
  - org.openrewrite.java.testing.testng.TestNgToAssertj
  - org.openrewrite.java.testing.assertj.AdoptAssertJDurationAssertions
  - org.openrewrite.java.testing.assertj.IsEqualToIgnoringMillisToIsCloseToRecipe
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions
  - org.openrewrite.java.testing.assertj.SimplifyAssertJAssertions
  - org.openrewrite.java.testing.assertj.SimplifyHasSizeAssertion
  - org.openrewrite.java.testing.assertj.SimplifySequencedCollectionAssertions
  - org.openrewrite.java.testing.assertj.SimplifyStreamMapToExtracting
  - tech.picnic.errorprone.refasterrules.AssertJBigDecimalRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJBooleanRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJCharSequenceRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJIteratorRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJNumberRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJPrimitiveRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJRulesRecipes
  - org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes
  - tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes
  - org.openrewrite.java.testing.assertj.CollapseConsecutiveAssertThatStatements
  - org.openrewrite.java.testing.assertj.SimplifyRedundantAssertJChains
  - org.openrewrite.java.testing.assertj.StaticImports

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`AssertJBestPracticesTest#convertsIsEqualToEmptyString`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.assertj.core.api.Assertions.assertThat;
class Test {
    void test() {
        assertThat("test").isEqualTo("");
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;
class Test {
    void test() {
        assertThat("test").isEmpty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
class Test {
    void test() {
-       assertThat("test").isEqualTo("");
+       assertThat("test").isEmpty();
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`TestNgToAssertJTest#failWithMessage`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.testng.Assert.fail;

class Test {
    void test() {
        fail("foo");
        fail("foo", new IllegalStateException());
        fail();
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.fail;

class Test {
    void test() {
        fail("foo");
        fail("foo", new IllegalStateException());
        fail();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import static org.testng.Assert.fail;
+import static org.assertj.core.api.Assertions.fail;

```
</TabItem>
</Tabs>

---

##### Example 3
`AssertJBestPracticesTest#convertsIsEqualToEmptyString`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.assertj.core.api.Assertions.assertThat;
class Test {
    void test() {
        assertThat("test").isEqualTo("");
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;
class Test {
    void test() {
        assertThat("test").isEmpty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,1 +4,1 @@
class Test {
    void test() {
-       assertThat("test").isEqualTo("");
+       assertThat("test").isEmpty();
    }
```
</TabItem>
</Tabs>

---

##### Example 4
`TestNgToAssertJTest#failWithMessage`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.testng.Assert.fail;

class Test {
    void test() {
        fail("foo");
        fail("foo", new IllegalStateException());
        fail();
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.fail;

class Test {
    void test() {
        fail("foo");
        fail("foo", new IllegalStateException());
        fail();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import static org.testng.Assert.fail;
+import static org.assertj.core.api.Assertions.fail;

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
    activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
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
        activeRecipe("org.openrewrite.java.testing.assertj.Assertj")
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
            <recipe>org.openrewrite.java.testing.assertj.Assertj</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.Assertj -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Assertj
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.Assertj" />

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
