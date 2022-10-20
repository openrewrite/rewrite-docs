# Migrate Spring Boot properties to 2.3

** org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_3**
_Migrate properties found in `application.properties` and `application.yml`._

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.29.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.29.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.29.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_3")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.29.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_3</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.29.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.36.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.29.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_3
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_3`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.health.probes.enabled`
  * newPropertyKey: `management.endpoint.health.probes.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.health.probes.enabled`
  * newPropertyKey: `management.endpoint.health.probes.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.metrics.web.client.requests-metric-name`
  * newPropertyKey: `management.metrics.web.client.request.metric-name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.metrics.web.client.requests-metric-name`
  * newPropertyKey: `management.metrics.web.client.request.metric-name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.auto-time-requests`
  * newPropertyKey: `management.metrics.web.server.request.autotime.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.auto-time-requests`
  * newPropertyKey: `management.metrics.web.server.request.autotime.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.requests-metric-name`
  * newPropertyKey: `management.metrics.web.server.request.metric-name`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.requests-metric-name`
  * newPropertyKey: `management.metrics.web.server.request.metric-name`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.jetty.max-http-post-size`
  * newPropertyKey: `server.jetty.max-http-form-post-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.jetty.max-http-post-size`
  * newPropertyKey: `server.jetty.max-http-form-post-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.tomcat.max-http-post-size`
  * newPropertyKey: `server.tomcat.max-http-form-post-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.tomcat.max-http-post-size`
  * newPropertyKey: `server.tomcat.max-http-form-post-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.use-forward-headers`
  * newPropertyKey: `server.forward-headers-strategy`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.use-forward-headers`
  * newPropertyKey: `server.forward-headers-strategy`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.bootstrap-hosts`
  * newPropertyKey: `spring.couchbase.connection-string`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.bootstrap-hosts`
  * newPropertyKey: `spring.couchbase.connection-string`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.queryservice.max-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.max-endpoints`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.queryservice.max-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.max-endpoints`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.queryservice.min-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.min-endpoints`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.queryservice.min-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.min-endpoints`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.viewservice.max-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.max-endpoints`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.viewservice.max-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.max-endpoints`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.viewservice.min-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.min-endpoints`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.viewservice.min-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.min-endpoints`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.pool.max-queue-size`
  * newPropertyKey: `spring.data.cassandra.request.throttler.max-queue-size`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.pool.max-queue-size`
  * newPropertyKey: `spring.data.cassandra.request.throttler.max-queue-size`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.converters.preferred-json-mapper`
  * newPropertyKey: `spring.mvc.converters.preferred-json-mapper`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.converters.preferred-json-mapper`
  * newPropertyKey: `spring.mvc.converters.preferred-json-mapper`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.charset`
  * newPropertyKey: `server.servlet.encoding.charset`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.charset`
  * newPropertyKey: `server.servlet.encoding.charset`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.enabled`
  * newPropertyKey: `server.servlet.encoding.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.enabled`
  * newPropertyKey: `server.servlet.encoding.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.force`
  * newPropertyKey: `server.servlet.encoding.force`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.force`
  * newPropertyKey: `server.servlet.encoding.force`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.force-request`
  * newPropertyKey: `server.servlet.encoding.force-request`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.force-request`
  * newPropertyKey: `server.servlet.encoding.force-request`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.force-response`
  * newPropertyKey: `server.servlet.encoding.force-response`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.force-response`
  * newPropertyKey: `server.servlet.encoding.force-response`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.mapping`
  * newPropertyKey: `server.servlet.encoding.mapping`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.encoding.mapping`
  * newPropertyKey: `server.servlet.encoding.mapping`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.http.log-request-details`
  * newPropertyKey: `spring.mvc.log-request-details`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.http.log-request-details`
  * newPropertyKey: `spring.mvc.log-request-details`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_3
displayName: Migrate Spring Boot properties to 2.3
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.health.probes.enabled
      newPropertyKey: management.endpoint.health.probes.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.health.probes.enabled
      newPropertyKey: management.endpoint.health.probes.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.metrics.web.client.requests-metric-name
      newPropertyKey: management.metrics.web.client.request.metric-name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.metrics.web.client.requests-metric-name
      newPropertyKey: management.metrics.web.client.request.metric-name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.metrics.web.server.auto-time-requests
      newPropertyKey: management.metrics.web.server.request.autotime.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.metrics.web.server.auto-time-requests
      newPropertyKey: management.metrics.web.server.request.autotime.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: management.metrics.web.server.requests-metric-name
      newPropertyKey: management.metrics.web.server.request.metric-name
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: management.metrics.web.server.requests-metric-name
      newPropertyKey: management.metrics.web.server.request.metric-name
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.jetty.max-http-post-size
      newPropertyKey: server.jetty.max-http-form-post-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.jetty.max-http-post-size
      newPropertyKey: server.jetty.max-http-form-post-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.tomcat.max-http-post-size
      newPropertyKey: server.tomcat.max-http-form-post-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.tomcat.max-http-post-size
      newPropertyKey: server.tomcat.max-http-form-post-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: server.use-forward-headers
      newPropertyKey: server.forward-headers-strategy
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: server.use-forward-headers
      newPropertyKey: server.forward-headers-strategy
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.bootstrap-hosts
      newPropertyKey: spring.couchbase.connection-string
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.bootstrap-hosts
      newPropertyKey: spring.couchbase.connection-string
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.queryservice.max-endpoints
      newPropertyKey: spring.couchbase.env.io.max-endpoints
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.queryservice.max-endpoints
      newPropertyKey: spring.couchbase.env.io.max-endpoints
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.queryservice.min-endpoints
      newPropertyKey: spring.couchbase.env.io.min-endpoints
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.queryservice.min-endpoints
      newPropertyKey: spring.couchbase.env.io.min-endpoints
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.viewservice.max-endpoints
      newPropertyKey: spring.couchbase.env.io.max-endpoints
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.viewservice.max-endpoints
      newPropertyKey: spring.couchbase.env.io.max-endpoints
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.viewservice.min-endpoints
      newPropertyKey: spring.couchbase.env.io.min-endpoints
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.viewservice.min-endpoints
      newPropertyKey: spring.couchbase.env.io.min-endpoints
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.pool.max-queue-size
      newPropertyKey: spring.data.cassandra.request.throttler.max-queue-size
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.data.cassandra.pool.max-queue-size
      newPropertyKey: spring.data.cassandra.request.throttler.max-queue-size
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.converters.preferred-json-mapper
      newPropertyKey: spring.mvc.converters.preferred-json-mapper
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.converters.preferred-json-mapper
      newPropertyKey: spring.mvc.converters.preferred-json-mapper
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.charset
      newPropertyKey: server.servlet.encoding.charset
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.charset
      newPropertyKey: server.servlet.encoding.charset
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.enabled
      newPropertyKey: server.servlet.encoding.enabled
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.enabled
      newPropertyKey: server.servlet.encoding.enabled
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.force
      newPropertyKey: server.servlet.encoding.force
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.force
      newPropertyKey: server.servlet.encoding.force
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.force-request
      newPropertyKey: server.servlet.encoding.force-request
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.force-request
      newPropertyKey: server.servlet.encoding.force-request
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.force-response
      newPropertyKey: server.servlet.encoding.force-response
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.force-response
      newPropertyKey: server.servlet.encoding.force-response
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.mapping
      newPropertyKey: server.servlet.encoding.mapping
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.encoding.mapping
      newPropertyKey: server.servlet.encoding.mapping
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: spring.http.log-request-details
      newPropertyKey: spring.mvc.log-request-details
  - org.openrewrite.yaml.ChangePropertyKey:
      oldPropertyKey: spring.http.log-request-details
      newPropertyKey: spring.mvc.log-request-details

```
{% endtab %}
{% endtabs %}
