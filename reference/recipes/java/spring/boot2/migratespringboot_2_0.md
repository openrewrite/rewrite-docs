# Migrate to Spring Boot 2.0 from Spring Boot 1.5

**org.openrewrite.java.spring.boot2.MigrateSpringBoot\_2\_0**
_Migrate applications built on Spring Boot 1.5 to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0.
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
    activeRecipe("org.openrewrite.java.spring.boot2.MigrateSpringBoot_2_0")
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
            <recipe>org.openrewrite.java.spring.boot2.MigrateSpringBoot_2_0</recipe>
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
  -DactiveRecipes=org.openrewrite.java.spring.boot2.MigrateSpringBoot_2_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.MigrateSpringBoot_2_0`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.0.x`
  * overrideManagedVersion: `true`
  * retainVersions: `[]`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.0.x`
  * retainVersions: `[]`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`
  * overrideManagedVersion: `true`
  * retainVersions: `[]`
* [Remove Maven project property](../../../maven/removeproperty.md)
  * propertyName: `thymeleaf.version`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.webjars`
  * artifactId: `webjars-locator`
* [Migrate to Spring Framework 5.0 from Spring Framework 4.x](../../../java/spring/framework/upgradespringframework_5_0.md)
* [Use `SpringBootServletInitializer`](../../../java/spring/boot2/migratespringbootservletinitializerpackagename.md)
* [Use `HttpMessageConverters`](../../../java/spring/boot2/migratehttpmessageconverterspackagename.md)
* [Use `ErrorController`](../../../java/spring/boot2/migrateerrorcontrollerpackagename.md)
* [Migrate hibernate validator constraints to javax.](../../../java/spring/boot2/migratehibernatecontraintstojavax.md)
* [Use `org.springframework.boot.web.server.LocalServerPort`](../../../java/spring/boot2/migratelocalserverportannotation.md)
* [Migrate Spring Boot properties to 2.0](../../../java/spring/boot2/springbootproperties_2_0.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.MigrateSpringBoot_2_0
displayName: Migrate to Spring Boot 2.0 from Spring Boot 1.5
description: Migrate applications built on Spring Boot 1.5 to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.0.x
      overrideManagedVersion: true
      retainVersions: []
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.0.x
      retainVersions: []
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: *
      newVersion: 3.x
      overrideManagedVersion: true
      retainVersions: []
  - org.openrewrite.maven.RemoveProperty:
      propertyName: thymeleaf.version
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.webjars
      artifactId: webjars-locator
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_0
  - org.openrewrite.java.spring.boot2.MigrateSpringBootServletInitializerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHttpMessageConvertersPackageName
  - org.openrewrite.java.spring.boot2.MigrateErrorControllerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax
  - org.openrewrite.java.spring.boot2.MigrateLocalServerPortAnnotation
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_0

```
{% endtab %}
{% endtabs %}
