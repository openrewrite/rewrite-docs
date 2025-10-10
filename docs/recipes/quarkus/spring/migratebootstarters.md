---
sidebar_label: "Replace Spring Boot starter dependencies with Quarkus equivalents"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Replace Spring Boot starter dependencies with Quarkus equivalents

**org.openrewrite.quarkus.spring.MigrateBootStarters**

_Migrates Spring Boot starter dependencies to their Quarkus equivalents, removing version tags as Quarkus manages versions through its BOM._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [quarkus](/reference/recipes-by-tag#quarkus)
* [migration](/reference/recipes-by-tag#migration)
* [dependencies](/reference/recipes-by-tag#dependencies)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring-to-quarkus/blob/main/src/main/resources/META-INF/rewrite/boot-starters.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring-to-quarkus/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring-to-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace Spring Boot Web with Quarkus REST](../../quarkus/spring/springbootwebtoquarkusreactive)
* [Replace Spring Boot Web with Quarkus RESTEasy Classic](../../quarkus/spring/springbootwebtoquarkusclassic)
* [Replace Spring Boot Data JPA with Quarkus Hibernate ORM Panache](../../quarkus/spring/springbootdatajpatoquarkus)
* [Replace Spring Boot Security with Quarkus Security](../../quarkus/spring/springbootsecuritytoquarkus)
* [Replace Spring Boot Validation with Quarkus Hibernate Validator](../../quarkus/spring/springbootvalidationtoquarkus)
* [Replace Spring Boot Test with Quarkus JUnit 5](../../quarkus/spring/springboottesttoquarkus)
* [Replace Spring Boot Actuator with Quarkus SmallRye Health](../../quarkus/spring/springbootactuatortoquarkus)
* [Replace Spring Boot WebSocket with Quarkus WebSockets](../../quarkus/spring/springbootwebsockettoquarkus)
* [Replace Spring Boot Cache with Quarkus Cache](../../quarkus/spring/springbootcachetoquarkus)
* [Replace Spring Boot Data MongoDB with Quarkus MongoDB Panache](../../quarkus/spring/springbootdatamongotoquarkus)
* [Replace Spring Boot Data Redis with Quarkus Redis Client](../../quarkus/spring/springbootdataredistoquarkus)
* [Replace Spring Boot AMQP with Quarkus Messaging AMQP](../../quarkus/spring/springbootamqptoquarkusreactive)
* [Replace Spring Boot AMQP with Quarkus Messaging RabbitMQ](../../quarkus/spring/springbootamqptoquarkusclassic)
* [Replace Spring Kafka with Quarkus Messaging Kafka](../../quarkus/spring/springkafkatoquarkusreactive)
* [Replace Spring Kafka with Quarkus Kafka Client](../../quarkus/spring/springkafkatoquarkusclassic)
* [Replace Spring Boot OAuth2 Resource Server with Quarkus OIDC](../../quarkus/spring/springbootoauth2resourceservertoquarkus)
* [Replace Spring Boot OAuth2 Client with Quarkus OIDC Client](../../quarkus/spring/springbootoauth2clienttoquarkus)
* [Replace Spring Boot JDBC with Quarkus Agroal](../../quarkus/spring/springbootjdbctoquarkus)
* [Replace Spring Boot Mail with Quarkus Mailer](../../quarkus/spring/springbootmailtoquarkus)
* [Replace Spring Boot Batch with Quarkus Scheduler](../../quarkus/spring/springbootbatchtoquarkus)
* [Replace Spring Boot Thymeleaf with Quarkus Qute](../../quarkus/spring/springbootthymeleaftoquarkus)
* [Replace Spring Boot Quartz with Quarkus Quartz](../../quarkus/spring/springbootquartztoquarkus)
* [Replace Spring Boot Integration with Camel Quarkus](../../quarkus/spring/springbootintegrationtoquarkus)
* [Replace Spring Boot ActiveMQ with Quarkus Artemis JMS](../../quarkus/spring/springbootactivemqtoquarkus)
* [Replace Spring Boot Artemis with Quarkus Artemis JMS](../../quarkus/spring/springbootartemistoquarkus)
* [Replace Spring Boot Elasticsearch with Quarkus Elasticsearch REST Client](../../quarkus/spring/springbootelasticsearchtoquarkus)
* [Replace Spring Boot Data REST with Quarkus REST](../../quarkus/spring/springbootdataresttoquarkus)
* [Replace Spring Boot WebFlux with Quarkus REST Client](../../quarkus/spring/springbootwebfluxtoquarkusreactive)
* [Remove redundant explicit dependency and plugin versions](../../maven/removeredundantdependencyversions)
  * onlyIfManagedVersionIs: `ANY`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.spring.MigrateBootStarters
displayName: Replace Spring Boot starter dependencies with Quarkus equivalents
description: |
  Migrates Spring Boot starter dependencies to their Quarkus equivalents, removing version tags as Quarkus manages versions through its BOM.
tags:
  - spring
  - quarkus
  - migration
  - dependencies
recipeList:
  - org.openrewrite.quarkus.spring.SpringBootWebToQuarkusReactive
  - org.openrewrite.quarkus.spring.SpringBootWebToQuarkusClassic
  - org.openrewrite.quarkus.spring.SpringBootDataJpaToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootSecurityToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootValidationToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootTestToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootActuatorToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootWebSocketToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootCacheToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootDataMongoToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootDataRedisToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootAmqpToQuarkusReactive
  - org.openrewrite.quarkus.spring.SpringBootAmqpToQuarkusClassic
  - org.openrewrite.quarkus.spring.SpringKafkaToQuarkusReactive
  - org.openrewrite.quarkus.spring.SpringKafkaToQuarkusClassic
  - org.openrewrite.quarkus.spring.SpringBootOAuth2ResourceServerToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootOAuth2ClientToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootJdbcToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootMailToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootBatchToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootThymeleafToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootQuartzToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootIntegrationToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootActiveMQToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootArtemisToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootElasticsearchToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootDataRestToQuarkus
  - org.openrewrite.quarkus.spring.SpringBootWebFluxToQuarkusReactive
  - org.openrewrite.maven.RemoveRedundantDependencyVersions:
      onlyIfManagedVersionIs: ANY

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring Boot to Quarkus](/recipes/quarkus/spring/springboottoquarkus.md)

## Examples
##### Example 1
`MigrateBootStartersTest#migrateWebWithoutReactor`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.quarkus</groupId>
            <artifactId>quarkus-resteasy-jackson</artifactId>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -25,2 +25,2 @@
    <dependencies>
        <dependency>
-           <groupId>org.springframework.boot</groupId>
-           <artifactId>spring-boot-starter-web</artifactId>
+           <groupId>io.quarkus</groupId>
+           <artifactId>quarkus-resteasy-jackson</artifactId>
        </dependency>
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateBootStartersTest#migrateWebWithoutReactor`


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/>
    </parent>
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>io.quarkus.platform</groupId>
                <artifactId>quarkus-bom</artifactId>
                <version>3.26.4</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>io.quarkus</groupId>
            <artifactId>quarkus-resteasy-jackson</artifactId>
        </dependency>
    </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -25,2 +25,2 @@
    <dependencies>
        <dependency>
-           <groupId>org.springframework.boot</groupId>
-           <artifactId>spring-boot-starter-web</artifactId>
+           <groupId>io.quarkus</groupId>
+           <artifactId>quarkus-resteasy-jackson</artifactId>
        </dependency>
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring-to-quarkus` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.spring.MigrateBootStarters")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.spring.MigrateBootStarters")
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
            <recipe>org.openrewrite.quarkus.spring.MigrateBootStarters</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring-to-quarkus</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring-to-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.spring.MigrateBootStarters -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateBootStarters
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring-to-quarkus:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING_TO_QUARKUS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.spring.MigrateBootStarters" />

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
