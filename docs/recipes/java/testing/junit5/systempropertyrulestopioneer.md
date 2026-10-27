---
title: "Migrate System Rules system property rules to JUnit Pioneer annotations"
sidebar_label: "Migrate System Rules system property rules to JUnit Pioneer annotations"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate System Rules system property rules to JUnit Pioneer annotations

**org.openrewrite.java.testing.junit5.SystemPropertyRulesToPioneer**

_Replaces System Rules' `ProvideSystemProperty`, `ClearSystemProperties` and `RestoreSystemProperties` rules with JUnit Pioneer's `@SetSystemProperty`, `@ClearSystemProperty` and `@RestoreSystemProperties` class annotations. Only rules that take string literals and are not used elsewhere in the test are migrated; the others are left for the migration to System Stubs._

## Recipe source

[GitHub: SystemPropertyRulesToPioneer.java](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/SystemPropertyRulesToPioneer.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-testing-frameworks/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate System Rules to System Stubs and JUnit Pioneer](/recipes/java/testing/junit5/migratesystemrules.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.ClassRule;
import org.junit.Rule;
import org.junit.contrib.java.lang.system.ClearSystemProperties;
import org.junit.contrib.java.lang.system.ProvideSystemProperty;
import org.junit.contrib.java.lang.system.RestoreSystemProperties;
import org.junit.jupiter.api.Test;

class ConfigTest {
    @ClassRule
    public static final ProvideSystemProperty PROPERTIES = new ProvideSystemProperty("a", "1").and("b", "2");

    @Rule
    public final ClearSystemProperties cleared = new ClearSystemProperties("c", "d");

    @Rule
    public final RestoreSystemProperties restore = new RestoreSystemProperties();

    @Test
    void readsProperties() {
        System.setProperty("e", "5");
    }
}
```

###### After
```java
import org.junit.jupiter.api.Test;
import org.junitpioneer.jupiter.ClearSystemProperty;
import org.junitpioneer.jupiter.RestoreSystemProperties;
import org.junitpioneer.jupiter.SetSystemProperty;

@ClearSystemProperty(key = "c")
@ClearSystemProperty(key = "d")
@RestoreSystemProperties
@SetSystemProperty(key = "a", value = "1")
@SetSystemProperty(key = "b", value = "2")
class ConfigTest {

    @Test
    void readsProperties() {
        System.setProperty("e", "5");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,5 +1,0 @@
-import org.junit.ClassRule;
-import org.junit.Rule;
-import org.junit.contrib.java.lang.system.ClearSystemProperties;
-import org.junit.contrib.java.lang.system.ProvideSystemProperty;
-import org.junit.contrib.java.lang.system.RestoreSystemProperties;
import org.junit.jupiter.api.Test;
@@ -7,0 +2,3 @@
import org.junit.contrib.java.lang.system.RestoreSystemProperties;
import org.junit.jupiter.api.Test;
+import org.junitpioneer.jupiter.ClearSystemProperty;
+import org.junitpioneer.jupiter.RestoreSystemProperties;
+import org.junitpioneer.jupiter.SetSystemProperty;

@@ -8,0 +6,5 @@
import org.junit.jupiter.api.Test;

+@ClearSystemProperty(key = "c")
+@ClearSystemProperty(key = "d")
+@RestoreSystemProperties
+@SetSystemProperty(key = "a", value = "1")
+@SetSystemProperty(key = "b", value = "2")
class ConfigTest {
@@ -9,2 +12,0 @@

class ConfigTest {
-   @ClassRule
-   public static final ProvideSystemProperty PROPERTIES = new ProvideSystemProperty("a", "1").and("b", "2");

@@ -12,6 +13,0 @@
    public static final ProvideSystemProperty PROPERTIES = new ProvideSystemProperty("a", "1").and("b", "2");

-   @Rule
-   public final ClearSystemProperties cleared = new ClearSystemProperties("c", "d");
-
-   @Rule
-   public final RestoreSystemProperties restore = new RestoreSystemProperties();
-
    @Test
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.junit5.SystemPropertyRulesToPioneer"
  displayName="Migrate System Rules system property rules to JUnit Pioneer annotations"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.SystemPropertyRulesToPioneer" />

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
