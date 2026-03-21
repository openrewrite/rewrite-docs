---
sidebar_label: "Change `javax.tools.ToolProvider` methods calls to static"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Change `javax.tools.ToolProvider` methods calls to static

**org.openrewrite.java.migrate.RemovedToolProviderConstructor**

_The `javax.tools.ToolProvider()` constructor has been removed in Java SE 16 since the class only contains static methods. The recipe converts `javax.tools.ToolProvider getSystemJavaCompiler()`, `javax.tools.ToolProvider getSystemDocumentationTool()` and `javax.tools.ToolProvider getSystemToolClassLoader()` to static methods._

## Recipe source

[GitHub: java-version-17.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-version-17.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method target to static](../../java/changemethodtargettostatic)
  * methodPattern: `javax.tools.ToolProvider *()`
  * fullyQualifiedTargetTypeName: `javax.tools.ToolProvider`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.RemovedToolProviderConstructor
displayName: Change `javax.tools.ToolProvider` methods calls to static
description: |
  The `javax.tools.ToolProvider()` constructor has been removed in Java SE 16 since the class only contains static methods. The recipe converts `javax.tools.ToolProvider getSystemJavaCompiler()`, `javax.tools.ToolProvider getSystemDocumentationTool()` and `javax.tools.ToolProvider getSystemToolClassLoader()` to static methods.
recipeList:
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: javax.tools.ToolProvider *()
      fullyQualifiedTargetTypeName: javax.tools.ToolProvider

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Java 17](/recipes/java/migrate/upgradetojava17.md)

## Examples
##### Example 1
`RemovedToolProviderConstructorTest#moveToStaticTest`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.tools.ToolProvider;
import javax.tools.JavaCompiler;
import javax.tools.DocumentationTool;
import java.lang.ClassLoader;

class RemovedToolProviderConstructorApp {
     void test() throws Exception {
         ToolProvider tp = null;
         JavaCompiler compiler = tp.getSystemJavaCompiler();
         DocumentationTool dT = tp.getSystemDocumentationTool();
         ClassLoader cl = tp.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
         tp.getSystemJavaCompiler().getSourceVersions();
     }
}
```

###### After
```java
import javax.tools.ToolProvider;
import javax.tools.JavaCompiler;
import javax.tools.DocumentationTool;
import java.lang.ClassLoader;

class RemovedToolProviderConstructorApp {
     void test() throws Exception {
         ToolProvider tp = null;
         JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
         DocumentationTool dT = ToolProvider.getSystemDocumentationTool();
         ClassLoader cl = ToolProvider.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
         ToolProvider.getSystemJavaCompiler().getSourceVersions();
     }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,3 +9,3 @@
     void test() throws Exception {
         ToolProvider tp = null;
-        JavaCompiler compiler = tp.getSystemJavaCompiler();
-        DocumentationTool dT = tp.getSystemDocumentationTool();
-        ClassLoader cl = tp.getSystemToolClassLoader();
+        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
+        DocumentationTool dT = ToolProvider.getSystemDocumentationTool();
+        ClassLoader cl = ToolProvider.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
@@ -13,1 +13,1 @@
         ClassLoader cl = tp.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
-        tp.getSystemJavaCompiler().getSourceVersions();
+        ToolProvider.getSystemJavaCompiler().getSourceVersions();
     }
```
</TabItem>
</Tabs>

---

##### Example 2
`RemovedToolProviderConstructorTest#moveToStaticTest`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.tools.ToolProvider;
import javax.tools.JavaCompiler;
import javax.tools.DocumentationTool;
import java.lang.ClassLoader;

class RemovedToolProviderConstructorApp {
     void test() throws Exception {
         ToolProvider tp = null;
         JavaCompiler compiler = tp.getSystemJavaCompiler();
         DocumentationTool dT = tp.getSystemDocumentationTool();
         ClassLoader cl = tp.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
         tp.getSystemJavaCompiler().getSourceVersions();
     }
}
```

###### After
```java
import javax.tools.ToolProvider;
import javax.tools.JavaCompiler;
import javax.tools.DocumentationTool;
import java.lang.ClassLoader;

class RemovedToolProviderConstructorApp {
     void test() throws Exception {
         ToolProvider tp = null;
         JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
         DocumentationTool dT = ToolProvider.getSystemDocumentationTool();
         ClassLoader cl = ToolProvider.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
         ToolProvider.getSystemJavaCompiler().getSourceVersions();
     }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -9,3 +9,3 @@
     void test() throws Exception {
         ToolProvider tp = null;
-        JavaCompiler compiler = tp.getSystemJavaCompiler();
-        DocumentationTool dT = tp.getSystemDocumentationTool();
-        ClassLoader cl = tp.getSystemToolClassLoader();
+        JavaCompiler compiler = ToolProvider.getSystemJavaCompiler();
+        DocumentationTool dT = ToolProvider.getSystemDocumentationTool();
+        ClassLoader cl = ToolProvider.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
@@ -13,1 +13,1 @@
         ClassLoader cl = tp.getSystemToolClassLoader();
         System.out.println(ToolProvider.getSystemJavaCompiler());
-        tp.getSystemJavaCompiler().getSourceVersions();
+        ToolProvider.getSystemJavaCompiler().getSourceVersions();
     }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.RemovedToolProviderConstructor"
  displayName="Change `javax.tools.ToolProvider` methods calls to static"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.RemovedToolProviderConstructor" />

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
