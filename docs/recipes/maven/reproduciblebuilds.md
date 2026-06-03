---
title: "Apache Maven reproducible builds"
sidebar_label: "Apache Maven reproducible builds"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Apache Maven reproducible builds

**org.openrewrite.maven.ReproducibleBuilds**

_Configure a Maven project for [reproducible builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html): pin dependency and plugin versions, set `project.build.outputTimestamp`, set explicit UTF-8 source encoding, and upgrade core plugins to versions that honor the output timestamp._

## Recipe source

[GitHub: maven.yml](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/resources/META-INF/rewrite/maven.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add explicit dependency versions](../maven/cleanup/explicitdependencyversion)
* [Add explicit plugin versions](../maven/cleanup/explicitpluginversion)
* [Upgrade Maven plugin version](../maven/upgradepluginversion)
  * groupId: `org.apache.maven.plugins`
  * artifactId: `maven-*-plugin`
  * newVersion: `latest.release`
* [Add Maven project property](../maven/addproperty)
  * key: `project.build.sourceEncoding`
  * value: `UTF-8`
  * preserveExistingValue: `true`
* [Add Maven project property](../maven/addproperty)
  * key: `project.reporting.outputEncoding`
  * value: `UTF-8`
  * preserveExistingValue: `true`
* [Add `project.build.outputTimestamp` for reproducible builds](../maven/cleanup/addprojectbuildoutputtimestamp)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.maven.ReproducibleBuilds
displayName: Apache Maven reproducible builds
description: |
  Configure a Maven project for [reproducible builds](https://maven.apache.org/guides/mini/guide-reproducible-builds.html): pin dependency and plugin versions, set `project.build.outputTimestamp`, set explicit UTF-8 source encoding, and upgrade core plugins to versions that honor the output timestamp.
recipeList:
  - org.openrewrite.maven.cleanup.ExplicitDependencyVersion
  - org.openrewrite.maven.cleanup.ExplicitPluginVersion
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.maven.plugins
      artifactId: maven-*-plugin
      newVersion: latest.release
  - org.openrewrite.maven.AddProperty:
      key: project.build.sourceEncoding
      value: UTF-8
      preserveExistingValue: true
  - org.openrewrite.maven.AddProperty:
      key: project.reporting.outputEncoding
      value: UTF-8
      preserveExistingValue: true
  - org.openrewrite.maven.cleanup.AddProjectBuildOutputTimestamp

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`ReproducibleBuildsTest#appliesEncodingAndOutputTimestamp`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <properties>
    <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
  </properties>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,0 +5,5 @@
  <artifactId>my-app</artifactId>
  <version>1</version>
+ <properties>
+   <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>
+   <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
+   <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
+ </properties>
</project>
```
</TabItem>
</Tabs>

---

##### Example 2
`ReproducibleBuildsTest#appliesEncodingAndOutputTimestamp`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <properties>
    <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
  </properties>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,0 +5,5 @@
  <artifactId>my-app</artifactId>
  <version>1</version>
+ <properties>
+   <project.build.outputTimestamp>1980-01-01T00:00:00Z</project.build.outputTimestamp>
+   <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
+   <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
+ </properties>
</project>
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.maven.ReproducibleBuilds"
  displayName="Apache Maven reproducible builds"
  groupId="org.openrewrite"
  artifactId="rewrite-maven"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_MAVEN"
  isCoreLibrary
  showGradle={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.ReproducibleBuilds" />

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
