# Migrate from @ApiResponses to @ApiResponses

**org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses**

_Changes the namespace of the @ApiResponses and @ApiResponse annotations and converts its attributes (ex. code -> responseCode, message -> description)._

### Tags

* openapi
* swagger

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-openapi/blob/main/src/main/resources/META-INF/rewrite/swagger-2.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-openapi/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-openapi/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-openapi
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-openapi:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-openapi:0.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-openapi:0.5.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses")
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-openapi</artifactId>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-openapi:RELEASE -Drewrite.activeRecipes=org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateApiResponsesToApiResponses
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.swagger.annotations.ApiResponses`
  * newFullyQualifiedTypeName: `io.swagger.v3.oas.annotations.responses.ApiResponses`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.swagger.annotations.ApiResponse`
  * newFullyQualifiedTypeName: `io.swagger.v3.oas.annotations.responses.ApiResponse`
* [Change annotation attribute name](../../java/changeannotationattributename.md)
  * annotationType: `io.swagger.v3.oas.annotations.responses.ApiResponse`
  * oldAttributeName: `code`
  * newAttributeName: `responseCode`
* [Change annotation attribute name](../../java/changeannotationattributename.md)
  * annotationType: `io.swagger.v3.oas.annotations.responses.ApiResponse`
  * oldAttributeName: `message`
  * newAttributeName: `description`
* [Convert API response codes to strings](../../openapi/swagger/convertapiresponsecodestostrings.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses
displayName: Migrate from @ApiResponses to @ApiResponses
description: Changes the namespace of the @ApiResponses and @ApiResponse annotations and converts its attributes (ex. code -> responseCode, message -> description).
tags:
  - openapi
  - swagger
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.swagger.annotations.ApiResponses
      newFullyQualifiedTypeName: io.swagger.v3.oas.annotations.responses.ApiResponses
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.swagger.annotations.ApiResponse
      newFullyQualifiedTypeName: io.swagger.v3.oas.annotations.responses.ApiResponse
  - org.openrewrite.java.ChangeAnnotationAttributeName:
      annotationType: io.swagger.v3.oas.annotations.responses.ApiResponse
      oldAttributeName: code
      newAttributeName: responseCode
  - org.openrewrite.java.ChangeAnnotationAttributeName:
      annotationType: io.swagger.v3.oas.annotations.responses.ApiResponse
      oldAttributeName: message
      newAttributeName: description
  - org.openrewrite.openapi.swagger.ConvertApiResponseCodesToStrings

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io)
