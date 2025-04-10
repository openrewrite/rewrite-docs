---
sidebar_label: "Migrate Spring Boot properties to 2.3"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Spring Boot properties to 2.3

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_3**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-23-properties.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/blob/main//issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.health.probes.enabled`
  * newPropertyKey: `management.endpoint.health.probes.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.metrics.distribution.sla`
  * newPropertyKey: `management.metrics.distribution.slo`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.acceptors`
  * newPropertyKey: `server.jetty.threads.acceptors`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.max-queue-capacity`
  * newPropertyKey: `server.jetty.threads.max-queue-capacity`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.max-threads`
  * newPropertyKey: `server.jetty.threads.max`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.min-threads`
  * newPropertyKey: `server.jetty.threads.min`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.selectors`
  * newPropertyKey: `server.jetty.threads.selectors`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.jetty.thread-idle-timeout`
  * newPropertyKey: `server.jetty.threads.idle-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.host-header`
  * newPropertyKey: `server.tomcat.remoteip.host-header`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.internal-proxies`
  * newPropertyKey: `server.tomcat.remoteip.internal-proxies`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.max-threads`
  * newPropertyKey: `server.tomcat.threads.max`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.min-spare-threads`
  * newPropertyKey: `server.tomcat.threads.min-spare`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.port-header`
  * newPropertyKey: `server.tomcat.remote.port-header`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.protocol-header`
  * newPropertyKey: `server.tomcat.remoteip.protocol-header`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.protocol-header-https-value`
  * newPropertyKey: `server.tomcat.remoteip.protocol-header-https-value`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.tomcat.remote-ip-header`
  * newPropertyKey: `server.tomcat.remoteip.remote-ip-header`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.undertow.io-threads`
  * newPropertyKey: `server.undertow.threads.io`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `server.undertow.worker-threads`
  * newPropertyKey: `server.undertow.threads.worker`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.bootstrap-hosts`
  * newPropertyKey: `spring.couchbase.connection-string`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.env.endpoints.queryservice.max-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.max-endpoints`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.env.endpoints.queryservice.min-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.min-endpoints`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.env.endpoints.viewservice.max-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.max-endpoints`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.couchbase.env.endpoints.viewservice.min-endpoints`
  * newPropertyKey: `spring.couchbase.env.io.min-endpoints`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.cluster-name`
  * newPropertyKey: `spring.data.cassandra.session-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.connect-timeout`
  * newPropertyKey: `spring.data.cassandra.connection.init-query-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.consistency-level`
  * newPropertyKey: `spring.data.cassandra.request.consistency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.fetch-size`
  * newPropertyKey: `spring.data.cassandra.request.page-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.pool.max-queue-size`
  * newPropertyKey: `spring.data.cassandra.request.throttler.max-queue-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.read-timeout`
  * newPropertyKey: `spring.data.cassandra.request.timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.cassandra.serial-consistency-level`
  * newPropertyKey: `spring.data.cassandra.request.serial-consistency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.converters.preferred-json-mapper`
  * newPropertyKey: `spring.mvc.converters.preferred-json-mapper`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.encoding.charset`
  * newPropertyKey: `server.servlet.encoding.charset`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.encoding.enabled`
  * newPropertyKey: `server.servlet.encoding.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.encoding.force`
  * newPropertyKey: `server.servlet.encoding.force`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.encoding.force-request`
  * newPropertyKey: `server.servlet.encoding.force-request`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.encoding.force-response`
  * newPropertyKey: `server.servlet.encoding.force-response`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.encoding.mapping`
  * newPropertyKey: `server.servlet.encoding.mapping`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.http.log-request-details`
  * newPropertyKey: `spring.mvc.log-request-details`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.mvc.date-format`
  * newPropertyKey: `spring.mvc.format.date`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.webflux.date-format`
  * newPropertyKey: `spring.webflux.format.date`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.ganglia.protocol-version`
  * comment: `This property is deprecated: No longer used by Micrometer.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.ganglia.rate-units`
  * comment: `This property is deprecated: No longer used by Micrometer.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.stackdriver.num-threads`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.wavefront.connect-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `management.metrics.export.wavefront.read-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.bucket.name`
  * comment: `This property is deprecated: A bucket is no longer auto-configured.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.bucket.password`
  * comment: `This property is deprecated: A bucket is no longer auto-configured.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.env.bootstrap.http-direct-port`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.env.bootstrap.http-ssl-port`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.env.endpoints.key-value`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.couchbase.env.timeouts.socket-connect`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.cassandra.jmx-enabled`
  * comment: `This property is deprecated: Cassandra no longer provides JMX metrics.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.cassandra.pool.pool-timeout`
  * comment: `This property is deprecated: No longer available.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.couchbase.consistency`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.data.solr.repositories.enabled`
  * comment: `This property is deprecated: Spring Data Solr is deprecated.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.connection-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.multi-threaded`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.password`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.proxy.host`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.proxy.port`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.read-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.elasticsearch.jest.username`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jackson.joda-date-time-format`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.allow-multiple-lrc`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.asynchronous2-pc`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.background-recovery-interval-seconds`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.current-node-only-recovery`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.debug-zero-resource-transaction`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.default-transaction-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.disable-jmx`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.exception-analyzer`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.filter-log-status`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.force-batching-enabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.forced-write-enabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.graceful-shutdown-interval`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.jndi-transaction-synchronization-registry-name`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.jndi-user-transaction-name`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.journal`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.log-part1-filename`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.log-part2-filename`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.max-log-size-in-mb`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.resource-configuration-filename`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.server-id`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.skip-corrupted-logs`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.warn-about-zero-resource-transaction`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.rabbitmq.listener.simple.transaction-size`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.rabbitmq.publisher-confirms`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_3
displayName: Migrate Spring Boot properties to 2.3
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.health.probes.enabled
      newPropertyKey: management.endpoint.health.probes.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.distribution.sla
      newPropertyKey: management.metrics.distribution.slo
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.acceptors
      newPropertyKey: server.jetty.threads.acceptors
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.max-queue-capacity
      newPropertyKey: server.jetty.threads.max-queue-capacity
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.max-threads
      newPropertyKey: server.jetty.threads.max
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.min-threads
      newPropertyKey: server.jetty.threads.min
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.selectors
      newPropertyKey: server.jetty.threads.selectors
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jetty.thread-idle-timeout
      newPropertyKey: server.jetty.threads.idle-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.host-header
      newPropertyKey: server.tomcat.remoteip.host-header
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.internal-proxies
      newPropertyKey: server.tomcat.remoteip.internal-proxies
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.max-threads
      newPropertyKey: server.tomcat.threads.max
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.min-spare-threads
      newPropertyKey: server.tomcat.threads.min-spare
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.port-header
      newPropertyKey: server.tomcat.remote.port-header
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.protocol-header
      newPropertyKey: server.tomcat.remoteip.protocol-header
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.protocol-header-https-value
      newPropertyKey: server.tomcat.remoteip.protocol-header-https-value
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.tomcat.remote-ip-header
      newPropertyKey: server.tomcat.remoteip.remote-ip-header
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.undertow.io-threads
      newPropertyKey: server.undertow.threads.io
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.undertow.worker-threads
      newPropertyKey: server.undertow.threads.worker
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.bootstrap-hosts
      newPropertyKey: spring.couchbase.connection-string
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.queryservice.max-endpoints
      newPropertyKey: spring.couchbase.env.io.max-endpoints
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.queryservice.min-endpoints
      newPropertyKey: spring.couchbase.env.io.min-endpoints
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.viewservice.max-endpoints
      newPropertyKey: spring.couchbase.env.io.max-endpoints
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.viewservice.min-endpoints
      newPropertyKey: spring.couchbase.env.io.min-endpoints
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.cluster-name
      newPropertyKey: spring.data.cassandra.session-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.connect-timeout
      newPropertyKey: spring.data.cassandra.connection.init-query-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.consistency-level
      newPropertyKey: spring.data.cassandra.request.consistency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.fetch-size
      newPropertyKey: spring.data.cassandra.request.page-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.pool.max-queue-size
      newPropertyKey: spring.data.cassandra.request.throttler.max-queue-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.read-timeout
      newPropertyKey: spring.data.cassandra.request.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.serial-consistency-level
      newPropertyKey: spring.data.cassandra.request.serial-consistency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.converters.preferred-json-mapper
      newPropertyKey: spring.mvc.converters.preferred-json-mapper
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.encoding.charset
      newPropertyKey: server.servlet.encoding.charset
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.encoding.enabled
      newPropertyKey: server.servlet.encoding.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.encoding.force
      newPropertyKey: server.servlet.encoding.force
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.encoding.force-request
      newPropertyKey: server.servlet.encoding.force-request
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.encoding.force-response
      newPropertyKey: server.servlet.encoding.force-response
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.encoding.mapping
      newPropertyKey: server.servlet.encoding.mapping
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.log-request-details
      newPropertyKey: spring.mvc.log-request-details
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.date-format
      newPropertyKey: spring.mvc.format.date
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.webflux.date-format
      newPropertyKey: spring.webflux.format.date
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.ganglia.protocol-version
      comment: This property is deprecated: No longer used by Micrometer.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.ganglia.rate-units
      comment: This property is deprecated: No longer used by Micrometer.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.stackdriver.num-threads
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.wavefront.connect-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: management.metrics.export.wavefront.read-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.bucket.name
      comment: This property is deprecated: A bucket is no longer auto-configured.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.bucket.password
      comment: This property is deprecated: A bucket is no longer auto-configured.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.env.bootstrap.http-direct-port
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.env.bootstrap.http-ssl-port
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.env.endpoints.key-value
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.couchbase.env.timeouts.socket-connect
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.cassandra.jmx-enabled
      comment: This property is deprecated: Cassandra no longer provides JMX metrics.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.cassandra.pool.pool-timeout
      comment: This property is deprecated: No longer available.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.couchbase.consistency
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.data.solr.repositories.enabled
      comment: This property is deprecated: Spring Data Solr is deprecated.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.connection-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.multi-threaded
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.password
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.proxy.host
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.proxy.port
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.read-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.elasticsearch.jest.username
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jackson.joda-date-time-format
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.allow-multiple-lrc
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.asynchronous2-pc
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.background-recovery-interval-seconds
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.current-node-only-recovery
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.debug-zero-resource-transaction
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.default-transaction-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.disable-jmx
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.exception-analyzer
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.filter-log-status
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.force-batching-enabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.forced-write-enabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.graceful-shutdown-interval
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.jndi-transaction-synchronization-registry-name
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.jndi-user-transaction-name
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.journal
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.log-part1-filename
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.log-part2-filename
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.max-log-size-in-mb
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.resource-configuration-filename
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.server-id
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.skip-corrupted-logs
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.warn-about-zero-resource-transaction
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.rabbitmq.listener.simple.transaction-size
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.rabbitmq.publisher-confirms
      comment: This property is deprecated and will be removed in future Spring Boot versions

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
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_3")
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
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_3")
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
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_3</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_3 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_2_3
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_3" />

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
ashakirin, Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Kyle Scully](mailto:scullykns@gmail.com)
