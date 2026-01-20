---
sidebar_label: "Change Gradle or Maven dependency"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Gradle or Maven dependency

**org.openrewrite.java.dependencies.ChangeDependency**

_Change the group ID, artifact ID, and/or the version of a specified Gradle or Maven dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/ChangeDependency.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | oldGroupId | The old group ID to replace. The group ID is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifact ID to replace. The artifact ID is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `rewrite-testing-frameworks` |
| `String` | newGroupId | *Optional*. The new group ID to use. Defaults to the existing group ID. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifactId | *Optional*. The new artifact ID to use. Defaults to the existing artifact ID. | `rewrite-testing-frameworks` |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. If the new dependency has a managed version, this flag can be used to explicitly set the version on the dependency. The default for this flag is `false`. |  |
| `Boolean` | changeManagedDependency | *Optional*. Also update the dependency management section. The default for this flag is `true`. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Add explicit Common Annotations dependencies](/recipes/java/migrate/javax/addcommonannotationsdependencies.md)
* [Add explicit JAX-WS dependencies](/recipes/java/migrate/javax/addjaxwsdependencies.md)
* [Add explicit JAXB API dependencies](/recipes/java/migrate/javax/addjaxbapidependencies.md)
* [Change `com.datastax.oss` to `org.apache.cassandra`](/recipes/java/spring/boot3/changecassandragroupid.md)
* [Change v1 Maven/Gradle dependencies to v2](/recipes/software/amazon/awssdk/v2migration/upgradesdkdependencies.md)
* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/commonslogging1toslf4j1.md)
* [Migrate Bouncy Castle from `jdk15on` to `jdk15to18` for Java &lt; 8](/recipes/java/migrate/bouncycastlefromjdk15ontojdk15to18.md)
* [Migrate Bouncy Castle to `jdk18on`](/recipes/java/migrate/bouncecastlefromjdk15ontojdk18on.md)
* [Migrate Fest 2.x to AssertJ](/recipes/java/testing/assertj/festtoassertj.md)
* [Migrate Hibernate Types to Hypersistence Utils 6.0 (Community Edition)](/recipes/hibernate/migratetohypersistenceutilshibernate60.md)
* [Migrate Hibernate Types to Hypersistence Utils 6.2 (Community Edition)](/recipes/hibernate/migratetohypersistenceutilshibernate62.md)
* [Migrate Hibernate Types to Hypersistence Utils 6.3 (Community Edition)](/recipes/hibernate/migratetohypersistenceutilshibernate63.md)
* [Migrate Hibernate dependencies to 6.0.x (Community Edition)](/recipes/hibernate/migratetohibernatedependencies60.md)
* [Migrate Jackson from javax to jakarta namespace](/recipes/io/quarkus/updates/core/quarkus30/jacksonjavaxtojakarta.md)
* [Migrate Jackson from javax to jakarta namespace](/recipes/java/migrate/jakarta/jacksonjavaxtojakarta.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j to SLF4J](/recipes/java/logging/slf4j/log4jtoslf4j.md)
* [Migrate Okio dependencies to 3.x](/recipes/okio/upgradeokio3dependencies.md)
* [Migrate SAP cloud foundry logging support to Spring Boot 3.x](/recipes/java/spring/boot3/migratesapcfjavaloggingsupport.md)
* [Migrate SLF4J to Log4j 2.x API](/recipes/java/logging/log4j/slf4jtolog4j.md)
* [Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0](/recipes/java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md)
* [Migrate Tag Libraries to 2.0 (Jakarta EE 9)](/recipes/com/oracle/weblogic/rewrite/jakarta/migratetaglibstojakartaee9.md)
* [Migrate `cucumber-java8` to `cucumber-java`](/recipes/cucumber/jvm/cucumberjava8tojava.md)
* [Migrate com.intellij:annotations to org.jetbrains:annotations](/recipes/java/migrate/comintellijannotationstoorgjetbrainsannotations.md)
* [Migrate database drivers to Quarkus JDBC extensions](/recipes/quarkus/spring/migratedatabasedrivers.md)
* [Migrate dependencies from Jackson Codehaus (legacy) to FasterXML](/recipes/java/jackson/codehaus/codehausdependencytofasterxml.md)
* [Migrate deprecated `javaee-api` dependencies to `jakarta.platform`](/recipes/java/migrate/jakarta/javaxeeapitojakarta.md)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](/recipes/io/quarkus/updates/core/quarkus30/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](/recipes/java/migrate/jakarta/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](/recipes/io/quarkus/updates/core/quarkus30/javaxannotationmigrationtojakartaannotation.md)
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
* [Migrate from Spring Boot 1.x to 2.0](/recipes/java/spring/boot2/upgradespringboot_2_0-community-edition.md)
* [Migrate from Swagger to OpenAPI](/recipes/openapi/swagger/swaggertoopenapi.md)
* [Migrate javax.javaee-web-api to jakarta.jakartaee-web-api (Jakarta EE 9)](/recipes/com/oracle/weblogic/rewrite/jakarta/migratejavaxwebtojakartaweb9.md)
* [Migrate javax.mvc to 2.0 (Jakarta EE 9)](/recipes/com/oracle/weblogic/rewrite/jakarta/migratejavaxmvctojakartaee9.md)
* [Migrate rider-spring (JUnit4) to rider-junit5 (JUnit5)](/recipes/java/testing/dbrider/migratedbriderspringtodbriderjunit5.md)
* [Migrate thymeleaf dependencies to Spring Boot 3.x](/recipes/java/spring/boot3/migratethymeleafdependencies.md)
* [Migrate to Hibernate 7.0.x (Community Edition)](/recipes/hibernate/migratetohibernate70-community-edition.md)
* [Migrate to Hibernate Validator 8.0.x (Community Edition)](/recipes/hibernate/validator/hibernatevalidator_8_0.md)
* [Migrate to Hibernate for Jakarta EE 9](/recipes/com/oracle/weblogic/rewrite/hibernate/migratehibernatetojakartaee9.md)
* [Migrate to HtmlUnit 3.x](/recipes/java/testing/htmlunit/upgradehtmlunit_3.md)
* [Migrate to JavaEE8](/recipes/java/migrate/javaee8-recipe.md)
* [Migrate to MockWebServer3 (core module)](/recipes/okhttp/upgrademockwebserver3.md)
* [Migrate to MockWebServer3 with JUnit 4](/recipes/okhttp/upgrademockwebserver3junit4.md)
* [Migrate to MockWebServer3 with JUnit 5](/recipes/okhttp/upgrademockwebserver3junit5.md)
* [Migrate to New Spring Cloud Gateway Modules and Starters](/recipes/java/spring/cloud2025/springcloudgatewaydeprecatedmodulesandstarters.md)
* [Migrate to Spring Boot 3.4 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_4-community-edition.md)
* [Migrate to Spring Boot 4.0 (Community Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition.md)
* [Migrate to Spring Boot 4.0 modular starters](/recipes/java/spring/boot4/migratetomodularstarters-community-edition.md)
* [Migrates from Netty 4.1.x to Netty 4.2.x](/recipes/netty/upgradenetty_4_1_to_4_2.md)
* [Migrates to Apache Commons Collections 4.x](/recipes/apache/commons/collections/upgradeapachecommonscollections_3_4.md)
* [Migrates to Apache Commons Lang 3.x](/recipes/apache/commons/lang/upgradeapachecommonslang_2_3.md)
* [Migrates to Apache Commons Math 3.x](/recipes/apache/commons/math/upgradeapachecommonsmath_2_3.md)
* [Migrates to Apache POI 3.17](/recipes/apache/poi/upgradeapachepoi_3_17.md)
* [Mitigation of Java XML Bind Deprecation in Java 11 vs WebLogic 14.1.2](/recipes/com/oracle/weblogic/rewrite/weblogic1412javaxmlbindmitigation.md)
* [Mockito 3.x migration from 1.x](/recipes/java/testing/mockito/mockito1to3migration.md)
* [Mockito 4 to 5.x upgrade only](/recipes/java/testing/mockito/mockito4to5only.md)
* [Modernize a Jenkins plugin to the latest recommended versions](/recipes/jenkins/modernizeplugin.md)
* [Relocate `org.apache.commons:commons-io` to `commons-io:commons-io`](/recipes/apache/commons/io/relocateapachecommonsio.md)
* [Rename Testcontainers dependencies](/recipes/java/testing/testcontainers/testcontainers2dependencies.md)
* [Replace Derby driver with Quarkus JDBC Derby](/recipes/quarkus/spring/derbydrivertoquarkus.md)
* [Replace H2 driver with Quarkus JDBC H2](/recipes/quarkus/spring/h2drivertoquarkus.md)
* [Update Apache Commons Email to Email2 for Jakarta](/recipes/java/migrate/jakarta/updateapachecommonsemaildependencies.md)
* [Update Apache Commons FileUpload2 package for EE10](/recipes/java/migrate/jakarta/updatefileupload2dependencies.md)
* [Update Apache Shiro Dependencies to 2.0.x](/recipes/java/migrate/jakarta/updateapacheshirodependencies.md)
* [Update Fastjson for Jakarta EE 10](/recipes/java/migrate/jakarta/migratefastjsonforjakarta10.md)
* [Update Jetty EE9 to Jetty EE10](/recipes/java/migrate/jakarta/jettyupgradeee10.md)
* [Update Jetty9 to Jetty12](/recipes/java/migrate/jakarta/jettyupgradeee9.md)
* [Update Prometheus Pushgateway Dependency Coordinates](/recipes/java/spring/boot3/updateprometheuspushgateway.md)
* [Update RestLet to 2.6.0](/recipes/java/migrate/jakarta/updaterestlet2_6.md)
* [Update Tapestry dependencies](/recipes/tapestry/updatetapestrydependencies.md)
* [Upgrade Jackson 2.x dependencies to 3.x](/recipes/java/jackson/upgradejackson_2_3_dependencies.md)
* [Upgrade Struts 6.0 dependencies](/recipes/java/struts/migrate6/upgradestruts6dependencies.md)
* [Upgrade dependencies to Spring Cloud 2022](/recipes/java/spring/cloud2022/dependencyupgrades.md)
* [Upgrade to Cucumber-JVM 2.x](/recipes/cucumber/jvm/upgradecucumber2x.md)
* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)
* [Upgrade to SpringDoc 2.1](/recipes/java/springdoc/upgradespringdoc_2.md)
* [Use Arquillian JUnit 5 Extension](/recipes/java/testing/arquillian/arquillianjunit4toarquillianjunit5.md)
* [Use Byteman JUnit 5 dependency](/recipes/java/testing/byteman/bytemanjunit4tobytemanjunit5.md)
* [Use Jakarta Swagger Artifacts](/recipes/openapi/swagger/usejakartaswaggerartifacts.md)
* [Use OkHttp 3 MockWebServer for JUnit 5](/recipes/java/testing/junit5/upgradeokhttpmockwebserver.md)
* [Use XMLUnit Legacy for JUnit 5](/recipes/java/testing/junit5/usexmlunitlegacy.md)
* [io.quarkus.updates.core.quarkus30.JavaxToJakartaAdditionalMigration](/recipes/io/quarkus/updates/core/quarkus30/javaxtojakartaadditionalmigration.md)
* [io.quarkus.updates.core.quarkus33.GraalVMSubstitutionsArtifact](/recipes/io/quarkus/updates/core/quarkus33/graalvmsubstitutionsartifact.md)
* [io.quarkus.updates.core.quarkus36.JaegerSmallRyeOpenTracing](/recipes/io/quarkus/updates/core/quarkus36/jaegersmallryeopentracing.md)
* [io.quarkus.updates.core.quarkus37.HibernateSearchOutboxPolling](/recipes/io/quarkus/updates/core/quarkus37/hibernatesearchoutboxpolling.md)
* [io.quarkus.updates.core.quarkus37.ResteasyClientRenaming](/recipes/io/quarkus/updates/core/quarkus37/resteasyclientrenaming.md)
* [io.quarkus.updates.core.quarkus383.GraalSDK](/recipes/io/quarkus/updates/core/quarkus383/graalsdk.md)
* [io.quarkus.updates.core.quarkus39.GraalSDK](/recipes/io/quarkus/updates/core/quarkus39/graalsdk.md)
* [io.quarkus.updates.core.quarkus39.Relocations](/recipes/io/quarkus/updates/core/quarkus39/relocations.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|oldGroupId|`commons-lang`|
|oldArtifactId|`commons-lang`|
|newGroupId|`org.apache.commons`|
|newArtifactId|`commons-lang3`|
|newVersion|`3.11.x`|
|versionPattern|`null`|
|overrideManagedVersion|`null`|
|changeManagedDependency|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
    id "java-library"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "commons-lang:commons-lang:2.6"
}
```

###### After
```groovy title="build.gradle"
plugins {
    id "java-library"
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "org.apache.commons:commons-lang3:3.11"
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   implementation "commons-lang:commons-lang:2.6"
+   implementation "org.apache.commons:commons-lang3:3.11"
}
```
</TabItem>
</Tabs>


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyExample
displayName: Change Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.ChangeDependency:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 29.X
      versionPattern: '-jre'
```

Now that `com.yourorg.ChangeDependencyExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyExample")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}")
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
            <recipe>com.yourorg.ChangeDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}</version>
          </dependency>
        </dependencies>
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
mod run . --recipe ChangeDependency --recipe-option "oldGroupId=org.openrewrite.recipe" --recipe-option "oldArtifactId=rewrite-testing-frameworks" --recipe-option "newGroupId=corp.internal.openrewrite.recipe" --recipe-option "newArtifactId=rewrite-testing-frameworks" --recipe-option "newVersion=29.X" --recipe-option "versionPattern='-jre'"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.ChangeDependency" />

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
