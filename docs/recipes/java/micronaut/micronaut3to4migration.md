---
sidebar_label: "Migrate from Micronaut 3.x to 4.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from Micronaut 3.x to 4.x

**org.openrewrite.java.micronaut.Micronaut3to4Migration**

_This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-micronaut/blob/main/src/main/resources/META-INF/rewrite/micronaut3-to-4.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-micronaut/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-micronaut/2.13.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-micronaut
* version: 2.13.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Java version](../../java/migrate/upgradejavaversion)
  * version: `17`
* [Update Gradle wrapper](../../gradle/updategradlewrapper)
  * version: `8.1.x`
  * addIfMissing: `false`
* [Update the Micronaut version to 4.x](../../java/micronaut/updatebuildtomicronaut4version)
* [Update to Micronaut 4.x platform BOM](../../java/micronaut/updatemicronautplatformbom)
* [Add Micronaut build plugins to 4.x](../../java/micronaut/updatebuildplugins)
* [Add `snakeyaml` dependency if needed](../../java/micronaut/addsnakeyamldependencyifneeded)
* [Update jakarta annotations dependency](../../java/micronaut/updatejakartaannotations)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../../java/migrate/jakarta/javaxpersistencetojakartapersistence)
* [Update to Micronaut Validation 4.x](../../java/micronaut/updatemicronautvalidation)
* [Update to Micronaut Email 2.x](../../java/micronaut/updatemicronautemail)
* [Update the Micronaut Websocket support](../../java/micronaut/addmicronautwebsocketdependencyifneeded)
* [Update the Micronaut Session support](../../java/micronaut/updatemicronautsession)
* [Update the Micronaut Retry support](../../java/micronaut/addmicronautretrydependencyifneeded)
* [Update the Micronaut Security library](../../java/micronaut/updatemicronautsecurity)
* [Update the Micronaut Data library](../../java/micronaut/updatemicronautdata)
* [Remove withJansi Logback configuration](../../java/micronaut/removewithjansilogbackconfiguration)
* [Remove unnecessary dependencies](../../java/micronaut/removeunnecessarydependencies)
* [Add `HttpRequest` type parameter for implemented interfaces](../../java/micronaut/addhttprequesttypeparameter)
* [Update the version of core annotation processors](../../java/micronaut/updatemavenannotationprocessors)
* [Add `micronaut-test-resources-client` if needed](../../java/micronaut/addtestresourcesclientdependencyifneeded)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.micronaut.Micronaut3to4Migration
displayName: Migrate from Micronaut 3.x to 4.x
description: This recipe will apply changes required for migrating from Micronaut 3 to Micronaut 4.
recipeList:
  - org.openrewrite.java.migrate.UpgradeJavaVersion:
      version: 17
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 8.1.x
      addIfMissing: false
  - org.openrewrite.java.micronaut.UpdateBuildToMicronaut4Version
  - org.openrewrite.java.micronaut.UpdateMicronautPlatformBom
  - org.openrewrite.java.micronaut.UpdateBuildPlugins
  - org.openrewrite.java.micronaut.AddSnakeYamlDependencyIfNeeded
  - org.openrewrite.java.micronaut.UpdateJakartaAnnotations
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.micronaut.UpdateMicronautValidation
  - org.openrewrite.java.micronaut.UpdateMicronautEmail
  - org.openrewrite.java.micronaut.AddMicronautWebsocketDependencyIfNeeded
  - org.openrewrite.java.micronaut.UpdateMicronautSession
  - org.openrewrite.java.micronaut.AddMicronautRetryDependencyIfNeeded
  - org.openrewrite.java.micronaut.UpdateMicronautSecurity
  - org.openrewrite.java.micronaut.UpdateMicronautData
  - org.openrewrite.java.micronaut.RemoveWithJansiLogbackConfiguration
  - org.openrewrite.java.micronaut.RemoveUnnecessaryDependencies
  - org.openrewrite.java.micronaut.AddHttpRequestTypeParameter
  - org.openrewrite.java.micronaut.UpdateMavenAnnotationProcessors
  - org.openrewrite.java.micronaut.AddTestResourcesClientDependencyIfNeeded

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-micronaut:2.13.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.micronaut.Micronaut3to4Migration")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-micronaut:2.13.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.28.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-micronaut:2.13.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.micronaut.Micronaut3to4Migration")
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
        <version>5.46.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.micronaut.Micronaut3to4Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-micronaut</artifactId>
            <version>2.13.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-micronaut:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.micronaut.Micronaut3to4Migration -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Micronaut3to4Migration
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-micronaut:2.13.0
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.micronaut.Micronaut3to4Migration" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
[Jeremy Grelle](mailto:grellej@unityfoundation.io), [Patrick](mailto:patway99@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:timtebeek@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), Tyler Van Gorder, Aaron Gershman, [Joan Viladrosa](mailto:joan@moderne.io)
