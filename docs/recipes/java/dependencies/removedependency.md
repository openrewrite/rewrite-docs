---
sidebar_label: "Remove a Gradle or Maven dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Remove a Gradle or Maven dependency

**org.openrewrite.java.dependencies.RemoveDependency**

_For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`. For Maven project, removes a single dependency from the `<dependencies>` section of the pom.xml._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/RemoveDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.fasterxml.jackson*` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `jackson-module*` |
| `String` | unlessUsing | *Optional*. Do not remove if type is in use. Supports glob expressions. | `org.aspectj.lang.*` |
| `String` | configuration | *Optional*. The dependency configuration to remove from. | `api` |
| `String` | scope | *Optional*. Only remove dependencies if they are in this scope. If 'runtime', this willalso remove dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set Valid options: `compile`, `test`, `runtime`, `provided` | `compile` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add explicit JAX-WS dependencies](/recipes/java/migrate/javax/addjaxwsdependencies.md)
* [Add explicit JAXB API dependencies and remove runtimes](/recipes/java/migrate/javax/addjaxbdependencieswithoutruntime.md)
* [Add explicit JAXB API dependencies](/recipes/java/migrate/javax/addjaxbapidependencies.md)
* [JUnit 6 migration from JUnit 5.x](/recipes/java/testing/junit6/junit5to6migration.md)
* [JUnit Jupiter migration from JUnit 4.x](/recipes/java/testing/junit5/junit4to5migration.md)
* [Migrate Google Truth to AssertJ](/recipes/java/testing/truth/migratetruthtoassertj.md)
* [Migrate Hibernate dependencies to 6.0.x](/recipes/hibernate/migratetohibernatedependencies60.md)
* [Migrate JBoss Logging to SLF4J](/recipes/java/logging/slf4j/jbossloggingtoslf4j.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 2.x to Logback](/recipes/java/logging/logback/log4jtologback.md)
* [Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0](/recipes/java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md)
* [Migrate from EasyMock to Mockito](/recipes/java/testing/easymock/easymocktomockito.md)
* [Migrate from JMockit to Mockito](/recipes/java/testing/jmockit/jmockittomockito.md)
* [Migrate from Swagger to SpringDoc and OpenAPI](/recipes/java/springdoc/swaggertospringdoc.md)
* [Migrate from httpcore-nio to ApacheHttpClient 5.x core dependency](/recipes/apache/httpclient5/upgradeapachehttpcoreniodependencies.md)
* [Migrate from org.apache.httpcomponents to ApacheHttpClient 5.x dependencies](/recipes/apache/httpclient5/upgradeapachehttpclientdependencies.md)
* [Migrate to Hibernate 7.0.x](/recipes/hibernate/migratetohibernate70.md)
* [Migrate to Spring Boot 4.0 (Moderne Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-moderne-edition.md)
* [Migrate to Spring Boot 4.0 modular starters](/recipes/java/spring/boot4/migratetomodularstarters.md)
* [Migrate to Spring Framework 5.3](/recipes/java/spring/framework/upgradespringframework_5_3.md)
* [Modernize a Jenkins plugin to the latest recommended versions](/recipes/jenkins/modernizeplugin.md)
* [Remove Jackson 2.x modules included in jackson-databind in 3.x.](/recipes/java/jackson/upgradejackson_2_3_removemodules.md)
* [Remove JavaEE dependencies](/recipes/quarkus/migrate/javaee/removejavaeedependencies.md)
* [Remove `jakarta.annotation-api` dependency when managed by Spring Boot](/recipes/java/migrate/jakarta/removejakartaannotationdependencywhenmanagedbyspringboot.md)
* [Remove unnecessary dependencies](/recipes/java/micronaut/removeunnecessarydependencies.md)
* [Replace Derby test driver with Quarkus JDBC Derby (test scope)](/recipes/quarkus/spring/derbytestdrivertoquarkus.md)
* [Replace H2 test driver with Quarkus JDBC H2 (test scope)](/recipes/quarkus/spring/h2testdrivertoquarkus.md)
* [Replace PowerMock with raw Mockito](/recipes/java/testing/mockito/replacepowermockito.md)
* [Replace Spring Boot AMQP with Quarkus Messaging AMQP](/recipes/quarkus/spring/springbootamqptoquarkusreactive.md)
* [Replace Spring Boot AMQP with Quarkus Messaging RabbitMQ](/recipes/quarkus/spring/springbootamqptoquarkusclassic.md)
* [Replace Spring Boot ActiveMQ with Quarkus Artemis JMS](/recipes/quarkus/spring/springbootactivemqtoquarkus.md)
* [Replace Spring Boot Actuator with Quarkus SmallRye Health](/recipes/quarkus/spring/springbootactuatortoquarkus.md)
* [Replace Spring Boot Artemis with Quarkus Artemis JMS](/recipes/quarkus/spring/springbootartemistoquarkus.md)
* [Replace Spring Boot Batch with Quarkus Scheduler](/recipes/quarkus/spring/springbootbatchtoquarkus.md)
* [Replace Spring Boot Cache with Quarkus Cache](/recipes/quarkus/spring/springbootcachetoquarkus.md)
* [Replace Spring Boot Data JPA with Quarkus Hibernate ORM Panache](/recipes/quarkus/spring/springbootdatajpatoquarkus.md)
* [Replace Spring Boot Data MongoDB with Quarkus MongoDB Panache](/recipes/quarkus/spring/springbootdatamongotoquarkus.md)
* [Replace Spring Boot Data REST with Quarkus REST](/recipes/quarkus/spring/springbootdataresttoquarkus.md)
* [Replace Spring Boot Data Redis with Quarkus Redis Client](/recipes/quarkus/spring/springbootdataredistoquarkus.md)
* [Replace Spring Boot Elasticsearch with Quarkus Elasticsearch REST Client](/recipes/quarkus/spring/springbootelasticsearchtoquarkus.md)
* [Replace Spring Boot Integration with Camel Quarkus](/recipes/quarkus/spring/springbootintegrationtoquarkus.md)
* [Replace Spring Boot JDBC with Quarkus Agroal](/recipes/quarkus/spring/springbootjdbctoquarkus.md)
* [Replace Spring Boot Mail with Quarkus Mailer](/recipes/quarkus/spring/springbootmailtoquarkus.md)
* [Replace Spring Boot OAuth2 Client with Quarkus OIDC Client](/recipes/quarkus/spring/springbootoauth2clienttoquarkus.md)
* [Replace Spring Boot OAuth2 Resource Server with Quarkus OIDC](/recipes/quarkus/spring/springbootoauth2resourceservertoquarkus.md)
* [Replace Spring Boot Quartz with Quarkus Quartz](/recipes/quarkus/spring/springbootquartztoquarkus.md)
* [Replace Spring Boot Security with Quarkus Security](/recipes/quarkus/spring/springbootsecuritytoquarkus.md)
* [Replace Spring Boot Test with Quarkus JUnit 5](/recipes/quarkus/spring/springboottesttoquarkus.md)
* [Replace Spring Boot Thymeleaf with Quarkus Qute](/recipes/quarkus/spring/springbootthymeleaftoquarkus.md)
* [Replace Spring Boot Validation with Quarkus Hibernate Validator](/recipes/quarkus/spring/springbootvalidationtoquarkus.md)
* [Replace Spring Boot Web with Quarkus RESTEasy Classic](/recipes/quarkus/spring/springbootwebtoquarkusclassic.md)
* [Replace Spring Boot Web with Quarkus REST](/recipes/quarkus/spring/springbootwebtoquarkusreactive.md)
* [Replace Spring Boot WebFlux with Quarkus REST Client](/recipes/quarkus/spring/springbootwebfluxtoquarkusreactive.md)
* [Replace Spring Boot WebSocket with Quarkus WebSockets](/recipes/quarkus/spring/springbootwebsockettoquarkus.md)
* [Replace Spring Kafka with Quarkus Kafka Client](/recipes/quarkus/spring/springkafkatoquarkusclassic.md)
* [Replace Spring Kafka with Quarkus Messaging Kafka](/recipes/quarkus/spring/springkafkatoquarkusreactive.md)
* [Replace SpringFox Dependencies](/recipes/java/springdoc/replacespringfoxdependencies.md)
* [Replace `micrometer-spring-legacy` with `spring-boot-starter-actuator`](/recipes/java/spring/boot2/maybeaddspringbootstarteractuator.md)
* [Update RestLet to 2.6.0](/recipes/java/migrate/jakarta/updaterestlet2_6.md)
* [Update jakarta annotations dependency](/recipes/java/micronaut/updatejakartaannotations.md)
* [Update to Micronaut Validation 4.x](/recipes/java/micronaut/updatemicronautvalidation.md)
* [Upgrade to SpringDoc 2.1](/recipes/java/springdoc/upgradespringdoc_2.md)
* [io.quarkus.updates.core.quarkus31.RemoveMockitoInline](/recipes/io/quarkus/updates/core/quarkus31/removemockitoinline.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|groupId|`org.springframework.boot`|
|artifactId|`spring-boot*`|
|unlessUsing|`null`|
|configuration|`null`|
|scope|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web:2.7.0") {
        exclude group: "junit"
    }
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
}
```

###### After
```groovy title="build.gradle"
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,3 +10,0 @@

dependencies {
-   implementation("org.springframework.boot:spring-boot-starter-web:2.7.0") {
-       exclude group: "junit"
-   }
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveDependencyExample
displayName: Remove a Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      unlessUsing: org.aspectj.lang.*
      configuration: api
      scope: compile
```

Now that `com.yourorg.RemoveDependencyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.RemoveDependencyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}")
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.RemoveDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe RemoveDependency --recipe-option "groupId=com.fasterxml.jackson*" --recipe-option "artifactId=jackson-module*" --recipe-option "unlessUsing=org.aspectj.lang.*" --recipe-option "configuration=api" --recipe-option "scope=compile"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveDependency" />

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
