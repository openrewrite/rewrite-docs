---
sidebar_label: "Add explicit JAXB API dependencies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Add explicit JAXB API dependencies

**org.openrewrite.java.migrate.javax.AddJaxbAPIDependencies**

_This recipe will add explicit API dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well._

### Tags

* [jaxb](/reference/recipes-by-tag#jaxb)
* [javax](/reference/recipes-by-tag#javax)
* [java11](/reference/recipes-by-tag#java11)
* [jakarta](/reference/recipes-by-tag#jakarta)

## Recipe source

[GitHub: jaxb-apis.yml](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jaxb-apis.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-core`
* [Remove Maven managed dependency](../../../maven/removemanageddependency)
  * groupId: `com.sun.xml.bind`
  * artifactId: `jaxb-core`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Change Maven managed dependency groupId, artifactId and optionally the version](../../../maven/changemanageddependencygroupidandartifactid)
  * oldGroupId: `javax.xml.bind`
  * oldArtifactId: `jaxb-api`
  * newGroupId: `jakarta.xml.bind`
  * newArtifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * version: `2.3.x`
  * onlyIfUsing: `javax.xml.bind..*`
  * acceptTransitive: `true`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `jakarta.xml.bind`
  * artifactId: `jakarta.xml.bind-api`
  * newVersion: `2.3.x`
* [Remove redundant explicit dependency and plugin versions](../../../maven/removeredundantdependencyversions)
  * groupPattern: `jakarta.xml.bind`
  * artifactPattern: `*`
  * onlyIfVersionsMatch: `true`
* [Upgrade Maven plugin version](../../../maven/upgradepluginversion)
  * groupId: `org.codehaus.mojo`
  * artifactId: `jaxb2-maven-plugin`
  * newVersion: `2.5.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.javax.AddJaxbAPIDependencies
displayName: Add explicit JAXB API dependencies
description: |
  This recipe will add explicit API dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well.
tags:
  - jaxb
  - javax
  - java11
  - jakarta
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-core
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.sun.xml.bind
      artifactId: jaxb-core
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: javax.xml.bind
      oldArtifactId: jaxb-api
      newGroupId: jakarta.xml.bind
      newArtifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      version: 2.3.x
      onlyIfUsing: javax.xml.bind..*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: jakarta.xml.bind
      artifactId: jakarta.xml.bind-api
      newVersion: 2.3.x
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: jakarta.xml.bind
      artifactPattern: "*"
      onlyIfVersionsMatch: true
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: jaxb2-maven-plugin
      newVersion: 2.5.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Add explicit JAXB API dependencies and remove runtimes](/recipes/java/migrate/javax/addjaxbdependencieswithoutruntime.md)
* [Add explicit JAXB API dependencies and runtime](/recipes/java/migrate/javax/addjaxbdependencieswithruntime.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.migrate.javax.AddJaxbAPIDependencies"
  displayName="Add explicit JAXB API dependencies"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-migrate-java"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.javax.AddJaxbAPIDependencies" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
