---
description: What's changed in OpenRewrite version 8.74.1.
---

# 8.74.1 release (2026-02-25)

_Total recipe count: 4795_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.57.6`
* Staging CLI version: `v3.57.11`

## New Artifacts

* rewrite-cobol

## New Recipes

* [io.moderne.devcenter.FindOrganizationStatistics](https://docs.openrewrite.org/recipes/devcenter/findorganizationstatistics): Counts lines of code per repository for organization-level statistics. 
* [io.quarkus.updates.camel.camel418.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel418/camelquarkusmigrationrecipe): Migrates `camel 4.17` Quarkus application to `camel 4.18`. 
* [org.apache.camel.upgrade.camel418.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel418/camelmigrationrecipe): Migrates `camel 4.17` application to `camel 4.18`. 
* [org.openrewrite.apache.poi.UpgradeApachePoi_4_1](https://docs.openrewrite.org/recipes/apache/poi/upgradeapachepoi_4_1): Migrates to the last Apache POI 4.x release. This recipe modifies build files and makes changes to deprecated/preferred APIs that have changed between versions. 
* [org.openrewrite.apache.poi.UpgradeApachePoi_5](https://docs.openrewrite.org/recipes/apache/poi/upgradeapachepoi_5): Migrates to the latest Apache POI 5.x release. This recipe modifies build files to account for artifact renames and upgrades dependency versions. It also chains the 4.1 recipe to handle all prior API migrations. 
* [org.openrewrite.cobol.cleanup.RemoveWithDebuggingMode](https://docs.openrewrite.org/recipes/cobol/cleanup/removewithdebuggingmode): Remove debugging mode from SOURCE-COMPUTER paragraphs. 
* [org.openrewrite.cobol.search.FindCopybook](https://docs.openrewrite.org/recipes/cobol/search/findcopybook): Find all copy statements with the copybook name. 
* [org.openrewrite.cobol.search.FindIndicators](https://docs.openrewrite.org/recipes/cobol/search/findindicators): Find matching indicators. Currently, this recipe will not mark indicators on copybook code. 
* [org.openrewrite.cobol.search.FindReference](https://docs.openrewrite.org/recipes/cobol/search/findreference): Finds an identifier by an exact match or regex pattern in COBOL, copybooks, and/or JCL. 
* [org.openrewrite.cobol.search.FindRelationships](https://docs.openrewrite.org/recipes/cobol/search/findrelationships): Build a list of relationships for diagramming and exploration. 
* [org.openrewrite.cobol.search.FindWord](https://docs.openrewrite.org/recipes/cobol/search/findword): Search for COBOL words based on a search term. 
* [org.openrewrite.gitlab.search.FindDeprecatedExcept](https://docs.openrewrite.org/recipes/gitlab/search/finddeprecatedexcept): Find usages of the deprecated `except` keyword in `.gitlab-ci.yml`. The `except` keyword is deprecated in favor of `rules`. 
* [org.openrewrite.gitlab.search.FindDeprecatedOnly](https://docs.openrewrite.org/recipes/gitlab/search/finddeprecatedonly): Find usages of the deprecated `only` keyword in `.gitlab-ci.yml`. The `only` keyword is deprecated in favor of `rules`. 
* [org.openrewrite.gitlab.search.FindDeprecatedSyntax](https://docs.openrewrite.org/recipes/gitlab/search/finddeprecatedsyntax): Find usages of deprecated `only` and `except` keywords in `.gitlab-ci.yml`. These keywords are deprecated in favor of `rules`. 
* [org.openrewrite.java.dropwizard.test.DropwizardRulesJUnit4ToSpringBoot](https://docs.openrewrite.org/recipes/java/dropwizard/test/dropwizardrulesjunit4tospringboot): Remove Dropwizard JUnit4 rules and add Spring Boot test annotations and extensions. 
* [org.openrewrite.java.dropwizard.test.MethodLambdaExtractor](https://docs.openrewrite.org/recipes/java/dropwizard/test/methodlambdaextractor): Extracts the body of lambda expressions and inlines them into the surrounding code. 
* [org.openrewrite.java.dropwizard.test.MockitoVariableToMockBean](https://docs.openrewrite.org/recipes/java/dropwizard/test/mockitovariabletomockbean): Converts static final Mockito mock fields to Spring Boot @MockBean fields. 
* [org.openrewrite.java.dropwizard.test.TransformDropwizardRuleInvocations](https://docs.openrewrite.org/recipes/java/dropwizard/test/transformdropwizardruleinvocations): Transforms Dropwizard AppRule testing calls to their equivalent RestTemplate calls. 
* [org.openrewrite.java.jackson.IOExceptionToJacksonException](https://docs.openrewrite.org/recipes/java/jackson/ioexceptiontojacksonexception): In Jackson 3, `ObjectMapper` and related classes no longer throw `IOException`. This recipe replaces `catch (IOException e)` with `catch (JacksonException e)` when the try block contains Jackson API calls. When the try block also contains non-Jackson code that throws `IOException`, the catch is changed to a multi-catch `catch (JacksonException | IOException e)`. 
* [org.openrewrite.java.jackson.ReplaceJsonIgnoreWithJsonSetter](https://docs.openrewrite.org/recipes/java/jackson/replacejsonignorewithjsonsetter): In Jackson 3, `@JsonIgnore` on fields initialized with empty collections causes the field value to become `null` instead of maintaining the empty collection. This recipe replaces `@JsonIgnore` with `@JsonSetter(nulls = Nulls.AS_EMPTY)` on `Map` and `Collection` fields that have an empty collection initializer. 
* [org.openrewrite.java.joda.time.JodaAbstractInstantToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodaabstractinstanttojavatime): Migrates Joda-Time `AbstractInstant` method calls to their Java time equivalents. 
* [org.openrewrite.java.joda.time.JodaDateMidnightToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodadatemidnighttojavatime): Migrates `org.joda.time.DateMidnight` constructor and `now()` calls to `java.time.LocalDate.now().atStartOfDay(...)`. 
* [org.openrewrite.java.joda.time.JodaDateTimeToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodadatetimetojavatime): Migrates Joda-Time `DateTime` constructors and instance methods to the equivalent `java.time.ZonedDateTime` calls. 
* [org.openrewrite.java.joda.time.JodaDateTimeZoneToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodadatetimezonetojavatime): Migrates `org.joda.time.DateTimeZone` method calls to `java.time.ZoneOffset` and `java.time.ZoneId`. 
* [org.openrewrite.java.joda.time.JodaDurationToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodadurationtojavatime): Migrates `org.joda.time.Duration` constructor and method calls to `java.time.Duration`. 
* [org.openrewrite.java.joda.time.JodaFormatterToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodaformattertojavatime): Migrates Joda-Time `DateTimeFormatter` and `DateTimeFormat` method calls to their Java time equivalents. 
* [org.openrewrite.java.joda.time.JodaInstantToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodainstanttojavatime): Migrates `org.joda.time.Instant` constructor calls to `java.time.Instant.now()`. 
* [org.openrewrite.java.joda.time.JodaIntervalToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodaintervaltojavatime): Migrates `org.joda.time.Interval` constructors and methods to their Java time equivalents using ThreeTen-Extra. 
* [org.openrewrite.java.joda.time.JodaLocalDateToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodalocaldatetojavatime): Migrates Joda-Time `LocalDate` constructors and instance methods to the equivalent `java.time.LocalDate` calls. 
* [org.openrewrite.java.joda.time.JodaLocalTimeToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodalocaltimetojavatime): Migrates Joda-Time `LocalTime` constructors and instance methods to the equivalent `java.time.LocalTime` calls. 
* [org.openrewrite.java.joda.time.JodaTimePeriodToJavaTime](https://docs.openrewrite.org/recipes/java/joda/time/jodatimeperiodtojavatime): Migrates `org.joda.time.Days`, `Hours`, `Minutes`, and `Seconds` to `java.time.temporal.ChronoUnit` and `java.time.Duration`. 
* [org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactory](https://docs.openrewrite.org/recipes/java/logging/slf4j/julgetloggertologgerfactory): Replace calls to `Logger.getLogger(Some.class.getName())` and `Logger.getLogger(Some.class.getCanonicalName())` with `LoggerFactory.getLogger(Some.class)`. 
* [org.openrewrite.java.migrate.UpgradePluginsForJava25](https://docs.openrewrite.org/recipes/java/migrate/upgradepluginsforjava25): Updates plugins and dependencies to versions compatible with Java 25. 
* [org.openrewrite.java.migrate.jakarta.RetainJaxbApiForJackson](https://docs.openrewrite.org/recipes/java/migrate/jakarta/retainjaxbapiforjackson): When migrating from `javax.xml.bind` to `jakarta.xml.bind` 3.0+, the `javax.xml.bind:jaxb-api` dependency is normally replaced. However, if `jackson-module-jaxb-annotations` is on the classpath (and still uses the `javax.xml.bind` namespace), this recipe ensures `javax.xml.bind:jaxb-api` remains available as a runtime dependency to prevent `NoClassDefFoundError`. 
* [org.openrewrite.java.search.FindSymbols](https://docs.openrewrite.org/recipes/java/search/findsymbols): Lists all symbols (classes, methods, fields, etc.) declared in the codebase. Results are emitted into a data table with symbol kind, name, parent type, signature, and visibility. 
* [org.openrewrite.java.spring.data.MigrateRepositoryRestConfigurerAdapter](https://docs.openrewrite.org/recipes/java/spring/data/migraterepositoryrestconfigureradapter): Since 3.1, implement RepositoryRestConfigurer directly. 
* [org.openrewrite.java.spring.security5.ConvertSecurityMatchersToSecurityMatcher](https://docs.openrewrite.org/recipes/java/spring/security5/convertsecuritymatcherstosecuritymatcher): Converts `HttpSecurity.requestMatchers().antMatchers(...)` and similar patterns to `HttpSecurity.securityMatcher(...)`. The no-arg `requestMatchers()` method returns a `RequestMatcherConfigurer` that is not a configurer in the lambda DSL sense, so it should be replaced with the `securityMatcher()` method introduced in Spring Security 5.8. 
* [org.openrewrite.java.spring.ws.MigrateAxiomToSaaj](https://docs.openrewrite.org/recipes/java/spring/ws/migrateaxiomtosaaj): Migrate from Apache Axiom SOAP message handling to SAAJ (SOAP with Attachments API for Java). Spring WS 4.0.x removed support for Apache Axiom because Axiom did not support Jakarta EE at the time. This recipe changes Axiom types to their SAAJ equivalents. 
* [org.openrewrite.java.spring.ws.UpgradeSpringWs_4_0](https://docs.openrewrite.org/recipes/java/spring/ws/upgradespringws_4_0): Migrate applications to Spring WS 4.0. This recipe handles the removal of Apache Axiom support in Spring WS 4.0.x by migrating Axiom-based SOAP message handling to SAAJ (SOAP with Attachments API for Java). Note that Spring WS 4.1+ restores Axiom support if upgrading to that version is preferred. 
* [org.openrewrite.java.springdoc.CleanupRemainingSpringfox](https://docs.openrewrite.org/recipes/java/springdoc/cleanupremainingspringfox): Removes unused private methods left behind after SpringFoxToSpringDoc migration. When Docket beans are removed, private helper methods (e.g., `appInfo()`) become dead code but are not cleaned up, causing compilation errors. 
* [org.openrewrite.java.testing.hamcrest.HamcrestEveryItemToAssertJ](https://docs.openrewrite.org/recipes/java/testing/hamcrest/hamcresteveryitemtoassertj): Migrate Hamcrest `everyItem` to AssertJ `allSatisfy` or `hasOnlyElementsOfType`. 
* [org.openrewrite.java.testing.hamcrest.HamcrestHasItemMatcherToAssertJ](https://docs.openrewrite.org/recipes/java/testing/hamcrest/hamcresthasitemmatchertoassertj): Migrate Hamcrest `hasItem(Matcher)` to AssertJ `hasAtLeastOneElementOfType` or `anySatisfy`. 
* [org.openrewrite.java.testing.hamcrest.HamcrestHasPropertyToAssertJ](https://docs.openrewrite.org/recipes/java/testing/hamcrest/hamcresthaspropertytoassertj): Migrate Hamcrest `hasProperty` to AssertJ `hasFieldOrProperty` and `hasFieldOrPropertyWithValue`. 
* [org.openrewrite.quarkus.MigrateToQuarkus_v3_32_0](https://docs.openrewrite.org/recipes/quarkus/migratetoquarkus_v3_32_0): Quarkus update recipes to upgrade your application to 3.32.0. 
* [org.openrewrite.quarkus.spring.ConfigureNativeBuild](https://docs.openrewrite.org/recipes/quarkus/spring/configurenativebuild): Adds configuration and dependencies required for Quarkus native image compilation with GraalVM. Includes native profile configuration and reflection hints where needed. 
* [org.openrewrite.quarkus.spring.CustomizeQuarkusPluginGoals](https://docs.openrewrite.org/recipes/quarkus/spring/customizequarkusplugingoals): Allows customization of Quarkus Maven plugin goals. Adds or modifies the executions and goals for the quarkus-maven-plugin. 
* [org.openrewrite.quarkus.spring.CustomizeQuarkusVersion](https://docs.openrewrite.org/recipes/quarkus/spring/customizequarkusversion): Allows customization of the Quarkus BOM version used in the migration. By default uses 3.x (latest 3.x version), but can be configured to use a specific version. 
* [org.openrewrite.quarkus.spring.JpaEntityToPanacheEntity](https://docs.openrewrite.org/recipes/quarkus/spring/jpaentitytopanacheentity): Transforms standard JPA entities to extend Quarkus PanacheEntity, enabling the Active Record pattern with built-in CRUD operations. 
* [org.openrewrite.quarkus.spring.MigrateConfigurationProperties](https://docs.openrewrite.org/recipes/quarkus/spring/migrateconfigurationproperties): Migrates Spring Boot @ConfigurationProperties to Quarkus @ConfigMapping. This recipe converts configuration property classes to the native Quarkus pattern. 
* [org.openrewrite.quarkus.spring.MigrateEntitiesToPanache](https://docs.openrewrite.org/recipes/quarkus/spring/migrateentitiestopanache): Converts standard JPA entities to Quarkus Panache entities using the Active Record pattern. Entities will extend PanacheEntity and gain built-in CRUD operations. 
* [org.openrewrite.quarkus.spring.MigrateRequestParameterEdgeCases](https://docs.openrewrite.org/recipes/quarkus/spring/migraterequestparameteredgecases): Migrates additional Spring Web parameter annotations not covered by the main WebToJaxRs recipe. Includes @MatrixVariable, @CookieValue, and other edge cases. 
* [org.openrewrite.quarkus.spring.MigrateSpringActuator](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringactuator): Migrates Spring Boot Actuator to Quarkus SmallRye Health and Metrics extensions. Converts HealthIndicator implementations to Quarkus HealthCheck pattern. 
* [org.openrewrite.quarkus.spring.MigrateSpringBootDevTools](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringbootdevtools): Removes Spring Boot DevTools dependency and configuration. Quarkus has built-in dev mode with hot reload that replaces DevTools functionality. 
* [org.openrewrite.quarkus.spring.MigrateSpringCloudConfig](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringcloudconfig): Migrates Spring Cloud Config Client to Quarkus configuration sources. Converts bootstrap.yml/properties patterns to Quarkus config. 
* [org.openrewrite.quarkus.spring.MigrateSpringCloudServiceDiscovery](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringcloudservicediscovery): Migrates Spring Cloud Service Discovery annotations and configurations to Quarkus equivalents. Converts @EnableDiscoveryClient and related patterns to Quarkus Stork service discovery. 
* [org.openrewrite.quarkus.spring.MigrateSpringDataMongodb](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringdatamongodb): Migrates Spring Data MongoDB repositories to Quarkus MongoDB with Panache. Converts MongoRepository interfaces to PanacheMongoRepository pattern. 
* [org.openrewrite.quarkus.spring.MigrateSpringEvents](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringevents): Migrates Spring's event mechanism to CDI events. Converts ApplicationEventPublisher to CDI Event and @EventListener to @Observes. 
* [org.openrewrite.quarkus.spring.MigrateSpringTesting](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringtesting): Migrates Spring Boot test annotations and utilities to Quarkus test equivalents. Converts @SpringBootTest to @QuarkusTest, @MockBean to @InjectMock, etc. 
* [org.openrewrite.quarkus.spring.MigrateSpringTransactional](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringtransactional): Migrates Spring's @Transactional annotation to Jakarta's @Transactional. Maps propagation attributes to TxType and removes Spring-specific attributes. 
* [org.openrewrite.quarkus.spring.MigrateSpringValidation](https://docs.openrewrite.org/recipes/quarkus/spring/migratespringvalidation): Migrates Spring Boot validation to Quarkus Hibernate Validator. Adds the quarkus-hibernate-validator dependency and handles validation annotation imports. 
* [org.openrewrite.quarkus.spring.SpringEventListenerToObserves](https://docs.openrewrite.org/recipes/quarkus/spring/springeventlistenertoobserves): Transforms Spring's @EventListener method annotation to CDI's @Observes parameter annotation pattern. 
* [org.openrewrite.quarkus.spring.SpringHealthIndicatorToQuarkus](https://docs.openrewrite.org/recipes/quarkus/spring/springhealthindicatortoquarkus): Transforms Spring Boot Actuator `HealthIndicator` implementations to MicroProfile Health `HealthCheck` pattern used by Quarkus. 
* [org.openrewrite.recipe.rewrite-static-analysis.InlineDeprecatedMethods](https://docs.openrewrite.org/recipes/recipe/rewrite-static-analysis/inlinedeprecatedmethods): Automatically generated recipes to inline deprecated method calls that delegate to other methods in the same class. 
* [org.openrewrite.staticanalysis.RemoveTrailingWhitespace](https://docs.openrewrite.org/recipes/staticanalysis/removetrailingwhitespace): Remove trailing whitespace from the end of each line. Trailing whitespace is simply useless and should not stay in code. It may generate noise when comparing different versions of the same file. 
* [org.openrewrite.staticanalysis.SimplifyForLoopBoundaryComparison](https://docs.openrewrite.org/recipes/staticanalysis/simplifyforloopboundarycomparison): Replace `<=` with `<` in for loop conditions by adjusting the comparison operands. For example, `i <= n - 1` simplifies to `i < n`, and `i <= n` becomes `i < n + 1`. 

## Removed Recipes

* **io.moderne.prethink.ComprehendCode**: Use an LLM to generate descriptions for classes and methods in the codebase. Descriptions are cached based on source code checksums to avoid regenerating descriptions for unchanged code. 
* **io.moderne.prethink.ComprehendCodeTokenCounter**: Estimate the input token counts that would be sent to an LLM for method comprehension, without actually calling a model. Uses OpenAI's tokenizer locally. Outputs to the MethodDescriptions table with blank descriptions. 
* **io.moderne.prethink.ExtractCodingConventions**: Analyze the codebase to extract coding conventions including naming patterns, import organization, and documentation patterns. 
* **io.moderne.prethink.ExtractDependencyUsage**: Analyze the codebase to extract dependency usage patterns by examining which types from external libraries are actually used in the code. 
* **io.moderne.prethink.ExtractErrorPatterns**: Analyze the codebase to extract error handling patterns including exception types, handling strategies, and logging frameworks used. 
* **io.moderne.prethink.FindTestCoverage**: Map test methods to their corresponding implementation methods. Uses JavaType.Method matching to determine coverage relationships. Optionally generates AI summaries of what each test is verifying when LLM provider is configured. 
* **io.moderne.prethink.UpdatePrethinkContextNoAiStarter**: Generate Moderne Prethink context files with architectural discovery, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. This recipe does not require an LLM provider - use UpdatePrethinkContextStarter if you want AI-generated code comprehension and test summaries. 
* **io.moderne.prethink.UpdatePrethinkContextStarter**: Generate Moderne Prethink context files with AI-generated code comprehension, test coverage mapping, dependency inventory, and FINOS CALM architecture diagrams. Maps tests to implementation methods and optionally generates AI summaries of what each test verifies when LLM provider is configured. 
* **io.moderne.prethink.calm.FindCalmRelationships**: Discover method call relationships within the repository for building interaction diagrams. Captures all method-to-method calls between in-repo classes. Entity IDs are resolved by GenerateCalmArchitecture when building CALM relationships. 
* **io.moderne.prethink.calm.FindDataAssets**: Identify data assets including JPA entities, MongoDB documents, Java records, and DTOs in the application. 
* **io.moderne.prethink.calm.FindDatabaseConnections**: Identify database connections and data access patterns in the application. Detects JPA entities, Spring Data repositories, JDBC templates, and MyBatis mappers. 
* **io.moderne.prethink.calm.FindDeploymentArtifacts**: Identify deployment artifacts including Dockerfiles, docker-compose files, and Kubernetes manifests. 
* **io.moderne.prethink.calm.FindExternalServiceCalls**: Identify outbound HTTP calls to external services. Detects RestTemplate, WebClient, Feign clients, Apache HttpClient, OkHttp, and JAX-RS clients. 
* **io.moderne.prethink.calm.FindMessagingConnections**: Identify message queue producers and consumers. Detects Kafka, RabbitMQ, JMS, Spring Cloud Stream, and AWS SQS messaging. 
* **io.moderne.prethink.calm.FindProjectMetadata**: Extract project metadata (artifact ID, group ID, name, description) from Maven pom.xml files. 
* **io.moderne.prethink.calm.FindSecurityConfiguration**: Identify security configurations including Spring Security, OAuth2, and CORS settings. 
* **io.moderne.prethink.calm.FindServerConfiguration**: Extract server configuration (port, SSL, context path) from application.properties and application.yml files. 
* **io.moderne.prethink.calm.FindServiceComponents**: Identify service layer components (@Service, @Component, @Named) in the application. Excludes controllers and repositories which are handled by dedicated recipes. 
* **io.moderne.prethink.calm.FindServiceEndpoints**: Identify all REST/HTTP service endpoints exposed by the application. Supports Spring MVC, JAX-RS, Micronaut, and Quarkus REST endpoints. 
* **io.moderne.prethink.calm.GenerateCalmMermaidDiagram**: Generate a markdown file with a mermaid architecture diagram from discovered service endpoints, database connections, external service calls, and messaging connections. 
* **org.openrewrite.java.joda.time.JodaTimeRecipe**: Prefer the Java standard library over third-party usage of Joda Time. 
* **org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes**: Replace calls to `Logger.getLogger` with `LoggerFactory.getLogger`. 
* **org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes$GetLoggerClassCanonicalNameToLoggerFactoryRecipe**: Replace calls to `java.util.logging.Logger.getLogger(Some.class.getCanonicalName())` with `org.slf4j.LoggerFactory.getLogger(Some.class)`. 
* **org.openrewrite.java.logging.slf4j.JulGetLoggerToLoggerFactoryRecipes$GetLoggerClassNameToLoggerFactoryRecipe**: Replace calls to `java.util.logging.Logger.getLogger(Some.class.getName())` with `org.slf4j.LoggerFactory.getLogger(Some.class)`. 
* **org.openrewrite.staticanalysis.CustomImportOrder**: Updates and reorders Java import declarations according to group and order settings compatible with the Checkstyle 'CustomImportOrder' check. 

## Changed Recipes

* [org.openrewrite.java.format.AutoFormat](https://docs.openrewrite.org/recipes/java/format/autoformat) was changed:
  * Old Options:
    * `removeCustomLineBreaks: { type: Boolean, required: false }`
    * `style: { type: String, required: false }`
  * New Options:
    * `style: { type: String, required: false }`
* [org.openrewrite.javascript.change-import](https://docs.openrewrite.org/recipes/javascript/change-import) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `newAlias: { type: String, required: false }`
    * `newMember: { type: String, required: false }`
    * `newModule: { type: String, required: true }`
    * `oldMember: { type: String, required: true }`
    * `oldModule: { type: String, required: true }`
* [org.openrewrite.javascript.dependencies.add-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/add-dependency) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `packageName: { type: String, required: true }`
    * `scope: { type: String, required: false }`
    * `version: { type: String, required: true }`
* [org.openrewrite.javascript.dependencies.find-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/find-dependency) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `onlyDirect: { type: String, required: false }`
    * `packageName: { type: String, required: true }`
    * `version: { type: String, required: false }`
* [org.openrewrite.javascript.dependencies.upgrade-dependency-version](https://docs.openrewrite.org/recipes/javascript/dependencies/upgrade-dependency-version) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `newVersion: { type: String, required: true }`
    * `packageName: { type: String, required: true }`
* [org.openrewrite.javascript.dependencies.upgrade-transitive-dependency-version](https://docs.openrewrite.org/recipes/javascript/dependencies/upgrade-transitive-dependency-version) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `dependencyPath: { type: String, required: false }`
    * `newVersion: { type: String, required: true }`
    * `packageName: { type: String, required: true }`
* [org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences](https://docs.openrewrite.org/recipes/javascript/migrate/es6/modernize-octal-escape-sequences) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `useUnicodeEscapes: { type: String, required: false }`
* [org.openrewrite.node.dependency-vulnerability-check](https://docs.openrewrite.org/recipes/node/dependency-vulnerability-check) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `addOverrideComments: { type: String, required: false }`
    * `cvePattern: { type: String, required: false }`
    * `fixDeclaredVersions: { type: String, required: false }`
    * `maximumUpgradeDelta: { type: String, required: false }`
    * `minimumSeverity: { type: String, required: false }`
    * `preferDirectUpgrade: { type: String, required: false }`
    * `scope: { type: String, required: false }`
    * `transitiveFixStrategy: { type: String, required: false }`
* [org.openrewrite.node.security.remove-redundant-overrides](https://docs.openrewrite.org/recipes/node/security/remove-redundant-overrides) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `dryRun: { type: String, required: false }`
* [org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId](https://docs.openrewrite.org/recipes/maven/changemanageddependencygroupidandartifactid) was changed:
  * Old Options:
    * `newArtifactId: { type: String, required: true }`
    * `newGroupId: { type: String, required: true }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.prethink.UpdatePrethinkContext](https://docs.openrewrite.org/recipes/prethink/updateprethinkcontext) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `targetConfigFile: { type: String, required: false }`