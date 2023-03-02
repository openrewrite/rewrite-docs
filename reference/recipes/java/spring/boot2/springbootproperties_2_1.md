# Migrate Spring Boot properties to 2.1

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_1**
_Migrate properties found in `application.properties` and `application.yml`._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-21.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.33.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.33.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.33.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.37.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.33.0")
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
        <version>4.41.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.33.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:LATEST \
  -DactiveRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_1
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_1`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.binders.files.enabled`
  * newPropertyKey: `management.metrics.enable.process.files`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.binders.jvm.enabled`
  * newPropertyKey: `management.metrics.enable.jvm`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.binders.logback.enabled`
  * newPropertyKey: `management.metrics.enable.logback`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.servlet.path`
  * newPropertyKey: `spring.mvc.servlet.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.activemq.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.activemq.pool.max-sessions-per-connection`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.artemis.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.artemis.pool.max-sessions-per-connection`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.mvc.formcontent.putfilter.enabled`
  * newPropertyKey: `spring.mvc.formcontent.filter.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.chain.gzipped`
  * newPropertyKey: `spring.resources.chain.compressed`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_1
displayName: Migrate Spring Boot properties to 2.1
description: Migrate properties found in `application.properties` and `application.yml`.
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.binders.files.enabled
      newPropertyKey: management.metrics.enable.process.files
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.binders.jvm.enabled
      newPropertyKey: management.metrics.enable.jvm
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.binders.logback.enabled
      newPropertyKey: management.metrics.enable.logback
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.path
      newPropertyKey: spring.mvc.servlet.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.activemq.pool.maximum-active-session-per-connection
      newPropertyKey: spring.activemq.pool.max-sessions-per-connection
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.artemis.pool.maximum-active-session-per-connection
      newPropertyKey: spring.artemis.pool.max-sessions-per-connection
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.admin.ssl.keystore-location
      newPropertyKey: spring.kafka.admin.ssl.key-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.admin.ssl.keystore-password
      newPropertyKey: spring.kafka.admin.ssl.key-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.admin.ssl.truststore-location
      newPropertyKey: spring.kafka.admin.ssl.trust-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.admin.ssl.truststore-password
      newPropertyKey: spring.kafka.admin.ssl.trust-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.consumer.ssl.keystore-location
      newPropertyKey: spring.kafka.consumer.ssl.key-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.consumer.ssl.keystore-password
      newPropertyKey: spring.kafka.consumer.ssl.key-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.consumer.ssl.truststore-location
      newPropertyKey: spring.kafka.consumer.ssl.trust-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.consumer.ssl.truststore-password
      newPropertyKey: spring.kafka.consumer.ssl.trust-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.producer.ssl.keystore-location
      newPropertyKey: spring.kafka.producer.ssl.key-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.producer.ssl.keystore-password
      newPropertyKey: spring.kafka.producer.ssl.key-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.producer.ssl.truststore-location
      newPropertyKey: spring.kafka.producer.ssl.trust-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.producer.ssl.truststore-password
      newPropertyKey: spring.kafka.producer.ssl.trust-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.ssl.keystore-location
      newPropertyKey: spring.kafka.ssl.key-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.ssl.keystore-password
      newPropertyKey: spring.kafka.ssl.key-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.ssl.truststore-location
      newPropertyKey: spring.kafka.ssl.trust-store-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.ssl.truststore-password
      newPropertyKey: spring.kafka.ssl.trust-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.formcontent.putfilter.enabled
      newPropertyKey: spring.mvc.formcontent.filter.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.gzipped
      newPropertyKey: spring.resources.chain.compressed

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_1)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
