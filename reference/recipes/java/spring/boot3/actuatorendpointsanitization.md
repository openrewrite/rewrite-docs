# Maintain parity with Spring Boot 2.x by disabling sanitization of `/env`, `/configprops`, and `/quartz` endpoints.

**org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization**
_Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. This recipe maintains the previous behavior but adds a warning comment that these settings should be reviewed. See https://github.com/openrewrite/rewrite-spring/issues/228_

### Tags

* spring
* spring-boot
* spring-boot-3-0

## Source

[Github](https://github.com/openrewrite/rewrite-spring), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.30.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.30.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.30.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.32.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.30.0")
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
        <version>4.37.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.30.0</version>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.37.0:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.30.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Delete a spring configuration property from any configuration files that contains a matching key](../../../java/spring/deletespringproperty.md)
  * propertyKey: `management.endpoint.configprops.additional-keys-to-sanitize`
* [Delete a spring configuration property from any configuration files that contains a matching key](../../../java/spring/deletespringproperty.md)
  * propertyKey: `management.endpoint.env.additional-keys-to-sanitize`
* [Add a spring configuration property to a configuration file if it does not already exist in that file](../../../java/spring/addspringproperty.md)
  * property: `management.endpoint.configprops.show-values`
  * value: `ALWAYS`
  * comment: `This value was added to maintain parity with SpringBoot 2.x and should be changed to either to "NEVER" or "WHEN_AUTHORIZED".`
* [Add a spring configuration property to a configuration file if it does not already exist in that file](../../../java/spring/addspringproperty.md)
  * property: `management.endpoint.env.show-values`
  * value: `ALWAYS`
  * comment: `This value was added to maintain parity with SpringBoot 2.x and should be changed to either to "NEVER" or "WHEN_AUTHORIZED".`
* [Add a spring configuration property to a configuration file if it does not already exist in that file](../../../java/spring/addspringproperty.md)
  * property: `management.endpoint.quartz.show-values`
  * value: `ALWAYS`
  * comment: `This value was added to maintain parity with SpringBoot 2.x and should be changed to either to "NEVER" or "WHEN_AUTHORIZED".`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
displayName: Maintain parity with Spring Boot 2.x by disabling sanitization of `/env`, `/configprops`, and `/quartz` endpoints.
description: Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. This recipe maintains the previous behavior but adds a warning comment that these settings should be reviewed. See https://github.com/openrewrite/rewrite-spring/issues/228
tags:
  - spring
  - spring-boot
  - spring-boot-3-0
recipeList:
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: management.endpoint.configprops.additional-keys-to-sanitize
  - org.openrewrite.java.spring.DeleteSpringProperty:
      propertyKey: management.endpoint.env.additional-keys-to-sanitize
  - org.openrewrite.java.spring.AddSpringProperty:
      property: management.endpoint.configprops.show-values
      value: ALWAYS
      comment: This value was added to maintain parity with SpringBoot 2.x and should be changed to either to "NEVER" or "WHEN_AUTHORIZED".
  - org.openrewrite.java.spring.AddSpringProperty:
      property: management.endpoint.env.show-values
      value: ALWAYS
      comment: This value was added to maintain parity with SpringBoot 2.x and should be changed to either to "NEVER" or "WHEN_AUTHORIZED".
  - org.openrewrite.java.spring.AddSpringProperty:
      property: management.endpoint.quartz.show-values
      value: ALWAYS
      comment: This value was added to maintain parity with SpringBoot 2.x and should be changed to either to "NEVER" or "WHEN_AUTHORIZED".

```
{% endtab %}
{% endtabs %}
