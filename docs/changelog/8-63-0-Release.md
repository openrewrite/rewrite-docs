---
description: What's changed in OpenRewrite version 8.63.0.
---

# 8.63.0 release (2025-10-11)

_Total recipe count: 4900_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.48.8`
* Staging CLI version: `v3.49.0`

## New Artifacts

* rewrite-spring-to-quarkus

## New Recipes

* [io.moderne.hibernate.update70.MigrateConfigurableToGeneratorCreationContext](https://docs.openrewrite.org/recipes/hibernate/update70/migrateconfigurabletogeneratorcreationcontext): In Hibernate 7.0, `Configurable.configure()` now takes a `GeneratorCreationContext` parameter instead of `ServiceRegistry`. This recipe migrates method signatures and call sites. 
* [io.moderne.hibernate.update70.MigrateIntegratorMethod](https://docs.openrewrite.org/recipes/hibernate/update70/migrateintegratormethod): Migrate Hibernate `Integrator#integrate` method from deprecated signature to Hibernate 7 compatible signature. Changes `integrate(Metadata, SessionFactoryImplementor, SessionFactoryServiceRegistry)` to `integrate(Metadata, BootstrapContext, SessionFactoryImplementor)`. 
* [io.moderne.hibernate.update70.MigrateMetamodelImplementor](https://docs.openrewrite.org/recipes/hibernate/update70/migratemetamodelimplementor): In Hibernate 7.0, `MetamodelImplementor` has been split into `MappingMetamodel` for ORM-specific operations and `JpaMetamodel` for JPA-standard operations. This recipe migrates the usage based on which methods are called. 
* [io.moderne.hibernate.update70.MigrateSetFlushModeToSetQueryFlushMode](https://docs.openrewrite.org/recipes/hibernate/update70/migratesetflushmodetosetqueryflushmode): In Hibernate 7.0, `CommonQueryContract.setFlushMode(FlushModeType)` has been replaced with `setQueryFlushMode(QueryFlushMode)`. This recipe migrates the method call and converts `FlushModeType` parameters to their `QueryFlushMode` equivalents. 
* [io.moderne.hibernate.update70.MigrateToHibernate7JFR](https://docs.openrewrite.org/recipes/hibernate/update70/migratetohibernate7jfr): Migrates deprecated JFR integration APIs to their Hibernate 7 replacements. `EventManager` becomes `EventMonitor` and `HibernateMonitoringEvent` becomes `DiagnosticEvent`. 
* [io.moderne.hibernate.update70.UnboxingTransactionTimeout](https://docs.openrewrite.org/recipes/hibernate/update70/unboxingtransactiontimeout): JPA 3.2 adds `#getTimeout` but uses `Integer` whereas Hibernate has historically used `int`. Note that this raises the possibility of a `NullPointerException` during migration if, e.g., performing direct comparisons on the timeout value against an in (auto unboxing). This recipe adds ternary operators where `Transaction#getTimeout()` is used and a negative value will be used if the `getTimeout()` resulted in a null value. 
* [org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StringJoinSeparatorIterableCharSequenceRecipe](https://docs.openrewrite.org/recipes/apache/commons/lang/apachecommonsstringutilsrecipes$stringjoinseparatoriterablecharsequencerecipe): Replace Apache Commons `StringUtils.join(Iterable<? extends CharSequence> iterable, String separator)` with JDK provided API. 
* [org.openrewrite.apache.commons.lang.WordUtilsToCommonsText](https://docs.openrewrite.org/recipes/apache/commons/lang/wordutilstocommonstext): Migrate `org.apache.commons.lang.WordUtils` to `org.apache.commons.text.WordUtils` and add the Commons Text dependency. 
* [org.openrewrite.codemods.ReactI18Next](https://docs.openrewrite.org/recipes/codemods/reacti18next): Automatically internationalizes React applications by extracting hardcoded strings and replacing them with [react-i18next](https://react.i18next.com) translation calls. Handles JSX text, attributes, and template literals with variables. Creates and updates a translation JSON file with extracted strings. 
* [org.openrewrite.github.MigrateTibdexGitHubAppTokenToActions](https://docs.openrewrite.org/recipes/github/migratetibdexgithubapptokentoactions): Migrates from tibdex/github-app-token@v2 to actions/create-github-app-token@v2 and updates parameter names from snake_case to kebab-case. 
* [org.openrewrite.github.SetupNodeUpgradeNodeVersion](https://docs.openrewrite.org/recipes/github/setupnodeupgradenodeversion): Update the Node.js version used by `actions/setup-node` if it is below the expected version number. 
* [org.openrewrite.java.jackson.RemoveBuiltInModuleRegistrations](https://docs.openrewrite.org/recipes/java/jackson/removebuiltinmoduleregistrations): In Jackson 3, `ParameterNamesModule`, `Jdk8Module`, and `JavaTimeModule` are built into `jackson-databind` and no longer need to be registered manually. This recipe removes `ObjectMapper.registerModule()` calls for these modules. 
* [org.openrewrite.java.jackson.RemoveRedundantFeatureFlags](https://docs.openrewrite.org/recipes/java/jackson/removeredundantfeatureflags): Remove `ObjectMapper` feature flag configurations that set values to their new Jackson 3 defaults. For example, `disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES)` and `configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)` are redundant since this is now disabled by default in Jackson 3. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_Dependencies](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_dependencies): Upgrade Jackson Maven dependencies from 2.x to 3.x versions and update group IDs. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_MethodRenames](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_methodrenames): Rename Jackson methods that were renamed in 3.x (e.g., `writeObject()` to `writePOJO()`, `getCurrentValue()` to `currentValue()`). 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_PackageChanges](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_packagechanges): Update Jackson package imports from `com.fasterxml.jackson` to `tools.jackson`. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveRedundantFeatureFlags](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_removeredundantfeatureflags): Remove `ObjectMapper` feature flag configurations that are now defaults in Jackson 3. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_TypeChanges](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_typechanges): Update Jackson type names including exception types and core class renames. 
* [org.openrewrite.java.jackson.UseModernDateTimeSerialization](https://docs.openrewrite.org/recipes/java/jackson/usemoderndatetimeserialization): Remove redundant `@JsonFormat` annotations on `java.time` types that specify ISO-8601 patterns, as Jackson 3 uses ISO-8601 as the default format (with `WRITE_DATES_AS_TIMESTAMPS` now disabled by default). 
* [org.openrewrite.java.search.FindDistinctMethods](https://docs.openrewrite.org/recipes/java/search/finddistinctmethods): A sample of every distinct method in use in a repository. The code sample in the method calls data table will be a representative use of the method, though there may be many other such uses of the method. 
* [org.openrewrite.java.spring.boot3.MigrateHooksToReactorContextProperty](https://docs.openrewrite.org/recipes/java/spring/boot3/migratehookstoreactorcontextproperty): Replace `Hooks.enableAutomaticContextPropagation()` with `spring.reactor.context-propagation=true`. 
* [org.openrewrite.java.spring.boot3.ReplaceStringLiteralsWithConstants](https://docs.openrewrite.org/recipes/java/spring/boot3/replacestringliteralswithconstants): Replace String literals with Spring constants where applicable. 
* [org.openrewrite.java.spring.security6.UpgradeSpringSecurity_6_4](https://docs.openrewrite.org/recipes/java/spring/security6/upgradespringsecurity_6_4): Migrate applications to the latest Spring Security 6.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [org.openrewrite.java.testing.byteman.BytemanJUnit4ToBytemanJUnit5](https://docs.openrewrite.org/recipes/java/testing/byteman/bytemanjunit4tobytemanjunit5): Migrates Byteman JUnit 4 to JUnit 5. 
* [org.openrewrite.java.testing.junit.JUnit6BestPractices](https://docs.openrewrite.org/recipes/java/testing/junit/junit6bestpractices): Applies best practices to tests. 
* [org.openrewrite.java.testing.junit.JupiterBestPractices](https://docs.openrewrite.org/recipes/java/testing/junit/jupiterbestpractices): Applies best practices to tests. 
* [org.openrewrite.java.testing.junit5.UpgradeToJUnit514](https://docs.openrewrite.org/recipes/java/testing/junit5/upgradetojunit514): Upgrades JUnit 5 to 5.14.x and migrates all deprecated APIs. 
* [org.openrewrite.java.testing.junit6.MigrateMethodOrdererAlphanumeric](https://docs.openrewrite.org/recipes/java/testing/junit6/migratemethodordereralphanumeric): JUnit 6 removed the `MethodOrderer.Alphanumeric` class. This recipe migrates usages to `MethodOrderer.MethodName` which provides similar functionality. 
* [org.openrewrite.java.testing.junit6.RemoveInterceptDynamicTest](https://docs.openrewrite.org/recipes/java/testing/junit6/removeinterceptdynamictest): JUnit 6 removed the `interceptDynamicTest(Invocation, ExtensionContext)` method from `InvocationInterceptor`. This recipe removes implementations of this deprecated method. 
* [org.openrewrite.java.testing.truth.MigrateTruthToAssertJ](https://docs.openrewrite.org/recipes/java/testing/truth/migratetruthtoassertj): Migrate Google Truth assertions to AssertJ assertions. 
* [org.openrewrite.java.testing.truth.TruthAssertToAssertThat](https://docs.openrewrite.org/recipes/java/testing/truth/truthasserttoassertthat): Converts Google Truth's `assert_()` method to AssertJ's standard assertion pattern. 
* [org.openrewrite.java.testing.truth.TruthAssertWithMessageToAssertJ](https://docs.openrewrite.org/recipes/java/testing/truth/truthassertwithmessagetoassertj): Converts Google Truth's `assertWithMessage().that()` pattern to AssertJ's `assertThat().as()` pattern. 
* [org.openrewrite.java.testing.truth.TruthCustomSubjectsToAssertJ](https://docs.openrewrite.org/recipes/java/testing/truth/truthcustomsubjectstoassertj): Marks Google Truth's `assertAbout()` usage for manual review as AssertJ handles custom assertions differently. 
* [org.openrewrite.java.testing.truth.TruthThrowableAssertions](https://docs.openrewrite.org/recipes/java/testing/truth/truththrowableassertions): Converts Google Truth's Throwable assertion chains like `hasMessageThat().contains()` to AssertJ equivalents. 
* [org.openrewrite.json.CreateJsonFile](https://docs.openrewrite.org/recipes/json/createjsonfile): Create a new JSON file. 
* [org.openrewrite.maven.ManagedToRuntimeDependencies](https://docs.openrewrite.org/recipes/maven/managedtoruntimedependencies): This recipe processes Maven POMs, converting all `<dependencyManagement>` entries into runtime scoped `<dependencies>` entries. Import scoped BOMs (like jackson-bom) are left unmodified in `<dependencyManagement>`. Some style guidelines prefer that `<dependencyManagement>` be used only for BOMs. This maintain that style while avoiding introducing new symbols onto the compile classpath unintentionally. 
* [org.openrewrite.quarkus.spring.AddQuarkusMavenPlugin](https://docs.openrewrite.org/recipes/quarkus/spring/addquarkusmavenplugin): Adds the Quarkus Maven plugin using the same version as the quarkus-bom in dependency management. 
* [org.openrewrite.quarkus.spring.AddSpringCompatibilityExtensions](https://docs.openrewrite.org/recipes/quarkus/spring/addspringcompatibilityextensions): Adds Quarkus Spring compatibility extensions when Spring annotations are detected in the codebase. 
* [org.openrewrite.quarkus.spring.DerbyDriverToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/derbydrivertoquarkus): Migrates `org.apache.derby:derby` or `derbyclient` to `io.quarkus:quarkus-jdbc-derby` (excludes test scope) 
* [org.openrewrite.quarkus.spring.DerbyTestDriverToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/derbytestdrivertoquarkus): Migrates `org.apache.derby:derby` with test scope to `io.quarkus:quarkus-jdbc-derby` with test scope 
* [org.openrewrite.quarkus.spring.EnableAnnotationsToQuarkusDependencies](https://docs.openrewrite.org/recipes/quarkus/spring/enableannotationstoquarkusdependencies): Removes Spring `@EnableXyz` annotations and adds the corresponding Quarkus extensions as dependencies. 
* [org.openrewrite.quarkus.spring.H2DriverToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/h2drivertoquarkus): Migrates `com.h2database:h2` to `io.quarkus:quarkus-jdbc-h2` (excludes test scope) 
* [org.openrewrite.quarkus.spring.H2TestDriverToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/h2testdrivertoquarkus): Migrates `com.h2database:h2` with test scope to `io.quarkus:quarkus-jdbc-h2` with test scope 
* [org.openrewrite.quarkus.spring.MigrateBootStarters](https://docs.openrewrite.org/recipes/quarkus/spring/migratebootstarters): Migrates Spring Boot starter dependencies to their Quarkus equivalents, removing version tags as Quarkus manages versions through its BOM. 
* [org.openrewrite.quarkus.spring.MigrateDatabaseDrivers](https://docs.openrewrite.org/recipes/quarkus/spring/migratedatabasedrivers): Replaces Spring Boot database driver dependencies with their Quarkus JDBC extension equivalents. 
* [org.openrewrite.quarkus.spring.MigrateMavenPlugin](https://docs.openrewrite.org/recipes/quarkus/spring/migratemavenplugin): Remove Spring Boot Maven plugin if present and add Quarkus Maven plugin using the same version as the quarkus-bom. 
* [org.openrewrite.quarkus.spring.RemoveSpringBootParent](https://docs.openrewrite.org/recipes/quarkus/spring/removespringbootparent): Removes the Spring Boot 3.x starter parent POM from Maven projects. 
* [org.openrewrite.quarkus.spring.ReplaceSpringBootApplication](https://docs.openrewrite.org/recipes/quarkus/spring/replacespringbootapplication): Replace `@SpringBootApplication` annotation with `@QuarkusMain`, `SpringApplication.run()` calls. 
* [org.openrewrite.quarkus.spring.ResponseEntityToJaxRsResponse](https://docs.openrewrite.org/recipes/quarkus/spring/responseentitytojaxrsresponse): Transforms Spring `ResponseEntity` patterns to JAX-RS `Response` API equivalents. 
* [org.openrewrite.quarkus.spring.SpringApplicationRunToQuarkusRun](https://docs.openrewrite.org/recipes/quarkus/spring/springapplicationruntoquarkusrun): Replace Spring Boot's `SpringApplication.run()` method calls with Quarkus's `Quarkus.run()`. 
* [org.openrewrite.quarkus.spring.SpringBeanToCdiProduces](https://docs.openrewrite.org/recipes/quarkus/spring/springbeantocdiproduces): Transform Spring `@Bean` methods to CDI `@Produces` methods with appropriate scope annotations. 
* [org.openrewrite.quarkus.spring.SpringBootActiveMQToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootactivemqtoquarkus): Migrates `spring-boot-starter-activemq` to `quarkus-artemis-jms`. 
* [org.openrewrite.quarkus.spring.SpringBootActuatorToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootactuatortoquarkus): Migrates `spring-boot-starter-actuator` to `quarkus-smallrye-health`. 
* [org.openrewrite.quarkus.spring.SpringBootAmqpToQuarkusClassic](https://docs.openrewrite.org/recipes/quarkus/spring/springbootamqptoquarkusclassic): Migrates `spring-boot-starter-amqp` to `quarkus-messaging-rabbitmq` when no reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.SpringBootAmqpToQuarkusReactive](https://docs.openrewrite.org/recipes/quarkus/spring/springbootamqptoquarkusreactive): Migrates `spring-boot-starter-amqp` to `quarkus-messaging-amqp` when reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.SpringBootArtemisToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootartemistoquarkus): Migrates `spring-boot-starter-artemis` to `quarkus-artemis-jms`. 
* [org.openrewrite.quarkus.spring.SpringBootBatchToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootbatchtoquarkus): Migrates `spring-boot-starter-batch` to `quarkus-scheduler`. 
* [org.openrewrite.quarkus.spring.SpringBootCacheToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootcachetoquarkus): Migrates `spring-boot-starter-cache` to `quarkus-cache`. 
* [org.openrewrite.quarkus.spring.SpringBootDataJpaToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootdatajpatoquarkus): Migrates `spring-boot-starter-data-jpa` to `quarkus-hibernate-orm-panache`. 
* [org.openrewrite.quarkus.spring.SpringBootDataMongoToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootdatamongotoquarkus): Migrates `spring-boot-starter-data-mongodb` to `quarkus-mongodb-panache`. 
* [org.openrewrite.quarkus.spring.SpringBootDataRedisToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootdataredistoquarkus): Migrates `spring-boot-starter-data-redis` to `quarkus-redis-client`. 
* [org.openrewrite.quarkus.spring.SpringBootDataRestToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootdataresttoquarkus): Migrates `spring-boot-starter-data-rest` to `quarkus-rest-jackson`. 
* [org.openrewrite.quarkus.spring.SpringBootElasticsearchToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootelasticsearchtoquarkus): Migrates `spring-boot-starter-data-elasticsearch` to `quarkus-elasticsearch-rest-client`. 
* [org.openrewrite.quarkus.spring.SpringBootIntegrationToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootintegrationtoquarkus): Migrates `spring-boot-starter-integration` to `camel-quarkus-core`. 
* [org.openrewrite.quarkus.spring.SpringBootJdbcToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootjdbctoquarkus): Migrates `spring-boot-starter-jdbc` to `quarkus-agroal`. 
* [org.openrewrite.quarkus.spring.SpringBootMailToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootmailtoquarkus): Migrates `spring-boot-starter-mail` to `quarkus-mailer`. 
* [org.openrewrite.quarkus.spring.SpringBootOAuth2ClientToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootoauth2clienttoquarkus): Migrates spring-boot-starter-oauth2-client` to `quarkus-oidc-client`. 
* [org.openrewrite.quarkus.spring.SpringBootOAuth2ResourceServerToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootoauth2resourceservertoquarkus): Migrates `spring-boot-starter-oauth2-resource-server` to `quarkus-oidc`. 
* [org.openrewrite.quarkus.spring.SpringBootQuartzToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootquartztoquarkus): Migrates `spring-boot-starter-quartz` to `quarkus-quartz`. 
* [org.openrewrite.quarkus.spring.SpringBootSecurityToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootsecuritytoquarkus): Migrates `spring-boot-starter-security` to `quarkus-security`. 
* [org.openrewrite.quarkus.spring.SpringBootTestToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springboottesttoquarkus): Migrates `spring-boot-starter-test` to `quarkus-junit5`. 
* [org.openrewrite.quarkus.spring.SpringBootThymeleafToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootthymeleaftoquarkus): Migrates `spring-boot-starter-thymeleaf` to `quarkus-qute`. 
* [org.openrewrite.quarkus.spring.SpringBootToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springboottoquarkus): Replace Spring Boot with Quarkus. 
* [org.openrewrite.quarkus.spring.SpringBootValidationToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootvalidationtoquarkus): Migrates `spring-boot-starter-validation` to `quarkus-hibernate-validator`. 
* [org.openrewrite.quarkus.spring.SpringBootWebFluxToQuarkusReactive](https://docs.openrewrite.org/recipes/quarkus/spring/springbootwebfluxtoquarkusreactive): Migrates `spring-boot-starter-webflux` to `quarkus-rest-client-jackson` when reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.SpringBootWebSocketToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springbootwebsockettoquarkus): Migrates `spring-boot-starter-websocket` to `quarkus-websockets`. 
* [org.openrewrite.quarkus.spring.SpringBootWebToQuarkusClassic](https://docs.openrewrite.org/recipes/quarkus/spring/springbootwebtoquarkusclassic): Migrates `spring-boot-starter-web` to `quarkus-resteasy-jackson` when no reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.SpringBootWebToQuarkusReactive](https://docs.openrewrite.org/recipes/quarkus/spring/springbootwebtoquarkusreactive): Migrates `spring-boot-starter-web` to `quarkus-rest-jackson` when reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.SpringKafkaToQuarkusClassic](https://docs.openrewrite.org/recipes/quarkus/spring/springkafkatoquarkusclassic): Migrates `spring-kafka` to `quarkus-kafka-client` when no reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.SpringKafkaToQuarkusReactive](https://docs.openrewrite.org/recipes/quarkus/spring/springkafkatoquarkusreactive): Migrates `spring-kafka` to `quarkus-messaging-kafka` when reactor dependencies are present. 
* [org.openrewrite.quarkus.spring.StereotypeAnnotationsToCDI](https://docs.openrewrite.org/recipes/quarkus/spring/stereotypeannotationstocdi): Replace Spring stereotype and injection annotations with CDI equivalents. 
* [org.openrewrite.quarkus.spring.ValueToCdiConfigProperty](https://docs.openrewrite.org/recipes/quarkus/spring/valuetocdiconfigproperty): Transform Spring `@Value` annotations to MicroProfile `@ConfigProperty` with proper parameter mapping. 
* [org.openrewrite.quarkus.spring.WebToJaxRs](https://docs.openrewrite.org/recipes/quarkus/spring/webtojaxrs): Converts Spring Web annotations such as `@RestController`, `@RequestMapping`, `@GetMapping`, etc., to their JAX-RS equivalents like `@Path`, `@GET`, etc. 
* [org.openrewrite.sql.ConvertDataType](https://docs.openrewrite.org/recipes/sql/convertdatatype): When migrating between SQL dialects, data types often need to be converted. For example, Oracle's `VARCHAR2` can be replaced with Postgres `VARCHAR`, or `NUMBER` with `NUMERIC`. 
* [org.openrewrite.sql.ConvertOracleDataTypesToPostgres](https://docs.openrewrite.org/recipes/sql/convertoracledatatypestopostgres): Replaces Oracle-specific data types with PostgreSQL equivalents. 
* [org.openrewrite.sql.ConvertOracleFunctionsToPostgres](https://docs.openrewrite.org/recipes/sql/convertoraclefunctionstopostgres): Replaces Oracle-specific functions with PostgreSQL equivalents. 
* [org.openrewrite.sql.ConvertSqlServerDataTypesToPostgres](https://docs.openrewrite.org/recipes/sql/convertsqlserverdatatypestopostgres): Replaces SQL Server-specific data types with PostgreSQL equivalents. 
* [org.openrewrite.sql.ConvertSqlServerFunctionsToPostgres](https://docs.openrewrite.org/recipes/sql/convertsqlserverfunctionstopostgres): Replaces SQL Server-specific functions with PostgreSQL equivalents. 
* [org.openrewrite.sql.MigrateOracleToPostgres](https://docs.openrewrite.org/recipes/sql/migrateoracletopostgres): Converts Oracle-specific SQL syntax and functions to PostgreSQL equivalents. 
* [org.openrewrite.sql.MigrateSqlServerToPostgres](https://docs.openrewrite.org/recipes/sql/migratesqlservertopostgres): Converts Microsoft SQL Server-specific SQL syntax and functions to PostgreSQL equivalents. 
* [software.amazon.awssdk.v2migration.S3AddImportsAndComments](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3addimportsandcomments): Add imports and comments to unsupported S3 transforms. 
* [software.amazon.awssdk.v2migration.TransferManagerMethodsToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/transfermanagermethodstov2): Transfer Manager Methods to V2 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes): These rules simplify and improve the readability of tests by using `File`-specific
 AssertJ assertion methods instead of generic assertions.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJFileRules). 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatDoesNotExistRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatdoesnotexistrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatDoesNotExist {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.exists()).isFalse();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).doesNotExist();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatExistsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatexistsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatExists {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.exists()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).exists();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatHasFileNameRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasfilenamerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasFileName {
    
    @BeforeTemplate
    AbstractStringAssert<?> before(File actual, String fileName) {
        return assertThat(actual.getName()).isEqualTo(fileName);
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual, String fileName) {
        return assertThat(actual).hasFileName(fileName);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatHasNoParentRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasnoparentrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasNoParent {
    
    @BeforeTemplate
    void before(File actual) {
        assertThat(actual.getParent()).isNull();
    }
    
    @AfterTemplate
    void after(File actual) {
        assertThat(actual).hasNoParent();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatHasParentFileRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasparentfilerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasParentFile {
    
    @BeforeTemplate
    AbstractFileAssert<?> before(File actual, File expected) {
        return assertThat(actual.getParentFile()).isEqualTo(expected);
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual, File expected) {
        return assertThat(actual).hasParent(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatHasParentStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthathasparentstringrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasParentString {
    
    @BeforeTemplate
    AbstractFileAssert<?> before(File actual, String expected) {
        return assertThat(actual.getParentFile()).hasFileName(expected);
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual, String expected) {
        return assertThat(actual).hasParent(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsAbsoluteRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisabsoluterecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsAbsolute {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.isAbsolute()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isAbsolute();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsDirectoryRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisdirectoryrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsDirectory {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.isDirectory()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isDirectory();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsExecutableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisexecutablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsExecutable {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.canExecute()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isExecutable();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsFileRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisfilerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsFile {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.isFile()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isFile();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsReadableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisreadablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsReadable {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.canRead()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isReadable();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsRelativeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatisrelativerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsRelative {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.isAbsolute()).isFalse();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isRelative();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJFileRulesRecipes$AssertThatIsWritableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjfilerulesrecipes$assertthatiswritablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsWritable {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(File actual) {
        return assertThat(actual.canWrite()).isTrue();
    }
    
    @AfterTemplate
    AbstractFileAssert<?> after(File actual) {
        return assertThat(actual).isWritable();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJStreamRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJStreamRules). 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatAnyMatchRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatanymatchrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatAnyMatch<T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<T> stream, Predicate<? super T> predicate) {
        return assertThat(stream).filteredOn(predicate).isNotEmpty();
    }
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before2(Stream<T> stream, Predicate<? super T> predicate) {
        return Refaster.anyOf(assertThat(stream.anyMatch(predicate)).isTrue(), assertThat(stream.noneMatch(predicate)).isFalse());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<T> after(Stream<T> stream, Predicate<? super T> predicate) {
        return assertThat(stream).anyMatch(predicate);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatCollectionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatcollectionrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatCollection<T> {
    
    @BeforeTemplate
    ListAssert<T> before(Collection<T> collection) {
        return assertThat(collection.stream());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractCollectionAssert<?, ?, T, ?> after(Collection<T> collection) {
        return assertThat(collection);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatFilteredOnRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatfilteredonrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatFilteredOn<T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<T> stream, Predicate<? super T> predicate) {
        return assertThat(stream.filter(predicate));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<T> after(Stream<T> stream, Predicate<? super T> predicate) {
        return assertThat(stream).filteredOn(predicate);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStreamRulesRecipes$AssertThatNoneMatchRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstreamrulesrecipes$assertthatnonematchrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatNoneMatch<T> {
    
    @BeforeTemplate
    void before(Stream<T> stream, Predicate<? super T> predicate) {
        assertThat(stream).filteredOn(predicate).isEmpty();
    }
    
    @BeforeTemplate
    void before2(Stream<T> stream, Predicate<? super T> predicate) {
        Refaster.anyOf(assertThat(stream.anyMatch(predicate)).isFalse(), assertThat(stream.noneMatch(predicate)).isTrue());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Stream<T> stream, Predicate<? super T> predicate) {
        assertThat(stream).noneMatch(predicate);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderPathOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewbufferedreaderpathofrecipe): Prefer `Files#newBufferedReader(Path)` over more verbose or contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderPathOfWithCharsetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewbufferedreaderpathofwithcharsetrecipe): Prefer `Files#newBufferedReader(Path, Charset)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderToPathRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewbufferedreadertopathrecipe): Prefer `Files#newBufferedReader(Path)` over more verbose or contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderToPathWithCharsetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewbufferedreadertopathwithcharsetrecipe): Prefer `Files#newBufferedReader(Path, Charset)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxNextRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxnextrecipe): Prefer fluent `Flux#next()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$CollectionParallelStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$collectionparallelstreamrecipe): Prefer `Collection#parallelStream()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamsStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamsstreamrecipe): Prefer `Streams#stream(Iterable)` over more contrived alternatives. 

## Removed Recipes

* **org.openrewrite.java.jackson.UpgradeJackson_2_And_3_Base_Exceptions**: Jackson 3 contains new base exceptions which were also backported to 2.x. This recipe will migrate usage to the new base exceptions to prepare for a 3.x upgrade. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$BooleanHashCodeRecipe**: Prefer `Boolean#hashCode(boolean)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ByteHashCodeRecipe**: Prefer `Byte#hashCode(byte)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$CharacterHashCodeRecipe**: Prefer `Character#hashCode(char)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleHashCodeRecipe**: Prefer `Double#hashCode(double)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleIsFiniteRecipe**: Prefer `Double#isFinite(double)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatHashCodeRecipe**: Prefer `Float#hashCode(float)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatIsFiniteRecipe**: Prefer `Float#isFinite(float)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerHashCodeRecipe**: Prefer `Integer#hashCode(int)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongHashCodeRecipe**: Prefer `Long#hashCode(long)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ShortHashCodeRecipe**: Prefer `Short#hashCode(short)` over the Guava alternative. 
* **tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxEmptyRecipe**: Prefer `Flux#empty()` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.StreamRulesRecipes$EmptyStreamRecipe**: Prefer `Stream#empty()` over less clear alternatives. 

## Changed Recipes

* [org.openrewrite.jenkins.JenkinsfileAsGroovy](https://docs.openrewrite.org/recipes/jenkins/jenkinsfileasgroovy) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `filePattern: { type: String, required: false }`