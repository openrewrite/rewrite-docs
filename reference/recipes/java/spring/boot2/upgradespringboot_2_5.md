# Upgrade to Spring Boot 2.5

**org.openrewrite.java.spring.boot2.UpgradeSpringBoot\_2\_5**

_Upgrade to Spring Boot 2.5 from any prior 2.x version._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

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
    activeRecipe("org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5")
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
            <recipe>org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Migrate to Spring Boot 2.4](../../../java/spring/boot2/upgradespringboot_2_4.md)
* [Migrate to Spring Data 2.5](../../../java/spring/data/upgradespringdata_2_5.md)
* [Upgrade Maven dependency version](../../../maven/upgradedependencyversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `*`
  * newVersion: `2.5.x`
  * overrideManagedVersion: `true`
* [Upgrade Maven parent project version](../../../maven/upgradeparentversion.md)
  * groupId: `org.springframework.boot`
  * artifactId: `spring-boot-starter-parent`
  * newVersion: `2.5.x`
* [Migrate flyway and liquibase credentials](../../../java/spring/boot2/migratedatabasecredentials.md)
* [Migrate deprecated `ActuatorMediaType` to `ApiVersion#getProducedMimeType`](../../../java/spring/boot2/migrateactuatormediatypetoapiversion.md)
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.jpa.EntityManagerFactoryDependsOnPostProcessor`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryDependsOnPostProcessor`
* [Change type](../../../java/changetype.md)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.ResourceProperties`
  * newFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.web.WebProperties$Resources`
* [Migrate Spring Boot properties to 2.5](../../../java/spring/boot2/springbootproperties_2_5.md)
* [Adds `@DependsOnDatabaseInitialization` to Spring Beans and Components depending on `javax.sql.DataSource`](../../../java/spring/boot2/databasecomponentandbeaninitializationordering.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5
displayName: Upgrade to Spring Boot 2.5
description: Upgrade to Spring Boot 2.5 from any prior 2.x version.
recipeList:
  - org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_4
  - org.openrewrite.java.spring.data.UpgradeSpringData_2_5
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: org.springframework.boot
      artifactId: *
      newVersion: 2.5.x
      overrideManagedVersion: true
  - org.openrewrite.maven.UpgradeParentVersion:
      groupId: org.springframework.boot
      artifactId: spring-boot-starter-parent
      newVersion: 2.5.x
  - org.openrewrite.java.spring.boot2.MigrateDatabaseCredentials
  - org.openrewrite.java.spring.boot2.MigrateActuatorMediaTypeToApiVersion
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.jpa.EntityManagerFactoryDependsOnPostProcessor
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.orm.jpa.EntityManagerFactoryDependsOnPostProcessor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.ResourceProperties
      newFullyQualifiedTypeName: org.springframework.boot.autoconfigure.web.WebProperties$Resources
  - org.openrewrite.java.spring.boot2.SpringBootProperties_2_5
  - org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrdering

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.UpgradeSpringBoot_2_5)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
