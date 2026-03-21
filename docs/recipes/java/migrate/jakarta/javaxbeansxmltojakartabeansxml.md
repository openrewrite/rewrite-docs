---
sidebar_label: "Migrate xmlns entries in `beans.xml` files"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate xmlns entries in `beans.xml` files

**org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml**

_Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation._

### Tags

* [beans](/reference/recipes-by-tag#beans)
* [cdi](/reference/recipes-by-tag#cdi)
* [jakarta](/reference/recipes-by-tag#jakarta)

## Recipe source

[GitHub: jakarta-ee-10.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-10.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `beans`
  * attributeName: `version`
  * newValue: `4.0`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `beans`
  * attributeName: `xmlns`
  * newValue: `https://jakarta.ee/xml/ns/jakartaee`
* [Change XML attribute](../../../xml/changetagattribute)
  * elementName: `beans`
  * attributeName: `xsi:schemaLocation`
  * newValue: `https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/beans_4_0.xsd`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml
displayName: Migrate xmlns entries in `beans.xml` files
description: |
  Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation.
tags:
  - beans
  - cdi
  - jakarta
recipeList:
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: beans
      attributeName: version
      newValue: 4.0
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: beans
      attributeName: xmlns
      newValue: https://jakarta.ee/xml/ns/jakartaee
  - org.openrewrite.xml.ChangeTagAttribute:
      elementName: beans
      attributeName: xsi:schemaLocation
      newValue: https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/beans_4_0.xsd

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Jakarta EE 10](/recipes/java/migrate/jakarta/jakartaee10.md)

## Examples
##### Example 1
`JavaxBeansXmlToJakartaBeansXmlTest#noSchemaCD1`


<Tabs groupId="beforeAfter">
<TabItem value="beans.xml" label="beans.xml">


###### Before
```xml title="beans.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://java.sun.com/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://jakarta.ee/xml/ns/jakarXXtaee https://jakarta.ee/xml/ns/jakartaee/beans111_3_0.xsd">
</beans>
```

###### After
```xml title="beans.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="https://jakarta.ee/xml/ns/jakartaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/beans_4_0.xsd">
</beans>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- beans.xml
+++ beans.xml
@@ -2,1 +2,1 @@
<?xml version="1.0" encoding="UTF-8"?>
-<beans xmlns="http://java.sun.com/xml/ns/javaee"
+<beans xmlns="https://jakarta.ee/xml/ns/jakartaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -4,1 +4,1 @@
<beans xmlns="http://java.sun.com/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-   xsi:schemaLocation="https://jakarta.ee/xml/ns/jakarXXtaee https://jakarta.ee/xml/ns/jakartaee/beans111_3_0.xsd">
+   xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/beans_4_0.xsd">
</beans>
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaxBeansXmlToJakartaBeansXmlTest#noSchemaCD1`


<Tabs groupId="beforeAfter">
<TabItem value="beans.xml" label="beans.xml">


###### Before
```xml title="beans.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://java.sun.com/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://jakarta.ee/xml/ns/jakarXXtaee https://jakarta.ee/xml/ns/jakartaee/beans111_3_0.xsd">
</beans>
```

###### After
```xml title="beans.xml"
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="https://jakarta.ee/xml/ns/jakartaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/beans_4_0.xsd">
</beans>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- beans.xml
+++ beans.xml
@@ -2,1 +2,1 @@
<?xml version="1.0" encoding="UTF-8"?>
-<beans xmlns="http://java.sun.com/xml/ns/javaee"
+<beans xmlns="https://jakarta.ee/xml/ns/jakartaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
@@ -4,1 +4,1 @@
<beans xmlns="http://java.sun.com/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
-   xsi:schemaLocation="https://jakarta.ee/xml/ns/jakarXXtaee https://jakarta.ee/xml/ns/jakartaee/beans111_3_0.xsd">
+   xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee https://jakarta.ee/xml/ns/jakartaee/beans_4_0.xsd">
</beans>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml"
  displayName="Migrate xmlns entries in `beans.xml` files"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxBeansXmlToJakartaBeansXml" />

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
