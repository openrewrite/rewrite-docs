---
sidebar_label: "Use modernized `javax.lang.model.util` APIs"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use modernized `javax.lang.model.util` APIs

**org.openrewrite.java.migrate.javax.JavaxLangModelUtil**

_Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes._

## Recipe source

[GitHub: javax-lang-model-util.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/javax-lang-model-util.yml),
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

* [Use `javax.lang.model.util.AbstractAnnotationValueVisitor9`](../../../java/migrate/javax/migrateabstractannotationvaluevisitor6to9)
* [Use `javax.lang.model.util.AbstractElementVisitor9`](../../../java/migrate/javax/migrateabstractelementvisitor6to9)
* [Use `javax.lang.model.util.AbstractTypeVisitor9`](../../../java/migrate/javax/migrateabstracttypevisitor6to9)
* [Use `javax.lang.model.util.ElementKindVisitor9`](../../../java/migrate/javax/migrateelementkindvisitor6to9)
* [Use `javax.lang.model.util.ElementScanner9`](../../../java/migrate/javax/migrateelementscanner6to9)
* [Use `javax.lang.model.util.SimpleAnnotationValueVisitor9`](../../../java/migrate/javax/migratesimpleannotationvaluevisitor6to9)
* [Use `javax.lang.model.util.SimpleElementVisitor9`](../../../java/migrate/javax/migratesimpleelementvisitor6to9)
* [Use `javax.lang.model.util.SimpleTypeVisitor9`](../../../java/migrate/javax/migratesimpletypevisitor6to9)
* [Use `javax.lang.model.util.TypeKindVisitor9`](../../../java/migrate/javax/migratetypekindvisitor6to9)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.JavaxLangModelUtil
displayName: Use modernized `javax.lang.model.util` APIs
description: |
  Certain `javax.lang.model.util` APIs have become deprecated and their usages changed, necessitating usage changes.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.migrate.javax.MigrateAbstractAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateAbstractTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementKindVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateElementScanner6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleAnnotationValueVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleElementVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateSimpleTypeVisitor6To9
  - org.openrewrite.java.migrate.javax.MigrateTypeKindVisitor6To9

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 11](/recipes/java/migrate/java8tojava11.md)

## Examples
##### Example 1
`JavaxLangModelUtilTest#abstractAnnotationValueVisitor6`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor6;

abstract class Test extends AbstractAnnotationValueVisitor6 {}
```

###### After
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor9;

abstract class Test extends AbstractAnnotationValueVisitor9 {}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import javax.lang.model.util.AbstractAnnotationValueVisitor6;
+import javax.lang.model.util.AbstractAnnotationValueVisitor9;

@@ -3,1 +3,1 @@
import javax.lang.model.util.AbstractAnnotationValueVisitor6;

-abstract class Test extends AbstractAnnotationValueVisitor6 {}
+abstract class Test extends AbstractAnnotationValueVisitor9 {}

```
</TabItem>
</Tabs>

---

##### Example 2
`JavaxLangModelUtilTest#abstractAnnotationValueVisitor6`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor6;

abstract class Test extends AbstractAnnotationValueVisitor6 {}
```

###### After
```java
import javax.lang.model.util.AbstractAnnotationValueVisitor9;

abstract class Test extends AbstractAnnotationValueVisitor9 {}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import javax.lang.model.util.AbstractAnnotationValueVisitor6;
+import javax.lang.model.util.AbstractAnnotationValueVisitor9;

@@ -3,1 +3,1 @@
import javax.lang.model.util.AbstractAnnotationValueVisitor6;

-abstract class Test extends AbstractAnnotationValueVisitor6 {}
+abstract class Test extends AbstractAnnotationValueVisitor9 {}

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.javax.JavaxLangModelUtil"
  displayName="Use modernized `javax.lang.model.util` APIs"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.JavaxLangModelUtil" />

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
