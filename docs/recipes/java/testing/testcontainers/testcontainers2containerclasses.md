---
sidebar_label: "Testcontainers 2 container classes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Testcontainers 2 container classes

**org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses**

_Change Testcontainers container classes to their new package locations in Testcontainers 2.x._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/testcontainers.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.BigQueryEmulatorContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.gcloud.BigQueryEmulatorContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.BigtableEmulatorContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.gcloud.BigtableEmulatorContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.BrowserWebDriverContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.selenium.BrowserWebDriverContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.CassandraContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.cassandra.CassandraContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.CockroachContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.cockroachdb.CockroachContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.DatastoreEmulatorContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.gcloud.DatastoreEmulatorContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.Db2Container`
  * newFullyQualifiedTypeName: `org.testcontainers.db2.Db2Container`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.FirestoreEmulatorContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.gcloud.FirestoreEmulatorContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.KafkaContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.kafka.KafkaContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.localstack.LocalStackContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.localstack.LocalStackContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.MariaDBContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.mariadb.MariaDBContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.MockServerContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.mockserver.MockServerContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.MongoDBContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.mongodb.MongoDBContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.MSSQLServerContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.mssqlserver.MSSQLServerContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.MySQLContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.mysql.MySQLContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.Neo4jContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.neo4j.Neo4jContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.NginxContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.nginx.NginxContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.OrientDBContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.orientdb.OrientDBContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.PostgreSQLContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.postgresql.PostgreSQLContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.PubSubEmulatorContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.gcloud.PubSubEmulatorContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.PulsarContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.pulsar.PulsarContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.RabbitMQContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.rabbitmq.RabbitMQContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.SolrContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.solr.SolrContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.SpannerEmulatorContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.gcloud.SpannerEmulatorContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.TiDBContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.tidb.TiDBContainer`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `org.testcontainers.containers.ToxiproxyContainer`
  * newFullyQualifiedTypeName: `org.testcontainers.toxiproxy.ToxiproxyContainer`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses
displayName: Testcontainers 2 container classes
description: |
  Change Testcontainers container classes to their new package locations in Testcontainers 2.x.
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.BigQueryEmulatorContainer
      newFullyQualifiedTypeName: org.testcontainers.gcloud.BigQueryEmulatorContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.BigtableEmulatorContainer
      newFullyQualifiedTypeName: org.testcontainers.gcloud.BigtableEmulatorContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.BrowserWebDriverContainer
      newFullyQualifiedTypeName: org.testcontainers.selenium.BrowserWebDriverContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.CassandraContainer
      newFullyQualifiedTypeName: org.testcontainers.cassandra.CassandraContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.CockroachContainer
      newFullyQualifiedTypeName: org.testcontainers.cockroachdb.CockroachContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.DatastoreEmulatorContainer
      newFullyQualifiedTypeName: org.testcontainers.gcloud.DatastoreEmulatorContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.Db2Container
      newFullyQualifiedTypeName: org.testcontainers.db2.Db2Container
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.FirestoreEmulatorContainer
      newFullyQualifiedTypeName: org.testcontainers.gcloud.FirestoreEmulatorContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.KafkaContainer
      newFullyQualifiedTypeName: org.testcontainers.kafka.KafkaContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.localstack.LocalStackContainer
      newFullyQualifiedTypeName: org.testcontainers.localstack.LocalStackContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.MariaDBContainer
      newFullyQualifiedTypeName: org.testcontainers.mariadb.MariaDBContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.MockServerContainer
      newFullyQualifiedTypeName: org.testcontainers.mockserver.MockServerContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.MongoDBContainer
      newFullyQualifiedTypeName: org.testcontainers.mongodb.MongoDBContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.MSSQLServerContainer
      newFullyQualifiedTypeName: org.testcontainers.mssqlserver.MSSQLServerContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.MySQLContainer
      newFullyQualifiedTypeName: org.testcontainers.mysql.MySQLContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.Neo4jContainer
      newFullyQualifiedTypeName: org.testcontainers.neo4j.Neo4jContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.NginxContainer
      newFullyQualifiedTypeName: org.testcontainers.nginx.NginxContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.OrientDBContainer
      newFullyQualifiedTypeName: org.testcontainers.orientdb.OrientDBContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.PostgreSQLContainer
      newFullyQualifiedTypeName: org.testcontainers.postgresql.PostgreSQLContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.PubSubEmulatorContainer
      newFullyQualifiedTypeName: org.testcontainers.gcloud.PubSubEmulatorContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.PulsarContainer
      newFullyQualifiedTypeName: org.testcontainers.pulsar.PulsarContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.RabbitMQContainer
      newFullyQualifiedTypeName: org.testcontainers.rabbitmq.RabbitMQContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.SolrContainer
      newFullyQualifiedTypeName: org.testcontainers.solr.SolrContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.SpannerEmulatorContainer
      newFullyQualifiedTypeName: org.testcontainers.gcloud.SpannerEmulatorContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.TiDBContainer
      newFullyQualifiedTypeName: org.testcontainers.tidb.TiDBContainer
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.testcontainers.containers.ToxiproxyContainer
      newFullyQualifiedTypeName: org.testcontainers.toxiproxy.ToxiproxyContainer

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
    activeRecipe("org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses")
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
        activeRecipe("org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses")
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
            <recipe>org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe Testcontainers2ContainerClasses
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.testcontainers.Testcontainers2ContainerClasses" />

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
