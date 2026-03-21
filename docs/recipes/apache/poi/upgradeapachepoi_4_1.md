---
sidebar_label: "Migrates to Apache POI 4.1.2"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates to Apache POI 4.1.2

**org.openrewrite.apache.poi.UpgradeApachePoi\_4\_1**

_Migrates to the last Apache POI 4.x release. This recipe modifies build files and makes changes to deprecated/preferred APIs that have changed between versions._

### Tags

* [apache](/reference/recipes-by-tag#apache)
* [poi](/reference/recipes-by-tag#poi)

## Recipe source

[GitHub: apache-poi-4-1.yml](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-poi-4-1.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrates to Apache POI 3.17](../../apache/poi/upgradeapachepoi_3_17)
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.apache.poi`
  * artifactId: `poi*`
  * newVersion: `4.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.apache.poi`
  * artifactId: `poi-ooxml-schemas`
  * newVersion: `4.x`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.poi.poifs.filesystem.NPOIFSFileSystem`
  * newFullyQualifiedTypeName: `org.apache.poi.poifs.filesystem.POIFSFileSystem`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.poi.poifs.filesystem.OPOIFSFileSystem`
  * newFullyQualifiedTypeName: `org.apache.poi.poifs.filesystem.POIFSFileSystem`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.poi.xwpf.usermodel.TextSegement`
  * newFullyQualifiedTypeName: `org.apache.poi.xwpf.usermodel.TextSegment`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.poi.extractor.ExtractorFactory`
  * newFullyQualifiedTypeName: `org.apache.poi.ooxml.extractor.ExtractorFactory`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.poi.openxml4j.util.Nullable`
  * newFullyQualifiedTypeName: `java.util.Optional`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.poi.UpgradeApachePoi_4_1
displayName: Migrates to Apache POI 4.1.2
description: |
  Migrates to the last Apache POI 4.x release. This recipe modifies build files and makes changes to deprecated/preferred APIs that have changed between versions.
tags:
  - apache
  - poi
recipeList:
  - org.openrewrite.apache.poi.UpgradeApachePoi_3_17
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.apache.poi
      artifactId: poi*
      newVersion: 4.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.apache.poi
      artifactId: poi-ooxml-schemas
      newVersion: 4.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.poi.poifs.filesystem.NPOIFSFileSystem
      newFullyQualifiedTypeName: org.apache.poi.poifs.filesystem.POIFSFileSystem
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.poi.poifs.filesystem.OPOIFSFileSystem
      newFullyQualifiedTypeName: org.apache.poi.poifs.filesystem.POIFSFileSystem
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.poi.xwpf.usermodel.TextSegement
      newFullyQualifiedTypeName: org.apache.poi.xwpf.usermodel.TextSegment
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.poi.extractor.ExtractorFactory
      newFullyQualifiedTypeName: org.apache.poi.ooxml.extractor.ExtractorFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.poi.openxml4j.util.Nullable
      newFullyQualifiedTypeName: java.util.Optional

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrates to Apache POI 5.x](/recipes/apache/poi/upgradeapachepoi_5.md)

## Examples
##### Example 1
`UpgradeApachePoi_4_1Test#npoifsToPoifs`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.poi.poifs.filesystem.NPOIFSFileSystem;

import java.io.File;
import java.io.IOException;

class Test {
    void method(File file) throws IOException {
        NPOIFSFileSystem fs = new NPOIFSFileSystem(file);
    }
}
```

###### After
```java
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

import java.io.File;
import java.io.IOException;

class Test {
    void method(File file) throws IOException {
        POIFSFileSystem fs = new POIFSFileSystem(file);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.apache.poi.poifs.filesystem.NPOIFSFileSystem;
+import org.apache.poi.poifs.filesystem.POIFSFileSystem;

@@ -8,1 +8,1 @@
class Test {
    void method(File file) throws IOException {
-       NPOIFSFileSystem fs = new NPOIFSFileSystem(file);
+       POIFSFileSystem fs = new POIFSFileSystem(file);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeApachePoi_4_1Test#npoifsToPoifs`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.poi.poifs.filesystem.NPOIFSFileSystem;

import java.io.File;
import java.io.IOException;

class Test {
    void method(File file) throws IOException {
        NPOIFSFileSystem fs = new NPOIFSFileSystem(file);
    }
}
```

###### After
```java
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

import java.io.File;
import java.io.IOException;

class Test {
    void method(File file) throws IOException {
        POIFSFileSystem fs = new POIFSFileSystem(file);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.apache.poi.poifs.filesystem.NPOIFSFileSystem;
+import org.apache.poi.poifs.filesystem.POIFSFileSystem;

@@ -8,1 +8,1 @@
class Test {
    void method(File file) throws IOException {
-       NPOIFSFileSystem fs = new NPOIFSFileSystem(file);
+       POIFSFileSystem fs = new POIFSFileSystem(file);
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.poi.UpgradeApachePoi_4_1"
  displayName="Migrates to Apache POI 4.1.2"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.poi.UpgradeApachePoi_4_1" />

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
