---
title: "Replace PowerMock `Whitebox` with Java reflection"
sidebar_label: "Replace PowerMock `Whitebox` with Java reflection"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace PowerMock `Whitebox` with Java reflection

**org.openrewrite.java.testing.mockito.PowerMockWhiteboxToJavaReflection**

_Replace `org.powermock.reflect.Whitebox` calls (`setInternalState`, `getInternalState`, `invokeMethod`, `getField`, `getMethod`, `invokeConstructor`) with plain Java reflection using `java.lang.reflect.Field`, `java.lang.reflect.Method`, and `java.lang.reflect.Constructor`._

### Tags

* [testing](/reference/recipes-by-tag#testing)
* [mockito](/reference/recipes-by-tag#mockito)

## Recipe source

[GitHub: powermockito.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/powermockito.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace PowerMock `Whitebox.setInternalState()` with Java reflection](../../../java/testing/mockito/powermockwhiteboxsetinternalstatetojavareflection)
* [Replace PowerMock `Whitebox.getInternalState()` with Java reflection](../../../java/testing/mockito/powermockwhiteboxgetinternalstatetojavareflection)
* [Replace PowerMock `Whitebox.invokeMethod()` with Java reflection](../../../java/testing/mockito/powermockwhiteboxinvokemethodtojavareflection)
* [Replace PowerMock `Whitebox.getField()` with Java reflection](../../../java/testing/mockito/powermockwhiteboxgetfieldtojavareflection)
* [Replace PowerMock `Whitebox.getMethod()` with Java reflection](../../../java/testing/mockito/powermockwhiteboxgetmethodtojavareflection)
* [Replace PowerMock `Whitebox.invokeConstructor()` with Java reflection](../../../java/testing/mockito/powermockwhiteboxinvokeconstructortojavareflection)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.PowerMockWhiteboxToJavaReflection
displayName: Replace PowerMock `Whitebox` with Java reflection
description: |
  Replace `org.powermock.reflect.Whitebox` calls (`setInternalState`, `getInternalState`, `invokeMethod`, `getField`, `getMethod`, `invokeConstructor`) with plain Java reflection using `java.lang.reflect.Field`, `java.lang.reflect.Method`, and `java.lang.reflect.Constructor`.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.testing.mockito.PowerMockWhiteboxSetInternalStateToJavaReflection
  - org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetInternalStateToJavaReflection
  - org.openrewrite.java.testing.mockito.PowerMockWhiteboxInvokeMethodToJavaReflection
  - org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetFieldToJavaReflection
  - org.openrewrite.java.testing.mockito.PowerMockWhiteboxGetMethodToJavaReflection
  - org.openrewrite.java.testing.mockito.PowerMockWhiteboxInvokeConstructorToJavaReflection

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Replace PowerMock with raw Mockito](/recipes/java/testing/mockito/replacepowermockito.md)

## Examples
##### Example 1
`PowerMockWhiteboxToJavaReflectionTest#setInternalStateReplacedWithReflection`


###### Unchanged
```java
class MyService {
    private String name;
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.powermock.reflect.Whitebox;

class MyServiceTest {
    void testSetField() {
        MyService service = new MyService();
        Whitebox.setInternalState(service, "name", "expectedValue");
    }
}
```

###### After
```java
import java.lang.reflect.Field;

class MyServiceTest {
    void testSetField() throws Exception {
        MyService service = new MyService();
        Field nameField = service.getClass().getDeclaredField("name");
        nameField.setAccessible(true);
        nameField.set(service, "expectedValue");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.powermock.reflect.Whitebox;
+import java.lang.reflect.Field;

@@ -4,1 +4,1 @@

class MyServiceTest {
-   void testSetField() {
+   void testSetField() throws Exception {
        MyService service = new MyService();
@@ -6,1 +6,3 @@
    void testSetField() {
        MyService service = new MyService();
-       Whitebox.setInternalState(service, "name", "expectedValue");
+       Field nameField = service.getClass().getDeclaredField("name");
+       nameField.setAccessible(true);
+       nameField.set(service, "expectedValue");
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`PowerMockWhiteboxToJavaReflectionTest#setInternalStateReplacedWithReflection`


###### Unchanged
```java
class MyService {
    private String name;
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.powermock.reflect.Whitebox;

class MyServiceTest {
    void testSetField() {
        MyService service = new MyService();
        Whitebox.setInternalState(service, "name", "expectedValue");
    }
}
```

###### After
```java
import java.lang.reflect.Field;

class MyServiceTest {
    void testSetField() throws Exception {
        MyService service = new MyService();
        Field nameField = service.getClass().getDeclaredField("name");
        nameField.setAccessible(true);
        nameField.set(service, "expectedValue");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.powermock.reflect.Whitebox;
+import java.lang.reflect.Field;

@@ -4,1 +4,1 @@

class MyServiceTest {
-   void testSetField() {
+   void testSetField() throws Exception {
        MyService service = new MyService();
@@ -6,1 +6,3 @@
    void testSetField() {
        MyService service = new MyService();
-       Whitebox.setInternalState(service, "name", "expectedValue");
+       Field nameField = service.getClass().getDeclaredField("name");
+       nameField.setAccessible(true);
+       nameField.set(service, "expectedValue");
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.PowerMockWhiteboxToJavaReflection"
  displayName="Replace PowerMock `Whitebox` with Java reflection"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.PowerMockWhiteboxToJavaReflection" />

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
