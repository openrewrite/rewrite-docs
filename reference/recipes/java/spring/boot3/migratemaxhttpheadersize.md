# Rename `server.max-http-header-size` to `server.max-http-request-header-size`

**org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize**
_Previously, the server.max-http-header-size was treated inconsistently across the four supported embedded web servers. When using Jetty, Netty, or Undertow it would configure the max HTTP request header size. When using Tomcat it would configure the max HTTP request and response header sizes. The renamed property is used to configure the http request header size in Spring Boot 3.0. **To limit the max header size of an HTTP response on Tomcat or Jetty (the only two servers that support such a setting), use a `WebServerFactoryCustomizer`**.
_

### Tags

* spring
* boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.32.0-SNAPSHOT/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.32.0-SNAPSHOT


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.32.0-SNAPSHOT in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.32.0-SNAPSHOT")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.32.0-SNAPSHOT</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.32.0-SNAPSHOT \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.max-http-header-size`
  * newPropertyKey: `server.max-http-request-header-size`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize
displayName: Rename `server.max-http-header-size` to `server.max-http-request-header-size`
description: Previously, the server.max-http-header-size was treated inconsistently across the four supported embedded web servers. When using Jetty, Netty, or Undertow it would configure the max HTTP request header size. When using Tomcat it would configure the max HTTP request and response header sizes. The renamed property is used to configure the http request header size in Spring Boot 3.0. **To limit the max header size of an HTTP response on Tomcat or Jetty (the only two servers that support such a setting), use a `WebServerFactoryCustomizer`**.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.max-http-header-size
      newPropertyKey: server.max-http-request-header-size

```
{% endtab %}
{% endtabs %}
