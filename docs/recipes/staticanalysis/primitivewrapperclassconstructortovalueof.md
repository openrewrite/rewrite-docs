---
sidebar_label: "Use primitive wrapper `valueOf` method"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use primitive wrapper `valueOf` method

**org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf**

_The constructor of all primitive types has been deprecated in favor of using the static factory method `valueOf` available for each of the primitive type wrappers._

### Tags

* [RSPEC-S2129](https://next.sonarqube.com/sonarqube/coding_rules?languages=java&q=S2129&open=java%3AS2129)

## Recipe source

[GitHub: PrimitiveWrapperClassConstructorToValueOf.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/PrimitiveWrapperClassConstructorToValueOf.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Common static analysis issues](/recipes/staticanalysis/commonstaticanalysis.md)
* [Migrate to Java 11](/recipes/java/migrate/java8tojava11.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
class A {
    Boolean bool = new Boolean(true);
    Byte b = new Byte("1");
    Character c = new Character('c');
    Double d = new Double(1.0);
    Float f = new Float(1.1f);
    Long l = new Long(1);
    Short sh = new Short("12");
    short s3 = 3;
    Short sh3 = new Short(s3);
    Integer i = new Integer(1);
}
```

###### After
```java
class A {
    Boolean bool = Boolean.valueOf(true);
    Byte b = Byte.valueOf("1");
    Character c = Character.valueOf('c');
    Double d = Double.valueOf(1.0);
    Float f = Float.valueOf(1.1f);
    Long l = Long.valueOf(1);
    Short sh = Short.valueOf("12");
    short s3 = 3;
    Short sh3 = Short.valueOf(s3);
    Integer i = Integer.valueOf(1);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,7 +2,7 @@
class A {
-   Boolean bool = new Boolean(true);
-   Byte b = new Byte("1");
-   Character c = new Character('c');
-   Double d = new Double(1.0);
-   Float f = new Float(1.1f);
-   Long l = new Long(1);
-   Short sh = new Short("12");
+   Boolean bool = Boolean.valueOf(true);
+   Byte b = Byte.valueOf("1");
+   Character c = Character.valueOf('c');
+   Double d = Double.valueOf(1.0);
+   Float f = Float.valueOf(1.1f);
+   Long l = Long.valueOf(1);
+   Short sh = Short.valueOf("12");
    short s3 = 3;
@@ -10,2 +10,2 @@
    Short sh = new Short("12");
    short s3 = 3;
-   Short sh3 = new Short(s3);
-   Integer i = new Integer(1);
+   Short sh3 = Short.valueOf(s3);
+   Integer i = Integer.valueOf(1);
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf"
  displayName="Use primitive wrapper `valueOf` method"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.PrimitiveWrapperClassConstructorToValueOf" />

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
