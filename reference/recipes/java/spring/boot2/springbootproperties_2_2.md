# Migrate Spring Boot properties to 2.2

** org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_2**
_Migrate properties found in `application.properties` and `application.yml`._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.12.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.12.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.12.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.12.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.12.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.12.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBootProperties_2_2`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `logging.path`
  * newPropertyKey: `logging.file.path`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `logging.path`
  * newPropertyKey: `logging.file.path`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.date-format`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.date-format`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.extended-format`
  * newPropertyKey: `server.jetty.accesslog.format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.extended-format`
  * newPropertyKey: `server.jetty.accesslog.format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.locale`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.locale`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-cookies`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-cookies`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-latency`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-latency`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-server`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.log-server`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.time-zone`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.accesslog.time-zone`
  * newPropertyKey: `server.jetty.accesslog.custom-format`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.tomcat.max-http-header-size`
  * newPropertyKey: `server.max-http-header-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.tomcat.max-http-header-size`
  * newPropertyKey: `server.max-http-header-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.datasource.jmx-enabled`
  * newPropertyKey: `spring.datasource.tomcat.jmx-enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.datasource.jmx-enabled`
  * newPropertyKey: `spring.datasource.tomcat.jmx-enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.streams.cache-max-bytes-buffering`
  * newPropertyKey: `spring.kafka.streams.cache-max-size-buffering`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.streams.cache-max-bytes-buffering`
  * newPropertyKey: `spring.kafka.streams.cache-max-size-buffering`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.rabbitmq.template.queue`
  * newPropertyKey: `spring.rabbitmq.template.default-receive-queue`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.rabbitmq.template.queue`
  * newPropertyKey: `spring.rabbitmq.template.default-receive-queue`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.reactor.stacktrace-mode.enabled`
  * newPropertyKey: `spring.reactor.debug-agent.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.reactor.stacktrace-mode.enabled`
  * newPropertyKey: `spring.reactor.debug-agent.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.endpoints.jmx.unique-names`
  * newPropertyKey: `spring.jmx.unique-names`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.endpoints.jmx.unique-names`
  * newPropertyKey: `spring.jmx.unique-names`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_2
displayName: Migrate Spring Boot properties to 2.2
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.file
      newPropertyKey: logging.file.name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.file
      newPropertyKey: logging.file.name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: logging.path
      newPropertyKey: logging.file.path
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: logging.path
      newPropertyKey: logging.file.path
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.date-format
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.date-format
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.extended-format
      newPropertyKey: server.jetty.accesslog.format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.extended-format
      newPropertyKey: server.jetty.accesslog.format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.locale
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.locale
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-cookies
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-cookies
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-latency
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-latency
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-server
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.log-server
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.time-zone
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.accesslog.time-zone
      newPropertyKey: server.jetty.accesslog.custom-format
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.tomcat.max-http-header-size
      newPropertyKey: server.max-http-header-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.tomcat.max-http-header-size
      newPropertyKey: server.max-http-header-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.datasource.jmx-enabled
      newPropertyKey: spring.datasource.tomcat.jmx-enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.datasource.jmx-enabled
      newPropertyKey: spring.datasource.tomcat.jmx-enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.kafka.streams.cache-max-bytes-buffering
      newPropertyKey: spring.kafka.streams.cache-max-size-buffering
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.kafka.streams.cache-max-bytes-buffering
      newPropertyKey: spring.kafka.streams.cache-max-size-buffering
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.rabbitmq.template.queue
      newPropertyKey: spring.rabbitmq.template.default-receive-queue
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.rabbitmq.template.queue
      newPropertyKey: spring.rabbitmq.template.default-receive-queue
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.reactor.stacktrace-mode.enabled
      newPropertyKey: spring.reactor.debug-agent.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.reactor.stacktrace-mode.enabled
      newPropertyKey: spring.reactor.debug-agent.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.endpoints.jmx.unique-names
      newPropertyKey: spring.jmx.unique-names
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.endpoints.jmx.unique-names
      newPropertyKey: spring.jmx.unique-names

```
{% endtab %}
{% endtabs %}
