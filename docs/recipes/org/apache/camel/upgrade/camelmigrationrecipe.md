---
sidebar_label: "Migrate to 4.12.1"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to 4.12.1

**org.apache.camel.upgrade.CamelMigrationRecipe**

_Migrates Apache Camel application to 4.12.1_

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.apache.camel.upgrade.CamelMigrationRecipe), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrates `camel 4.10` application to `camel 4.11`](../../../../org/apache/camel/upgrade/camel411/camelmigrationrecipe)
* [Migrates `camel 4.9` application to `camel 4.10`](../../../../org/apache/camel/upgrade/camel410/camelmigrationrecipe)
* [Migrates `camel 4.8` application to `camel 4.9`](../../../../org/apache/camel/upgrade/camel49/camelmigrationrecipe)
* [Migrates `camel 4.6` application to `camel 4.7`](../../../../org/apache/camel/upgrade/camel47/camelmigrationrecipe)
* [Migrates `camel 4.5` application to `camel 4.6`](../../../../org/apache/camel/upgrade/camel46/camelmigrationrecipe)
* [Migrates `camel 4.4` application to `camel 4.5`](../../../../org/apache/camel/upgrade/camel45/camelmigrationrecipe)
* [Migrates `camel 4.0` application to `camel 4.4`](../../../../org/apache/camel/upgrade/camel44/camelmigrationrecipe)
* [Migrate `camel3` application to `camel4.`](../../../../org/apache/camel/upgrade/camel40/camelmigrationrecipe)
* [Migrate to Java 17](../../../../org/apache/camel/upgrade/upgradetojava17)
* [Change Maven Java version property values to 17](../../../../org/apache/camel/upgrade/javaversion17)
* [Update properties and yaml configurations file](../../../../org/apache/camel/upgrade/updatepropertiesandyamlkeys)
* [Upgrade Maven dependency version](../../../../maven/upgradedependencyversion)
  * groupId: `org.apache.camel`
  * artifactId: `*`
  * newVersion: `4.12.1`
* [Upgrade Maven plugin version](../../../../maven/upgradepluginversion)
  * groupId: `org.apache.camel`
  * artifactId: `*`
  * newVersion: `4.12.1`
* [Upgrade Maven parent project version](../../../../maven/upgradeparentversion)
  * groupId: `org.apache.camel`
  * artifactId: `*`
  * newVersion: `4.12.1`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.apache.camel.upgrade.CamelMigrationRecipe
displayName: Migrate to 4.12.1
description: |
  Migrates Apache Camel application to 4.12.1
recipeList:
  - org.apache.camel.upgrade.camel411.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel410.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel49.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel47.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel46.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel45.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel44.CamelMigrationRecipe
  - org.apache.camel.upgrade.camel40.CamelMigrationRecipe
  - org.apache.camel.upgrade.UpgradeToJava17
  - org.apache.camel.upgrade.JavaVersion17
  - org.apache.camel.upgrade.UpdatePropertiesAndYamlKeys
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.apache.camel
      artifactId: "*"
      newVersion: 4.12.1
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: org.apache.camel
      artifactId: "*"
      newVersion: 4.12.1
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.apache.camel
      artifactId: "*"
      newVersion: 4.12.1

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.apache.camel.upgrade.CamelMigrationRecipe")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("org.apache.camel.upgrade.CamelMigrationRecipe")
        setExportDatatables(true)
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

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
            <recipe>org.apache.camel.upgrade.CamelMigrationRecipe</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.apache.camel.upgrade.CamelMigrationRecipe -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CamelMigrationRecipe
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.apache.camel.upgrade.CamelMigrationRecipe" />

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
