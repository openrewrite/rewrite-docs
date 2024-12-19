---
sidebar_label: "Migrate Spring Boot properties to 2.1"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 2.1

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_1**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-21-properties.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)
:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license/).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoints.jmx.unique-names`
  * newPropertyKey: `spring.jmx.unique-names`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.binders.files.enabled`
  * newPropertyKey: `management.metrics.enable.process.files`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.binders.jvm.enabled`
  * newPropertyKey: `management.metrics.enable.jvm`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.binders.logback.enabled`
  * newPropertyKey: `management.metrics.enable.logback`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.max-http-post-size`
  * newPropertyKey: `server.jetty.max-http-form-post-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet-path`
  * newPropertyKey: `spring.mvc.servlet.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet.path`
  * newPropertyKey: `spring.mvc.servlet.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.max-http-header-size`
  * newPropertyKey: `server.max-http-header-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.max-http-post-size`
  * newPropertyKey: `server.tomcat.max-http-form-post-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.activemq.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.activemq.pool.max-sessions-per-connection`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.artemis.pool.maximum-active-session-per-connection`
  * newPropertyKey: `spring.artemis.pool.max-sessions-per-connection`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.admin.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.admin.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.admin.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.consumer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.consumer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.consumer.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.producer.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.producer.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.producer.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.ssl.keystore-location`
  * newPropertyKey: `spring.kafka.ssl.key-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.ssl.keystore-password`
  * newPropertyKey: `spring.kafka.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.ssl.truststore-location`
  * newPropertyKey: `spring.kafka.ssl.trust-store-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.ssl.truststore-password`
  * newPropertyKey: `spring.kafka.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.streams.cache-max-bytes-buffering`
  * newPropertyKey: `spring.kafka.streams.cache-max-size-buffering`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.formcontent.putfilter.enabled`
  * newPropertyKey: `spring.mvc.formcontent.filter.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.rabbitmq.template.queue`
  * newPropertyKey: `spring.rabbitmq.template.default-receive-queue`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.resources.chain.gzipped`
  * newPropertyKey: `spring.resources.chain.compressed`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `liquibase.check-change-log-location`
  * comment: `This property is deprecated: Liquibase has its own check that checks if the change log location exists making this property redundant.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.binders.processor.enabled`
  * comment: `This property is deprecated: Instead, filter 'system.cpu' and 'process.cpu' metrics.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.binders.uptime.enabled`
  * comment: `This property is deprecated: Instead, filter 'process.uptime' and 'process.start.time' metrics.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `server.connection-timeout`
  * comment: `This property is deprecated: Each server behaves differently. Use server specific properties instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.env.endpoints.query`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.env.endpoints.view`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.cassandra.load-balancing-policy`
  * comment: `This property is deprecated: Implement a ClusterBuilderCustomizer bean instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.cassandra.reconnection-policy`
  * comment: `This property is deprecated: Implement a ClusterBuilderCustomizer bean instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.cassandra.retry-policy`
  * comment: `This property is deprecated: Implement a ClusterBuilderCustomizer bean instead.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.dry-run-output`
  * comment: `This property is deprecated: Flyway pro edition only.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.error-handlers`
  * comment: `This property is deprecated: Flyway pro edition only.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.undo-sql-migration-prefix`
  * comment: `This property is deprecated: Flyway pro edition only.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.default-timeout`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.expiry-scanners`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.log-dir`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.one-phase-commit`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.periodic-recovery-period`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.recovery-backoff-period`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.recovery-db-pass`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.recovery-db-user`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.recovery-jms-pass`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.recovery-jms-user`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.recovery-modules`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.transaction-manager-id`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.narayana.xa-resource-orphan-filters`
  * comment: `This property is deprecated: Narayana support has moved to third party starter.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.liquibase.check-change-log-location`
  * comment: `This property is deprecated: Liquibase has it's own check that checks if the change log location exists making this property redundant.`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_1
displayName: Migrate Spring Boot properties to 2.1
description: Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoints.jmx.unique-names
      newPropertyKey: spring.jmx.unique-names
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
      oldPropertyKey: server.jetty.max-http-post-size
      newPropertyKey: server.jetty.max-http-form-post-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet-path
      newPropertyKey: spring.mvc.servlet.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.path
      newPropertyKey: spring.mvc.servlet.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.max-http-header-size
      newPropertyKey: server.max-http-header-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.max-http-post-size
      newPropertyKey: server.tomcat.max-http-form-post-size
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
      oldPropertyKey: spring.kafka.streams.cache-max-bytes-buffering
      newPropertyKey: spring.kafka.streams.cache-max-size-buffering
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.formcontent.putfilter.enabled
      newPropertyKey: spring.mvc.formcontent.filter.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.rabbitmq.template.queue
      newPropertyKey: spring.rabbitmq.template.default-receive-queue
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.chain.gzipped
      newPropertyKey: spring.resources.chain.compressed
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: liquibase.check-change-log-location
      comment: This property is deprecated: Liquibase has its own check that checks if the change log location exists making this property redundant.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.binders.processor.enabled
      comment: This property is deprecated: Instead, filter 'system.cpu' and 'process.cpu' metrics.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.binders.uptime.enabled
      comment: This property is deprecated: Instead, filter 'process.uptime' and 'process.start.time' metrics.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: server.connection-timeout
      comment: This property is deprecated: Each server behaves differently. Use server specific properties instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.env.endpoints.query
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.env.endpoints.view
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.cassandra.load-balancing-policy
      comment: This property is deprecated: Implement a ClusterBuilderCustomizer bean instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.cassandra.reconnection-policy
      comment: This property is deprecated: Implement a ClusterBuilderCustomizer bean instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.cassandra.retry-policy
      comment: This property is deprecated: Implement a ClusterBuilderCustomizer bean instead.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.dry-run-output
      comment: This property is deprecated: Flyway pro edition only.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.error-handlers
      comment: This property is deprecated: Flyway pro edition only.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.undo-sql-migration-prefix
      comment: This property is deprecated: Flyway pro edition only.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.default-timeout
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.expiry-scanners
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.log-dir
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.one-phase-commit
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.periodic-recovery-period
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.recovery-backoff-period
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.recovery-db-pass
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.recovery-db-user
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.recovery-jms-pass
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.recovery-jms-user
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.recovery-modules
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.transaction-manager-id
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.narayana.xa-resource-orphan-filters
      comment: This property is deprecated: Narayana support has moved to third party starter.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.liquibase.check-change-log-location
      comment: This property is deprecated: Liquibase has it's own check that checks if the change log location exists making this property redundant.

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_1")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_REWRITE_SPRING}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_1")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_1</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_REWRITE_SPRING}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_1 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_2_1
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_1" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
Tyler Van Gorder, ashakirin, [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com)
