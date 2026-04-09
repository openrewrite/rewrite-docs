---
sidebar_label: "Migrate Spring Boot properties to 2.5"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate Spring Boot properties to 2.5

**org.openrewrite.java.spring.boot2.SpringBootProperties\_2\_5**

_Migrate properties found in `application.properties` and `application.yml`._

### Tags

* [spring](/reference/recipes-by-tag#spring)
* [boot](/reference/recipes-by-tag#boot)

## Recipe source

[GitHub: spring-boot-25-properties.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-25-properties.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
**Preconditions**

* [Singleton](../../../core/singleton)

**Recipes**

* [Migrate `spring.artemis.host` and `spring.artemis.port` to `spring.artemis.broker-url`](../../../java/spring/boot2/migrateartemisproperties)
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.batch.initialize-schema`
  * newPropertyKey: `spring.batch.jdbc.initialize-schema`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.batch.initializer.enabled`
  * newPropertyKey: `spring.batch.jdbc.initialize-schema`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.batch.schema`
  * newPropertyKey: `spring.batch.jdbc.schema`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.batch.table-prefix`
  * newPropertyKey: `spring.batch.jdbc.table-prefix`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.data.neo4j.username`
  * newPropertyKey: `spring.neo4j.authentication.username`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.continue-on-error`
  * newPropertyKey: `spring.sql.init.continue-on-error`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.data`
  * newPropertyKey: `spring.sql.init.data-locations`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.data-password`
  * newPropertyKey: `spring.sql.init.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.data-username`
  * newPropertyKey: `spring.sql.init.username`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.initialization-mode`
  * newPropertyKey: `spring.sql.init.mode`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.platform`
  * newPropertyKey: `spring.sql.init.platform`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.schema`
  * newPropertyKey: `spring.sql.init.schema-locations`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.schema-password`
  * newPropertyKey: `spring.sql.init.password`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.schema-username`
  * newPropertyKey: `spring.sql.init.username`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.separator`
  * newPropertyKey: `spring.sql.init.separator`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.datasource.sql-script-encoding`
  * newPropertyKey: `spring.sql.init.encoding`
* [Change the key of a Spring application property](../../../java/spring/changespringpropertykey)
  * oldPropertyKey: `spring.sql.init.enabled`
  * newPropertyKey: `spring.sql.init.mode`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.flyway.check-location`
  * comment: `This property is deprecated: Locations can no longer be checked accurately due to changes in Flyway's location support.`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.acquire-increment`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.acquisition-interval`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.acquisition-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.allow-local-transactions`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.apply-transaction-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.automatic-enlisting-enabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.cache-producers-consumers`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.class-name`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.defer-connection-release`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.disabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.driver-properties`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.ignore-recovery-failures`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.max-idle-time`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.max-pool-size`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.min-pool-size`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.password`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.share-transaction-connections`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.test-connections`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.two-pc-ordering-position`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.unique-name`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.use-tm-join`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.connectionfactory.user`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.acquire-increment`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.acquisition-interval`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.acquisition-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.allow-local-transactions`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.apply-transaction-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.automatic-enlisting-enabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.class-name`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.cursor-holdability`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.defer-connection-release`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.disabled`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.driver-properties`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.enable-jdbc4-connection-test`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.ignore-recovery-failures`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.isolation-level`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.local-auto-commit`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.login-timeout`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.max-idle-time`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.max-pool-size`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.min-pool-size`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.prepared-statement-cache-size`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.share-transaction-connections`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.test-query`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.two-pc-ordering-position`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.unique-name`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.datasource.use-tm-join`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`
* [Comment out Spring properties](../../../java/spring/commentoutspringpropertykey)
  * propertyKey: `spring.jta.bitronix.properties.background-recovery-interval`
  * comment: `This property is deprecated and will be removed in future Spring Boot versions`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot2.SpringBootProperties_2_5
displayName: Migrate Spring Boot properties to 2.5
description: |
  Migrate properties found in `application.properties` and `application.yml`.
tags:
  - spring
  - boot
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.spring.boot2.MigrateArtemisProperties
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.initialize-schema
      newPropertyKey: spring.batch.jdbc.initialize-schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.initializer.enabled
      newPropertyKey: spring.batch.jdbc.initialize-schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.schema
      newPropertyKey: spring.batch.jdbc.schema
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.batch.table-prefix
      newPropertyKey: spring.batch.jdbc.table-prefix
  - org.openrewrite.java.spring.ChangeSpringPropertyKey:
      oldPropertyKey: spring.data.neo4j.username
      newPropertyKey: spring.neo4j.authentication.username
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
      oldPropertyKey: spring.sql.init.enabled
      newPropertyKey: spring.sql.init.mode
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.flyway.check-location
      comment: This property is deprecated: Locations can no longer be checked accurately due to changes in Flyway's location support.
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.acquire-increment
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.acquisition-interval
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.acquisition-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.allow-local-transactions
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.apply-transaction-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.automatic-enlisting-enabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.cache-producers-consumers
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.class-name
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.defer-connection-release
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.disabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.driver-properties
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.ignore-recovery-failures
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.max-idle-time
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.max-pool-size
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.min-pool-size
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.password
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.share-transaction-connections
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.test-connections
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.two-pc-ordering-position
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.unique-name
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.use-tm-join
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.connectionfactory.user
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.acquire-increment
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.acquisition-interval
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.acquisition-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.allow-local-transactions
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.apply-transaction-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.automatic-enlisting-enabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.class-name
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.cursor-holdability
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.defer-connection-release
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.disabled
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.driver-properties
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.enable-jdbc4-connection-test
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.ignore-recovery-failures
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.isolation-level
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.local-auto-commit
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.login-timeout
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.max-idle-time
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.max-pool-size
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.min-pool-size
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.prepared-statement-cache-size
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.share-transaction-connections
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.test-query
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.two-pc-ordering-position
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.unique-name
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.datasource.use-tm-join
      comment: This property is deprecated and will be removed in future Spring Boot versions
  - org.openrewrite.java.spring.CommentOutSpringPropertyKey:
      propertyKey: spring.jta.bitronix.properties.background-recovery-interval
      comment: This property is deprecated and will be removed in future Spring Boot versions

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot2.SpringBootProperties_2_5"
  displayName="Migrate Spring Boot properties to 2.5"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot2.SpringBootProperties_2_5" />

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
