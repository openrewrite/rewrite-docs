---
sidebar_label: "Use modernized `java.util` APIs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use modernized `java.util` APIs

**org.openrewrite.java.migrate.util.JavaUtilAPIs**

_Certain java util APIs have been introduced and are favored over previous APIs._

## Recipe source

[GitHub: java-util-apis.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-util-apis.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

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

* [Replace `iterator().next()` with `getFirst()`](../../../java/migrate/util/iteratornext)
* [Replace `List.get(int)`, `add(int, Object)`, and `remove(int)` with `SequencedCollection` `*First` and `*Last` methods](../../../java/migrate/util/listfirstandlast)
* [Prefer `List.of()`](../../../java/migrate/util/migratecollectionsemptylist)
* [Prefer `Map.of()`](../../../java/migrate/util/migratecollectionsemptymap)
* [Prefer `Set.of()`](../../../java/migrate/util/migratecollectionsemptyset)
* [Prefer `List.of(..)`](../../../java/migrate/util/migratecollectionssingletonlist)
* [Prefer `Map.of(..)`](../../../java/migrate/util/migratecollectionssingletonmap)
* [Prefer `Set.of(..)`](../../../java/migrate/util/migratecollectionssingletonset)
* [Prefer `List.of(..)`](../../../java/migrate/util/migratecollectionsunmodifiablelist)
* [Prefer `Set.of(..)`](../../../java/migrate/util/migratecollectionsunmodifiableset)
* [Use `Reader.of(CharSequence)` for non-synchronized readers](../../../java/migrate/util/migratestringreadertoreaderof)
* [Prefer `Optional.isPresent()`](../../../java/migrate/util/optionalnotemptytoispresent)
* [Prefer `Optional.isEmpty()`](../../../java/migrate/util/optionalnotpresenttoisempty)
* [`Stream&lt;Optional&gt;` idiom recipe](../../../java/migrate/util/optionalstreamrecipe)
* [Remove invocations of deprecated invocations from Deflater, Inflater, ZipFile](../../../java/migrate/util/removefinalizerfromzip)
* [Replace `java.lang.Math random()` with `ThreadLocalRandom nextDouble()`](../../../java/migrate/util/replacemathrandomwiththreadlocalrandomrecipe)
* [Replace `Stream.collect(Collectors.toUnmodifiableList())` with `Stream.toList()`](../../../java/migrate/util/replacestreamcollectwithtolist)
* [Use `getFirst()` instead of `stream().findFirst().orElseThrow()`](../../../java/migrate/util/streamfindfirst)
* [Prefer `EnumSet of(..)`](../../../java/migrate/util/useenumsetof)
* [Prefer `List.of(..)`](../../../java/migrate/util/uselistof)
* [Prefer `Locale.of(..)` over `new Locale(..)`](../../../java/migrate/util/uselocaleof)
* [Prefer `Map.of(..)`](../../../java/migrate/util/usemapof)
* [Prefer `Predicate.not(..)` over casting to `Predicate` and calling `negate()`](../../../java/migrate/util/usepredicatenot)
* [Prefer `Set.of(..)`](../../../java/migrate/util/usesetof)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.util.JavaUtilAPIs
displayName: Use modernized `java.util` APIs
description: |
  Certain java util APIs have been introduced and are favored over previous APIs.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.migrate.util.IteratorNext
  - org.openrewrite.java.migrate.util.ListFirstAndLast
  - org.openrewrite.java.migrate.util.MigrateCollectionsEmptyList
  - org.openrewrite.java.migrate.util.MigrateCollectionsEmptyMap
  - org.openrewrite.java.migrate.util.MigrateCollectionsEmptySet
  - org.openrewrite.java.migrate.util.MigrateCollectionsSingletonList
  - org.openrewrite.java.migrate.util.MigrateCollectionsSingletonMap
  - org.openrewrite.java.migrate.util.MigrateCollectionsSingletonSet
  - org.openrewrite.java.migrate.util.MigrateCollectionsUnmodifiableList
  - org.openrewrite.java.migrate.util.MigrateCollectionsUnmodifiableSet
  - org.openrewrite.java.migrate.util.MigrateStringReaderToReaderOf
  - org.openrewrite.java.migrate.util.OptionalNotEmptyToIsPresent
  - org.openrewrite.java.migrate.util.OptionalNotPresentToIsEmpty
  - org.openrewrite.java.migrate.util.OptionalStreamRecipe
  - org.openrewrite.java.migrate.util.RemoveFinalizerFromZip
  - org.openrewrite.java.migrate.util.ReplaceMathRandomWithThreadLocalRandomRecipe
  - org.openrewrite.java.migrate.util.ReplaceStreamCollectWithToList
  - org.openrewrite.java.migrate.util.StreamFindFirst
  - org.openrewrite.java.migrate.util.UseEnumSetOf
  - org.openrewrite.java.migrate.util.UseListOf
  - org.openrewrite.java.migrate.util.UseLocaleOf
  - org.openrewrite.java.migrate.util.UseMapOf
  - org.openrewrite.java.migrate.util.UsePredicateNot
  - org.openrewrite.java.migrate.util.UseSetOf

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Java best practices](/recipes/java/migrate/javabestpractices.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.util.JavaUtilAPIs"
  displayName="Use modernized `java.util` APIs"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.util.JavaUtilAPIs" />

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
