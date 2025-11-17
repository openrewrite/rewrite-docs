---
sidebar_label: "Change Maven parent"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Maven parent

**org.openrewrite.maven.ChangeParentPom**

_Change the parent pom of a Maven pom.xml by matching the existing parent via groupId and artifactId, and updating it to a new groupId, artifactId, version, and optional relativePath. Also updates the project to retain dependency management and properties previously inherited from the old parent that are no longer provided by the new parent. Removes redundant dependency versions already managed by the new parent._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeParentPom.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | oldGroupId | The group ID of the Maven parent pom to be changed away from. | `org.springframework.boot` |
| `String` | newGroupId | *Optional*. The group ID of the new maven parent pom to be adopted. If this argument is omitted it defaults to the value of `oldGroupId`. | `org.springframework.boot` |
| `String` | oldArtifactId | The artifact ID of the maven parent pom to be changed away from. | `spring-boot-starter-parent` |
| `String` | newArtifactId | *Optional*. The artifact ID of the new maven parent pom to be adopted. If this argument is omitted it defaults to the value of `oldArtifactId`. | `spring-boot-starter-parent` |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. | `29.X` |
| `String` | oldRelativePath | *Optional*. The relativePath of the maven parent pom to be changed away from. Use an empty String to match `<relativePath />`, use `../pom.xml` to match the default value. | `../../pom.xml` |
| `String` | newRelativePath | *Optional*. New relative path attribute for parent lookup. | `../pom.xml` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | allowVersionDowngrades | *Optional*. If the new parent has the same group/artifact, this flag can be used to only upgrade the version if the target version is newer than the current. |  |
| `List` | except | *Optional*. Accepts a list of GAVs that should be retained when calling `RemoveRedundantDependencyVersions`. | `com.jcraft:jsch` |


## Used by

This recipe is used as part of the following composite recipes:

* [Change `net.wasdev.maven.parent:java8-parent` to `:parent`](/recipes/java/migrate/wasdevmvnchangeparentartifactid.md)
* [Modernize a Jenkins plugin to the latest recommended versions](/recipes/jenkins/modernizeplugin.md)
* [Modernize a Jenkins plugin to the latest versions supported by Java 8](/recipes/jenkins/modernizepluginforjava8.md)
* [Quarkus 2.x migration from Quarkus 1.x](/recipes/quarkus/quarkus2/quarkus1to2migration.md)
* [Update to Micronaut 4.x platform BOM](/recipes/java/micronaut/updatemicronautplatformbom.md)

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| --- | --- |
|oldGroupId|`org.springframework.boot`|
|newGroupId|`com.fasterxml.jackson`|
|oldArtifactId|`spring-boot-starter-parent`|
|newArtifactId|`jackson-parent`|
|newVersion|`2.12`|
|oldRelativePath|`null`|
|newRelativePath|`null`|
|versionPattern|`null`|
|allowVersionDowngrades|`false`|
|except||


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>1.5.12.RELEASE</version>
  </parent>

  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

###### After
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>

  <parent>
    <groupId>com.fasterxml.jackson</groupId>
    <artifactId>jackson-parent</artifactId>
    <version>2.12</version>
  </parent>

  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -5,3 +5,3 @@

  <parent>
-   <groupId>org.springframework.boot</groupId>
-   <artifactId>spring-boot-starter-parent</artifactId>
-   <version>1.5.12.RELEASE</version>
+   <groupId>com.fasterxml.jackson</groupId>
+   <artifactId>jackson-parent</artifactId>
+   <version>2.12</version>
  </parent>
```
</TabItem>
</Tabs>

---

##### Example 2

###### Parameters
| Parameter | Value |
| --- | --- |
|oldGroupId|`org.springframework.cloud`|
|newGroupId|`null`|
|oldArtifactId|`spring-cloud-config-dependencies`|
|newArtifactId|`null`|
|newVersion|`3.1.4`|
|oldRelativePath|`null`|
|newRelativePath|`null`|
|versionPattern|`null`|
|allowVersionDowngrades|`null`|
|except||


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.sample</groupId>
  <artifactId>sample</artifactId>
  <version>1.0.0</version>

  <parent>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-dependencies</artifactId>
    <version>3.1.2</version>
  </parent>

  <dependencies>
    <dependency>
      <groupId>com.jcraft</groupId>
      <artifactId>jsch</artifactId>
      <version>0.1.55</version>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.sample</groupId>
  <artifactId>sample</artifactId>
  <version>1.0.0</version>

  <parent>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-dependencies</artifactId>
    <version>3.1.4</version>
  </parent>

  <dependencies>
    <dependency>
      <groupId>com.jcraft</groupId>
      <artifactId>jsch</artifactId>
      <version>0.1.55</version>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -11,1 +11,1 @@
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-dependencies</artifactId>
-   <version>3.1.2</version>
+   <version>3.1.4</version>
  </parent>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeParentPomExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeParentPomExample
displayName: Change Maven parent example
recipeList:
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: org.springframework.boot
      newGroupId: org.springframework.boot
      oldArtifactId: spring-boot-starter-parent
      newArtifactId: spring-boot-starter-parent
      newVersion: 29.X
      oldRelativePath: ../../pom.xml
      newRelativePath: ../pom.xml
      versionPattern: '-jre'
      except: com.jcraft:jsch
```

Now that `com.yourorg.ChangeParentPomExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ChangeParentPomExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeParentPom --recipe-option "oldGroupId=org.springframework.boot" --recipe-option "newGroupId=org.springframework.boot" --recipe-option "oldArtifactId=spring-boot-starter-parent" --recipe-option "newArtifactId=spring-boot-starter-parent" --recipe-option "newVersion=29.X" --recipe-option "oldRelativePath=../../pom.xml" --recipe-option "newRelativePath=../pom.xml" --recipe-option "versionPattern='-jre'" --recipe-option "except=com.jcraft:jsch"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.ChangeParentPom" />

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
