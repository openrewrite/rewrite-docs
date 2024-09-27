# Migrate Spring Boot properties to 3.0

**org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_0**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-30-properties.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.20.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.20.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.api-token`
  * newPropertyKey: `management.appoptics.metrics.export.api-token`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.batch-size`
  * newPropertyKey: `management.appoptics.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.connect-timeout`
  * newPropertyKey: `management.appoptics.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.enabled`
  * newPropertyKey: `management.appoptics.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.floor-times`
  * newPropertyKey: `management.appoptics.metrics.export.floor-times`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.host-tag`
  * newPropertyKey: `management.appoptics.metrics.export.host-tag`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.read-timeout`
  * newPropertyKey: `management.appoptics.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.step`
  * newPropertyKey: `management.appoptics.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.appoptics.uri`
  * newPropertyKey: `management.appoptics.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.batch-size`
  * newPropertyKey: `management.atlas.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.config-refresh-frequency`
  * newPropertyKey: `management.atlas.metrics.export.config-refresh-frequency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.config-time-to-live`
  * newPropertyKey: `management.atlas.metrics.export.config-time-to-live`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.config-uri`
  * newPropertyKey: `management.atlas.metrics.export.config-uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.connect-timeout`
  * newPropertyKey: `management.atlas.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.enabled`
  * newPropertyKey: `management.atlas.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.eval-uri`
  * newPropertyKey: `management.atlas.metrics.export.eval-uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.lwc-enabled`
  * newPropertyKey: `management.atlas.metrics.export.lwc-enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.meter-time-to-live`
  * newPropertyKey: `management.atlas.metrics.export.meter-time-to-live`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.num-threads`
  * newPropertyKey: `management.atlas.metrics.export.num-threads`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.read-timeout`
  * newPropertyKey: `management.atlas.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.step`
  * newPropertyKey: `management.atlas.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.atlas.uri`
  * newPropertyKey: `management.atlas.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.api-key`
  * newPropertyKey: `management.datadog.metrics.export.api-key`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.application-key`
  * newPropertyKey: `management.datadog.metrics.export.application-key`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.batch-size`
  * newPropertyKey: `management.datadog.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.connect-timeout`
  * newPropertyKey: `management.datadog.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.descriptions`
  * newPropertyKey: `management.datadog.metrics.export.descriptions`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.enabled`
  * newPropertyKey: `management.datadog.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.host-tag`
  * newPropertyKey: `management.datadog.metrics.export.host-tag`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.num-threads`
  * newPropertyKey: `management.datadog.metrics.export.num-threads`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.read-timeout`
  * newPropertyKey: `management.datadog.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.step`
  * newPropertyKey: `management.datadog.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.datadog.uri`
  * newPropertyKey: `management.datadog.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.defaults.enabled`
  * newPropertyKey: `management.defaults.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.api-token`
  * newPropertyKey: `management.dynatrace.metrics.export.api-token`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.batch-size`
  * newPropertyKey: `management.dynatrace.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.connect-timeout`
  * newPropertyKey: `management.dynatrace.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.device-id`
  * newPropertyKey: `management.dynatrace.metrics.export.device-id`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.enabled`
  * newPropertyKey: `management.dynatrace.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.group`
  * newPropertyKey: `management.dynatrace.metrics.export.group`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.read-timeout`
  * newPropertyKey: `management.dynatrace.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.step`
  * newPropertyKey: `management.dynatrace.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.technology-type`
  * newPropertyKey: `management.dynatrace.metrics.export.technology-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.uri`
  * newPropertyKey: `management.dynatrace.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.v1.device-id`
  * newPropertyKey: `management.dynatrace.metrics.export.v1.device-id`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.v1.group`
  * newPropertyKey: `management.dynatrace.metrics.export.v1.group`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.v1.technology-type`
  * newPropertyKey: `management.dynatrace.metrics.export.v1.technology-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.v2.default-dimensions`
  * newPropertyKey: `management.dynatrace.metrics.export.v2.default-dimensions`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.v2.enrich-with-dynatrace-metadata`
  * newPropertyKey: `management.dynatrace.metrics.export.v2.enrich-with-dynatrace-metadata`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.dynatrace.v2.metric-key-prefix`
  * newPropertyKey: `management.dynatrace.metrics.export.v2.metric-key-prefix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.api-key-credentials`
  * newPropertyKey: `management.elastic.metrics.export.api-key-credentials`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.auto-create-index`
  * newPropertyKey: `management.elastic.metrics.export.auto-create-index`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.batch-size`
  * newPropertyKey: `management.elastic.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.connect-timeout`
  * newPropertyKey: `management.elastic.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.enabled`
  * newPropertyKey: `management.elastic.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.host`
  * newPropertyKey: `management.elastic.metrics.export.host`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.index`
  * newPropertyKey: `management.elastic.metrics.export.index`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.index-date-format`
  * newPropertyKey: `management.elastic.metrics.export.index-date-format`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.index-date-separator`
  * newPropertyKey: `management.elastic.metrics.export.index-date-separator`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.password`
  * newPropertyKey: `management.elastic.metrics.export.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.pipeline`
  * newPropertyKey: `management.elastic.metrics.export.pipeline`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.read-timeout`
  * newPropertyKey: `management.elastic.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.step`
  * newPropertyKey: `management.elastic.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.timestamp-field-name`
  * newPropertyKey: `management.elastic.metrics.export.timestamp-field-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.elastic.user-name`
  * newPropertyKey: `management.elastic.metrics.export.user-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.addressing-mode`
  * newPropertyKey: `management.ganglia.metrics.export.addressing-mode`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.duration-units`
  * newPropertyKey: `management.ganglia.metrics.export.duration-units`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.enabled`
  * newPropertyKey: `management.ganglia.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.host`
  * newPropertyKey: `management.ganglia.metrics.export.host`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.port`
  * newPropertyKey: `management.ganglia.metrics.export.port`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.protocol-version`
  * newPropertyKey: `management.ganglia.metrics.export.protocol-version`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.rate-units`
  * newPropertyKey: `management.ganglia.metrics.export.rate-units`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.step`
  * newPropertyKey: `management.ganglia.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.ganglia.time-to-live`
  * newPropertyKey: `management.ganglia.metrics.export.time-to-live`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.duration-units`
  * newPropertyKey: `management.graphite.metrics.export.duration-units`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.enabled`
  * newPropertyKey: `management.graphite.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.graphite-tags-enabled`
  * newPropertyKey: `management.graphite.metrics.export.graphite-tags-enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.host`
  * newPropertyKey: `management.graphite.metrics.export.host`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.port`
  * newPropertyKey: `management.graphite.metrics.export.port`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.protocol`
  * newPropertyKey: `management.graphite.metrics.export.protocol`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.rate-units`
  * newPropertyKey: `management.graphite.metrics.export.rate-units`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.step`
  * newPropertyKey: `management.graphite.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.graphite.tags-as-prefix`
  * newPropertyKey: `management.graphite.metrics.export.tags-as-prefix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.api-token`
  * newPropertyKey: `management.humio.metrics.export.api-token`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.batch-size`
  * newPropertyKey: `management.humio.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.connect-timeout`
  * newPropertyKey: `management.humio.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.enabled`
  * newPropertyKey: `management.humio.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.read-timeout`
  * newPropertyKey: `management.humio.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.step`
  * newPropertyKey: `management.humio.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.tags`
  * newPropertyKey: `management.humio.metrics.export.tags`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.humio.uri`
  * newPropertyKey: `management.humio.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.api-version`
  * newPropertyKey: `management.influx.metrics.export.api-version`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.auto-create-db`
  * newPropertyKey: `management.influx.metrics.export.auto-create-db`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.batch-size`
  * newPropertyKey: `management.influx.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.bucket`
  * newPropertyKey: `management.influx.metrics.export.bucket`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.compressed`
  * newPropertyKey: `management.influx.metrics.export.compressed`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.connect-timeout`
  * newPropertyKey: `management.influx.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.consistency`
  * newPropertyKey: `management.influx.metrics.export.consistency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.db`
  * newPropertyKey: `management.influx.metrics.export.db`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.enabled`
  * newPropertyKey: `management.influx.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.num-threads`
  * newPropertyKey: `management.influx.metrics.export.num-threads`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.org`
  * newPropertyKey: `management.influx.metrics.export.org`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.password`
  * newPropertyKey: `management.influx.metrics.export.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.read-timeout`
  * newPropertyKey: `management.influx.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.retention-duration`
  * newPropertyKey: `management.influx.metrics.export.retention-duration`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.retention-policy`
  * newPropertyKey: `management.influx.metrics.export.retention-policy`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.retention-replication-factor`
  * newPropertyKey: `management.influx.metrics.export.retention-replication-factor`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.retention-shard-duration`
  * newPropertyKey: `management.influx.metrics.export.retention-shard-duration`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.step`
  * newPropertyKey: `management.influx.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.token`
  * newPropertyKey: `management.influx.metrics.export.token`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.uri`
  * newPropertyKey: `management.influx.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.influx.user-name`
  * newPropertyKey: `management.influx.metrics.export.user-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.jmx.domain`
  * newPropertyKey: `management.jmx.metrics.export.domain`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.jmx.enabled`
  * newPropertyKey: `management.jmx.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.jmx.step`
  * newPropertyKey: `management.jmx.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.batch-size`
  * newPropertyKey: `management.kairos.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.connect-timeout`
  * newPropertyKey: `management.kairos.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.enabled`
  * newPropertyKey: `management.kairos.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.password`
  * newPropertyKey: `management.kairos.metrics.export.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.read-timeout`
  * newPropertyKey: `management.kairos.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.step`
  * newPropertyKey: `management.kairos.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.uri`
  * newPropertyKey: `management.kairos.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.kairos.user-name`
  * newPropertyKey: `management.kairos.metrics.export.user-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.account-id`
  * newPropertyKey: `management.newrelic.metrics.export.account-id`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.api-key`
  * newPropertyKey: `management.newrelic.metrics.export.api-key`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.batch-size`
  * newPropertyKey: `management.newrelic.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.client-provider-type`
  * newPropertyKey: `management.newrelic.metrics.export.client-provider-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.connect-timeout`
  * newPropertyKey: `management.newrelic.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.enabled`
  * newPropertyKey: `management.newrelic.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.event-type`
  * newPropertyKey: `management.newrelic.metrics.export.event-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.meter-name-event-type-enabled`
  * newPropertyKey: `management.newrelic.metrics.export.meter-name-event-type-enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.num-threads`
  * newPropertyKey: `management.newrelic.metrics.export.num-threads`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.read-timeout`
  * newPropertyKey: `management.newrelic.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.step`
  * newPropertyKey: `management.newrelic.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.newrelic.uri`
  * newPropertyKey: `management.newrelic.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.descriptions`
  * newPropertyKey: `management.prometheus.metrics.export.descriptions`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.enabled`
  * newPropertyKey: `management.prometheus.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.histogram-flavor`
  * newPropertyKey: `management.prometheus.metrics.export.histogram-flavor`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.base-url`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.base-url`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.enabled`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.grouping-key`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.grouping-key`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.job`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.job`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.password`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.push-rate`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.push-rate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.shutdown-operation`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.shutdown-operation`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.pushgateway.username`
  * newPropertyKey: `management.prometheus.metrics.export.pushgateway.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.prometheus.step`
  * newPropertyKey: `management.prometheus.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.access-token`
  * newPropertyKey: `management.signalfx.metrics.export.access-token`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.batch-size`
  * newPropertyKey: `management.signalfx.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.connect-timeout`
  * newPropertyKey: `management.signalfx.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.enabled`
  * newPropertyKey: `management.signalfx.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.num-threads`
  * newPropertyKey: `management.signalfx.metrics.export.num-threads`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.published-histogram-type`
  * newPropertyKey: `management.signalfx.metrics.export.published-histogram-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.read-timeout`
  * newPropertyKey: `management.signalfx.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.source`
  * newPropertyKey: `management.signalfx.metrics.export.source`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.step`
  * newPropertyKey: `management.signalfx.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.signalfx.uri`
  * newPropertyKey: `management.signalfx.metrics.export.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.simple.enabled`
  * newPropertyKey: `management.simple.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.simple.mode`
  * newPropertyKey: `management.simple.metrics.export.mode`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.simple.step`
  * newPropertyKey: `management.simple.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.batch-size`
  * newPropertyKey: `management.stackdriver.metrics.export.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.connect-timeout`
  * newPropertyKey: `management.stackdriver.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.enabled`
  * newPropertyKey: `management.stackdriver.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.project-id`
  * newPropertyKey: `management.stackdriver.metrics.export.project-id`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.read-timeout`
  * newPropertyKey: `management.stackdriver.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.resource-labels`
  * newPropertyKey: `management.stackdriver.metrics.export.resource-labels`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.resource-type`
  * newPropertyKey: `management.stackdriver.metrics.export.resource-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.step`
  * newPropertyKey: `management.stackdriver.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.stackdriver.use-semantic-metric-types`
  * newPropertyKey: `management.stackdriver.metrics.export.use-semantic-metric-types`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.enabled`
  * newPropertyKey: `management.statsd.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.flavor`
  * newPropertyKey: `management.statsd.metrics.export.flavor`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.host`
  * newPropertyKey: `management.statsd.metrics.export.host`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.max-packet-length`
  * newPropertyKey: `management.statsd.metrics.export.max-packet-length`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.polling-frequency`
  * newPropertyKey: `management.statsd.metrics.export.polling-frequency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.port`
  * newPropertyKey: `management.statsd.metrics.export.port`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.protocol`
  * newPropertyKey: `management.statsd.metrics.export.protocol`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.statsd.publish-unchanged-meters`
  * newPropertyKey: `management.statsd.metrics.export.publish-unchanged-meters`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.api-token`
  * newPropertyKey: `management.wavefront.api-token`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.batch-size`
  * newPropertyKey: `management.wavefront.sender.batch-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.connect-timeout`
  * newPropertyKey: `management.wavefront.metrics.export.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.enabled`
  * newPropertyKey: `management.wavefront.metrics.export.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.global-prefix`
  * newPropertyKey: `management.wavefront.metrics.export.global-prefix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.num-threads`
  * newPropertyKey: `management.wavefront.metrics.export.num-threads`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.read-timeout`
  * newPropertyKey: `management.wavefront.metrics.export.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.sender.flush-interval`
  * newPropertyKey: `management.wavefront.sender.flush-interval`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.sender.max-queue-size`
  * newPropertyKey: `management.wavefront.sender.max-queue-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.sender.message-size`
  * newPropertyKey: `management.wavefront.sender.message-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.source`
  * newPropertyKey: `management.wavefront.source`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.step`
  * newPropertyKey: `management.wavefront.metrics.export.step`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.export.wavefront.uri`
  * newPropertyKey: `management.wavefront.uri`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.web.client.request.metric-name`
  * newPropertyKey: `management.observations.http.client.requests.name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.metrics.web.server.request.metric-name`
  * newPropertyKey: `management.observations.http.server.requests.name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.trace.http.enabled`
  * newPropertyKey: `management.httpexchanges.recording.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.trace.http.include`
  * newPropertyKey: `management.httpexchanges.recording.include`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.undertow.allow-encoded-slash`
  * newPropertyKey: `server.undertow.decode-slash`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.compression`
  * newPropertyKey: `spring.cassandra.compression`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.config`
  * newPropertyKey: `spring.cassandra.config`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.connection.connect-timeout`
  * newPropertyKey: `spring.cassandra.connection.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.connection.init-query-timeout`
  * newPropertyKey: `spring.cassandra.connection.init-query-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.contact-points`
  * newPropertyKey: `spring.cassandra.contact-points`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.controlconnection.timeout`
  * newPropertyKey: `spring.cassandra.controlconnection.timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.keyspace-name`
  * newPropertyKey: `spring.cassandra.keyspace-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.local-datacenter`
  * newPropertyKey: `spring.cassandra.local-datacenter`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.password`
  * newPropertyKey: `spring.cassandra.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.pool.heartbeat-interval`
  * newPropertyKey: `spring.cassandra.pool.heartbeat-interval`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.pool.idle-timeout`
  * newPropertyKey: `spring.cassandra.pool.idle-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.port`
  * newPropertyKey: `spring.cassandra.port`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.consistency`
  * newPropertyKey: `spring.cassandra.request.consistency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.page-size`
  * newPropertyKey: `spring.cassandra.request.page-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.serial-consistency`
  * newPropertyKey: `spring.cassandra.request.serial-consistency`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.throttler.drain-interval`
  * newPropertyKey: `spring.cassandra.request.throttler.drain-interval`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.throttler.max-concurrent-requests`
  * newPropertyKey: `spring.cassandra.request.throttler.max-concurrent-requests`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.throttler.max-queue-size`
  * newPropertyKey: `spring.cassandra.request.throttler.max-queue-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.throttler.max-requests-per-second`
  * newPropertyKey: `spring.cassandra.request.throttler.max-requests-per-second`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.throttler.type`
  * newPropertyKey: `spring.cassandra.request.throttler.type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.request.timeout`
  * newPropertyKey: `spring.cassandra.request.timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.schema-action`
  * newPropertyKey: `spring.cassandra.schema-action`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.session-name`
  * newPropertyKey: `spring.cassandra.session-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.ssl`
  * newPropertyKey: `spring.cassandra.ssl`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.username`
  * newPropertyKey: `spring.cassandra.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.liquibase.labels`
  * newPropertyKey: `spring.liquibase.label-filter`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.client-name`
  * newPropertyKey: `spring.data.redis.client-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.client-type`
  * newPropertyKey: `spring.data.redis.client-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.cluster.max-redirects`
  * newPropertyKey: `spring.data.redis.cluster.max-redirects`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.cluster.nodes`
  * newPropertyKey: `spring.data.redis.cluster.nodes`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.connect-timeout`
  * newPropertyKey: `spring.data.redis.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.database`
  * newPropertyKey: `spring.data.redis.database`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.host`
  * newPropertyKey: `spring.data.redis.host`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.lettuce.cluster.refresh.adaptive`
  * newPropertyKey: `spring.data.redis.lettuce.cluster.refresh.adaptive`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.lettuce.cluster.refresh.dynamic-refresh-sources`
  * newPropertyKey: `spring.data.redis.lettuce.cluster.refresh.dynamic-refresh-sources`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.lettuce.cluster.refresh.period`
  * newPropertyKey: `spring.data.redis.lettuce.cluster.refresh.period`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.lettuce.shutdown-timeout`
  * newPropertyKey: `spring.data.redis.lettuce.shutdown-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.password`
  * newPropertyKey: `spring.data.redis.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.port`
  * newPropertyKey: `spring.data.redis.port`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.sentinel.master`
  * newPropertyKey: `spring.data.redis.sentinel.master`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.sentinel.nodes`
  * newPropertyKey: `spring.data.redis.sentinel.nodes`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.sentinel.password`
  * newPropertyKey: `spring.data.redis.sentinel.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.sentinel.username`
  * newPropertyKey: `spring.data.redis.sentinel.username`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.ssl`
  * newPropertyKey: `spring.data.redis.ssl`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.timeout`
  * newPropertyKey: `spring.data.redis.timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.url`
  * newPropertyKey: `spring.data.redis.url`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.username`
  * newPropertyKey: `spring.data.redis.username`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBootProperties_3_0
displayName: Migrate Spring Boot properties to 3.0
description: Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.api-token
      newPropertyKey: management.appoptics.metrics.export.api-token
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.batch-size
      newPropertyKey: management.appoptics.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.connect-timeout
      newPropertyKey: management.appoptics.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.enabled
      newPropertyKey: management.appoptics.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.floor-times
      newPropertyKey: management.appoptics.metrics.export.floor-times
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.host-tag
      newPropertyKey: management.appoptics.metrics.export.host-tag
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.read-timeout
      newPropertyKey: management.appoptics.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.step
      newPropertyKey: management.appoptics.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.appoptics.uri
      newPropertyKey: management.appoptics.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.batch-size
      newPropertyKey: management.atlas.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.config-refresh-frequency
      newPropertyKey: management.atlas.metrics.export.config-refresh-frequency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.config-time-to-live
      newPropertyKey: management.atlas.metrics.export.config-time-to-live
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.config-uri
      newPropertyKey: management.atlas.metrics.export.config-uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.connect-timeout
      newPropertyKey: management.atlas.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.enabled
      newPropertyKey: management.atlas.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.eval-uri
      newPropertyKey: management.atlas.metrics.export.eval-uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.lwc-enabled
      newPropertyKey: management.atlas.metrics.export.lwc-enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.meter-time-to-live
      newPropertyKey: management.atlas.metrics.export.meter-time-to-live
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.num-threads
      newPropertyKey: management.atlas.metrics.export.num-threads
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.read-timeout
      newPropertyKey: management.atlas.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.step
      newPropertyKey: management.atlas.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.atlas.uri
      newPropertyKey: management.atlas.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.api-key
      newPropertyKey: management.datadog.metrics.export.api-key
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.application-key
      newPropertyKey: management.datadog.metrics.export.application-key
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.batch-size
      newPropertyKey: management.datadog.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.connect-timeout
      newPropertyKey: management.datadog.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.descriptions
      newPropertyKey: management.datadog.metrics.export.descriptions
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.enabled
      newPropertyKey: management.datadog.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.host-tag
      newPropertyKey: management.datadog.metrics.export.host-tag
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.num-threads
      newPropertyKey: management.datadog.metrics.export.num-threads
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.read-timeout
      newPropertyKey: management.datadog.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.step
      newPropertyKey: management.datadog.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.datadog.uri
      newPropertyKey: management.datadog.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.defaults.enabled
      newPropertyKey: management.defaults.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.api-token
      newPropertyKey: management.dynatrace.metrics.export.api-token
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.batch-size
      newPropertyKey: management.dynatrace.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.connect-timeout
      newPropertyKey: management.dynatrace.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.device-id
      newPropertyKey: management.dynatrace.metrics.export.device-id
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.enabled
      newPropertyKey: management.dynatrace.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.group
      newPropertyKey: management.dynatrace.metrics.export.group
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.read-timeout
      newPropertyKey: management.dynatrace.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.step
      newPropertyKey: management.dynatrace.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.technology-type
      newPropertyKey: management.dynatrace.metrics.export.technology-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.uri
      newPropertyKey: management.dynatrace.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.v1.device-id
      newPropertyKey: management.dynatrace.metrics.export.v1.device-id
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.v1.group
      newPropertyKey: management.dynatrace.metrics.export.v1.group
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.v1.technology-type
      newPropertyKey: management.dynatrace.metrics.export.v1.technology-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.v2.default-dimensions
      newPropertyKey: management.dynatrace.metrics.export.v2.default-dimensions
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.v2.enrich-with-dynatrace-metadata
      newPropertyKey: management.dynatrace.metrics.export.v2.enrich-with-dynatrace-metadata
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.dynatrace.v2.metric-key-prefix
      newPropertyKey: management.dynatrace.metrics.export.v2.metric-key-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.api-key-credentials
      newPropertyKey: management.elastic.metrics.export.api-key-credentials
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.auto-create-index
      newPropertyKey: management.elastic.metrics.export.auto-create-index
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.batch-size
      newPropertyKey: management.elastic.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.connect-timeout
      newPropertyKey: management.elastic.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.enabled
      newPropertyKey: management.elastic.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.host
      newPropertyKey: management.elastic.metrics.export.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.index
      newPropertyKey: management.elastic.metrics.export.index
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.index-date-format
      newPropertyKey: management.elastic.metrics.export.index-date-format
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.index-date-separator
      newPropertyKey: management.elastic.metrics.export.index-date-separator
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.password
      newPropertyKey: management.elastic.metrics.export.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.pipeline
      newPropertyKey: management.elastic.metrics.export.pipeline
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.read-timeout
      newPropertyKey: management.elastic.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.step
      newPropertyKey: management.elastic.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.timestamp-field-name
      newPropertyKey: management.elastic.metrics.export.timestamp-field-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.elastic.user-name
      newPropertyKey: management.elastic.metrics.export.user-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.addressing-mode
      newPropertyKey: management.ganglia.metrics.export.addressing-mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.duration-units
      newPropertyKey: management.ganglia.metrics.export.duration-units
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.enabled
      newPropertyKey: management.ganglia.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.host
      newPropertyKey: management.ganglia.metrics.export.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.port
      newPropertyKey: management.ganglia.metrics.export.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.protocol-version
      newPropertyKey: management.ganglia.metrics.export.protocol-version
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.rate-units
      newPropertyKey: management.ganglia.metrics.export.rate-units
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.step
      newPropertyKey: management.ganglia.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.ganglia.time-to-live
      newPropertyKey: management.ganglia.metrics.export.time-to-live
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.duration-units
      newPropertyKey: management.graphite.metrics.export.duration-units
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.enabled
      newPropertyKey: management.graphite.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.graphite-tags-enabled
      newPropertyKey: management.graphite.metrics.export.graphite-tags-enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.host
      newPropertyKey: management.graphite.metrics.export.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.port
      newPropertyKey: management.graphite.metrics.export.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.protocol
      newPropertyKey: management.graphite.metrics.export.protocol
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.rate-units
      newPropertyKey: management.graphite.metrics.export.rate-units
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.step
      newPropertyKey: management.graphite.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.graphite.tags-as-prefix
      newPropertyKey: management.graphite.metrics.export.tags-as-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.api-token
      newPropertyKey: management.humio.metrics.export.api-token
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.batch-size
      newPropertyKey: management.humio.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.connect-timeout
      newPropertyKey: management.humio.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.enabled
      newPropertyKey: management.humio.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.read-timeout
      newPropertyKey: management.humio.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.step
      newPropertyKey: management.humio.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.tags
      newPropertyKey: management.humio.metrics.export.tags
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.humio.uri
      newPropertyKey: management.humio.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.api-version
      newPropertyKey: management.influx.metrics.export.api-version
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.auto-create-db
      newPropertyKey: management.influx.metrics.export.auto-create-db
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.batch-size
      newPropertyKey: management.influx.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.bucket
      newPropertyKey: management.influx.metrics.export.bucket
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.compressed
      newPropertyKey: management.influx.metrics.export.compressed
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.connect-timeout
      newPropertyKey: management.influx.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.consistency
      newPropertyKey: management.influx.metrics.export.consistency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.db
      newPropertyKey: management.influx.metrics.export.db
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.enabled
      newPropertyKey: management.influx.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.num-threads
      newPropertyKey: management.influx.metrics.export.num-threads
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.org
      newPropertyKey: management.influx.metrics.export.org
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.password
      newPropertyKey: management.influx.metrics.export.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.read-timeout
      newPropertyKey: management.influx.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.retention-duration
      newPropertyKey: management.influx.metrics.export.retention-duration
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.retention-policy
      newPropertyKey: management.influx.metrics.export.retention-policy
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.retention-replication-factor
      newPropertyKey: management.influx.metrics.export.retention-replication-factor
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.retention-shard-duration
      newPropertyKey: management.influx.metrics.export.retention-shard-duration
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.step
      newPropertyKey: management.influx.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.token
      newPropertyKey: management.influx.metrics.export.token
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.uri
      newPropertyKey: management.influx.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.influx.user-name
      newPropertyKey: management.influx.metrics.export.user-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.jmx.domain
      newPropertyKey: management.jmx.metrics.export.domain
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.jmx.enabled
      newPropertyKey: management.jmx.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.jmx.step
      newPropertyKey: management.jmx.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.batch-size
      newPropertyKey: management.kairos.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.connect-timeout
      newPropertyKey: management.kairos.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.enabled
      newPropertyKey: management.kairos.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.password
      newPropertyKey: management.kairos.metrics.export.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.read-timeout
      newPropertyKey: management.kairos.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.step
      newPropertyKey: management.kairos.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.uri
      newPropertyKey: management.kairos.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.kairos.user-name
      newPropertyKey: management.kairos.metrics.export.user-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.account-id
      newPropertyKey: management.newrelic.metrics.export.account-id
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.api-key
      newPropertyKey: management.newrelic.metrics.export.api-key
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.batch-size
      newPropertyKey: management.newrelic.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.client-provider-type
      newPropertyKey: management.newrelic.metrics.export.client-provider-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.connect-timeout
      newPropertyKey: management.newrelic.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.enabled
      newPropertyKey: management.newrelic.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.event-type
      newPropertyKey: management.newrelic.metrics.export.event-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.meter-name-event-type-enabled
      newPropertyKey: management.newrelic.metrics.export.meter-name-event-type-enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.num-threads
      newPropertyKey: management.newrelic.metrics.export.num-threads
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.read-timeout
      newPropertyKey: management.newrelic.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.step
      newPropertyKey: management.newrelic.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.newrelic.uri
      newPropertyKey: management.newrelic.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.descriptions
      newPropertyKey: management.prometheus.metrics.export.descriptions
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.enabled
      newPropertyKey: management.prometheus.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.histogram-flavor
      newPropertyKey: management.prometheus.metrics.export.histogram-flavor
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.base-url
      newPropertyKey: management.prometheus.metrics.export.pushgateway.base-url
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.enabled
      newPropertyKey: management.prometheus.metrics.export.pushgateway.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.grouping-key
      newPropertyKey: management.prometheus.metrics.export.pushgateway.grouping-key
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.job
      newPropertyKey: management.prometheus.metrics.export.pushgateway.job
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.password
      newPropertyKey: management.prometheus.metrics.export.pushgateway.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.push-rate
      newPropertyKey: management.prometheus.metrics.export.pushgateway.push-rate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.shutdown-operation
      newPropertyKey: management.prometheus.metrics.export.pushgateway.shutdown-operation
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.pushgateway.username
      newPropertyKey: management.prometheus.metrics.export.pushgateway.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.prometheus.step
      newPropertyKey: management.prometheus.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.access-token
      newPropertyKey: management.signalfx.metrics.export.access-token
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.batch-size
      newPropertyKey: management.signalfx.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.connect-timeout
      newPropertyKey: management.signalfx.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.enabled
      newPropertyKey: management.signalfx.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.num-threads
      newPropertyKey: management.signalfx.metrics.export.num-threads
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.published-histogram-type
      newPropertyKey: management.signalfx.metrics.export.published-histogram-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.read-timeout
      newPropertyKey: management.signalfx.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.source
      newPropertyKey: management.signalfx.metrics.export.source
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.step
      newPropertyKey: management.signalfx.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.signalfx.uri
      newPropertyKey: management.signalfx.metrics.export.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.simple.enabled
      newPropertyKey: management.simple.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.simple.mode
      newPropertyKey: management.simple.metrics.export.mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.simple.step
      newPropertyKey: management.simple.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.batch-size
      newPropertyKey: management.stackdriver.metrics.export.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.connect-timeout
      newPropertyKey: management.stackdriver.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.enabled
      newPropertyKey: management.stackdriver.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.project-id
      newPropertyKey: management.stackdriver.metrics.export.project-id
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.read-timeout
      newPropertyKey: management.stackdriver.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.resource-labels
      newPropertyKey: management.stackdriver.metrics.export.resource-labels
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.resource-type
      newPropertyKey: management.stackdriver.metrics.export.resource-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.step
      newPropertyKey: management.stackdriver.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.stackdriver.use-semantic-metric-types
      newPropertyKey: management.stackdriver.metrics.export.use-semantic-metric-types
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.enabled
      newPropertyKey: management.statsd.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.flavor
      newPropertyKey: management.statsd.metrics.export.flavor
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.host
      newPropertyKey: management.statsd.metrics.export.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.max-packet-length
      newPropertyKey: management.statsd.metrics.export.max-packet-length
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.polling-frequency
      newPropertyKey: management.statsd.metrics.export.polling-frequency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.port
      newPropertyKey: management.statsd.metrics.export.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.protocol
      newPropertyKey: management.statsd.metrics.export.protocol
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.statsd.publish-unchanged-meters
      newPropertyKey: management.statsd.metrics.export.publish-unchanged-meters
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.api-token
      newPropertyKey: management.wavefront.api-token
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.batch-size
      newPropertyKey: management.wavefront.sender.batch-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.connect-timeout
      newPropertyKey: management.wavefront.metrics.export.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.enabled
      newPropertyKey: management.wavefront.metrics.export.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.global-prefix
      newPropertyKey: management.wavefront.metrics.export.global-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.num-threads
      newPropertyKey: management.wavefront.metrics.export.num-threads
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.read-timeout
      newPropertyKey: management.wavefront.metrics.export.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.sender.flush-interval
      newPropertyKey: management.wavefront.sender.flush-interval
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.sender.max-queue-size
      newPropertyKey: management.wavefront.sender.max-queue-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.sender.message-size
      newPropertyKey: management.wavefront.sender.message-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.source
      newPropertyKey: management.wavefront.source
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.step
      newPropertyKey: management.wavefront.metrics.export.step
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.export.wavefront.uri
      newPropertyKey: management.wavefront.uri
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.client.request.metric-name
      newPropertyKey: management.observations.http.client.requests.name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.metrics.web.server.request.metric-name
      newPropertyKey: management.observations.http.server.requests.name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.trace.http.enabled
      newPropertyKey: management.httpexchanges.recording.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.trace.http.include
      newPropertyKey: management.httpexchanges.recording.include
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.undertow.allow-encoded-slash
      newPropertyKey: server.undertow.decode-slash
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.compression
      newPropertyKey: spring.cassandra.compression
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.config
      newPropertyKey: spring.cassandra.config
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.connection.connect-timeout
      newPropertyKey: spring.cassandra.connection.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.connection.init-query-timeout
      newPropertyKey: spring.cassandra.connection.init-query-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.contact-points
      newPropertyKey: spring.cassandra.contact-points
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.controlconnection.timeout
      newPropertyKey: spring.cassandra.controlconnection.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.keyspace-name
      newPropertyKey: spring.cassandra.keyspace-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.local-datacenter
      newPropertyKey: spring.cassandra.local-datacenter
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.password
      newPropertyKey: spring.cassandra.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.pool.heartbeat-interval
      newPropertyKey: spring.cassandra.pool.heartbeat-interval
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.pool.idle-timeout
      newPropertyKey: spring.cassandra.pool.idle-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.port
      newPropertyKey: spring.cassandra.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.consistency
      newPropertyKey: spring.cassandra.request.consistency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.page-size
      newPropertyKey: spring.cassandra.request.page-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.serial-consistency
      newPropertyKey: spring.cassandra.request.serial-consistency
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.throttler.drain-interval
      newPropertyKey: spring.cassandra.request.throttler.drain-interval
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.throttler.max-concurrent-requests
      newPropertyKey: spring.cassandra.request.throttler.max-concurrent-requests
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.throttler.max-queue-size
      newPropertyKey: spring.cassandra.request.throttler.max-queue-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.throttler.max-requests-per-second
      newPropertyKey: spring.cassandra.request.throttler.max-requests-per-second
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.throttler.type
      newPropertyKey: spring.cassandra.request.throttler.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.request.timeout
      newPropertyKey: spring.cassandra.request.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.schema-action
      newPropertyKey: spring.cassandra.schema-action
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.session-name
      newPropertyKey: spring.cassandra.session-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.ssl
      newPropertyKey: spring.cassandra.ssl
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.username
      newPropertyKey: spring.cassandra.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.liquibase.labels
      newPropertyKey: spring.liquibase.label-filter
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.client-name
      newPropertyKey: spring.data.redis.client-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.client-type
      newPropertyKey: spring.data.redis.client-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.cluster.max-redirects
      newPropertyKey: spring.data.redis.cluster.max-redirects
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.cluster.nodes
      newPropertyKey: spring.data.redis.cluster.nodes
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.connect-timeout
      newPropertyKey: spring.data.redis.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.database
      newPropertyKey: spring.data.redis.database
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.host
      newPropertyKey: spring.data.redis.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.lettuce.cluster.refresh.adaptive
      newPropertyKey: spring.data.redis.lettuce.cluster.refresh.adaptive
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.lettuce.cluster.refresh.dynamic-refresh-sources
      newPropertyKey: spring.data.redis.lettuce.cluster.refresh.dynamic-refresh-sources
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.lettuce.cluster.refresh.period
      newPropertyKey: spring.data.redis.lettuce.cluster.refresh.period
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.lettuce.shutdown-timeout
      newPropertyKey: spring.data.redis.lettuce.shutdown-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.password
      newPropertyKey: spring.data.redis.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.port
      newPropertyKey: spring.data.redis.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.sentinel.master
      newPropertyKey: spring.data.redis.sentinel.master
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.sentinel.nodes
      newPropertyKey: spring.data.redis.sentinel.nodes
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.sentinel.password
      newPropertyKey: spring.data.redis.sentinel.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.sentinel.username
      newPropertyKey: spring.data.redis.sentinel.username
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.ssl
      newPropertyKey: spring.data.redis.ssl
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.timeout
      newPropertyKey: spring.data.redis.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.url
      newPropertyKey: spring.data.redis.url
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.username
      newPropertyKey: spring.data.redis.username

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.20.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_0")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.24.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.20.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_0")
        exportDatatables = true
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
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot3.SpringBootProperties_3_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.20.0</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBootProperties_3_0 -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe SpringBootProperties_3_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBootProperties_3_0)

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
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Patrick](mailto:patway99@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com)
