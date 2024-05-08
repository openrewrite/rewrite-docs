# Migrate dropWizard dependencies to Spring Boot 3.x

**org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies**

_Migrate dropWizard dependencies to the new artifactId, since these are changed with Spring Boot 3._

### Tags

* spring
* boot
* dropwizard

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.9.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.9.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.9.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.9.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.13.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.9.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies")
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
        <version>5.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.9.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateDropWizardDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `com.codahale.metrics.servlet`
  * newPackageName: `io.dropwizard.metrics.servlet`
* [Rename package name](../../../java/changepackage.md)
  * oldPackageName: `com.codahale.metrics.servlets`
  * newPackageName: `io.dropwizard.metrics.servlets`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `io.dropwizard.metrics`
  * oldArtifactId: `metrics-servlet`
  * newArtifactId: `metrics-jakarta-servlet`
  * newVersion: `4.2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency.md)
  * oldGroupId: `io.dropwizard.metrics`
  * oldArtifactId: `metrics-servlets`
  * newArtifactId: `metrics-jakarta-servlets`
  * newVersion: `4.2.x`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies
displayName: Migrate dropWizard dependencies to Spring Boot 3.x
description: Migrate dropWizard dependencies to the new artifactId, since these are changed with Spring Boot 3.
tags:
  - spring
  - boot
  - dropwizard
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.codahale.metrics.servlet
      newPackageName: io.dropwizard.metrics.servlet
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.codahale.metrics.servlets
      newPackageName: io.dropwizard.metrics.servlets
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.dropwizard.metrics
      oldArtifactId: metrics-servlet
      newArtifactId: metrics-jakarta-servlet
      newVersion: 4.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.dropwizard.metrics
      oldArtifactId: metrics-servlets
      newArtifactId: metrics-jakarta-servlets
      newVersion: 4.2.x

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
