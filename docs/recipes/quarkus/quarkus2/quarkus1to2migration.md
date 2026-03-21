---
sidebar_label: "Quarkus 2.x migration from Quarkus 1.x"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Quarkus 2.x migration from Quarkus 1.x

**org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration**

_Migrates Quarkus 1.x to 2.x._

## Recipe source

[GitHub: quarkus.yml](https://github.com/openrewrite/rewrite-quarkus/blob/main/src/main/resources/META-INF/rewrite/quarkus.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-quarkus/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-quarkus/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Quarkus 1.13 migration from Quarkus 1.11](../../quarkus/quarkus1to1_13migration)
* [Use `@GrpcClient`](../../quarkus/quarkus2/grpcserviceannotationtogrpcclient)
* [Remove `avro-maven-plugin`](../../quarkus/quarkus2/removeavromavenplugin)
* [Use `@Identifier(&quot;default-kafka-broker&quot;)`](../../quarkus/quarkus2/useidentifierondefaultkafkabroker)
* [Use `PanacheEntityBase` static methods](../../quarkus/quarkus2/usepanacheentitybasestaticmethods)
* [Use `Uni&lt;T extends PanacheEntityBase&gt;`](../../quarkus/quarkus2/usepanacheentitybaseunit)
* [Use `Uni&lt;T extends ReactivePanacheMongoEntityBase&gt;`](../../quarkus/quarkus2/usereactivepanachemongoentitybaseunit)
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `smallrye.jwt.sign.key-location`
  * newPropertyKey: `smallrye.jwt.sign.key.location`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `smallrye.jwt.encrypt.key-location`
  * newPropertyKey: `smallrye.jwt.encrypt.key.location`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.neo4j.pool.metrics-enabled`
  * newPropertyKey: `quarkus.neo4j.pool.metrics.enabled`
* [Change property value](../../properties/changepropertyvalue)
  * propertyKey: `quarkus.quartz.force-start`
  * newValue: `forced`
* [Change property key](../../properties/changepropertykey)
  * oldPropertyKey: `quarkus.quartz.force-start`
  * newPropertyKey: `quarkus.quartz.start-mode`
* [Change property value](../../properties/changepropertyvalue)
  * propertyKey: `quarkus.quartz.store-type`
  * newValue: `jdbc-cmt`
  * oldValue: `db`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.CheckedTemplate`
  * newFullyQualifiedTypeName: `io.quarkus.qute.CheckedTemplate`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.qute.api.ResourcePath`
  * newFullyQualifiedTypeName: `io.quarkus.qute.Location`
* [Change type](../../java/changetype)
  * oldFullyQualifiedTypeName: `io.quarkus.mongodb.runtime.MongoClientName`
  * newFullyQualifiedTypeName: `io.quarkus.mongodb.MongoClientName`
* [Change Maven parent](../../maven/changeparentpom)
  * oldGroupId: `io.quarkus`
  * oldArtifactId: `quarkus-universe-bom`
  * newVersion: `2.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-universe-bom`
  * newVersion: `2.x`
* [Change Maven parent](../../maven/changeparentpom)
  * oldGroupId: `io.quarkus`
  * oldArtifactId: `quarkus-bom`
  * newVersion: `2.x`
* [Upgrade Gradle or Maven dependency versions](../../java/dependencies/upgradedependencyversion)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-bom`
  * newVersion: `2.x`
* [Upgrade Maven plugin version](../../maven/upgradepluginversion)
  * groupId: `io.quarkus`
  * artifactId: `quarkus-maven-plugin`
  * newVersion: `2.x`
* [Rename package name](../../java/changepackage)
  * oldPackageName: `io.vertx.core.http.HttpMethod`
  * newPackageName: `io.quarkus.vertx.web.Route.HttpMethod`
  * recursive: `false`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration
displayName: Quarkus 2.x migration from Quarkus 1.x
description: |
  Migrates Quarkus 1.x to 2.x.
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
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Upgrade to Quarkus 3.26](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/devcenter/upgradequarkus3_x)

## Examples
##### Example 1
`Quarkus1to2MigrationPropertiesTest#smallryeJwt`


<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
smallrye.jwt.sign.key-location=/keys/signing
smallrye.jwt.encrypt.key-location=/keys/encrypt
```

###### After
```properties
smallrye.jwt.sign.key.location=/keys/signing
smallrye.jwt.encrypt.key.location=/keys/encrypt
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-smallrye.jwt.sign.key-location=/keys/signing
-smallrye.jwt.encrypt.key-location=/keys/encrypt
+smallrye.jwt.sign.key.location=/keys/signing
+smallrye.jwt.encrypt.key.location=/keys/encrypt

```
</TabItem>
</Tabs>

---

##### Example 2
`Quarkus1to2MigrationTest#quteResourcePathToLocation`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.quarkus.qute.api.ResourcePath;
import io.quarkus.qute.Template;

class ReportGenerator {
    @ResourcePath("reports/v1/report_01")
    Template report;

    void generate() {
        String result = report
                .data("samples", new Object())
                .render();
    }
}
```

###### After
```java
import io.quarkus.qute.Location;
import io.quarkus.qute.Template;

class ReportGenerator {
    @Location("reports/v1/report_01")
    Template report;

    void generate() {
        String result = report
                .data("samples", new Object())
                .render();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import io.quarkus.qute.api.ResourcePath;
+import io.quarkus.qute.Location;
import io.quarkus.qute.Template;
@@ -5,1 +5,1 @@

class ReportGenerator {
-   @ResourcePath("reports/v1/report_01")
+   @Location("reports/v1/report_01")
    Template report;
```
</TabItem>
</Tabs>

---

##### Example 3
`Quarkus1to2MigrationPropertiesTest#smallryeJwt`


<Tabs groupId="beforeAfter">
<TabItem value="properties" label="properties">


###### Before
```properties
smallrye.jwt.sign.key-location=/keys/signing
smallrye.jwt.encrypt.key-location=/keys/encrypt
```

###### After
```properties
smallrye.jwt.sign.key.location=/keys/signing
smallrye.jwt.encrypt.key.location=/keys/encrypt
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,2 +1,2 @@
-smallrye.jwt.sign.key-location=/keys/signing
-smallrye.jwt.encrypt.key-location=/keys/encrypt
+smallrye.jwt.sign.key.location=/keys/signing
+smallrye.jwt.encrypt.key.location=/keys/encrypt

```
</TabItem>
</Tabs>

---

##### Example 4
`Quarkus1to2MigrationTest#quteResourcePathToLocation`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import io.quarkus.qute.api.ResourcePath;
import io.quarkus.qute.Template;

class ReportGenerator {
    @ResourcePath("reports/v1/report_01")
    Template report;

    void generate() {
        String result = report
                .data("samples", new Object())
                .render();
    }
}
```

###### After
```java
import io.quarkus.qute.Location;
import io.quarkus.qute.Template;

class ReportGenerator {
    @Location("reports/v1/report_01")
    Template report;

    void generate() {
        String result = report
                .data("samples", new Object())
                .render();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import io.quarkus.qute.api.ResourcePath;
+import io.quarkus.qute.Location;
import io.quarkus.qute.Template;
@@ -5,1 +5,1 @@

class ReportGenerator {
-   @ResourcePath("reports/v1/report_01")
+   @Location("reports/v1/report_01")
    Template report;
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration"
  displayName="Quarkus 2.x migration from Quarkus 1.x"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-quarkus"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_QUARKUS"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.quarkus2.Quarkus1to2Migration" />

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

<TabItem value="org.openrewrite.maven.table.MavenMetadataFailures" label="MavenMetadataFailures">

### Maven metadata failures
**org.openrewrite.maven.table.MavenMetadataFailures**

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |
| Group id | The groupId of the artifact for which the metadata download failed. |
| Artifact id | The artifactId of the artifact for which the metadata download failed. |
| Version | The version of the artifact for which the metadata download failed. |
| Maven repository | The URL of the Maven repository that the metadata download failed on. |
| Snapshots | Does the repository support snapshots. |
| Releases | Does the repository support releases. |
| Failure | The reason the metadata download failed. |

</TabItem>

</Tabs>
