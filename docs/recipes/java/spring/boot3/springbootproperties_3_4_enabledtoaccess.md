---
sidebar_label: "Migrate Enabled to Access Spring Boot Properties"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Enabled to Access Spring Boot Properties

**org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_4\_EnabledToAccess**

_Migrate properties found in `application.properties` and `application.yml`, specifically converting 'enabled' to 'access'._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: spring-boot-34-properties.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-34-properties.yml),
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
  * oldPropertyKey: `management.endpoints.enabled-by-default`
  * newPropertyKey: `management.endpoints.access.default`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoints.access.default`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoints.access.default`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.auditevents.enabled`
  * newPropertyKey: `management.endpoint.auditevents.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.auditevents.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.auditevents.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.beans.enabled`
  * newPropertyKey: `management.endpoint.beans.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.beans.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.beans.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.caches.enabled`
  * newPropertyKey: `management.endpoint.caches.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.caches.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.caches.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.conditions.enabled`
  * newPropertyKey: `management.endpoint.conditions.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.conditions.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.conditions.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.configprops.enabled`
  * newPropertyKey: `management.endpoint.configprops.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.configprops.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.configprops.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.env.enabled`
  * newPropertyKey: `management.endpoint.env.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.env.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.env.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.flyway.enabled`
  * newPropertyKey: `management.endpoint.flyway.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.flyway.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.flyway.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.health.enabled`
  * newPropertyKey: `management.endpoint.health.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.health.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.health.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.heapdump.enabled`
  * newPropertyKey: `management.endpoint.heapdump.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.heapdump.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.heapdump.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.httpexchanges.enabled`
  * newPropertyKey: `management.endpoint.httpexchanges.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.httpexchanges.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.httpexchanges.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.info.enabled`
  * newPropertyKey: `management.endpoint.info.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.info.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.info.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.integrationgraph.enabled`
  * newPropertyKey: `management.endpoint.integrationgraph.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.integrationgraph.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.integrationgraph.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.liquibase.enabled`
  * newPropertyKey: `management.endpoint.liquibase.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.liquibase.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.liquibase.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.logfile.enabled`
  * newPropertyKey: `management.endpoint.logfile.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.logfile.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.logfile.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.loggers.enabled`
  * newPropertyKey: `management.endpoint.loggers.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.loggers.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.loggers.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.mappings.enabled`
  * newPropertyKey: `management.endpoint.mappings.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.mappings.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.mappings.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.metrics.enabled`
  * newPropertyKey: `management.endpoint.metrics.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.metrics.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.metrics.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.prometheus.enabled`
  * newPropertyKey: `management.endpoint.prometheus.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.prometheus.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.prometheus.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.quartz.enabled`
  * newPropertyKey: `management.endpoint.quartz.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.quartz.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.quartz.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.sbom.enabled`
  * newPropertyKey: `management.endpoint.sbom.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.sbom.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.sbom.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.scheduledtasks.enabled`
  * newPropertyKey: `management.endpoint.scheduledtasks.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.scheduledtasks.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.scheduledtasks.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.sessions.enabled`
  * newPropertyKey: `management.endpoint.sessions.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.sessions.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.sessions.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.shutdown.enabled`
  * newPropertyKey: `management.endpoint.shutdown.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.shutdown.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.shutdown.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.startup.enabled`
  * newPropertyKey: `management.endpoint.startup.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.startup.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.startup.access`
  * newValue: `none`
  * oldValue: `false`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `management.endpoint.threaddump.enabled`
  * newPropertyKey: `management.endpoint.threaddump.access`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.threaddump.access`
  * newValue: `read-only`
  * oldValue: `true`
* [Change the value of a spring application property](../../../java/spring/changespringpropertyvalue)
  * propertyKey: `management.endpoint.threaddump.access`
  * newValue: `none`
  * oldValue: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess
displayName: Migrate Enabled to Access Spring Boot Properties
description: |
  Migrate properties found in `application.properties` and `application.yml`, specifically converting 'enabled' to 'access'.
tags:
  - spring
  - boot
recipeList:
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoints.enabled-by-default
      newPropertyKey: management.endpoints.access.default
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoints.access.default
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoints.access.default
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.auditevents.enabled
      newPropertyKey: management.endpoint.auditevents.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.auditevents.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.auditevents.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.beans.enabled
      newPropertyKey: management.endpoint.beans.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.beans.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.beans.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.caches.enabled
      newPropertyKey: management.endpoint.caches.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.caches.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.caches.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.conditions.enabled
      newPropertyKey: management.endpoint.conditions.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.conditions.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.conditions.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.configprops.enabled
      newPropertyKey: management.endpoint.configprops.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.configprops.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.configprops.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.env.enabled
      newPropertyKey: management.endpoint.env.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.env.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.env.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.flyway.enabled
      newPropertyKey: management.endpoint.flyway.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.flyway.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.flyway.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.health.enabled
      newPropertyKey: management.endpoint.health.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.health.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.health.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.heapdump.enabled
      newPropertyKey: management.endpoint.heapdump.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.heapdump.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.heapdump.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.httpexchanges.enabled
      newPropertyKey: management.endpoint.httpexchanges.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.httpexchanges.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.httpexchanges.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.info.enabled
      newPropertyKey: management.endpoint.info.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.info.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.info.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.integrationgraph.enabled
      newPropertyKey: management.endpoint.integrationgraph.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.integrationgraph.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.integrationgraph.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.liquibase.enabled
      newPropertyKey: management.endpoint.liquibase.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.liquibase.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.liquibase.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.logfile.enabled
      newPropertyKey: management.endpoint.logfile.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.logfile.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.logfile.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.loggers.enabled
      newPropertyKey: management.endpoint.loggers.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.loggers.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.loggers.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.mappings.enabled
      newPropertyKey: management.endpoint.mappings.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.mappings.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.mappings.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.metrics.enabled
      newPropertyKey: management.endpoint.metrics.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.metrics.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.metrics.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.prometheus.enabled
      newPropertyKey: management.endpoint.prometheus.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.prometheus.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.prometheus.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.quartz.enabled
      newPropertyKey: management.endpoint.quartz.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.quartz.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.quartz.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.sbom.enabled
      newPropertyKey: management.endpoint.sbom.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.sbom.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.sbom.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.scheduledtasks.enabled
      newPropertyKey: management.endpoint.scheduledtasks.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.scheduledtasks.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.scheduledtasks.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.sessions.enabled
      newPropertyKey: management.endpoint.sessions.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.sessions.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.sessions.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.shutdown.enabled
      newPropertyKey: management.endpoint.shutdown.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.shutdown.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.shutdown.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.startup.enabled
      newPropertyKey: management.endpoint.startup.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.startup.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.startup.access
      newValue: none
      oldValue: false
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: management.endpoint.threaddump.enabled
      newPropertyKey: management.endpoint.threaddump.access
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.threaddump.access
      newValue: read-only
      oldValue: true
  - org.openrewrite.java.spring.ChangeSpringPropertyValue:
      propertyKey: management.endpoint.threaddump.access
      newValue: none
      oldValue: false

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate Spring Boot properties to 3.4](/recipes/java/spring/boot3/springbootproperties_3_4-community-edition.md)


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
    activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess")
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
        activeRecipe("org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess")
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
            <recipe>org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SpringBootProperties_3_4_EnabledToAccess
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-spring:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess" />

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

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

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
