# Migrate to Spring Boot 2.4

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_4**
_Migrate applications to the latest Spring Boot 2.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.4._

### Tags

* spring
* boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.34.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.34.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.34.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.38.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.34.0")
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
        <version>4.42.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.34.0</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.3](../../../java/spring/boot2/upgradespringboot_2_3.md)
* [Migrate to Spring Framework 5.3](../../../java/spring/framework/upgradespringframework_5_3.md)
* [Migrate Spring Boot 2.x projects to JUnit 5 from JUnit 4.](../../../java/spring/boot2/springboot2junit4to5migration.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.4.x`
  * overrideManagedVersion: `true`
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
* [Use `isEagerFilterInit()`](../../../java/spring/boot2/migrateundertowservletwebserverfactoryiseagerinitfilters.md)
* [Use `setEagerFilterInit(boolean)`](../../../java/spring/boot2/migrateundertowservletwebserverfactoryseteagerinitfilters.md)
* [Migrate to recommended constants in `LogbackLoggingSystemProperties` from deprecated values in `LoggingSystemProperties`](../../../java/spring/boot2/migrateloggingsystempropertyconstants.md)
* [Migrate deprecated Spring-Boot EmbeddedDatabaseConnection.HSQL](../../../java/spring/boot2/migratehsqlembeddeddatabaseconnection.md)
* [Migrate Spring Boot properties to 2.4](../../../java/spring/boot2/springbootproperties_2_4.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
displayName: Migrate to Spring Boot 2.4
description: Migrate applications to the latest Spring Boot 2.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.4.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_3
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_3
  - org.openrewrite.java.spring.boot2.SpringBoot2JUnit4to5Migration
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.4.x
      overrideManagedVersion: true
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
  - org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactoryIsEagerInitFilters
  - org.openrewrite.java.spring.boot2.MigrateUndertowServletWebServerFactorySetEagerInitFilters
  - org.openrewrite.java.spring.boot2.MigrateLoggingSystemPropertyConstants
  - org.openrewrite.java.spring.boot2.MigrateHsqlEmbeddedDatabaseConnection
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_4

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
