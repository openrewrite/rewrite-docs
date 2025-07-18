---
sidebar_label: "io.quarkus.updates.core.quarkus30.AdditionalChanges"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# io.quarkus.updates.core.quarkus30.AdditionalChanges

**io.quarkus.updates.core.quarkus30.AdditionalChanges**


## Recipe source

[GitHub](https://github.com/search?type=code&q=io.quarkus.updates.core.quarkus30.AdditionalChanges), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.core.multipart.MultipartFormDataOutput`
  * newFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.multipart.MultipartFormDataOutput`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.core.multipart.PartItem`
  * newFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.multipart.PartItem`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.core.multipart.FormData.FormValue`
  * newFullyQualifiedTypeName: `org.jboss.resteasy.reactive.server.multipart.FormValue`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.test.junit.NativeImageTest`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.QuarkusIntegrationTest`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.test.junit.DisabledOnNativeImage`
  * newFullyQualifiedTypeName: `io.quarkus.test.junit.DisabledOnIntegrationTest`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.jboss.resteasy.reactive.MultipartForm`
  * newFullyQualifiedTypeName: `jakarta.ws.rs.BeanParam`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.smallrye.reactive.messaging.providers.connectors.InMemoryConnector`
  * newFullyQualifiedTypeName: `io.smallrye.reactive.messaging.memory.InMemoryConnector`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.hibernate.reactive.panache.common.runtime.ReactiveTransactional`
  * newFullyQualifiedTypeName: `io.quarkus.hibernate.reactive.panache.common.WithTransaction`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.arc.Priority`
  * newFullyQualifiedTypeName: `jakarta.annotation.Priority`
* [Change Maven plugin group and artifact ID](../../../../../maven/changeplugingroupidandartifactid)
  * oldGroupId: `io.quarkus`
  * oldArtifactId: `quarkus-bootstrap-maven-plugin`
  * newGroupId: `io.quarkus`
  * newArtifactId: `quarkus-extension-maven-plugin`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: io.quarkus.updates.core.quarkus30.AdditionalChanges
displayName: io.quarkus.updates.core.quarkus30.AdditionalChanges
description: |
  
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.core.multipart.MultipartFormDataOutput
      newFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.multipart.MultipartFormDataOutput
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.core.multipart.PartItem
      newFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.multipart.PartItem
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.core.multipart.FormData.FormValue
      newFullyQualifiedTypeName: org.jboss.resteasy.reactive.server.multipart.FormValue
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.test.junit.NativeImageTest
      newFullyQualifiedTypeName: io.quarkus.test.junit.QuarkusIntegrationTest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.test.junit.DisabledOnNativeImage
      newFullyQualifiedTypeName: io.quarkus.test.junit.DisabledOnIntegrationTest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.jboss.resteasy.reactive.MultipartForm
      newFullyQualifiedTypeName: jakarta.ws.rs.BeanParam
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.smallrye.reactive.messaging.providers.connectors.InMemoryConnector
      newFullyQualifiedTypeName: io.smallrye.reactive.messaging.memory.InMemoryConnector
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.hibernate.reactive.panache.common.runtime.ReactiveTransactional
      newFullyQualifiedTypeName: io.quarkus.hibernate.reactive.panache.common.WithTransaction
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.arc.Priority
      newFullyQualifiedTypeName: jakarta.annotation.Priority
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: io.quarkus
      oldArtifactId: quarkus-bootstrap-maven-plugin
      newGroupId: io.quarkus
      newArtifactId: quarkus-extension-maven-plugin

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
    activeRecipe("io.quarkus.updates.core.quarkus30.AdditionalChanges")
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
        activeRecipe("io.quarkus.updates.core.quarkus30.AdditionalChanges")
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
            <recipe>io.quarkus.updates.core.quarkus30.AdditionalChanges</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=io.quarkus.updates.core.quarkus30.AdditionalChanges -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe AdditionalChanges
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/io.quarkus.updates.core.quarkus30.AdditionalChanges" />

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
