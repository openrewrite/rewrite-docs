# Upgrade to Axonframework 4.7 Javax

**org.axonframework.migration.UpgradeAxonFramework\_4\_7\_Javax**

_Migration file to upgrade an Axon Framework Javax-specific project and remain on Javax._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.axonframework.migration.UpgradeAxonFramework_4_7_Javax), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_7_Javax")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("org.axonframework.migration.UpgradeAxonFramework_4_7_Javax")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.axonframework.migration.UpgradeAxonFramework_4_7_Javax</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.axonframework.migration.UpgradeAxonFramework_4_7_Javax 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeAxonFramework_4_7_Javax
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
name: org.axonframework.migration.UpgradeAxonFramework_4_7_Javax
displayName: Upgrade to Axonframework 4.7 Javax
description: Migration file to upgrade an Axon Framework Javax-specific project and remain on Javax.
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.axonframework
      artifactId: *
      newVersion: 4.7.x
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.axonframework.migration.UpgradeAxonFramework_4_7_Javax)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
