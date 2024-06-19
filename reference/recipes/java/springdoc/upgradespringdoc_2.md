# Upgrade SpringDoc

**org.openrewrite.java.springdoc.UpgradeSpringDoc\_2**

_Upgrade to SpringDoc v2._

### Tags

* springdoc

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/springdoc.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.13.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.13.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.13.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.springdoc.UpgradeSpringDoc_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.springdoc.UpgradeSpringDoc_2")
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
            <recipe>org.openrewrite.java.springdoc.UpgradeSpringDoc_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.13.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.springdoc.UpgradeSpringDoc_2 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringDoc_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springdoc`
  * artifactId: `*`
  * newVersion: `2.3.x`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springdoc.core.SpringDocUtils`
  * newFullyQualifiedTypeName: `org.springdoc.core.utils.SpringDocUtils`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springdoc.api.annotations.ParameterObject`
  * newFullyQualifiedTypeName: `org.springdoc.core.annotations.ParameterObject`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springdoc.core.GroupedOpenApi`
  * newFullyQualifiedTypeName: `org.springdoc.core.models.GroupedOpenApi`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springdoc.core.customizers.OpenApiCustomiser`
  * newFullyQualifiedTypeName: `org.springdoc.core.customizers.OpenApiCustomizer`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springdoc.core.Constants`
  * newFullyQualifiedTypeName: `org.springdoc.core.utils.Constants`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springdoc.core.SwaggerUiConfigParameters`
  * newFullyQualifiedTypeName: `org.springdoc.core.properties.SwaggerUiConfigParameters`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-common`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-data-rest`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-groovy`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-hateoas`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-javadoc`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-kotlin`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-security`
  * newArtifactId: `springdoc-openapi-starter-common`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-webmvc-core`
  * newArtifactId: `springdoc-openapi-starter-webmvc-api`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-webflux-core`
  * newArtifactId: `springdoc-openapi-starter-webflux-api`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-ui`
  * newArtifactId: `springdoc-openapi-starter-webmvc-ui`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-webflux-ui`
  * newArtifactId: `springdoc-openapi-starter-webflux-ui`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.springdoc.UpgradeSpringDoc_2
displayName: Upgrade SpringDoc
description: Upgrade to SpringDoc v2.
tags:
  - springdoc
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springdoc
      artifactId: *
      newVersion: 2.3.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springdoc.core.SpringDocUtils
      newFullyQualifiedTypeName: org.springdoc.core.utils.SpringDocUtils
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springdoc.api.annotations.ParameterObject
      newFullyQualifiedTypeName: org.springdoc.core.annotations.ParameterObject
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springdoc.core.GroupedOpenApi
      newFullyQualifiedTypeName: org.springdoc.core.models.GroupedOpenApi
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springdoc.core.customizers.OpenApiCustomiser
      newFullyQualifiedTypeName: org.springdoc.core.customizers.OpenApiCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springdoc.core.Constants
      newFullyQualifiedTypeName: org.springdoc.core.utils.Constants
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springdoc.core.SwaggerUiConfigParameters
      newFullyQualifiedTypeName: org.springdoc.core.properties.SwaggerUiConfigParameters
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-common
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-data-rest
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-groovy
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-hateoas
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-javadoc
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-kotlin
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-security
      newArtifactId: springdoc-openapi-starter-common
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-webmvc-core
      newArtifactId: springdoc-openapi-starter-webmvc-api
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-webflux-core
      newArtifactId: springdoc-openapi-starter-webflux-api
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-ui
      newArtifactId: springdoc-openapi-starter-webmvc-ui
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-webflux-ui
      newArtifactId: springdoc-openapi-starter-webflux-ui

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.springdoc.UpgradeSpringDoc_2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
