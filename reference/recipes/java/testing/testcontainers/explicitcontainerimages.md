# Explicit container images and versions

**org.openrewrite.java.testing.testcontainers.ExplicitContainerImages**

_Replace implicit default container images and versions with explicit versions._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/testcontainers.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.3.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.3.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.3.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.testcontainers.ExplicitContainerImages")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.3.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.8.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.3.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.testcontainers.ExplicitContainerImages")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.testcontainers.ExplicitContainerImages</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.3.2</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.testcontainers.ExplicitContainerImages
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ExplicitContainerImages
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.CassandraContainer`
  * image: `cassandra:3.11.2`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.ClickHouseContainer`
  * image: `yandex/clickhouse-server:18.10.3`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.CockroachContainer`
  * image: `cockroachdb/cockroach:v19.2.11`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.couchbase.CouchbaseContainer`
  * image: `couchbase/server:6.5.1`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.Db2Container`
  * image: `ibmcom/db2:11.5.0.0a`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.dynamodb.DynaliteContainer`
  * image: `quay.io/testcontainers/dynalite:v1.2.1-1`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.elasticsearch.ElasticsearchContainer`
  * image: `docker.elastic.co/elasticsearch/elasticsearch:7.9.2`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.InfluxDBContainer`
  * image: `influxdb:1.4.3`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.MariaDBContainer`
  * image: `mariadb:10.3.6`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.MongoDBContainer`
  * image: `mongo:4.0.10`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.MSSQLServerContainer`
  * image: `mcr.microsoft.com/mssql/server:2017-CU12`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.MySQLContainer`
  * image: `mysql:5.7.34`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.Neo4jContainer`
  * image: `neo4j:4.4`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.NginxContainer`
  * image: `nginx:1.9.4`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.OracleContainer`
  * image: `gvenzl/oracle-xe:18.4.0-slim`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.OrientDBContainer`
  * image: `orientdb:3.0.24-tp3`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.PostgreSQLContainer`
  * image: `postgres:9.6.12`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.RabbitMQContainer`
  * image: `rabbitmq:3.7.25-management-alpine`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.SolrContainer`
  * image: `solr:8.3.0`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.ToxiproxyContainer`
  * image: `shopify/toxiproxy:2.1.0`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.vault.VaultContainer`
  * image: `vault:1.1.3`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.KafkaContainer`
  * image: `confluentinc/cp-kafka:5.4.3`
  * parseImage: `true`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.localstack.LocalStackContainer`
  * image: `localstack/localstack:0.11.2`
  * parseImage: `true`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.MockServerContainer`
  * image: `jamesdbloom/mockserver:mockserver-5.5.4`
  * parseImage: `true`
* [Add image argument to container constructor](../../../java/testing/testcontainers/explicitcontainerimage.md)
  * containerClass: `org.testcontainers.containers.PulsarContainer`
  * image: `apachepulsar/pulsar:2.10.0`
  * parseImage: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.testcontainers.ExplicitContainerImages
displayName: Explicit container images and versions
description: Replace implicit default container images and versions with explicit versions.
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
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.testcontainers.ExplicitContainerImages)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io)
