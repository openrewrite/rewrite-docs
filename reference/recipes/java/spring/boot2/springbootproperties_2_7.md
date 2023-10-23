# Migrate Spring Boot properties to 2.7

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_7**

_Migrate applications to the latest Spring Boot 2.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7_

### Tags

* spring
* boot

## Source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-27.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.0.11/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.0.11


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.0.11` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.4.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_7")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.0.11")
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
    dependencies { classpath("org.openrewrite:plugin:6.4.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.0.11")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_7")
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
        <version>5.9.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_7</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.0.11</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run <PATH> --recipe SpringBootProperties_2_7
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Move SAML relying party identity provider property to asserting party](../../../java/spring/boot2/samlrelyingpartypropertyapplicationpropertiesmove.md)
* [Change key](../../../yaml/changekey.md)
  * oldKeyPath: `$.spring.security.saml2.relyingparty.registration.*[?(@.identityprovider)]`
  * newKey: `assertingparty`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.artemis.host`
  * newPropertyKey: `spring.artemis.broker-url`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.artemis.port`
  * newPropertyKey: `spring.artemis.broker-url`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.batch.initialize-schema`
  * newPropertyKey: `spring.batch.jdbc.initialize-schema`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.batch.schema`
  * newPropertyKey: `spring.batch.jdbc.schema`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.batch.table-prefix`
  * newPropertyKey: `spring.batch.jdbc.table-prefix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.continue-on-error`
  * newPropertyKey: `spring.sql.init.continue-on-error`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.data`
  * newPropertyKey: `spring.sql.init.data-locations`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.data-password`
  * newPropertyKey: `spring.sql.init.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.data-username`
  * newPropertyKey: `spring.sql.init.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.initialization-mode`
  * newPropertyKey: `spring.sql.init.mode`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.platform`
  * newPropertyKey: `spring.sql.init.platform`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.schema`
  * newPropertyKey: `spring.sql.init.schema-locations`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.schema-password`
  * newPropertyKey: `spring.sql.init.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.schema-username`
  * newPropertyKey: `spring.sql.init.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.separator`
  * newPropertyKey: `spring.sql.init.separator`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.sql-script-encoding`
  * newPropertyKey: `spring.sql.init.encoding`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.check-location`
  * newPropertyKey: `spring.flyway.fail-on-missing-locations`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue.md)
  * propertyKey: `spring.jpa.hibernate.naming.physical-strategy`
  * newValue: `org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy`
  * oldValue: `org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_7
displayName: Migrate Spring Boot properties to 2.7
description: Migrate applications to the latest Spring Boot 2.7 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 2.7

tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.boot2.SamlRelyingPartyPropertyApplicationPropertiesMove
  - org.openrewrite.yaml.ChangeKey:
      oldKeyPath: $.spring.security.saml2.relyingparty.registration.*[?(@.identityprovider)]
      newKey: assertingparty
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.artemis.host
      newPropertyKey: spring.artemis.broker-url
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.artemis.port
      newPropertyKey: spring.artemis.broker-url
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.initialize-schema
      newPropertyKey: spring.batch.jdbc.initialize-schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.schema
      newPropertyKey: spring.batch.jdbc.schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.table-prefix
      newPropertyKey: spring.batch.jdbc.table-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.continue-on-error
      newPropertyKey: spring.sql.init.continue-on-error
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.data
      newPropertyKey: spring.sql.init.data-locations
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.data-password
      newPropertyKey: spring.sql.init.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.data-username
      newPropertyKey: spring.sql.init.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.initialization-mode
      newPropertyKey: spring.sql.init.mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.platform
      newPropertyKey: spring.sql.init.platform
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.schema
      newPropertyKey: spring.sql.init.schema-locations
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.schema-password
      newPropertyKey: spring.sql.init.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.schema-username
      newPropertyKey: spring.sql.init.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.separator
      newPropertyKey: spring.sql.init.separator
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.sql-script-encoding
      newPropertyKey: spring.sql.init.encoding
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.check-location
      newPropertyKey: spring.flyway.fail-on-missing-locations
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: spring.jpa.hibernate.naming.physical-strategy
      newValue: org.hibernate.boot.model.naming.CamelCaseToUnderscoresNamingStrategy
      oldValue: org.springframework.boot.orm.jpa.hibernate.SpringPhysicalNamingStrategy

```
{% endtab %}
{% endtabs %}

## Contributors
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)
* [Nick McKinney](mailto:mckinneynichoals@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* Sandeep Nagaraj
* [Kyle Scully](mailto:scullykns@gmail.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Tim te Beek](mailto:timtebeek@gmail.com)
* Josh Soref


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_7)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
