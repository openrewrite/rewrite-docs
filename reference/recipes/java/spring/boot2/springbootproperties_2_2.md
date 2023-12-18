# Migrate Spring Boot properties to 2.2

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_2**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-22-properties.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.1.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.1.6

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.1.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.1.6")
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
    dependencies { classpath("org.openrewrite:plugin:6.6.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.1.6")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_2")
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
        <version>5.16.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.1.6</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_2
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe SpringBootProperties_2_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.date-format`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.extended-format`
  * newPropertyKey: `server.jetty.accesslog.format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.locale`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-cookies`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-latency`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-server`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.time-zone`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.jmx-enabled`
  * newPropertyKey: `spring.datasource.tomcat.jmx-enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.reactor.stacktrace-mode.enabled`
  * newPropertyKey: `spring.reactor.debug-agent.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.use-forward-headers`
  * newPropertyKey: `server.forward-headers-strategy`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.jackson.joda-date-time-format`
  * newPropertyKey: `dateFormat`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.rabbitmq.listener.simple.transaction-size`
  * newPropertyKey: `spring.rabbitmq.listener.simple.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.rabbitmq.publisher-confirms`
  * newPropertyKey: `spring.rabbitmq.publisher-confirm-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
  * except: `[.+]`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.path`
  * newPropertyKey: `logging.file.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.health.status.http-mapping`
  * newPropertyKey: `management.endpoint.health.status.http-mapping`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.health.status.order`
  * newPropertyKey: `management.endpoint.health.status.order`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.web.client.requests-metric-name`
  * newPropertyKey: `management.metrics.web.client.request.metric-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.auto-time-requests`
  * newPropertyKey: `management.metrics.web.server.request.autotime.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.requests-metric-name`
  * newPropertyKey: `management.metrics.web.server.request.metric-name`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_2
displayName: Migrate Spring Boot properties to 2.2
description: Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.date-format
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.extended-format
      newPropertyKey: server.jetty.accesslog.format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.locale
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-cookies
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-latency
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-server
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.accesslog.time-zone
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.jmx-enabled
      newPropertyKey: spring.datasource.tomcat.jmx-enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.reactor.stacktrace-mode.enabled
      newPropertyKey: spring.reactor.debug-agent.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.use-forward-headers
      newPropertyKey: server.forward-headers-strategy
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.jackson.joda-date-time-format
      newPropertyKey: dateFormat
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.rabbitmq.listener.simple.transaction-size
      newPropertyKey: spring.rabbitmq.listener.simple.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.rabbitmq.publisher-confirms
      newPropertyKey: spring.rabbitmq.publisher-confirm-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file
      newPropertyKey: logging.file.name
      except: [.+]
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.path
      newPropertyKey: logging.file.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.health.status.http-mapping
      newPropertyKey: management.endpoint.health.status.http-mapping
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.health.status.order
      newPropertyKey: management.endpoint.health.status.order
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.client.requests-metric-name
      newPropertyKey: management.metrics.web.client.request.metric-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.server.auto-time-requests
      newPropertyKey: management.metrics.web.server.request.autotime.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.server.requests-metric-name
      newPropertyKey: management.metrics.web.server.request.metric-name

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com)
