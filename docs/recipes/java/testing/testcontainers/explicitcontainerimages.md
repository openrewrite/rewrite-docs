---
sidebar_label: "Explicit container images and versions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Explicit container images and versions

**org.openrewrite.java.testing.testcontainers.ExplicitContainerImages**

_Replace implicit default container images and versions with explicit versions._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/testcontainers/ExplicitContainerImages.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.CassandraContainer`
  * image: `cassandra:3.11.2`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.containers.ClickHouseContainer`
  * image: `yandex/clickhouse-server:18.10.3`
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
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage)
  * containerClass: `org.testcontainers.vault.VaultContainer`
  * image: `vault:1.1.3`
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
recipeList:
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.CassandraContainer
      image: cassandra:3.11.2
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.containers.ClickHouseContainer
      image: yandex/clickhouse-server:18.10.3
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
  - org.openrewrite.java.testing.testcontainers.ExplicitContainerImage:
      containerClass: org.testcontainers.vault.VaultContainer
      image: vault:1.1.3
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

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.testcontainers.ExplicitContainerImages")
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
        activeRecipe("org.openrewrite.java.testing.testcontainers.ExplicitContainerImages")
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
            <recipe>org.openrewrite.java.testing.testcontainers.ExplicitContainerImages</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.testcontainers.ExplicitContainerImages -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ExplicitContainerImages
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

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
