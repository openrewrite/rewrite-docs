---
sidebar_label: "Use `var` for constructor call assignments"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `var` for constructor call assignments

**org.openrewrite.java.migrate.lang.var.UseVarForConstructors**

_Replace explicit type declarations with `var` when the variable is initialized with a constructor call of exactly the same type. Does not transform when declared type differs from constructor type (e.g., interface vs implementation)._

## Recipe source

[GitHub: UseVarForConstructors.java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/lang/var/UseVarForConstructors.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Java best practices](/recipes/java/migrate/javabestpractices.md)
* [Recipe testing best practices](/recipes/java/recipes/recipetestingbestpractices.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.HashMap;

class Test<E, K, V> {
    void test() {
        // Basic constructor
        StringBuilder sb = new StringBuilder();

        // Constructor with arguments
        StringBuilder sbWithArg = new StringBuilder("initial");

        // Final modifier
        final StringBuilder finalSb = new StringBuilder();

        // Generics with concrete types
        ArrayList<String> list = new ArrayList<>();

        // Explicit type arguments on constructor (non-diamond)
        ArrayList<String> explicitList = new ArrayList<String>();

        // Nested generics with concrete types
        HashMap<String, ArrayList<Integer>> map = new HashMap<>();

        // Type variable in generic
        ArrayList<E> typeVarList = new ArrayList<>();

        // Multiple type variables
        HashMap<K, V> typeVarMap = new HashMap<>();

        // Nested type variables
        HashMap<K, ArrayList<V>> nested = new HashMap<>();

        // Inner class constructor
        HashMap.SimpleEntry<String, Integer> entry = new HashMap.SimpleEntry<>("key", 1);

        // In lambda
        Runnable r = () -> {
            ArrayList<String> lambdaList = new ArrayList<>();
        };

        // For-loop initializer
        for (StringBuilder forSb = new StringBuilder(); forSb.length() < 10; forSb.append("x")) {
        }

        // Try-with-resources
        try (ByteArrayInputStream bais = new ByteArrayInputStream(new byte[0])) {
        } catch (Exception e) {
        }
    }

    // Instance initializer
    {
        StringBuilder initSb = new StringBuilder();
    }

    // Static initializer
    static {
        StringBuilder staticSb = new StringBuilder();
    }
}
```

###### After
```java
import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.HashMap;

class Test<E, K, V> {
    void test() {
        // Basic constructor
        var sb = new StringBuilder();

        // Constructor with arguments
        var sbWithArg = new StringBuilder("initial");

        // Final modifier
        final var finalSb = new StringBuilder();

        // Generics with concrete types
        var list = new ArrayList<String>();

        // Explicit type arguments on constructor (non-diamond)
        var explicitList = new ArrayList<String>();

        // Nested generics with concrete types
        var map = new HashMap<String, ArrayList<Integer>>();

        // Type variable in generic
        var typeVarList = new ArrayList<E>();

        // Multiple type variables
        var typeVarMap = new HashMap<K, V>();

        // Nested type variables
        var nested = new HashMap<K, ArrayList<V>>();

        // Inner class constructor
        var entry = new HashMap.SimpleEntry<String, Integer>("key", 1);

        // In lambda
        Runnable r = () -> {
            var lambdaList = new ArrayList<String>();
        };

        // For-loop initializer
        for (var forSb = new StringBuilder(); forSb.length() < 10; forSb.append("x")) {
        }

        // Try-with-resources
        try (var bais = new ByteArrayInputStream(new byte[0])) {
        } catch (Exception e) {
        }
    }

    // Instance initializer
    {
        var initSb = new StringBuilder();
    }

    // Static initializer
    static {
        var staticSb = new StringBuilder();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -8,1 +8,1 @@
    void test() {
        // Basic constructor
-       StringBuilder sb = new StringBuilder();
+       var sb = new StringBuilder();

@@ -11,1 +11,1 @@

        // Constructor with arguments
-       StringBuilder sbWithArg = new StringBuilder("initial");
+       var sbWithArg = new StringBuilder("initial");

@@ -14,1 +14,1 @@

        // Final modifier
-       final StringBuilder finalSb = new StringBuilder();
+       final var finalSb = new StringBuilder();

@@ -17,1 +17,1 @@

        // Generics with concrete types
-       ArrayList<String> list = new ArrayList<>();
+       var list = new ArrayList<String>();

@@ -20,1 +20,1 @@

        // Explicit type arguments on constructor (non-diamond)
-       ArrayList<String> explicitList = new ArrayList<String>();
+       var explicitList = new ArrayList<String>();

@@ -23,1 +23,1 @@

        // Nested generics with concrete types
-       HashMap<String, ArrayList<Integer>> map = new HashMap<>();
+       var map = new HashMap<String, ArrayList<Integer>>();

@@ -26,1 +26,1 @@

        // Type variable in generic
-       ArrayList<E> typeVarList = new ArrayList<>();
+       var typeVarList = new ArrayList<E>();

@@ -29,1 +29,1 @@

        // Multiple type variables
-       HashMap<K, V> typeVarMap = new HashMap<>();
+       var typeVarMap = new HashMap<K, V>();

@@ -32,1 +32,1 @@

        // Nested type variables
-       HashMap<K, ArrayList<V>> nested = new HashMap<>();
+       var nested = new HashMap<K, ArrayList<V>>();

@@ -35,1 +35,1 @@

        // Inner class constructor
-       HashMap.SimpleEntry<String, Integer> entry = new HashMap.SimpleEntry<>("key", 1);
+       var entry = new HashMap.SimpleEntry<String, Integer>("key", 1);

@@ -39,1 +39,1 @@
        // In lambda
        Runnable r = () -> {
-           ArrayList<String> lambdaList = new ArrayList<>();
+           var lambdaList = new ArrayList<String>();
        };
@@ -43,1 +43,1 @@

        // For-loop initializer
-       for (StringBuilder forSb = new StringBuilder(); forSb.length() < 10; forSb.append("x")) {
+       for (var forSb = new StringBuilder(); forSb.length() < 10; forSb.append("x")) {
        }
@@ -47,1 +47,1 @@

        // Try-with-resources
-       try (ByteArrayInputStream bais = new ByteArrayInputStream(new byte[0])) {
+       try (var bais = new ByteArrayInputStream(new byte[0])) {
        } catch (Exception e) {
@@ -54,1 +54,1 @@
    // Instance initializer
    {
-       StringBuilder initSb = new StringBuilder();
+       var initSb = new StringBuilder();
    }
@@ -59,1 +59,1 @@
    // Static initializer
    static {
-       StringBuilder staticSb = new StringBuilder();
+       var staticSb = new StringBuilder();
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.lang.var.UseVarForConstructors"
  displayName="Use `var` for constructor call assignments"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.lang.var.UseVarForConstructors" />

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
