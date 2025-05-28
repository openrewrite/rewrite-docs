---
sidebar_label: "Create Spring Boot Application Entry Point"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Spring Boot Application Entry Point

**org.openrewrite.java.dropwizard.CoreSetup**

_Creates the main Spring Boot application class._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-dropwizard/blob/main/src/main/resources/META-INF/rewrite/dropwizard-to-spring-boot.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-dropwizard/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-dropwizard/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add application.properties if missing](../../java/dropwizard/addmissingapplicationproperties)
* [Add Core Example Properties](../../java/dropwizard/addcoreexampleproperties)
* [Add Maven dependency](../../maven/adddependency)
  * groupId: `org.projectlombok`
  * artifactId: `lombok`
  * version: `1.18.x`
  * onlyIfUsing: `lombok.*`
* [Add managed Maven dependency](../../maven/addmanageddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-dependencies`
  * version: `2.7.18`
  * scope: `import`
  * type: `pom`
  * addToRootPom: `true`
* [Remove Maven managed dependency](../../maven/removemanageddependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-bom`
* [Add Maven dependency](../../maven/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter`
  * version: `2.7.18`
* [Combined dependency management to remove and exclude](../../java/dropwizard/config/removeandexcludedependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-core`
* [Add annotation if target supertypes exist](../../java/dropwizard/annotation/addclassannotationifsupertypeexists)
  * annotationToAdd: `org.springframework.boot.SpringBootApplication`
  * targetSupertypeName: `io.dropwizard.Application`
* [Remove supertype by fully qualified name matches](../../java/dropwizard/method/removesupertypebytype)
  * typeToRemove: `io.dropwizard.Application`
* [Combined dependency management to remove and exclude](../../java/dropwizard/config/removeandexcludedependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-assets`
* [Combined dependency management to remove and exclude](../../java/dropwizard/config/removeandexcludedependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-http2`
* [Combined dependency management to remove and exclude](../../java/dropwizard/config/removeandexcludedependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-migrations`
* [Combined dependency management to remove and exclude](../../java/dropwizard/config/removeandexcludedependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-views-freemarker`
* [Combined dependency management to remove and exclude](../../java/dropwizard/config/removeandexcludedependency)
  * groupId: `io.dropwizard`
  * artifactId: `dropwizard-views-mustache`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.dropwizard.CoreSetup
displayName: Create Spring Boot Application Entry Point
description: |
  Creates the main Spring Boot application class.
recipeList:
  - org.openrewrite.java.dropwizard.AddMissingApplicationProperties
  - org.openrewrite.java.dropwizard.AddCoreExampleProperties
  - org.openrewrite.maven.AddDependency:
      groupId: org.projectlombok
      artifactId: lombok
      version: 1.18.x
      onlyIfUsing: lombok.*
  - org.openrewrite.maven.AddManagedDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-dependencies
      version: 2.7.18
      scope: import
      type: pom
      addToRootPom: true
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-bom
  - org.openrewrite.maven.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter
      version: 2.7.18
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-core
  - org.openrewrite.java.dropwizard.annotation.AddClassAnnotationIfSuperTypeExists:
      annotationToAdd: org.springframework.boot.SpringBootApplication
      targetSupertypeName: io.dropwizard.Application
  - org.openrewrite.java.dropwizard.method.RemoveSuperTypeByType:
      typeToRemove: io.dropwizard.Application
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-assets
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-http2
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-migrations
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-views-freemarker
  - org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency:
      groupId: io.dropwizard
      artifactId: dropwizard-views-mustache

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-dropwizard` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.dropwizard.CoreSetup")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-dropwizard:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}")
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
        rewrite("org.openrewrite.recipe:rewrite-dropwizard:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.dropwizard.CoreSetup")
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
            <recipe>org.openrewrite.java.dropwizard.CoreSetup</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-dropwizard</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-dropwizard:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.dropwizard.CoreSetup -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CoreSetup
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-dropwizard:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_DROPWIZARD}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dropwizard.CoreSetup" />

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

## Contributors
Karl-Erik Hein
