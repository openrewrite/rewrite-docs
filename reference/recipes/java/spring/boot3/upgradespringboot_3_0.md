# Migrate to Spring Boot 3.0

**org.openrewrite.java.spring.boot3.UpgradeSpringBoot\_3\_0**

_Migrate applications to the latest Spring Boot 3.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7.
Migrating a Spring Boot application across major versions can be a complex task. Not every part of the  process can be automated, and not everything that possibly could be automated is. We recommend first running each of the minor version upgrades individually, making any manual changes which may be required. When you  have a working spring-boot 2.7.x application, then run this recipe to migrate to 3.0._

### Tags

* spring
* boot

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.36.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.36.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0")
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
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0</recipe>
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
* [Migrate Spring Boot properties to 3.0](../../../java/spring/boot3/springbootproperties_3_0_0.md)
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
Migrating a Spring Boot application across major versions can be a complex task. Not every part of the  process can be automated, and not everything that possibly could be automated is. We recommend first running each of the minor version upgrades individually, making any manual changes which may be required. When you  have a working spring-boot 2.7.x application, then run this recipe to migrate to 3.0.

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
  - org.openrewrite.java.spring.boot3.SpringBootProperties_3_0_0
  - org.openrewrite.java.spring.boot3.MigrateThymeleafDependencies
  - org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_0
  - org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud_2022

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_0)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
