# Upgrade dependencies to Spring Cloud 2022

**org.openrewrite.java.spring.cloud2022.DependencyUpgrades**

_Upgrade dependencies to Spring Cloud 2022 from prior 2021.x version._

### Tags

* spring
* cloud

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2022.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.1.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.1.6

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.1.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.12")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.cloud2022.DependencyUpgrades")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.1.6")
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
    dependencies { classpath("org.openrewrite:plugin:6.5.12") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.1.6")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.cloud2022.DependencyUpgrades")
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
        <version>5.15.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.cloud2022.DependencyUpgrades</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.1.6</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.cloud2022.DependencyUpgrades
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe DependencyUpgrades
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `*`
  * newVersion: `4.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-parent`
  * newVersion: `2022.0.x`
* [Change Maven dependency groupId, artifactId and/or the version](../../../maven/changedependencygroupidandartifactid.md)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-feign`
  * newArtifactId: `spring-cloud-starter-openfeign`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-dependencies`
  * newVersion: `2022.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-circuitbreaker-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-circuitbreaker-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-kubernetes-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-kubernetes-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-starter-task-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-task-*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.cloud2022.DependencyUpgrades
displayName: Upgrade dependencies to Spring Cloud 2022
description: Upgrade dependencies to Spring Cloud 2022 from prior 2021.x version.
tags:
  - spring
  - cloud
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: *
      newVersion: 4.0.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-parent
      newVersion: 2022.0.x
  - org.openrewrite.maven.ChangeDependencyGroupIdAndArtifactId:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-feign
      newArtifactId: spring-cloud-starter-openfeign
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-dependencies
      newVersion: 2022.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-circuitbreaker-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-circuitbreaker-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-kubernetes-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-kubernetes-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-starter-task-*
      newVersion: 3.0.x
      overrideManagedVersion: false
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-task-*
      newVersion: 3.0.x
      overrideManagedVersion: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.cloud2022.DependencyUpgrades)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
