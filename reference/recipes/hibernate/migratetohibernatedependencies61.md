# Migrate Hibernate dependencies to 6.1.x

**org.openrewrite.hibernate.MigrateToHibernateDependencies61**

_This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-hibernate/blob/main/src/main/resources/META-INF/rewrite/hibernate-6.1.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-hibernate/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-hibernate/1.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-hibernate
* version: 1.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-hibernate:1.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("org.openrewrite.hibernate.MigrateToHibernateDependencies61")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-hibernate:1.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.14.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-hibernate:1.5.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.hibernate.MigrateToHibernateDependencies61")
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.hibernate.MigrateToHibernateDependencies61</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-hibernate</artifactId>
            <version>1.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-hibernate:RELEASE -Drewrite.activeRecipes=org.openrewrite.hibernate.MigrateToHibernateDependencies61 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateToHibernateDependencies61
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-agroal-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-agroal`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-c3p0-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-c3p0`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-community-dialects-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-community-dialects`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-core-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-core`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-envers-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-envers`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-graalvm-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-graalvm`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-hikaricp-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-hikaricp`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jcache-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jcache`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-jpamodelgen-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-jpamodelgen`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-micrometer-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-micrometer`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-proxool-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-proxool`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-spatial-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-spatial`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Change Gradle or Maven dependency](../java/dependencies/changedependency.md)
  * oldGroupId: `org.hibernate`
  * oldArtifactId: `hibernate-testing-jakarta`
  * newGroupId: `org.hibernate.orm`
  * newArtifactId: `hibernate-testing`
  * newVersion: `6.1.x`
* [Remove a Gradle or Maven dependency](../java/dependencies/removedependency.md)
  * groupId: `org.hibernate`
  * artifactId: `hibernate-entitymanager`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.hibernate.MigrateToHibernateDependencies61
displayName: Migrate Hibernate dependencies to 6.1.x
description: This recipe will migrate any existing dependencies on Hibernate 5.x to the latest 6.1.x release. This migration will include the adjustment to the new `org.hibernate.orm` group ID. It accounts for artifacts names that both do and do not include the `jakarta` suffix and it will change both dependencies and managed dependencies.

recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-agroal-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-agroal
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-c3p0-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-c3p0
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-community-dialects-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-community-dialects
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-core-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-core
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-envers-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-envers
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-graalvm-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-graalvm
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-hikaricp-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-hikaricp
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jcache-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jcache
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-jpamodelgen-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-jpamodelgen
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-micrometer-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-micrometer
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-proxool-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-proxool
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-spatial-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-spatial
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.hibernate
      oldArtifactId: hibernate-testing-jakarta
      newGroupId: org.hibernate.orm
      newArtifactId: hibernate-testing
      newVersion: 6.1.x
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.hibernate
      artifactId: hibernate-entitymanager

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.hibernate.MigrateToHibernateDependencies61)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
