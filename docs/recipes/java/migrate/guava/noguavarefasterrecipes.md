---
title: "Refaster style Guava to Java migration recipes"
sidebar_label: "Refaster style Guava to Java migration recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Refaster style Guava to Java migration recipes

**org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes**

_Recipes that migrate from Guava to Java, using Refaster style templates for cases beyond what declarative recipes can cover._

## Recipe source

[GitHub: NoGuavaRefaster.java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaRefaster.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `Preconditions.checkNotNull` with `Objects.requireNonNull`](../../../java/migrate/guava/noguavarefasterrecipes$preconditionschecknotnulltoobjectsrequirenonnullrecipe)
* [Replace `Preconditions.checkNotNull` taking a `String` message with `Objects.requireNonNull`](../../../java/migrate/guava/noguavarefasterrecipes$preconditionschecknotnullwithmessagetoobjectsrequirenonnullrecipe)
* [Replace `Preconditions.checkNotNull` taking an `Object` message with `Objects.requireNonNull` and `String.valueOf`](../../../java/migrate/guava/noguavarefasterrecipes$preconditionschecknotnullwithmessagetoobjectsrequirenonnullmessagetypeobjectrecipe)
* [Prefer `new ArrayList&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewarraylistrecipe)
* [Prefer `new ArrayList&lt;&gt;(Collection)`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewarraylistfromcollectionrecipe)
* [Prefer `new ArrayList&lt;&gt;(int)`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewarraylistwithcapacityrecipe)
* [Prefer `new CopyOnWriteArrayList&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewcopyonwritearraylistrecipe)
* [Prefer `new CopyOnWriteArrayList&lt;&gt;(Collection)`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewcopyonwritearraylistfromcollectionrecipe)
* [Prefer `new LinkedList&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewlinkedlistrecipe)
* [Prefer `new LinkedList&lt;&gt;(Collection)`](../../../java/migrate/guava/noguavarefasterrecipes$listsnewlinkedlistfromcollectionrecipe)
* [Prefer `new HashMap&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewhashmaprecipe)
* [Prefer `new HashMap&lt;&gt;(Map)`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewhashmapfrommaprecipe)
* [Prefer `new LinkedHashMap&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewlinkedhashmaprecipe)
* [Prefer `new LinkedHashMap&lt;&gt;(Map)`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewlinkedhashmapfrommaprecipe)
* [Prefer `new TreeMap&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewtreemaprecipe)
* [Prefer `new TreeMap&lt;&gt;(Comparator)`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewtreemapwithcomparatorrecipe)
* [Prefer `new TreeMap&lt;&gt;(SortedMap)`](../../../java/migrate/guava/noguavarefasterrecipes$mapsnewtreemapfromsortedmaprecipe)
* [Prefer `Collections.newSetFromMap(new ConcurrentHashMap&lt;&gt;())`](../../../java/migrate/guava/noguavarefasterrecipes$setsnewconcurrenthashsetrecipe)
* [Prefer `new LinkedHashSet&lt;&gt;()`](../../../java/migrate/guava/noguavarefasterrecipes$setsnewlinkedhashsetrecipe)
* [Prefer `new LinkedHashSet&lt;&gt;(Collection)`](../../../java/migrate/guava/noguavarefasterrecipes$setsnewlinkedhashsetfromcollectionrecipe)
* [Prefer `new LinkedHashSet&lt;&gt;(int)`](../../../java/migrate/guava/noguavarefasterrecipes$setsnewlinkedhashsetwithexpectedsizerecipe)
* [Prefer `Collection.stream().allMatch(Predicate)`](../../../java/migrate/guava/noguavarefasterrecipes$iterablesallrecipe)
* [Prefer `Collection.stream().map(Function)` over `Collections2.transform`](../../../java/migrate/guava/noguavarefasterrecipes$collections2transformrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes
displayName: Refaster style Guava to Java migration recipes
description: |
  Recipes that migrate from Guava to Java, using Refaster style templates for cases beyond what declarative recipes can cover.
recipeList:
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullToObjectsRequireNonNullRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullWithMessageToObjectsRequireNonNullRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullWithMessageToObjectsRequireNonNullMessageTypeObjectRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewArrayListRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewArrayListFromCollectionRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewArrayListWithCapacityRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewCopyOnWriteArrayListRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewCopyOnWriteArrayListFromCollectionRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewLinkedListRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$ListsNewLinkedListFromCollectionRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewHashMapRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewHashMapFromMapRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewLinkedHashMapRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewLinkedHashMapFromMapRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewTreeMapRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewTreeMapWithComparatorRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$MapsNewTreeMapFromSortedMapRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$SetsNewConcurrentHashSetRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$SetsNewLinkedHashSetRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$SetsNewLinkedHashSetFromCollectionRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$SetsNewLinkedHashSetWithExpectedSizeRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$IterablesAllRecipe
  - org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$Collections2TransformRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Prefer the Java standard library instead of Guava](/recipes/java/migrate/guava/noguava.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.google.common.base.Preconditions;

class A {
    Object foo(Object obj) {
        return Preconditions.checkNotNull(obj);
    }
}
```

###### After
```java
import static java.util.Objects.requireNonNull;

class A {
    Object foo(Object obj) {
        return requireNonNull(obj);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import com.google.common.base.Preconditions;
+import static java.util.Objects.requireNonNull;

@@ -5,1 +5,1 @@
class A {
    Object foo(Object obj) {
-       return Preconditions.checkNotNull(obj);
+       return requireNonNull(obj);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes"
  displayName="Refaster style Guava to Java migration recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes" />

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
