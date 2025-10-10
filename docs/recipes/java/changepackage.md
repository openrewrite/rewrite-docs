---
sidebar_label: "Rename package name"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Rename package name

**org.openrewrite.java.ChangePackage**

_A recipe that will rename a package name in package statements, imports, and fully-qualified types._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangePackage.java), 
[Issue Tracker](https://github.com/openrewrite/rewrite/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldPackageName | The package name to replace. | `com.yourorg.foo` |
| `String` | newPackageName | New package name to replace the old package name with. | `com.yourorg.bar` |
| `Boolean` | recursive | *Optional*. Recursively change subpackage names |  |


## Used by

This recipe is used as part of the following composite recipes:

* [ArchUnit 0.x upgrade](/recipes/java/testing/archunit/archunit0to1migration.md)
* [Migrate Fest 2.x to AssertJ](/recipes/java/testing/assertj/festtoassertj.md)
* [Migrate Hibernate Types to Hypersistence Utils 6.0](/recipes/hibernate/migratetohypersistenceutilshibernate6/0.md)
* [Migrate Jackson from javax to jakarta namespace](/recipes/io/quarkus/updates/core/quarkus30/jacksonjavaxtojakarta.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0](/recipes/java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md)
* [Migrate `WordUtils` to Apache Commons Text](/recipes/apache/commons/lang/wordutilstocommonstext.md)
* [Migrate `cucumber-java8` to `cucumber-java`](/recipes/cucumber/jvm/cucumberjava8tojava.md)
* [Migrate `javax.annotations` to SpotBugs annotations](/recipes/jenkins/javaxannotationstospotbugs.md)
* [Migrate `org.apache.ws.security` and `org.apache.ws.security.components.crypto` packages to  `org.apache.wss4j.common.ext` and `org.apache.wss4j.common.crypto` packages](/recipes/java/migrate/jakarta/updateapachewssecuritypackages.md)
* [Migrate classes from Jackson Codehaus (legacy) to Jackson FasterXML](/recipes/java/jackson/codehausclassestofasterxml.md)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](/recipes/io/quarkus/updates/core/quarkus30/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](/recipes/java/migrate/jakarta/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` to `jakarta.annotation`](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxannotationmigrationtojakarta9annotation.md)
* [Migrate deprecated `javax.annotation` to `jakarta.annotation`](/recipes/java/migrate/jakarta/javaxannotationmigrationtojakartaannotation.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](/recipes/io/quarkus/updates/core/quarkus30/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](/recipes/java/migrate/jakarta/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](/recipes/io/quarkus/updates/core/quarkus30/javaxdecoratortojakartadecorator.md)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](/recipes/java/migrate/jakarta/javaxdecoratortojakartadecorator.md)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](/recipes/io/quarkus/updates/core/quarkus30/javaxejbtojakartaejb.md)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](/recipes/java/migrate/jakarta/javaxejbtojakartaejb.md)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](/recipes/io/quarkus/updates/core/quarkus30/javaxeltojakartael.md)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](/recipes/java/migrate/jakarta/javaxeltojakartael.md)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](/recipes/io/quarkus/updates/core/quarkus30/javaxenterprisetojakartaenterprise.md)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](/recipes/java/migrate/jakarta/javaxenterprisetojakartaenterprise.md)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](/recipes/io/quarkus/updates/core/quarkus30/javaxfacestojakartafaces.md)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](/recipes/java/migrate/jakarta/updatejakartafacesapi3.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](/recipes/io/quarkus/updates/core/quarkus30/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](/recipes/java/migrate/jakarta/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](/recipes/io/quarkus/updates/core/quarkus30/javaxinterceptortojakartainterceptor.md)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](/recipes/java/migrate/jakarta/javaxinterceptortojakartainterceptor.md)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](/recipes/io/quarkus/updates/core/quarkus30/javaxjmstojakartajms.md)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](/recipes/java/migrate/jakarta/javaxjmstojakartajms.md)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](/recipes/io/quarkus/updates/core/quarkus30/javaxjsontojakartajson.md)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](/recipes/java/migrate/jakarta/javaxjsontojakartajson.md)
* [Migrate deprecated `javax.jsp` packages to `jakarta.jsp`](/recipes/java/migrate/jakarta/javaxjsptojakartajsp.md)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](/recipes/io/quarkus/updates/core/quarkus30/javaxjwstojakartajws.md)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](/recipes/java/migrate/jakarta/javaxjwstojakartajws.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](/recipes/io/quarkus/updates/core/quarkus30/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](/recipes/java/migrate/jakarta/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](/recipes/io/quarkus/updates/core/quarkus30/javaxpersistencetojakartapersistence.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](/recipes/java/migrate/jakarta/javaxpersistencetojakartapersistence.md)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](/recipes/io/quarkus/updates/core/quarkus30/javaxresourcetojakartaresource.md)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](/recipes/java/migrate/jakarta/javaxresourcetojakartaresource.md)
* [Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`](/recipes/io/quarkus/updates/core/quarkus30/javaxauthenticationmigrationtojakartaauthentication.md)
* [Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`](/recipes/java/migrate/jakarta/javaxauthenticationmigrationtojakartaauthentication.md)
* [Migrate deprecated `javax.security.enterprise` packages to `jakarta.security.enterprise`](/recipes/io/quarkus/updates/core/quarkus30/javaxsecuritytojakartasecurity.md)
* [Migrate deprecated `javax.security.enterprise` packages to `jakarta.security.enterprise`](/recipes/java/migrate/jakarta/javaxsecuritytojakartasecurity.md)
* [Migrate deprecated `javax.security.jacc` packages to `jakarta.security.jacc`](/recipes/io/quarkus/updates/core/quarkus30/javaxauthorizationmigrationtojakartaauthorization.md)
* [Migrate deprecated `javax.security.jacc` packages to `jakarta.security.jacc`](/recipes/java/migrate/jakarta/javaxauthorizationmigrationtojakartaauthorization.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](/recipes/io/quarkus/updates/core/quarkus30/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](/recipes/java/migrate/jakarta/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](/recipes/io/quarkus/updates/core/quarkus30/javaxxmlsoaptojakartaxmlsoap.md)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](/recipes/java/migrate/jakarta/javaxxmlsoaptojakartaxmlsoap.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](/recipes/io/quarkus/updates/core/quarkus30/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](/recipes/java/migrate/jakarta/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](/recipes/io/quarkus/updates/core/quarkus30/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](/recipes/java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](/recipes/io/quarkus/updates/core/quarkus30/javaxwebsockettojakartawebsocket.md)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](/recipes/java/migrate/jakarta/javaxwebsockettojakartawebsocket.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](/recipes/io/quarkus/updates/core/quarkus30/javaxwstojakartaws.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](/recipes/java/migrate/jakarta/javaxwstojakartaws.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](/recipes/io/quarkus/updates/core/quarkus30/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](/recipes/java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](/recipes/io/quarkus/updates/core/quarkus30/javaxxmlwsmigrationtojakartaxmlws.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](/recipes/java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws.md)
* [Migrate deprecated `org.apache.commons.fileload` packages to `org.apache.commons.fileload.core`](/recipes/java/migrate/jakarta/fileuploadtofileupload2.md)
* [Migrate deprecated `org.glassfish.javax.el` packages to `jakarta.el`](/recipes/com/oracle/weblogic/rewrite/jakarta/orgglassfishjavaxeltojakartael.md)
* [Migrate dropWizard dependencies to Spring Boot 3.x](/recipes/java/spring/boot3/migratedropwizarddependencies.md)
* [Migrate from Java Faker to Datafaker](/recipes/java/testing/datafaker/javafakertodatafaker.md)
* [Migrate from Micronaut 2.x to 3.x](/recipes/java/micronaut/micronaut2to3migration.md)
* [Migrate from OptaPlanner to Timefold Solver](/recipes/ai/timefold/solver/migration/fromoptaplannertotimefoldsolver.md)
* [Migrate javax.mvc to 2.0 (Jakarta EE 9)](/recipes/com/oracle/weblogic/rewrite/jakarta/migratejavaxmvctojakartaee9.md)
* [Migrate thymeleaf dependencies to Spring Boot 3.x](/recipes/java/spring/boot3/migratethymeleafdependencies.md)
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](/recipes/apache/httpclient5/upgradeapachehttpclient_5_classmapping.md)
* [Migrate to HtmlUnit 3.x](/recipes/java/testing/htmlunit/upgradehtmlunit_3.md)
* [Migrate to Micrometer 1.13](/recipes/micrometer/upgrademicrometer_1_13.md)
* [Migrates from Netty 4.1.x to Netty 4.2.x](/recipes/netty/upgradenetty_4_1_to_4_2.md)
* [Migrates to Apache Commons Collections 4.x](/recipes/apache/commons/collections/upgradeapachecommonscollections_3_4.md)
* [Migrates to Apache Commons Lang 3.x](/recipes/apache/commons/lang/upgradeapachecommonslang_2_3.md)
* [Migrates to Apache Commons Math 3.x](/recipes/apache/commons/math/upgradeapachecommonsmath_2_3.md)
* [Mitigate Unaffected Non-EE Jakarta 9 Packages](/recipes/com/oracle/weblogic/rewrite/jakarta/mitigateunaffectednoneejakarta9packages.md)
* [Modernize a Jenkins plugin to the latest recommended versions](/recipes/jenkins/modernizeplugin.md)
* [Quarkus 2.x migration from Quarkus 1.x](/recipes/quarkus/quarkus2/quarkus1to2migration.md)
* [Rename the package name from `com.nimbusds.jose.shaded.json` to `net.minidev.json`](/recipes/java/spring/security5/renamenimbusdsjsonobjectpackagename.md)
* [Replace `com.sun.net.ssl` package](/recipes/java/migrate/sunnetsslpackageunavailable.md)
* [Update Apache Commons Email to Email2 for Jakarta](/recipes/java/migrate/jakarta/updateapachecommonsemaildependencies.md)
* [Update Apache Commons FileUpload2 package for EE10](/recipes/java/migrate/jakarta/updatefileupload2dependencies.md)
* [Update Jackson package names from 2.x to 3.x](/recipes/java/jackson/upgradejackson_2_3_packagechanges.md)
* [Update the Micronaut Data library](/recipes/java/micronaut/updatemicronautdata.md)
* [Update to Micronaut Email 2.x](/recipes/java/micronaut/updatemicronautemail.md)
* [Update to Micronaut Validation 4.x](/recipes/java/micronaut/updatemicronautvalidation.md)
* [Upgrade to Axonframework 4.x Jakarta](/recipes/org/axonframework/migration/upgradeaxonframework_4_jakarta.md)
* [Upgrade to Axonframework 4.x Javax](/recipes/org/axonframework/migration/upgradeaxonframework_4_javax.md)
* [Upgrade to Cucumber-JVM 5.x](/recipes/cucumber/jvm/upgradecucumber5x.md)
* [Use Arquillian JUnit 5 Extension](/recipes/java/testing/arquillian/arquillianjunit4toarquillianjunit5.md)
* [Use OkHttp 3 MockWebServer for JUnit 5](/recipes/java/testing/junit5/upgradeokhttpmockwebserver.md)
* [Use `com.sun.xml.bind.*` instead of `com.sun.xml.internal.bind.*`](/recipes/java/migrate/internalbindpackages.md)
* [Use `java.security.cert` instead of `javax.security.cert`](/recipes/io/quarkus/updates/core/quarkus37/deprecatedjavaxsecuritycert.md)
* [Use `java.security.cert` instead of `javax.security.cert`](/recipes/java/migrate/deprecatedjavaxsecuritycert.md)
* [Use `javax.net.ssl` instead of `com.sun.net.ssl`](/recipes/java/migrate/jredonotusesunnetsslapis.md)
* [io.quarkus.updates.core.quarkus37.HibernateSearchOutboxPolling](/recipes/io/quarkus/updates/core/quarkus37/hibernatesearchoutboxpolling.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePackageExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePackageExample
displayName: Rename package name example
recipeList:
  - org.openrewrite.java.ChangePackage:
      oldPackageName: com.yourorg.foo
      newPackageName: com.yourorg.bar
```

Now that `com.yourorg.ChangePackageExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangePackageExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}
```
2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
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
            <recipe>com.yourorg.ChangePackageExample</recipe>
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
mod run . --recipe ChangePackage --recipe-option "oldPackageName=com.yourorg.foo" --recipe-option "newPackageName=com.yourorg.bar"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ChangePackage" />

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
