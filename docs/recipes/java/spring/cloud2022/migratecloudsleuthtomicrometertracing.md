---
sidebar_label: "Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0

**org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing**

_Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x._

### Tags

* spring
* cloud
* tracing
* sleuth
* micrometer

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-cloud-2022.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.20.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Add logging.pattern.level for traceId and spanId](../../../java/spring/cloud2022/addloggingpatternlevelforsleuth)
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-starter-sleuth`
  * newGroupId: `io.micrometer`
  * newArtifactId: `micrometer-tracing-bridge-brave`
  * newVersion: `1.0.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-sleuth-otel-dependencies`
  * newGroupId: `io.micrometer`
  * newArtifactId: `micrometer-tracing-bridge-otel`
  * newVersion: `1.0.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-sleuth-api`
  * newGroupId: `io.micrometer`
  * newArtifactId: `micrometer-tracing`
  * newVersion: `1.0.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-sleuth-autoconfigure`
  * newGroupId: `org.springframework.boot`
  * newArtifactId: `spring-boot-actuator-autoconfigure`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-sleuth-otel-autoconfigure`
  * newGroupId: `org.springframework.boot`
  * newArtifactId: `spring-boot-actuator-autoconfigure`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.springframework.cloud`
  * oldArtifactId: `spring-cloud-sleuth-zipkin`
  * newGroupId: `io.zipkin.reporter2`
  * newArtifactId: `zipkin-reporter-brave`
  * newVersion: `2.16.x`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-actuator`
  * version: `3.0.x`
  * onlyIfUsing: `org.springframework.cloud.sleuth..*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `io.micrometer`
  * artifactId: `micrometer-tracing`
  * version: `1.0.x`
  * onlyIfUsing: `org.springframework.cloud.sleuth.annotation.*`
  * acceptTransitive: `true`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-aop`
  * version: `3.0.x`
  * onlyIfUsing: `org.springframework.cloud.sleuth.annotation.*`
  * acceptTransitive: `true`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-sleuth-*`
* [Remove Maven managed dependency](../../../maven/removemanageddependency)
  * groupId: `org.springframework.cloud`
  * artifactId: `spring-cloud-sleuth-*`
* [Remove redundant explicit dependency and plugin versions](../../../maven/removeredundantdependencyversions)
  * groupPattern: `io.micrometer`
  * artifactPattern: `micrometer-tracing*`
  * onlyIfVersionsMatch: `false`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.sleuth.exporter.SpanFilter`
  * newFullyQualifiedTypeName: `io.micrometer.tracing.exporter.SpanExportingPredicate`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.cloud.sleuth.exporter.SpanIgnoringSpanFilter`
  * newFullyQualifiedTypeName: `io.micrometer.tracing.exporter.SpanIgnoringSpanExportingPredicate`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.cloud.sleuth.autoconfig`
  * newPackageName: `org.springframework.boot.actuate.autoconfigure.tracing`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.cloud.sleuth`
  * newPackageName: `io.micrometer.tracing`
  * recursive: `true`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.enabled`
  * newPropertyKey: `management.tracing.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.batch.enabled`
  * newPropertyKey: `management.tracing.enabled`
* [Delete a spring configuration property](../../../java/spring/deletespringproperty)
  * propertyKey: `spring.sleuth.supports-join`
* [Delete a spring configuration property](../../../java/spring/deletespringproperty)
  * propertyKey: `spring.sleuth.trace-id128`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.propagation.type`
  * newPropertyKey: `management.tracing.propagation.type`
* [Delete a spring configuration property](../../../java/spring/deletespringproperty)
  * propertyKey: `spring.sleuth.sampler.rate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.sampler.probability`
  * newPropertyKey: `management.tracing.sampling.probability`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.baggage.remote-fields`
  * newPropertyKey: `management.tracing.baggage.remote-fields`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.propagation-keys`
  * newPropertyKey: `management.tracing.baggage.remote-fields`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.baggage.correlation-enabled`
  * newPropertyKey: `management.tracing.baggage.correlation.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sleuth.baggage.correlation-fields`
  * newPropertyKey: `management.tracing.baggage.correlation.fields`

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing
displayName: Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0
description: Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x.
tags:
  - spring
  - cloud
  - tracing
  - sleuth
  - micrometer
recipeList:
  - org.openrewrite.java.spring.cloud2022.AddLoggingPatternLevelForSleuth
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-starter-sleuth
      newGroupId: io.micrometer
      newArtifactId: micrometer-tracing-bridge-brave
      newVersion: 1.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-sleuth-otel-dependencies
      newGroupId: io.micrometer
      newArtifactId: micrometer-tracing-bridge-otel
      newVersion: 1.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-sleuth-api
      newGroupId: io.micrometer
      newArtifactId: micrometer-tracing
      newVersion: 1.0.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-sleuth-autoconfigure
      newGroupId: org.springframework.boot
      newArtifactId: spring-boot-actuator-autoconfigure
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-sleuth-otel-autoconfigure
      newGroupId: org.springframework.boot
      newArtifactId: spring-boot-actuator-autoconfigure
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.springframework.cloud
      oldArtifactId: spring-cloud-sleuth-zipkin
      newGroupId: io.zipkin.reporter2
      newArtifactId: zipkin-reporter-brave
      newVersion: 2.16.x
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-actuator
      version: 3.0.x
      onlyIfUsing: org.springframework.cloud.sleuth..*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: io.micrometer
      artifactId: micrometer-tracing
      version: 1.0.x
      onlyIfUsing: org.springframework.cloud.sleuth.annotation.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-aop
      version: 3.0.x
      onlyIfUsing: org.springframework.cloud.sleuth.annotation.*
      acceptTransitive: true
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-sleuth-*
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: org.springframework.cloud
      artifactId: spring-cloud-sleuth-*
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      groupPattern: io.micrometer
      artifactPattern: micrometer-tracing*
      onlyIfVersionsMatch: false
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.sleuth.exporter.SpanFilter
      newFullyQualifiedTypeName: io.micrometer.tracing.exporter.SpanExportingPredicate
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.cloud.sleuth.exporter.SpanIgnoringSpanFilter
      newFullyQualifiedTypeName: io.micrometer.tracing.exporter.SpanIgnoringSpanExportingPredicate
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.cloud.sleuth.autoconfig
      newPackageName: org.springframework.boot.actuate.autoconfigure.tracing
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.cloud.sleuth
      newPackageName: io.micrometer.tracing
      recursive: true
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.enabled
      newPropertyKey: management.tracing.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.batch.enabled
      newPropertyKey: management.tracing.enabled
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: spring.sleuth.supports-join
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: spring.sleuth.trace-id128
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.propagation.type
      newPropertyKey: management.tracing.propagation.type
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: spring.sleuth.sampler.rate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.sampler.probability
      newPropertyKey: management.tracing.sampling.probability
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.baggage.remote-fields
      newPropertyKey: management.tracing.baggage.remote-fields
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.propagation-keys
      newPropertyKey: management.tracing.baggage.remote-fields
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.baggage.correlation-enabled
      newPropertyKey: management.tracing.baggage.correlation.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.sleuth.baggage.correlation-fields
      newPropertyKey: management.tracing.baggage.correlation.fields

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" title="Gradle init script">
    1. Create a file named `init.gradle` in the root of your project.
    ```groovy title="init.gradle"
    initscript {
        repositories {
            maven { url "https://plugins.gradle.org/m2" }
        }
        dependencies { classpath("org.openrewrite:plugin:6.24.0") }
    }
    rootProject {
        plugins.apply(org.openrewrite.gradle.RewritePlugin)
        dependencies {
            rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
        }
        rewrite {
            activeRecipe("org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing")
            exportDatatables = true
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
<TabItem value="maven" title="Maven POM">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
    <project>
      <build>
        <plugins>
          <plugin>
            <groupId>org.openrewrite.maven</groupId>
            <artifactId>rewrite-maven-plugin</artifactId>
            <version>5.41.0</version>
            <configuration>
              <exportDatatables>true</exportDatatables>
              <activeRecipes>
                <recipe>org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing</recipe>
              </activeRecipes>
            </configuration>
            <dependencies>
              <dependency>
                <groupId>org.openrewrite.recipe</groupId>
                <artifactId>rewrite-spring</artifactId>
                <version>5.20.0</version>
              </dependency>
            </dependencies>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe MigrateCloudSleuthToMicrometerTracing
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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


## Contributors
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Patrick](mailto:patway99@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Kun Li, [Kyle Scully](mailto:scullykns@gmail.com), [Tim te Beek](mailto:timtebeek@gmail.com)