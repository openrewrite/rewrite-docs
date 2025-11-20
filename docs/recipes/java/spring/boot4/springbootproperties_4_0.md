---
sidebar_label: "Migrate Spring Boot properties to 4.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 4.0

**org.openrewrite.java.spring.boot4.SpringBootProperties\_4\_0**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-40-properties.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.health.mongo.enabled`
  * newPropertyKey: `management.health.mongodb.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.mongo.command.enabled`
  * newPropertyKey: `management.metrics.mongodb.command.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.mongo.connectionpool.enabled`
  * newPropertyKey: `management.metrics.mongodb.connectionpool.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.observations.long-task-timer.enabled`
  * newPropertyKey: `management.metrics.observations.ignored-meters`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.compression`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp.compression`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.connect-timeout`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp.connect-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.endpoint`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp.endpoint`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.export.enabled`
  * newPropertyKey: `management.logging.export.otlp.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.headers`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp.headers`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.timeout`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp.timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.logging.transport`
  * newPropertyKey: `management.opentelemetry.logging.export.otlp.transport`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.compression`
  * newPropertyKey: `management.opentelemetry.tracing.export.otlp.compression`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.connect-timeout`
  * newPropertyKey: `management.opentelemetry.tracing.export.otlp.connect-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.endpoint`
  * newPropertyKey: `management.opentelemetry.tracing.export.otlp.endpoint`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.export.enabled`
  * newPropertyKey: `management.tracing.export.otlp.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.headers`
  * newPropertyKey: `management.opentelemetry.tracing.export.otlp.headers`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.timeout`
  * newPropertyKey: `management.opentelemetry.tracing.export.otlp.timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.otlp.tracing.transport`
  * newPropertyKey: `management.opentelemetry.tracing.export.otlp.transport`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.brave.span-joining-supported`
  * newPropertyKey: `management.brave.tracing.span-joining-supported`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.enabled`
  * newPropertyKey: `management.tracing.export.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.opentelemetry.export.include-unsampled`
  * newPropertyKey: `management.opentelemetry.tracing.export.include-unsampled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.opentelemetry.export.max-batch-size`
  * newPropertyKey: `management.opentelemetry.tracing.export.max-batch-size`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.opentelemetry.export.max-queue-size`
  * newPropertyKey: `management.opentelemetry.tracing.export.max-queue-size`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.opentelemetry.export.schedule-delay`
  * newPropertyKey: `management.opentelemetry.tracing.export.schedule-delay`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.tracing.opentelemetry.export.timeout`
  * newPropertyKey: `management.opentelemetry.tracing.export.timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.zipkin.tracing.connect-timeout`
  * newPropertyKey: `management.tracing.export.zipkin.connect-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.zipkin.tracing.encoding`
  * newPropertyKey: `management.tracing.export.zipkin.encoding`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.zipkin.tracing.endpoint`
  * newPropertyKey: `management.tracing.export.zipkin.endpoint`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.zipkin.tracing.export.enabled`
  * newPropertyKey: `management.tracing.export.zipkin.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.zipkin.tracing.read-timeout`
  * newPropertyKey: `management.tracing.export.zipkin.read-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet.encoding.charset`
  * newPropertyKey: `spring.servlet.encoding.charset`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet.encoding.enabled`
  * newPropertyKey: `spring.servlet.encoding.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet.encoding.force`
  * newPropertyKey: `spring.servlet.encoding.force`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet.encoding.force-request`
  * newPropertyKey: `spring.servlet.encoding.force-request`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.servlet.encoding.force-response`
  * newPropertyKey: `spring.servlet.encoding.force-response`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.dao.exceptiontranslation.enabled`
  * newPropertyKey: `spring.persistence.exceptiontranslation.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.additional-hosts`
  * newPropertyKey: `spring.mongodb.additional-hosts`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.authentication-database`
  * newPropertyKey: `spring.mongodb.authentication-database`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.database`
  * newPropertyKey: `spring.mongodb.database`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.host`
  * newPropertyKey: `spring.mongodb.host`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.password`
  * newPropertyKey: `spring.mongodb.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.port`
  * newPropertyKey: `spring.mongodb.port`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.protocol`
  * newPropertyKey: `spring.mongodb.protocol`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.replica-set-name`
  * newPropertyKey: `spring.mongodb.replica-set-name`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.ssl.bundle`
  * newPropertyKey: `spring.mongodb.ssl.bundle`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.ssl.enabled`
  * newPropertyKey: `spring.mongodb.ssl.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.uri`
  * newPropertyKey: `spring.mongodb.uri`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.username`
  * newPropertyKey: `spring.mongodb.username`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.mongodb.uuid-representation`
  * newPropertyKey: `spring.mongodb.representation.uuid`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.client.connect-timeout`
  * newPropertyKey: `spring.http.clients.connect-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.client.factory`
  * newPropertyKey: `spring.http.clients.imperative.factory`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.client.read-timeout`
  * newPropertyKey: `spring.http.clients.read-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.client.redirects`
  * newPropertyKey: `spring.http.clients.redirects`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.client.ssl.bundle`
  * newPropertyKey: `spring.http.clients.ssl.bundle`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.reactiveclient.connect-timeout`
  * newPropertyKey: `spring.http.clients.connect-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.reactiveclient.connector`
  * newPropertyKey: `spring.http.clients.reactive.connector`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.reactiveclient.read-timeout`
  * newPropertyKey: `spring.http.clients.read-timeout`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.reactiveclient.redirects`
  * newPropertyKey: `spring.http.clients.redirects`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.reactiveclient.ssl.bundle`
  * newPropertyKey: `spring.http.clients.ssl.bundle`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.jackson.read`
  * newPropertyKey: `spring.jackson.json.read`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.jackson.write`
  * newPropertyKey: `spring.jackson.json.write`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.kafka.retry.topic.backoff.random`
  * newPropertyKey: `spring.kafka.retry.topic.backoff.jitter`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.session.redis.cleanup-cron`
  * newPropertyKey: `spring.session.data.redis.cleanup-cron`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.session.redis.configure-action`
  * newPropertyKey: `spring.session.data.redis.configure-action`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.session.redis.flush-mode`
  * newPropertyKey: `spring.session.data.redis.flush-mode`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.session.redis.namespace`
  * newPropertyKey: `spring.session.data.redis.namespace`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.session.redis.repository-type`
  * newPropertyKey: `spring.session.data.redis.repository-type`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.session.redis.save-mode`
  * newPropertyKey: `spring.session.data.redis.save-mode`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.test.mockmvc.webclient.enabled`
  * newPropertyKey: `spring.test.mockmvc.htmlunit.webclient.enabled`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.test.mockmvc.webdriver.enabled`
  * newPropertyKey: `spring.test.mockmvc.htmlunit.webdriver.enabled`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.api-token`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.api-token-type`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.application.cluster-name`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.application.custom-tags`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.application.name`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.application.service-name`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.application.shard-name`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.batch-size`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.connect-timeout`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.enabled`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.global-prefix`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.read-timeout`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.report-day-distribution`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.report-hour-distribution`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.report-minute-distribution`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.metrics.export.step`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.sender.batch-size`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.sender.flush-interval`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.sender.max-queue-size`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.sender.message-size`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.source`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.trace-derived-custom-tag-keys`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.tracing.export.enabled`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.wavefront.uri`
  * comment: `This property is deprecated: Wavefront is end-of-life.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.freemarker.enabled`
  * comment: `This property is deprecated: No longer required. To use FreeMarker without auto-configuration, depend directly on FreeMarker instead of spring-boot-freemarker.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.groovy.template.enabled`
  * comment: `This property is deprecated: No longer required. To use Groovy Templates without auto-configuration, depend directly on Groovy Templates instead of spring-boot-groovy-templates.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson.generator`
  * comment: `This property is deprecated: Partially replaced by 'spring.jackson.json.read'.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson.parser`
  * comment: `This property is deprecated: Partially replaced by 'spring.jackson.json.write'.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.constructor-detector`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.datatype.enum`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.datatype.json-node`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.date-format`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.default-leniency`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.default-property-inclusion`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.deserialization`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.generator`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.locale`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.mapper`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.parser`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.property-naming-strategy`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.serialization`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.time-zone`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson2.visibility`
  * comment: `This property is deprecated: Deprecated in favor of Jackson 3`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.mustache.enabled`
  * comment: `This property is deprecated: No longer required. To use Mustache without auto-configuration, depend directly on Mustache instead of spring-boot-mustache.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.neo4j.pool.metrics-enabled`
  * comment: `This property is deprecated: Use 'management.metrics.enable' to restrict certain metrics.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.test.observability.auto-configure`
  * comment: `This property is deprecated: Superseded by 'spring.test.metrics.export' and 'spring.test.tracing.export'.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.thymeleaf.enabled`
  * comment: `This property is deprecated: No longer required. To use Thymeleaf without auto-configuration, depend directly on Thymeleaf instead of spring-boot-thymeleaf.`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot4.SpringBootProperties_4_0
displayName: Migrate Spring Boot properties to 4.0
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.health.mongo.enabled
      newPropertyKey: management.health.mongodb.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.mongo.command.enabled
      newPropertyKey: management.metrics.mongodb.command.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.mongo.connectionpool.enabled
      newPropertyKey: management.metrics.mongodb.connectionpool.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.observations.long-task-timer.enabled
      newPropertyKey: management.metrics.observations.ignored-meters
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging
      newPropertyKey: management.opentelemetry.logging.export.otlp
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.compression
      newPropertyKey: management.opentelemetry.logging.export.otlp.compression
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.connect-timeout
      newPropertyKey: management.opentelemetry.logging.export.otlp.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.endpoint
      newPropertyKey: management.opentelemetry.logging.export.otlp.endpoint
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.export.enabled
      newPropertyKey: management.logging.export.otlp.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.headers
      newPropertyKey: management.opentelemetry.logging.export.otlp.headers
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.timeout
      newPropertyKey: management.opentelemetry.logging.export.otlp.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.logging.transport
      newPropertyKey: management.opentelemetry.logging.export.otlp.transport
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.compression
      newPropertyKey: management.opentelemetry.tracing.export.otlp.compression
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.connect-timeout
      newPropertyKey: management.opentelemetry.tracing.export.otlp.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.endpoint
      newPropertyKey: management.opentelemetry.tracing.export.otlp.endpoint
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.export.enabled
      newPropertyKey: management.tracing.export.otlp.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.headers
      newPropertyKey: management.opentelemetry.tracing.export.otlp.headers
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.timeout
      newPropertyKey: management.opentelemetry.tracing.export.otlp.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.otlp.tracing.transport
      newPropertyKey: management.opentelemetry.tracing.export.otlp.transport
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.brave.span-joining-supported
      newPropertyKey: management.brave.tracing.span-joining-supported
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.enabled
      newPropertyKey: management.tracing.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.opentelemetry.export.include-unsampled
      newPropertyKey: management.opentelemetry.tracing.export.include-unsampled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.opentelemetry.export.max-batch-size
      newPropertyKey: management.opentelemetry.tracing.export.max-batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.opentelemetry.export.max-queue-size
      newPropertyKey: management.opentelemetry.tracing.export.max-queue-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.opentelemetry.export.schedule-delay
      newPropertyKey: management.opentelemetry.tracing.export.schedule-delay
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.tracing.opentelemetry.export.timeout
      newPropertyKey: management.opentelemetry.tracing.export.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.zipkin.tracing.connect-timeout
      newPropertyKey: management.tracing.export.zipkin.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.zipkin.tracing.encoding
      newPropertyKey: management.tracing.export.zipkin.encoding
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.zipkin.tracing.endpoint
      newPropertyKey: management.tracing.export.zipkin.endpoint
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.zipkin.tracing.export.enabled
      newPropertyKey: management.tracing.export.zipkin.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.zipkin.tracing.read-timeout
      newPropertyKey: management.tracing.export.zipkin.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.encoding.charset
      newPropertyKey: spring.servlet.encoding.charset
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.encoding.enabled
      newPropertyKey: spring.servlet.encoding.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.encoding.force
      newPropertyKey: spring.servlet.encoding.force
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.encoding.force-request
      newPropertyKey: spring.servlet.encoding.force-request
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet.encoding.force-response
      newPropertyKey: spring.servlet.encoding.force-response
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.dao.exceptiontranslation.enabled
      newPropertyKey: spring.persistence.exceptiontranslation.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.additional-hosts
      newPropertyKey: spring.mongodb.additional-hosts
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.authentication-database
      newPropertyKey: spring.mongodb.authentication-database
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.database
      newPropertyKey: spring.mongodb.database
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.host
      newPropertyKey: spring.mongodb.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.password
      newPropertyKey: spring.mongodb.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.port
      newPropertyKey: spring.mongodb.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.protocol
      newPropertyKey: spring.mongodb.protocol
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.replica-set-name
      newPropertyKey: spring.mongodb.replica-set-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.ssl.bundle
      newPropertyKey: spring.mongodb.ssl.bundle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.ssl.enabled
      newPropertyKey: spring.mongodb.ssl.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.uri
      newPropertyKey: spring.mongodb.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.username
      newPropertyKey: spring.mongodb.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.uuid-representation
      newPropertyKey: spring.mongodb.representation.uuid
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.client.connect-timeout
      newPropertyKey: spring.http.clients.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.client.factory
      newPropertyKey: spring.http.clients.imperative.factory
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.client.read-timeout
      newPropertyKey: spring.http.clients.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.client.redirects
      newPropertyKey: spring.http.clients.redirects
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.client.ssl.bundle
      newPropertyKey: spring.http.clients.ssl.bundle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.reactiveclient.connect-timeout
      newPropertyKey: spring.http.clients.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.reactiveclient.connector
      newPropertyKey: spring.http.clients.reactive.connector
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.reactiveclient.read-timeout
      newPropertyKey: spring.http.clients.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.reactiveclient.redirects
      newPropertyKey: spring.http.clients.redirects
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.reactiveclient.ssl.bundle
      newPropertyKey: spring.http.clients.ssl.bundle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.jackson.read
      newPropertyKey: spring.jackson.json.read
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.jackson.write
      newPropertyKey: spring.jackson.json.write
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.kafka.retry.topic.backoff.random
      newPropertyKey: spring.kafka.retry.topic.backoff.jitter
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.redis.cleanup-cron
      newPropertyKey: spring.session.data.redis.cleanup-cron
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.redis.configure-action
      newPropertyKey: spring.session.data.redis.configure-action
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.redis.flush-mode
      newPropertyKey: spring.session.data.redis.flush-mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.redis.namespace
      newPropertyKey: spring.session.data.redis.namespace
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.redis.repository-type
      newPropertyKey: spring.session.data.redis.repository-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.redis.save-mode
      newPropertyKey: spring.session.data.redis.save-mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.test.mockmvc.webclient.enabled
      newPropertyKey: spring.test.mockmvc.htmlunit.webclient.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.test.mockmvc.webdriver.enabled
      newPropertyKey: spring.test.mockmvc.htmlunit.webdriver.enabled
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.api-token
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.api-token-type
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.application.cluster-name
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.application.custom-tags
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.application.name
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.application.service-name
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.application.shard-name
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.batch-size
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.connect-timeout
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.enabled
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.global-prefix
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.read-timeout
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.report-day-distribution
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.report-hour-distribution
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.report-minute-distribution
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.metrics.export.step
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.sender.batch-size
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.sender.flush-interval
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.sender.max-queue-size
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.sender.message-size
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.source
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.trace-derived-custom-tag-keys
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.tracing.export.enabled
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.wavefront.uri
      comment: This property is deprecated: Wavefront is end-of-life.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.freemarker.enabled
      comment: This property is deprecated: No longer required. To use FreeMarker without auto-configuration, depend directly on FreeMarker instead of spring-boot-freemarker.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.groovy.template.enabled
      comment: This property is deprecated: No longer required. To use Groovy Templates without auto-configuration, depend directly on Groovy Templates instead of spring-boot-groovy-templates.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson.generator
      comment: This property is deprecated: Partially replaced by 'spring.jackson.json.read'.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson.parser
      comment: This property is deprecated: Partially replaced by 'spring.jackson.json.write'.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.constructor-detector
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.datatype.enum
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.datatype.json-node
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.date-format
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.default-leniency
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.default-property-inclusion
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.deserialization
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.generator
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.locale
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.mapper
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.parser
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.property-naming-strategy
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.serialization
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.time-zone
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson2.visibility
      comment: This property is deprecated: Deprecated in favor of Jackson 3
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.mustache.enabled
      comment: This property is deprecated: No longer required. To use Mustache without auto-configuration, depend directly on Mustache instead of spring-boot-mustache.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.neo4j.pool.metrics-enabled
      comment: This property is deprecated: Use 'management.metrics.enable' to restrict certain metrics.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.test.observability.auto-configure
      comment: This property is deprecated: Superseded by 'spring.test.metrics.export' and 'spring.test.tracing.export'.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.thymeleaf.enabled
      comment: This property is deprecated: No longer required. To use Thymeleaf without auto-configuration, depend directly on Thymeleaf instead of spring-boot-thymeleaf.

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 4.0 (Community Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot4.SpringBootProperties_4_0")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
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
        rewrite("org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot4.SpringBootProperties_4_0")
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
            <recipe>org.openrewrite.java.spring.boot4.SpringBootProperties_4_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot4.SpringBootProperties_4_0 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_4_0
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot4.SpringBootProperties_4_0" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
