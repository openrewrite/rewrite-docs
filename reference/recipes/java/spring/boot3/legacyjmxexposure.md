# Maintain parity with Spring Boot 2.x by exposing all actuator endpoints via JMX.

**org.openrewrite.java.spring.boot3.LegacyJmxExposure**
_Spring Boot 3.0 only exposes the health endpoint via JMX. This change exposes all actuator endpoints via JMX to maintain parity with Spring Boot 2.x. See See https://github.com/openrewrite/rewrite-spring/issues/229_

### Tags

* spring
* spring-boot
* spring-boot-3-0

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.31.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.31.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.31.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.LegacyJmxExposure")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.31.0")
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
        <version>4.38.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.LegacyJmxExposure</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.31.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.31.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.LegacyJmxExposure
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.LegacyJmxExposure`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add a spring configuration property](../../../java/spring/addspringproperty.md)
  * property: `management.endpoints.jmx.exposure.include`
  * value: `*`
  * comment: `In Spring Boot 3.0 only the health endpoint is exposed over JMX. This setting was changed to maintain parity with Spring Boot 2.x but should be reviewed.`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.LegacyJmxExposure
displayName: Maintain parity with Spring Boot 2.x by exposing all actuator endpoints via JMX.
description: Spring Boot 3.0 only exposes the health endpoint via JMX. This change exposes all actuator endpoints via JMX to maintain parity with Spring Boot 2.x. See See https://github.com/openrewrite/rewrite-spring/issues/229
tags:
  - spring
  - spring-boot
  - spring-boot-3-0
recipeList:
  - org.openrewrite.java.spring.AddSpringProperty:
      property: management.endpoints.jmx.exposure.include
      value: *
      comment: In Spring Boot 3.0 only the health endpoint is exposed over JMX. This setting was changed to maintain parity with Spring Boot 2.x but should be reviewed.

```
{% endtab %}
{% endtabs %}
