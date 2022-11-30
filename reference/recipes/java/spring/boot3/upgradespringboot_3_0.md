# Upgrade to Spring Boot 3.0 from 2.7

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_0** _Upgrade to Spring Boot 3.0 from prior 2.x version._

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
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0")
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
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
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
  -DactiveRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven Pom to Spring Boot 3.0 from 2.x](mavenpomupgrade.md)
* [Migrate to Jakarta EE 9 from Jakarta EE 8](../../migrate/jakarta/javaxmigrationtojakarta.md)
* [Remove Unnecessary @ConstructorBinding](removeconstructorbindingannotation.md)
* [Maintain parity with Spring Boot 2.x by exposing all actuator endpoints via JMX.](legacyjmxexposure.md)
* [Maintain parity with Spring Boot 2.x by disabling sanitization of `/env`, `/configprops`, and `/quartz` endpoints.](actuatorendpointsanitization.md)
* [Migrate SAML configuration to Spring Boot 3.0 in yaml format](saml.md)
* [Migrate Spring Boot properties to 3.0.0](springbootproperties\_3\_0\_0.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
displayName: Upgrade to Spring Boot 3.0 from 2.7
description: Upgrade to Spring Boot 3.0 from prior 2.x version.
tags:
  - spring
  - spring-boot
  - spring-boot-3-0
recipeList:
  - org.openrewrite.java.spring.boot3.MavenPomUpgrade
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.java.spring.boot3.RemoveConstructorBindingAnnotation
  - org.openrewrite.java.spring.boot3.LegacyJmxExposure
  - org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
  - org.openrewrite.java.spring.boot3.Saml
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_0_0
```
{% endtab %}
{% endtabs %}
