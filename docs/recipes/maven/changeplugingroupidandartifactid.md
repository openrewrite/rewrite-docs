---
sidebar_label: "Change Maven plugin group and artifact ID"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Maven plugin group and artifact ID

**org.openrewrite.maven.ChangePluginGroupIdAndArtifactId**

_Change the groupId and/or the artifactId of a specified Maven plugin. Optionally update the plugin version. This recipe does not perform any validation and assumes all values passed are valid._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginGroupIdAndArtifactId.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old group ID to replace. The group ID is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifactId to replace. The artifact ID is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `my-deprecated-maven-plugin` |
| `String` | newGroupId | *Optional*. The new group ID to use. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifactId | *Optional*. The new artifact ID to use. | `my-new-maven-plugin` |
| `String` | newVersion | *Optional*. An exact version number. | `29.X` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add Micronaut build plugins to 4.x](/recipes/java/micronaut/updatebuildplugins.md)
* [io.quarkus.updates.core.quarkus30.AdditionalChanges](/recipes/io/quarkus/updates/core/quarkus30/additionalchanges.md)

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| -- | -- |
|oldGroupId|`io.quarkus`|
|oldArtifactId|`quarkus-bootstrap-maven-plugin`|
|newGroupId|`null`|
|newArtifactId|`quarkus-extension-maven-plugin`|
|newVersion|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>io.quarkus</groupId>
                <artifactId>quarkus-bootstrap-maven-plugin</artifactId>
                <version>3.0.0.Beta1</version>
            </plugin>
        </plugins>
    </build>
    <profiles>
        <profile>
            <id>profile</id>
            <build>
                <plugins>
                    <plugin>
                        <groupId>io.quarkus</groupId>
                        <artifactId>quarkus-bootstrap-maven-plugin</artifactId>
                        <version>3.0.0.Beta1</version>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>io.quarkus</groupId>
                <artifactId>quarkus-extension-maven-plugin</artifactId>
                <version>3.0.0.Beta1</version>
            </plugin>
        </plugins>
    </build>
    <profiles>
        <profile>
            <id>profile</id>
            <build>
                <plugins>
                    <plugin>
                        <groupId>io.quarkus</groupId>
                        <artifactId>quarkus-extension-maven-plugin</artifactId>
                        <version>3.0.0.Beta1</version>
                    </plugin>
                </plugins>
            </build>
        </profile>
    </profiles>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
            <plugin>
                <groupId>io.quarkus</groupId>
-               <artifactId>quarkus-bootstrap-maven-plugin</artifactId>
+               <artifactId>quarkus-extension-maven-plugin</artifactId>
                <version>3.0.0.Beta1</version>
@@ -22,1 +22,1 @@
                    <plugin>
                        <groupId>io.quarkus</groupId>
-                       <artifactId>quarkus-bootstrap-maven-plugin</artifactId>
+                       <artifactId>quarkus-extension-maven-plugin</artifactId>
                        <version>3.0.0.Beta1</version>
```
</TabItem>
</Tabs>

---

##### Example 2

###### Parameters
| Parameter | Value |
| -- | -- |
|oldGroupId|`io.quarkus`|
|oldArtifactId|`quarkus-bootstrap-maven-plugin`|
|newGroupId|`null`|
|newArtifactId|`quarkus-extension-maven-plugin`|
|newVersion|`4.0.0`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>io.quarkus</groupId>
                <artifactId>quarkus-bootstrap-maven-plugin</artifactId>
                <version>3.0.0.Beta1</version>
            </plugin>
        </plugins>
    </build>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <build>
        <plugins>
            <plugin>
                <groupId>io.quarkus</groupId>
                <artifactId>quarkus-extension-maven-plugin</artifactId>
                <version>4.0.0</version>
            </plugin>
        </plugins>
    </build>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,2 +10,2 @@
            <plugin>
                <groupId>io.quarkus</groupId>
-               <artifactId>quarkus-bootstrap-maven-plugin</artifactId>
-               <version>3.0.0.Beta1</version>
+               <artifactId>quarkus-extension-maven-plugin</artifactId>
+               <version>4.0.0</version>
            </plugin>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePluginGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginGroupIdAndArtifactIdExample
displayName: Change Maven plugin group and artifact ID example
recipeList:
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: my-deprecated-maven-plugin
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: my-new-maven-plugin
      newVersion: 29.X
```

Now that `com.yourorg.ChangePluginGroupIdAndArtifactIdExample` has been defined, activate it in your build file:
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
            <recipe>com.yourorg.ChangePluginGroupIdAndArtifactIdExample</recipe>
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
mod run . --recipe ChangePluginGroupIdAndArtifactId --recipe-option "oldGroupId=org.openrewrite.recipe" --recipe-option "oldArtifactId=my-deprecated-maven-plugin" --recipe-option "newGroupId=corp.internal.openrewrite.recipe" --recipe-option "newArtifactId=my-new-maven-plugin" --recipe-option "newVersion=29.X"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.ChangePluginGroupIdAndArtifactId" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[George Gastaldi](mailto:gegastaldi@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [JesseEstum](mailto:jesse.estum@gmail.com), [Guillaume Smet](mailto:guillaume.smet@gmail.com), [Laurens Westerlaken](mailto:laurens.westerlaken@jdriven.com), [Tim te Beek](mailto:tim@moderne.io), [Kevin Carpenter™️](mailto:kevin@moderne.io)
