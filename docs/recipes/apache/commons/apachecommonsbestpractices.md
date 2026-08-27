---
title: "Apache Commons best practices"
sidebar_label: "Apache Commons best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apache Commons best practices

**org.openrewrite.apache.commons.ApacheCommonsBestPractices**

_Apply best practices to code that uses [Apache Commons](https://commons.apache.org/) libraries: migrate off the end-of-life Commons Lang 2.x, Commons Collections 3.x and Commons Math 2.x major versions, correct the `commons-io` coordinates, replace deprecated APIs with their supported replacements, make character encodings explicit, and prefer the Java standard library where it now offers an equivalent._

### Tags

* [commons](/reference/recipes-by-tag#commons)
* [apache](/reference/recipes-by-tag#apache)

## Recipe source

[GitHub: apache-commons-best-practices.yml](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-best-practices.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license). Moderne customers can download precompiled artifacts from The Code Genome Project. For non-commercial use you can build the artifact from source locally.


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrates to Apache Commons Collections 4.x](../../apache/commons/collections/upgradeapachecommonscollections_3_4)
* [Migrates to Apache Commons Lang 3.x](../../apache/commons/lang/upgradeapachecommonslang_2_3)
* [Migrates to Apache Commons Math 3.x](../../apache/commons/math/upgradeapachecommonsmath_2_3)
* [Relocate `org.apache.commons:commons-io` to `commons-io:commons-io`](../../apache/commons/io/relocateapachecommonsio)
* [Use IOUtils method that include  their charset encoding](../../apache/commons/io/apacheioutilsuseexplicitcharset)
* [Migrate deprecated SystemUtils constants](../../apache/commons/lang3/migratesystemutilsdeprecations)
* [Prefer the Java standard library instead of Apache Commons](../../apache/commons/preferjavastandardlibrary)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.ApacheCommonsBestPractices
displayName: Apache Commons best practices
description: |
  Apply best practices to code that uses [Apache Commons](https://commons.apache.org/) libraries: migrate off the end-of-life Commons Lang 2.x, Commons Collections 3.x and Commons Math 2.x major versions, correct the `commons-io` coordinates, replace deprecated APIs with their supported replacements, make character encodings explicit, and prefer the Java standard library where it now offers an equivalent.
tags:
  - commons
  - apache
recipeList:
  - org.openrewrite.apache.commons.collections.UpgradeApacheCommonsCollections_3_4
  - org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang_2_3
  - org.openrewrite.apache.commons.math.UpgradeApacheCommonsMath_2_3
  - org.openrewrite.apache.commons.io.RelocateApacheCommonsIo
  - org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset
  - org.openrewrite.apache.commons.lang3.MigrateSystemUtilsDeprecations
  - org.openrewrite.apache.commons.PreferJavaStandardLibrary

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Apache best practices](/recipes/apache/apachebestpractices.md)

## Examples
##### Example 1
`ApacheCommonsBestPracticesTest#useJdkEquivalentsAndExplicitCharset`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.SystemUtils;

import java.io.InputStream;

class Test {
    String lineSeparator = SystemUtils.LINE_SEPARATOR;

    String read(InputStream in) throws Exception {
        return IOUtils.toString(in);
    }
}
```

###### After
```java
import org.apache.commons.io.IOUtils;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

class Test {
    String lineSeparator = System.lineSeparator();

    String read(InputStream in) throws Exception {
        return IOUtils.toString(in, StandardCharsets.UTF_8);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,0 @@
import org.apache.commons.io.IOUtils;
-import org.apache.commons.lang3.SystemUtils;

@@ -5,0 +4,1 @@

import java.io.InputStream;
+import java.nio.charset.StandardCharsets;

@@ -7,1 +7,1 @@

class Test {
-   String lineSeparator = SystemUtils.LINE_SEPARATOR;
+   String lineSeparator = System.lineSeparator();

@@ -10,1 +10,1 @@

    String read(InputStream in) throws Exception {
-       return IOUtils.toString(in);
+       return IOUtils.toString(in, StandardCharsets.UTF_8);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`ApacheCommonsBestPracticesTest#useJdkEquivalentsAndExplicitCharset`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.SystemUtils;

import java.io.InputStream;

class Test {
    String lineSeparator = SystemUtils.LINE_SEPARATOR;

    String read(InputStream in) throws Exception {
        return IOUtils.toString(in);
    }
}
```

###### After
```java
import org.apache.commons.io.IOUtils;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;

class Test {
    String lineSeparator = System.lineSeparator();

    String read(InputStream in) throws Exception {
        return IOUtils.toString(in, StandardCharsets.UTF_8);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,0 @@
import org.apache.commons.io.IOUtils;
-import org.apache.commons.lang3.SystemUtils;

@@ -5,0 +4,1 @@

import java.io.InputStream;
+import java.nio.charset.StandardCharsets;

@@ -7,1 +7,1 @@

class Test {
-   String lineSeparator = SystemUtils.LINE_SEPARATOR;
+   String lineSeparator = System.lineSeparator();

@@ -10,1 +10,1 @@

    String read(InputStream in) throws Exception {
-       return IOUtils.toString(in);
+       return IOUtils.toString(in, StandardCharsets.UTF_8);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.ApacheCommonsBestPractices"
  displayName="Apache Commons best practices"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.ApacheCommonsBestPractices" />

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
