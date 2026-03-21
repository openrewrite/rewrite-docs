---
sidebar_label: "Use IOUtils method that include  their charset encoding"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use IOUtils method that include  their charset encoding

**org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset**

_Use `IOUtils` method invocations that include the charset encoding instead of using the deprecated versions that do not include a charset encoding. (e.g. converts `IOUtils.readLines(inputStream)` to `IOUtils.readLines(inputStream, StandardCharsets.UTF_8)`._

### Tags

* [apache](/reference/recipes-by-tag#apache)
* [commons](/reference/recipes-by-tag#commons)

## Recipe source

[GitHub: ApacheIOUtilsUseExplicitCharset.java](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/io/ApacheIOUtilsUseExplicitCharset.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | encoding | *Optional*. The default encoding to use, must be a standard charset. | `UTF_8` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|encoding|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.io.IOUtils;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.net.URI;
import java.net.URL;

class T {
    InputStream inputStream;
    OutputStream outputStream;
    Reader reader;
    Writer writer;
    CharSequence charSequence;
    String someString;
    byte[] bytes;
    URI uri;
    URL url;
    char[] chars;
    StringBuffer stringBuffer;

    void flex() {
        IOUtils.copy(inputStream, writer);
        IOUtils.copy(reader, outputStream);
        IOUtils.readLines(inputStream);
        IOUtils.toByteArray(someString);
        IOUtils.toByteArray(reader);
        IOUtils.toCharArray(inputStream);
        IOUtils.toInputStream(charSequence);
        IOUtils.toInputStream("Test");
        IOUtils.toString("Test".getBytes());
        IOUtils.toString(inputStream);
        IOUtils.toString(uri);
        IOUtils.toString(url);
        IOUtils.write(bytes, writer);
        IOUtils.write(chars, outputStream);
        IOUtils.write(charSequence, outputStream);
        IOUtils.write(someString, outputStream);
        IOUtils.write(stringBuffer, outputStream);
    }
}
```

###### After
```java
import org.apache.commons.io.IOUtils;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.net.URI;
import java.net.URL;
import java.nio.charset.StandardCharsets;

class T {
    InputStream inputStream;
    OutputStream outputStream;
    Reader reader;
    Writer writer;
    CharSequence charSequence;
    String someString;
    byte[] bytes;
    URI uri;
    URL url;
    char[] chars;
    StringBuffer stringBuffer;

    void flex() {
        IOUtils.copy(inputStream, writer, StandardCharsets.UTF_8);
        IOUtils.copy(reader, outputStream, StandardCharsets.UTF_8);
        IOUtils.readLines(inputStream, StandardCharsets.UTF_8);
        someString.getBytes(StandardCharsets.UTF_8);
        IOUtils.toByteArray(reader, StandardCharsets.UTF_8);
        IOUtils.toCharArray(inputStream, StandardCharsets.UTF_8);
        IOUtils.toInputStream(charSequence, StandardCharsets.UTF_8);
        IOUtils.toInputStream("Test", StandardCharsets.UTF_8);
        IOUtils.toString("Test".getBytes(), StandardCharsets.UTF_8);
        IOUtils.toString(inputStream, StandardCharsets.UTF_8);
        IOUtils.toString(uri, StandardCharsets.UTF_8);
        IOUtils.toString(url, StandardCharsets.UTF_8);
        IOUtils.write(bytes, writer, StandardCharsets.UTF_8);
        IOUtils.write(chars, outputStream, StandardCharsets.UTF_8);
        IOUtils.write(charSequence, outputStream, StandardCharsets.UTF_8);
        IOUtils.write(someString, outputStream, StandardCharsets.UTF_8);
        IOUtils.write(stringBuffer, outputStream, StandardCharsets.UTF_8);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -8,0 +8,1 @@
import java.net.URI;
import java.net.URL;
+import java.nio.charset.StandardCharsets;

@@ -23,17 +24,17 @@

    void flex() {
-       IOUtils.copy(inputStream, writer);
-       IOUtils.copy(reader, outputStream);
-       IOUtils.readLines(inputStream);
-       IOUtils.toByteArray(someString);
-       IOUtils.toByteArray(reader);
-       IOUtils.toCharArray(inputStream);
-       IOUtils.toInputStream(charSequence);
-       IOUtils.toInputStream("Test");
-       IOUtils.toString("Test".getBytes());
-       IOUtils.toString(inputStream);
-       IOUtils.toString(uri);
-       IOUtils.toString(url);
-       IOUtils.write(bytes, writer);
-       IOUtils.write(chars, outputStream);
-       IOUtils.write(charSequence, outputStream);
-       IOUtils.write(someString, outputStream);
-       IOUtils.write(stringBuffer, outputStream);
+       IOUtils.copy(inputStream, writer, StandardCharsets.UTF_8);
+       IOUtils.copy(reader, outputStream, StandardCharsets.UTF_8);
+       IOUtils.readLines(inputStream, StandardCharsets.UTF_8);
+       someString.getBytes(StandardCharsets.UTF_8);
+       IOUtils.toByteArray(reader, StandardCharsets.UTF_8);
+       IOUtils.toCharArray(inputStream, StandardCharsets.UTF_8);
+       IOUtils.toInputStream(charSequence, StandardCharsets.UTF_8);
+       IOUtils.toInputStream("Test", StandardCharsets.UTF_8);
+       IOUtils.toString("Test".getBytes(), StandardCharsets.UTF_8);
+       IOUtils.toString(inputStream, StandardCharsets.UTF_8);
+       IOUtils.toString(uri, StandardCharsets.UTF_8);
+       IOUtils.toString(url, StandardCharsets.UTF_8);
+       IOUtils.write(bytes, writer, StandardCharsets.UTF_8);
+       IOUtils.write(chars, outputStream, StandardCharsets.UTF_8);
+       IOUtils.write(charSequence, outputStream, StandardCharsets.UTF_8);
+       IOUtils.write(someString, outputStream, StandardCharsets.UTF_8);
+       IOUtils.write(stringBuffer, outputStream, StandardCharsets.UTF_8);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset"
  displayName="Use IOUtils method that include  their charset encoding"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.io.ApacheIOUtilsUseExplicitCharset" />

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
