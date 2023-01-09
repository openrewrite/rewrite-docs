# Migrate to Spring Boot 3.0 from Spring Boot 2.7

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_0**
_Migrate applications built on Spring Boot 2.7 to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7.
_

### Tags

* spring
* boot

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
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0")
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
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
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
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:4.31.0 \
  -DactiveRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven Pom to Spring Boot 3.0 from 2.x](../../../java/spring/boot3/mavenpomupgrade.md)
* [Migrate to Jakarta EE 9 from Jakarta EE 8](../../../java/migrate/jakarta/javaxmigrationtojakarta.md)
* [Remove Unnecessary @ConstructorBinding](../../../java/spring/boot3/removeconstructorbindingannotation.md)
* [Use `org.springframework.boot.autoconfigure.AutoConfiguration.imports`](../../../java/spring/boot2/moveautoconfigurationtoimportsfile.md)
* [Maintain parity with Spring Boot 2.x by disabling sanitization of `/env`, `/configprops`, and `/quartz` endpoints.](../../../java/spring/boot3/actuatorendpointsanitization.md)
* [Migrate SAML configuration to Spring Boot 3.0 in yaml format](../../../java/spring/boot3/saml.md)
* [Migrate Spring Boot properties to 3.0](../../../java/spring/boot3/springbootproperties_3_0_0.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
displayName: Migrate to Spring Boot 3.0 from Spring Boot 2.7
description: Migrate applications built on Spring Boot 2.7 to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot3.MavenPomUpgrade
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.java.spring.boot3.RemoveConstructorBindingAnnotation
  - org.openrewrite.java.spring.boot2.MoveAutoConfigurationToImportsFile
  - org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
  - org.openrewrite.java.spring.boot3.Saml
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_0_0

```
{% endtab %}
{% endtabs %}
