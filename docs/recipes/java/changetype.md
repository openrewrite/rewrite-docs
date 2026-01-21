---
sidebar_label: "Change type"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change type

**org.openrewrite.java.ChangeType**

_Change a given type to another._

## Recipe source

[GitHub: ChangeType.java](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeType.java),
[Issue Tracker](https://github.com/openrewrite/rewrite/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/)

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).

## Options

| Type | Name | Description | Example |
| --- | --- | --- | --- |
| `String` | oldFullyQualifiedTypeName | Fully-qualified class name of the original type. | `org.junit.Assume` |
| `String` | newFullyQualifiedTypeName | Fully-qualified class name of the replacement type, or the name of a primitive such as "int". The `OuterClassName$NestedClassName` naming convention should be used for nested classes. | `org.junit.jupiter.api.Assumptions` |
| `Boolean` | ignoreDefinition | *Optional*. When set to `true` the definition of the old type will be left untouched. This is useful when you're replacing usage of a class but don't want to rename it. |  |


## Used by

This recipe is used as part of the following composite recipes:

* [Adopt jackson 3](/recipes/java/spring/boot4/adoptjackson3.md)
* [AssertJ best practices](/recipes/java/testing/assertj/assertj-best-practices.md)
* [Change SDK Exception types from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changeexceptiontypes.md)
* [Change SDK S3EventNotification types from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changes3eventnotificationtypes.md)
* [Change SDK TransferManager types from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changetransfermanagertypes.md)
* [Change Tapestry 4 types to Tapestry 5 equivalents](/recipes/tapestry/changetapestrytypes.md)
* [Change auth related classes from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changeauthtypes.md)
* [Change config related classes from v1 to v2](/recipes/software/amazon/awssdk/v2migration/changeconfigtypes.md)
* [Change region related classes](/recipes/software/amazon/awssdk/v2migration/changeregiontypes.md)
* [Changed types of camel AI nested headers classes](/recipes/org/apache/camel/upgrade/camel415/ainestedheadersclasses.md)
* [Clean up various issues with the code](/recipes/java/dropwizard/codecleanup.md)
* [Different java type for ServerCertificateValidator in camel-milo](/recipes/org/apache/camel/upgrade/camel416/camelmilocertificate.md)
* [Each camel-debezium module has its own subpackage corresponding to the database type](/recipes/org/apache/camel/upgrade/camel49/debeziumchangetypes.md)
* [JUnit Jupiter migration from JUnit 4.x](/recipes/java/testing/junit5/junit4to5migration.md)
* [Maps deprecated classes from Apache HttpClient 4.5.x to suggested replacements](/recipes/apache/httpclient4/mappingdeprecatedclasses.md)
* [MemoryStateRepository and FileStateRepository were moved to another package and library](/recipes/org/apache/camel/upgrade/camel43/staterepository.md)
* [Migrate Apache Commons Logging 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/commonslogging1toslf4j1.md)
* [Migrate Apache HttpCore Nio Input Buffer classes to Apache HttpCore 5.x](/recipes/apache/httpclient5/upgradeapachehttpcore_5_nioinputbuffers.md)
* [Migrate Apache HttpCore Nio Output Buffer classes to Apache HttpCore 5.x](/recipes/apache/httpclient5/upgradeapachehttpcore_5_niooutputbuffers.md)
* [Migrate Brave API to OpenTelemetry API](/recipes/java/spring/opentelemetry/migratebravetoopentelemetry.md)
* [Migrate Datadog tracing to OpenTelemetry](/recipes/java/spring/opentelemetry/migratedatadogtoopentelemetry.md)
* [Migrate Fest 2.x to AssertJ](/recipes/java/testing/assertj/festtoassertj.md)
* [Migrate Google Truth to AssertJ](/recipes/java/testing/truth/migratetruthtoassertj.md)
* [Migrate JBoss Logging to SLF4J](/recipes/java/logging/slf4j/jbossloggingtoslf4j.md)
* [Migrate JCL to Log4j 2.x API](/recipes/java/logging/log4j/commonsloggingtolog4j.md)
* [Migrate JRXlsExporter to JRXlsxExporter](/recipes/jasperreports/migratexlstoxlsxexporter.md)
* [Migrate JUL to Log4j 2.x API](/recipes/java/logging/log4j/jultolog4j.md)
* [Migrate Jackson from javax to jakarta namespace](/recipes/io/quarkus/updates/core/quarkus30/jacksonjavaxtojakarta.md)
* [Migrate Jackson from javax to jakarta namespace](/recipes/java/migrate/jakarta/jacksonjavaxtojakarta.md)
* [Migrate JavaEE Code to Quarkus 2](/recipes/quarkus/migrate/javaee/javaeetoquarkus2codemigration.md)
* [Migrate Log4j 1.x to Log4j 2.x](/recipes/java/logging/log4j/log4j1tolog4j2.md)
* [Migrate Log4j 1.x to SLF4J 1.x](/recipes/java/logging/slf4j/log4j1toslf4j1.md)
* [Migrate Log4j 2.x to SLF4J 1.x](/recipes/java/logging/slf4j/log4j2toslf4j1.md)
* [Migrate Lombok to a Java 11 compatible version](/recipes/java/migrate/lombok/updatelomboktojava11.md)
* [Migrate New Relic Agent to OpenTelemetry](/recipes/java/spring/opentelemetry/migratenewrelictoopentelemetry.md)
* [Migrate OpenSymphony classes to Struts 6.0](/recipes/java/struts/migrate6/migrateopensymphonyclasses.md)
* [Migrate OpenTracing API to OpenTelemetry API](/recipes/java/spring/opentelemetry/migrateopentracingtoopentelemetry.md)
* [Migrate Resource Classes](/recipes/java/dropwizard/migrateresourcestospringjersey.md)
* [Migrate RichFaces 3.x to 4.5](/recipes/java/jsf/richfaces/migraterichfaces_4_5.md)
* [Migrate SLF4J to Log4j 2.x API](/recipes/java/logging/log4j/slf4jtolog4j.md)
* [Migrate Spring Cloud Sleuth 3.1 to Micrometer Tracing 1.0](/recipes/java/spring/cloud2022/migratecloudsleuthtomicrometertracing.md)
* [Migrate Struts 2.0 interceptors to action &quot;aware&quot; interfaces](/recipes/java/struts/migrate6/migrateawareinterfaces.md)
* [Migrate TaskMetadata and ThreadMetadata](/recipes/kafka/streams/migratetaskandthreadmetadata.md)
* [Migrate `Admin.listConsumerGroups()` to `listGroups()`](/recipes/kafka/migrateadminlistconsumergroups.md)
* [Migrate `ApiInfoBuilder` to `Info`](/recipes/java/spring/doc/apiinfobuildertoinfo.md)
* [Migrate `ConsumerGroupState` to `GroupState`](/recipes/kafka/migrateconsumergroupstatetogroupstate.md)
* [Migrate `OAuth2AccessTokenResponseClient` from `RestOperations` to `RestClient` based implementations](/recipes/java/spring/security7/migrateoauth2accesstokenresponseclient.md)
* [Migrate `WordUtils` to Apache Commons Text](/recipes/apache/commons/lang/wordutilstocommonstext.md)
* [Migrate `clear` to ApacheHttpClient 5.x `CredentialsStore`](/recipes/apache/httpclient5/credentialsstoreclear.md)
* [Migrate `javax.annotations` to SpotBugs annotations](/recipes/jenkins/javaxannotationstospotbugs.md)
* [Migrate `setCredentials` to ApacheHttpClient 5.x `CredentialsStore`](/recipes/apache/httpclient5/credentialsstoresetcredentials.md)
* [Migrate classes from Jackson Codehaus (legacy) to Jackson FasterXML](/recipes/java/jackson/codehausclassestofasterxml.md)
* [Migrate deprecated `javax.annotation.security` packages to `jakarta.annotation.security`](/recipes/io/quarkus/updates/core/quarkus30/javaxannotationsecuritypackagetojakarta.md)
* [Migrate deprecated `javax.annotation.sql` packages to `jakarta.annotation.sql`](/recipes/io/quarkus/updates/core/quarkus30/javaxannotationsqlpackagetojakarta.md)
* [Migrate deprecated `javax.annotation` packages to `jakarta.annotation`](/recipes/io/quarkus/updates/core/quarkus30/javaxannotationpackagetojakarta.md)
* [Migrate deprecated `javax.annotation` to `jakarta.annotation`](/recipes/com/oracle/weblogic/rewrite/jakarta/javaxannotationmigrationtojakarta9annotation.md)
* [Migrate from EasyMock to Mockito](/recipes/java/testing/easymock/easymocktomockito.md)
* [Migrate from Elasticsearch 8 to 9](/recipes/elastic/elastic9/migratetoelasticsearch9.md)
* [Migrate from JMockit to Mockito](/recipes/java/testing/jmockit/jmockittomockito.md)
* [Migrate from Jakarta annotation API to JSpecify](/recipes/java/jspecify/migratefromjakartaannotationapi.md)
* [Migrate from Java Faker to Datafaker](/recipes/java/testing/datafaker/javafakertodatafaker.md)
* [Migrate from JetBrains annotations to JSpecify](/recipes/java/jspecify/migratefromjetbrainsannotations.md)
* [Migrate from Micrometer annotations to JSpecify](/recipes/java/jspecify/migratefrommicrometerannotations.md)
* [Migrate from Micronaut 2.x to 3.x](/recipes/java/micronaut/micronaut2to3migration.md)
* [Migrate from Micronaut Framework annotations to JSpecify](/recipes/java/jspecify/migratefrommicronautannotations.md)
* [Migrate from OpenRewrite annotations to JSpecify](/recipes/java/jspecify/migratefromopenrewriteannotations.md)
* [Migrate from OptaPlanner to Timefold Solver](/recipes/ai/timefold/solver/migration/fromoptaplannertotimefoldsolver.md)
* [Migrate from Spring Cloud Sleuth to OpenTelemetry](/recipes/java/spring/opentelemetry/migratesleuthtoopentelemetry.md)
* [Migrate from Spring Framework annotations to JSpecify](/recipes/java/jspecify/migratefromspringframeworkannotations.md)
* [Migrate from Swagger to OpenAPI](/recipes/openapi/swagger/swaggertoopenapi.md)
* [Migrate from `@ApiImplicitParams`  to `@Parameters`](/recipes/openapi/swagger/migrateapiimplicitparamstoparameters.md)
* [Migrate from `@ApiModelProperty` to `@Schema`](/recipes/openapi/swagger/migrateapimodelpropertytoschema.md)
* [Migrate from `@ApiOperation` to `@Operation`](/recipes/openapi/swagger/migrateapioperationtooperation.md)
* [Migrate from `@ApiParam` to `@Parameter`](/recipes/openapi/swagger/migrateapiparamtoparameter.md)
* [Migrate from `@ApiResponses` to `@ApiResponses`](/recipes/openapi/swagger/migrateapiresponsestoapiresponses.md)
* [Migrate from javax annotation API to JSpecify](/recipes/java/jspecify/migratefromjavaxannotationapi.md)
* [Migrate from springdoc-openapi-common to springdoc-openapi-starter-common](/recipes/java/springdoc/migratespringdoccommon.md)
* [Migrate moved types between Camel 3.x and Camel 4.x](/recipes/org/apache/camel/upgrade/camel40/changetypes.md)
* [Migrate packages to modular starters](/recipes/java/spring/boot4/migrateautoconfigurepackages.md)
* [Migrate to Apache HttpCore Nio Classes to Apache HttpCore 5.x](/recipes/apache/httpclient5/upgradeapachehttpcore_5_nioclassmapping.md)
* [Migrate to ApacheHttpClient 5.x Classes Namespace from 4.x](/recipes/apache/httpclient5/upgradeapachehttpclient_5_classmapping.md)
* [Migrate to Hibernate 6.6.x (Moderne Edition)](/recipes/hibernate/migratetohibernate66-moderne-edition.md)
* [Migrate to Hibernate 7 JFR APIs (Moderne Edition)](/recipes/hibernate/update70/migratetohibernate7jfr.md)
* [Migrate to Hibernate 7.0.x (Moderne Edition)](/recipes/hibernate/migratetohibernate70-moderne-edition.md)
* [Migrate to JasperReports 5.6.x](/recipes/jasperreports/upgradetojasperreports5.md)
* [Migrate to Kafka 2.5](/recipes/kafka/migratetokafka25.md)
* [Migrate to Micrometer 1.13](/recipes/micrometer/upgrademicrometer_1_13.md)
* [Migrate to Spring Batch 5.0 from 4.3](/recipes/java/spring/batch/springbatch4to5migration.md)
* [Migrate to Spring Batch 6.0 from 5.2](/recipes/java/spring/batch/springbatch5to6migration.md)
* [Migrate to Spring Boot 2.2](/recipes/java/spring/boot2/upgradespringboot_2_2.md)
* [Migrate to Spring Boot 2.7](/recipes/java/spring/boot2/upgradespringboot_2_7.md)
* [Migrate to Spring Boot 3.2](/recipes/java/spring/boot3/upgradespringboot_3_2.md)
* [Migrate to Spring Boot 4.0 (Moderne Edition)](/recipes/java/spring/boot4/upgradespringboot_4_0-moderne-edition.md)
* [Migrate to Spring Data 2.3](/recipes/java/spring/data/upgradespringdata_2_3.md)
* [Migrate to Spring Framework 5.1](/recipes/java/spring/framework/upgradespringframework_5_1.md)
* [Migrate to Spring Framework 6.2](/recipes/java/spring/framework/upgradespringframework_6_2.md)
* [Migrate to Spring Kafka 3.0](/recipes/java/spring/kafka/upgradespringkafka_3_0.md)
* [Migrate to Spring Kafka 4.0](/recipes/java/spring/kafka/upgradespringkafka_4_0.md)
* [Migrate to Spring ORM to 5](/recipes/java/spring/orm/springorm5.md)
* [Migrate to Wicket 10.x](/recipes/org/apache/wicket/migratetowicket10.md)
* [Migrate to testcontainers-java 2.x](/recipes/java/testing/testcontainers/testcontainers2migration.md)
* [Migrates Spring Kafka deprecated error handlers](/recipes/java/spring/kafka/upgradespringkafka_2_8_errorhandlers.md)
* [Migrates from Netty 4.1.x to Netty 4.2.x](/recipes/netty/upgradenetty_4_1_to_4_2.md)
* [Migrates to Apache Commons Collections 4.x](/recipes/apache/commons/collections/upgradeapachecommonscollections_3_4.md)
* [Migrates to Apache Commons Lang 3.x](/recipes/apache/commons/lang/upgradeapachecommonslang_2_3.md)
* [Mockito 3.x migration from 1.x](/recipes/java/testing/mockito/mockito1to3migration.md)
* [Prefer `java.nio.charset.StandardCharsets`](/recipes/java/migrate/guava/preferjavaniocharsetstandardcharsets.md)
* [Prefer `java.util.Optional`](/recipes/java/migrate/guava/preferjavautiloptional.md)
* [Prefer `java.util.function.Function`](/recipes/java/migrate/guava/preferjavautilfunction.md)
* [Prefer `java.util.function.Supplier`](/recipes/java/migrate/guava/preferjavautilsupplier.md)
* [Quarkus 2.x migration from Quarkus 1.x](/recipes/quarkus/quarkus2/quarkus1to2migration.md)
* [Rename `JavaTypeDescriptor` and `SqlTypeDescriptor` to `JavaType` and `SqlType` (Community Edition)](/recipes/hibernate/typedescriptortotype.md)
* [Renamed BasicAuthenticationHttpClientConfigurer to  DefaultAuthenticationHttpClientConfigurer](/recipes/org/apache/camel/upgrade/camel413/authenticationhttpclientconfigurer.md)
* [Renamed BasicAuthenticationHttpClientConfigurer to  DefaultAuthenticationHttpClientConfigurer](/recipes/org/apache/camel/upgrade/camel413/furyjava.md)
* [Renamed classes for API](/recipes/org/apache/camel/upgrade/camel47/renamedclasses.md)
* [Renamed classes for elasticsearch,opensearch and spring regis](/recipes/org/apache/camel/upgrade/camel45/renamedclasses.md)
* [Renamed classes for elasticsearch,opensearch and spring regis](/recipes/org/apache/camel/upgrade/camel46/renamedclasses.md)
* [Renamed constants in camel-azure-files](/recipes/org/apache/camel/upgrade/camel410/camelazurefiles.md)
* [Replace  deprecated Jakarta Servlet methods and classes](/recipes/java/migrate/jakarta/removalsservletjakarta10.md)
* [Replace Removed WebLogicJtaTransactionManager from Spring Framework 5.3.x to 6.2.x](/recipes/com/oracle/weblogic/rewrite/spring/framework/replaceweblogicjtatransactionmanager.md)
* [Replace Removed WebLogicLoadTimeWeaver from Spring Framework 5.3.x to 6.2.x](/recipes/com/oracle/weblogic/rewrite/spring/framework/replaceweblogicloadtimeweaver.md)
* [Replace `@MockBean` and `@SpyBean`](/recipes/java/spring/boot4/replacemockbeanandspybean.md)
* [Replace `@SpringBootApplication` with Quarkus equivalent](/recipes/quarkus/spring/replacespringbootapplication.md)
* [Replace `@Timed` (Dropwizard) with `@Timed` (Micrometer)](/recipes/java/dropwizard/annotation/micrometer/codahaletimedtomicrometertimed.md)
* [Replace `ResourceResolver` with `ResourceHandler`](/recipes/com/oracle/weblogic/rewrite/jakarta/removedjakartafaces3resourceresolver.md)
* [Replace `ResourceResolver` with `ResourceHandler`](/recipes/java/migrate/jakarta/removedjakartafacesresourceresolver.md)
* [Replace `doUpgrade(..)` with `ServerContainer.upgradeHttpToWebSocket(..)`](/recipes/java/migrate/jakarta/wswsocservercontainerdeprecation.md)
* [Replace `javax.security.auth.Policy` with `java.security.Policy`](/recipes/java/migrate/removedpolicy.md)
* [Replace any Lombok log annotations with target logging framework annotation](/recipes/java/logging/changelomboklogannotation.md)
* [Replace deprecated DefaultJsonSchemaLoader with DefaultJsonUriSchemaLoader](/recipes/org/apache/camel/upgrade/camel44/defaultjsonschemaloader.md)
* [Replace deprecated Jakarta Servlet methods and classes](/recipes/com/oracle/weblogic/rewrite/jakarta/removalsservletjakarta9.md)
* [Replace deprecated RequestMatcherProvider with new API](/recipes/java/spring/boot4/replacedeprecatedrequestmatcherprovider.md)
* [Replace elements of SpringFox's security with Swagger's security models](/recipes/java/spring/doc/securitycontexttosecurityscheme.md)
* [Spring Boot 4.0 Module Starter Relocations](/recipes/java/spring/boot4/modulestarterrelocations.md)
* [Substitute deprecated Faces Managed Beans](/recipes/com/oracle/weblogic/rewrite/jakarta/facesmanagedbeansremoved3.md)
* [Substitute removed Faces Managed Beans](/recipes/java/migrate/jakarta/facesmanagedbeansremoved.md)
* [Tag Enum has been deprecated](/recipes/org/apache/camel/upgrade/camel41/tracingtag.md)
* [Testcontainers 2 container classes](/recipes/java/testing/testcontainers/testcontainers2containerclasses.md)
* [The package scan classes has moved from camel-base-engine to camel-support - java](/recipes/org/apache/camel/upgrade/camel412/scanclassesmoved.md)
* [Update Apache Commons Email to Email2 for Jakarta](/recipes/java/migrate/jakarta/updateapachecommonsemaildependencies.md)
* [Update Apache Shiro Dependencies to 2.0.x](/recipes/java/migrate/jakarta/updateapacheshirodependencies.md)
* [Update Fastjson for Jakarta EE 10](/recipes/java/migrate/jakarta/migratefastjsonforjakarta10.md)
* [Update Jackson 2.x types to 3.x](/recipes/java/jackson/upgradejackson_2_3_typechanges.md)
* [Update JasperReports exporter configuration](/recipes/jasperreports/migrateexporterconfigtojasper6.md)
* [Update Jetty EE9 to Jetty EE10](/recipes/java/migrate/jakarta/jettyupgradeee10.md)
* [Update the Micronaut Data library](/recipes/java/micronaut/updatemicronautdata.md)
* [Update the Micronaut Security library](/recipes/java/micronaut/updatemicronautsecurity.md)
* [Upgrade to Axonframework 4.x Jakarta](/recipes/org/axonframework/migration/upgradeaxonframework_4_jakarta.md)
* [Upgrade to Axonframework 4.x Javax](/recipes/org/axonframework/migration/upgradeaxonframework_4_javax.md)
* [Upgrade to JUnit 5.14](/recipes/java/testing/junit5/upgradetojunit514.md)
* [Upgrade to Spring Boot 2.5](/recipes/java/spring/boot2/upgradespringboot_2_5.md)
* [Upgrade to SpringDoc 2.1](/recipes/java/springdoc/upgradespringdoc_2.md)
* [Upgrade to the latest Timefold Solver](/recipes/ai/timefold/solver/migration/tolatest.md)
* [Use JUnit Jupiter `@Disabled`](/recipes/java/testing/junit5/ignoretodisabled.md)
* [Use JUnit Jupiter `Executable`](/recipes/java/testing/junit5/throwingrunnabletoexecutable.md)
* [Use PlatformHttpHeaderFilterStrategy instead of HttpHeaderFilterStrategy](/recipes/org/apache/camel/upgrade/camel411/platformhttpfilterstrategy.md)
* [Use `Assertions#assume*(..)` and Hamcrest's `MatcherAssume#assume*(..)`](/recipes/java/testing/junit5/migrateassumptions.md)
* [Use `PingHealthIndicator`](/recipes/java/spring/boot2/migrateapplicationhealthindicatortopinghealthindicator.md)
* [Use `RestClientBuilderCustomizer`](/recipes/java/spring/boot2/migraterestclientbuildercustomizerpackagename.md)
* [Use `StateManagementStrategy`](/recipes/com/oracle/weblogic/rewrite/jakarta/removedstatemanagermethods3.md)
* [Use `StateManagementStrategy`](/recipes/java/migrate/jakarta/removedstatemanagermethods.md)
* [Use `WebServerFactoryCustomizer`](/recipes/java/spring/boot2/migratetowebserverfactorycustomizer.md)
* [Use `WebTestClientBuilderCustomizer`](/recipes/java/spring/boot2/migratewebtestclientbuildercustomizerpackagename.md)
* [Use `ZipException` instead of `ZipError`](/recipes/java/migrate/migrateziperrortozipexception.md)
* [Use `com.ibm.jsse2` instead of `com.sun.net.ssl.internal.ssl`](/recipes/java/migrate/jredonotusesunnetsslinternalsslprovider.md)
* [Use `com.ibm.net.ssl.www2.protocol.https.Handler` instead of `com.sun.net.ssl.internal.www.protocol.https.Handler`](/recipes/java/migrate/jredonotusesunnetsslinternalwwwprotocolhttpshandler.md)
* [Use `com.sun.security.auth.module.Krb5LoginModule` instead of `com.ibm.security.auth.module.Krb5LoginModule`](/recipes/java/migrate/krb5loginmoduleclass.md)
* [Use `getSSOCookieFromSSOToken` and `logout`](/recipes/java/liberty/websphereunavailablessomethods.md)
* [Use `jakarta.el` instead of `jakarta.faces.el` and `javax.faces.el`](/recipes/com/oracle/weblogic/rewrite/jakarta/removedjakartafaces3expressionlanguageclasses.md)
* [Use `jakarta.el` instead of `jakarta.faces.el` and `javax.faces.el`](/recipes/java/migrate/jakarta/removedjakartafacesexpressionlanguageclasses.md)
* [Use `jakarta.xml.soap.SOAPFactory` to create `SOAPElements`](/recipes/java/migrate/jakarta/removedsoapelementfactory.md)
* [Use `java.lang.management.PlatformLoggingMXBean`](/recipes/java/migrate/logging/migrateinterfaceloggingmxbeantoplatformloggingmxbean.md)
* [Use `javax.lang.model.util.AbstractAnnotationValueVisitor9`](/recipes/java/migrate/javax/migrateabstractannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.AbstractElementVisitor9`](/recipes/java/migrate/javax/migrateabstractelementvisitor6to9.md)
* [Use `javax.lang.model.util.AbstractTypeVisitor9`](/recipes/java/migrate/javax/migrateabstracttypevisitor6to9.md)
* [Use `javax.lang.model.util.ElementKindVisitor9`](/recipes/java/migrate/javax/migrateelementkindvisitor6to9.md)
* [Use `javax.lang.model.util.ElementScanner9`](/recipes/java/migrate/javax/migrateelementscanner6to9.md)
* [Use `javax.lang.model.util.SimpleAnnotationValueVisitor9`](/recipes/java/migrate/javax/migratesimpleannotationvaluevisitor6to9.md)
* [Use `javax.lang.model.util.SimpleElementVisitor9`](/recipes/java/migrate/javax/migratesimpleelementvisitor6to9.md)
* [Use `javax.lang.model.util.SimpleTypeVisitor9`](/recipes/java/migrate/javax/migratesimpletypevisitor6to9.md)
* [Use `javax.lang.model.util.TypeKindVisitor9`](/recipes/java/migrate/javax/migratetypekindvisitor6to9.md)
* [Use `javax.validation.constraints`](/recipes/java/spring/boot2/migratehibernateconstraintstojavax.md)
* [Use `org.springframework.boot.autoconfigure.http.HttpMessageConverters`](/recipes/java/spring/boot2/migratehttpmessageconverterspackagename.md)
* [Use `org.springframework.boot.web.servlet.error.ErrorController`](/recipes/java/spring/boot2/migrateerrorcontrollerpackagename.md)
* [Use `org.springframework.boot.web.servlet.support.SpringBootServletInitializer`](/recipes/java/spring/boot2/migratespringbootservletinitializerpackagename.md)
* [io.quarkus.updates.core.quarkus30.AdditionalChanges](/recipes/io/quarkus/updates/core/quarkus30/additionalchanges.md)
* [io.quarkus.updates.core.quarkus319.MoveAccessTokenAnnotationToNewPackage](/recipes/io/quarkus/updates/core/quarkus319/moveaccesstokenannotationtonewpackage.md)
* [io.quarkus.updates.core.quarkus32.InjectMock](/recipes/io/quarkus/updates/core/quarkus32/injectmock.md)
* [io.quarkus.updates.core.quarkus321.TlsRegistrySplitPackagesFix](/recipes/io/quarkus/updates/core/quarkus321/tlsregistrysplitpackagesfix.md)
* [io.quarkus.updates.core.quarkus331.OidcClientFilterSplitPackagesFix](/recipes/io/quarkus/updates/core/quarkus331/oidcclientfiltersplitpackagesfix.md)


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly (unless you are running them via the Moderne CLI). To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTypeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTypeExample
displayName: Change type example
recipeList:
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: org.junit.Assume
      newFullyQualifiedTypeName: org.junit.jupiter.api.Assumptions
```

Now that `com.yourorg.ChangeTypeExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:
```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("com.yourorg.ChangeTypeExample")
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
            <recipe>com.yourorg.ChangeTypeExample</recipe>
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
mod run . --recipe ChangeType --recipe-option "oldFullyQualifiedTypeName=org.junit.Assume" --recipe-option "newFullyQualifiedTypeName=org.junit.jupiter.api.Assumptions"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-java:{{VERSION_ORG_OPENREWRITE_REWRITE_JAVA}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.ChangeType" />

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
