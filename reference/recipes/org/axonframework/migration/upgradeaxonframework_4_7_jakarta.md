# Upgrade to Axonframework 4.7 Jakarta

**org.axonframework.migration.UpgradeAxonFramework\_4\_7\_Jakarta**

_Migration file to upgrade from an Axon Framework Javax-specific project to Jakarta._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.4.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.4.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.4.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.4.0")
    }
    rewrite {
        activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.33.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.4.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeAxonFramework_4_7_Jakarta
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.axonframework`
  * artifactId: `*`
  * newVersion: `4.7.x`
* [Migrate to Jakarta EE 9](../../../java/migrate/jakarta/javaxmigrationtojakarta.md)
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-configuration-jakarta`
  * newArtifactId: `axon-configuration`
  * newVersion: `4.7.x`
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-eventsourcing-jakarta`
  * newArtifactId: `axon-eventsourcing`
  * newVersion: `4.7.x`
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-messaging-jakarta`
  * newArtifactId: `axon-messaging`
  * newVersion: `4.7.x`
* [Change Maven dependency](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.axonframework`
  * oldArtifactId: `axon-modelling-jakarta`
  * newArtifactId: `axon-modelling`
  * newVersion: `4.7.x`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `org.axonframework.common.legacyjpa`
  * newPackageName: `org.axonframework.common.jpa`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.DeadLetterJpaConverter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.DeadLetterJpaConverter`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.EventMessageDeadLetterJpaConverter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.EventMessageDeadLetterJpaConverter`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.JpaDeadLetter`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.JpaDeadLetter`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.legacyjpa.JpaSequencedDeadLetterQueue`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.deadletter.jpa.JpaSequencedDeadLetterQueue`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventhandling.tokenstore.legacyjpa.JpaTokenStore`
  * newFullyQualifiedTypeName: `org.axonframework.eventhandling.tokenstore.jpa.JpaTokenStore`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.legacyjpa.JpaEventStorageEngine`
  * newFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.jpa.JpaEventStorageEngine`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.legacyjpa.SQLErrorCodesResolver`
  * newFullyQualifiedTypeName: `org.axonframework.eventsourcing.eventstore.jpa.SQLErrorCodesResolver`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.legacyvalidation.BeanValidationInterceptor`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.BeanValidationInterceptor`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.legacyvalidation.JSR303ViolationException`
  * newFullyQualifiedTypeName: `org.axonframework.messaging.interceptors.JSR303ViolationException`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.command.legacyjpa.GenericJpaRepository`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.command.GenericJpaRepository`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.modelling.saga.repository.legacyjpa.JpaSagaStore`
  * newFullyQualifiedTypeName: `org.axonframework.modelling.saga.repository.jpa.JpaSagaStore`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxAutoConfiguration`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.JpaAutoConfiguration`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.legacyjpa.JpaJavaxEventStoreAutoConfiguration`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.autoconfig.JpaEventStoreAutoConfiguration`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.axonframework.springboot.util.legacyjpa.ContainerManagedEntityManagerProvider`
  * newFullyQualifiedTypeName: `org.axonframework.springboot.util.jpa.ContainerManagedEntityManagerProvider`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta
displayName: Upgrade to Axonframework 4.7 Jakarta
description: Migration file to upgrade from an Axon Framework Javax-specific project to Jakarta.
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.axonframework
      artifactId: *
      newVersion: 4.7.x
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-configuration-jakarta
      newArtifactId: axon-configuration
      newVersion: 4.7.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-eventsourcing-jakarta
      newArtifactId: axon-eventsourcing
      newVersion: 4.7.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-messaging-jakarta
      newArtifactId: axon-messaging
      newVersion: 4.7.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.axonframework
      oldArtifactId: axon-modelling-jakarta
      newArtifactId: axon-modelling
      newVersion: 4.7.x
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
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.axonframework.migration.UpgradeAxonFramework_4_7_Jakarta)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Chuka Obinabo, Evie Lau, ranuradh, Anu Ramamoorthy, [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Knut Wannheden](mailto:knut@moderne.io)
