# Quarkus 2.x migration from Quarkus 1.x

**org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration**

_Migrates Quarkus 1.x to 2.x._

## Source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/quarkus.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 2.0.1


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:2.0.1")
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>2.0.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Quarkus 1.13 migration from Quarkus 1.11](../../quarkus/quarkus1to1_13migration.md)
* [Use `@GrpcClient`](../../quarkus/quarkus2/grpcserviceannotationtogrpcclient.md)
* [Remove `avro-maven-plugin`](../../quarkus/quarkus2/removeavromavenplugin.md)
* [Use `@Identifier("default-kafka-broker")`](../../quarkus/quarkus2/useidentifierondefaultkafkabroker.md)
* [Use `PanacheEntityBase` static methods](../../quarkus/quarkus2/usepanacheentitybasestaticmethods.md)
* [Use `Uni<T extends PanacheEntityBase>`](../../quarkus/quarkus2/usepanacheentitybaseunit.md)
* [Use `Uni<T extends ReactivePanacheMongoEntityBase>`](../../quarkus/quarkus2/usereactivepanachemongoentitybaseunit.md)
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `smallrye.jwt.sign.key-location`
  * newPropertyKey: `smallrye.jwt.sign.key.location`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `smallrye.jwt.encrypt.key-location`
  * newPropertyKey: `smallrye.jwt.encrypt.key.location`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.neo4j.pool.metrics-enabled`
  * newPropertyKey: `quarkus.neo4j.pool.metrics.enabled`
* [Change property value](../../properties/changepropertyvalue.md)
  * propertyKey: `quarkus.quartz.force-start`
  * newValue: `forced`
* [Change property key](../../properties/changepropertykey.md)
  * oldPropertyKey: `quarkus.quartz.force-start`
  * newPropertyKey: `quarkus.quartz.start-mode`
* [Change property value](../../properties/changepropertyvalue.md)
  * propertyKey: `quarkus.quartz.store-type`
  * newValue: `jdbc-cmt`
  * oldValue: `db`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.CheckedTemplate`
  * newFullyQualifiedTypeName: `io.quarkus.qute.CheckedTemplate`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.ResourcePath`
  * newFullyQualifiedTypeName: `io.quarkus.qute.Location`
* [Change type](../../java/changetype.md)
  * oldFullyQualifiedTypeName: `io.quarkus.mongodb.runtime.MongoClientName`
  * newFullyQualifiedTypeName: `io.quarkus.mongodb.MongoClientName`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-universe-bom`
  * newVersion: `2.x`
* [Upgrade Maven dependency version](../../maven/upgradedependencyversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-bom`
  * newVersion: `2.x`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-maven-plugin`
  * newVersion: `2.x`
* [Rename package name](../../java/changepackage.md)
  * oldPackageName: `io.vertx.core.http.HttpMethod`
  * newPackageName: `io.quarkus.vertx.web.Route.HttpMethod`
  * recursive: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration
displayName: Quarkus 2.x migration from Quarkus 1.x
description: Migrates Quarkus 1.x to 2.x.
recipeList:
  - org.openrewrite.quarkus.Quarkus1to1_13Migration
  - org.openrewrite.quarkus.quarkus2.GrpcServiceAnnotationToGrpcClient
  - org.openrewrite.quarkus.quarkus2.RemoveAvroMavenPlugin
  - org.openrewrite.quarkus.quarkus2.UseIdentifierOnDefaultKafkaBroker
  - org.openrewrite.quarkus.quarkus2.UsePanacheEntityBaseStaticMethods
  - org.openrewrite.quarkus.quarkus2.UsePanacheEntityBaseUniT
  - org.openrewrite.quarkus.quarkus2.UseReactivePanacheMongoEntityBaseUniT
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: smallrye.jwt.sign.key-location
      newPropertyKey: smallrye.jwt.sign.key.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: smallrye.jwt.encrypt.key-location
      newPropertyKey: smallrye.jwt.encrypt.key.location
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.neo4j.pool.metrics-enabled
      newPropertyKey: quarkus.neo4j.pool.metrics.enabled
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: quarkus.quartz.force-start
      newValue: forced
  - org.openrewrite.properties.ChangePropertyKey:
      oldPropertyKey: quarkus.quartz.force-start
      newPropertyKey: quarkus.quartz.start-mode
  - org.openrewrite.properties.ChangePropertyValue:
      propertyKey: quarkus.quartz.store-type
      newValue: jdbc-cmt
      oldValue: db
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.qute.api.CheckedTemplate
      newFullyQualifiedTypeName: io.quarkus.qute.CheckedTemplate
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.qute.api.ResourcePath
      newFullyQualifiedTypeName: io.quarkus.qute.Location
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: io.quarkus.mongodb.runtime.MongoClientName
      newFullyQualifiedTypeName: io.quarkus.mongodb.MongoClientName
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: io.quarkus
      artifactId: quarkus-universe-bom
      newVersion: 2.x
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: io.quarkus
      artifactId: quarkus-bom
      newVersion: 2.x
  - org.openrewrite.maven.UpgradePluginVersion:
      groupId: io.quarkus
      artifactId: quarkus-maven-plugin
      newVersion: 2.x
  - org.openrewrite.java.ChangePackage:
      oldPackageName: io.vertx.core.http.HttpMethod
      newPackageName: io.quarkus.vertx.web.Route.HttpMethod
      recursive: false

```
{% endtab %}
{% endtabs %}
## Contributors
* [Aaron Gershman](aegershman@gmail.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Knut Wannheden](knut.wannheden@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Patrick](patway99@gmail.com)
* [Kun Li](122563761+kunli2@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
