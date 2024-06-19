# Migrate to Spring Boot 3.0

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_0**

_Migrate applications to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.13.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.13.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.13.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.13.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0")
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.13.2</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringBoot_3_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.7](../../../java/spring/boot2/upgradespringboot_2_7.md)
* [Enable Spring Batch Annotation](../../../java/spring/boot3/removeenablebatchprocessing.md)
* [Migrate to Java 17](../../../java/migrate/upgradetojava17.md)
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `3.0.x`
  * overrideManagedVersion: `false`
  * retainVersions: `[org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework`
  * artifactId: `*`
  * newVersion: `6.0.x`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `3.0.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
  * newVersion: `3.0.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `io.spring.dependency-management`
  * newVersion: `1.1.x`
* [Update Gradle wrapper](../../../gradle/updategradlewrapper.md)
  * version: `^7.4`
  * addIfMissing: `false`
* [Migrate to Jakarta EE 9](../../../java/migrate/jakarta/javaxmigrationtojakarta.md)
* [Remove Unnecessary `@ConstructorBinding`](../../../java/spring/boot3/removeconstructorbindingannotation.md)
* [Use `AutoConfiguration#imports`](../../../java/spring/boot2/moveautoconfigurationtoimportsfile.md)
* [Remove the deprecated properties `additional-keys-to-sanitize` from the `configprops` and `env` end points](../../../java/spring/boot3/actuatorendpointsanitization.md)
* [Rename `server.max-http-header-size` to `server.max-http-request-header-size`](../../../java/spring/boot3/migratemaxhttpheadersize.md)
* [Downgrade Jakarta Servlet API to 5.0 when using Jetty](../../../java/spring/boot3/downgradeservletapiwhenusingjetty.md)
* [Add `@Configuration` to classes with `@EnableXXXSecurity` annotations](../../../java/spring/boot3/configurationoverenablesecurity.md)
  * forceAddConfiguration: `false`
* [Migrate Spring Boot properties to 3.0](../../../java/spring/boot3/springbootproperties_3_0.md)
* [Migrate thymeleaf dependencies to Spring Boot 3.x](../../../java/spring/boot3/migratethymeleafdependencies.md)
* [Upgrade to springdoc-openapi 2](../../../java/spring/boot3/upgradespringdoc_2.md)
* [Migrate dropWizard dependencies to Spring Boot 3.x](../../../java/spring/boot3/migratedropwizarddependencies.md)
* [Migrate to Spring Framework 6.0](../../../java/spring/framework/upgradespringframework_6_0.md)
* [Migrate to Spring Security 6.0](../../../java/spring/security6/upgradespringsecurity_6_0.md)
* [Migrate to Spring Cloud 2022](../../../java/spring/cloud2022/upgradespringcloud_2022.md)
* [Migrate to Hibernate 6.1.x](../../../hibernate/migratetohibernate61.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
displayName: Migrate to Spring Boot 3.0
description: Migrate applications to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7.

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_7
  - org.openrewrite.java.spring.boot3.RemoveEnableBatchProcessing
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 3.0.x
      overrideManagedVersion: false
      retainVersions: [org.thymeleaf:thymeleaf-spring5, org.thymeleaf.extras:thymeleaf-extras-springsecurity5]
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework
      artifactId: *
      newVersion: 6.0.x
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 3.0.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
      newVersion: 3.0.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: io.spring.dependency-management
      newVersion: 1.1.x
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: ^7.4
      addIfMissing: false
  - org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
  - org.openrewrite.java.spring.boot3.RemoveConstructorBindingAnnotation
  - org.openrewrite.java.spring.boot2.MoveAutoConfigurationToImportsFile
  - org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization
  - org.openrewrite.java.spring.boot3.MigrateMaxHttpHeaderSize
  - org.openrewrite.java.spring.boot3.DowngradeServletApiWhenUsingJetty
  - org.openrewrite.java.spring.boot3.ConfigurationOverEnableSecurity:
      forceAddConfiguration: false
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_0
  - org.openrewrite.java.spring.boot3.MigrateThymeleafDependencies
  - org.openrewrite.java.spring.boot3.UpgradeSpringDoc_2
  - org.openrewrite.java.spring.boot3.MigrateDropWizardDependencies
  - org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_0
  - org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0
  - org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022
  - org.openrewrite.hibernate.MigrateToHibernate61

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), Chuka Obinabo, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), Patrick Way, [Sam Snyder](mailto:sam@moderne.io), [Alex Boyko](mailto:aboyko@vmware.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com), Kun Li, [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Satvika Eda](mailto:satvika164.reddy@gmail.com), [Greg Adams](mailto:gadams@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Kevin McCarpenter](mailto:kevin@moderne.io), [Greg Adams](mailto:greg@moderne.io), Fabian Krüger, [Kun Li](mailto:kun@moderne.io), Anu Ramamoorthy, [magicwerk](mailto:magicwerk@gmail.com), Simon Zilliken, Evie Lau, [Yifeng Jin](mailto:yifeng.jyf@alibaba-inc.com), [Tim te Beek](mailto:timtebeek@gmail.com), Adam Slaski, Aaron Gershman, [Shannon Pamperl](mailto:shanman190@gmail.com), nbruno, ranuradh, Daryl Robbins, Sandeep Nagaraj, [Michael Keppler](mailto:bananeweizen@gmx.de), [BoykoAlex](mailto:aboyko@pivotal.io), [Johannes Jank](mailto:johannes.wengert@googlemail.com), Michel Gonzalez, [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com), John Burns, Aakarshit Uppal, [Amitoj Duggal](mailto:amitojduggal@gmail.com), Josh Soref, [Scott Jungling](mailto:scott.jungling@gmail.com), Peter Puškár, [Mike Solomon](mailto:mikesol@hey.com)
