---
sidebar_label: "Each camel-debezium module has its own subpackage corresponding to the database type"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Each camel-debezium module has its own subpackage corresponding to the database type

**org.apache.camel.upgrade.camel49.DebeziumChangeTypes**

_each camel-debezium module has its own subpackage corresponding to the database type. So for example, all the classes of the module camel-debezium-postgres have been moved to a dedicated package which is org.apache.camel.component.debezium.postgres instead of having everything under the root package org.apache.camel.component.debezium._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.apache.camel.upgrade.camel49.DebeziumChangeTypes), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::
## License

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.configuration.Db2ConnectorEmbeddedDebeziumConfiguration`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.configuration.Db2ConnectorEmbeddedDebeziumConfiguration`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2ComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2ComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2EndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2EndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2EndpointUriFactory`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2EndpointUriFactory`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2Component`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2Component`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2ComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2ComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2EndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2EndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumDb2Endpoint`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.db2.DebeziumDb2Endpoint`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.configuration.MongodbConnectorEmbeddedDebeziumConfiguration`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.configuration.MongodbConnectorEmbeddedDebeziumConfiguration`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbEndpointUriFactory`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpointUriFactory`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbComponent`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbComponent`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMongodbEndpoint`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpoint`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.configuration.MySqlConnectorEmbeddedDebeziumConfiguration`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.configuration.MySqlConnectorEmbeddedDebeziumConfiguration`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlEndpointUriFactory`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpointUriFactory`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlComponent`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlComponent`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumMySqlEndpoint`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpoint`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.configuration.OracleConnectorEmbeddedDebeziumConfiguration`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.configuration.OracleConnectorEmbeddedDebeziumConfiguration`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleEndpointUriFactory`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleEndpointUriFactory`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleComponent`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleComponent`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumOracleEndpoint`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.oracle.DebeziumOracleEndpoint`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.configuration.PostgresConnectorEmbeddedDebeziumConfiguration`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.configuration.PostgresConnectorEmbeddedDebeziumConfiguration`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresEndpointUriFactory`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpointUriFactory`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresComponent`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresComponent`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumPostgresEndpoint`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpoint`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.configuration.SqlserverConnectorEmbeddedDebeziumConfiguration`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.configuration.SqlserverConnectorEmbeddedDebeziumConfiguration`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverEndpointUriFactory`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpointUriFactory`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverComponent`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverComponent`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverComponentConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverComponentConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverEndpointConfigurer`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpointConfigurer`
* [Change type](../../../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.apache.camel.component.debezium.DebeziumSqlserverEndpoint`
  * newFullyQualifiedTypeName: `org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpoint`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.apache.camel.upgrade.camel49.DebeziumChangeTypes
displayName: Each camel-debezium module has its own subpackage corresponding to the database type
description: |
  each camel-debezium module has its own subpackage corresponding to the database type. So for example, all the classes of the module camel-debezium-postgres have been moved to a dedicated package which is org.apache.camel.component.debezium.postgres instead of having everything under the root package org.apache.camel.component.debezium.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.configuration.Db2ConnectorEmbeddedDebeziumConfiguration
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.configuration.Db2ConnectorEmbeddedDebeziumConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2ComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2ComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2EndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2EndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2EndpointUriFactory
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2EndpointUriFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2Component
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2Component
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2ComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2ComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2EndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2EndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumDb2Endpoint
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.db2.DebeziumDb2Endpoint
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.configuration.MongodbConnectorEmbeddedDebeziumConfiguration
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.configuration.MongodbConnectorEmbeddedDebeziumConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbEndpointUriFactory
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpointUriFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbComponent
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbComponent
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMongodbEndpoint
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mongodb.DebeziumMongodbEndpoint
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.configuration.MySqlConnectorEmbeddedDebeziumConfiguration
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.configuration.MySqlConnectorEmbeddedDebeziumConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlEndpointUriFactory
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpointUriFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlComponent
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlComponent
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumMySqlEndpoint
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.mysql.DebeziumMySqlEndpoint
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.configuration.OracleConnectorEmbeddedDebeziumConfiguration
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.configuration.OracleConnectorEmbeddedDebeziumConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleEndpointUriFactory
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleEndpointUriFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleComponent
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleComponent
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumOracleEndpoint
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.oracle.DebeziumOracleEndpoint
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.configuration.PostgresConnectorEmbeddedDebeziumConfiguration
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.configuration.PostgresConnectorEmbeddedDebeziumConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresEndpointUriFactory
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpointUriFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresComponent
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresComponent
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumPostgresEndpoint
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.postgres.DebeziumPostgresEndpoint
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.configuration.SqlserverConnectorEmbeddedDebeziumConfiguration
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.configuration.SqlserverConnectorEmbeddedDebeziumConfiguration
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverEndpointUriFactory
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpointUriFactory
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverComponent
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverComponent
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverComponentConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverComponentConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverEndpointConfigurer
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpointConfigurer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.apache.camel.component.debezium.DebeziumSqlserverEndpoint
      newFullyQualifiedTypeName: org.apache.camel.component.debezium.sqlserver.DebeziumSqlserverEndpoint

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.apache.camel.upgrade.camel49.DebeziumChangeTypes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("org.apache.camel.upgrade.camel49.DebeziumChangeTypes")
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
            <recipe>org.apache.camel.upgrade.camel49.DebeziumChangeTypes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.apache.camel.upgrade.camel49.DebeziumChangeTypes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe DebeziumChangeTypes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.apache.camel.upgrade.camel49.DebeziumChangeTypes" />

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

