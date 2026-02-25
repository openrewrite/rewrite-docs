---
sidebar_label: "Update a Gradle plugin by id"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Update a Gradle plugin by id

**org.openrewrite.gradle.plugins.UpgradePluginVersion**

_Update a Gradle plugin by id to a later version defined by the plugins DSL. To upgrade a plugin dependency defined by `buildscript.dependencies`, use the `UpgradeDependencyVersion` recipe instead._

## Recipe source

[GitHub: UpgradePluginVersion.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/plugins/UpgradePluginVersion.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | pluginIdPattern | The `ID` part of `plugin { ID }`, as a glob expression. | `com.jfrog.bintray` |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). Defaults to `latest.release`. | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add Micronaut build plugins to 4.x](/recipes/java/micronaut/updatebuildplugins.md)
* [Migrate from Spring Boot 1.x to 2.0](/recipes/java/spring/boot2/upgradespringboot_2_0-community-edition.md)
* [Migrate to Spring Boot 2.1](/recipes/java/spring/boot2/upgradespringboot_2_1.md)
* [Migrate to Spring Boot 2.2](/recipes/java/spring/boot2/upgradespringboot_2_2.md)
* [Migrate to Spring Boot 2.3](/recipes/java/spring/boot2/upgradespringboot_2_3.md)
* [Migrate to Spring Boot 2.4](/recipes/java/spring/boot2/upgradespringboot_2_4.md)
* [Migrate to Spring Boot 2.6](/recipes/java/spring/boot2/upgradespringboot_2_6.md)
* [Migrate to Spring Boot 2.7](/recipes/java/spring/boot2/upgradespringboot_2_7.md)
* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)
* [Migrate to Spring Boot 3.1](/recipes/java/spring/boot3/upgradespringboot_3_1.md)
* [Migrate to Spring Boot 3.2](/recipes/java/spring/boot3/upgradespringboot_3_2.md)
* [Migrate to Spring Boot 3.3](/recipes/java/spring/boot3/upgradespringboot_3_3.md)
* [Migrate to Spring Boot 3.4 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_4-community-edition.md)
* [Migrate to Spring Boot 3.5 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition.md)
* [Migrate to Spring Boot 3.5 (Moderne Edition)](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/boot3/upgradespringboot_3_5-moderne-edition)
* [Migrate to Spring Boot 4.0 (Community Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition.md)
* [Upgrade Kotlin Gradle plugins to 2.x](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/kotlin/migrate/upgradekotlingradleplugins)
* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|pluginIdPattern|`org.openrewrite.rewrite`|
|newVersion|`latest.patch`|
|versionPattern|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="buildGradleKts" label="buildGradleKts">


###### Before
```buildGradleKts
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
    id("com.github.johnrengelman.shadow") version("6.1.0")
}
```

###### After
```buildGradleKts
plugins {
    id("org.openrewrite.rewrite") version("5.40.6")
    id("com.github.johnrengelman.shadow") version("6.1.0")
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
plugins {
-   id("org.openrewrite.rewrite") version("5.40.0")
+   id("org.openrewrite.rewrite") version("5.40.6")
    id("com.github.johnrengelman.shadow") version("6.1.0")
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradePluginVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradePluginVersionExample
displayName: Update a Gradle plugin by id example
recipeList:
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: com.jfrog.bintray
      newVersion: 29.X
      versionPattern: '-jre'
```

Now that `com.yourorg.UpgradePluginVersionExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.UpgradePluginVersionExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradePluginVersion --recipe-option "pluginIdPattern=com.jfrog.bintray" --recipe-option "newVersion=29.X" --recipe-option "versionPattern='-jre'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-gradle:{{VERSION_ORG_OPENREWRITE_REWRITE_GRADLE}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.gradle.plugins.UpgradePluginVersion" />

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
