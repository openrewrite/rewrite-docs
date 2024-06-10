# Migrate from Swagger to OpenAPI

**org.openrewrite.openapi.swagger.SwaggerToOpenAPI**

_Migrate from Swagger to OpenAPI._

### Tags

* openapi
* swagger

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-openapi/blob/main/src/main/resources/META-INF/rewrite/swagger-2.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-openapi/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-openapi/0.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-openapi
* version: 0.4.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-openapi:0.4.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.0")
}

rewrite {
    activeRecipe("org.openrewrite.openapi.swagger.SwaggerToOpenAPI")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-openapi:0.4.0")
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
        rewrite("org.openrewrite.recipe:rewrite-openapi:0.4.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.openapi.swagger.SwaggerToOpenAPI")
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
            <recipe>org.openrewrite.openapi.swagger.SwaggerToOpenAPI</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-openapi</artifactId>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-openapi:RELEASE -Drewrite.activeRecipes=org.openrewrite.openapi.swagger.SwaggerToOpenAPI 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe SwaggerToOpenAPI
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `io.swagger`
  * oldArtifactId: `swagger-annotations`
  * newGroupId: `io.swagger.core.v3`
  * newVersion: `2.2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `io.swagger`
  * oldArtifactId: `swagger-core`
  * newGroupId: `io.swagger.core.v3`
  * newVersion: `2.2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency.md)
  * oldGroupId: `io.swagger`
  * oldArtifactId: `swagger-models`
  * newGroupId: `io.swagger.core.v3`
  * newVersion: `2.2.x`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.swagger.annotations.Tag`
  * newFullyQualifiedTypeName: `io.swagger.v3.oas.annotations.tags.Tag`
* [Migrate from @ApiOperation to @Operation](../../openapi/swagger/migrateapioperationtooperation.md)
* [Migrate from @ApiResponses to @ApiResponses](../../openapi/swagger/migrateapiresponsestoapiresponses.md)
* [Migrate from @ApiImplicitParams  to @Parameters](../../openapi/swagger/migrateapiimplicitparamstoparameters.md)
* [Migrate from @Api to @Tag](../../openapi/swagger/migrateapitotag.md)
* [Migrate from @ApiParam to @Parameter](../../openapi/swagger/migrateapiparamtoparameter.md)
* [Migrate from @ApiModelProperty to @Schema](../../openapi/swagger/migrateapimodelpropertytoschema.md)
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.swagger.annotations.ApiModel`
  * newFullyQualifiedTypeName: `io.swagger.v3.oas.annotations.media.Schema`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.openapi.swagger.SwaggerToOpenAPI
displayName: Migrate from Swagger to OpenAPI
description: Migrate from Swagger to OpenAPI.
tags:
  - openapi
  - swagger
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.swagger
      oldArtifactId: swagger-annotations
      newGroupId: io.swagger.core.v3
      newVersion: 2.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.swagger
      oldArtifactId: swagger-core
      newGroupId: io.swagger.core.v3
      newVersion: 2.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.swagger
      oldArtifactId: swagger-models
      newGroupId: io.swagger.core.v3
      newVersion: 2.2.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.swagger.annotations.Tag
      newFullyQualifiedTypeName: io.swagger.v3.oas.annotations.tags.Tag
  - org.openrewrite.openapi.swagger.MigrateApiOperationToOperation
  - org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses
  - org.openrewrite.openapi.swagger.MigrateApiImplicitParamsToParameters
  - org.openrewrite.openapi.swagger.MigrateApiToTag
  - org.openrewrite.openapi.swagger.MigrateApiParamToParameter
  - org.openrewrite.openapi.swagger.MigrateApiModelPropertyToSchema
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.swagger.annotations.ApiModel
      newFullyQualifiedTypeName: io.swagger.v3.oas.annotations.media.Schema

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.openapi.swagger.SwaggerToOpenAPI)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
