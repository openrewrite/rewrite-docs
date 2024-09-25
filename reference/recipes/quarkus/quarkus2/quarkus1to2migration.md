# Quarkus 2.x migration from Quarkus 1.x

**org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration**

_Migrates Quarkus 1.x to 2.x._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/quarkus.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/2.8.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-quarkus
* version: 2.8.4

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

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
* [Change Maven parent](../../maven/changeparentpom.md)
  * oldGroupId: `io.quarkus`
  * oldArtifactId: `quarkus-universe-bom`
  * newVersion: `2.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-universe-bom`
  * newVersion: `2.x`
* [Change Maven parent](../../maven/changeparentpom.md)
  * oldGroupId: `io.quarkus`
  * oldArtifactId: `quarkus-bom`
  * newVersion: `2.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion.md)
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
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: io.quarkus
      oldArtifactId: quarkus-universe-bom
      newVersion: 2.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: io.quarkus
      artifactId: quarkus-universe-bom
      newVersion: 2.x
  - org.openrewrite.maven.ChangeParentPom:
      oldGroupId: io.quarkus
      oldArtifactId: quarkus-bom
      newVersion: 2.x
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
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

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-quarkus:2.8.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-quarkus:2.8.4")
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
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-quarkus:2.8.4")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration")
        exportDatatables = true
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
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
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
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-quarkus</artifactId>
            <version>2.8.4</version>
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

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-quarkus:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe Quarkus1to2Migration
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration)

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


## Contributors
[Aaron Gershman](mailto:aegershman@gmail.com), Patrick Way, [Sam Snyder](mailto:sam@moderne.io), Tyler Van Gorder, [Knut Wannheden](mailto:knut.wannheden@gmail.com), [Knut Wannheden](mailto:knut@moderne.io), [Patrick](mailto:patway99@gmail.com), Kun Li, [Tim te Beek](mailto:timtebeek@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
