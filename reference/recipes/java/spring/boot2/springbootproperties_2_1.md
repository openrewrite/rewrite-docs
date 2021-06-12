# Migrate Spring Boot properties to 2.1

** org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_1**
_Migrate properties found in `application.properties` and `application.yml`._

### Source

Maven Central [entry](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-spring/4.5.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.5.0

## Recipe list

* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.metrics.binders.files.enabled`
  * newPropertyKey: `management.metrics.enable.process.files`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.metrics.binders.files.enabled`
  * newPropertyKey: `management.metrics.enable.process.files`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.metrics.binders.jvm.enabled`
  * newPropertyKey: `management.metrics.enable.jvm`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.metrics.binders.jvm.enabled`
  * newPropertyKey: `management.metrics.enable.jvm`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `management.metrics.binders.logback.enabled`
  * newPropertyKey: `management.metrics.enable.logback`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `management.metrics.binders.logback.enabled`
  * newPropertyKey: `management.metrics.enable.logback`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `server.servlet.path`
  * newPropertyKey: `spring.mvc.servlet.path`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `server.servlet.path`
  * newPropertyKey: `spring.mvc.servlet.path`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.activemq.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.activemq.pool.max-sessions-per-connection`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.activemq.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.activemq.pool.max-sessions-per-connection`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.artemis.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.artemis.pool.max-sessions-per-connection`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.artemis.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.artemis.pool.max-sessions-per-connection`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.ssl.key-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.ssl.key-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.ssl.key-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.ssl.key-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.ssl.trust-store-location`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.ssl.trust-store-location`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.ssl.trust-store-password`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.kafka.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.ssl.trust-store-password`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.mvc.formcontent.putfilter.enabled`
  * newPropertyKey: `spring.mvc.formcontent.filter.enabled`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.mvc.formcontent.putfilter.enabled`
  * newPropertyKey: `spring.mvc.formcontent.filter.enabled`
* [Change property key](../../../properties/changepropertykey.md)
  * oldPropertyKey: `spring.resources.chain.gzipped`
  * newPropertyKey: `spring.resources.chain.compressed`
* [Change property key](../../../yaml/changepropertykey.md)
  * oldPropertyKey: `spring.resources.chain.gzipped`
  * newPropertyKey: `spring.resources.chain.compressed`

## Usage
This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-spring:4.5.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.1.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_1")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe":"rewrite-spring":"4.5.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.5.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=org.openrewrite.java.spring.boot2.SpringBootProperties_2_1`
