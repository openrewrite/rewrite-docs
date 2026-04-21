---
sidebar_label: "Explicit container images and versions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Explicit container images and versions

**org.openrewrite.java.testing.testcontainers.ExplicitContainerImages**

_Replace implicit default container images and versions with explicit versions._

## Recipe source

[GitHub: testcontainers.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/testcontainers.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

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

* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.CassandraContainer`
  * image: `cassandra:3.11.2`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.ClickHouseContainer`
  * image: `yandex/clickhouse-server:18.10.3`
* [Replace container image name](../../../java/testing/testcontainers/replacecontainerimagename)
  * containerClass: `org.testcontainers.containers.ClickHouseContainer`
  * imagePrefix: `yandex/clickhouse-server`
  * newImage: `clickhouse/clickhouse-server`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.CockroachContainer`
  * image: `cockroachdb/cockroach:v19.2.11`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.couchbase.CouchbaseContainer`
  * image: `couchbase/server:6.5.1`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.Db2Container`
  * image: `ibmcom/db2:11.5.0.0a`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.dynamodb.DynaliteContainer`
  * image: `quay.io/testcontainers/dynalite:v1.2.1-1`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.elasticsearch.ElasticsearchContainer`
  * image: `docker.elastic.co/elasticsearch/elasticsearch:7.9.2`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.InfluxDBContainer`
  * image: `influxdb:1.4.3`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.MariaDBContainer`
  * image: `mariadb:10.3.6`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.MongoDBContainer`
  * image: `mongo:4.0.10`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.MSSQLServerContainer`
  * image: `mcr.microsoft.com/mssql/server:2017-CU12`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.MySQLContainer`
  * image: `mysql:5.7.34`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.Neo4jContainer`
  * image: `neo4j:4.4`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.NginxContainer`
  * image: `nginx:1.9.4`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.OracleContainer`
  * image: `gvenzl/oracle-xe:18.4.0-slim`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.OrientDBContainer`
  * image: `orientdb:3.0.24-tp3`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.PostgreSQLContainer`
  * image: `postgres:9.6.12`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.RabbitMQContainer`
  * image: `rabbitmq:3.7.25-management-alpine`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.SolrContainer`
  * image: `solr:8.3.0`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.ToxiproxyContainer`
  * image: `shopify/toxiproxy:2.1.0`
* [Replace container image name](../../../java/testing/testcontainers/replacecontainerimagename)
  * containerClass: `org.testcontainers.containers.ToxiproxyContainer`
  * imagePrefix: `shopify/toxiproxy`
  * newImage: `ghcr.io/shopify/toxiproxy`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.vault.VaultContainer`
  * image: `vault:1.1.3`
* [Replace container image name](../../../java/testing/testcontainers/replacecontainerimagename)
  * containerClass: `org.testcontainers.vault.VaultContainer`
  * imagePrefix: `vault:`
  * newImage: `hashicorp/vault`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.KafkaContainer`
  * image: `confluentinc/cp-kafka:5.4.3`
  * parseImage: `true`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.localstack.LocalStackContainer`
  * image: `localstack/localstack:0.11.2`
  * parseImage: `true`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.MockServerContainer`
  * image: `jamesdbloom/mockserver:mockserver-5.5.4`
  * parseImage: `true`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.PulsarContainer`
  * image: `apachepulsar/pulsar:2.10.0`
  * parseImage: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.testcontainers.ExplicitContainerImages
displayName: Explicit container images and versions
description: |
  Replace implicit default container images and versions with explicit versions.
preconditions:
  - org.openrewrite.Singleton
recipeList:
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.CassandraContainer
      image: cassandra:3.11.2
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.ClickHouseContainer
      image: yandex/clickhouse-server:18.10.3
  - org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName:
      containerClass: org.testcontainers.containers.ClickHouseContainer
      imagePrefix: yandex/clickhouse-server
      newImage: clickhouse/clickhouse-server
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.CockroachContainer
      image: cockroachdb/cockroach:v19.2.11
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.couchbase.CouchbaseContainer
      image: couchbase/server:6.5.1
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.Db2Container
      image: ibmcom/db2:11.5.0.0a
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.dynamodb.DynaliteContainer
      image: quay.io/testcontainers/dynalite:v1.2.1-1
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.elasticsearch.ElasticsearchContainer
      image: docker.elastic.co/elasticsearch/elasticsearch:7.9.2
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.InfluxDBContainer
      image: influxdb:1.4.3
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.MariaDBContainer
      image: mariadb:10.3.6
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.MongoDBContainer
      image: mongo:4.0.10
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.MSSQLServerContainer
      image: mcr.microsoft.com/mssql/server:2017-CU12
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.MySQLContainer
      image: mysql:5.7.34
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.Neo4jContainer
      image: neo4j:4.4
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.NginxContainer
      image: nginx:1.9.4
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.OracleContainer
      image: gvenzl/oracle-xe:18.4.0-slim
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.OrientDBContainer
      image: orientdb:3.0.24-tp3
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.PostgreSQLContainer
      image: postgres:9.6.12
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.RabbitMQContainer
      image: rabbitmq:3.7.25-management-alpine
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.SolrContainer
      image: solr:8.3.0
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.ToxiproxyContainer
      image: shopify/toxiproxy:2.1.0
  - org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName:
      containerClass: org.testcontainers.containers.ToxiproxyContainer
      imagePrefix: shopify/toxiproxy
      newImage: ghcr.io/shopify/toxiproxy
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.vault.VaultContainer
      image: vault:1.1.3
  - org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName:
      containerClass: org.testcontainers.vault.VaultContainer
      imagePrefix: vault:
      newImage: hashicorp/vault
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.KafkaContainer
      image: confluentinc/cp-kafka:5.4.3
      parseImage: true
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.localstack.LocalStackContainer
      image: localstack/localstack:0.11.2
      parseImage: true
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.MockServerContainer
      image: jamesdbloom/mockserver:mockserver-5.5.4
      parseImage: true
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.PulsarContainer
      image: apachepulsar/pulsar:2.10.0
      parseImage: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to testcontainers-java 2.x](/recipes/java/testing/testcontainers/testcontainers2migration.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.testing.testcontainers.ExplicitContainerImages"
  displayName="Explicit container images and versions"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-testing-frameworks"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.testcontainers.ExplicitContainerImages" />

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
