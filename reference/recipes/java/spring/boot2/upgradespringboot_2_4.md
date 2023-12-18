# Migrate to Spring Boot 2.4

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_4**

_Migrate applications to the latest Spring Boot 2.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.4._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-24.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.1.6/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.1.6

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.1.6` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.1.6")
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
    dependencies { classpath("org.openrewrite:plugin:6.6.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.1.6")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4")
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
        <version>5.16.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.1.6</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe UpgradeSpringBoot_2_4
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
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.4.x`
  * overrideManagedVersion: `false`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.4.x`
* [Update a Gradle plugin by id](../../../gradle/plugins/upgradepluginversion.md)
  * pluginIdPattern: `org.springframework.boot`
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
* [Migrate deprecated Spring-Boot `EmbeddedDatabaseConnection.HSQL`](../../../java/spring/boot2/migratehsqlembeddeddatabaseconnection.md)
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
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.4.x
      overrideManagedVersion: false
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.4.x
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: org.springframework.boot
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Patrick](mailto:patway99@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), Patrick Way, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Greg Adams](mailto:gadams@gmail.com), [traceyyoshima](mailto:tracey.yoshima@gmail.com), [Tim te Beek](mailto:tim.te.beek@jdriven.com), [Aaron Gershman](mailto:aegershman@gmail.com), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), Yeikel, [Greg Adams](mailto:greg@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com), Adriano Machado, [Kevin McCarpenter](mailto:kevin@moderne.io), [Tim te Beek](mailto:tim@moderne.io), Kun Li, nbruno, [Shannon Pamperl](mailto:shanman190@gmail.com), [Sofia Britto Schwartz](mailto:sofia.b.schwartz@gmail.com), John Burns, [Joan Viladrosa](mailto:joan@moderne.io), [Simon Verhoeven](mailto:verhoeven.simon@gmail.com), [Michael Keppler](mailto:bananeweizen@gmx.de), [Kun Li](mailto:kun@moderne.io), [Scott Jungling](mailto:scott.jungling@gmail.com), Ties van de Ven, Peter Puškár, [Tim te Beek](mailto:timtebeek@gmail.com), Josh Soref
