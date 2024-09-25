# Migrate Spring Boot properties to 2.0

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_0**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* spring
* boot

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-20-properties.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/5.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 5.19.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.main.show-banner`
  * newPropertyKey: `spring.main.banner-mode`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.main.web-environment`
  * newPropertyKey: `spring.main.web-application-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.charset`
  * newPropertyKey: `spring.banner.charset`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.image.height`
  * newPropertyKey: `spring.banner.image.height`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.image.invert`
  * newPropertyKey: `spring.banner.image.invert`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.image.location`
  * newPropertyKey: `spring.banner.image.location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.image.margin`
  * newPropertyKey: `spring.banner.image.margin`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.image.width`
  * newPropertyKey: `spring.banner.image.width`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `banner.location`
  * newPropertyKey: `spring.banner.location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `security.filter-dispatcher-types`
  * newPropertyKey: `spring.security.filter.dispatcher-types`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `security.filter-order`
  * newPropertyKey: `spring.security.filter.order`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.repositories.enabled`
  * newPropertyKey: `spring.data.cassandra.repositories.type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.couchbase.repositories.enabled`
  * newPropertyKey: `spring.data.couchbase.repositories.type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.mongodb.repositories.enabled`
  * newPropertyKey: `spring.data.mongodb.repositories.type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.jta.bitronix.properties.background-recovery-interval`
  * newPropertyKey: `spring.jta.bitronix.properties.background-recovery-interval-seconds`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.mvc.media-types`
  * newPropertyKey: `spring.mvc.contentnegotiation.media-types`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.baseline-description`
  * newPropertyKey: `spring.flyway.baseline-description`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.baseline-on-migrate`
  * newPropertyKey: `spring.flyway.baseline-on-migrate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.baseline-version`
  * newPropertyKey: `spring.flyway.baseline-version`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.check-location`
  * newPropertyKey: `spring.flyway.check-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.clean-on-validation-error`
  * newPropertyKey: `spring.flyway.clean-on-validation-error`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.enabled`
  * newPropertyKey: `spring.flyway.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.encoding`
  * newPropertyKey: `spring.flyway.encoding`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.init-sqls`
  * newPropertyKey: `spring.flyway.init-sqls`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.locations`
  * newPropertyKey: `spring.flyway.locations`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.out-of-order`
  * newPropertyKey: `spring.flyway.out-of-order`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.password`
  * newPropertyKey: `spring.flyway.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.placeholder-prefix`
  * newPropertyKey: `spring.flyway.placeholder-prefix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.placeholder-replacement`
  * newPropertyKey: `spring.flyway.placeholder-replacement`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.placeholder-suffix`
  * newPropertyKey: `spring.flyway.placeholder-suffix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.placeholders`
  * newPropertyKey: `spring.flyway.placeholders`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.schemas`
  * newPropertyKey: `spring.flyway.schemas`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-prefix`
  * newPropertyKey: `spring.flyway.sql-migration-prefix`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-separator`
  * newPropertyKey: `spring.flyway.sql-migration-separator`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.sql-migration-suffix`
  * newPropertyKey: `spring.flyway.sql-migration-suffixes`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.table`
  * newPropertyKey: `spring.flyway.table`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.target`
  * newPropertyKey: `spring.flyway.target`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.url`
  * newPropertyKey: `spring.flyway.url`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.user`
  * newPropertyKey: `spring.flyway.user`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `flyway.validate-on-migrate`
  * newPropertyKey: `spring.flyway.validate-on-migrate`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.change-log`
  * newPropertyKey: `spring.liquibase.change-log`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.check-change-log-location`
  * newPropertyKey: `spring.liquibase.check-change-log-location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.contexts`
  * newPropertyKey: `spring.liquibase.contexts`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.default-schema`
  * newPropertyKey: `spring.liquibase.default-schema`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.drop-first`
  * newPropertyKey: `spring.liquibase.drop-first`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.enabled`
  * newPropertyKey: `spring.liquibase.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.labels`
  * newPropertyKey: `spring.liquibase.labels`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.parameters`
  * newPropertyKey: `spring.liquibase.parameters`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.password`
  * newPropertyKey: `spring.liquibase.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.rollback-file`
  * newPropertyKey: `spring.liquibase.rollback-file`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.url`
  * newPropertyKey: `spring.liquibase.url`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `liquibase.user`
  * newPropertyKey: `spring.liquibase.user`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `security.user.name`
  * newPropertyKey: `spring.security.user.name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `security.user.password`
  * newPropertyKey: `spring.security.user.password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `security.user.role`
  * newPropertyKey: `spring.security.user.roles`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.context-parameters`
  * newPropertyKey: `server.servlet.context-parameters`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.context-path`
  * newPropertyKey: `server.servlet.context-path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.display-name`
  * newPropertyKey: `server.servlet.application-display-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.class-name`
  * newPropertyKey: `server.servlet.jsp.class-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.init-parameters`
  * newPropertyKey: `server.servlet.jsp.init-parameters`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.jsp-servlet.registered`
  * newPropertyKey: `server.servlet.jsp.registered`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.servlet-path`
  * newPropertyKey: `server.servlet.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.comment`
  * newPropertyKey: `server.servlet.session.cookie.comment`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.domain`
  * newPropertyKey: `server.servlet.session.cookie.domain`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.http-only`
  * newPropertyKey: `server.servlet.session.cookie.http-only`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.max-age`
  * newPropertyKey: `server.servlet.session.cookie.max-age`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.name`
  * newPropertyKey: `server.servlet.session.cookie.name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.path`
  * newPropertyKey: `server.servlet.session.cookie.path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.cookie.secure`
  * newPropertyKey: `server.servlet.session.cookie.secure`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.persistent`
  * newPropertyKey: `server.servlet.session.persistent`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.store-dir`
  * newPropertyKey: `server.servlet.session.store-dir`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.timeout`
  * newPropertyKey: `server.servlet.session.timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `server.session.tracking-modes`
  * newPropertyKey: `server.servlet.session.tracking-modes`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.batch.initializer.enabled`
  * newPropertyKey: `spring.batch.initialize-schema`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.connect-timeout-millis`
  * newPropertyKey: `spring.data.cassandra.connect-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.data.cassandra.read-timeout-millis`
  * newPropertyKey: `spring.data.cassandra.read-timeout`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.datasource.initialize`
  * newPropertyKey: `spring.datasource.initialization-mode`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.flyway.sql-migration-suffix`
  * newPropertyKey: `spring.flyway.sql-migration-suffixes`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.git.properties`
  * newPropertyKey: `spring.info.git.location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.http.multipart.enabled`
  * newPropertyKey: `spring.servlet.multipart.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.http.multipart.file-size-threshold`
  * newPropertyKey: `spring.servlet.multipart.file-size-threshold`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.http.multipart.location`
  * newPropertyKey: `spring.servlet.multipart.location`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.http.multipart.max-file-size`
  * newPropertyKey: `spring.servlet.multipart.max-file-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.http.multipart.max-request-size`
  * newPropertyKey: `spring.servlet.multipart.max-request-size`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.http.multipart.resolve-lazily`
  * newPropertyKey: `spring.servlet.multipart.resolve-lazily`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.messages.cache-seconds`
  * newPropertyKey: `spring.messages.cache-duration`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-active`
  * newPropertyKey: `spring.redis.jedis.pool.max-idle`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-idle`
  * newPropertyKey: `spring.redis.jedis.pool.max-idle`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.pool.max-wait`
  * newPropertyKey: `spring.redis.jedis.pool.max-wait`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.redis.pool.min-idle`
  * newPropertyKey: `spring.redis.jedis.pool.min-idle`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.resources.cache-period`
  * newPropertyKey: `spring.resources.cache.period`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.session.jdbc.initializer.enabled`
  * newPropertyKey: `spring.session.jdbc.initialize-schema`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.session.mongo.collection-name`
  * newPropertyKey: `spring.session.mongodb.collection-name`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.thymeleaf.content-type`
  * newPropertyKey: `spring.thymeleaf.servlet.content-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.query`
  * newPropertyKey: `spring.couchbase.env.endpoints.queryservice.max-endpoints`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.couchbase.env.endpoints.view`
  * newPropertyKey: `spring.couchbase.env.endpoints.viewservice.max-endpoints`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.auditevents.enabled`
  * newPropertyKey: `management.endpoint.auditevents.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.auditevents.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.auditevents`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.autoconfig.enabled`
  * newPropertyKey: `management.endpoint.conditions.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.autoconfig.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.conditions`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.beans.enabled`
  * newPropertyKey: `management.endpoint.beans.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.beans.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.beans`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.configprops.enabled`
  * newPropertyKey: `management.endpoint.configprops.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.configprops.keys-to-sanitize`
  * newPropertyKey: `management.endpoint.configprops.keys-to-sanitize`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.configprops.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.configprops`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.cors.allow-credentials`
  * newPropertyKey: `management.endpoints.web.cors.allow-credentials`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-headers`
  * newPropertyKey: `management.endpoints.web.cors.allowed-headers`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-methods`
  * newPropertyKey: `management.endpoints.web.cors.allowed-methods`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.cors.allowed-origins`
  * newPropertyKey: `management.endpoints.web.cors.allowed-origins`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.cors.exposed-headers`
  * newPropertyKey: `management.endpoints.web.cors.exposed-headers`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.cors.max-age`
  * newPropertyKey: `management.endpoints.web.cors.max-age`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.dump.enabled`
  * newPropertyKey: `management.endpoint.threaddump.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.dump.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.dump`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.enabled`
  * newPropertyKey: `management.endpoints.enabled-by-default`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.env.enabled`
  * newPropertyKey: `management.endpoint.env.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.env.keys-to-sanitize`
  * newPropertyKey: `management.endpoint.env.keys-to-sanitize`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.env.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.env`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.flyway.enabled`
  * newPropertyKey: `management.endpoint.flyway.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.health.enabled`
  * newPropertyKey: `management.endpoint.health.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.health.mapping`
  * newPropertyKey: `management.health.status.http-mapping`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.health.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.health`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.health.time-to-live`
  * newPropertyKey: `management.endpoint.health.cache.time-to-live`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.heapdump.enabled`
  * newPropertyKey: `management.endpoint.heapdump.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.heapdump.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.heapdump`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.info.enabled`
  * newPropertyKey: `management.endpoint.info.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.info.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.info`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.jmx.domain`
  * newPropertyKey: `management.endpoints.jmx.domain`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.jmx.enabled`
  * newPropertyKey: `management.endpoints.jmx.exposure.exclude`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.jmx.static-names`
  * newPropertyKey: `management.endpoints.jmx.static-names`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.jmx.unique-names`
  * newPropertyKey: `management.endpoints.jmx.unique-names`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.jolokia.enabled`
  * newPropertyKey: `management.endpoint.jolokia.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.jolokia.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.jolokia`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.liquibase.enabled`
  * newPropertyKey: `management.endpoint.liquibase.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.logfile.enabled`
  * newPropertyKey: `management.endpoint.logfile.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.logfile.external-file`
  * newPropertyKey: `management.endpoint.logfile.external-file`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.logfile.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.logfile`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.loggers.enabled`
  * newPropertyKey: `management.endpoint.loggers.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.loggers.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.loggers`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.mappings.enabled`
  * newPropertyKey: `management.endpoint.mappings.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.mappings.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.mappings`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.metrics.enabled`
  * newPropertyKey: `management.endpoint.metrics.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.metrics.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.metrics`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.shutdown.enabled`
  * newPropertyKey: `management.endpoint.shutdown.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.shutdown.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.shutdown`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.trace.filter.enabled`
  * newPropertyKey: `management.trace.http.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.trace.enabled`
  * newPropertyKey: `management.endpoint.httptrace.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `endpoints.trace.path`
  * newPropertyKey: `management.endpoints.web.path-mapping.httptrace`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `jolokia.config`
  * newPropertyKey: `management.endpoint.jolokia.config`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.add-application-context-header`
  * newPropertyKey: `management.server.add-application-context-header`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.address`
  * newPropertyKey: `management.server.address`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.context-path`
  * newPropertyKey: `management.server.servlet.context-path`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.port`
  * newPropertyKey: `management.server.port`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.ciphers`
  * newPropertyKey: `management.server.ssl.ciphers`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.client-auth`
  * newPropertyKey: `management.server.ssl.client-auth`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.enabled`
  * newPropertyKey: `management.server.ssl.enabled`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.enabled-protocols`
  * newPropertyKey: `management.server.ssl.enabled-protocols`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.key-alias`
  * newPropertyKey: `management.server.ssl.key-alias`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.key-password`
  * newPropertyKey: `management.server.ssl.key-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.key-store`
  * newPropertyKey: `management.server.ssl.key-store`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-password`
  * newPropertyKey: `management.server.ssl.key-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-provider`
  * newPropertyKey: `management.server.ssl.key-store-provider`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.key-store-type`
  * newPropertyKey: `management.server.ssl.key-store-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.protocol`
  * newPropertyKey: `management.server.ssl.protocol`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store`
  * newPropertyKey: `management.server.ssl.trust-store`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-password`
  * newPropertyKey: `management.server.ssl.trust-store-password`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-provider`
  * newPropertyKey: `management.server.ssl.trust-store-provider`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.ssl.trust-store-type`
  * newPropertyKey: `management.server.ssl.trust-store-type`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `management.trace.include`
  * newPropertyKey: `management.trace.http.include`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.metrics.export.statsd.host`
  * newPropertyKey: `management.metrics.export.statsd.host`
* [Change the key of a spring application property](../../../java/spring/changespringpropertykey.md)
  * oldPropertyKey: `spring.metrics.export.statsd.port`
  * newPropertyKey: `management.metrics.export.statsd.port`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_0
displayName: Migrate Spring Boot properties to 2.0
description: Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.main.show-banner
      newPropertyKey: spring.main.banner-mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.main.web-environment
      newPropertyKey: spring.main.web-application-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.charset
      newPropertyKey: spring.banner.charset
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.image.height
      newPropertyKey: spring.banner.image.height
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.image.invert
      newPropertyKey: spring.banner.image.invert
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.image.location
      newPropertyKey: spring.banner.image.location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.image.margin
      newPropertyKey: spring.banner.image.margin
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.image.width
      newPropertyKey: spring.banner.image.width
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: banner.location
      newPropertyKey: spring.banner.location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: security.filter-dispatcher-types
      newPropertyKey: spring.security.filter.dispatcher-types
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: security.filter-order
      newPropertyKey: spring.security.filter.order
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.repositories.enabled
      newPropertyKey: spring.data.cassandra.repositories.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.couchbase.repositories.enabled
      newPropertyKey: spring.data.couchbase.repositories.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.mongodb.repositories.enabled
      newPropertyKey: spring.data.mongodb.repositories.type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.jta.bitronix.properties.background-recovery-interval
      newPropertyKey: spring.jta.bitronix.properties.background-recovery-interval-seconds
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.mvc.media-types
      newPropertyKey: spring.mvc.contentnegotiation.media-types
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.baseline-description
      newPropertyKey: spring.flyway.baseline-description
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.baseline-on-migrate
      newPropertyKey: spring.flyway.baseline-on-migrate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.baseline-version
      newPropertyKey: spring.flyway.baseline-version
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.check-location
      newPropertyKey: spring.flyway.check-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.clean-on-validation-error
      newPropertyKey: spring.flyway.clean-on-validation-error
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.enabled
      newPropertyKey: spring.flyway.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.encoding
      newPropertyKey: spring.flyway.encoding
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.init-sqls
      newPropertyKey: spring.flyway.init-sqls
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.locations
      newPropertyKey: spring.flyway.locations
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.out-of-order
      newPropertyKey: spring.flyway.out-of-order
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.password
      newPropertyKey: spring.flyway.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.placeholder-prefix
      newPropertyKey: spring.flyway.placeholder-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.placeholder-replacement
      newPropertyKey: spring.flyway.placeholder-replacement
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.placeholder-suffix
      newPropertyKey: spring.flyway.placeholder-suffix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.placeholders
      newPropertyKey: spring.flyway.placeholders
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.schemas
      newPropertyKey: spring.flyway.schemas
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.sql-migration-prefix
      newPropertyKey: spring.flyway.sql-migration-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.sql-migration-separator
      newPropertyKey: spring.flyway.sql-migration-separator
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.sql-migration-suffix
      newPropertyKey: spring.flyway.sql-migration-suffixes
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.table
      newPropertyKey: spring.flyway.table
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.target
      newPropertyKey: spring.flyway.target
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.url
      newPropertyKey: spring.flyway.url
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.user
      newPropertyKey: spring.flyway.user
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: flyway.validate-on-migrate
      newPropertyKey: spring.flyway.validate-on-migrate
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.change-log
      newPropertyKey: spring.liquibase.change-log
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.check-change-log-location
      newPropertyKey: spring.liquibase.check-change-log-location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.contexts
      newPropertyKey: spring.liquibase.contexts
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.default-schema
      newPropertyKey: spring.liquibase.default-schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.drop-first
      newPropertyKey: spring.liquibase.drop-first
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.enabled
      newPropertyKey: spring.liquibase.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.labels
      newPropertyKey: spring.liquibase.labels
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.parameters
      newPropertyKey: spring.liquibase.parameters
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.password
      newPropertyKey: spring.liquibase.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.rollback-file
      newPropertyKey: spring.liquibase.rollback-file
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.url
      newPropertyKey: spring.liquibase.url
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: liquibase.user
      newPropertyKey: spring.liquibase.user
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: security.user.name
      newPropertyKey: spring.security.user.name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: security.user.password
      newPropertyKey: spring.security.user.password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: security.user.role
      newPropertyKey: spring.security.user.roles
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.context-parameters
      newPropertyKey: server.servlet.context-parameters
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.context-path
      newPropertyKey: server.servlet.context-path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.display-name
      newPropertyKey: server.servlet.application-display-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jsp-servlet.class-name
      newPropertyKey: server.servlet.jsp.class-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jsp-servlet.init-parameters
      newPropertyKey: server.servlet.jsp.init-parameters
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.jsp-servlet.registered
      newPropertyKey: server.servlet.jsp.registered
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.servlet-path
      newPropertyKey: server.servlet.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.comment
      newPropertyKey: server.servlet.session.cookie.comment
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.domain
      newPropertyKey: server.servlet.session.cookie.domain
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.http-only
      newPropertyKey: server.servlet.session.cookie.http-only
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.max-age
      newPropertyKey: server.servlet.session.cookie.max-age
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.name
      newPropertyKey: server.servlet.session.cookie.name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.path
      newPropertyKey: server.servlet.session.cookie.path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.cookie.secure
      newPropertyKey: server.servlet.session.cookie.secure
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.persistent
      newPropertyKey: server.servlet.session.persistent
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.store-dir
      newPropertyKey: server.servlet.session.store-dir
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.timeout
      newPropertyKey: server.servlet.session.timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: server.session.tracking-modes
      newPropertyKey: server.servlet.session.tracking-modes
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.initializer.enabled
      newPropertyKey: spring.batch.initialize-schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.connect-timeout-millis
      newPropertyKey: spring.data.cassandra.connect-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.cassandra.read-timeout-millis
      newPropertyKey: spring.data.cassandra.read-timeout
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.datasource.initialize
      newPropertyKey: spring.datasource.initialization-mode
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.flyway.sql-migration-suffix
      newPropertyKey: spring.flyway.sql-migration-suffixes
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.git.properties
      newPropertyKey: spring.info.git.location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.multipart.enabled
      newPropertyKey: spring.servlet.multipart.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.multipart.file-size-threshold
      newPropertyKey: spring.servlet.multipart.file-size-threshold
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.multipart.location
      newPropertyKey: spring.servlet.multipart.location
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.multipart.max-file-size
      newPropertyKey: spring.servlet.multipart.max-file-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.multipart.max-request-size
      newPropertyKey: spring.servlet.multipart.max-request-size
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.http.multipart.resolve-lazily
      newPropertyKey: spring.servlet.multipart.resolve-lazily
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.messages.cache-seconds
      newPropertyKey: spring.messages.cache-duration
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.pool.max-active
      newPropertyKey: spring.redis.jedis.pool.max-idle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.pool.max-idle
      newPropertyKey: spring.redis.jedis.pool.max-idle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.pool.max-wait
      newPropertyKey: spring.redis.jedis.pool.max-wait
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.redis.pool.min-idle
      newPropertyKey: spring.redis.jedis.pool.min-idle
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.resources.cache-period
      newPropertyKey: spring.resources.cache.period
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.jdbc.initializer.enabled
      newPropertyKey: spring.session.jdbc.initialize-schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.session.mongo.collection-name
      newPropertyKey: spring.session.mongodb.collection-name
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.thymeleaf.content-type
      newPropertyKey: spring.thymeleaf.servlet.content-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.query
      newPropertyKey: spring.couchbase.env.endpoints.queryservice.max-endpoints
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.couchbase.env.endpoints.view
      newPropertyKey: spring.couchbase.env.endpoints.viewservice.max-endpoints
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.auditevents.enabled
      newPropertyKey: management.endpoint.auditevents.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.auditevents.path
      newPropertyKey: management.endpoints.web.path-mapping.auditevents
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.autoconfig.enabled
      newPropertyKey: management.endpoint.conditions.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.autoconfig.path
      newPropertyKey: management.endpoints.web.path-mapping.conditions
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.beans.enabled
      newPropertyKey: management.endpoint.beans.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.beans.path
      newPropertyKey: management.endpoints.web.path-mapping.beans
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.configprops.enabled
      newPropertyKey: management.endpoint.configprops.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.configprops.keys-to-sanitize
      newPropertyKey: management.endpoint.configprops.keys-to-sanitize
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.configprops.path
      newPropertyKey: management.endpoints.web.path-mapping.configprops
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.cors.allow-credentials
      newPropertyKey: management.endpoints.web.cors.allow-credentials
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.cors.allowed-headers
      newPropertyKey: management.endpoints.web.cors.allowed-headers
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.cors.allowed-methods
      newPropertyKey: management.endpoints.web.cors.allowed-methods
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.cors.allowed-origins
      newPropertyKey: management.endpoints.web.cors.allowed-origins
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.cors.exposed-headers
      newPropertyKey: management.endpoints.web.cors.exposed-headers
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.cors.max-age
      newPropertyKey: management.endpoints.web.cors.max-age
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.dump.enabled
      newPropertyKey: management.endpoint.threaddump.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.dump.path
      newPropertyKey: management.endpoints.web.path-mapping.dump
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.enabled
      newPropertyKey: management.endpoints.enabled-by-default
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.env.enabled
      newPropertyKey: management.endpoint.env.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.env.keys-to-sanitize
      newPropertyKey: management.endpoint.env.keys-to-sanitize
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.env.path
      newPropertyKey: management.endpoints.web.path-mapping.env
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.flyway.enabled
      newPropertyKey: management.endpoint.flyway.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.health.enabled
      newPropertyKey: management.endpoint.health.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.health.mapping
      newPropertyKey: management.health.status.http-mapping
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.health.path
      newPropertyKey: management.endpoints.web.path-mapping.health
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.health.time-to-live
      newPropertyKey: management.endpoint.health.cache.time-to-live
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.heapdump.enabled
      newPropertyKey: management.endpoint.heapdump.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.heapdump.path
      newPropertyKey: management.endpoints.web.path-mapping.heapdump
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.info.enabled
      newPropertyKey: management.endpoint.info.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.info.path
      newPropertyKey: management.endpoints.web.path-mapping.info
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.jmx.domain
      newPropertyKey: management.endpoints.jmx.domain
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.jmx.enabled
      newPropertyKey: management.endpoints.jmx.exposure.exclude
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.jmx.static-names
      newPropertyKey: management.endpoints.jmx.static-names
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.jmx.unique-names
      newPropertyKey: management.endpoints.jmx.unique-names
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.jolokia.enabled
      newPropertyKey: management.endpoint.jolokia.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.jolokia.path
      newPropertyKey: management.endpoints.web.path-mapping.jolokia
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.liquibase.enabled
      newPropertyKey: management.endpoint.liquibase.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.logfile.enabled
      newPropertyKey: management.endpoint.logfile.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.logfile.external-file
      newPropertyKey: management.endpoint.logfile.external-file
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.logfile.path
      newPropertyKey: management.endpoints.web.path-mapping.logfile
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.loggers.enabled
      newPropertyKey: management.endpoint.loggers.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.loggers.path
      newPropertyKey: management.endpoints.web.path-mapping.loggers
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.mappings.enabled
      newPropertyKey: management.endpoint.mappings.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.mappings.path
      newPropertyKey: management.endpoints.web.path-mapping.mappings
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.metrics.enabled
      newPropertyKey: management.endpoint.metrics.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.metrics.path
      newPropertyKey: management.endpoints.web.path-mapping.metrics
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.shutdown.enabled
      newPropertyKey: management.endpoint.shutdown.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.shutdown.path
      newPropertyKey: management.endpoints.web.path-mapping.shutdown
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.trace.filter.enabled
      newPropertyKey: management.trace.http.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.trace.enabled
      newPropertyKey: management.endpoint.httptrace.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: endpoints.trace.path
      newPropertyKey: management.endpoints.web.path-mapping.httptrace
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: jolokia.config
      newPropertyKey: management.endpoint.jolokia.config
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.add-application-context-header
      newPropertyKey: management.server.add-application-context-header
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.address
      newPropertyKey: management.server.address
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.context-path
      newPropertyKey: management.server.servlet.context-path
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.port
      newPropertyKey: management.server.port
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.ciphers
      newPropertyKey: management.server.ssl.ciphers
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.client-auth
      newPropertyKey: management.server.ssl.client-auth
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.enabled
      newPropertyKey: management.server.ssl.enabled
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.enabled-protocols
      newPropertyKey: management.server.ssl.enabled-protocols
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.key-alias
      newPropertyKey: management.server.ssl.key-alias
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.key-password
      newPropertyKey: management.server.ssl.key-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.key-store
      newPropertyKey: management.server.ssl.key-store
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.key-store-password
      newPropertyKey: management.server.ssl.key-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.key-store-provider
      newPropertyKey: management.server.ssl.key-store-provider
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.key-store-type
      newPropertyKey: management.server.ssl.key-store-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.protocol
      newPropertyKey: management.server.ssl.protocol
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.trust-store
      newPropertyKey: management.server.ssl.trust-store
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.trust-store-password
      newPropertyKey: management.server.ssl.trust-store-password
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.trust-store-provider
      newPropertyKey: management.server.ssl.trust-store-provider
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.ssl.trust-store-type
      newPropertyKey: management.server.ssl.trust-store-type
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.trace.include
      newPropertyKey: management.trace.http.include
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.metrics.export.statsd.host
      newPropertyKey: management.metrics.export.statsd.host
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.metrics.export.statsd.port
      newPropertyKey: management.metrics.export.statsd.port

```
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:5.19.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:5.19.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-spring:5.19.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.spring.boot2.SpringBootProperties_2_0")
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
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.boot2.SpringBootProperties_2_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>5.19.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot2.SpringBootProperties_2_0 -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe SpringBootProperties_2_0
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_0)

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
Tyler Van Gorder, [Knut Wannheden](mailto:knut@moderne.io), [Nick McKinney](mailto:mckinneynichoals@gmail.com), [Patrick](mailto:patway99@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Kyle Scully](mailto:scullykns@gmail.com)
