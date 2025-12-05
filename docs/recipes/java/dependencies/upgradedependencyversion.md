---
sidebar_label: "Upgrade Gradle or Maven dependency versions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Upgrade Gradle or Maven dependency versions

**org.openrewrite.java.dependencies.UpgradeDependencyVersion**

_For Gradle projects, upgrade the version of a dependency in a `build.gradle` file. Supports updating dependency declarations of various forms:  * `String` notation: `"group:artifact:version"`   * `Map` notation: `group: 'group', name: 'artifact', version: 'version'` It is possible to update version numbers which are defined earlier in the same file in variable declarations.  For Maven projects, upgrade the version of a dependency by specifying a group ID and (optionally) an artifact ID using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/UpgradeDependencyVersion.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.fasterxml.jackson*` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `jackson-module*` |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number.  | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. For Maven project only, This flag can be set to explicitly override a managed dependency's version. The default for this flag is `false`. |  |
| `List` | retainVersions | *Optional*. For Maven project only, accepts a list of GAVs. For each GAV, if it is a project direct dependency, and it is removed from dependency management after the changes from this recipe, then it will be retained with an explicit version. The version can be omitted from the GAV to use the old value from dependency management. | `com.jcraft:jsch` |


## Used by

This recipe is used as part of the following composite recipes:

* [Add explicit Inject dependencies](/recipes/java/migrate/javax/addinjectdependencies.md)
* [Add explicit JAX-WS dependencies](/recipes/java/migrate/javax/addjaxwsdependencies.md)
* [Add explicit JAXB API dependencies](/recipes/java/migrate/javax/addjaxbapidependencies.md)
* [ArchUnit 0.x upgrade](/recipes/java/testing/archunit/archunit0to1migration.md)
* [JUnit 6 migration from JUnit 5.x](/recipes/java/testing/junit6/junit5to6migration.md)
* [Jackson best practices](/recipes/java/jackson/jacksonbestpractices.md)
* [Migrate Ehcache from javax to jakarta namespace](/recipes/java/migrate/jakarta/ehcachejavaxtojakarta.md)
* [Migrate Hibernate dependencies to 6.0.x](/recipes/hibernate/migratetohibernatedependencies60.md)
* [Migrate Jakarta EE 9 api dependencies to Jakarta EE 10 versions](/recipes/java/migrate/jakarta/migrationtojakarta10apis.md)
* [Migrate Johnzon from javax to jakarta namespace](/recipes/java/migrate/jakarta/johnzonjavaxtojakarta.md)
* [Migrate Log4j to SLF4J](/recipes/java/logging/slf4j/log4jtoslf4j.md)
* [Migrate Lombok to a Java 11 compatible version](/recipes/java/migrate/lombok/updatelomboktojava11.md)
* [Migrate OkHttp dependencies to 4.x](/recipes/okhttp/upgradeokhttp4dependencies.md)
* [Migrate OkHttp dependencies to 5.x](/recipes/okhttp/upgradeokhttp5dependencies.md)
* [Migrate Okio dependencies to 3.x](/recipes/okio/upgradeokio3dependencies.md)
* [Migrate RestAssured from javax to jakarta namespace by upgrading to a version compatible with J2EE9](/recipes/java/migrate/jakarta/restassuredjavaxtojakarta.md)
* [Migrate Spring Retry to Spring Resilience](/recipes/java/spring/boot4/migratespringretry.md)
* [Migrate deprecated `javaee-api` dependencies to `jakarta.platform`](/recipes/java/migrate/jakarta/javaxeeapitojakarta.md)
* [Migrate deprecated `javax.activation` packages to `jakarta.activation`](/recipes/java/migrate/jakarta/javaxactivationmigrationtojakartaactivation.md)
* [Migrate deprecated `javax.annotation` to `jakarta.annotation`](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxannotationmigrationtojakarta9annotation.md)
* [Migrate deprecated `javax.annotation` to `jakarta.annotation`](/recipes/java/migrate/jakarta/javaxannotationmigrationtojakartaannotation.md)
* [Migrate deprecated `javax.batch` packages to `jakarta.batch`](/recipes/java/migrate/jakarta/javaxbatchmigrationtojakartabatch.md)
* [Migrate deprecated `javax.decorator` packages to `jakarta.decorator`](/recipes/java/migrate/jakarta/javaxdecoratortojakartadecorator.md)
* [Migrate deprecated `javax.ejb` packages to `jakarta.ejb`](/recipes/java/migrate/jakarta/javaxejbtojakartaejb.md)
* [Migrate deprecated `javax.el` packages to `jakarta.el`](/recipes/java/migrate/jakarta/javaxeltojakartael.md)
* [Migrate deprecated `javax.enterprise` packages to `jakarta.enterprise`](/recipes/java/migrate/jakarta/javaxenterprisetojakartaenterprise.md)
* [Migrate deprecated `javax.faces` packages to `jakarta.faces`](/recipes/java/migrate/jakarta/updatejakartafacesapi3.md)
* [Migrate deprecated `javax.inject` packages to `jakarta.inject`](/recipes/java/migrate/jakarta/javaxinjectmigrationtojakartainject.md)
* [Migrate deprecated `javax.interceptor` packages to `jakarta.interceptor`](/recipes/java/migrate/jakarta/javaxinterceptortojakartainterceptor.md)
* [Migrate deprecated `javax.jms` packages to `jakarta.jms`](/recipes/java/migrate/jakarta/javaxjmstojakartajms.md)
* [Migrate deprecated `javax.json` packages to `jakarta.json`](/recipes/java/migrate/jakarta/javaxjsontojakartajson.md)
* [Migrate deprecated `javax.jsp` packages to `jakarta.jsp`](/recipes/java/migrate/jakarta/javaxjsptojakartajsp.md)
* [Migrate deprecated `javax.jws` packages to `jakarta.jws`](/recipes/java/migrate/jakarta/javaxjwstojakartajws.md)
* [Migrate deprecated `javax.mail` packages to `jakarta.mail`](/recipes/java/migrate/jakarta/javaxmailtojakartamail.md)
* [Migrate deprecated `javax.persistence` packages to `jakarta.persistence`](/recipes/java/migrate/jakarta/javaxpersistencetojakartapersistence.md)
* [Migrate deprecated `javax.resource` packages to `jakarta.resource`](/recipes/java/migrate/jakarta/javaxresourcetojakartaresource.md)
* [Migrate deprecated `javax.security.auth.message` packages to `jakarta.security.auth.message`](/recipes/java/migrate/jakarta/javaxauthenticationmigrationtojakartaauthentication.md)
* [Migrate deprecated `javax.security.enterprise` packages to `jakarta.security.enterprise`](/recipes/java/migrate/jakarta/javaxsecuritytojakartasecurity.md)
* [Migrate deprecated `javax.security.jacc` packages to `jakarta.security.jacc`](/recipes/java/migrate/jakarta/javaxauthorizationmigrationtojakartaauthorization.md)
* [Migrate deprecated `javax.servlet` packages to `jakarta.servlet`](/recipes/java/migrate/jakarta/javaxservlettojakartaservlet.md)
* [Migrate deprecated `javax.soap` packages to `jakarta.soap`](/recipes/java/migrate/jakarta/javaxxmlsoaptojakartaxmlsoap.md)
* [Migrate deprecated `javax.transaction` packages to `jakarta.transaction`](/recipes/java/migrate/jakarta/javaxtransactionmigrationtojakartatransaction.md)
* [Migrate deprecated `javax.validation` packages to `jakarta.validation`](/recipes/java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation.md)
* [Migrate deprecated `javax.websocket` packages to `jakarta.websocket`](/recipes/java/migrate/jakarta/javaxwebsockettojakartawebsocket.md)
* [Migrate deprecated `javax.ws` packages to `jakarta.ws`](/recipes/java/migrate/jakarta/javaxwstojakartaws.md)
* [Migrate deprecated `javax.xml.bind` packages to `jakarta.xml.bind`](/recipes/java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind.md)
* [Migrate deprecated `javax.xml.ws` packages to `jakarta.xml.ws`](/recipes/java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws.md)
* [Migrate from Elasticsearch 8 to 9](/recipes/elastic/elastic9/migratetoelasticsearch9.md)
* [Migrate from Spring Boot 1.x to 2.0](/recipes/java/spring/boot2/upgradespringboot_2_0.md)
* [Migrate to Hibernate 6.1.x](/recipes/hibernate/migratetohibernate61.md)
* [Migrate to Hibernate 6.2.x](/recipes/hibernate/migratetohibernate62.md)
* [Migrate to Hibernate 6.3.x](/recipes/hibernate/migratetohibernate63.md)
* [Migrate to Hibernate 6.4.x](/recipes/hibernate/migratetohibernate64.md)
* [Migrate to Hibernate 6.5.x](/recipes/hibernate/migratetohibernate65.md)
* [Migrate to Hibernate 6.6.x](/recipes/hibernate/migratetohibernate66.md)
* [Migrate to Hibernate 7.0.x](/recipes/hibernate/migratetohibernate70.md)
* [Migrate to Hibernate 7.1.x](/recipes/hibernate/migratetohibernate71.md)
* [Migrate to Hibernate for Jakarta EE 9](/recipes/com/oracle/weblogic/rewrite/hibernate/migratehibernatetojakartaee9.md)
* [Migrate to JasperReports 5.6.x](/recipes/jasperreports/upgradetojasperreports5.md)
* [Migrate to JasperReports 6](/recipes/jasperreports/upgradetojasperreports6.md)
* [Migrate to Java 17](/recipes/java/migrate/upgradetojava17.md)
* [Migrate to Kafka 2.3](/recipes/kafka/migratetokafka23.md)
* [Migrate to Kafka 2.4](/recipes/kafka/migratetokafka24.md)
* [Migrate to Kafka 2.5](/recipes/kafka/migratetokafka25.md)
* [Migrate to Kafka 2.6](/recipes/kafka/migratetokafka26.md)
* [Migrate to Kafka 2.7](/recipes/kafka/migratetokafka27.md)
* [Migrate to Kafka 2.8](/recipes/kafka/migratetokafka28.md)
* [Migrate to Kafka 3.0](/recipes/kafka/migratetokafka30.md)
* [Migrate to Kafka 3.1](/recipes/kafka/migratetokafka31.md)
* [Migrate to Kafka 3.2](/recipes/kafka/migratetokafka32.md)
* [Migrate to Kafka 3.3](/recipes/kafka/migratetokafka33.md)
* [Migrate to Kafka 4.0](/recipes/kafka/migratetokafka40.md)
* [Migrate to Kafka 4.1](/recipes/kafka/migratetokafka41.md)
* [Migrate to LaunchDarkly 6.x](/recipes/featureflags/launchdarkly/upgradelaunchdarkly6.md)
* [Migrate to LaunchDarkly 7.x](/recipes/featureflags/launchdarkly/upgradelaunchdarkly7.md)
* [Migrate to Micrometer 1.13](/recipes/micrometer/upgrademicrometer_1_13.md)
* [Migrate to Reactor 3.5](/recipes/reactive/reactor/upgradereactor_3_5.md)
* [Migrate to Scala 2.12.+](/recipes/scala/migrate/upgradescala_2_12.md)
* [Migrate to Spring Batch 5.0 from 4.3](/recipes/java/spring/batch/springbatch4to5migration.md)
* [Migrate to Spring Batch 6.0 from 5.2](/recipes/java/spring/batch/springbatch5to6migration.md)
* [Migrate to Spring Boot 2.1](/recipes/java/spring/boot2/upgradespringboot_2_1.md)
* [Migrate to Spring Boot 2.2](/recipes/java/spring/boot2/upgradespringboot_2_2.md)
* [Migrate to Spring Boot 2.3](/recipes/java/spring/boot2/upgradespringboot_2_3.md)
* [Migrate to Spring Boot 2.4](/recipes/java/spring/boot2/upgradespringboot_2_4.md)
* [Migrate to Spring Boot 2.6](/recipes/java/spring/boot2/upgradespringboot_2_6.md)
* [Migrate to Spring Boot 2.7](/recipes/java/spring/boot2/upgradespringboot_2_7.md)
* [Migrate to Spring Boot 3.0](/recipes/java/spring/boot3/upgradespringboot_3_0.md)
* [Migrate to Spring Boot 3.1](/recipes/java/spring/boot3/upgradespringboot_3_1.md)
* [Migrate to Spring Boot 3.2](/recipes/java/spring/boot3/upgradespringboot_3_2.md)
* [Migrate to Spring Boot 3.3](/recipes/java/spring/boot3/upgradespringboot_3_3.md)
* [Migrate to Spring Boot 3.4 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_4-community-edition.md)
* [Migrate to Spring Boot 3.5 (Community Edition)](/recipes/java/spring/boot3/upgradespringboot_3_5-community-edition.md)
* [Migrate to Spring Boot 3.5 (Moderne Edition)](/recipes/java/spring/boot3/upgradespringboot_3_5-moderne-edition.md)
* [Migrate to Spring Boot 4.0 (Community Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition.md)
* [Migrate to Spring Framework 5.0](/recipes/java/spring/framework/upgradespringframework_5_0.md)
* [Migrate to Spring Framework 5.1](/recipes/java/spring/framework/upgradespringframework_5_1.md)
* [Migrate to Spring Framework 5.2](/recipes/java/spring/framework/upgradespringframework_5_2.md)
* [Migrate to Spring Framework 5.3](/recipes/java/spring/framework/upgradespringframework_5_3.md)
* [Migrate to Spring Framework 6.0](/recipes/java/spring/framework/upgradespringframework_6_0.md)
* [Migrate to Spring Framework 6.1](/recipes/java/spring/framework/upgradespringframework_6_1.md)
* [Migrate to Spring Framework 6.2 for WebLogic 15.1.1](/recipes/com/oracle/weblogic/rewrite/spring/framework/upgradetospringframework_6_2.md)
* [Migrate to Spring Framework 6.2](/recipes/java/spring/framework/upgradespringframework_6_2.md)
* [Migrate to Spring Framework 7.0](/recipes/java/spring/framework/upgradespringframework_7_0.md)
* [Migrate to Spring ORM to 5](/recipes/java/spring/orm/springorm5.md)
* [Migrate to Spring Security 5.7](/recipes/java/spring/security5/upgradespringsecurity_5_7.md)
* [Migrate to Spring Security 5.8](/recipes/java/spring/security5/upgradespringsecurity_5_8.md)
* [Migrate to Spring Security 6.0](/recipes/java/spring/security6/upgradespringsecurity_6_0.md)
* [Migrate to Spring Security 6.1](/recipes/java/spring/security6/upgradespringsecurity_6_1.md)
* [Migrate to Spring Security 6.2](/recipes/java/spring/security6/upgradespringsecurity_6_2.md)
* [Migrate to Spring Security 6.3](/recipes/java/spring/security6/upgradespringsecurity_6_3.md)
* [Migrate to Spring Security 6.4](/recipes/java/spring/security6/upgradespringsecurity_6_4.md)
* [Migrate to Spring Security 6.5](/recipes/java/spring/security6/upgradespringsecurity_6_5.md)
* [Migrate to Spring Security 7.0](/recipes/java/spring/security7/upgradespringsecurity_7_0.md)
* [Migrates from Netty 4.1.x to Netty 4.2.x](/recipes/netty/upgradenetty_4_1_to_4_2.md)
* [Migrates to Apache POI 3.17](/recipes/apache/poi/upgradeapachepoi_3_17.md)
* [Migrates to ApacheHttpClient 4.5.x](/recipes/apache/httpclient4/upgradeapachehttpclient_4_5.md)
* [Mockito 3.x migration from 1.x](/recipes/java/testing/mockito/mockito1to3migration.md)
* [Mockito 4 to 5.x upgrade only](/recipes/java/testing/mockito/mockito4to5only.md)
* [Mockito 4.x upgrade](/recipes/java/testing/mockito/mockito1to4migration.md)
* [OkHttp 3.x `MockWebServer` `@Rule` To 4.x `MockWebServer`](/recipes/java/testing/junit5/updatemockwebserver.md)
* [Prefer the Java 11 standard library instead of Guava](/recipes/java/migrate/guava/noguavajava11.md)
* [Quarkus 2.x migration from Quarkus 1.x](/recipes/quarkus/quarkus2/quarkus1to2migration.md)
* [Rename Testcontainers dependencies](/recipes/java/testing/testcontainers/testcontainers2dependencies.md)
* [Update Apache Shiro Dependencies to 2.0.x](/recipes/java/migrate/jakarta/updateapacheshirodependencies.md)
* [Update Eclipse Yasson Dependencies to 3.0.x](/recipes/java/migrate/jakarta/updateyassondependencies.md)
* [Update EclipseLink Dependencies to 4.x](/recipes/java/migrate/jakarta/updateeclipselinkdependencies.md)
* [Update GlassFish Jersey Dependencies to 3.1.x](/recipes/java/migrate/jakarta/updatejerseydependencies.md)
* [Update Jakarta EE Java Faces Dependencies to 4.0.x.](/recipes/java/migrate/jakarta/updatejakartafacesapi4.md)
* [Update Jakarta EE Java Faces Dependencies to 4.1.x](/recipes/java/migrate/jakarta/updatejakartafacesapi41.md)
* [Update Jakarta EE Platform Dependencies to 10.0.0](/recipes/java/migrate/jakarta/updatejakartaplatform10.md)
* [Update Jakarta EE Platform Dependencies to 11.0.x](/recipes/java/migrate/jakarta/updatejakartaplatform11.md)
* [Update Jakarta EE Platform Dependencies to 9.1.0](/recipes/com/oracle/weblogic/rewrite/jakarta/updatejakartaplatform9_1.md)
* [Update Jakarta EE XML Web Services Dependencies for EE 10.](/recipes/java/migrate/jakarta/updatejakartaxmlwsee10.md)
* [Update Jakarta Persistence to 3.1](/recipes/com/oracle/weblogic/rewrite/jakarta/updatejakartapersistenceto31.md)
* [Update Jakarta Persistence to 3.2](/recipes/com/oracle/weblogic/rewrite/jakarta/updatejakartapersistenceto32.md)
* [Update RestLet to 2.6.0](/recipes/java/migrate/jakarta/updaterestlet2_6.md)
* [Update the WebLogic version to 14.1.2](/recipes/com/oracle/weblogic/rewrite/updatebuildtoweblogic1412.md)
* [Update the WebLogic version to 15.1.1](/recipes/com/oracle/weblogic/rewrite/updatebuildtoweblogic1511.md)
* [Upgrade Common open source libraries](/recipes/com/oracle/weblogic/rewrite/jakarta/upgradecommonopensourcelibraries.md)
* [Upgrade Faces open source libraries](/recipes/com/oracle/weblogic/rewrite/jakarta/upgradefacesopensourcelibraries2.md)
* [Upgrade Faces open source libraries](/recipes/com/oracle/weblogic/rewrite/jakarta/upgradefacesopensourcelibraries3.md)
* [Upgrade Faces open source libraries](/recipes/java/migrate/jakarta/upgradefaces3opensourcelibraries.md)
* [Upgrade Faces open source libraries](/recipes/java/migrate/jakarta/upgradefaces41opensourcelibraries.md)
* [Upgrade Faces open source libraries](/recipes/java/migrate/jakarta/upgradefaces4opensourcelibraries.md)
* [Upgrade JaCoCo](/recipes/java/migrate/jacoco/upgradejacoco.md)
* [Upgrade Jackson 2.x dependencies to 3.x](/recipes/java/jackson/upgradejackson_2_3_dependencies.md)
* [Upgrade Log4j 2.x dependency version](/recipes/java/logging/log4j/upgradelog4j2dependencyversion.md)
* [Upgrade MyBatis to Spring Boot 2.0](/recipes/java/spring/boot3/upgrademybatistospringboot_2_0.md)
* [Upgrade MyBatis to Spring Boot 2.1](/recipes/java/spring/boot3/upgrademybatistospringboot_2_1.md)
* [Upgrade MyBatis to Spring Boot 2.2](/recipes/java/spring/boot3/upgrademybatistospringboot_2_2.md)
* [Upgrade MyBatis to Spring Boot 2.3](/recipes/java/spring/boot3/upgrademybatistospringboot_2_3.md)
* [Upgrade MyBatis to Spring Boot 2.4](/recipes/java/spring/boot3/upgrademybatistospringboot_2_4.md)
* [Upgrade MyBatis to Spring Boot 2.5](/recipes/java/spring/boot3/upgrademybatistospringboot_2_5.md)
* [Upgrade MyBatis to Spring Boot 2.6](/recipes/java/spring/boot3/upgrademybatistospringboot_2_6.md)
* [Upgrade MyBatis to Spring Boot 2.7](/recipes/java/spring/boot3/upgrademybatistospringboot_2_7.md)
* [Upgrade MyBatis to Spring Boot 3.0](/recipes/java/spring/boot3/upgrademybatistospringboot_3_0.md)
* [Upgrade MyBatis to Spring Boot 3.2](/recipes/java/spring/boot3/upgrademybatistospringboot_3_2.md)
* [Upgrade MyBatis to Spring Boot 3.4](/recipes/java/spring/boot3/upgrademybatistospringboot_3_4.md)
* [Upgrade Spring Cloud AWS to Spring Boot 3.4 compatible version](/recipes/java/spring/boot3/upgradespringcloudawstospringboot_3_4.md)
* [Upgrade Spring Data BOM to 2024.1.x](/recipes/com/oracle/weblogic/rewrite/spring/data/upgradespringdatabom.md)
* [Upgrade Spring Data JPA to 3.4.6](/recipes/com/oracle/weblogic/rewrite/spring/data/upgradespringdatajpa.md)
* [Upgrade Struts 6.0 dependencies](/recipes/java/struts/migrate6/upgradestruts6dependencies.md)
* [Upgrade dependencies to Spring Cloud 2022](/recipes/java/spring/cloud2022/dependencyupgrades.md)
* [Upgrade dependencies to Spring Cloud 2023](/recipes/java/spring/cloud2023/dependencyupgrades.md)
* [Upgrade dependencies to Spring Cloud 2024](/recipes/java/spring/cloud2024/dependencyupgrades.md)
* [Upgrade dependencies to Spring Cloud 2025](/recipes/java/spring/cloud2025/dependencyupgrades.md)
* [Upgrade plugins to Java 21 compatible versions](/recipes/java/migrate/upgradepluginsforjava21.md)
* [Upgrade to Cucumber-JVM 7.x](/recipes/cucumber/jvm/upgradecucumber7x.md)
* [Upgrade to JUnit 5.14](/recipes/java/testing/junit5/upgradetojunit514.md)
* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)
* [Upgrade to SpringDoc 2.1](/recipes/java/springdoc/upgradespringdoc_2.md)
* [Upgrade to SpringDoc 2.2](/recipes/java/springdoc/upgradespringdoc_2_2.md)
* [Upgrade to SpringDoc 2.5](/recipes/java/springdoc/upgradespringdoc_2_5.md)
* [Upgrade to SpringDoc 2.6](/recipes/java/springdoc/upgradespringdoc_2_6.md)
* [Upgrade to SpringDoc 2.8](/recipes/java/springdoc/upgradespringdoc_2_8.md)
* [Use wiremock extension](/recipes/java/testing/junit5/usewiremockextension.md)

## Example

###### Parameters
| Parameter | Value |
| --- | --- |
|groupId|`com.google.guava`|
|artifactId|`guava`|
|newVersion|`30.x`|
|versionPattern|`-jre`|
|overrideManagedVersion|`null`|
|retainVersions|`null`|


<Tabs groupId="beforeAfter">
<TabItem value="build.gradle" label="build.gradle">


###### Before
```groovy title="build.gradle"
plugins {
  id 'java-library'
}

repositories {
  mavenCentral()
}

dependencies {
  compileOnly 'com.google.guava:guava:29.0-jre'
  runtimeOnly ('com.google.guava:guava:29.0-jre')
}
```

###### After
```groovy title="build.gradle"
plugins {
  id 'java-library'
}

repositories {
  mavenCentral()
}

dependencies {
  compileOnly 'com.google.guava:guava:30.1.1-jre'
  runtimeOnly ('com.google.guava:guava:30.1.1-jre')
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
--- build.gradle
+++ build.gradle
@@ -10,2 +10,2 @@

dependencies {
- compileOnly 'com.google.guava:guava:29.0-jre'
- runtimeOnly ('com.google.guava:guava:29.0-jre')
+ compileOnly 'com.google.guava:guava:30.1.1-jre'
+ runtimeOnly ('com.google.guava:guava:30.1.1-jre')
}
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
displayName: Upgrade Gradle or Maven dependency versions example
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      newVersion: 29.X
      versionPattern: '-jre'
      retainVersions: com.jcraft:jsch
```

Now that `com.yourorg.UpgradeDependencyVersionExample` has been defined, activate it and take a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}` in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeDependencyVersionExample")
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
            <recipe>com.yourorg.UpgradeDependencyVersionExample</recipe>
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
mod run . --recipe UpgradeDependencyVersion --recipe-option "groupId=com.fasterxml.jackson*" --recipe-option "artifactId=jackson-module*" --recipe-option "newVersion=29.X" --recipe-option "versionPattern='-jre'" --recipe-option "retainVersions=com.jcraft:jsch"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-java-dependencies:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JAVA_DEPENDENCIES}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeDependencyVersion" />

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
