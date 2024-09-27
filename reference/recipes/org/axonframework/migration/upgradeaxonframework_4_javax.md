# Upgrade to Axonframework 4.x Javax

**org.axonframework.migration.UpgradeAxonFramework\_4\_Javax**

_Migration file to upgrade an Axon Framework Javax-specific project and remain on Javax._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.axonframework.migration.UpgradeAxonFramework_4_Javax), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.8.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.axonframework`
  * artifactId: `*`
  * newVersion: `4.x`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `org.axonframework.common.jpa`
  * newPackageName: `org.axonframework.common.legacyjpa`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.DeadLetterJpaConverter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.DeadLetterJpaConverter`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.EventMessageDeadLetterJpaConverter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.EventMessageDeadLetterJpaConverter`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.JpaDeadLetter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.JpaDeadLetter`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.JpaSequencedDeadLetterQueue`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.JpaSequencedDeadLetterQueue`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.tokenstore.jpa.JpaTokenStore`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.tokenstore.legacyjpa.JpaTokenStore`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.jpa.JpaEventStorageEngine`
  * newFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.legacyjpa.JpaEventStorageEngine`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.jpa.SQLErrorCodesResolver`
  * newFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.legacyjpa.SQLErrorCodesResolver`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.BeanValidationInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.legacyvalidation.BeanValidationInterceptor`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.JSR303ViolationException`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.legacyvalidation.JSR303ViolationException`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.command.GenericJpaRepository`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.command.legacyjpa.GenericJpaRepository`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.saga.repository.jpa.JpaSagaStore`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.saga.repository.legacyjpa.JpaSagaStore`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.JpaAutoConfiguration`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxAutoConfiguration`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.JpaEventStoreAutoConfiguration`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxEventStoreAutoConfiguration`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.util.jpa.ContainerManagedEntityManagerProvider`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.util.legacyjpa.ContainerManagedEntityManagerProvider`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.axonframework.migration.UpgradeAxonFramework_4_Javax
displayName: Upgrade to Axonframework 4.x Javax
description: Migration file to upgrade an Axon Framework Javax-specific project and remain on Javax.
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.axonframework
      artifactId: *
      newVersion: 4.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.axonframework.common.jpa
      newPackageName: org.axonframework.common.legacyjpa
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.DeadLetterJpaConverter
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.DeadLetterJpaConverter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.EventMessageDeadLetterJpaConverter
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.EventMessageDeadLetterJpaConverter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.JpaDeadLetter
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.JpaDeadLetter
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.jpa.JpaSequencedDeadLetterQueue
      newFullyQualifiedTypeName: org.axonframework.eventhandling.deadletter.legacyjpa.JpaSequencedDeadLetterQueue
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventhandling.tokenstore.jpa.JpaTokenStore
      newFullyQualifiedTypeName: org.axonframework.eventhandling.tokenstore.legacyjpa.JpaTokenStore
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.jpa.JpaEventStorageEngine
      newFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.legacyjpa.JpaEventStorageEngine
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.jpa.SQLErrorCodesResolver
      newFullyQualifiedTypeName: org.axonframework.eventsourcing.eventstore.legacyjpa.SQLErrorCodesResolver
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.BeanValidationInterceptor
      newFullyQualifiedTypeName: org.axonframework.messaging.interceptors.legacyvalidation.BeanValidationInterceptor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.messaging.interceptors.JSR303ViolationException
      newFullyQualifiedTypeName: org.axonframework.messaging.interceptors.legacyvalidation.JSR303ViolationException
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.command.GenericJpaRepository
      newFullyQualifiedTypeName: org.axonframework.modelling.command.legacyjpa.GenericJpaRepository
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.modelling.saga.repository.jpa.JpaSagaStore
      newFullyQualifiedTypeName: org.axonframework.modelling.saga.repository.legacyjpa.JpaSagaStore
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.JpaAutoConfiguration
      newFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.JpaEventStoreAutoConfiguration
      newFullyQualifiedTypeName: org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxEventStoreAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.axonframework.springboot.util.jpa.ContainerManagedEntityManagerProvider
      newFullyQualifiedTypeName: org.axonframework.springboot.util.legacyjpa.ContainerManagedEntityManagerProvider

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.8.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_Javax")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.8.0")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.8.0")
    }
    rewrite {
        activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_Javax")
        exportDatatables = true
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
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.axonframework.migration.UpgradeAxonFramework_4_Javax</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.8.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.axonframework.migration.UpgradeAxonFramework_4_Javax -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeAxonFramework_4_Javax
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.axonframework.migration.UpgradeAxonFramework_4_Javax)

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

