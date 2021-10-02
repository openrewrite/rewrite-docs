# Upgrade to Spring Boot 2.4

 **org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_4** _Upgrade to Spring Boot 2.4 from any prior 2.x version._

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
    id("org.openrewrite.rewrite") version("5.10.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")
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
        <version>4.12.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4</recipe>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * newVersion: `2.4.x`
  * trustParent: `true`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.4.x`
* [Remove exclusion](../../../maven/removeexclusion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-test`
  * exclusionGroupId: `org.junit.vintage`
  * exclusionArtifactId: `junit-vintage-engine`
* [Remove exclusion](../../../maven/removeexclusion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-test`
  * exclusionGroupId: `junit`
  * exclusionArtifactId: `junit`
* [JUnit Jupiter for Spring Boot 2.x projects](springboot2junit4to5migration.md)
* [Upgrade to Spring Framework 5.3](../framework/upgradespringframework_5_3.md)
* [Upgrade to Spring Boot 2.3](upgradespringboot_2_3.md)
* [Use `isEagerFilterInit()`](migrateundertowservletwebserverfactoryiseagerinitfilters.md)
* [Use `setEagerFilterInit(boolean)`](migrateundertowservletwebserverfactoryseteagerinitfilters.md)
* [Migrate to recommended constants in `LogbackLoggingSystemProperties` from deprecated values in `LoggingSystemProperties`](migrateloggingsystempropertyconstants.md)
* [Migrate deprecated Spring-Boot EmbeddedDatabaseConnection.HSQL](migratehsqlembeddeddatabaseconnection.md)
* [Migrate Spring Boot properties to 2.4](springbootproperties_2_4.md)
{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
displayName: Upgrade to Spring Boot 2.4
description: Upgrade to Spring Boot 2.4 from any prior 2.x version.
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      newVersion: 2.4.x
      trustParent: true
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.4.x
  - org.openrewrite.maven.RemoveExclusion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-test
      exclusionGroupId: org.junit.vintage
      exclusionArtifactId: junit-vintage-engine
  - org.openrewrite.maven.RemoveExclusion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-test
      exclusionGroupId: junit
      exclusionArtifactId: junit
  - org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
  - org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters
  - org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactorySetEagerInitFilters
  - org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants
  - org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_4
```
{% endtab %}
{% endtabs %}

