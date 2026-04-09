---
sidebar_label: "Upgrade to SpringDoc 2.1"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Upgrade to SpringDoc 2.1

**org.openrewrite.java.springdoc.UpgradeSpringDoc\_2**

_Upgrade to SpringDoc v2.1, as described in the [upgrade guide](https://springdoc.org/#migrating-from-springdoc-v1)._

### Tags

* [springdoc](/reference/recipes-by-tag#springdoc)

## Recipe source

[GitHub: springdoc.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/springdoc.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../core/singleton)

**Recipes**

* [Migrate from Swagger to OpenAPI](../../openapi/swagger/swaggertoopenapi)
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
displayName: Upgrade to SpringDoc 2.1
description: |
  Upgrade to SpringDoc v2.1, as described in the [upgrade guide](https://springdoc.org/#migrating-from-springdoc-v1).
tags:
  - springdoc
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.openapi.swagger.SwaggerToOpenAPI
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

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)
* [Upgrade to SpringDoc 2.2](/recipes/java/springdoc/upgradespringdoc_2_2.md)

## Examples
##### Example 1
`UpgradeSpringDoc2Test#upgradeMaven`


###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi</artifactId>
            <version>1.5.13</version>
        </dependency>
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-common</artifactId>
            <version>1.5.13</version>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2
`UpgradeSpringDoc2Test#upgradeMaven`


###### Unchanged
```xml title="pom.xml"
<project>
    <modelVersion>4.0.0</modelVersion>
    <groupId>org.example</groupId>
    <artifactId>example</artifactId>
    <version>1.0-SNAPSHOT</version>
    <dependencies>
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi</artifactId>
            <version>1.5.13</version>
        </dependency>
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-common</artifactId>
            <version>1.5.13</version>
        </dependency>
    </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.springdoc.UpgradeSpringDoc_2"
  displayName="Upgrade to SpringDoc 2.1"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.springdoc.UpgradeSpringDoc_2" />

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
