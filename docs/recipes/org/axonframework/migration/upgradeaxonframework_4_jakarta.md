---
sidebar_label: "Upgrade to Axonframework 4.x Jakarta"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade to Axonframework 4.x Jakarta

**org.axonframework.migration.UpgradeAxonFramework\_4\_Jakarta**

_Migration file to upgrade from an Axon Framework Javax-specific project to Jakarta._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.axonframework.migration.UpgradeAxonFramework_4_Jakarta), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.12.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.12.1

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion)
  * groupId: `org.axonframework`
  * artifactId: `*`
  * newVersion: `4.x`
* [Migrate to Jakarta EE 9](../../../java/migrate/jakarta/javaxmigrationtojakarta)
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-configuration-jakarta`
  * newArtifactId: `axon-configuration`
  * newVersion: `4.x`
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-eventsourcing-jakarta`
  * newArtifactId: `axon-eventsourcing`
  * newVersion: `4.x`
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-messaging-jakarta`
  * newArtifactId: `axon-messaging`
  * newVersion: `4.x`
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-modelling-jakarta`
  * newArtifactId: `axon-modelling`
  * newVersion: `4.x`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.axonframework.common.legacyjpa`
  * newPackageName: `org.axonframework.common.jpa`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.DeadLetterJpaConverter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.DeadLetterJpaConverter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.EventMessageDeadLetterJpaConverter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.EventMessageDeadLetterJpaConverter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.JpaDeadLetter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.JpaDeadLetter`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.JpaSequencedDeadLetterQueue`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.JpaSequencedDeadLetterQueue`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.tokenstore.legacyjpa.JpaTokenStore`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.tokenstore.jpa.JpaTokenStore`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.legacyjpa.JpaEventStorageEngine`
  * newFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.jpa.JpaEventStorageEngine`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.legacyjpa.SQLErrorCodesResolver`
  * newFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.jpa.SQLErrorCodesResolver`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.legacyvalidation.BeanValidationInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.BeanValidationInterceptor`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.legacyvalidation.JSR303ViolationException`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.JSR303ViolationException`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.command.legacyjpa.GenericJpaRepository`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.command.GenericJpaRepository`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.saga.repository.legacyjpa.JpaSagaStore`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.saga.repository.jpa.JpaSagaStore`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxAutoConfiguration`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.JpaAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxEventStoreAutoConfiguration`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.JpaEventStoreAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.util.legacyjpa.ContainerManagedEntityManagerProvider`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.util.jpa.ContainerManagedEntityManagerProvider`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.axonframework.migration.UpgradeAxonFramework_4_Jakarta
displayName: Upgrade to Axonframework 4.x Jakarta
description: Migration file to upgrade from an Axon Framework Javax-specific project to Jakarta.
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.axonframework
      artifactId: *
      newVersion: 4.x
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-configuration-jakarta
      newArtifactId: axon-configuration
      newVersion: 4.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-eventsourcing-jakarta
      newArtifactId: axon-eventsourcing
      newVersion: 4.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-messaging-jakarta
      newArtifactId: axon-messaging
      newVersion: 4.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-modelling-jakarta
      newArtifactId: axon-modelling
      newVersion: 4.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.common.legacyjpa
      newPackageName: org.axonframework.common.jpa
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.DeadLetterJpaConverter
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.DeadLetterJpaConverter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.EventMessageDeadLetterJpaConverter
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.EventMessageDeadLetterJpaConverter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.JpaDeadLetter
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.JpaDeadLetter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.JpaSequencedDeadLetterQueue
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.JpaSequencedDeadLetterQueue
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.tokenstore.legacyjpa.JpaTokenStore
      newFullyQualifiedTypeName: org.axonframework.eventhandling.tokenstore.jpa.JpaTokenStore
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.legacyjpa.JpaEventStorageEngine
      newFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.jpa.JpaEventStorageEngine
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.legacyjpa.SQLErrorCodesResolver
      newFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.jpa.SQLErrorCodesResolver
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.legacyvalidation.BeanValidationInterceptor
      newFullyQualifiedTypeName: org.axonframework.messaging.interceptors.BeanValidationInterceptor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.legacyvalidation.JSR303ViolationException
      newFullyQualifiedTypeName: org.axonframework.messaging.interceptors.JSR303ViolationException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.command.legacyjpa.GenericJpaRepository
      newFullyQualifiedTypeName: org.axonframework.modelling.command.GenericJpaRepository
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.saga.repository.legacyjpa.JpaSagaStore
      newFullyQualifiedTypeName: org.axonframework.modelling.saga.repository.jpa.JpaSagaStore
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxAutoConfiguration
      newFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.JpaAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxEventStoreAutoConfiguration
      newFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.JpaEventStoreAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.springboot.util.legacyjpa.ContainerManagedEntityManagerProvider
      newFullyQualifiedTypeName: org.axonframework.springboot.util.jpa.ContainerManagedEntityManagerProvider

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.12.1` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.28.1")
}

rewrite {
    activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_Jakarta")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.12.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.28.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.12.1")
    }
    rewrite {
        activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_Jakarta")
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
        <version>5.46.1</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.axonframework.migration.UpgradeAxonFramework_4_Jakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.12.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.axonframework.migration.UpgradeAxonFramework_4_Jakarta -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeAxonFramework_4_Jakarta
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:0.12.1
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.axonframework.migration.UpgradeAxonFramework_4_Jakarta" />

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
Chuka Obinabo, Evie Lau, ranuradh, Anu Ramamoorthy, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
