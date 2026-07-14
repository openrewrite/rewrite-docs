---
title: "Remove direct dependencies that are managed by a BOM with incompatible versions"
sidebar_label: "Remove direct dependencies that are managed by a BOM with incompatible versions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Remove direct dependencies that are managed by a BOM with incompatible versions

**org.openrewrite.maven.RemoveBomManagedDirectDependencies**

_Removes directly declared dependencies when they have a version that is incompatible with the version managed by an imported BOM. This is useful during framework upgrades (e.g., Spring Boot) where transitive dependencies receive major version bumps and explicitly declared older versions should be removed to use the BOM-managed versions instead. A dependency is only removed when it would still be reachable transitively through another direct dependency, so the BOM-managed version takes its place rather than the dependency disappearing from the classpath._

## Recipe source

[GitHub: RemoveBomManagedDirectDependencies.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveBomManagedDirectDependencies.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | bomGroupPattern | Group ID glob pattern for BOMs to consider. For example, `org.springframework.boot` to match Spring Boot BOMs. | `org.springframework.boot` |
| `String` | bomArtifactPattern | *Optional*. Artifact ID glob pattern for BOMs to consider. For example, `*-dependencies` to match Spring Boot's BOM. | `*-dependencies` |
| `String` | dependencyGroupPattern | *Optional*. Group ID glob pattern for dependencies to check against BOM. Use `*` to match all dependencies. | `*` |
| `String` | dependencyArtifactPattern | *Optional*. Artifact ID glob pattern for dependencies to check against BOM. Use `*` to match all dependencies. | `*` |

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|bomGroupPattern|`org.springframework.boot`|
|bomArtifactPattern|`*-dependencies`|
|dependencyGroupPattern|`*`|
|dependencyArtifactPattern|`*`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>org.example</groupId>
    <artifactId>test</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>3.0.0</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.apache.tomcat.embed</groupId>
            <artifactId>tomcat-embed-core</artifactId>
            <version>9.0.50</version>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>org.example</groupId>
    <artifactId>test</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>3.0.0</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -21,5 +21,0 @@
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
-       <dependency>
-           <groupId>org.apache.tomcat.embed</groupId>
-           <artifactId>tomcat-embed-core</artifactId>
-           <version>9.0.50</version>
-       </dependency>
    </dependencies>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveBomManagedDirectDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveBomManagedDirectDependenciesExample
displayName: Remove direct dependencies that are managed by a BOM with incompatible versions example
recipeList:
  - org.openrewrite.maven.RemoveBomManagedDirectDependencies:
      bomGroupPattern: org.springframework.boot
      bomArtifactPattern: '*-dependencies'
      dependencyGroupPattern: '*'
      dependencyArtifactPattern: '*'
```

<RunRecipe
  recipeName="org.openrewrite.maven.RemoveBomManagedDirectDependencies"
  displayName="Remove direct dependencies that are managed by a BOM with incompatible versions"
  groupId="org.openrewrite"
  artifactId="rewrite-maven"
  versionKey="VERSION_ORG_OPENREWRITE_REWRITE_MAVEN"
  isCoreLibrary
  requiresConfiguration
  cliOptions={' --recipe-option "bomGroupPattern=org.springframework.boot" --recipe-option "bomArtifactPattern=\'*-dependencies\'" --recipe-option "dependencyGroupPattern=\'*\'" --recipe-option "dependencyArtifactPattern=\'*\'"'}
  showGradle={false}
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.RemoveBomManagedDirectDependencies" />

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
