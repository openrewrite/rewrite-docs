---
description: What's changed in OpenRewrite version 8.61.1.
---

# 8.61.1 release (2025-08-27)

_Total recipe count: 4677_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.43.6`
* Staging CLI version: `v3.45.3`

## New Artifacts
* rewrite-joda

## New Recipes

* [io.moderne.devcenter.ApacheDevCenter](https://docs.openrewrite.org/recipes/devcenter/apachedevcenter): A DevCenter that tracks the latest Apache Maven parent POM versions and applies best practices. 
* [io.moderne.devcenter.ApacheMavenBestPractices](https://docs.openrewrite.org/recipes/devcenter/apachemavenbestpractices): A collection of recipes that apply best practices to Maven POMs. Some of these recipes affect build stability, so they are reported as security issues in the DevCenter card. 
* [io.moderne.devcenter.ApacheMavenDevCenter](https://docs.openrewrite.org/recipes/devcenter/apachemavendevcenter): A DevCenter that tracks the latest Apache Maven parent POM versions and applies best practices. This DevCenter includes recipes to upgrade the parent POMs of Apache Maven, as well as a collection of best practices for Maven POMs. 
* [io.moderne.devcenter.UpgradeApacheParent](https://docs.openrewrite.org/recipes/devcenter/upgradeapacheparent): Upgrades the Apache parent POM to the latest version. 
* [io.moderne.devcenter.UpgradeMavenParent](https://docs.openrewrite.org/recipes/devcenter/upgrademavenparent): Upgrades the Apache Maven parent POM to the latest version. 
* [io.moderne.devcenter.UpgradeMavenPluginsParent](https://docs.openrewrite.org/recipes/devcenter/upgrademavenpluginsparent): Upgrades the Apache Maven parent POM to the latest version. 
* [io.moderne.devcenter.UpgradeMavenSharedParent](https://docs.openrewrite.org/recipes/devcenter/upgrademavensharedparent): Upgrades the Apache Maven parent POM to the latest version. 
* [io.moderne.hibernate.update66.MigrateCascadeTypes](https://docs.openrewrite.org/recipes/hibernate/update66/migratecascadetypes): Moving away from deprecated Hibernate CascadeType constants. CascadeType.SAVE_UPDATE -> CascadeType.PERSIST and/or CascadeType.MERGE, CascadeType.DELETE -> CascadeType.REMOVE. 
* [io.moderne.hibernate.update70.MigrateLockOptionsToDirectParameters](https://docs.openrewrite.org/recipes/hibernate/update70/migratelockoptionstodirectparameters): Migrates deprecated `LockOptions` usage to direct parameters in method calls. As of JPA 3.2 and Hibernate 7, `LockMode`, `Timeout`, and `PessimisticLockScope` are passed directly to `find()`, `refresh()`, and `lock()` methods instead of being wrapped in a `LockOptions` object. 
* [io.moderne.hibernate.update70.MigrateNaturalIdLoadAccess](https://docs.openrewrite.org/recipes/hibernate/update70/migratenaturalidloadaccess): Migrates NaturalIdLoadAccess#using(Object...) to using(Map.of(...)) variants for Hibernate 7.0. 
* [io.moderne.hibernate.update70.MigrateNaturalIdMultiLoadAccess](https://docs.openrewrite.org/recipes/hibernate/update70/migratenaturalidmultiloadaccess): Migrates NaturalIdMultiLoadAccess#compoundValue(Object...) to Map.of(...) variants for Hibernate 7.0. 
* [io.moderne.hibernate.update70.MigrateSessionToDeferToJPA](https://docs.openrewrite.org/recipes/hibernate/update70/migratesessiontodefertojpa): Migrates code using deprecated Session load/get/refresh/save/update/delete methods to their Hibernate 7.0 replacements. 
* [io.moderne.hibernate.update70.RemoveUnnecessaryCastToSession](https://docs.openrewrite.org/recipes/hibernate/update70/removeunnecessarycasttosession): In Hibernate 7.0, `SessionFactory.createEntityManager()` explicitly returns Session, making casts to Session unnecessary. 
* [io.moderne.hibernate.update70.ReplaceHibernateWithJakartaAnnotations](https://docs.openrewrite.org/recipes/hibernate/update70/replacehibernatewithjakartaannotations): Tries to replaces annotations that have been removed in Hibernate 7.0 with its Jakarta equivalent, such as Table, @Where, @OrderBy, etc.
If a annotation is used with arguments that do not have a direct replacement, the annotation is not replaced at all. 
* [io.moderne.hibernate.update70.ReplaceSessionLockRequest](https://docs.openrewrite.org/recipes/hibernate/update70/replacesessionlockrequest): Migrates Session.buildLockRequest(LockOptions.X) calls to use session.lock(entity, new LockOptions(LockMode.X)) in Hibernate 7.0. 
* [io.moderne.java.spring.boot3.RemoveDeprecatedConditions](https://docs.openrewrite.org/recipes/java/spring/boot3/removedeprecatedconditions): Replace Spring Boot 3.5 deprecated condition classes with their corresponding conditional annotations. 
* [io.moderne.java.spring.boot3.ReplaceConditionalOutcomeInverse](https://docs.openrewrite.org/recipes/java/spring/boot3/replaceconditionaloutcomeinverse): Replace deprecated `ConditionOutcome.inverse(ConditionOutcome outcome)` calls with `new ConditionOutcome(!outcome.isMatch(), outcome.getConditionMessage())`. 
* [io.moderne.java.spring.boot3.ReplaceDeprecatedKafkaConnectionDetailsBootstrapServerGetters](https://docs.openrewrite.org/recipes/java/spring/boot3/replacedeprecatedkafkaconnectiondetailsbootstrapservergetters): Replace deprecated `KafkaConnectionDetails` bootstrap server methods with chained calls. For example, `getProducerBootstrapServers()` becomes `getProducer().getBootstrapServers()`. 
* [io.moderne.java.spring.boot3.ReplaceDeprecatedThreadPoolTaskSchedulerConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/replacedeprecatedthreadpooltaskschedulerconstructor): The 5-parameter constructor of `ThreadPoolTaskSchedulerBuilder` has been deprecated in Spring Boot 3.5. This recipe transforms it to use the builder pattern instead, omitting null values and defaults. 
* [io.moderne.java.spring.boot3.SpringBoot35Deprecations](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot35deprecations): Migrate deprecated classes and methods that have been marked for removal in Spring Boot 3.5. 
* [io.moderne.java.spring.boot3.UpdateOpenTelemetryResourceAttributes](https://docs.openrewrite.org/recipes/java/spring/boot3/updateopentelemetryresourceattributes): The `service.group` resource attribute has been deprecated for OpenTelemetry in Spring Boot 3.5. Consider using alternative attributes or remove the deprecated attribute. 
* [io.moderne.java.spring.boot4.SpringBootProperties_4_0](https://docs.openrewrite.org/recipes/java/spring/boot4/springbootproperties_4_0): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.apache.httpclient5.InputBufferReadAddOffsetAndLengthArguments](https://docs.openrewrite.org/recipes/apache/httpclient5/inputbufferreadaddoffsetandlengtharguments): In Apache Http Client 5.x migration, the shortened form of the `read(byte[])` has been removed. 
* [org.openrewrite.apache.httpclient5.MigrateSSLConnectionSocketFactory](https://docs.openrewrite.org/recipes/apache/httpclient5/migratesslconnectionsocketfactory): Migrates usage of the deprecated `org.apache.http.conn.ssl.SSLConnectionSocketFactory` to `org.apache.hc.client5.http.ssl.DefaultClientTlsStrategy` with proper connection manager setup. 
* [org.openrewrite.apache.httpclient5.OutputBufferWriteAddOffsetAndLengthArguments](https://docs.openrewrite.org/recipes/apache/httpclient5/outputbufferwriteaddoffsetandlengtharguments): In Apache Http Client 5.x migration, the shortened form of the `write(byte[])` has been removed. 
* [org.openrewrite.apache.httpclient5.RemoveByteBufferAllocators](https://docs.openrewrite.org/recipes/apache/httpclient5/removebytebufferallocators): In Apache Http Client 5.x migration, both implementations of `ByteBufferAllocator` have been removed. This recipe will remove usage of said classes in favour of direct static calls to `ByteBuffer`. 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioInputBuffers](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpcore_5_nioinputbuffers): Mapping of specifically `*InputBuffer` classes of Apache HttpCore 5.x from Apache HttpCore Nio 4.4.x 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioOutputBuffers](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpcore_5_niooutputbuffers): Mapping of specifically `*OutputBuffer` classes of Apache HttpCore 5.x from Apache HttpCore Nio 4.4.x 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioUtilMapping](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpcore_5_nioutilmapping): Mapping of all the compatible utility classes of Apache HttpCore 5.x from Apache HttpCore Nio 4.4.x 
* [org.openrewrite.java.InlineMethodCalls](https://docs.openrewrite.org/recipes/java/inlinemethodcalls): Apply inlinings as defined by Error Prone's [`@InlineMe` annotation](https://errorprone.info/docs/inlineme), or compatible annotations. Uses the template and method arguments to replace method calls. Supports both methods invocations and constructor calls, with optional new imports. 
* [org.openrewrite.java.joda.time.JodaTimeRecipe](https://docs.openrewrite.org/recipes/java/joda/time/jodatimerecipe): Prefer the Java standard library over third-party usage of Joda Time. 
* [org.openrewrite.java.joda.time.NoJodaTime](https://docs.openrewrite.org/recipes/java/joda/time/nojodatime): Before Java 8, Java lacked a robust date and time library, leading to the widespread use of Joda-Time to fill this gap. With the release of Java 8, the `java.time` package was introduced, incorporating most of Joda-Time's concepts. Features deemed too specialized or bulky for `java.time` were included in the ThreeTen-Extra library.  This recipe migrates Joda-Time types to `java.time` and `threeten-extra` types. 
* [org.openrewrite.java.migrate.UpgradeBuildToJava25](https://docs.openrewrite.org/recipes/java/migrate/upgradebuildtojava25): Updates build files to use Java 25 as the target/source. 
* [org.openrewrite.java.migrate.guava.NoGuavaInlineMeMethods](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavainlinememethods): Inline Guava method calls that are annotated with `@InlineMe` to their replacement method. 
* [org.openrewrite.java.migrate.jakarta.FileuploadToFileUpload2](https://docs.openrewrite.org/recipes/java/migrate/jakarta/fileuploadtofileupload2): Migrate deprecated `org.apache.commons.fileload` packages to `org.apache.commons.fileload.core` 
* [org.openrewrite.java.migrate.jakarta.JavaxJspToJakartaJsp](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxjsptojakartajsp): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JettyUpgradeEE9](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jettyupgradeee9): Update Jetty dependencies from version 9 to version 12. 
* [org.openrewrite.java.migrate.jakarta.UpdateFileupload2Dependencies](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatefileupload2dependencies): Update Apache Commons FileUpload2 package for EE10. 
* [org.openrewrite.java.migrate.jakarta.UpdateRestLet2_6](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updaterestlet2_6): Update RestLet to 2.6.0 
* [org.openrewrite.java.recipes.UpgradeTestsToJava21](https://docs.openrewrite.org/recipes/java/recipes/upgradeteststojava21): Use Java 21 features in tests. 
* [org.openrewrite.java.spring.boot2.DatabaseComponentAndBeanInitializationOrderingUnconditionally](https://docs.openrewrite.org/recipes/java/spring/boot2/databasecomponentandbeaninitializationorderingunconditionally): Beans of certain well-known types, such as `JdbcTemplate`, will be ordered so that they are initialized after the database has been initialized. If you have a bean that works with the `DataSource` directly, annotate its class or `@Bean` method with `@DependsOnDatabaseInitialization` to ensure that it too is initialized after the database has been initialized. See the [release notes](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-2.5-Release-Notes#initialization-ordering) for more. This recipe will not check if the `@DependsOnDatabaseInitialization` annotation is on the classpath. This recipe is best combined with a precondition, as seen in `DatabaseComponentAndBeanInitializationOrdering`. 
* [org.openrewrite.java.spring.boot3.SpringBootProperties_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_4): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.java.spring.boot3.SpringBootProperties_3_4_EnabledToAccess](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_4_enabledtoaccess): Migrate properties found in `application.properties` and `application.yml`, specifically converting 'enabled' to 'access' 
* [org.openrewrite.java.testing.assertj.JUnitTryFailToAssertThatThrownBy](https://docs.openrewrite.org/recipes/java/testing/assertj/junittryfailtoassertthatthrownby): Replace try-catch blocks where the try block ends with a `fail()` statement and the catch block optionally contains assertions, with AssertJ's `assertThatThrownBy()`. 
* [org.openrewrite.java.testing.cleanup.TestMethodsShouldBeVoid](https://docs.openrewrite.org/recipes/java/testing/cleanup/testmethodsshouldbevoid): Test methods annotated with `@Test`, `@ParameterizedTest`, `@RepeatedTest`, `@TestTemplate` should have `void` return type. Non-void return types can cause test discovery issues, and warnings as of JUnit 5.13+. This recipe changes the return type to `void` and removes `return` statements. 
* [org.openrewrite.java.testing.junit5.CsvSourceToValueSource](https://docs.openrewrite.org/recipes/java/testing/junit5/csvsourcetovaluesource): Replaces JUnit 5's `@CsvSource` annotation with `@ValueSource` when the parameterized test has only a single method argument. 
* [org.openrewrite.java.testing.junit6.JUnit5to6Migration](https://docs.openrewrite.org/recipes/java/testing/junit6/junit5to6migration): Migrates JUnit 5.x tests to JUnit 6.x. 
* [org.openrewrite.java.testing.junit6.MinimumJreConditions](https://docs.openrewrite.org/recipes/java/testing/junit6/minimumjreconditions): This recipe will:
 - Remove tests that are only active on JREs that are below the specified version.
 - Adjust ranges to use minimum the specified version. 
* [org.openrewrite.staticanalysis.PreferSystemGetPropertyOverGetenv](https://docs.openrewrite.org/recipes/staticanalysis/prefersystemgetpropertyovergetenv): Replaces `System.getenv("HOME")` with `System.getProperty("user.home")` for better portability. 
* [org.openrewrite.terraform.search.FindRequiredProvider](https://docs.openrewrite.org/recipes/terraform/search/findrequiredprovider): Find `required_providers` blocks in Terraform configuration files. Produces a data table of the provider names and their versions. 
* [org.openrewrite.text.RemoveHardcodedIPAddressesFromComments](https://docs.openrewrite.org/recipes/text/removehardcodedipaddressesfromcomments): Removes hard-coded IPv4 addresses from comments when they match private IP ranges or loopback addresses. This targets IP addresses that are commented out in various comment formats:

**Private IP ranges:**
 * `192.168.0.0` to `192.168.255.255`
 * `10.0.0.0` to `10.255.255.255`
 * `172.16.0.0` to `172.31.255.255`

**Loopback IP range:**
 * `127.0.0.0` to `127.255.255.255`

**Supported comment formats:**
 * C-style line comments (`//`)
 * C-style block comments (`/* */`)
 * Shell/Python style comments (`#`)
 * XML comments (`<!-- -->`)
 * YAML comments (`#`)
 * Properties file comments (`#` or `!`)

For line comments, the entire line is removed. For block comments, only the IP address is removed. 

## Removed Recipes

* **io.moderne.hibernate.update70.MigrateSessionSaveUpdateDelete**: Migrates code using deprecated Session save/update/delete methods to their Hibernate 7.0 replacements. Session#save -> Session#persist, Session#update -> Session#merge, Session#saveOrUpdate -> Session#persist or Session#merge, Session#delete -> Session#remove. 
* **io.moderne.java.spring.boot3.MigrateEndpointAccessValueSpring34**: Migrate manage endpoint access value from `false` to `none` and `true` to `read-only`. 
* **io.moderne.java.spring.boot3.SpringBootManagementEndpointProperties_3_4**: Migrate the settings for Management Endpoint Security from `true`|`false` to `read-only`|`none`. 
* **org.openrewrite.java.migrate.joda.JodaTimeRecipe**: Prefer the Java standard library over third-party usage of Joda Time. 
* **org.openrewrite.java.migrate.joda.NoJodaTime**: Before Java 8, Java lacked a robust date and time library, leading to the widespread use of Joda-Time to fill this gap. With the release of Java 8, the `java.time` package was introduced, incorporating most of Joda-Time's concepts. Features deemed too specialized or bulky for `java.time` were included in the ThreeTen-Extra library.  This recipe migrates Joda-Time types to `java.time` and `threeten-extra` types. 

## Changed Recipes

* [org.openrewrite.java.recipes.ExecutionContextParameterName](https://docs.openrewrite.org/recipes/java/recipes/executioncontextparametername) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `parameterName: { type: String, required: false }`
* [org.openrewrite.yaml.CoalesceProperties](https://docs.openrewrite.org/recipes/yaml/coalesceproperties) was changed:
  * Old Options:
    * `applyTo: { type: List, required: true }`
    * `exclusions: { type: List, required: true }`
  * New Options:
    * `applyTo: { type: List, required: false }`
    * `exclusions: { type: List, required: false }`