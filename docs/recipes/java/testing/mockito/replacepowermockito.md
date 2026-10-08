---
title: "Replace PowerMock with raw Mockito"
sidebar_label: "Replace PowerMock with raw Mockito"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace PowerMock with raw Mockito

**org.openrewrite.java.testing.mockito.ReplacePowerMockito**

_PowerMockito with raw Mockito; best executed as part of a Mockito upgrade.  Tests that mock, stub or verify private members are disabled rather than migrated. Mockito does not support reaching into private state by design, and a test that depends on it is testing an implementation detail, so the intended follow-up is a review that reworks each one to exercise the type through its public API -- not a like-for-like translation. Each disabled test keeps its original body as a comment for that review, is annotated `@Disabled`, `@Ignore` or TestNG's `@Ignore`, and is listed as an action item in the `PowerMockTestsDisabled` data table. Commenting the body out is what lets the PowerMock dependency be removed, so the rest of the repository moves off PowerMock and its tests keep running: PowerMock registers its own Mockito `MockMaker`, which cannot create the static and construction mocks the migrated tests rely on, so the two cannot share a classpath._

### Tags

* [mockito](/reference/recipes-by-tag#mockito)
* [testing](/reference/recipes-by-tag#testing)

## Recipe source

[GitHub: powermockito.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/powermockito.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Disable tests using PowerMock features with no Mockito equivalent](../../../java/testing/mockito/disableunsupportedpowermocktests)
* [Replace PowerMock usages with Mockito](../../../java/testing/mockito/replacepowermockitousages)
* [Flag PowerMock usage that cannot be migrated to Mockito](../../../java/testing/mockito/flagunsupportedpowermockusage)
* [Swap the PowerMock dependencies for Mockito](../../../java/testing/mockito/removepowermockdependencies)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.ReplacePowerMockito
displayName: Replace PowerMock with raw Mockito
description: |
  PowerMockito with raw Mockito; best executed as part of a Mockito upgrade.  Tests that mock, stub or verify private members are disabled rather than migrated. Mockito does not support reaching into private state by design, and a test that depends on it is testing an implementation detail, so the intended follow-up is a review that reworks each one to exercise the type through its public API -- not a like-for-like translation. Each disabled test keeps its original body as a comment for that review, is annotated `@Disabled`, `@Ignore` or TestNG's `@Ignore`, and is listed as an action item in the `PowerMockTestsDisabled` data table. Commenting the body out is what lets the PowerMock dependency be removed, so the rest of the repository moves off PowerMock and its tests keep running: PowerMock registers its own Mockito `MockMaker`, which cannot create the static and construction mocks the migrated tests rely on, so the two cannot share a classpath.
tags:
  - mockito
  - testing
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.testing.mockito.DisableUnsupportedPowerMockTests
  - org.openrewrite.java.testing.mockito.ReplacePowerMockitoUsages
  - org.openrewrite.java.testing.mockito.FlagUnsupportedPowerMockUsage
  - org.openrewrite.java.testing.mockito.RemovePowerMockDependencies

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Mockito 3.x migration from 1.x](/recipes/java/testing/mockito/mockito1to3migration.md)

## Examples
##### Example 1
`ReplacePowerMockitoIntegrationTest#thatPowerMockitoMockStaticIsReplacedInTestMethod`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

@PrepareForTest(value = {Calendar.class, Currency.class})
class StaticMethodTest {

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @Test
    void testWithCalendar() {
        PowerMockito.mockStatic(Calendar.class);
        PowerMockito.mockStatic(Currency.class);
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
    }
}
```

###### After
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

class StaticMethodTest {

    private MockedStatic<Currency> mockedCurrency;

    private MockedStatic<Calendar> mockedCalendar;

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @BeforeMethod
    void setUpStaticMocks() {
        mockedCurrency = Mockito.mockStatic(Currency.class);
        mockedCalendar = Mockito.mockStatic(Calendar.class);
    }

    @AfterMethod(alwaysRun = true)
    void tearDownStaticMocks() {
        mockedCalendar.closeOnDemand();
        mockedCurrency.closeOnDemand();
    }

    @Test
    void testWithCalendar() {
        mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,0 +7,1 @@
import java.util.Locale;

+import org.mockito.MockedStatic;
import org.mockito.Mockito;
@@ -8,2 +9,1 @@

import org.mockito.Mockito;
-import org.powermock.api.mockito.PowerMockito;
-import org.powermock.core.classloader.annotations.PrepareForTest;
+import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
@@ -11,0 +11,1 @@
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
+import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
@@ -13,1 +14,0 @@
import org.testng.annotations.Test;

-@PrepareForTest(value = {Calendar.class, Currency.class})
class StaticMethodTest {
@@ -16,0 +16,4 @@
class StaticMethodTest {

+   private MockedStatic<Currency> mockedCurrency;
+
+   private MockedStatic<Calendar> mockedCalendar;
+
    private Calendar calendarMock;
@@ -23,0 +27,12 @@
    }

+   @BeforeMethod
+   void setUpStaticMocks() {
+       mockedCurrency = Mockito.mockStatic(Currency.class);
+       mockedCalendar = Mockito.mockStatic(Calendar.class);
+   }
+
+   @AfterMethod(alwaysRun = true)
+   void tearDownStaticMocks() {
+       mockedCalendar.closeOnDemand();
+       mockedCurrency.closeOnDemand();
+   }
+
    @Test
@@ -25,3 +41,1 @@
    @Test
    void testWithCalendar() {
-       PowerMockito.mockStatic(Calendar.class);
-       PowerMockito.mockStatic(Currency.class);
-       Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
+       mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
@@ -29,1 +43,1 @@
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
-       Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
+       mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`ReplacePowerMockitoIntegrationTest#thatPowerMockitoMockStaticIsReplacedInTestMethod`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

@PrepareForTest(value = {Calendar.class, Currency.class})
class StaticMethodTest {

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @Test
    void testWithCalendar() {
        PowerMockito.mockStatic(Calendar.class);
        PowerMockito.mockStatic(Currency.class);
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
    }
}
```

###### After
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

class StaticMethodTest {

    private MockedStatic<Currency> mockedCurrency;

    private MockedStatic<Calendar> mockedCalendar;

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @BeforeMethod
    void setUpStaticMocks() {
        mockedCurrency = Mockito.mockStatic(Currency.class);
        mockedCalendar = Mockito.mockStatic(Calendar.class);
    }

    @AfterMethod(alwaysRun = true)
    void tearDownStaticMocks() {
        mockedCalendar.closeOnDemand();
        mockedCurrency.closeOnDemand();
    }

    @Test
    void testWithCalendar() {
        mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,0 +7,1 @@
import java.util.Locale;

+import org.mockito.MockedStatic;
import org.mockito.Mockito;
@@ -8,2 +9,1 @@

import org.mockito.Mockito;
-import org.powermock.api.mockito.PowerMockito;
-import org.powermock.core.classloader.annotations.PrepareForTest;
+import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
@@ -11,0 +11,1 @@
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
+import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
@@ -13,1 +14,0 @@
import org.testng.annotations.Test;

-@PrepareForTest(value = {Calendar.class, Currency.class})
class StaticMethodTest {
@@ -16,0 +16,4 @@
class StaticMethodTest {

+   private MockedStatic<Currency> mockedCurrency;
+
+   private MockedStatic<Calendar> mockedCalendar;
+
    private Calendar calendarMock;
@@ -23,0 +27,12 @@
    }

+   @BeforeMethod
+   void setUpStaticMocks() {
+       mockedCurrency = Mockito.mockStatic(Currency.class);
+       mockedCalendar = Mockito.mockStatic(Calendar.class);
+   }
+
+   @AfterMethod(alwaysRun = true)
+   void tearDownStaticMocks() {
+       mockedCalendar.closeOnDemand();
+       mockedCurrency.closeOnDemand();
+   }
+
    @Test
@@ -25,3 +41,1 @@
    @Test
    void testWithCalendar() {
-       PowerMockito.mockStatic(Calendar.class);
-       PowerMockito.mockStatic(Currency.class);
-       Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
+       mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
@@ -29,1 +43,1 @@
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
-       Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
+       mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.mockito.ReplacePowerMockito"
  displayName="Replace PowerMock with raw Mockito"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.ReplacePowerMockito" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.java.testing.mockito.table.PowerMockTestsDisabled" label="PowerMockTestsDisabled">

### PowerMock tests disabled for manual migration
**org.openrewrite.java.testing.mockito.table.PowerMockTestsDisabled**

_Tests disabled because they use a PowerMock feature with no Mockito equivalent. Each row is an action item: rework the test so it does not reach into private members, then re-enable it._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The path of the test source file. |
| Test class | The test class the disabled test belongs to. |
| Disabled element | The test method that was disabled, or the class name when the usage sits outside a test method and the whole class had to be disabled. |
| Scope | `METHOD` when a single test was disabled, `CLASS` when the whole test class was. |
| Reason | The PowerMock usage that cannot be migrated. |

</TabItem>

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
