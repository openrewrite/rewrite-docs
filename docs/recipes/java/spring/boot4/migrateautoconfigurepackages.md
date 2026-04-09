---
sidebar_label: "Migrate packages to modular starters"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate packages to modular starters

**org.openrewrite.java.spring.boot4.MigrateAutoconfigurePackages**

_Migrate to new packages used for autoconfiguration by Spring Boot 4.0 modules._

## Recipe source

[GitHub: spring-boot-40-modular-starters.yml](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/spring-boot-40-modular-starters.yml),
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

* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.jms.activemq`
  * newPackageName: `org.springframework.boot.activemq.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.amqp`
  * newPackageName: `org.springframework.boot.amqp.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.jms.artemis`
  * newPackageName: `org.springframework.boot.artemis.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.batch`
  * newPackageName: `org.springframework.boot.batch.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.cache`
  * newPackageName: `org.springframework.boot.cache.autoconfigure`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.autoconfigure.core.AutoConfigureCache`
  * newFullyQualifiedTypeName: `org.springframework.boot.cache.test.autoconfigure.AutoConfigureCache`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.cassandra`
  * newPackageName: `org.springframework.boot.cassandra.autoconfigure`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.data.cassandra.autoconfigure.DataCassandraAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveDataAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.data.cassandra.autoconfigure.DataCassandraReactiveAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveRepositoriesAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.data.cassandra.autoconfigure.DataCassandraReactiveRepositoriesAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.cassandra.CassandraRepositoriesAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.data.cassandra.autoconfigure.DataCassandraRepositoriesAutoConfiguration`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.data.cassandra`
  * newPackageName: `org.springframework.boot.data.cassandra.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.autoconfigure.data.cassandra`
  * newPackageName: `org.springframework.boot.data.cassandra.test.autoconfigure`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.data.jpa.autoconfigure.DataJpaRepositoriesAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesRegistrar`
  * newFullyQualifiedTypeName: `org.springframework.boot.data.jpa.autoconfigure.DataJpaRepositoriesRegistrar`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.data.jpa`
  * newPackageName: `org.springframework.boot.data.jpa.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.domain`
  * newPackageName: `org.springframework.boot.persistence.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.dao`
  * newPackageName: `org.springframework.boot.persistence.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.orm.jpa`
  * newPackageName: `org.springframework.boot.hibernate.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.actuate.autoconfigure.metrics.orm.jpa`
  * newPackageName: `org.springframework.boot.hibernate.autoconfigure.metrics`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.autoconfigure.orm.jpa`
  * newPackageName: `org.springframework.boot.data.jpa.test.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.jdbc`
  * newPackageName: `org.springframework.boot.jdbc.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.autoconfigure.jdbc`
  * newPackageName: `org.springframework.boot.jdbc.test.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.liquibase`
  * newPackageName: `org.springframework.boot.liquibase.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.flyway`
  * newPackageName: `org.springframework.boot.flyway.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.graphql`
  * newPackageName: `org.springframework.boot.graphql.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.mongo`
  * newPackageName: `org.springframework.boot.mongodb.autoconfigure`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.kafka.StreamsBuilderFactoryBeanCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.kafka.config.StreamsBuilderFactoryBeanConfigurer`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.kafka`
  * newPackageName: `org.springframework.boot.kafka.autoconfigure`
  * recursive: `true`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.boot.autoconfigure.security.SecurityProperties.BASIC_AUTH_ORDER`
  * fullyQualifiedConstantName: `org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterProperties.BASIC_AUTH_ORDER`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `org.springframework.boot.autoconfigure.security.SecurityProperties.DEFAULT_FILTER_ORDER`
  * fullyQualifiedConstantName: `org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterProperties.DEFAULT_FILTER_ORDER`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.SecurityAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.servlet.PathRequest`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.servlet.PathRequest`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.servlet.StaticResourceRequest`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.servlet.StaticResourceRequest`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.servlet.ConditionalOnDefaultWebSecurity`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.DefaultWebSecurityCondition`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.servlet.DefaultWebSecurityCondition`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.StaticResourceLocation`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.StaticResourceLocation`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.reactive.PathRequest`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.reactive.PathRequest`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.ReactiveUserDetailsServiceAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.autoconfigure.security.reactive.StaticResourceRequest`
  * newFullyQualifiedTypeName: `org.springframework.boot.security.autoconfigure.web.reactive.StaticResourceRequest`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.security.oauth2.server.servlet`
  * newPackageName: `org.springframework.boot.security.oauth2.server.authorization.autoconfigure.servlet`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.security.oauth2.client`
  * newPackageName: `org.springframework.boot.security.oauth2.client.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.security.oauth2.resource`
  * newPackageName: `org.springframework.boot.security.oauth2.server.resource.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.security.saml2`
  * newPackageName: `org.springframework.boot.security.saml2.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.security`
  * newPackageName: `org.springframework.boot.security.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.validation`
  * newPackageName: `org.springframework.boot.validation.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.web.servlet`
  * newPackageName: `org.springframework.boot.webmvc.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.autoconfigure.web.servlet`
  * newPackageName: `org.springframework.boot.webmvc.test.autoconfigure`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient`
  * newFullyQualifiedTypeName: `org.springframework.boot.webtestclient.autoconfigure.AutoConfigureWebTestClient`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.autoconfigure.web.reactive.WebTestClientAutoConfiguration`
  * newFullyQualifiedTypeName: `org.springframework.boot.webtestclient.autoconfigure.WebTestClientAutoConfiguration`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.autoconfigure.web.reactive.SpringBootWebTestClientBuilderCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.webtestclient.autoconfigure.SpringBootWebTestClientBuilderCustomizer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.test.web.reactive.server.WebTestClientBuilderCustomizer`
  * newFullyQualifiedTypeName: `org.springframework.boot.webtestclient.autoconfigure.WebTestClientBuilderCustomizer`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.webservices`
  * newPackageName: `org.springframework.boot.webservices.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.autoconfigure.webservices`
  * newPackageName: `org.springframework.boot.webservices.test.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.web.client`
  * newPackageName: `org.springframework.boot.restclient`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.autoconfigure.web.client`
  * newPackageName: `org.springframework.boot.restclient.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.autoconfigure.web.client`
  * newPackageName: `org.springframework.boot.restclient.test.autoconfigure`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.test.web.client`
  * newPackageName: `org.springframework.boot.resttestclient`
  * recursive: `true`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.actuate.autoconfigure.security.servlet`
  * newPackageName: `org.springframework.boot.security.autoconfigure.actuate.web.servlet`
  * recursive: `true`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.AdditionalHealthEndpointPath`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.AdditionalHealthEndpointPath`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpoint`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpoint`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpointGroup`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpointGroup`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpointGroups`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpointGroups`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpointGroupsPostProcessor`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpointGroupsPostProcessor`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpointSupport`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpointWebExtension`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpointWebExtension`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthEndpointWebExtensionRuntimeHints`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HealthEndpointWebExtensionRuntimeHints`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HttpCodeStatusMapper`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.HttpCodeStatusMapper`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.ReactiveHealthEndpointWebExtension`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.ReactiveHealthEndpointWebExtension`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.SimpleHttpCodeStatusMapper`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.SimpleHttpCodeStatusMapper`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.SimpleStatusAggregator`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.SimpleStatusAggregator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.StatusAggregator`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.actuate.endpoint.StatusAggregator`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.DefaultHealthContributorRegistry`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.registry.DefaultHealthContributorRegistry`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.DefaultReactiveHealthContributorRegistry`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.registry.DefaultReactiveHealthContributorRegistry`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.HealthContributorRegistry`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.registry.HealthContributorRegistry`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.springframework.boot.actuate.health.ReactiveHealthContributorRegistry`
  * newFullyQualifiedTypeName: `org.springframework.boot.health.registry.ReactiveHealthContributorRegistry`
* [Rename package name](../../../java/changepackage)
  * oldPackageName: `org.springframework.boot.actuate.health`
  * newPackageName: `org.springframework.boot.health.contributor`
  * recursive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.boot4.MigrateAutoconfigurePackages
displayName: Migrate packages to modular starters
description: |
  Migrate to new packages used for autoconfiguration by Spring Boot 4.0 modules.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.jms.activemq
      newPackageName: org.springframework.boot.activemq.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.amqp
      newPackageName: org.springframework.boot.amqp.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.jms.artemis
      newPackageName: org.springframework.boot.artemis.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.batch
      newPackageName: org.springframework.boot.batch.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.cache
      newPackageName: org.springframework.boot.cache.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.autoconfigure.core.AutoConfigureCache
      newFullyQualifiedTypeName: org.springframework.boot.cache.test.autoconfigure.AutoConfigureCache
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.cassandra
      newPackageName: org.springframework.boot.cassandra.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.cassandra.CassandraDataAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.data.cassandra.autoconfigure.DataCassandraAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveDataAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.data.cassandra.autoconfigure.DataCassandraReactiveAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.cassandra.CassandraReactiveRepositoriesAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.data.cassandra.autoconfigure.DataCassandraReactiveRepositoriesAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.cassandra.CassandraRepositoriesAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.data.cassandra.autoconfigure.DataCassandraRepositoriesAutoConfiguration
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.data.cassandra
      newPackageName: org.springframework.boot.data.cassandra.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.autoconfigure.data.cassandra
      newPackageName: org.springframework.boot.data.cassandra.test.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.data.jpa.autoconfigure.DataJpaRepositoriesAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesRegistrar
      newFullyQualifiedTypeName: org.springframework.boot.data.jpa.autoconfigure.DataJpaRepositoriesRegistrar
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.data.jpa
      newPackageName: org.springframework.boot.data.jpa.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.domain
      newPackageName: org.springframework.boot.persistence.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.dao
      newPackageName: org.springframework.boot.persistence.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.orm.jpa
      newPackageName: org.springframework.boot.hibernate.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.actuate.autoconfigure.metrics.orm.jpa
      newPackageName: org.springframework.boot.hibernate.autoconfigure.metrics
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.autoconfigure.orm.jpa
      newPackageName: org.springframework.boot.data.jpa.test.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.jdbc
      newPackageName: org.springframework.boot.jdbc.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.autoconfigure.jdbc
      newPackageName: org.springframework.boot.jdbc.test.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.liquibase
      newPackageName: org.springframework.boot.liquibase.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.flyway
      newPackageName: org.springframework.boot.flyway.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.graphql
      newPackageName: org.springframework.boot.graphql.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.mongo
      newPackageName: org.springframework.boot.mongodb.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.kafka.StreamsBuilderFactoryBeanCustomizer
      newFullyQualifiedTypeName: org.springframework.kafka.config.StreamsBuilderFactoryBeanConfigurer
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.kafka
      newPackageName: org.springframework.boot.kafka.autoconfigure
      recursive: true
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.boot.autoconfigure.security.SecurityProperties.BASIC_AUTH_ORDER
      fullyQualifiedConstantName: org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterProperties.BASIC_AUTH_ORDER
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: org.springframework.boot.autoconfigure.security.SecurityProperties.DEFAULT_FILTER_ORDER
      fullyQualifiedConstantName: org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterProperties.DEFAULT_FILTER_ORDER
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.SecurityAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.servlet.PathRequest
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.servlet.PathRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.servlet.SecurityFilterAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.servlet.SecurityFilterAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.servlet.StaticResourceRequest
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.servlet.StaticResourceRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.servlet.ConditionalOnDefaultWebSecurity
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.DefaultWebSecurityCondition
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.servlet.DefaultWebSecurityCondition
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.StaticResourceLocation
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.StaticResourceLocation
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.reactive.PathRequest
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.reactive.PathRequest
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.reactive.ReactiveUserDetailsServiceAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.ReactiveUserDetailsServiceAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.autoconfigure.security.reactive.StaticResourceRequest
      newFullyQualifiedTypeName: org.springframework.boot.security.autoconfigure.web.reactive.StaticResourceRequest
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.security.oauth2.server.servlet
      newPackageName: org.springframework.boot.security.oauth2.server.authorization.autoconfigure.servlet
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.security.oauth2.client
      newPackageName: org.springframework.boot.security.oauth2.client.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.security.oauth2.resource
      newPackageName: org.springframework.boot.security.oauth2.server.resource.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.security.saml2
      newPackageName: org.springframework.boot.security.saml2.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.security
      newPackageName: org.springframework.boot.security.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.validation
      newPackageName: org.springframework.boot.validation.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.web.servlet
      newPackageName: org.springframework.boot.webmvc.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.autoconfigure.web.servlet
      newPackageName: org.springframework.boot.webmvc.test.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
      newFullyQualifiedTypeName: org.springframework.boot.webtestclient.autoconfigure.AutoConfigureWebTestClient
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.autoconfigure.web.reactive.WebTestClientAutoConfiguration
      newFullyQualifiedTypeName: org.springframework.boot.webtestclient.autoconfigure.WebTestClientAutoConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.autoconfigure.web.reactive.SpringBootWebTestClientBuilderCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.webtestclient.autoconfigure.SpringBootWebTestClientBuilderCustomizer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.test.web.reactive.server.WebTestClientBuilderCustomizer
      newFullyQualifiedTypeName: org.springframework.boot.webtestclient.autoconfigure.WebTestClientBuilderCustomizer
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.webservices
      newPackageName: org.springframework.boot.webservices.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.autoconfigure.webservices
      newPackageName: org.springframework.boot.webservices.test.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.web.client
      newPackageName: org.springframework.boot.restclient
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.autoconfigure.web.client
      newPackageName: org.springframework.boot.restclient.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.autoconfigure.web.client
      newPackageName: org.springframework.boot.restclient.test.autoconfigure
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.test.web.client
      newPackageName: org.springframework.boot.resttestclient
      recursive: true
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.actuate.autoconfigure.security.servlet
      newPackageName: org.springframework.boot.security.autoconfigure.actuate.web.servlet
      recursive: true
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.AdditionalHealthEndpointPath
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.AdditionalHealthEndpointPath
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpoint
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpoint
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpointGroup
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpointGroup
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpointGroups
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpointGroups
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpointGroupsPostProcessor
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpointGroupsPostProcessor
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpointSupport
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpointSupport
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpointWebExtension
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpointWebExtension
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthEndpointWebExtensionRuntimeHints
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HealthEndpointWebExtensionRuntimeHints
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HttpCodeStatusMapper
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.HttpCodeStatusMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.ReactiveHealthEndpointWebExtension
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.ReactiveHealthEndpointWebExtension
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.SimpleHttpCodeStatusMapper
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.SimpleHttpCodeStatusMapper
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.SimpleStatusAggregator
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.SimpleStatusAggregator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.StatusAggregator
      newFullyQualifiedTypeName: org.springframework.boot.health.actuate.endpoint.StatusAggregator
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.DefaultHealthContributorRegistry
      newFullyQualifiedTypeName: org.springframework.boot.health.registry.DefaultHealthContributorRegistry
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.DefaultReactiveHealthContributorRegistry
      newFullyQualifiedTypeName: org.springframework.boot.health.registry.DefaultReactiveHealthContributorRegistry
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.HealthContributorRegistry
      newFullyQualifiedTypeName: org.springframework.boot.health.registry.HealthContributorRegistry
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.springframework.boot.actuate.health.ReactiveHealthContributorRegistry
      newFullyQualifiedTypeName: org.springframework.boot.health.registry.ReactiveHealthContributorRegistry
  - org.openrewrite.java.ChangePackage:
      oldPackageName: org.springframework.boot.actuate.health
      newPackageName: org.springframework.boot.health.contributor
      recursive: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to Spring Boot 4.0 modular starters (Community Edition)](/recipes/java/spring/boot4/migratetomodularstarters-community-edition.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.boot4.MigrateAutoconfigurePackages"
  displayName="Migrate packages to modular starters"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.boot4.MigrateAutoconfigurePackages" />

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
