---
sidebar_label: "Java best practices"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Java best practices

**org.openrewrite.java.migrate.JavaBestPractices**

_Applies opinionated best practices for Java projects targeting Java 25. This recipe includes the full Java 25 upgrade chain plus additional improvements to code style, API usage, and third-party dependency reduction that go beyond what the version migration recipes apply._

### Tags

* [best-practices](/reference/recipes-by-tag#best)
* [java25](/reference/recipes-by-tag#java25)

## Recipe source

[GitHub: java-best-practices.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-best-practices.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to Java 25](../../java/migrate/upgradetojava25)
* [Use text blocks](../../java/migrate/lang/usetextblocks)
  * convertStringsWithoutNewlines: `true`
  * avoidLineContinuations: `false`
* [Prefer the Java standard library instead of Guava](../../java/migrate/guava/noguava)
* [JSpecify best practices](../../java/jspecify/jspecifybestpractices)
* [Use `var` for variables initialized with type casts](../../java/migrate/lang/var/usevarfortypecast)
* [Use `var` for constructor call assignments](../../java/migrate/lang/var/usevarforconstructors)
* [Apply `var` to Generic Constructors](../../java/migrate/lang/var/usevarforgenericsconstructors)
* [Apply `var` to generic method invocations](../../java/migrate/lang/var/usevarforgenericmethodinvocations)
* [Use `var` for primitive and String variables](../../java/migrate/lang/var/usevarforprimitive)
* [Use modernized `java.util` APIs](../../java/migrate/util/javautilapis)
* [Week Year (YYYY) should not be used for date formatting](../../staticanalysis/replaceweekyearwithyear)
* [`hashCode()` should not be called on array instances](../../staticanalysis/removehashcodecallsfromarrayinstances)
* [Remove `toString()` calls on arrays](../../staticanalysis/removetostringcallsfromarrayinstances)
* [Replaces `Object.notify()` with `Object.notifyAll()`](../../staticanalysis/useobjectnotifyall)
* [Remove garbage collection invocations](../../staticanalysis/removecallstosystemgc)
* [Remove `Object.finalize()` invocations](../../staticanalysis/removecallstoobjectfinalize)
* [Use method references in lambda](../../staticanalysis/replacelambdawithmethodreference)
* [Use the diamond operator](../../staticanalysis/usediamondoperator)
* [Remove unnecessary parentheses](../../staticanalysis/unnecessaryparentheses)
* [Replace `StringBuilder#append` with `String`](../../staticanalysis/replacestringbuilderwithstring)
* [Use `Collection` interfaces](../../staticanalysis/usecollectioninterfaces)
* [Enum values should be compared with &quot;==&quot;](../../staticanalysis/compareenumswithequalityoperator)
* [Combine semantically equal catch blocks](../../staticanalysis/combinesemanticallyequalcatchblocks)
* [Use `String::replace()` when first parameter is not a real regular expression](../../staticanalysis/usestringreplace)
* [Use `StandardCharset` constants](../../staticanalysis/usestandardcharset)
* [Use `System.lineSeparator()`](../../staticanalysis/usesystemlineseparator)
* [Remove redundant casts](../../staticanalysis/removeredundanttypecast)
* [Replace `java.util.Stack` with `java.util.Deque`](../../staticanalysis/replacestackwithdeque)
* [Replace invocations of `Collections#sort(List, Comparator)` with `List#sort(Comparator)`](../../staticanalysis/uselistsort)
* [Use `String.contentEquals(CharSequence)` instead of `String.equals(CharSequence.toString())`](../../staticanalysis/equalstocontentequals)
* [Convert Javadoc to Markdown documentation comments](../../java/migrate/lang/javadoctomarkdowndoccomment)
* [Remove unused imports](../../java/removeunusedimports)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.JavaBestPractices
displayName: Java best practices
description: |
  Applies opinionated best practices for Java projects targeting Java 25. This recipe includes the full Java 25 upgrade chain plus additional improvements to code style, API usage, and third-party dependency reduction that go beyond what the version migration recipes apply.
tags:
  - best-practices
  - java25
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava25
  - org.openrewrite.java.migrate.lang.UseTextBlocks:
      convertStringsWithoutNewlines: true
      avoidLineContinuations: false
  - org.openrewrite.java.migrate.guava.NoGuava
  - org.openrewrite.java.jspecify.JSpecifyBestPractices
  - org.openrewrite.java.migrate.lang.var.UseVarForTypeCast
  - org.openrewrite.java.migrate.lang.var.UseVarForConstructors
  - org.openrewrite.java.migrate.lang.var.UseVarForGenericsConstructors
  - org.openrewrite.java.migrate.lang.var.UseVarForGenericMethodInvocations
  - org.openrewrite.java.migrate.lang.var.UseVarForPrimitive
  - org.openrewrite.java.migrate.util.JavaUtilAPIs
  - org.openrewrite.staticanalysis.ReplaceWeekYearWithYear
  - org.openrewrite.staticanalysis.RemoveHashCodeCallsFromArrayInstances
  - org.openrewrite.staticanalysis.RemoveToStringCallsFromArrayInstances
  - org.openrewrite.staticanalysis.UseObjectNotifyAll
  - org.openrewrite.staticanalysis.RemoveCallsToSystemGc
  - org.openrewrite.staticanalysis.RemoveCallsToObjectFinalize
  - org.openrewrite.staticanalysis.ReplaceLambdaWithMethodReference
  - org.openrewrite.staticanalysis.UseDiamondOperator
  - org.openrewrite.staticanalysis.UnnecessaryParentheses
  - org.openrewrite.staticanalysis.ReplaceStringBuilderWithString
  - org.openrewrite.staticanalysis.UseCollectionInterfaces
  - org.openrewrite.staticanalysis.CompareEnumsWithEqualityOperator
  - org.openrewrite.staticanalysis.CombineSemanticallyEqualCatchBlocks
  - org.openrewrite.staticanalysis.UseStringReplace
  - org.openrewrite.staticanalysis.UseStandardCharset
  - org.openrewrite.staticanalysis.UseSystemLineSeparator
  - org.openrewrite.staticanalysis.RemoveRedundantTypeCast
  - org.openrewrite.staticanalysis.ReplaceStackWithDeque
  - org.openrewrite.staticanalysis.UseListSort
  - org.openrewrite.staticanalysis.EqualsToContentEquals
  - org.openrewrite.java.migrate.lang.JavadocToMarkdownDocComment
  - org.openrewrite.java.RemoveUnusedImports

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`JavaBestPracticesTest#updateCompilerVersion`


###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <properties>
        <maven.compiler.release>17</maven.compiler.release>
    </properties>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <properties>
        <maven.compiler.release>25</maven.compiler.release>
    </properties>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -6,1 +6,1 @@
    <version>1</version>
    <properties>
-       <maven.compiler.release>17</maven.compiler.release>
+       <maven.compiler.release>25</maven.compiler.release>
    </properties>
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaBestPracticesTest#updateCompilerVersion`


###### Unchanged
```mavenProject
project
```

<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <properties>
        <maven.compiler.release>17</maven.compiler.release>
    </properties>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <properties>
        <maven.compiler.release>25</maven.compiler.release>
    </properties>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -6,1 +6,1 @@
    <version>1</version>
    <properties>
-       <maven.compiler.release>17</maven.compiler.release>
+       <maven.compiler.release>25</maven.compiler.release>
    </properties>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.JavaBestPractices"
  displayName="Java best practices"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.JavaBestPractices" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
