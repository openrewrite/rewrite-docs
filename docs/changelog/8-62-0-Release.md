---
description: What's changed in OpenRewrite version 8.62.0.
---

# 8.62.0 release (2025-09-10)

_Total recipe count: 4728_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.43.6`
* Staging CLI version: `v3.47.0`

## New Artifacts
* rewrite-elastic
* rewrite-kafka

## New Recipes

* [io.moderne.cryptography.FindRSAKeyGenParameters](https://docs.openrewrite.org/recipes/cryptography/findrsakeygenparameters): Finds RSAKeyGenParameterSpec instantiations and extracts their parameter values into a data table. 
* [io.moderne.cryptography.FindSSLSocketParameters](https://docs.openrewrite.org/recipes/cryptography/findsslsocketparameters): Finds SSLSocket setter method invocations and extracts their parameter values into a data table. 
* [io.moderne.cryptography.FindSecurityModifications](https://docs.openrewrite.org/recipes/cryptography/findsecuritymodifications): Finds invocations of java.security.Security methods that modify security configuration such as removeProvider, addProvider, insertProviderAt, setProperty, and removeProperty. 
* [io.moderne.devcenter.QuarkusDevCenter](https://docs.openrewrite.org/recipes/devcenter/quarkusdevcenter): A DevCenter that tracks the latest Quarkus framework versions and applies best practices. This DevCenter includes recipes to upgrade Quarkus versions, migrate from deprecated APIs, and ensure compatibility with the latest Java versions and testing frameworks. 
* [io.moderne.devcenter.UpgradeQuarkus3_x](https://docs.openrewrite.org/recipes/devcenter/upgradequarkus3_x): Upgrades Quarkus dependencies to version 3.26.x, including core, extensions, and tooling. 
* [io.moderne.devcenter.UpgradeQuarkusUniverseBom](https://docs.openrewrite.org/recipes/devcenter/upgradequarkusuniversebom): Upgrades the Quarkus Universe BOM parent to the latest version. 
* [io.moderne.elastic.elastic9.BoxedApiField](https://docs.openrewrite.org/recipes/elastic/elastic9/boxedapifield): Adds null checks when using API fields that changed from primitive to boxed types. In Elasticsearch Java Client 9.0, certain fields that were always present and returned primitives now return boxed types to support null values, requiring null checks to prevent NPEs. 
* [io.moderne.elastic.elastic9.BoxedApiFields](https://docs.openrewrite.org/recipes/elastic/elastic9/boxedapifields): Changes primitive return types of various API response fields to their boxed counterparts to align with Elasticsearch 9 specifications. 
* [io.moderne.elastic.elastic9.MigrateMatchedQueries](https://docs.openrewrite.org/recipes/elastic/elastic9/migratematchedqueries): In Elasticsearch Java Client 9.0, `Hit.matchedQueries()` changed from returning `List<String>` to `Map<String, Double>`. This recipe migrates the usage by adding `.keySet()` for iterations and using `new ArrayList<>(result.keySet())` for assignments. 
* [io.moderne.elastic.elastic9.MigrateScriptSource](https://docs.openrewrite.org/recipes/elastic/elastic9/migratescriptsource): Migrates `Script.source(String)` calls to use `ScriptSource.scriptString(String)` wrapper in Elasticsearch Java client 9.x. 
* [io.moderne.elastic.elastic9.MigrateToElasticsearch9](https://docs.openrewrite.org/recipes/elastic/elastic9/migratetoelasticsearch9): This recipe performs a comprehensive migration from Elasticsearch 8 to Elasticsearch 9, addressing breaking changes, API removals, deprecations, and required code modifications. 
* [io.moderne.elastic.elastic9.RenameApiField](https://docs.openrewrite.org/recipes/elastic/elastic9/renameapifield): In Elasticsearch Java Client 9.0, the generic `valueBody()` method and `valueBody(...)` builder methods have been replaced with specific getter and setter methods that better reflect the type of data being returned. Similarly, for `GetRepositoryResponse`, the `result` field also got altered to `repositories`. 
* [io.moderne.elastic.elastic9.RenameApiFields](https://docs.openrewrite.org/recipes/elastic/elastic9/renameapifields): Renames various API response fields from `valueBody` to align with Elasticsearch 9 specifications. 
* [io.moderne.elastic.elastic9.UseNamedValueParameters](https://docs.openrewrite.org/recipes/elastic/elastic9/usenamedvalueparameters): Migrates `indicesBoost` and `dynamicTemplates` parameters from `Map` to `NamedValue` in Elasticsearch Java client 9.x. 
* [io.moderne.hibernate.update70.CompositeUserTypeSessionFactoryImplementor](https://docs.openrewrite.org/recipes/hibernate/update70/compositeusertypesessionfactoryimplementor): Remove leaking of SessionFactoryImplementor from `org.hibernate.usertype.CompositeUserType` invocations and implementations. 
* [io.moderne.hibernate.update70.MigrateJdbcTypeToJdbcTypeCode](https://docs.openrewrite.org/recipes/hibernate/update70/migratejdbctypetojdbctypecode): In Hibernate 7.0, various JDBC types were moved to internal packages. Use @JdbcTypeCode with SqlTypes constants instead of @JdbcType with specific classes. 
* [io.moderne.hibernate.update70.UserTypeNullSafeGetSharedSessionContractImplementorRecipe](https://docs.openrewrite.org/recipes/hibernate/update70/usertypenullsafegetsharedsessioncontractimplementorrecipe): Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` invocations. 
* [io.moderne.hibernate.update70.UserTypeSharedSessionContractImplementor](https://docs.openrewrite.org/recipes/hibernate/update70/usertypesharedsessioncontractimplementor): Remove leaking of SharedSessionContractImplementor from `org.hibernate.usertype.UserType` implementations. 
* [io.moderne.java.spring.security6.MigrateAntPathRequestMatcher](https://docs.openrewrite.org/recipes/java/spring/security6/migrateantpathrequestmatcher): In Spring Security 6.5, `AntPathRequestMatcher` is deprecated in favor of `PathPatternRequestMatcher`. This recipe migrates static method calls and constructor usage to the new pattern. 
* [io.moderne.java.spring.security6.UpgradeSpringSecurity_6_5](https://docs.openrewrite.org/recipes/java/spring/security6/upgradespringsecurity_6_5): Migrate applications to the latest Spring Security 6.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [io.moderne.kafka.MigrateToKafka24](https://docs.openrewrite.org/recipes/kafka/migratetokafka24): Migrate applications to the latest Kafka 2.3 release. 
* [io.moderne.kafka.MigrateToKafka25](https://docs.openrewrite.org/recipes/kafka/migratetokafka25): Migrate applications to the latest Kafka 2.5 release. 
* [io.moderne.kafka.MigrateToKafka26](https://docs.openrewrite.org/recipes/kafka/migratetokafka26): Migrate applications to the latest Kafka 2.6 release. 
* [io.moderne.kafka.MigrateToKafka27](https://docs.openrewrite.org/recipes/kafka/migratetokafka27): Migrate applications to the latest Kafka 2.7 release. 
* [io.moderne.kafka.MigrateToKafka28](https://docs.openrewrite.org/recipes/kafka/migratetokafka28): Migrate applications to the latest Kafka 2.8 release. 
* [io.moderne.kafka.MigrateToKafka30](https://docs.openrewrite.org/recipes/kafka/migratetokafka30): Migrate applications to the latest Kafka 3.0 release. 
* [io.moderne.kafka.MigrateToKafka31](https://docs.openrewrite.org/recipes/kafka/migratetokafka31): Migrate applications to the latest Kafka 3.1 release. 
* [io.moderne.kafka.MigrateToKafka32](https://docs.openrewrite.org/recipes/kafka/migratetokafka32): Migrate applications to the latest Kafka 3.2 release. 
* [io.moderne.kafka.MigrateToKafka33](https://docs.openrewrite.org/recipes/kafka/migratetokafka33): Migrate applications to the latest Kafka 3.3 release. 
* [io.moderne.kafka.streams.MigrateJoinedNameMethod](https://docs.openrewrite.org/recipes/kafka/streams/migratejoinednamemethod): In Kafka Streams 2.3, `Joined.named()` was deprecated in favor of `Joined.as()`. Additionally, the `name()` method was deprecated for removal and should not be used. 
* [io.moderne.kafka.streams.MigrateKStreamToTable](https://docs.openrewrite.org/recipes/kafka/streams/migratekstreamtotable): In Kafka Streams 2.5, a new `toTable()` method was added to simplify converting a KStream to a KTable. This recipe replaces the manual aggregation pattern `.groupByKey().reduce((oldVal, newVal) -> newVal)` with the more concise `.toTable()` method. 
* [io.moderne.kafka.streams.MigrateKafkaStreamsStoreMethod](https://docs.openrewrite.org/recipes/kafka/streams/migratekafkastreamsstoremethod): In Kafka Streams 2.5, the method `KafkaStreams#store(String storeName, QueryableStoreType<T> storeType)` was deprecated. It only allowed querying active stores and did not support any additional query options. Use the new `StoreQueryParameters` API instead. 
* [io.moderne.kafka.streams.MigrateRetryConfiguration](https://docs.openrewrite.org/recipes/kafka/streams/migrateretryconfiguration): In Kafka 2.7, `RETRIES_CONFIG` and `RETRY_BACKOFF_MS_CONFIG` were deprecated in favor of `TASK_TIMEOUT_MS_CONFIG`. This recipe migrates the old retry configuration to the new task timeout configuration, attempting to preserve the retry budget by multiplying retries × backoff time. If only one config is present, it falls back to 60000ms (1 minute). 
* [io.moderne.kafka.streams.MigrateStreamsUncaughtExceptionHandler](https://docs.openrewrite.org/recipes/kafka/streams/migratestreamsuncaughtexceptionhandler): Migrates from the JVM-level Thread.UncaughtExceptionHandler to Kafka Streams' StreamsUncaughtExceptionHandler API introduced in version 2.8. This new API provides explicit control over how the Streams client should respond to uncaught exceptions (REPLACE_THREAD, SHUTDOWN_CLIENT, or SHUTDOWN_APPLICATION). 
* [io.moderne.kafka.streams.MigrateTaskAndThreadMetadata](https://docs.openrewrite.org/recipes/kafka/streams/migratetaskandthreadmetadata): Migrates TaskMetadata and ThreadMetadata from org.apache.kafka.streams.processor package to org.apache.kafka.streams package, and updates TaskMetadata.taskId() calls to include .toString() for String compatibility. 
* [io.moderne.kafka.streams.MigrateTaskMetadataTaskId](https://docs.openrewrite.org/recipes/kafka/streams/migratetaskmetadatataskid): In Kafka Streams 3.0, `TaskMetadata.taskId()` changed its return type from `String` to `TaskId`. This recipe adds `.toString()` calls where necessary to maintain String compatibility. 
* [io.moderne.kafka.streams.MigrateWindowStorePutMethod](https://docs.openrewrite.org/recipes/kafka/streams/migratewindowstoreputmethod): In Kafka Streams 2.4, `WindowStore.put()` requires a timestamp parameter. This recipe adds `context.timestamp()` as the third parameter. 
* [io.moderne.kafka.streams.ProcessingGuaranteeExactlyOnceToBeta](https://docs.openrewrite.org/recipes/kafka/streams/processingguaranteeexactlyoncetobeta): Kafka Streams 2.6 introduces the exactly-once semantics v2, which is a more efficient implementation with improved internal handling. Though it is beta, it’s fully backward-compatible from the API standpoint, but internally it uses a different transaction/commit protocol. Starting from 3.0, it becomes the default "exactly_once_v2". 
* [io.moderne.kafka.streams.ProcessingGuaranteeExactlyOnceToV2](https://docs.openrewrite.org/recipes/kafka/streams/processingguaranteeexactlyoncetov2): Kafka Streams 2.6 introduces the exactly-once semantics v2, which is a more efficient implementation with improved internal handling. Starting from 3.0, it becomes the default "exactly_once_v2". 
* [io.moderne.kafka.streams.RemovePartitionGrouperConfiguration](https://docs.openrewrite.org/recipes/kafka/streams/removepartitiongrouperconfiguration): Starting with Kafka Streams 2.4, the `PartitionGrouper` API was deprecated and partition grouping is now fully handled internally by the library. This recipe removes the deprecated `PARTITION_GROUPER_CLASS_CONFIG` configuration. 
* [org.apache.camel.upgrade.Camel410LTSMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel410ltsmigrationrecipe): Migrates Apache Camel application to 4.10.6. 
* [org.apache.camel.upgrade.camel410_4.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel410_4/camelmigrationrecipe): Migrates `camel 4.10.3` application to `camel 4.10.4`. 
* [org.apache.camel.upgrade.camel414.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel414/camelmigrationrecipe): Migrates `camel 4.13` application to `camel 4.14`. 
* [org.apache.camel.upgrade.camel414.httpBusinessVsManagementServicesSeparationProperties](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel414/httpbusinessvsmanagementservicesseparationproperties): The HTTP server for standalone camel-main applications has separated management services and business services. This means that part of configurations in application.properties should be changed from camel.server.xxx to camel.management.xxx. 
* [org.openrewrite.AddToGitignore](https://docs.openrewrite.org/recipes/core/addtogitignore): Adds entries to the project's `.gitignore` file. If no `.gitignore` file exists, one will be created. Existing entries that match will not be duplicated. 
* [org.openrewrite.gitlab.AddStages](https://docs.openrewrite.org/recipes/gitlab/addstages): Add or Update the set of stages defined in `.gitlab-ci.yml`. 
* [org.openrewrite.gradle.MigrateToGradle9](https://docs.openrewrite.org/recipes/gradle/migratetogradle9): Migrate to version 9.x. See the Gradle upgrade guide from [version 8.x to 9.0](https://docs.gradle.org/9.0.0/userguide/upgrading_major_version_9.html) for more information. 
* [org.openrewrite.java.migrate.MigrateZipErrorToZipException](https://docs.openrewrite.org/recipes/java/migrate/migrateziperrortozipexception): Use `ZipException` instead of the deprecated `ZipError` in Java 9 or higher. 
* [org.openrewrite.java.migrate.lang.MigrateProcessWaitForDuration](https://docs.openrewrite.org/recipes/java/migrate/lang/migrateprocesswaitforduration): Use `Process#waitFor(Duration)` instead of `Process#waitFor(long, TimeUnit)` in Java 25 or higher. 
* [org.openrewrite.java.migrate.lang.ReplaceUnusedVariablesWithUnderscore](https://docs.openrewrite.org/recipes/java/migrate/lang/replaceunusedvariableswithunderscore): Replace unused variable declarations with underscore (_) for Java 22+. This includes unused variables in enhanced for loops, catch blocks, and lambda parameters where the variable is never referenced. 
* [org.openrewrite.java.migrate.util.MigrateInflaterDeflaterToClose](https://docs.openrewrite.org/recipes/java/migrate/util/migrateinflaterdeflatertoclose): Replace `end()` method calls with `close()` method calls for `Inflater` and `Deflater` classes in Java 25+, as they now implement AutoCloseable. 
* [org.openrewrite.java.spring.boot3.SpringBootProperties_3_5](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_5): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_5](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_5): Migrate applications to the latest Spring Boot 3.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs. 
* [org.openrewrite.java.spring.cloud2025.DependencyUpgrades](https://docs.openrewrite.org/recipes/java/spring/cloud2025/dependencyupgrades): Upgrade dependencies to Spring Cloud 2025 from prior 2024.x version. 
* [org.openrewrite.java.spring.cloud2025.SpringCloudGatewayDeprecatedModulesAndStarters](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudgatewaydeprecatedmodulesandstarters): Migrate to new Spring Cloud Gateway modules and starters for Spring Cloud 2025 
* [org.openrewrite.java.spring.cloud2025.SpringCloudGatewayProperties](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudgatewayproperties): Migrate Spring Cloud Gateway properties for Spring Cloud 2025 release. 
* [org.openrewrite.java.spring.cloud2025.SpringCloudGatewayProxyWebMvcProperties](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudgatewayproxywebmvcproperties): Migrate Spring Cloud Gateway Proxy WebMvc properties for Spring Cloud 2025 release. 
* [org.openrewrite.java.spring.cloud2025.SpringCloudGatewayProxyWebfluxProperties](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudgatewayproxywebfluxproperties): Migrate Spring Cloud Gateway Proxy Webflux properties for Spring Cloud 2025 release. 
* [org.openrewrite.java.spring.cloud2025.SpringCloudGatewayWebMvcProperties](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudgatewaywebmvcproperties): Migrate Spring Cloud Gateway WebMvc properties for Spring Cloud 2025 release. 
* [org.openrewrite.java.spring.cloud2025.SpringCloudGatewayWebfluxProperties](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudgatewaywebfluxproperties): Migrate Spring Cloud Gateway Webflux properties for Spring Cloud 2025 release. 
* [org.openrewrite.java.spring.cloud2025.UpgradeSpringCloud_2025](https://docs.openrewrite.org/recipes/java/spring/cloud2025/upgradespringcloud_2025): Migrate applications to the latest Spring Cloud 2025 (Northfields) release. 
* [org.openrewrite.java.spring.framework.MigrateClientHttpResponseGetRawStatusCodeMethod](https://docs.openrewrite.org/recipes/java/spring/framework/migrateclienthttpresponsegetrawstatuscodemethod): `ClientHttpResponse#getRawStatusCode()` was deprecated, so we replace it with `getStatusCode()`, though the return type has changed from `int` to `HttpStatusCode`, so we must account for that as well. 
* [org.openrewrite.java.struts.migrate6.MigrateDynamicMethodInvocation](https://docs.openrewrite.org/recipes/java/struts/migrate6/migratedynamicmethodinvocation): Identifies Struts configurations using Dynamic Method Invocation (DMI) and marks them for migration, as DMI is disabled by default in Struts 6 for security reasons. 
* [org.openrewrite.java.testing.assertj.SimplifyRedundantAssertJChains](https://docs.openrewrite.org/recipes/java/testing/assertj/simplifyredundantassertjchains): Removes redundant AssertJ assertions when chained methods already provide the same or stronger guarantees. 
* [org.openrewrite.staticanalysis.SimplifyElseBranch](https://docs.openrewrite.org/recipes/staticanalysis/simplifyelsebranch): Simplify `else` branch if it only has a single `if`. 
* [org.openrewrite.staticanalysis.UsePortableNewlines](https://docs.openrewrite.org/recipes/staticanalysis/useportablenewlines): Format strings should use %n rather than \n to produce platform-specific line separators. 

## Removed Recipes

* **io.moderne.java.spring.boot3.SpringBootProperties_3_5**: Migrate properties found in `application.properties` and `application.yml`. 
* **io.moderne.java.spring.cloud2025.ChangeDeprecatedArtifacts**:  
* **io.moderne.java.spring.cloud2025.DependencyUpgrades**: Upgrade dependencies to Spring Cloud 2025 from prior 2024.x version. 
* **io.moderne.java.spring.cloud2025.UpgradeSpringCloud_2025**: Migrate applications to the latest Spring Cloud 2025 (Northfields) release. 
* **org.openrewrite.java.migrate.UpgradeBuildToJava25**: Updates build files to use Java 25 as the target/source. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes**: Replace the usage of static `Traits` methods with the corresponding constructor calls, as the `Traits` classes were an early abstraction with undesirable import conflicts. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$AnnotationMatcherRecipe**: Removes the usage of static `org.openrewrite.java.trait.Traits.annotated(AnnotationMatcher)`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$ClassTypeRecipe**: Removes the usage of static `org.openrewrite.java.trait.Traits.annotated(Class<?>)`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$DependencyRecipe**: Removes the usage of static `org.openrewrite.gradle.trait.Traits.gradleDependency()`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$JvmTestSuiteRecipe**: Removes the usage of static `org.openrewrite.gradle.trait.Traits.jvmTestSuite()`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$LiteralRecipe**: Removes the usage of static `org.openrewrite.java.trait.Traits.literal()`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$MethodMatcherRecipe**: Removes the usage of static `org.openrewrite.java.trait.Traits.methodAccess(MethodMatcher)`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$PluginRecipe**: Removes the usage of static `org.openrewrite.maven.trait.Traits.mavenPlugin()`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$StringSignatureRecipe**: Removes the usage of static `org.openrewrite.java.trait.Traits.annotated(String)`. 
* **org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$VariableAccessRecipe**: Removes the usage of static `org.openrewrite.java.trait.Traits.variableAccess()`. 

## Changed Recipes

* [org.openrewrite.maven.ChangeParentPom](https://docs.openrewrite.org/recipes/maven/changeparentpom) was changed:
  * Old Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newRelativePath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `oldRelativePath: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `allowVersionDowngrades: { type: Boolean, required: false }`
    * `except: { type: List, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newRelativePath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `oldRelativePath: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`