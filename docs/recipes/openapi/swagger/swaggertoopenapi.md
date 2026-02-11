---
sidebar_label: "Migrate from Swagger to OpenAPI"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate from Swagger to OpenAPI

**org.openrewrite.openapi.swagger.SwaggerToOpenAPI**

_Migrate from Swagger to OpenAPI._

### Tags

* [openapi](/reference/recipes-by-tag#openapi)
* [swagger](/reference/recipes-by-tag#swagger)

## Recipe source

[GitHub: swagger-2.yml](https://github.com/openrewrite/rewrite-openapi/blob/main/src/main/resources/META-INF/rewrite/swagger-2.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-openapi/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-openapi/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.swagger`
  * oldArtifactId: `swagger-jersey2-jaxrs`
  * newGroupId: `io.swagger.core.v3`
  * newArtifactId: `swagger-jaxrs2`
  * newVersion: `2.2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.swagger`
  * oldArtifactId: `swagger-jaxrs`
  * newGroupId: `io.swagger.core.v3`
  * newArtifactId: `swagger-jaxrs2`
  * newVersion: `2.2.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `io.swagger`
  * oldArtifactId: `swagger-*`
  * newGroupId: `io.swagger.core.v3`
  * newVersion: `2.2.x`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.swagger.annotations.Info`
  * newFullyQualifiedTypeName: `io.swagger.v3.oas.annotations.info.Info`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `springfox.documentation.annotations.ApiIgnore`
  * newFullyQualifiedTypeName: `io.swagger.v3.oas.annotations.Hidden`
* [Migrate from `@ApiOperation` to `@Operation`](../../openapi/swagger/migrateapioperationtooperation)
* [Migrate from `@ApiResponses` to `@ApiResponses`](../../openapi/swagger/migrateapiresponsestoapiresponses)
* [Migrate from `@ApiImplicitParams`  to `@Parameters`](../../openapi/swagger/migrateapiimplicitparamstoparameters)
* [Migrate from `@Api` to `@Tag`](../../openapi/swagger/migrateapitotag)
* [Migrate from `@ApiParam` to `@Parameter`](../../openapi/swagger/migrateapiparamtoparameter)
* [Migrate from `@ApiModelProperty` to `@Schema`](../../openapi/swagger/migrateapimodelpropertytoschema)
* [Migrate from `@ApiModel` to `@Schema`](../../openapi/swagger/migrateapimodeltoschema)
* [Migrate from `@SwaggerDefinition` to `@OpenAPIDefinition`](../../openapi/swagger/migrateswaggerdefinitiontoopenapidefinition)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.openapi.swagger.SwaggerToOpenAPI
displayName: Migrate from Swagger to OpenAPI
description: |
  Migrate from Swagger to OpenAPI.
tags:
  - openapi
  - swagger
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.swagger
      oldArtifactId: swagger-jersey2-jaxrs
      newGroupId: io.swagger.core.v3
      newArtifactId: swagger-jaxrs2
      newVersion: 2.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.swagger
      oldArtifactId: swagger-jaxrs
      newGroupId: io.swagger.core.v3
      newArtifactId: swagger-jaxrs2
      newVersion: 2.2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: io.swagger
      oldArtifactId: swagger-*
      newGroupId: io.swagger.core.v3
      newVersion: 2.2.x
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.swagger.annotations.Info
      newFullyQualifiedTypeName: io.swagger.v3.oas.annotations.info.Info
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: springfox.documentation.annotations.ApiIgnore
      newFullyQualifiedTypeName: io.swagger.v3.oas.annotations.Hidden
  - org.openrewrite.openapi.swagger.MigrateApiOperationToOperation
  - org.openrewrite.openapi.swagger.MigrateApiResponsesToApiResponses
  - org.openrewrite.openapi.swagger.MigrateApiImplicitParamsToParameters
  - org.openrewrite.openapi.swagger.MigrateApiToTag
  - org.openrewrite.openapi.swagger.MigrateApiParamToParameter
  - org.openrewrite.openapi.swagger.MigrateApiModelPropertyToSchema
  - org.openrewrite.openapi.swagger.MigrateApiModelToSchema
  - org.openrewrite.openapi.swagger.MigrateSwaggerDefinitionToOpenAPIDefinition

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Swagger to SpringDoc and OpenAPI](/recipes/java/springdoc/swaggertospringdoc.md)
* [Upgrade to SpringDoc 2.1](/recipes/java/springdoc/upgradespringdoc_2.md)

## Examples
##### Example 1
`SwaggerToOpenAPITest#shouldChangeSwaggerArtifacts`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
  @ApiModelProperty(value = "ApiModelPropertyExampleValue", position = 1)
  private String example;
}
```

###### After
```java
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
  @Schema(description = "ApiModelPropertyExampleValue")
  private String example;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import io.swagger.annotations.ApiModel;
-import io.swagger.annotations.ApiModelProperty;
+import io.swagger.v3.oas.annotations.media.Schema;

@@ -4,1 +3,1 @@
import io.swagger.annotations.ApiModelProperty;

-@ApiModel(value="ApiModelExampleValue", description="ApiModelExampleDescription")
+@Schema(name="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
@@ -6,1 +5,1 @@
@ApiModel(value="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
- @ApiModelProperty(value = "ApiModelPropertyExampleValue", position = 1)
+ @Schema(description = "ApiModelPropertyExampleValue")
  private String example;
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-annotations</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-models</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-core</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-jersey2-jaxrs</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-jaxrs</artifactId>
      <version>1.6.14</version>
    </dependency>
  </dependencies>
</project>
```

---

##### Example 2
`SwaggerToOpenAPITest#shouldChangeSwaggerArtifacts`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

@ApiModel(value="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
  @ApiModelProperty(value = "ApiModelPropertyExampleValue", position = 1)
  private String example;
}
```

###### After
```java
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(name="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
  @Schema(description = "ApiModelPropertyExampleValue")
  private String example;
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,1 @@
-import io.swagger.annotations.ApiModel;
-import io.swagger.annotations.ApiModelProperty;
+import io.swagger.v3.oas.annotations.media.Schema;

@@ -4,1 +3,1 @@
import io.swagger.annotations.ApiModelProperty;

-@ApiModel(value="ApiModelExampleValue", description="ApiModelExampleDescription")
+@Schema(name="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
@@ -6,1 +5,1 @@
@ApiModel(value="ApiModelExampleValue", description="ApiModelExampleDescription")
class Example {
- @ApiModelProperty(value = "ApiModelPropertyExampleValue", position = 1)
+ @Schema(description = "ApiModelPropertyExampleValue")
  private String example;
```
</TabItem>
</Tabs>

###### Unchanged
```xml title="pom.xml"
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example</groupId>
  <artifactId>demo</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <dependencies>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-annotations</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-models</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-core</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-jersey2-jaxrs</artifactId>
      <version>1.6.14</version>
    </dependency>
    <dependency>
      <groupId>io.swagger</groupId>
      <artifactId>swagger-jaxrs</artifactId>
      <version>1.6.14</version>
    </dependency>
  </dependencies>
</project>
```


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-openapi` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.openapi.swagger.SwaggerToOpenAPI")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-openapi:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI}}")
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
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-openapi:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.openapi.swagger.SwaggerToOpenAPI")
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
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.openapi.swagger.SwaggerToOpenAPI</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-openapi</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-openapi:RELEASE -Drewrite.activeRecipes=org.openrewrite.openapi.swagger.SwaggerToOpenAPI -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SwaggerToOpenAPI
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-openapi:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_OPENAPI}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.openapi.swagger.SwaggerToOpenAPI" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
