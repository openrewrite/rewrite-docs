# Migrate to Spring Boot 2.0

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_0**

_Migrate applications to the latest Spring Boot 2.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.0._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.1.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.1.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.1.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.1.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.5.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.1.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.11.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.1.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
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
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringBoot_2_0
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
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `2.0.x`
* [Add `io.spring.dependency-management` plugin, if in use](../../../gradle/spring/addspringdependencymanagementplugin.md)
* [Update Gradle wrapper](../../../gradle/updategradlewrapper.md)
  * version: `4.x`
  * addIfMissing: `false`
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
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 2.0.x
  - org.openrewrite.gradle.spring.AddSpringDependencyManagementPlugin
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 4.x
      addIfMissing: false
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
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Nick McKinney](mailto:mckinneynichoals@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* Patrick Way
* [Kevin McCarpenter](mailto:kevin@moderne.io)
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [traceyyoshima](mailto:tracey.yoshima@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Joan Viladrosa](mailto:joan@moderne.io)
* Kun Li
* [Tim te Beek](mailto:tim@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Kun Li](mailto:kun@moderne.io)
* Josh Soref
* nbruno


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
