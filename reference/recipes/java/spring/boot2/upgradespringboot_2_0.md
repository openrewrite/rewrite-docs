# Migrate to Spring Boot 2.0

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_0**

_Migrate applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0._

### Tags

* spring
* boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.36.0

## Contributors
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.36.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.36.0")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.36.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.0.x`
  * overrideManagedVersion: `true`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.0.x`
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`
  * overrideManagedVersion: `true`
* [Remove Maven project property](../../../maven/removeproperty.md)
  * propertyName: `thymeleaf.version`
* [Remove Maven dependency](../../../maven/removedependency.md)
  * groupId: `org.webjars`
  * artifactId: `webjars-locator`
* [Use `WebServerFactoryCustomizer`](../../../java/spring/boot2/migratetowebserverfactorycustomizer.md)
* [Migrate to Spring Framework 5.0](../../../java/spring/framework/upgradespringframework_5_0.md)
* [Use `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`](../../../java/spring/boot2/migratespringbootservletinitializerpackagename.md)
* [Use `org.springframework.boot.autoconfigure.http.HttpMessageConverters`](../../../java/spring/boot2/migratehttpmessageconverterspackagename.md)
* [Use `org.springframework.boot.web.servlet.error.ErrorController`](../../../java/spring/boot2/migrateerrorcontrollerpackagename.md)
* [Use `javax.validation.constraints`](../../../java/spring/boot2/migratehibernatecontraintstojavax.md)
* [Use `org.springframework.boot.web.server.LocalServerPort`](../../../java/spring/boot2/migratelocalserverportannotation.md)
* [Migrate Spring Boot properties to 2.0](../../../java/spring/boot2/springbootproperties_2_0.md)
* [Spring Boot 2.x best practices](../../../java/spring/boot2/springboot2bestpractices.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0
displayName: Migrate to Spring Boot 2.0
description: Migrate applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.0.x
      overrideManagedVersion: true
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.0.x
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: *
      newVersion: 3.x
      overrideManagedVersion: true
  - org.openrewrite.maven.RemoveProperty:
      propertyName: thymeleaf.version
  - org.openrewrite.maven.RemoveDependency:
      groupId: org.webjars
      artifactId: webjars-locator
  - org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_0
  - org.openrewrite.java.spring.boot2.MigrateSpringBootServletInitializerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHttpMessageConvertersPackageName
  - org.openrewrite.java.spring.boot2.MigrateErrorControllerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax
  - org.openrewrite.java.spring.boot2.MigrateLocalServerPortAnnotation
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
  - org.openrewrite.java.spring.boot2.SpringBoot2BestPractices

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
