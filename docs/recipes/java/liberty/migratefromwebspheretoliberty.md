---
sidebar_label: "Migrate from WebSphere traditional to Liberty"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from WebSphere traditional to Liberty

**org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty**

_Use this category of rules to identify code changes needed when migrating from WebSphere Application Server traditional to Liberty._

## Recipe source

[GitHub: was-to-liberty.yml](https://github.com/openrewrite/rewrite-liberty/blob/main/src/main/resources/META-INF/rewrite/was-to-liberty.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-liberty/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-liberty/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Removes invalid JNDI properties](../../java/liberty/removewas2libertynonportablejndilookup)
* [Use `getProperty(&quot;wlp.server.name&quot;)`](../../java/liberty/servername)
* [Use `getSSOCookieFromSSOToken` and `logout`](../../java/liberty/websphereunavailablessomethods)
* [Use correct application namespace values](../../xml/liberty/appddnamespacerule)
* [Use correct connector namespace values](../../xml/liberty/connectorddnamespacerule)
* [Use correct ejb-jar namespace values](../../xml/liberty/ejbddnamespacerule)
* [Move persistence.xml file](../../xml/liberty/persistencexmllocationrule)
* [Use correct web-app namespace values](../../xml/liberty/webddnamespacerule)
* [Add Liberty Maven plugin](../../maven/liberty/addopenlibertyplugin)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty
displayName: Migrate from WebSphere traditional to Liberty
description: |
  Use this category of rules to identify code changes needed when migrating from WebSphere Application Server traditional to Liberty.
recipeList:
  - org.openrewrite.java.liberty.RemoveWas2LibertyNonPortableJndiLookup
  - org.openrewrite.java.liberty.ServerName
  - org.openrewrite.java.liberty.WebSphereUnavailableSSOMethods
  - org.openrewrite.xml.liberty.AppDDNamespaceRule
  - org.openrewrite.xml.liberty.ConnectorDDNamespaceRule
  - org.openrewrite.xml.liberty.EJBDDNamespaceRule
  - org.openrewrite.xml.liberty.PersistenceXmlLocationRule
  - org.openrewrite.xml.liberty.WebDDNamespaceRule
  - org.openrewrite.maven.liberty.AddOpenLibertyPlugin

```
</TabItem>
</Tabs>

## Usage

<RunRecipe
  recipeName="org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty"
  displayName="Migrate from WebSphere traditional to Liberty"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-liberty"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_LIBERTY"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.liberty.MigrateFromWebSphereToLiberty" />

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
