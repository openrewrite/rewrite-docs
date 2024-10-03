# 8.34.0 release (2024-08-28)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [ai.timefold.solver.migration.v8.RemoveConstraintPackageRecipe](../recipes/ai/timefold/solver/migration/v8/removeconstraintpackagerecipe): Remove the use of constraint package from `asConstraint(package, name)`. 
* [io.quarkus.updates.core.quarkus313.UpdateTestOIDCAuthServerUrl](../recipes/io/quarkus/updates/core/quarkus313/updatetestoidcauthserverurl):  
* [org.apache.camel.updates.camel40.CamelMigrationRecipe](../recipes/org/apache/camel/updates/camel40/camelmigrationrecipe): Migrate `camel3` application to `camel4`. 
* [org.apache.camel.updates.camel40.ChangeManagedChoiceMBeanMethodName](../recipes/org/apache/camel/updates/camel40/changemanagedchoicembeanmethodname): MBeans now use a consistent method name of `extendedInformation`. 
* [org.apache.camel.updates.camel40.ChangeManagedFailoverLoadBalancerMBeanMethodName](../recipes/org/apache/camel/updates/camel40/changemanagedfailoverloadbalancermbeanmethodname): MBeans now use a consistent method name of `extendedInformation`. 
* [org.apache.camel.updates.camel40.ChangeTypes](../recipes/org/apache/camel/updates/camel40/changetypes): Change type of classes related to change of API. 
* [org.apache.camel.updates.camel40.UsePluginHelperForContextGetters](../recipes/org/apache/camel/updates/camel40/usepluginhelperforcontextgetters):  
* [org.apache.camel.updates.camel40.java.CamelAPIsRecipe](../recipes/org/apache/camel/updates/camel40/java/camelapisrecipe): Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs. 
* [org.apache.camel.updates.camel40.java.CamelBeanRecipe](../recipes/org/apache/camel/updates/camel40/java/camelbeanrecipe): Camel bean recipe. 
* [org.apache.camel.updates.camel40.java.CamelEIPRecipe](../recipes/org/apache/camel/updates/camel40/java/cameleiprecipe): The InOnly and InOut EIPs have been removed. Instead, use 'SetExchangePattern' or 'To' where you can specify the exchange pattern to use. 
* [org.apache.camel.updates.camel40.java.CamelHttpRecipe](../recipes/org/apache/camel/updates/camel40/java/camelhttprecipe): Camel Http Extension changes. 
* [org.apache.camel.updates.camel40.xml.CircuitBreakerXmlDslRecipe](../recipes/org/apache/camel/updates/camel40/xml/circuitbreakerxmldslrecipe): Apache Camel XML DSL Circuit Breaker migration from version 3.20 or higher to 4.0. 
* [org.apache.camel.updates.camel40.xml.XmlDslRecipe](../recipes/org/apache/camel/updates/camel40/xml/xmldslrecipe): Apache Camel XML DSL migration from version 3.20 or higher to 4.0. 
* [org.apache.camel.updates.camel40.yaml.CamelYamlRouteConfigurationSequenceRecipe](../recipes/org/apache/camel/updates/camel40/yaml/camelyamlrouteconfigurationsequencerecipe): Camel YAML changes. route-configuration children sequence is replaced with  mappingEntry (with special migration of "on-exception"). 
* [org.apache.camel.updates.camel40.yaml.CamelYamlStepsInFromRecipe](../recipes/org/apache/camel/updates/camel40/yaml/camelyamlstepsinfromrecipe): The YAML DSL backwards compatible mode in Camel 3.14 or older, which allowed 'steps' to be defined as a child of 'route' has been removed. 
* [org.apache.camel.updates.camel41.CamelCoreRecipe](../recipes/org/apache/camel/updates/camel41/camelcorerecipe): Apache Camel Core migration from version 4.0 to 4.1. 
* [org.apache.camel.updates.camel41.TracingTag](../recipes/org/apache/camel/updates/camel41/tracingtag): The Tag Enum containing constants for tagging spans has been deprecated. Instead, use constants from the TagConstants. 
* [org.apache.camel.updates.camel41.XmlDslRecipe](../recipes/org/apache/camel/updates/camel41/xmldslrecipe): Apache Camel XML DSL migration from version 4.0 to 4.1. 
* [org.apache.camel.updates.camel41.YamlDslRecipe](../recipes/org/apache/camel/updates/camel41/yamldslrecipe): If inlined bean is created, parameters `type` and `beanType` has bean changed. 
* [org.apache.camel.updates.camel42.CamelMainDebugger](../recipes/org/apache/camel/updates/camel42/camelmaindebugger): The option camel.main.debugger has been renamed to camel.debug.enabled. 
* [org.apache.camel.updates.camel42.CamelSagaRecipe](../recipes/org/apache/camel/updates/camel42/camelsagarecipe): Apache Camel Core migration from version 4.0 to 4.1. 
* [org.apache.camel.updates.camel43.CamelResequenceEIPXmlRecipe](../recipes/org/apache/camel/updates/camel43/camelresequenceeipxmlrecipe): Batch and stream attributes were renamed in Resequence EIP XML DSL. 
* [org.apache.camel.updates.camel43.CamelThrottleEIPRecipe](../recipes/org/apache/camel/updates/camel43/camelthrottleeiprecipe): Apache Camel Core migration from version 4.0 to 4.1. 
* [org.apache.camel.updates.camel43.KafkaMetadata](../recipes/org/apache/camel/updates/camel43/kafkametadata): The header name for the List metadata has changed also the dsl method for metadata changed. 
* [org.apache.camel.updates.camel43.StateRepository](../recipes/org/apache/camel/updates/camel43/staterepository): Moved classes MemoryStateRepository and FileStateRepositor from camel-base-engine to  camel-support. 
* [org.apache.camel.updates.camel44.CamelCoreRecipe](../recipes/org/apache/camel/updates/camel44/camelcorerecipe): Apache Camel Core migration from version 4.3 to 4.4. 
* [org.apache.camel.updates.camel44.CamelMigrationRecipe](../recipes/org/apache/camel/updates/camel44/camelmigrationrecipe): Migrates `camel 4.0` application to `camel 4.4`. 
* [org.apache.camel.updates.camel44.DefaultJsonSchemaLoader](../recipes/org/apache/camel/updates/camel44/defaultjsonschemaloader): Replaces deprecated class with its successor. 
* [org.apache.camel.updates.camel44.RouteControllerProperties](../recipes/org/apache/camel/updates/camel44/routecontrollerproperties):  
* [org.apache.camel.updates.customRecipes.ChangePropertyKeyWithCaseChange](../recipes/org/apache/camel/updates/customrecipes/changepropertykeywithcasechange): Change prefix of property with Camel case 
* [org.apache.camel.updates.customRecipes.MoveGetterToPluginHelper](../recipes/org/apache/camel/updates/customrecipes/movegettertopluginhelper): Move getter from context to PluginHelper 
* [org.openrewrite.csharp.dependencies.DependencyInsight](../recipes/csharp/dependencies/dependencyinsight): Finds dependencies in `*.csproj` and `packages.config`. 
* [org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck](../recipes/csharp/dependencies/dependencyvulnerabilitycheck): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable. 
* [org.openrewrite.csharp.dependencies.UpgradeDependencyVersion](../recipes/csharp/dependencies/upgradedependencyversion): Upgrades dependencies in `*.csproj` and `packages.config`. 
* [org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations](../recipes/java/jspecify/migratefromopenrewriteannotations): Migrate from OpenRewrite's JSR-305 meta-annotations to JSpecify. 
* [org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods](../recipes/java/migrate/replacelocalizedstreammethods): Replaces `Runtime.getLocalizedInputStream(InputStream)` and `Runtime.getLocalizedOutputStream(OutputStream)` with their direct arguments. This modification is made because the previous implementation of `getLocalizedInputStream` and `getLocalizedOutputStream` merely returned the arguments provided. 
* org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullWithMessageToObjectsRequireNonNullRecipe: Migrate from Guava `Preconditions.checkNotNull` to Java 8 `java.util.Objects.requireNonNull`. 
* [org.openrewrite.java.spring.batch.ListenerSupportClassToInterface](../recipes/java/spring/batch/listenersupportclasstointerface): As of 5.0 `*Listener` interfaces default methods (made possible by a Java 8 baseline) can be implemented directly without the need for the adapter. 
* [org.openrewrite.java.spring.boot3.RemoveSolrAutoConfigurationExclude](../recipes/java/spring/boot3/removesolrautoconfigurationexclude): `SolrAutoConfiguration` was removed in Spring Boot 3; remove references to it from exclusions on annotations. 
* [org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout](../recipes/java/spring/framework/httpcomponentsclienthttprequestfactoryreadtimeout): `setReadTimeout(..)` was removed in Spring Framework 6.1. 
* [org.openrewrite.java.spring.test.SpringRulesToJUnitExtension](../recipes/java/spring/test/springrulestojunitextension): Replace JUnit 4's `SpringClassRule` and `SpringMethodRule` with JUnit 5's `SpringExtension` or rely on an existing `@SpringBootTest`. 
* [org.openrewrite.java.springdoc.ReplaceSpringFoxDependencies](../recipes/java/springdoc/replacespringfoxdependencies): Replace SpringFox Dependencies. 
* [org.openrewrite.java.springdoc.SpringFoxToSpringDoc](../recipes/java/springdoc/springfoxtospringdoc): Migrate from SpringFox Swagger to SpringDoc and OpenAPI. 
* [org.openrewrite.java.testing.assertj.CollapseConsecutiveAssertThatStatements](../recipes/java/testing/assertj/collapseconsecutiveassertthatstatements): Collapse consecutive `assertThat` statements into single `assertThat` chained statement. This recipe ignores `assertThat` statements that have method invocation as parameter. 
* [org.openrewrite.java.testing.junit5.AddHamcrestJUnitDependency](../recipes/java/testing/junit5/addhamcrestjunitdependency): Add Hamcrest JUnit dependency only if JUnit 4's `assertThat` or `assumeThat` is used. 
* [org.openrewrite.java.testing.mockito.RetainStrictnessWarn](../recipes/java/testing/mockito/retainstrictnesswarn): Migrating from JUnit 4 to 5 [changes the default strictness](https://stackoverflow.com/a/53234137/53444) of the mocks from `WARN` to `STRICT_STUBS`. To prevent tests from failing we restore the original behavior by adding `@MockitoSettings(strictness = Strictness.WARN)`. 
* [org.openrewrite.openapi.swagger.UseJakartaSwaggerArtifacts](../recipes/openapi/swagger/usejakartaswaggerartifacts): Migrate from javax Swagger artifacts to Jakarta versions. 
* [org.openrewrite.staticanalysis.java.MoveFieldAnnotationToType](../recipes/staticanalysis/java/movefieldannotationtotype): Annotations that could be applied to either a field or a type are better applied to the type, because similar annotations may be more restrictive, leading to compile errors like 'scoping construct cannot be annotated with type-use annotation' when migrating later. 

## Removed Recipes

* **io.quarkus.updates.camel.camel40.UsePluginHelperForContextGetters**:  
* **io.quarkus.updates.camel.camel40.java.CamelAPIsRecipe**: Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs. 
* **io.quarkus.updates.camel.camel40.java.CamelBeanRecipe**: Camel bean recipe. 
* **io.quarkus.updates.camel.camel40.java.CamelEIPRecipe**: The InOnly and InOut EIPs have been removed. Instead, use 'SetExchangePattern' or 'To' where you can specify the exchange pattern to use. 
* **io.quarkus.updates.camel.camel40.java.CamelHttpRecipe**: Camel Http Extension changes. 
* **io.quarkus.updates.camel.camel40.xml.CircuitBreakerXmlDslRecipe**: Apache Camel XML DSL Circuit Breaker migration from version 3.20 or higher to 4.0. 
* **io.quarkus.updates.camel.camel40.xml.XmlDslRecipe**: Apache Camel XML DSL migration from version 3.20 or higher to 4.0. 
* **io.quarkus.updates.camel.camel40.yaml.CamelQuarkusYamlRouteConfigurationSequenceRecipe**: Camel YAML changes. route-configuration children sequence is replaced with  mappingEntry (with special migration of "on-exception"). 
* **io.quarkus.updates.camel.camel40.yaml.CamelQuarkusYamlStepsInFromRecipe**: The YAML DSL backwards compatible mode in Camel 3.14 or older, which allowed 'steps' to be defined as a child of 'route' has been removed. 
* **io.quarkus.updates.camel.camel41.CamelCoreRecipe**: Apache Camel Core migration from version 4.0 to 4.1. 
* **io.quarkus.updates.camel.camel41.TracingTag**: The Tag Enum containing constants for tagging spans has been deprecated. Instead, use constants from the TagConstants. 
* **io.quarkus.updates.camel.camel41.XmlDslRecipe**: Apache Camel XML DSL migration from version 4.0 to 4.1. 
* **io.quarkus.updates.camel.camel41.YamlDslRecipe**: If inlined bean is created, parameters `type` and `beanType` has bean changed. 
* **io.quarkus.updates.camel.camel42.CamelMainDebugger**: The option camel.main.debugger has been renamed to camel.debug.enabled. 
* **io.quarkus.updates.camel.camel42.CamelSagaRecipe**: Apache Camel Core migration from version 4.0 to 4.1. 
* **io.quarkus.updates.camel.camel43.CamelResequenceEIPXmlRecipe**: Batch and stream attributes were renamed in Resequence EIP XML DSL. 
* **io.quarkus.updates.camel.camel43.CamelThrottleEIPRecipe**: Apache Camel Core migration from version 4.0 to 4.1. 
* **io.quarkus.updates.camel.camel43.KafkaMetadata**: The header name for the List metadata has changed also the dsl method for metadata changed. 
* **io.quarkus.updates.camel.camel43.StateRepository**: Moved classes MemoryStateRepository and FileStateRepositor from camel-base-engine to  camel-support. 
* **io.quarkus.updates.camel.camel44.CamelCoreRecipe**: Apache Camel Core migration from version 4.3 to 4.4. 
* **io.quarkus.updates.camel.camel44.DefaultJsonSchemaLoader**: Replaces deprecated class with its successor. 
* **io.quarkus.updates.camel.camel44.RouteControllerProperties**:  
* **io.quarkus.updates.camel.customRecipes.ChangePropertyKeyWithCaseChange**: Change prefix of property with Camel case 
* **io.quarkus.updates.camel.customRecipes.MoveGetterToPluginHelper**: Move getter from context to PluginHelper 
* **io.quarkus.updates.core.quarkus313.WithTestResource**:  
* **io.quarkus.updates.core.quarkus313.WithTestResourceRestrictToAnnotatedClassValue**:  
* **org.openrewrite.java.camel.migrate.ChangeManagedChoiceMBeanMethodName**: MBeans now use a consistent method name of `extendedInformation`. 
* **org.openrewrite.java.camel.migrate.ChangeManagedFailoverLoadBalancerMBeanMethodName**: MBeans now use a consistent method name of `extendedInformation`. 
* **org.openrewrite.java.camel.migrate.ChangeTypes**: Change type of classes related to change of API. 
* **org.openrewrite.java.migrate.guava.PreferJavaUtilObjectsRequireNonNull**: Prefer `java.util.Objects#requireNonNull` instead of using `com.google.common.base.Preconditions#checkNotNull`. 
* **org.openrewrite.java.spring.batch.ImplementChunkListenerDirectly**: As of 5.0 `ChunkListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* **org.openrewrite.java.spring.batch.ImplementJobExecutionListenerDirectly**: As of 5.0 `JobExecutionListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* **org.openrewrite.java.spring.batch.ImplementRepeatListenerDirectly**: As of 5.0 `RepeatListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* **org.openrewrite.java.spring.batch.ImplementSkipListenerSupportDirectly**: As of 5.0 `SkipListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* **org.openrewrite.java.spring.batch.ImplementStepExecutionListenerDirectly**: As of 5.0 `StepExecutionListener` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 

## Changed Recipes

* [org.openrewrite.maven.ChangePluginGroupIdAndArtifactId](../recipes/maven/changeplugingroupidandartifactid) was changed:
  * Old Options:
    * `newArtifact: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
  * New Options:
    * `newArtifact: { type: String, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`