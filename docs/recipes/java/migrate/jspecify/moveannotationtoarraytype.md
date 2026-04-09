---
sidebar_label: "Move annotation to array type"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Move annotation to array type

**org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType**

_When an annotation like `@Nullable` is applied to an array type in declaration position, this recipe moves it to the array brackets. For example, `@Nullable byte[]` becomes `byte @Nullable[]`. Best used before `ChangeType` in a migration pipeline, targeting the pre-migration annotation type._

## Recipe source

[GitHub: MoveAnnotationToArrayType.java](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/jspecify/MoveAnnotationToArrayType.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | annotationType | The type of annotation to move to the array type. Should target the pre-migration annotation type to avoid changing the semantics of pre-existing type-use annotations on object arrays. | `javax.annotation.*ull*` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Micrometer annotations to JSpecify](/recipes/java/jspecify/migratefrommicrometerannotations.md)
* [Migrate from Spring Framework annotations to JSpecify](/recipes/java/jspecify/migratefromspringframeworkannotations.md)
* [Migrate from javax annotation API to JSpecify](/recipes/java/jspecify/migratefromjavaxannotationapi.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|annotationType|`javax.annotation.*ull*`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.annotation.Nullable;

class Foo {
    @Nullable
    public byte[] bar() {
        return null;
    }
}
```

###### After
```java
import javax.annotation.Nullable;

class Foo {
    public byte @Nullable[] bar() {
        return null;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -4,2 +4,1 @@

class Foo {
-   @Nullable
-   public byte[] bar() {
+   public byte @Nullable[] bar() {
        return null;
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.MoveAnnotationToArrayTypeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MoveAnnotationToArrayTypeExample
displayName: Move annotation to array type example
recipeList:
  - org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType:
      annotationType: javax.annotation.*ull*
```

<RunRecipe
  recipeName="org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType"
  displayName="Move annotation to array type"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  requiresConfiguration
  cliOptions={' --recipe-option "annotationType=javax.annotation.*ull*"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jspecify.MoveAnnotationToArrayType" />

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
