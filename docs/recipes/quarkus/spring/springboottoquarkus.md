---
sidebar_label: "Migrate Spring Boot to Quarkus"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Spring Boot to Quarkus

**org.openrewrite.quarkus.spring.SpringBootToQuarkus**

_Replace Spring Boot with Quarkus._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [bom](/reference/recipes-by-tag#bom)
* [quarkus](/reference/recipes-by-tag#quarkus)
* [migration](/reference/recipes-by-tag#migration)

## Recipe source

[GitHub: spring-boot-to-quarkus.yml](https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/spring-boot-to-quarkus.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring-to-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring-to-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add managed Maven dependency](../../maven/addmanageddependency)
  * groupId: `io.quarkus.platform`
  * artifactId: `quarkus-bom`
  * version: `3.x`
  * scope: `import`
  * type: `pom`
  * addToRootPom: `false`
* [Add or replace Spring Boot build plugin with Quarkus build plugin](../../quarkus/spring/migratemavenplugin)
* [Migrate database drivers to Quarkus JDBC extensions](../../quarkus/spring/migratedatabasedrivers)
* [Replace Spring Boot starter dependencies with Quarkus equivalents](../../quarkus/spring/migratebootstarters)
* [Replace `SpringApplication.run()` with `Quarkus.run()`](../../quarkus/spring/springapplicationruntoquarkusrun)
* [Replace `@SpringBootApplication` with Quarkus equivalent](../../quarkus/spring/replacespringbootapplication)
* [Migrate `@EnableXyz` annotations to Quarkus extensions](../../quarkus/spring/enableannotationstoquarkusdependencies)
* [Add Spring compatibility extensions for commonly used annotations](../../quarkus/spring/addspringcompatibilityextensions)
* [Convert Spring `ResponseEntity` to JAX-RS `Response`](../../quarkus/spring/responseentitytojaxrsresponse)
* [Migrate Spring annotations to CDI](../../quarkus/spring/stereotypeannotationstocdi)
* [Replace Spring `@Value` with CDI `@ConfigProperty`](../../quarkus/spring/valuetocdiconfigproperty)
* [Convert Spring Web annotations to JAX-RS](../../quarkus/spring/webtojaxrs)
* [Remove Spring Boot 3.x parent POM](../../quarkus/spring/removespringbootparent)
* [Migrate Spring Validation to Quarkus](../../quarkus/spring/migratespringvalidation)
* [Migrate Spring Boot Actuator to Quarkus Health and Metrics](../../quarkus/spring/migratespringactuator)
* [Migrate Spring Boot Testing to Quarkus Testing](../../quarkus/spring/migratespringtesting)
* [Migrate @ConfigurationProperties to Quarkus @ConfigMapping](../../quarkus/spring/migrateconfigurationproperties)
* [Migrate Spring @Transactional to Jakarta @Transactional](../../quarkus/spring/migratespringtransactional)
* [Migrate Spring Events to CDI Events](../../quarkus/spring/migratespringevents)
* [Migrate JPA Entities to Panache Entities](../../quarkus/spring/migrateentitiestopanache)
* [Migrate Spring Data MongoDB to Quarkus Panache MongoDB](../../quarkus/spring/migratespringdatamongodb)
* [Migrate Spring Cloud Config Client to Quarkus Config](../../quarkus/spring/migratespringcloudconfig)
* [Migrate Additional Spring Web Parameter Annotations](../../quarkus/spring/migraterequestparameteredgecases)
* [Migrate Spring Cloud Service Discovery to Quarkus](../../quarkus/spring/migratespringcloudservicediscovery)
* [Remove Spring Boot DevTools](../../quarkus/spring/migratespringbootdevtools)
* [Customize Quarkus BOM Version](../../quarkus/spring/customizequarkusversion)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.spring.SpringBootToQuarkus
displayName: Migrate Spring Boot to Quarkus
description: |
  Replace Spring Boot with Quarkus.
tags:
  - spring
  - bom
  - quarkus
  - migration
recipeList:
  - org.openrewrite.maven.AddManagedDependency:
      groupId: io.quarkus.platform
      artifactId: quarkus-bom
      version: 3.x
      scope: import
      type: pom
      addToRootPom: false
  - org.openrewrite.quarkus.spring.MigrateMavenPlugin
  - org.openrewrite.quarkus.spring.MigrateDatabaseDrivers
  - org.openrewrite.quarkus.spring.MigrateBootStarters
  - org.openrewrite.quarkus.spring.SpringApplicationRunToQuarkusRun
  - org.openrewrite.quarkus.spring.ReplaceSpringBootApplication
  - org.openrewrite.quarkus.spring.EnableAnnotationsToQuarkusDependencies
  - org.openrewrite.quarkus.spring.AddSpringCompatibilityExtensions
  - org.openrewrite.quarkus.spring.ResponseEntityToJaxRsResponse
  - org.openrewrite.quarkus.spring.StereotypeAnnotationsToCDI
  - org.openrewrite.quarkus.spring.ValueToCdiConfigProperty
  - org.openrewrite.quarkus.spring.WebToJaxRs
  - org.openrewrite.quarkus.spring.RemoveSpringBootParent
  - org.openrewrite.quarkus.spring.MigrateSpringValidation
  - org.openrewrite.quarkus.spring.MigrateSpringActuator
  - org.openrewrite.quarkus.spring.MigrateSpringTesting
  - org.openrewrite.quarkus.spring.MigrateConfigurationProperties
  - org.openrewrite.quarkus.spring.MigrateSpringTransactional
  - org.openrewrite.quarkus.spring.MigrateSpringEvents
  - org.openrewrite.quarkus.spring.MigrateEntitiesToPanache
  - org.openrewrite.quarkus.spring.MigrateSpringDataMongodb
  - org.openrewrite.quarkus.spring.MigrateSpringCloudConfig
  - org.openrewrite.quarkus.spring.MigrateRequestParameterEdgeCases
  - org.openrewrite.quarkus.spring.MigrateSpringCloudServiceDiscovery
  - org.openrewrite.quarkus.spring.MigrateSpringBootDevTools
  - org.openrewrite.quarkus.spring.CustomizeQuarkusVersion

```
</TabItem>
</Tabs>
## Examples
##### Example 1
`SpringBootToQuarkusTest#migrateSpringBootParentToQuarkusBOM`


###### Unchanged
```mavenProject
project
```

###### Unchanged
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
    </parent>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

---

##### Example 2
`SpringBootToQuarkusTest#migrateSpringBootParentToQuarkusBOM`


###### Unchanged
```mavenProject
project
```

###### Unchanged
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
    </parent>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```


## Usage

<RunRecipe
  recipeName="org.openrewrite.quarkus.spring.SpringBootToQuarkus"
  displayName="Migrate Spring Boot to Quarkus"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring-to-quarkus"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.SpringBootToQuarkus" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
