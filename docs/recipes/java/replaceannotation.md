---
sidebar_label: "Replace annotation"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace annotation

**org.openrewrite.java.ReplaceAnnotation**

_Replace an Annotation with another one if the annotation pattern matches. Only fixed parameters can be set in the replacement._

## Recipe source

[GitHub: ReplaceAnnotation.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceAnnotation.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | annotationPatternToReplace | An annotation matcher, expressed as a method pattern to replace. | `@org.jetbrains.annotations.NotNull("Test")` |
| `String` | annotationTemplateToInsert | An annotation template to add instead of original one, will be parsed with `JavaTemplate`. | `@org.jetbrains.annotations.NotNull("Null not permitted")` |
| `String` | classpathResourceName | *Optional*. If the annotation's type is defined by a jar within the META-INF/rewrite/classpath directory provide its name here so that it can be loaded. When this parameter is not passed the runtime classpath of the recipe is provided to the parser producing the new annotation. This is necessary when the annotation is not on the runtime classpath of the recipe and isn't in the Java standard library. | `annotations` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring annotations to CDI](/recipes/quarkus/spring/stereotypeannotationstocdi.md)
* [Migrates from Netty 3.2.x to Netty 4.1.x](/recipes/netty/upgradenetty_3_2_to_4_1.md)
* [Use Byteman JUnit 5 dependency](/recipes/java/testing/byteman/bytemanjunit4tobytemanjunit5.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|annotationPatternToReplace|`@org.jetbrains.annotations.NotNull("Test")`|
|annotationTemplateToInsert|`@lombok.NonNull`|
|classpathResourceName|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.jetbrains.annotations.NotNull;

class A {
    @NotNull("Test")
    String testMethod() {}
}
```

###### After
```java
import lombok.NonNull;

class A {
    @NonNull
    String testMethod() {}
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import org.jetbrains.annotations.NotNull;
+import lombok.NonNull;

@@ -4,1 +4,1 @@

class A {
-   @NotNull("Test")
+   @NonNull
    String testMethod() {}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceAnnotationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceAnnotationExample
displayName: Replace annotation example
recipeList:
  - org.openrewrite.java.ReplaceAnnotation:
      annotationPatternToReplace: '@org.jetbrains.annotations.NotNull("Test")'
      annotationTemplateToInsert: '@org.jetbrains.annotations.NotNull("Null not permitted")'
      classpathResourceName: annotations
```

<RunRecipe
  recipeName="org.openrewrite.java.ReplaceAnnotation"
  displayName="Replace annotation"
  groupId="org.openrewrite"
  artifactId="rewrite-java"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_JAVA"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "annotationPatternToReplace=\'@org.jetbrains.annotations.NotNull("Test")\'" --recipe-option "annotationTemplateToInsert=\'@org.jetbrains.annotations.NotNull("Null not permitted")\'" --recipe-option "classpathResourceName=annotations"'}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ReplaceAnnotation" />

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
