---
sidebar_label: "Replace beans.xml file"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace beans.xml file

**org.openrewrite.xml.liberty.WebBeansXmlRule**

_This Recipe replaces OpenWebBeans schema in every beans.xml with the standard CDI schema._

## Recipe source

[GitHub: WebBeansXmlRule.java](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/java/org/openrewrite/xml/liberty/WebBeansXmlRule.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Example


<Tabs groupId="beforeAfter">
<TabItem value="src/main/resources/META-INF/beans.xml" label="src/main/resources/META-INF/beans.xml">


###### Before
```xml title="src/main/resources/META-INF/beans.xml"
<WebBeans xmlns="urn:java:ee"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="
              urn:java:ee http://java.sun.com/jee/beans-1.0.xsd">
  <!-- some beans here -->
</WebBeans>
```

###### After
```xml title="src/main/resources/META-INF/beans.xml"
<beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/beans_1_1.xsd">
  <!-- some beans here -->
</beans>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- src/main/resources/META-INF/beans.xml
+++ src/main/resources/META-INF/beans.xml
@@ -1,1 +1,1 @@
-<WebBeans xmlns="urn:java:ee"
+<beans xmlns="http://xmlns.jcp.org/xml/ns/javaee"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -3,2 +3,1 @@
<WebBeans xmlns="urn:java:ee"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-         xsi:schemaLocation="
-             urn:java:ee http://java.sun.com/jee/beans-1.0.xsd">
+         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/beans_1_1.xsd">
  <!-- some beans here -->
@@ -6,1 +5,1 @@
              urn:java:ee http://java.sun.com/jee/beans-1.0.xsd">
  <!-- some beans here -->
-</WebBeans>
+</beans>

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.xml.liberty.WebBeansXmlRule"
  displayName="Replace beans.xml file"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-liberty"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.xml.liberty.WebBeansXmlRule" />

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
