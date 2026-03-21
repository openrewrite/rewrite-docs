---
sidebar_label: "`ApacheCommonsFileUtils` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# `ApacheCommonsFileUtils` Refaster recipes

**org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes**

_Refaster template recipes for `org.openrewrite.apache.commons.io.ApacheCommonsFileUtils`._

## Recipe source

[GitHub: ApacheCommonsFileUtils.java](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/io/ApacheCommonsFileUtils.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace `FileUtils.getFile(String...)` with JDK provided API](../../../apache/commons/io/apachecommonsfileutilsrecipes$getfilerecipe)
* [Replace `FileUtils.writeStringToFile(File, String)` with JDK provided API](../../../apache/commons/io/apachecommonsfileutilsrecipes$writestringtofilerecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes
displayName: `ApacheCommonsFileUtils` Refaster recipes
description: |
  Refaster template recipes for `org.openrewrite.apache.commons.io.ApacheCommonsFileUtils`.
recipeList:
  - org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$GetFileRecipe
  - org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteStringToFileRecipe

```
</TabItem>
</Tabs>
## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.FileFilter;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

class Foo {
    void bar(File fileA, File fileB, URL url, Charset cs, FileFilter filter, CharSequence charSeq) throws Exception {
        long l = 10L;
        String s = "hello world";
        String[] stringArray = new String[4];
        Collection<String> collection = Collections.EMPTY_LIST;
        byte[] bytes = new byte[0];
        String str;
        boolean bool;
        List<String> strList;
        List<File> fileList;
        File f;

        FileUtils.write(fileA, s, cs);
        f = FileUtils.getFile(s);
        f = FileUtils.getFile(s, s);
        f = FileUtils.toFile(url);

        str = FileUtils.byteCountToDisplaySize(l);
        FileUtils.cleanDirectory(fileA);
        bool = FileUtils.contentEquals(fileA, fileB);
        bool = FileUtils.contentEqualsIgnoreEOL(fileA, fileB, s);
        FileUtils.copyDirectory(fileA, fileB);
        FileUtils.copyFileToDirectory(fileA, fileB);
        FileUtils.copyFile(fileA, fileB);
        FileUtils.copyURLToFile(url, fileA);
        f = FileUtils.current();
        FileUtils.deleteDirectory(fileA);
        f = FileUtils.delete(fileA);
        bool = FileUtils.deleteQuietly(fileA);
        FileUtils.forceDeleteOnExit(fileA);
        FileUtils.forceDelete(fileA);
        FileUtils.forceMkdir(fileA);
        FileUtils.forceMkdirParent(fileA);
        f = FileUtils.getTempDirectory();
        str = FileUtils.readFileToString(fileA, cs);
        str = FileUtils.readFileToString(fileA, s);
        strList = FileUtils.readLines(fileA, cs);
        FileUtils.writeByteArrayToFile(fileA, bytes);
        FileUtils.writeLines(fileA, collection);
        FileUtils.writeStringToFile(fileA, s);
    }
}
```

###### After
```java
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.io.FileFilter;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

class Foo {
    void bar(File fileA, File fileB, URL url, Charset cs, FileFilter filter, CharSequence charSeq) throws Exception {
        long l = 10L;
        String s = "hello world";
        String[] stringArray = new String[4];
        Collection<String> collection = Collections.EMPTY_LIST;
        byte[] bytes = new byte[0];
        String str;
        boolean bool;
        List<String> strList;
        List<File> fileList;
        File f;

        FileUtils.write(fileA, s, cs);
        f = new File(s);
        f = FileUtils.getFile(s, s);
        f = FileUtils.toFile(url);

        str = FileUtils.byteCountToDisplaySize(l);
        FileUtils.cleanDirectory(fileA);
        bool = FileUtils.contentEquals(fileA, fileB);
        bool = FileUtils.contentEqualsIgnoreEOL(fileA, fileB, s);
        FileUtils.copyDirectory(fileA, fileB);
        FileUtils.copyFileToDirectory(fileA, fileB);
        FileUtils.copyFile(fileA, fileB);
        FileUtils.copyURLToFile(url, fileA);
        f = FileUtils.current();
        FileUtils.deleteDirectory(fileA);
        f = FileUtils.delete(fileA);
        bool = FileUtils.deleteQuietly(fileA);
        FileUtils.forceDeleteOnExit(fileA);
        FileUtils.forceDelete(fileA);
        FileUtils.forceMkdir(fileA);
        FileUtils.forceMkdirParent(fileA);
        f = FileUtils.getTempDirectory();
        str = FileUtils.readFileToString(fileA, cs);
        str = FileUtils.readFileToString(fileA, s);
        strList = FileUtils.readLines(fileA, cs);
        FileUtils.writeByteArrayToFile(fileA, bytes);
        FileUtils.writeLines(fileA, collection);
        Files.write(fileA.toPath(), s.getBytes());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,0 +7,1 @@
import java.net.URL;
import java.nio.charset.Charset;
+import java.nio.file.Files;
import java.util.Collection;
@@ -25,1 +26,1 @@

        FileUtils.write(fileA, s, cs);
-       f = FileUtils.getFile(s);
+       f = new File(s);
        f = FileUtils.getFile(s, s);
@@ -51,1 +52,1 @@
        FileUtils.writeByteArrayToFile(fileA, bytes);
        FileUtils.writeLines(fileA, collection);
-       FileUtils.writeStringToFile(fileA, s);
+       Files.write(fileA.toPath(), s.getBytes());
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes"
  displayName="`ApacheCommonsFileUtils` Refaster recipes"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes" />

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
