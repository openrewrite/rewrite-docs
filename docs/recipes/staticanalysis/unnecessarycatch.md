---
sidebar_label: "Remove catch for a checked exception if the try block does not throw that exception"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove catch for a checked exception if the try block does not throw that exception

**org.openrewrite.staticanalysis.UnnecessaryCatch**

_A refactoring operation may result in a checked exception that is no longer thrown from a `try` block. This recipe will find and remove unnecessary catch blocks._

## Recipe source

[GitHub: UnnecessaryCatch.java](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UnnecessaryCatch.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `boolean` | includeJavaLangException | *Optional*. Whether to include `java.lang.Exception` in the list of checked exceptions to remove. Unlike other checked exceptions, `java.lang.Exception` is also the superclass of unchecked exceptions. So removing `catch(Exception e)` may result in changed runtime behavior in the presence of unchecked exceptions. Default `false` |  |
| `boolean` | includeJavaLangThrowable | *Optional*. Whether to include `java.lang.Throwable` in the list of exceptions to remove. Unlike other checked exceptions, `java.lang.Throwable` is also the superclass of unchecked exceptions. So removing `catch(Throwable e)` may result in changed runtime behavior in the presence of unchecked exceptions. Default `false` |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Remove Security AccessController](/recipes/java/migrate/accesscontroller.md)
* [Remove Security Policy](/recipes/java/migrate/removesecuritypolicy.md)
* [Remove Security SecurityManager](/recipes/java/migrate/removesecuritymanager.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|includeJavaLangException|`false`|
|includeJavaLangThrowable|`false`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.io.IOException;

class AnExample {
    void method() {
        try {
            java.util.Base64.getDecoder().decode("abc".getBytes());
        } catch (IOException e) {
            System.out.println("an exception!");
        }
    }
}
```

###### After
```java
class AnExample {
    void method() {
        java.util.Base64.getDecoder().decode("abc".getBytes());
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,0 @@
-import java.io.IOException;
-
class AnExample {
@@ -5,5 +3,1 @@
class AnExample {
    void method() {
-       try {
-           java.util.Base64.getDecoder().decode("abc".getBytes());
-       } catch (IOException e) {
-           System.out.println("an exception!");
-       }
+       java.util.Base64.getDecoder().decode("abc".getBytes());
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.staticanalysis.UnnecessaryCatch"
  displayName="Remove catch for a checked exception if the try block does not throw that exception"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-static-analysis"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_STATIC_ANALYSIS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UnnecessaryCatch" />

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
