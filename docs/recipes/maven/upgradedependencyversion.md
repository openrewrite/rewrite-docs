---
sidebar_label: "Upgrade Maven dependency version"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade Maven dependency version

**org.openrewrite.maven.UpgradeDependencyVersion**

_Upgrade the version of a dependency by specifying a group and (optionally) an artifact using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/src/main/java/org/openrewrite/maven/UpgradeDependencyVersion.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.fasterxml.jackson*` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `jackson-module*` |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'newVersion' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. This flag can be set to explicitly override a managed dependency's version. If the dependency has its version managed by a Bill of Materials (BOM), enabling this flag will attempt to upgrade the BOM. The default for this flag is `false`. |  |
| `List` | retainVersions | *Optional*. Accepts a list of GAVs. For each GAV, if it is a project direct dependency, and it is removed from dependency management after the changes from this recipe, then it will be retained with an explicit version. The version can be omitted from the GAV to use the old value from dependency management | `com.jcraft:jsch` |


## Used by

This recipe is used as part of the following composite recipes:

* [Migrate RestAssured from javax to jakarta namespace by upgrading to a version compatible with J2EE9](/recipes/io/quarkus/updates/core/quarkus30/restassuredjavaxtojakarta.md)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](/recipes/io/quarkus/updates/core/quarkus30/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](/recipes/io/quarkus/updates/core/quarkus30/javaxannotationmigrationtojakartaannotation.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](/recipes/io/quarkus/updates/core/quarkus30/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](/recipes/io/quarkus/updates/core/quarkus30/javaxdecoratortojakartadecorator.md)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](/recipes/io/quarkus/updates/core/quarkus30/javaxejbtojakartaejb.md)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](/recipes/io/quarkus/updates/core/quarkus30/javaxeltojakartael.md)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](/recipes/io/quarkus/updates/core/quarkus30/javaxenterprisetojakartaenterprise.md)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](/recipes/io/quarkus/updates/core/quarkus30/javaxfacestojakartafaces.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](/recipes/io/quarkus/updates/core/quarkus30/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](/recipes/io/quarkus/updates/core/quarkus30/javaxinterceptortojakartainterceptor.md)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](/recipes/io/quarkus/updates/core/quarkus30/javaxjmstojakartajms.md)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](/recipes/io/quarkus/updates/core/quarkus30/javaxjsontojakartajson.md)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](/recipes/io/quarkus/updates/core/quarkus30/javaxjwstojakartajws.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](/recipes/io/quarkus/updates/core/quarkus30/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](/recipes/io/quarkus/updates/core/quarkus30/javaxpersistencetojakartapersistence.md)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](/recipes/io/quarkus/updates/core/quarkus30/javaxresourcetojakartaresource.md)
* [Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`](/recipes/io/quarkus/updates/core/quarkus30/javaxauthenticationmigrationtojakartaauthentication.md)
* [Migrate deprecated `javax.security.enterprise` packages to `jakarta.security.enterprise`](/recipes/io/quarkus/updates/core/quarkus30/javaxsecuritytojakartasecurity.md)
* [Migrate deprecated `javax.security.jacc` packages to `jakarta.security.jacc`](/recipes/io/quarkus/updates/core/quarkus30/javaxauthorizationmigrationtojakartaauthorization.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](/recipes/io/quarkus/updates/core/quarkus30/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](/recipes/io/quarkus/updates/core/quarkus30/javaxxmlsoaptojakartaxmlsoap.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](/recipes/io/quarkus/updates/core/quarkus30/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](/recipes/io/quarkus/updates/core/quarkus30/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](/recipes/io/quarkus/updates/core/quarkus30/javaxwebsockettojakartawebsocket.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](/recipes/io/quarkus/updates/core/quarkus30/javaxwstojakartaws.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](/recipes/io/quarkus/updates/core/quarkus30/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](/recipes/io/quarkus/updates/core/quarkus30/javaxxmlwsmigrationtojakartaxmlws.md)
* [Migrate from Micronaut 2.x to 3.x](/recipes/java/micronaut/micronaut2to3migration.md)
* [Migrate to 4.10.6](/recipes/org/apache/camel/upgrade/camel410ltsmigrationrecipe.md)
* [Migrate to 4.14.0](/recipes/org/apache/camel/upgrade/camelmigrationrecipe.md)
* [Migrate to Java 17](/recipes/java/migrate/upgradetojava17.md)
* [Migrate to Wicket 10.x](/recipes/org/apache/wicket/migratetowicket10.md)
* [Upgrade to Axonframework 4.x Jakarta](/recipes/org/axonframework/migration/upgradeaxonframework_4_jakarta.md)
* [Upgrade to Axonframework 4.x Javax](/recipes/org/axonframework/migration/upgradeaxonframework_4_javax.md)
* [Upgrade to Quarkus 3.26](/recipes/devcenter/upgradequarkus3_x.md)
* [io.quarkus.updates.core.quarkus30.UpgradeQuarkiverse](/recipes/io/quarkus/updates/core/quarkus30/upgradequarkiverse.md)

## Examples
##### Example 1

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.junit.jupiter`|
|artifactId|`junit-jupiter-api`|
|newVersion|`5.7.2`|
|versionPattern|`null`|
|overrideManagedVersion|`null`|
|retainVersions|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
                <version>5.6.2</version>
                <scope>test</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```

###### After
```xml title="pom.xml"
<project>
    <groupId>com.mycompany.app</groupId>
    <artifactId>my-app</artifactId>
    <version>1</version>
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
                <version>5.7.2</version>
                <scope>test</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -10,1 +10,1 @@
                <groupId>org.junit.jupiter</groupId>
                <artifactId>junit-jupiter-api</artifactId>
-               <version>5.6.2</version>
+               <version>5.7.2</version>
                <scope>test</scope>
```
</TabItem>
</Tabs>

---

##### Example 2

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.springframework.cloud`|
|artifactId|`spring-cloud-config-dependencies`|
|newVersion|`3.1.4`|
|versionPattern|`null`|
|overrideManagedVersion|`true`|
|retainVersions|`Collections.singletonList("com.jcraft:jsch")`|


<Tabs groupId="beforeAfter">
<TabItem value="pom.xml" label="pom.xml">


###### Before
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.sample</groupId>
  <artifactId>sample</artifactId>
  <version>1.0.0</version>
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-config-dependencies</artifactId>
        <version>3.1.2</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.jcraft</groupId>
      <artifactId>jsch</artifactId>
      <version>0.1.55</version>
    </dependency>
  </dependencies>
</project>
```

###### After
```xml title="pom.xml"
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>org.sample</groupId>
  <artifactId>sample</artifactId>
  <version>1.0.0</version>
  <dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-config-dependencies</artifactId>
        <version>3.1.4</version>
        <type>pom</type>
        <scope>import</scope>
      </dependency>
    </dependencies>
  </dependencyManagement>
  <dependencies>
    <dependency>
      <groupId>com.jcraft</groupId>
      <artifactId>jsch</artifactId>
      <version>0.1.55</version>
    </dependency>
  </dependencies>
</project>
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- pom.xml
+++ pom.xml
@@ -12,1 +12,1 @@
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-config-dependencies</artifactId>
-       <version>3.1.2</version>
+       <version>3.1.4</version>
        <type>pom</type>
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeDependencyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeDependencyVersionExample
displayName: Upgrade Maven dependency version example
recipeList:
  - org.openrewrite.maven.UpgradeDependencyVersion:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      newVersion: 29.X
      versionPattern: '-jre'
      retainVersions: com.jcraft:jsch
```

Now that `com.yourorg.UpgradeDependencyVersionExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

<TabItem value="maven" label="Maven">

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
            <recipe>com.yourorg.UpgradeDependencyVersionExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe UpgradeDependencyVersion --recipe-option "groupId=com.fasterxml.jackson*" --recipe-option "artifactId=jackson-module*" --recipe-option "newVersion=29.X" --recipe-option "versionPattern='-jre'" --recipe-option "retainVersions=com.jcraft:jsch"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_ORG_OPENREWRITE_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.UpgradeDependencyVersion" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
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
