---
sidebar_label: "Migrate Hamcrest assertions to JUnit Jupiter"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Hamcrest assertions to JUnit Jupiter

**org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5**

_Migrate Hamcrest `assertThat(..)` to JUnit Jupiter `Assertions`._

### Tags

* [testing](/reference/recipes-by-tag#testing)
* [assertj](/reference/recipes-by-tag#assertj)
* [hamcrest](/reference/recipes-by-tag#hamcrest)

## Recipe source

[GitHub: hamcrest.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/hamcrest.yml),
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

* [Use consistent Hamcrest matcher imports](../../../java/testing/hamcrest/consistenthamcrestmatcherimports)
* [Reorder method arguments](../../../java/reordermethodarguments)
  * methodPattern: `org.hamcrest.MatcherAssert assertThat(java.lang.String, boolean)`
  * newParameterNames: `[assertion, reason]`
  * oldParameterNames: `[reason, assertion]`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.hamcrest.MatcherAssert assertThat(boolean, String)`
  * newMethodName: `assertTrue`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.hamcrest.MatcherAssert assertTrue(boolean, String)`
  * fullyQualifiedTargetTypeName: `org.junit.jupiter.api.Assertions`
* [Migrate from Hamcrest `instanceOf` matcher to JUnit 5](../../../java/testing/hamcrest/hamcrestinstanceoftojunit5)
* [Migrate from Hamcrest `Matcher` to JUnit 5](../../../java/testing/hamcrest/hamcrestmatchertojunit5)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5
displayName: Migrate Hamcrest assertions to JUnit Jupiter
description: |
  Migrate Hamcrest `assertThat(..)` to JUnit Jupiter `Assertions`.
tags:
  - testing
  - assertj
  - hamcrest
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.testing.hamcrest.ConsistentHamcrestMatcherImports
  - org.openrewrite.java.ReorderMethodArguments:
      methodPattern: org.hamcrest.MatcherAssert assertThat(java.lang.String, boolean)
      newParameterNames:
        - assertion
        - reason
      oldParameterNames:
        - reason
        - assertion
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.hamcrest.MatcherAssert assertThat(boolean, String)
      newMethodName: assertTrue
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.hamcrest.MatcherAssert assertTrue(boolean, String)
      fullyQualifiedTargetTypeName: org.junit.jupiter.api.Assertions
  - org.openrewrite.java.testing.hamcrest.HamcrestInstanceOfToJUnit5
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToJUnit5

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [JUnit Jupiter best practices](/recipes/java/testing/junit/jupiterbestpractices.md)

## Examples
##### Example 1
`MigrateHamcrestToJUnitTest#equalToString`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;

class ATest {
    @Test
    void testEquals() {
        String str1 = "Hello world!";
        String str2 = "Hello world!";
        assertThat(str1, is(equalTo(str2)));
        assertThat(str1, is(not(equalTo(str2 + "!"))));
    }
}
```

###### After
```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

class ATest {
    @Test
    void testEquals() {
        String str1 = "Hello world!";
        String str2 = "Hello world!";
        assertEquals(str1, str2);
        assertNotEquals(str1, str2 + "!");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,4 +2,2 @@
import org.junit.jupiter.api.Test;
-import static org.hamcrest.MatcherAssert.assertThat;
-import static org.hamcrest.Matchers.equalTo;
-import static org.hamcrest.Matchers.is;
-import static org.hamcrest.Matchers.not;
+import static org.junit.jupiter.api.Assertions.assertEquals;
+import static org.junit.jupiter.api.Assertions.assertNotEquals;

@@ -12,2 +10,2 @@
        String str1 = "Hello world!";
        String str2 = "Hello world!";
-       assertThat(str1, is(equalTo(str2)));
-       assertThat(str1, is(not(equalTo(str2 + "!"))));
+       assertEquals(str1, str2);
+       assertNotEquals(str1, str2 + "!");
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateHamcrestToJUnitTest#equalToString`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.Test;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.not;

class ATest {
    @Test
    void testEquals() {
        String str1 = "Hello world!";
        String str2 = "Hello world!";
        assertThat(str1, is(equalTo(str2)));
        assertThat(str1, is(not(equalTo(str2 + "!"))));
    }
}
```

###### After
```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

class ATest {
    @Test
    void testEquals() {
        String str1 = "Hello world!";
        String str2 = "Hello world!";
        assertEquals(str1, str2);
        assertNotEquals(str1, str2 + "!");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,4 +2,2 @@
import org.junit.jupiter.api.Test;
-import static org.hamcrest.MatcherAssert.assertThat;
-import static org.hamcrest.Matchers.equalTo;
-import static org.hamcrest.Matchers.is;
-import static org.hamcrest.Matchers.not;
+import static org.junit.jupiter.api.Assertions.assertEquals;
+import static org.junit.jupiter.api.Assertions.assertNotEquals;

@@ -12,2 +10,2 @@
        String str1 = "Hello world!";
        String str2 = "Hello world!";
-       assertThat(str1, is(equalTo(str2)));
-       assertThat(str1, is(not(equalTo(str2 + "!"))));
+       assertEquals(str1, str2);
+       assertNotEquals(str1, str2 + "!");
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5"
  displayName="Migrate Hamcrest assertions to JUnit Jupiter"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5" />

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
