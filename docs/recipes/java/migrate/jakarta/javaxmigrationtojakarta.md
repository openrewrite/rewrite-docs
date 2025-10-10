---
sidebar_label: "Migrate to Jakarta EE 9"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to Jakarta EE 9

**org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta**

_Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace._

### Tags

* [jaxb](/reference/recipes-by-tag#jaxb)
* [jaxws](/reference/recipes-by-tag#jaxws)
* [jakarta](/reference/recipes-by-tag#jakarta)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/jakarta-ee-9.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate to JavaEE8](../../../java/migrate/javaee8-recipe)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](../../../java/migrate/jakarta/javaxactivationmigrationtojakartaactivation)
* [Migrate deprecated `javax.annotation` to `jakarta.annotation`](../../../java/migrate/jakarta/javaxannotationmigrationtojakartaannotation)
* [Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`](../../../java/migrate/jakarta/javaxauthenticationmigrationtojakartaauthentication)
* [Migrate deprecated `javax.security.jacc` packages to `jakarta.security.jacc`](../../../java/migrate/jakarta/javaxauthorizationmigrationtojakartaauthorization)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](../../../java/migrate/jakarta/javaxbatchmigrationtojakartabatch)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](../../../java/migrate/jakarta/javaxdecoratortojakartadecorator)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](../../../java/migrate/jakarta/javaxejbtojakartaejb)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](../../../java/migrate/jakarta/javaxeltojakartael)
* [Migrate deprecated `org.apache.commons.fileload` packages to `org.apache.commons.fileload.core`](../../../java/migrate/jakarta/fileuploadtofileupload2)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](../../../java/migrate/jakarta/javaxenterprisetojakartaenterprise)
* [JSF 2.x to Jakarta Faces 3.x](../../../java/migrate/jakarta/faces2xmigrationtojakartafaces3x)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](../../../java/migrate/jakarta/javaxinjectmigrationtojakartainject)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](../../../java/migrate/jakarta/javaxinterceptortojakartainterceptor)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](../../../java/migrate/jakarta/javaxjmstojakartajms)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](../../../java/migrate/jakarta/javaxjsontojakartajson)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](../../../java/migrate/jakarta/javaxjwstojakartajws)
* [Migrate deprecated `javax.jsp` packages to `jakarta.jsp`](../../../java/migrate/jakarta/javaxjsptojakartajsp)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](../../../java/migrate/jakarta/javaxmailtojakartamail)
* [Migrate xmlns entries in `orm.xml` files](../../../java/migrate/jakarta/javaxormxmltojakartaormxml)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../../../java/migrate/jakarta/javaxpersistencetojakartapersistence)
* [Migrate xmlns entries in `persistence.xml` files](../../../java/migrate/jakarta/javaxpersistencexmltojakartapersistencexml)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](../../../java/migrate/jakarta/javaxresourcetojakartaresource)
* [Migrate deprecated `javax.security.enterprise` packages to `jakarta.security.enterprise`](../../../java/migrate/jakarta/javaxsecuritytojakartasecurity)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](../../../java/migrate/jakarta/javaxservlettojakartaservlet)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](../../../java/migrate/jakarta/javaxtransactionmigrationtojakartatransaction)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](../../../java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](../../../java/migrate/jakarta/javaxwebsockettojakartawebsocket)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](../../../java/migrate/jakarta/javaxwstojakartaws)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](../../../java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](../../../java/migrate/jakarta/javaxxmlsoaptojakartaxmlsoap)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](../../../java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws)
* [Migrate Jackson from javax to jakarta namespace](../../../java/migrate/jakarta/jacksonjavaxtojakarta)
* [Update Jetty9 to Jetty12](../../../java/migrate/jakarta/jettyupgradeee9)
* [Migrate Ehcache from javax to jakarta namespace](../../../java/migrate/jakarta/ehcachejavaxtojakarta)
* [Migrate Johnzon from javax to jakarta namespace](../../../java/migrate/jakarta/johnzonjavaxtojakarta)
* [Migrate RestAssured from javax to jakarta namespace by upgrading to a version compatible with J2EE9](../../../java/migrate/jakarta/restassuredjavaxtojakarta)
* [Remove trailing slash from `jakarta.ws.rs.ApplicationPath` values](../../../java/migrate/jakarta/applicationpathwildcardnolongeraccepted)
* [Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages](../../../java/migrate/jakarta/updateapachewssecuritypackages)
* [Migrate deprecated `javaee-api` dependencies to `jakarta.platform`](../../../java/migrate/jakarta/javaxeeapitojakarta)
* [Remove `jakarta.annotation-api` dependency when managed by Spring Boot](../../../java/migrate/jakarta/removejakartaannotationdependencywhenmanagedbyspringboot)
* [Update RestLet to 2.6.0](../../../java/migrate/jakarta/updaterestlet2_6)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta
displayName: Migrate to Jakarta EE 9
description: |
  Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace.
tags:
  - jaxb
  - jaxws
  - jakarta
recipeList:
  - org.openrewrite.java.migrate.javaee8
  - org.openrewrite.java.migrate.jakarta.JavaxActivationMigrationToJakartaActivation
  - org.openrewrite.java.migrate.jakarta.JavaxAnnotationMigrationToJakartaAnnotation
  - org.openrewrite.java.migrate.jakarta.JavaxAuthenticationMigrationToJakartaAuthentication
  - org.openrewrite.java.migrate.jakarta.JavaxAuthorizationMigrationToJakartaAuthorization
  - org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch
  - org.openrewrite.java.migrate.jakarta.JavaxDecoratorToJakartaDecorator
  - org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb
  - org.openrewrite.java.migrate.jakarta.JavaxElToJakartaEl
  - org.openrewrite.java.migrate.jakarta.FileuploadToFileUpload2
  - org.openrewrite.java.migrate.jakarta.JavaxEnterpriseToJakartaEnterprise
  - org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakartaFaces3x
  - org.openrewrite.java.migrate.jakarta.JavaxInjectMigrationToJakartaInject
  - org.openrewrite.java.migrate.jakarta.JavaxInterceptorToJakartaInterceptor
  - org.openrewrite.java.migrate.jakarta.JavaxJmsToJakartaJms
  - org.openrewrite.java.migrate.jakarta.JavaxJsonToJakartaJson
  - org.openrewrite.java.migrate.jakarta.JavaxJwsToJakartaJws
  - org.openrewrite.java.migrate.jakarta.JavaxJspToJakartaJsp
  - org.openrewrite.java.migrate.jakarta.JavaxMailToJakartaMail
  - org.openrewrite.java.migrate.jakarta.JavaxOrmXmlToJakartaOrmXml
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence
  - org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml
  - org.openrewrite.java.migrate.jakarta.JavaxResourceToJakartaResource
  - org.openrewrite.java.migrate.jakarta.JavaxSecurityToJakartaSecurity
  - org.openrewrite.java.migrate.jakarta.JavaxServletToJakartaServlet
  - org.openrewrite.java.migrate.jakarta.JavaxTransactionMigrationToJakartaTransaction
  - org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation
  - org.openrewrite.java.migrate.jakarta.JavaxWebsocketToJakartaWebsocket
  - org.openrewrite.java.migrate.jakarta.JavaxWsToJakartaWs
  - org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind
  - org.openrewrite.java.migrate.jakarta.JavaxXmlSoapToJakartaXmlSoap
  - org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs
  - org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.JettyUpgradeEE9
  - org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.JohnzonJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.RestAssuredJavaxToJakarta
  - org.openrewrite.java.migrate.jakarta.ApplicationPathWildcardNoLongerAccepted
  - org.openrewrite.java.migrate.jakarta.UpdateApacheWSSecurityPackages
  - org.openrewrite.java.migrate.jakarta.JavaxEEApiToJakarta
  - org.openrewrite.java.migrate.jakarta.RemoveJakartaAnnotationDependencyWhenManagedBySpringBoot
  - org.openrewrite.java.migrate.jakarta.UpdateRestLet2_6

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrate from Micronaut 2.x to 3.x](/recipes/java/micronaut/micronaut2to3migration.md)
* [Migrate to Jakarta EE 10](/recipes/java/migrate/jakarta/jakartaee10.md)
* [Migrate to Jakarta EE 9.1](/recipes/com/oracle/weblogic/rewrite/jakartaee9_1.md)
* [Migrate to Wicket 10.x](/recipes/org/apache/wicket/migratetowicket10.md)
* [Upgrade to Axonframework 4.x Jakarta](/recipes/org/axonframework/migration/upgradeaxonframework_4_jakarta.md)

## Examples
##### Example 1
`JavaxToJakartaTest#changeImport`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.xml.bind.annotation.A;
public class B {
}
```

###### After
```java
import jakarta.xml.bind.annotation.A;
public class B {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import javax.xml.bind.annotation.A;
+import jakarta.xml.bind.annotation.A;
public class B {
```
</TabItem>
</Tabs>

---

##### Example 2
`JavaxToJakartaTest#changeImport`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.xml.bind.annotation.A;
public class B {
}
```

###### After
```java
import jakarta.xml.bind.annotation.A;
public class B {
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import javax.xml.bind.annotation.A;
+import jakarta.xml.bind.annotation.A;
public class B {
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
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
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta")
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
            <recipe>org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe JavaxMigrationToJakarta
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-migrate-java:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_MIGRATE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta" />

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
