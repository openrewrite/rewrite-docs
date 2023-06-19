# Migrate to Spring Boot 3.0

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_0**

_Migrate applications to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7._

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.1/jar)

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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.7](../../../java/spring/boot2/upgradespringboot_2_7.md)
* [Enable Spring Batch Annotation](../../../java/spring/boot3/removeenablebatchprocessing.md)
* [Upgrade Maven POM to Spring Boot 3.0 from 2.x](../../../java/spring/boot3/mavenpomupgrade.md)
* [Migrate to Java 17](../../../java/migrate/upgradetojava17.md)
* [Migrate to Jakarta EE 9](../../../java/migrate/jakarta/javaxmigrationtojakarta.md)
* [Remove Unnecessary `@ConstructorBinding`](../../../java/spring/boot3/removeconstructorbindingannotation.md)
* [Use `AutoConfiguration#imports`](../../../java/spring/boot2/moveautoconfigurationtoimportsfile.md)
* [Remove the deprecated properties `additional-keys-to-sanitize` from the `configprops` and `env` end points](../../../java/spring/boot3/actuatorendpointsanitization.md)
* [Rename `server.max-http-header-size` to `server.max-http-request-header-size`](../../../java/spring/boot3/migratemaxhttpheadersize.md)
* [Downgrade Jakarta Servlet API to 5.0 when using Jetty](../../../java/spring/boot3/downgradeservletapiwhenusingjetty.md)
* [Add `@Configuration` to classes with `@EnableXXXSecurity` annotations](../../../java/spring/boot3/configurationoverenablesecurity.md)
  * forceAddConfiguration: `false`
* [Migrate Spring Boot properties to 3.0](../../../java/spring/boot3/springbootproperties_3_0.md)
* [Migrate thymeleaf dependencies to Spring Boot 3.0.x](../../../java/spring/boot3/migratethymeleafdependencies.md)
* [Migrate to Spring Security 6.0](../../../java/spring/security6/upgradespringsecurity_6_0.md)
* [Migrate to Spring Cloud 2022](../../../java/spring/cloud2022/upgradespringcloud_2022.md)

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
  - org.openrewrite.java.spring.boot3.MavenPomUpgrade
  - org.openrewrite.java.migrate.UpgradeToJava17
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
  - org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0
  - org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022

```
{% endtab %}
{% endtabs %}

## Contributors
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynichoals@gmail.com)
* [Patrick](patway99@gmail.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)
* [Kyle Scully](scullykns@gmail.com)
* [Yeikel](yeikel@users.noreply.github.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Greg Adams](gadams@gmail.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Shannon Pamperl](shanman190@gmail.com)
* [Alex Boyko](aboyko@vmware.com)
* [Greg Adams](greg@moderne.io)
* [Tim te Beek](tim@moderne.io)
* [Kevin McCarpenter](kevin@moderne.io)
* [Kun Li](kun@moderne.io)
* [Fabian Krüger](56278322+fabapp2@users.noreply.github.com)
* [Johannes Jank](johannes.wengert@googlemail.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [nbruno](nbruno@users.noreply.github.com)
* [Sofia Britto Schwartz](sofia.b.schwartz@gmail.com)
* [Sandeep Nagaraj](59915704+sanagaraj-pivotal@users.noreply.github.com)
* [BoykoAlex](aboyko@pivotal.io)
* [Michael Keppler](bananeweizen@gmx.de)
* [Scott Jungling](scott.jungling@gmail.com)
* [Aakarshit Uppal](26065812+aksh1618@users.noreply.github.com)
* [Ties van de Ven](1215166+vandeven@users.noreply.github.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)
* [Tim te Beek](timtebeek@gmail.com)
* [Knut Wannheden](knut.wannheden@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
