---
sidebar_label: "Migrate from Micronaut 4.x to 5.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate from Micronaut 4.x to 5.x

**org.openrewrite.java.micronaut.Micronaut4to5Migration**

_This recipe will apply changes required for migrating from Micronaut 4 to Micronaut 5. Micronaut 5 raises the Java baseline to 25 and ships a number of artifact/plugin renames; see the [upstream migration guide](https://github.com/micronaut-projects/micronaut-core/wiki/Update-to-Micronaut-5) for the full list of breaking changes._

## Recipe source

[GitHub: micronaut4-to-5.yml](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut4-to-5.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate from Micronaut 3.x to 4.x](../../java/micronaut/micronaut3to4migration)
* [Upgrade Java version](../../java/migrate/upgradejavaversion)
  * version: `25`
* [Update Gradle wrapper](../../gradle/updategradlewrapper)
  * version: `9.5.x`
  * addIfMissing: `false`
* [Upgrade `micronaut.version` Maven property](../../java/micronaut/upgrademicronautmavenpropertyversion)
  * newVersion: `5.x`
* [Upgrade gradle.properties Micronaut version](../../java/micronaut/upgrademicronautgradlepropertiesversion)
  * newVersion: `5.x`
* [Change Maven parent](../../maven/changeparentpom)
  * oldGroupId: `io.micronaut.platform`
  * oldArtifactId: `micronaut-parent`
  * newVersion: `5.x`
* [Update Micronaut Gradle build plugins to 5.x](../../java/micronaut/updatebuildplugins5)
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.micronaut.security`
  * oldArtifactId: `micronaut-security-annotations`
  * newArtifactId: `micronaut-security-processor`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.micronaut.eclipsestore`
  * oldArtifactId: `micronaut-eclipsestore-annotations`
  * newArtifactId: `micronaut-eclipsestore-processor`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.micronaut.views.turbo.TurboView`
  * newFullyQualifiedTypeName: `io.micronaut.views.turbo.TurboStreamView`
* [Add Gradle or Maven dependency](../../java/dependencies/adddependency)
  * groupId: `io.micronaut.views`
  * artifactId: `micronaut-views-turbo`
  * onlyIfUsing: `io.micronaut.views.turbo..*`
  * configuration: `implementation`
  * scope: `compile`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.micronaut.testresources`
  * oldArtifactId: `junit-jupiter`
  * newArtifactId: `testcontainers-junit-jupiter`
* [Migrates from Jackson 2.x to Jackson 3.x](../../java/jackson/upgradejackson_2_3)
* [Migrate to JSpecify](../../java/jspecify/migratetojspecify)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.Micronaut4to5Migration
displayName: Migrate from Micronaut 4.x to 5.x
description: |
  This recipe will apply changes required for migrating from Micronaut 4 to Micronaut 5. Micronaut 5 raises the Java baseline to 25 and ships a number of artifact/plugin renames; see the [upstream migration guide](https://github.com/micronaut-projects/micronaut-core/wiki/Update-to-Micronaut-5) for the full list of breaking changes.
recipeList:
  - org.openrewrite.java.micronaut.Micronaut3to4Migration
  - org.openrewrite.java.migrate.UpgradeJavaVersion:
      version: 25
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 9.5.x
      addIfMissing: false
  - org.openrewrite.java.micronaut.UpgradeMicronautMavenPropertyVersion:
      newVersion: 5.x
  - org.openrewrite.java.micronaut.UpgradeMicronautGradlePropertiesVersion:
      newVersion: 5.x
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: io.micronaut.platform
      oldArtifactId: micronaut-parent
      newVersion: 5.x
  - org.openrewrite.java.micronaut.UpdateBuildPlugins5
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.micronaut.security
      oldArtifactId: micronaut-security-annotations
      newArtifactId: micronaut-security-processor
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.micronaut.eclipsestore
      oldArtifactId: micronaut-eclipsestore-annotations
      newArtifactId: micronaut-eclipsestore-processor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.micronaut.views.turbo.TurboView
      newFullyQualifiedTypeName: io.micronaut.views.turbo.TurboStreamView
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.micronaut.views
      artifactId: micronaut-views-turbo
      onlyIfUsing: io.micronaut.views.turbo..*
      configuration: implementation
      scope: compile
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.micronaut.testresources
      oldArtifactId: junit-jupiter
      newArtifactId: testcontainers-junit-jupiter
  - org.openrewrite.java.jackson.UpgradeJackson_2_3
  - org.openrewrite.java.jspecify.MigrateToJSpecify

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`Micronaut4to5MigrationTest#migratesMicronautNullableAnnotationToJSpecify`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.micronaut.core.annotation.Nullable;

class Service {
    @Nullable
    String name;
}
```

###### After
```java
import org.jspecify.annotations.Nullable;

class Service {
    @Nullable
    String name;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import io.micronaut.core.annotation.Nullable;
+import org.jspecify.annotations.Nullable;

```
</TabItem>
</Tabs>

---

##### Example 2
`Micronaut4to5MigrationTest#migratesMicronautNullableAnnotationToJSpecify`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.micronaut.core.annotation.Nullable;

class Service {
    @Nullable
    String name;
}
```

###### After
```java
import org.jspecify.annotations.Nullable;

class Service {
    @Nullable
    String name;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import io.micronaut.core.annotation.Nullable;
+import org.jspecify.annotations.Nullable;

```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.micronaut.Micronaut4to5Migration"
  displayName="Migrate from Micronaut 4.x to 5.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-micronaut"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MICRONAUT"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut4to5Migration" />

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
