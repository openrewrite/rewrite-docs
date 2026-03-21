---
sidebar_label: "JSF 2.x to Jakarta Server Faces 3.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# JSF 2.x to Jakarta Server Faces 3.x

**com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x**

_Jakarta EE 9 uses Faces 3.0 a major upgrade to Jakarta packages and XML namespaces._

### Tags

* [jakartaee](/reference/recipes-by-tag#jakartaee)
* [faces](/reference/recipes-by-tag#faces)
* [jsf](/reference/recipes-by-tag#jsf)
* [jakarta](/reference/recipes-by-tag#jakarta)

## Recipe source

[GitHub: search?type=code&q=com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x](https://github.com/search?type=code&q=com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate JSF values inside EcmaScript files](../../../../../java/migrate/jakarta/jakartafacesecmascript)
* [Replace `CURRENT_COMPONENT` and `CURRENT_COMPOSITE_COMPONENT` with `getCurrentComponent()` and `getCurrentCompositeComponent()`](../../../../../java/migrate/jakarta/removeduicomponentconstant)
* [Faces XHTML migration for Jakarta EE 9](../../../../../com/oracle/weblogic/rewrite/jakarta/jakartafaces3xhtml)
* [Migrate xmlns entries in `faces-config.xml` files for Jakarta Server Faces 3](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxfacesconfigxmltojakartafaces3configxml)
* [Migrate xmlns entries in `*taglib*.xml` files for Jakarta Server Faces 3](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxfacestaglibraryxmltojakartafaces3taglibraryxml)
* [Migrate xmlns entries in `test-web.xml` files for Jakarta Server Faces 3 using test interfaces](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxtestwebxmltojakartatestwebxml5)
* [Migrate xmlns entries in `web-fragment.xml` files for Jakarta Server Faces 3](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxwebfragmentxmltojakartawebfragmentxml5)
* [Migrate xmlns entries in `web.xml` files for Jakarta Server Faces 3](../../../../../com/oracle/weblogic/rewrite/jakarta/javaxwebxmltojakartawebxml5)
* [JNDI name `jsf/ClientSideSecretKey` has been renamed to `faces/ClientSideSecretKey`, and the `jsf/FlashSecretKey` JNDI name has been renamed to `faces/FlashSecretKey`.](../../../../../com/oracle/weblogic/rewrite/jakarta/facesjndinameschanged3)
* [Use `jakarta.el` instead of `jakarta.faces.el` and `javax.faces.el`](../../../../../com/oracle/weblogic/rewrite/jakarta/removedjakartafaces3expressionlanguageclasses)
* [Update deprecated Faces method calls](../../../../../com/oracle/weblogic/rewrite/jakarta/updatejakartafacesmethodcalls)
* [Replace `ResourceResolver` with `ResourceHandler`](../../../../../com/oracle/weblogic/rewrite/jakarta/removedjakartafaces3resourceresolver)
* [Use `StateManagementStrategy`](../../../../../com/oracle/weblogic/rewrite/jakarta/removedstatemanagermethods3)
* [Substitute deprecated Faces Managed Beans](../../../../../com/oracle/weblogic/rewrite/jakarta/facesmanagedbeansremoved3)
* [Upgrade Faces open source libraries](../../../../../com/oracle/weblogic/rewrite/jakarta/upgradefacesopensourcelibraries3)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x
displayName: JSF 2.x to Jakarta Server Faces 3.x
description: |
  Jakarta EE 9 uses Faces 3.0 a major upgrade to Jakarta packages and XML namespaces.
tags:
  - jakartaee
  - faces
  - jsf
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.jakarta.JakartaFacesEcmaScript
  - org.openrewrite.java.migrate.jakarta.RemovedUIComponentConstant
  - com.oracle.weblogic.rewrite.jakarta.JakartaFaces3Xhtml
  - com.oracle.weblogic.rewrite.jakarta.JavaxFacesConfigXmlToJakartaFaces3ConfigXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxFacesTagLibraryXmlToJakartaFaces3TagLibraryXml
  - com.oracle.weblogic.rewrite.jakarta.JavaxTestWebXmlToJakartaTestWebXml5
  - com.oracle.weblogic.rewrite.jakarta.JavaxWebFragmentXmlToJakartaWebFragmentXml5
  - com.oracle.weblogic.rewrite.jakarta.JavaxWebXmlToJakartaWebXml5
  - com.oracle.weblogic.rewrite.jakarta.FacesJNDINamesChanged3
  - com.oracle.weblogic.rewrite.jakarta.RemovedJakartaFaces3ExpressionLanguageClasses
  - com.oracle.weblogic.rewrite.jakarta.UpdateJakartaFacesMethodCalls
  - com.oracle.weblogic.rewrite.jakarta.RemovedJakartaFaces3ResourceResolver
  - com.oracle.weblogic.rewrite.jakarta.RemovedStateManagerMethods3
  - com.oracle.weblogic.rewrite.jakarta.FacesManagedBeansRemoved3
  - com.oracle.weblogic.rewrite.jakarta.UpgradeFacesOpenSourceLibraries3

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Jakarta EE 9.1](/recipes/com/oracle/weblogic/rewrite/jakartaee9_1.md)


## Usage

<RunRecipe
  recipeName="com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x"
  displayName="JSF 2.x to Jakarta Server Faces 3.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-third-party"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/com.oracle.weblogic.rewrite.jakarta.Faces2xMigrationToJakartaFaces3x" />

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
