---
sidebar_label: "Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`

**org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention**

_Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention` as part of Spring Boot 3.2 removals._

## Recipe source

[GitHub: MigrateWebMvcTagsToObservationConvention.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/boot3/MigrateWebMvcTagsToObservationConvention.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.micrometer.core.instrument.Tag;
import io.micrometer.core.instrument.Tags;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTags;
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsProvider;

class CustomWebMvcTagsProvider implements WebMvcTagsProvider {

    @Override
    public Iterable<Tag> getTags(HttpServletRequest request, HttpServletResponse response, Object handler, Throwable exception) {
        Tags tags = Tags.of(WebMvcTags.method(request), WebMvcTags.uri(request, response), WebMvcTags.status(response), WebMvcTags.outcome(response));

        String customHeader = request.getHeader("X-Custom-Header");
        if (customHeader != null) {
            tags = tags.and("custom.header", customHeader);
        }
        return tags;
    }
}
```

###### After
```java
import io.micrometer.common.KeyValue;
import io.micrometer.common.KeyValues;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.server.observation.DefaultServerRequestObservationConvention;
import org.springframework.http.server.observation.ServerRequestObservationContext;

class CustomWebMvcTagsProvider extends DefaultServerRequestObservationConvention {

    @Override
    public KeyValues getHighCardinalityKeyValues(ServerRequestObservationContext context) {
        HttpServletRequest request = context.getCarrier();
        KeyValues values = super.getHighCardinalityKeyValues(context);

        String customHeader = request.getHeader("X-Custom-Header");
        if (customHeader != null) {
            values.and(KeyValue.of("custom.header", customHeader));
        }
        return values;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-import io.micrometer.core.instrument.Tag;
-import io.micrometer.core.instrument.Tags;
+import io.micrometer.common.KeyValue;
+import io.micrometer.common.KeyValues;
import jakarta.servlet.http.HttpServletRequest;
@@ -4,3 +4,2 @@
import io.micrometer.core.instrument.Tags;
import jakarta.servlet.http.HttpServletRequest;
-import jakarta.servlet.http.HttpServletResponse;
-import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTags;
-import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsProvider;
+import org.springframework.http.server.observation.DefaultServerRequestObservationConvention;
+import org.springframework.http.server.observation.ServerRequestObservationContext;

@@ -8,1 +7,1 @@
import org.springframework.boot.actuate.metrics.web.servlet.WebMvcTagsProvider;

-class CustomWebMvcTagsProvider implements WebMvcTagsProvider {
+class CustomWebMvcTagsProvider extends DefaultServerRequestObservationConvention {

@@ -11,2 +10,3 @@

    @Override
-   public Iterable<Tag> getTags(HttpServletRequest request, HttpServletResponse response, Object handler, Throwable exception) {
-       Tags tags = Tags.of(WebMvcTags.method(request), WebMvcTags.uri(request, response), WebMvcTags.status(response), WebMvcTags.outcome(response));
+   public KeyValues getHighCardinalityKeyValues(ServerRequestObservationContext context) {
+       HttpServletRequest request = context.getCarrier();
+       KeyValues values = super.getHighCardinalityKeyValues(context);

@@ -16,1 +16,1 @@
        String customHeader = request.getHeader("X-Custom-Header");
        if (customHeader != null) {
-           tags = tags.and("custom.header", customHeader);
+           values.and(KeyValue.of("custom.header", customHeader));
        }
@@ -18,1 +18,1 @@
            tags = tags.and("custom.header", customHeader);
        }
-       return tags;
+       return values;
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention"
  displayName="Migrate `WebMvcTagsProvider` to `DefaultServerRequestObservationConvention`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.MigrateWebMvcTagsToObservationConvention" />

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
