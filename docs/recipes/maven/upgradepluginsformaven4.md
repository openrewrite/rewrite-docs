---
title: "Upgrade plugins that are incompatible with Maven 4"
sidebar_label: "Upgrade plugins that are incompatible with Maven 4"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade plugins that are incompatible with Maven 4

**org.openrewrite.maven.UpgradePluginsForMaven4**

_Upgrades plugins that are known to fail under Maven 4, using the minimum working versions applied by Apache's own [`mvnup upgrade --plugins`](https://maven.apache.org/tools/mvnup.html) as a floor while accepting any newer release within the same major version. Plugins already at or above that floor are upgraded to the latest such release; plugins that declare no version are left alone. `quarkus-maven-plugin` is held at its floor, as its version is coupled to the Quarkus platform BOM. Plugin dependencies known to break Maven 4 are upgraded as well._

## Recipe source

[GitHub: maven.yml](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Code Genome Project](https://artifacts.codegenomeproject.org/maven/org/openrewrite/rewrite-maven/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Maven plugin group and artifact ID](../maven/changeplugingroupidandartifactid)
  * oldGroupId: `org.scala-tools`
  * oldArtifactId: `maven-scala-plugin`
  * newGroupId: `net.alchim31.maven`
  * newArtifactId: `scala-maven-plugin`
  * newVersion: `4.9.5`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-clean-plugin`
  * newVersion: `[3.5.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-compiler-plugin`
  * newVersion: `[3.11.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-deploy-plugin`
  * newVersion: `[3.1.4,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-enforcer-plugin`
  * newVersion: `[3.5.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-failsafe-plugin`
  * newVersion: `[3.5.2,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-install-plugin`
  * newVersion: `[3.1.4,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-jar-plugin`
  * newVersion: `[3.5.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-remote-resources-plugin`
  * newVersion: `[3.0.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-resources-plugin`
  * newVersion: `[3.3.1,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-shade-plugin`
  * newVersion: `[3.5.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-surefire-plugin`
  * newVersion: `[3.5.2,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-surefire-report-plugin`
  * newVersion: `[3.5.2,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.codehaus.gmavenplus`
  * artifactId: `gmavenplus-plugin`
  * newVersion: `[4.2.0,5.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.codehaus.mojo`
  * artifactId: `exec-maven-plugin`
  * newVersion: `[3.5.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.codehaus.mojo`
  * artifactId: `flatten-maven-plugin`
  * newVersion: `[1.2.7,2.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.codehaus.mojo`
  * artifactId: `jaxb2-maven-plugin`
  * newVersion: `[3.2.0,4.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `net.alchim31.maven`
  * artifactId: `scala-maven-plugin`
  * newVersion: `[4.9.5,5.0.0)`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-maven-plugin`
  * newVersion: `3.26.0`
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `io.quarkus.platform`
  * artifactId: `quarkus-maven-plugin`
  * newVersion: `3.26.0`
* [Upgrade Maven dependency version](../maven/upgradedependencyversion)
  * groupId: `org.codehaus.mojo`
  * artifactId: `extra-enforcer-rules`
  * newVersion: `[1.4,2.0.0)`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.UpgradePluginsForMaven4
displayName: Upgrade plugins that are incompatible with Maven 4
description: |
  Upgrades plugins that are known to fail under Maven 4, using the minimum working versions applied by Apache's own [`mvnup upgrade --plugins`](https://maven.apache.org/tools/mvnup.html) as a floor while accepting any newer release within the same major version. Plugins already at or above that floor are upgraded to the latest such release; plugins that declare no version are left alone. `quarkus-maven-plugin` is held at its floor, as its version is coupled to the Quarkus platform BOM. Plugin dependencies known to break Maven 4 are upgraded as well.
recipeList:
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: org.scala-tools
      oldArtifactId: maven-scala-plugin
      newGroupId: net.alchim31.maven
      newArtifactId: scala-maven-plugin
      newVersion: 4.9.5
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-clean-plugin
      newVersion: [3.5.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-compiler-plugin
      newVersion: [3.11.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-deploy-plugin
      newVersion: [3.1.4,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-enforcer-plugin
      newVersion: [3.5.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-failsafe-plugin
      newVersion: [3.5.2,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-install-plugin
      newVersion: [3.1.4,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-jar-plugin
      newVersion: [3.5.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-remote-resources-plugin
      newVersion: [3.0.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-resources-plugin
      newVersion: [3.3.1,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-shade-plugin
      newVersion: [3.5.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-surefire-plugin
      newVersion: [3.5.2,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-surefire-report-plugin
      newVersion: [3.5.2,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.gmavenplus
      artifactId: gmavenplus-plugin
      newVersion: [4.2.0,5.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: exec-maven-plugin
      newVersion: [3.5.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: flatten-maven-plugin
      newVersion: [1.2.7,2.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.codehaus.mojo
      artifactId: jaxb2-maven-plugin
      newVersion: [3.2.0,4.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: net.alchim31.maven
      artifactId: scala-maven-plugin
      newVersion: [4.9.5,5.0.0)
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: io.quarkus
      artifactId: quarkus-maven-plugin
      newVersion: 3.26.0
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: io.quarkus.platform
      artifactId: quarkus-maven-plugin
      newVersion: 3.26.0
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.codehaus.mojo
      artifactId: extra-enforcer-rules
      newVersion: [1.4,2.0.0)

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Maven 4](/recipes/maven/migratetomaven4.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.maven.UpgradePluginsForMaven4"
  displayName="Upgrade plugins that are incompatible with Maven 4"
  groupId="org.openrewrite"
  artifactId="rewrite-maven"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_MAVEN"
  isCoreLibrary
  showGradle={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.UpgradePluginsForMaven4" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
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
