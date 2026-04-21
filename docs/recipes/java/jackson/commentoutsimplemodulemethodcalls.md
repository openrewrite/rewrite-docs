---
sidebar_label: "Add comment to SimpleModule method calls on modules that no longer extend SimpleModule"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add comment to SimpleModule method calls on modules that no longer extend SimpleModule

**org.openrewrite.java.jackson.CommentOutSimpleModuleMethodCalls**

_In Jackson 3, some modules (e.g. `JodaModule`) no longer extend `SimpleModule` and instead extend `JacksonModule` directly. This means methods like `addSerializer()` and `addDeserializer()` are no longer available on these types. This recipe adds a TODO comment to flag these call sites for manual migration._

### Tags

* [jackson-3](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub: CommentOutSimpleModuleMethodCalls.java](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/java/org/openrewrite/java/jackson/CommentOutSimpleModuleMethodCalls.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrates from Jackson 2.x to Jackson 3.x](/recipes/java/jackson/upgradejackson_2_3.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.datatype.joda.JodaModule;

class Test {
    void configure(JsonSerializer<String> serializer) {
        JodaModule module = new JodaModule();
        module.addSerializer(String.class, serializer);
    }
}
```

###### After
```java
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.datatype.joda.JodaModule;

class Test {
    void configure(JsonSerializer<String> serializer) {
        JodaModule module = new JodaModule();
        /* TODO this module no longer extends SimpleModule in Jackson 3,
         * so addSerializer/addDeserializer calls are no longer available.
         * Move this call to a new SimpleModule and register it separately:
         *   SimpleModule customModule = new SimpleModule();
         *   customModule.addSerializer(...);
         *   mapper.registerModule(customModule);
         * Note: register the custom module AFTER the original module,
         * as the last registered serializer for a given type wins.
         */
        module.addSerializer(String.class, serializer);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -7,0 +7,9 @@
    void configure(JsonSerializer<String> serializer) {
        JodaModule module = new JodaModule();
+       /* TODO this module no longer extends SimpleModule in Jackson 3,
+        * so addSerializer/addDeserializer calls are no longer available.
+        * Move this call to a new SimpleModule and register it separately:
+        *   SimpleModule customModule = new SimpleModule();
+        *   customModule.addSerializer(...);
+        *   mapper.registerModule(customModule);
+        * Note: register the custom module AFTER the original module,
+        * as the last registered serializer for a given type wins.
+        */
        module.addSerializer(String.class, serializer);
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.jackson.CommentOutSimpleModuleMethodCalls"
  displayName="Add comment to SimpleModule method calls on modules that no longer extend SimpleModule"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jackson"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.CommentOutSimpleModuleMethodCalls" />

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
