---
sidebar_label: "Upgrade SpringDoc"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade SpringDoc

**org.openrewrite.java.springdoc.UpgradeSpringDoc\_2**

_Upgrade to SpringDoc v2, as described in the [upgrade guide](https://springdoc.org/#migrating-from-springdoc-v1)._

### Tags

* springdoc

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/springdoc.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Use Jakarta Swagger Artifacts](../../openapi/swagger/usejakartaswaggerartifacts)
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springdoc.core.SpringDocUtils`
  * newFullyQualifiedTypeName: `org.springdoc.core.utils.SpringDocUtils`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springdoc.api.annotations.ParameterObject`
  * newFullyQualifiedTypeName: `org.springdoc.core.annotations.ParameterObject`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springdoc.core.GroupedOpenApi`
  * newFullyQualifiedTypeName: `org.springdoc.core.models.GroupedOpenApi`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springdoc.core.customizers.OpenApiCustomiser`
  * newFullyQualifiedTypeName: `org.springdoc.core.customizers.OpenApiCustomizer`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springdoc.core.Constants`
  * newFullyQualifiedTypeName: `org.springdoc.core.utils.Constants`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springdoc.core.SwaggerUiConfigParameters`
  * newFullyQualifiedTypeName: `org.springdoc.core.properties.SwaggerUiConfigParameters`
* [Change method name](../../java/changemethodname)
  * methodPattern: `org.springdoc.core.models.GroupedOpenApi.Builder addOpenApiCustomiser(..)`
  * newMethodName: `addOpenApiCustomizer`
  * matchOverrides: `true`
* [Remove a Gradle or Maven dependency](../../java/dependencies/removedependency)
  * groupId: `org.springdoc`
  * artifactId: `springdoc-openapi-data-rest`
* [Remove a Gradle or Maven dependency](../../java/dependencies/removedependency)
  * groupId: `org.springdoc`
  * artifactId: `springdoc-openapi-groovy`
* [Remove a Gradle or Maven dependency](../../java/dependencies/removedependency)
  * groupId: `org.springdoc`
  * artifactId: `springdoc-openapi-hateoas`
* [Remove a Gradle or Maven dependency](../../java/dependencies/removedependency)
  * groupId: `org.springdoc`
  * artifactId: `springdoc-openapi-javadoc`
* [Remove a Gradle or Maven dependency](../../java/dependencies/removedependency)
  * groupId: `org.springdoc`
  * artifactId: `springdoc-openapi-kotlin`
* [Remove a Gradle or Maven dependency](../../java/dependencies/removedependency)
  * groupId: `org.springdoc`
  * artifactId: `springdoc-openapi-security`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-common`
  * newArtifactId: `springdoc-openapi-starter-common`
  * newVersion: `2.1.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-webmvc-core`
  * newArtifactId: `springdoc-openapi-starter-webmvc-api`
  * newVersion: `2.1.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-webflux-core`
  * newArtifactId: `springdoc-openapi-starter-webflux-api`
  * newVersion: `2.1.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-ui`
  * newArtifactId: `springdoc-openapi-starter-webmvc-ui`
  * newVersion: `2.1.x`
* [Change Gradle or Maven dependency](../../java/dependencies/changedependency)
  * oldGroupId: `org.springdoc`
  * oldArtifactId: `springdoc-openapi-webflux-ui`
  * newArtifactId: `springdoc-openapi-starter-webflux-ui`
  * newVersion: `2.1.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `org.springdoc`
  * artifactId: `*`
  * newVersion: `2.1.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.springdoc.UpgradeSpringDoc_2
displayName: Upgrade SpringDoc
description: |
  Upgrade to SpringDoc v2, as described in the [upgrade guide](https://springdoc.org/#migrating-from-springdoc-v1).
tags:
  - springdoc
recipeList:
  - org.openrewrite.openapi.swagger.UseJakartaSwaggerArtifacts
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
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.springdoc.core.models.GroupedOpenApi.Builder addOpenApiCustomiser(..)
      newMethodName: addOpenApiCustomizer
      matchOverrides: true
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springdoc
      artifactId: springdoc-openapi-data-rest
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springdoc
      artifactId: springdoc-openapi-groovy
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springdoc
      artifactId: springdoc-openapi-hateoas
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springdoc
      artifactId: springdoc-openapi-javadoc
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springdoc
      artifactId: springdoc-openapi-kotlin
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springdoc
      artifactId: springdoc-openapi-security
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-common
      newArtifactId: springdoc-openapi-starter-common
      newVersion: 2.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-webmvc-core
      newArtifactId: springdoc-openapi-starter-webmvc-api
      newVersion: 2.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-webflux-core
      newArtifactId: springdoc-openapi-starter-webflux-api
      newVersion: 2.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-ui
      newArtifactId: springdoc-openapi-starter-webmvc-ui
      newVersion: 2.1.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springdoc
      oldArtifactId: springdoc-openapi-webflux-ui
      newArtifactId: springdoc-openapi-starter-webflux-ui
      newVersion: 2.1.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springdoc
      artifactId: "*"
      newVersion: 2.1.x

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.springdoc.UpgradeSpringDoc_2")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.springdoc.UpgradeSpringDoc_2")
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
            <recipe>org.openrewrite.java.springdoc.UpgradeSpringDoc_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.springdoc.UpgradeSpringDoc_2 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeSpringDoc_2
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.springdoc.UpgradeSpringDoc_2" />

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

