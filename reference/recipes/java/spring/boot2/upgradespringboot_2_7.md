# Upgrade to Spring Boot 2.7

** org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_7**
_Upgrade to Spring Boot 2.7 from any prior 2.x version._

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
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7")
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
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7</recipe>
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
  -DactiveRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade to Spring Boot 2.6](../../../java/spring/boot2/upgradespringboot_2_6.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.7.x`
  * overrideManagedVersion: `true`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.7.x`
* [Migrate Spring Boot properties to 2.7](../../../java/spring/boot2/springbootproperties_2_7.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.web.server.LocalServerPort`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.web.server.LocalServerPort`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.autoconfigure.web.server.LocalManagementPort`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.web.server.LocalManagementPort`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.rsocket.context.LocalRSocketServerPort`
  * newFullyQualifiedTypeName: `org.springframework.boot.test.rsocket.server.LocalRSocketServerPort`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
displayName: Upgrade to Spring Boot 2.7
description: Upgrade to Spring Boot 2.7 from any prior 2.x version.
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_6
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.7.x
      overrideManagedVersion: true
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.7.x
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.web.server.LocalServerPort
      newFullyQualifiedTypeName: org.springframework.boot.test.web.server.LocalServerPort
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.autoconfigure.web.server.LocalManagementPort
      newFullyQualifiedTypeName: org.springframework.boot.test.web.server.LocalManagementPort
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.rsocket.context.LocalRSocketServerPort
      newFullyQualifiedTypeName: org.springframework.boot.test.rsocket.server.LocalRSocketServerPort

```
{% endtab %}
{% endtabs %}
