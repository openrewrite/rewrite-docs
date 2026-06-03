---
title: "Use `Rfc6265CookieProcessor` instead of `LegacyCookieProcessor`"
sidebar_label: "Use `Rfc6265CookieProcessor` instead of `LegacyCookieProcessor`"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Use `Rfc6265CookieProcessor` instead of `LegacyCookieProcessor`

**org.openrewrite.java.spring.boot3.UseRfc6265CookieProcessor**

_Replace the legacy Tomcat `LegacyCookieProcessor` with the RFC 6265 compliant `Rfc6265CookieProcessor`, both in Java references and in the `<CookieProcessor className="…"/>` attribute of Tomcat configuration files such as `context.xml` and `server.xml`. `Rfc6265CookieProcessor` has been the default cookie processor since Tomcat 8.5; `LegacyCookieProcessor` exists only for backwards compatibility. RFC 6265 parsing is stricter than the legacy behavior, so review applications relying on legacy cookie handling before applying this recipe._

### Tags

* [tomcat](/reference/recipes-by-tag#tomcat)

## Recipe source

[GitHub: tomcat.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/tomcat.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.tomcat.util.http.LegacyCookieProcessor`
  * newFullyQualifiedTypeName: `org.apache.tomcat.util.http.Rfc6265CookieProcessor`
  * ignoreDefinition: `true`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `CookieProcessor`
  * attributeName: `className`
  * newValue: `org.apache.tomcat.util.http.Rfc6265CookieProcessor`
  * oldValue: `org.apache.tomcat.util.http.LegacyCookieProcessor`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UseRfc6265CookieProcessor
displayName: Use `Rfc6265CookieProcessor` instead of `LegacyCookieProcessor`
description: |
  Replace the legacy Tomcat `LegacyCookieProcessor` with the RFC 6265 compliant `Rfc6265CookieProcessor`, both in Java references and in the `&lt;CookieProcessor className=&quot;…&quot;/&gt;` attribute of Tomcat configuration files such as `context.xml` and `server.xml`. `Rfc6265CookieProcessor` has been the default cookie processor since Tomcat 8.5; `LegacyCookieProcessor` exists only for backwards compatibility. RFC 6265 parsing is stricter than the legacy behavior, so review applications relying on legacy cookie handling before applying this recipe.
tags:
  - tomcat
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.tomcat.util.http.LegacyCookieProcessor
      newFullyQualifiedTypeName: org.apache.tomcat.util.http.Rfc6265CookieProcessor
      ignoreDefinition: true
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: CookieProcessor
      attributeName: className
      newValue: org.apache.tomcat.util.http.Rfc6265CookieProcessor
      oldValue: org.apache.tomcat.util.http.LegacyCookieProcessor

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.0 (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_0-moderne-edition)

## Examples
##### Example 1
`UseRfc6265CookieProcessorTest#replaceLegacyCookieProcessorInContextXml`


<Tabs groupId="beforeAfter">
<TabItem value="src/main/webapp/META-INF/context.xml" label="src/main/webapp/META-INF/context.xml">


###### Before
```xml title="src/main/webapp/META-INF/context.xml"
<?xml version="1.0" encoding="UTF-8"?>
<Context>
    <CookieProcessor className="org.apache.tomcat.util.http.LegacyCookieProcessor"/>
</Context>
```

###### After
```xml title="src/main/webapp/META-INF/context.xml"
<?xml version="1.0" encoding="UTF-8"?>
<Context>
    <CookieProcessor className="org.apache.tomcat.util.http.Rfc6265CookieProcessor"/>
</Context>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/webapp/META-INF/context.xml
+++ src/main/webapp/META-INF/context.xml
@@ -3,1 +3,1 @@
<?xml version="1.0" encoding="UTF-8"?>
<Context>
-   <CookieProcessor className="org.apache.tomcat.util.http.LegacyCookieProcessor"/>
+   <CookieProcessor className="org.apache.tomcat.util.http.Rfc6265CookieProcessor"/>
</Context>
```
</TabItem>
</Tabs>

---

##### Example 2
`UseRfc6265CookieProcessorTest#replaceLegacyCookieProcessorInContextXml`


<Tabs groupId="beforeAfter">
<TabItem value="src/main/webapp/META-INF/context.xml" label="src/main/webapp/META-INF/context.xml">


###### Before
```xml title="src/main/webapp/META-INF/context.xml"
<?xml version="1.0" encoding="UTF-8"?>
<Context>
    <CookieProcessor className="org.apache.tomcat.util.http.LegacyCookieProcessor"/>
</Context>
```

###### After
```xml title="src/main/webapp/META-INF/context.xml"
<?xml version="1.0" encoding="UTF-8"?>
<Context>
    <CookieProcessor className="org.apache.tomcat.util.http.Rfc6265CookieProcessor"/>
</Context>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/webapp/META-INF/context.xml
+++ src/main/webapp/META-INF/context.xml
@@ -3,1 +3,1 @@
<?xml version="1.0" encoding="UTF-8"?>
<Context>
-   <CookieProcessor className="org.apache.tomcat.util.http.LegacyCookieProcessor"/>
+   <CookieProcessor className="org.apache.tomcat.util.http.Rfc6265CookieProcessor"/>
</Context>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot3.UseRfc6265CookieProcessor"
  displayName="Use `Rfc6265CookieProcessor` instead of `LegacyCookieProcessor`"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UseRfc6265CookieProcessor" />

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
