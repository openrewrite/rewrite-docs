# Migrate to Spring Boot 2.0

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_0**

_Migrate applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.1</version>
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
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.0.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.0.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.mockito`
  * artifactId: `*`
  * newVersion: `3.x`
  * overrideManagedVersion: `false`
* [Remove Maven project property](../../../maven/removeproperty.md)
  * propertyName: `thymeleaf.version`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency.md)
  * groupId: `org.webjars`
  * artifactId: `webjars-locator`
* [Use `WebServerFactoryCustomizer`](../../../java/spring/boot2/migratetowebserverfactorycustomizer.md)
* [Migrate to Spring Framework 5.0](../../../java/spring/framework/upgradespringframework_5_0.md)
* [Use `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`](../../../java/spring/boot2/migratespringbootservletinitializerpackagename.md)
* [Use `org.springframework.boot.autoconfigure.http.HttpMessageConverters`](../../../java/spring/boot2/migratehttpmessageconverterspackagename.md)
* [Use `org.springframework.boot.web.servlet.error.ErrorController`](../../../java/spring/boot2/migrateerrorcontrollerpackagename.md)
* [Use `javax.validation.constraints`](../../../java/spring/boot2/migratehibernateconstraintstojavax.md)
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
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.0.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.0.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.mockito
      artifactId: *
      newVersion: 3.x
      overrideManagedVersion: false
  - org.openrewrite.maven.RemoveProperty:
      propertyName: thymeleaf.version
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: org.webjars
      artifactId: webjars-locator
  - org.openrewrite.java.spring.boot2.MigrateToWebServerFactoryCustomizer
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_0
  - org.openrewrite.java.spring.boot2.MigrateSpringBootServletInitializerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHttpMessageConvertersPackageName
  - org.openrewrite.java.spring.boot2.MigrateErrorControllerPackageName
  - org.openrewrite.java.spring.boot2.MigrateHibernateConstraintsToJavax
  - org.openrewrite.java.spring.boot2.MigrateLocalServerPortAnnotation
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
  - org.openrewrite.java.spring.boot2.SpringBoot2BestPractices

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Kevin McCarpenter](kevin@moderne.io)
* [Kyle Scully](scullykns@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Kun Li](kun@moderne.io)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [nbruno](nbruno@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
