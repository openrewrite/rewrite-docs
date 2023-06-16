# Migrate Spring Boot properties to 2.2

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_2**

_Migrate properties found in `application.properties` and `application.yml`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-22.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_2")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_2</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_2
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
  * except: `[path]`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.path`
  * newPropertyKey: `logging.file.path`
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
  * oldPropertyKey: `server.tomcat.max-http-header-size`
  * newPropertyKey: `server.max-http-header-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.jmx-enabled`
  * newPropertyKey: `spring.datasource.tomcat.jmx-enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.streams.cache-max-bytes-buffering`
  * newPropertyKey: `spring.kafka.streams.cache-max-size-buffering`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.rabbitmq.template.queue`
  * newPropertyKey: `spring.rabbitmq.template.default-receive-queue`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.reactor.stacktrace-mode.enabled`
  * newPropertyKey: `spring.reactor.debug-agent.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.file`
  * newPropertyKey: `logging.file.name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `logging.path`
  * newPropertyKey: `logging.file.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
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
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file
      newPropertyKey: logging.file.name
      except: [path]
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.path
      newPropertyKey: logging.file.path
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
      oldPropertyKey: server.tomcat.max-http-header-size
      newPropertyKey: server.max-http-header-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.jmx-enabled
      newPropertyKey: spring.datasource.tomcat.jmx-enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.streams.cache-max-bytes-buffering
      newPropertyKey: spring.kafka.streams.cache-max-size-buffering
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.rabbitmq.template.queue
      newPropertyKey: spring.rabbitmq.template.default-receive-queue
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.reactor.stacktrace-mode.enabled
      newPropertyKey: spring.reactor.debug-agent.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.file
      newPropertyKey: logging.file.name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: logging.path
      newPropertyKey: logging.file.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoints.jmx.unique-names
      newPropertyKey: spring.jmx.unique-names

```
{% endtab %}
{% endtabs %}
## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Kyle Scully](scullykns@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_2)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
