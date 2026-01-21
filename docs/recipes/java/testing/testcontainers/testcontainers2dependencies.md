---
sidebar_label: "Rename Testcontainers dependencies"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rename Testcontainers dependencies

**org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies**

_Change Testcontainers dependencies to adopt the new consistent `testcontainers-` prefix._

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
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `activemq`
  * newArtifactId: `testcontainers-activemq`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `azure`
  * newArtifactId: `testcontainers-azure`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `cassandra`
  * newArtifactId: `testcontainers-cassandra`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `chromadb`
  * newArtifactId: `testcontainers-chromadb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `clickhouse`
  * newArtifactId: `testcontainers-clickhouse`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `cockroachdb`
  * newArtifactId: `testcontainers-cockroachdb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `consul`
  * newArtifactId: `testcontainers-consul`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `couchbase`
  * newArtifactId: `testcontainers-couchbase`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `cratedb`
  * newArtifactId: `testcontainers-cratedb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `database-commons`
  * newArtifactId: `testcontainers-database-commons`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `databend`
  * newArtifactId: `testcontainers-databend`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `db2`
  * newArtifactId: `testcontainers-db2`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `elasticsearch`
  * newArtifactId: `testcontainers-elasticsearch`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `gcloud`
  * newArtifactId: `testcontainers-gcloud`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `grafana`
  * newArtifactId: `testcontainers-grafana`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `hivemq`
  * newArtifactId: `testcontainers-hivemq`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `influxdb`
  * newArtifactId: `testcontainers-influxdb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `jdbc`
  * newArtifactId: `testcontainers-jdbc`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `junit-jupiter`
  * newArtifactId: `testcontainers-junit-jupiter`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `k3s`
  * newArtifactId: `testcontainers-k3s`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `k6`
  * newArtifactId: `testcontainers-k6`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `kafka`
  * newArtifactId: `testcontainers-kafka`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `ldap`
  * newArtifactId: `testcontainers-ldap`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `localstack`
  * newArtifactId: `testcontainers-localstack`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `mariadb`
  * newArtifactId: `testcontainers-mariadb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `milvus`
  * newArtifactId: `testcontainers-milvus`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `minio`
  * newArtifactId: `testcontainers-minio`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `mockserver`
  * newArtifactId: `testcontainers-mockserver`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `mongodb`
  * newArtifactId: `testcontainers-mongodb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `mssqlserver`
  * newArtifactId: `testcontainers-mssqlserver`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `mysql`
  * newArtifactId: `testcontainers-mysql`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `neo4j`
  * newArtifactId: `testcontainers-neo4j`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `nginx`
  * newArtifactId: `testcontainers-nginx`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `oceanbase`
  * newArtifactId: `testcontainers-oceanbase`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `ollama`
  * newArtifactId: `testcontainers-ollama`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `openfga`
  * newArtifactId: `testcontainers-openfga`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `oracle-free`
  * newArtifactId: `testcontainers-oracle-free`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `oracle-xe`
  * newArtifactId: `testcontainers-oracle-xe`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `orientdb`
  * newArtifactId: `testcontainers-orientdb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `pinecone`
  * newArtifactId: `testcontainers-pinecone`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `postgresql`
  * newArtifactId: `testcontainers-postgresql`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `presto`
  * newArtifactId: `testcontainers-presto`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `pulsar`
  * newArtifactId: `testcontainers-pulsar`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `qdrant`
  * newArtifactId: `testcontainers-qdrant`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `questdb`
  * newArtifactId: `testcontainers-questdb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `r2dbc`
  * newArtifactId: `testcontainers-r2dbc`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `rabbitmq`
  * newArtifactId: `testcontainers-rabbitmq`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `redpanda`
  * newArtifactId: `testcontainers-redpanda`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `scylladb`
  * newArtifactId: `testcontainers-scylladb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `selenium`
  * newArtifactId: `testcontainers-selenium`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `solace`
  * newArtifactId: `testcontainers-solace`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `solr`
  * newArtifactId: `testcontainers-solr`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `spock`
  * newArtifactId: `testcontainers-spock`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `tidb`
  * newArtifactId: `testcontainers-tidb`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `timeplus`
  * newArtifactId: `testcontainers-timeplus`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `toxiproxy`
  * newArtifactId: `testcontainers-toxiproxy`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `trino`
  * newArtifactId: `testcontainers-trino`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `typesense`
  * newArtifactId: `testcontainers-typesense`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `vault`
  * newArtifactId: `testcontainers-vault`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `weaviate`
  * newArtifactId: `testcontainers-weaviate`
  * newVersion: `2.x`
* [Change Gradle or Maven dependency](../../../java/dependencies/changedependency)
  * oldGroupId: `org.testcontainers`
  * oldArtifactId: `yugabytedb`
  * newArtifactId: `testcontainers-yugabytedb`
  * newVersion: `2.x`
* [Upgrade Gradle or Maven dependency versions](../../../java/dependencies/upgradedependencyversion)
  * groupId: `org.testcontainers`
  * artifactId: `*`
  * newVersion: `2.x`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies
displayName: Rename Testcontainers dependencies
description: |
  Change Testcontainers dependencies to adopt the new consistent `testcontainers-` prefix.
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: activemq
      newArtifactId: testcontainers-activemq
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: azure
      newArtifactId: testcontainers-azure
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: cassandra
      newArtifactId: testcontainers-cassandra
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: chromadb
      newArtifactId: testcontainers-chromadb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: clickhouse
      newArtifactId: testcontainers-clickhouse
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: cockroachdb
      newArtifactId: testcontainers-cockroachdb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: consul
      newArtifactId: testcontainers-consul
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: couchbase
      newArtifactId: testcontainers-couchbase
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: cratedb
      newArtifactId: testcontainers-cratedb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: database-commons
      newArtifactId: testcontainers-database-commons
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: databend
      newArtifactId: testcontainers-databend
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: db2
      newArtifactId: testcontainers-db2
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: elasticsearch
      newArtifactId: testcontainers-elasticsearch
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: gcloud
      newArtifactId: testcontainers-gcloud
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: grafana
      newArtifactId: testcontainers-grafana
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: hivemq
      newArtifactId: testcontainers-hivemq
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: influxdb
      newArtifactId: testcontainers-influxdb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: jdbc
      newArtifactId: testcontainers-jdbc
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: junit-jupiter
      newArtifactId: testcontainers-junit-jupiter
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: k3s
      newArtifactId: testcontainers-k3s
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: k6
      newArtifactId: testcontainers-k6
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: kafka
      newArtifactId: testcontainers-kafka
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: ldap
      newArtifactId: testcontainers-ldap
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: localstack
      newArtifactId: testcontainers-localstack
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: mariadb
      newArtifactId: testcontainers-mariadb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: milvus
      newArtifactId: testcontainers-milvus
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: minio
      newArtifactId: testcontainers-minio
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: mockserver
      newArtifactId: testcontainers-mockserver
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: mongodb
      newArtifactId: testcontainers-mongodb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: mssqlserver
      newArtifactId: testcontainers-mssqlserver
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: mysql
      newArtifactId: testcontainers-mysql
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: neo4j
      newArtifactId: testcontainers-neo4j
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: nginx
      newArtifactId: testcontainers-nginx
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: oceanbase
      newArtifactId: testcontainers-oceanbase
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: ollama
      newArtifactId: testcontainers-ollama
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: openfga
      newArtifactId: testcontainers-openfga
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: oracle-free
      newArtifactId: testcontainers-oracle-free
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: oracle-xe
      newArtifactId: testcontainers-oracle-xe
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: orientdb
      newArtifactId: testcontainers-orientdb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: pinecone
      newArtifactId: testcontainers-pinecone
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: postgresql
      newArtifactId: testcontainers-postgresql
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: presto
      newArtifactId: testcontainers-presto
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: pulsar
      newArtifactId: testcontainers-pulsar
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: qdrant
      newArtifactId: testcontainers-qdrant
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: questdb
      newArtifactId: testcontainers-questdb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: r2dbc
      newArtifactId: testcontainers-r2dbc
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: rabbitmq
      newArtifactId: testcontainers-rabbitmq
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: redpanda
      newArtifactId: testcontainers-redpanda
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: scylladb
      newArtifactId: testcontainers-scylladb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: selenium
      newArtifactId: testcontainers-selenium
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: solace
      newArtifactId: testcontainers-solace
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: solr
      newArtifactId: testcontainers-solr
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: spock
      newArtifactId: testcontainers-spock
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: tidb
      newArtifactId: testcontainers-tidb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: timeplus
      newArtifactId: testcontainers-timeplus
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: toxiproxy
      newArtifactId: testcontainers-toxiproxy
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: trino
      newArtifactId: testcontainers-trino
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: typesense
      newArtifactId: testcontainers-typesense
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: vault
      newArtifactId: testcontainers-vault
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: weaviate
      newArtifactId: testcontainers-weaviate
      newVersion: 2.x
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.testcontainers
      oldArtifactId: yugabytedb
      newArtifactId: testcontainers-yugabytedb
      newVersion: 2.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: org.testcontainers
      artifactId: "*"
      newVersion: 2.x

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate to testcontainers-java 2.x](/recipes/java/testing/testcontainers/testcontainers2migration.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies")
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
            <recipe>org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Testcontainers2Dependencies
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.testcontainers.Testcontainers2Dependencies" />

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
