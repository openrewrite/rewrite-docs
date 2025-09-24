---
sidebar_label: "Quarkus Updates Aggregate 3.0.0"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Quarkus Updates Aggregate 3.0.0

**org.openrewrite.quarkus.MigrateToQuarkus\_v3\_0\_0**

_Quarkus update recipes to upgrade your application to 3.0.0._

## Recipe source

[GitHub](https://github.com/search?type=code&q=org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Migrate `camel3` application to `camel4.`](../io/quarkus/updates/camel/camel40/camelquarkusmigrationrecipe)
* [Remove non existing camel-quarkus extensions](../java/camel/migrate/removedextensions)
* [io.quarkus.updates.core.quarkus30.UpgradeQuarkiverse](../io/quarkus/updates/core/quarkus30/upgradequarkiverse)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](../io/quarkus/updates/core/quarkus30/javaxactivationmigrationtojakartaactivation)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../io/quarkus/updates/core/quarkus30/javaxannotationmigrationtojakartaannotation)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../io/quarkus/updates/core/quarkus30/changejavaxannotationtojakarta)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](../io/quarkus/updates/core/quarkus30/javaxannotationpackagetojakarta)
* [Migrate deprecated `javax.annotation.security` packages to `jakarta.annotation.security`](../io/quarkus/updates/core/quarkus30/javaxannotationsecuritypackagetojakarta)
* [Migrate deprecated `javax.annotation.sql` packages to `jakarta.annotation.sql`](../io/quarkus/updates/core/quarkus30/javaxannotationsqlpackagetojakarta)
* [Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`](../io/quarkus/updates/core/quarkus30/javaxauthenticationmigrationtojakartaauthentication)
* [Migrate deprecated `javax.security.jacc` packages to `jakarta.security.jacc`](../io/quarkus/updates/core/quarkus30/javaxauthorizationmigrationtojakartaauthorization)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](../io/quarkus/updates/core/quarkus30/javaxbatchmigrationtojakartabatch)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](../io/quarkus/updates/core/quarkus30/javaxvalidationmigrationtojakartavalidation)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](../io/quarkus/updates/core/quarkus30/javaxdecoratortojakartadecorator)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](../io/quarkus/updates/core/quarkus30/javaxejbtojakartaejb)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](../io/quarkus/updates/core/quarkus30/javaxeltojakartael)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](../io/quarkus/updates/core/quarkus30/javaxenterprisetojakartaenterprise)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](../io/quarkus/updates/core/quarkus30/javaxfacestojakartafaces)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](../io/quarkus/updates/core/quarkus30/javaxinjectmigrationtojakartainject)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](../io/quarkus/updates/core/quarkus30/javaxinterceptortojakartainterceptor)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](../io/quarkus/updates/core/quarkus30/javaxjmstojakartajms)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](../io/quarkus/updates/core/quarkus30/javaxjsontojakartajson)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](../io/quarkus/updates/core/quarkus30/javaxjwstojakartajws)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](../io/quarkus/updates/core/quarkus30/javaxmailtojakartamail)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](../io/quarkus/updates/core/quarkus30/javaxpersistencetojakartapersistence)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](../io/quarkus/updates/core/quarkus30/javaxresourcetojakartaresource)
* [Migrate deprecated `javax.security.enterprise` packages to `jakarta.security.enterprise`](../io/quarkus/updates/core/quarkus30/javaxsecuritytojakartasecurity)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](../io/quarkus/updates/core/quarkus30/javaxservlettojakartaservlet)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](../io/quarkus/updates/core/quarkus30/javaxtransactionmigrationtojakartatransaction)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](../io/quarkus/updates/core/quarkus30/javaxwebsockettojakartawebsocket)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](../io/quarkus/updates/core/quarkus30/javaxwstojakartaws)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](../io/quarkus/updates/core/quarkus30/javaxxmlbindmigrationtojakartaxmlbind)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](../io/quarkus/updates/core/quarkus30/javaxxmlsoaptojakartaxmlsoap)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](../io/quarkus/updates/core/quarkus30/javaxxmlwsmigrationtojakartaxmlws)
* [Migrate xmlns entries in `persistence.xml` files](../io/quarkus/updates/core/quarkus30/javaxpersistencexmltojakartapersistencexml)
* [Migrate Jackson from javax to jakarta namespace](../io/quarkus/updates/core/quarkus30/jacksonjavaxtojakarta)
* [Migrate RestAssured from javax to jakarta namespace by upgrading to a version compatible with J2EE9](../io/quarkus/updates/core/quarkus30/restassuredjavaxtojakarta)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration](../io/quarkus/updates/core/quarkus30/javaxtojakartaadditionalmigration)
* [Rename a file example](../io/quarkus/updates/core/quarkus30/renamejavaxservicefiles)
* [io.quarkus.updates.core.quarkus30.JavaxConfigurationFiles](../io/quarkus/updates/core/quarkus30/javaxconfigurationfiles)
* [io.quarkus.updates.core.quarkus30.AdditionalChanges](../io/quarkus/updates/core/quarkus30/additionalchanges)
* [io.quarkus.updates.core.quarkus30.Kotlin](../io/quarkus/updates/core/quarkus30/kotlin)
* [io.quarkus.updates.core.quarkus30.ApplicationProperties](../io/quarkus/updates/core/quarkus30/applicationproperties)
* [io.quarkus.updates.core.quarkus30.ApplicationYml](../io/quarkus/updates/core/quarkus30/applicationyml)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaDocumentationAdoc](../io/quarkus/updates/core/quarkus30/javaxtojakartadocumentationadoc)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaDocumentationMd](../io/quarkus/updates/core/quarkus30/javaxtojakartadocumentationmd)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaCodestarts](../io/quarkus/updates/core/quarkus30/javaxtojakartacodestarts)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaCodestartsTests](../io/quarkus/updates/core/quarkus30/javaxtojakartacodestartstests)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlin](../io/quarkus/updates/core/quarkus30/javaxtojakartakotlin)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlinCodestarts](../io/quarkus/updates/core/quarkus30/javaxtojakartakotlincodestarts)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlinCodestartsTests](../io/quarkus/updates/core/quarkus30/javaxtojakartakotlincodestartstests)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0
displayName: Quarkus Updates Aggregate 3.0.0
description: |
  Quarkus update recipes to upgrade your application to 3.0.0.
recipeList:
  - io.quarkus.updates.camel.camel40.CamelQuarkusMigrationRecipe
  - org.openrewrite.java.camel.migrate.removedExtensions
  - io.quarkus.updates.core.quarkus30.UpgradeQuarkiverse
  - io.quarkus.updates.core.quarkus30.JavaxActivationMigrationToJakartaActivation
  - io.quarkus.updates.core.quarkus30.JavaxAnnotationMigrationToJakartaAnnotation
  - io.quarkus.updates.core.quarkus30.ChangeJavaxAnnotationToJakarta
  - io.quarkus.updates.core.quarkus30.JavaxAnnotationPackageToJakarta
  - io.quarkus.updates.core.quarkus30.JavaxAnnotationSecurityPackageToJakarta
  - io.quarkus.updates.core.quarkus30.JavaxAnnotationSqlPackageToJakarta
  - io.quarkus.updates.core.quarkus30.JavaxAuthenticationMigrationToJakartaAuthentication
  - io.quarkus.updates.core.quarkus30.JavaxAuthorizationMigrationToJakartaAuthorization
  - io.quarkus.updates.core.quarkus30.JavaxBatchMigrationToJakartaBatch
  - io.quarkus.updates.core.quarkus30.JavaxValidationMigrationToJakartaValidation
  - io.quarkus.updates.core.quarkus30.JavaxDecoratorToJakartaDecorator
  - io.quarkus.updates.core.quarkus30.JavaxEjbToJakartaEjb
  - io.quarkus.updates.core.quarkus30.JavaxElToJakartaEl
  - io.quarkus.updates.core.quarkus30.JavaxEnterpriseToJakartaEnterprise
  - io.quarkus.updates.core.quarkus30.JavaxFacesToJakartaFaces
  - io.quarkus.updates.core.quarkus30.JavaxInjectMigrationToJakartaInject
  - io.quarkus.updates.core.quarkus30.JavaxInterceptorToJakartaInterceptor
  - io.quarkus.updates.core.quarkus30.JavaxJmsToJakartaJms
  - io.quarkus.updates.core.quarkus30.JavaxJsonToJakartaJson
  - io.quarkus.updates.core.quarkus30.JavaxJwsToJakartaJws
  - io.quarkus.updates.core.quarkus30.JavaxMailToJakartaMail
  - io.quarkus.updates.core.quarkus30.JavaxPersistenceToJakartaPersistence
  - io.quarkus.updates.core.quarkus30.JavaxResourceToJakartaResource
  - io.quarkus.updates.core.quarkus30.JavaxSecurityToJakartaSecurity
  - io.quarkus.updates.core.quarkus30.JavaxServletToJakartaServlet
  - io.quarkus.updates.core.quarkus30.JavaxTransactionMigrationToJakartaTransaction
  - io.quarkus.updates.core.quarkus30.JavaxWebsocketToJakartaWebsocket
  - io.quarkus.updates.core.quarkus30.JavaxWsToJakartaWs
  - io.quarkus.updates.core.quarkus30.JavaxXmlBindMigrationToJakartaXmlBind
  - io.quarkus.updates.core.quarkus30.JavaxXmlSoapToJakartaXmlSoap
  - io.quarkus.updates.core.quarkus30.JavaxXmlWsMigrationToJakartaXmlWs
  - io.quarkus.updates.core.quarkus30.JavaxPersistenceXmlToJakartaPersistenceXml
  - io.quarkus.updates.core.quarkus30.JacksonJavaxToJakarta
  - io.quarkus.updates.core.quarkus30.RestAssuredJavaxToJakarta
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration
  - io.quarkus.updates.core.quarkus30.RenameJavaxServiceFiles
  - io.quarkus.updates.core.quarkus30.JavaxConfigurationFiles
  - io.quarkus.updates.core.quarkus30.AdditionalChanges
  - io.quarkus.updates.core.quarkus30.Kotlin
  - io.quarkus.updates.core.quarkus30.ApplicationProperties
  - io.quarkus.updates.core.quarkus30.ApplicationYml
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaDocumentationAdoc
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaDocumentationMd
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaCodestarts
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaCodestartsTests
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlin
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlinCodestarts
  - io.quarkus.updates.core.quarkus30.JavaxToJakartaKotlinCodestartsTests

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Quarkus Updates Aggregate 3.1.0](/recipes/quarkus/migratetoquarkus_v3_1_0.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
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
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0")
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
            <recipe>org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0 -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateToQuarkus_v3_0_0
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.quarkus.MigrateToQuarkus_v3_0_0" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
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
