---
sidebar_label: "Prefer `java.nio.file.Files`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Prefer `java.nio.file.Files`

**org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles**

_Prefer the Java standard library's `java.nio.file.Files` over third-party usage of apache's `apache.commons.io.FileUtils`._

### Tags

* [apache](/reference/recipes-by-tag#apache)
* [commons](/reference/recipes-by-tag#commons)

## Recipe source

[GitHub: ApacheFileUtilsToJavaFiles.java](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/io/ApacheFileUtilsToJavaFiles.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.io.FileUtils;

import java.io.File;
import java.nio.charset.Charset;
import java.util.List;

class A {
    byte[] readFileBytes(File file) {
        return FileUtils.readFileToByteArray(file);
    }
    List<String> readLines(File file) {
        return FileUtils.readLines(file);
    }
    List<String> readLinesWithCharset(File file, Charset charset) {
        return FileUtils.readLines(file, charset);
    }
    List<String> readLinesWithCharsetId(File file) {
        return FileUtils.readLines(file, "UTF_8");
    }
}
```

###### After
```java
import java.io.File;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.util.List;

class A {
    byte[] readFileBytes(File file) {
        return Files.readAllBytes(file.toPath());
    }
    List<String> readLines(File file) {
        return Files.readAllLines(file.toPath());
    }
    List<String> readLinesWithCharset(File file, Charset charset) {
        return Files.readAllLines(file.toPath(), charset);
    }
    List<String> readLinesWithCharsetId(File file) {
        return Files.readAllLines(file.toPath(), Charset.forName("UTF_8"));
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import org.apache.commons.io.FileUtils;
-
import java.io.File;
@@ -5,0 +3,1 @@
import java.io.File;
import java.nio.charset.Charset;
+import java.nio.file.Files;
import java.util.List;
@@ -9,1 +8,1 @@
class A {
    byte[] readFileBytes(File file) {
-       return FileUtils.readFileToByteArray(file);
+       return Files.readAllBytes(file.toPath());
    }
@@ -12,1 +11,1 @@
    }
    List<String> readLines(File file) {
-       return FileUtils.readLines(file);
+       return Files.readAllLines(file.toPath());
    }
@@ -15,1 +14,1 @@
    }
    List<String> readLinesWithCharset(File file, Charset charset) {
-       return FileUtils.readLines(file, charset);
+       return Files.readAllLines(file.toPath(), charset);
    }
@@ -18,1 +17,1 @@
    }
    List<String> readLinesWithCharsetId(File file) {
-       return FileUtils.readLines(file, "UTF_8");
+       return Files.readAllLines(file.toPath(), Charset.forName("UTF_8"));
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles"
  displayName="Prefer `java.nio.file.Files`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.ApacheFileUtilsToJavaFiles" />

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
