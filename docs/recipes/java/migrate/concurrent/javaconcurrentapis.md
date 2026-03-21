---
sidebar_label: "Use modernized `java.util.concurrent` APIs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use modernized `java.util.concurrent` APIs

**org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs**

_The Java concurrent APIs were updated in Java 9 and those changes resulted in certain APIs being deprecated. This recipe update an application to replace the deprecated APIs with their modern alternatives._

## Recipe source

[GitHub: java-concurrent-apis.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-concurrent-apis.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use `AtomicBoolean#weakCompareAndSetPlain(boolean, boolean)`](../../../java/migrate/concurrent/migrateatomicbooleanweakcompareandsettoweakcompareandsetplain)
* [Use `AtomicInteger#weakCompareAndSetPlain(int, int)`](../../../java/migrate/concurrent/migrateatomicintegerweakcompareandsettoweakcompareandsetplain)
* [Use `AtomicIntegerArray#weakCompareAndSetPlain(int, int, int)`](../../../java/migrate/concurrent/migrateatomicintegerarrayweakcompareandsettoweakcompareandsetplain)
* [Use `AtomicLong#weakCompareAndSetPlain(long, long)`](../../../java/migrate/concurrent/migrateatomiclongweakcompareandsettoweakcompareandsetplain)
* [Use `AtomicLongArray#weakCompareAndSetPlain(int, long, long)`](../../../java/migrate/concurrent/migrateatomiclongarrayweakcompareandsettoweakcompareandsetplain)
* [Use `AtomicReference#weakCompareAndSetPlain(T, T)`](../../../java/migrate/concurrent/migrateatomicreferenceweakcompareandsettoweakcompareandsetplain)
* [Use `AtomicReferenceArray#weakCompareAndSetPlain(int, T, T)`](../../../java/migrate/concurrent/migrateatomicreferencearrayweakcompareandsettoweakcompareandsetplain)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs
displayName: Use modernized `java.util.concurrent` APIs
description: |
  The Java concurrent APIs were updated in Java 9 and those changes resulted in certain APIs being deprecated. This recipe update an application to replace the deprecated APIs with their modern alternatives.
recipeList:
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicBooleanWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicIntegerArrayWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicLongWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicLongArrayWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceWeakCompareAndSetToWeakCompareAndSetPlain
  - org.openrewrite.java.migrate.concurrent.MigrateAtomicReferenceArrayWeakCompareAndSetToWeakCompareAndSetPlain

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 11](/recipes/java/migrate/java8tojava11.md)

## Examples
##### Example 1
`JavaConcurrentAPIsTest#atomicBooleanWeakCompareAndSet`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.concurrent.atomic.AtomicBoolean;
public class Test {
    public boolean method() {
        AtomicBoolean value = new AtomicBoolean();
        return value.weakCompareAndSet(true, true);
    }
}
```

###### After
```java
import java.util.concurrent.atomic.AtomicBoolean;
public class Test {
    public boolean method() {
        AtomicBoolean value = new AtomicBoolean();
        return value.weakCompareAndSetPlain(true, true);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
    public boolean method() {
        AtomicBoolean value = new AtomicBoolean();
-       return value.weakCompareAndSet(true, true);
+       return value.weakCompareAndSetPlain(true, true);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaConcurrentAPIsTest#atomicBooleanWeakCompareAndSet`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.concurrent.atomic.AtomicBoolean;
public class Test {
    public boolean method() {
        AtomicBoolean value = new AtomicBoolean();
        return value.weakCompareAndSet(true, true);
    }
}
```

###### After
```java
import java.util.concurrent.atomic.AtomicBoolean;
public class Test {
    public boolean method() {
        AtomicBoolean value = new AtomicBoolean();
        return value.weakCompareAndSetPlain(true, true);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -5,1 +5,1 @@
    public boolean method() {
        AtomicBoolean value = new AtomicBoolean();
-       return value.weakCompareAndSet(true, true);
+       return value.weakCompareAndSetPlain(true, true);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs"
  displayName="Use modernized `java.util.concurrent` APIs"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.concurrent.JavaConcurrentAPIs" />

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
