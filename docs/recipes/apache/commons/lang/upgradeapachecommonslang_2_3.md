---
sidebar_label: "Migrates to Apache Commons Lang 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrates to Apache Commons Lang 3.x

**org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang\_2\_3**

_Migrate applications to the latest Apache Commons Lang 3.x release. This recipe modifies application's build files, and changes the package as per [the migration release notes](https://commons.apache.org/proper/commons-lang/article3_0.html)._

### Tags

* [apache](/reference/recipes-by-tag#apache)
* [lang](/reference/recipes-by-tag#lang)
* [commons](/reference/recipes-by-tag#commons)

## Recipe source

[GitHub: apache-commons-lang-2-3.yml](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/resources/META-INF/rewrite/apache-commons-lang-2-3.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `commons-lang`
  * oldArtifactId: `commons-lang`
  * newGroupId: `org.apache.commons`
  * newArtifactId: `commons-lang3`
  * newVersion: `3.x`
* [Migrate `WordUtils` to Apache Commons Text](../../../apache/commons/lang/wordutilstocommonstext)
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.apache.commons.lang`
  * newPackageName: `org.apache.commons.lang3`
  * recursive: `true`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.apache.commons.lang3.exception.ExceptionUtils getFullStackTrace(..)`
  * newMethodName: `getStackTrace`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.commons.lang3.NullArgumentException`
  * newFullyQualifiedTypeName: `java.lang.NullPointerException`
* [Migrate deprecated SystemUtils constants](../../../apache/commons/lang3/migratesystemutilsdeprecations)
* [Prefer `java.nio.charset.StandardCharsets`](../../../apache/commons/lang3/usestandardcharsets)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang_2_3
displayName: Migrates to Apache Commons Lang 3.x
description: |
  Migrate applications to the latest Apache Commons Lang 3.x release. This recipe modifies application's build files, and changes the package as per [the migration release notes](https://commons.apache.org/proper/commons-lang/article3_0.html).
tags:
  - apache
  - lang
  - commons
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: commons-lang
      oldArtifactId: commons-lang
      newGroupId: org.apache.commons
      newArtifactId: commons-lang3
      newVersion: 3.x
  - org.openrewrite.apache.commons.lang.WordUtilsToCommonsText
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.apache.commons.lang
      newPackageName: org.apache.commons.lang3
      recursive: true
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.apache.commons.lang3.exception.ExceptionUtils getFullStackTrace(..)
      newMethodName: getStackTrace
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.commons.lang3.NullArgumentException
      newFullyQualifiedTypeName: java.lang.NullPointerException
  - org.openrewrite.apache.commons.lang3.MigrateSystemUtilsDeprecations
  - org.openrewrite.apache.commons.lang3.UseStandardCharsets

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Spring Boot 1.x to 2.0 (Community Edition)](/recipes/java/spring/boot2/upgradespringboot_2_0-community-edition.md)

## Examples
##### Example 1
`UpgradeApacheCommonsLang_2_3Test#apacheCommonsLang`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;

import java.util.Map;

class Test {
    static void helloApacheLang() {
       String aaa = StringUtils.repeat("a", 20);
       String randomString = RandomStringUtils.random(10);
    }
}
```

###### After
```java
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

class Test {
    static void helloApacheLang() {
       String aaa = StringUtils.repeat("a", 20);
       String randomString = RandomStringUtils.random(10);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.apache.commons.lang.RandomStringUtils;
-import org.apache.commons.lang.StringUtils;
+import org.apache.commons.lang3.RandomStringUtils;
+import org.apache.commons.lang3.StringUtils;

```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeApacheCommonsLang_2_3Test#apacheCommonsLang`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;

import java.util.Map;

class Test {
    static void helloApacheLang() {
       String aaa = StringUtils.repeat("a", 20);
       String randomString = RandomStringUtils.random(10);
    }
}
```

###### After
```java
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.Map;

class Test {
    static void helloApacheLang() {
       String aaa = StringUtils.repeat("a", 20);
       String randomString = RandomStringUtils.random(10);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import org.apache.commons.lang.RandomStringUtils;
-import org.apache.commons.lang.StringUtils;
+import org.apache.commons.lang3.RandomStringUtils;
+import org.apache.commons.lang3.StringUtils;

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang_2_3"
  displayName="Migrates to Apache Commons Lang 3.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-apache"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_APACHE"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.apache.commons.lang.UpgradeApacheCommonsLang_2_3" />

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
