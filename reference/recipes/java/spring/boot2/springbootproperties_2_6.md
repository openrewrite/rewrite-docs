# Migrate Spring Boot properties to 2.6

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_6**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-26-properties.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.20.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.device-id`
  * newPropertyKey: `management.metrics.export.dynatrace.v1.device-id`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.group`
  * newPropertyKey: `management.metrics.export.dynatrace.v1.group`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.technology-type`
  * newPropertyKey: `management.metrics.export.dynatrace.v1.technology-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.connection-timeout`
  * newPropertyKey: `spring.elasticsearch.connection-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.endpoints`
  * newPropertyKey: `spring.elasticsearch.uris`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.max-in-memory-size`
  * newPropertyKey: `spring.elasticsearch.webclient.max-in-memory-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.password`
  * newPropertyKey: `spring.elasticsearch.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.socket-timeout`
  * newPropertyKey: `spring.elasticsearch.socket-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.elasticsearch.client.reactive.username`
  * newPropertyKey: `spring.elasticsearch.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.connection-timeout`
  * newPropertyKey: `spring.elasticsearch.connection-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.password`
  * newPropertyKey: `spring.elasticsearch.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.read-timeout`
  * newPropertyKey: `spring.elasticsearch.socket-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.sniffer.delay-after-failure`
  * newPropertyKey: `spring.elasticsearch.restclient.sniffer.delay-after-failure`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.sniffer.interval`
  * newPropertyKey: `spring.elasticsearch.restclient.sniffer.interval`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.uris`
  * newPropertyKey: `spring.elasticsearch.uris`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.elasticsearch.rest.username`
  * newPropertyKey: `spring.elasticsearch.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.ignore-future-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.ignore-ignored-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.ignore-missing-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.ignore-pending-migrations`
  * newPropertyKey: `spring.flyway.ignore-migration-patterns`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.oracle-kerberos-config-file`
  * newPropertyKey: `spring.flyway.kerberos-config-file`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.webflux.session.cookie.same-site`
  * newPropertyKey: `server.reactive.session.cookie.same-site`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_6
displayName: Migrate Spring Boot properties to 2.6
description: Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.device-id
      newPropertyKey: management.metrics.export.dynatrace.v1.device-id
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.group
      newPropertyKey: management.metrics.export.dynatrace.v1.group
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.technology-type
      newPropertyKey: management.metrics.export.dynatrace.v1.technology-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.connection-timeout
      newPropertyKey: spring.elasticsearch.connection-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.endpoints
      newPropertyKey: spring.elasticsearch.uris
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.max-in-memory-size
      newPropertyKey: spring.elasticsearch.webclient.max-in-memory-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.password
      newPropertyKey: spring.elasticsearch.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.socket-timeout
      newPropertyKey: spring.elasticsearch.socket-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.elasticsearch.client.reactive.username
      newPropertyKey: spring.elasticsearch.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.connection-timeout
      newPropertyKey: spring.elasticsearch.connection-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.password
      newPropertyKey: spring.elasticsearch.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.read-timeout
      newPropertyKey: spring.elasticsearch.socket-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.sniffer.delay-after-failure
      newPropertyKey: spring.elasticsearch.restclient.sniffer.delay-after-failure
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.sniffer.interval
      newPropertyKey: spring.elasticsearch.restclient.sniffer.interval
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.uris
      newPropertyKey: spring.elasticsearch.uris
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.elasticsearch.rest.username
      newPropertyKey: spring.elasticsearch.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-future-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-ignored-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-missing-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.ignore-pending-migrations
      newPropertyKey: spring.flyway.ignore-migration-patterns
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.oracle-kerberos-config-file
      newPropertyKey: spring.flyway.kerberos-config-file
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.webflux.session.cookie.same-site
      newPropertyKey: server.reactive.session.cookie.same-site

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_6")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_6")
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
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_6</recipe>
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
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_6 -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe SpringBootProperties_2_6
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_6)

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
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Patrick](mailto:patway99@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com)
