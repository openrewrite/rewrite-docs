---
sidebar_label: "Prefer `java.nio.charset.StandardCharsets`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Prefer `java.nio.charset.StandardCharsets`

**org.openrewrite.apache.commons.io.UseStandardCharsets**

_Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`._

### Tags

* [apache](/reference/recipes-by-tag#apache)
* [commons](/reference/recipes-by-tag#commons)

## Recipe source

[GitHub: apache-commons-io.yml](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-io.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.io.Charsets.ISO_8859_1`
  * fullyQualifiedConstantName: `java.nio.charset.StandardCharsets.ISO_8859_1`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.io.Charsets.US_ASCII`
  * fullyQualifiedConstantName: `java.nio.charset.StandardCharsets.US_ASCII`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.io.Charsets.UTF_8`
  * fullyQualifiedConstantName: `java.nio.charset.StandardCharsets.UTF_8`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.io.Charsets.UTF_16`
  * fullyQualifiedConstantName: `java.nio.charset.StandardCharsets.UTF_16`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.io.Charsets.UTF_16BE`
  * fullyQualifiedConstantName: `java.nio.charset.StandardCharsets.UTF_16BE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.apache.commons.io.Charsets.UTF_16LE`
  * fullyQualifiedConstantName: `java.nio.charset.StandardCharsets.UTF_16LE`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.io.UseStandardCharsets
displayName: Prefer `java.nio.charset.StandardCharsets`
description: |
  Prefer the Java standard library's `java.nio.charset.StandardCharsets` over third-party usage of apache's `org.apache.commons.io.Charsets`.
tags:
  - apache
  - commons
recipeList:
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.io.Charsets.ISO_8859_1
      fullyQualifiedConstantName: java.nio.charset.StandardCharsets.ISO_8859_1
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.io.Charsets.US_ASCII
      fullyQualifiedConstantName: java.nio.charset.StandardCharsets.US_ASCII
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.io.Charsets.UTF_8
      fullyQualifiedConstantName: java.nio.charset.StandardCharsets.UTF_8
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.io.Charsets.UTF_16
      fullyQualifiedConstantName: java.nio.charset.StandardCharsets.UTF_16
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.io.Charsets.UTF_16BE
      fullyQualifiedConstantName: java.nio.charset.StandardCharsets.UTF_16BE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.apache.commons.io.Charsets.UTF_16LE
      fullyQualifiedConstantName: java.nio.charset.StandardCharsets.UTF_16LE

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Prefer the Java standard library instead of Apache Commons](/recipes/apache/commons/preferjavastandardlibrary.md)

## Examples
##### Example 1
`UseJavaStandardCharsetsTest#toStandardCharsets`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.nio.charset.Charset;
import org.apache.commons.io.Charsets;

class A {
     Charset iso88591 = Charsets.ISO_8859_1;
     Charset usAscii = Charsets.US_ASCII;
     Charset utf16 = Charsets.UTF_16;
     Charset utf16be = Charsets.UTF_16BE;
     Charset utf16le = Charsets.UTF_16LE;
     Charset utf8 = Charsets.UTF_8;
}
```

###### After
```java
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

class A {
     Charset iso88591 = StandardCharsets.ISO_8859_1;
     Charset usAscii = StandardCharsets.US_ASCII;
     Charset utf16 = StandardCharsets.UTF_16;
     Charset utf16be = StandardCharsets.UTF_16BE;
     Charset utf16le = StandardCharsets.UTF_16LE;
     Charset utf8 = StandardCharsets.UTF_8;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
import java.nio.charset.Charset;
-import org.apache.commons.io.Charsets;
+import java.nio.charset.StandardCharsets;

@@ -5,6 +5,6 @@

class A {
-    Charset iso88591 = Charsets.ISO_8859_1;
-    Charset usAscii = Charsets.US_ASCII;
-    Charset utf16 = Charsets.UTF_16;
-    Charset utf16be = Charsets.UTF_16BE;
-    Charset utf16le = Charsets.UTF_16LE;
-    Charset utf8 = Charsets.UTF_8;
+    Charset iso88591 = StandardCharsets.ISO_8859_1;
+    Charset usAscii = StandardCharsets.US_ASCII;
+    Charset utf16 = StandardCharsets.UTF_16;
+    Charset utf16be = StandardCharsets.UTF_16BE;
+    Charset utf16le = StandardCharsets.UTF_16LE;
+    Charset utf8 = StandardCharsets.UTF_8;
}
```
</TabItem>
</Tabs>

---

##### Example 2
`UseJavaStandardCharsetsTest#toStandardCharsets`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.nio.charset.Charset;
import org.apache.commons.io.Charsets;

class A {
     Charset iso88591 = Charsets.ISO_8859_1;
     Charset usAscii = Charsets.US_ASCII;
     Charset utf16 = Charsets.UTF_16;
     Charset utf16be = Charsets.UTF_16BE;
     Charset utf16le = Charsets.UTF_16LE;
     Charset utf8 = Charsets.UTF_8;
}
```

###### After
```java
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

class A {
     Charset iso88591 = StandardCharsets.ISO_8859_1;
     Charset usAscii = StandardCharsets.US_ASCII;
     Charset utf16 = StandardCharsets.UTF_16;
     Charset utf16be = StandardCharsets.UTF_16BE;
     Charset utf16le = StandardCharsets.UTF_16LE;
     Charset utf8 = StandardCharsets.UTF_8;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
import java.nio.charset.Charset;
-import org.apache.commons.io.Charsets;
+import java.nio.charset.StandardCharsets;

@@ -5,6 +5,6 @@

class A {
-    Charset iso88591 = Charsets.ISO_8859_1;
-    Charset usAscii = Charsets.US_ASCII;
-    Charset utf16 = Charsets.UTF_16;
-    Charset utf16be = Charsets.UTF_16BE;
-    Charset utf16le = Charsets.UTF_16LE;
-    Charset utf8 = Charsets.UTF_8;
+    Charset iso88591 = StandardCharsets.ISO_8859_1;
+    Charset usAscii = StandardCharsets.US_ASCII;
+    Charset utf16 = StandardCharsets.UTF_16;
+    Charset utf16be = StandardCharsets.UTF_16BE;
+    Charset utf16le = StandardCharsets.UTF_16LE;
+    Charset utf8 = StandardCharsets.UTF_8;
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.io.UseStandardCharsets"
  displayName="Prefer `java.nio.charset.StandardCharsets`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.UseStandardCharsets" />

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
