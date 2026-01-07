# 8.34.0 release (2024-08-28)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* ai.timefold.solver.migration.v8.RemoveConstraintPackageRecipe: Remove the use of constraint package from `asConstraint(package, name)`. 
* io.quarkus.updates.core.quarkus313.UpdateTestOIDCAuthServerUrl:  
* org.apache.camel.updates.camel40.CamelMigrationRecipe: Migrate `camel3` application to `camel4`. 
* org.apache.camel.updates.camel40.ChangeManagedChoiceMBeanMethodName: MBeans now use a consistent method name of `extendedInformation`. 
* org.apache.camel.updates.camel40.ChangeManagedFailoverLoadBalancerMBeanMethodName: MBeans now use a consistent method name of `extendedInformation`. 
* org.apache.camel.updates.camel40.ChangeTypes: Change type of classes related to change of API. 
* org.apache.camel.updates.camel40.UsePluginHelperForContextGetters:  
* org.apache.camel.updates.camel40.java.CamelAPIsRecipe: Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs. 
* org.apache.camel.updates.camel40.java.CamelBeanRecipe: Camel bean recipe. 
* org.apache.camel.updates.camel40.java.CamelEIPRecipe: The InOnly and InOut EIPs have been removed. Instead, use 'SetExchangePattern' or 'To' where you can specify the exchange pattern to use. 
* org.apache.camel.updates.camel40.java.CamelHttpRecipe: Camel Http Extension changes. 
* org.apache.camel.updates.camel40.xml.CircuitBreakerXmlDslRecipe: Apache Camel XML DSL Circuit Breaker migration from version 3.20 or higher to 4.0. 
* org.apache.camel.updates.camel40.xml.XmlDslRecipe: Apache Camel XML DSL migration from version 3.20 or higher to 4.0. 
* org.apache.camel.updates.camel40.yaml.CamelYamlRouteConfigurationSequenceRecipe: Camel YAML changes. route-configuration children sequence is replaced with  mappingEntry (with special migration of "on-exception"). 
* org.apache.camel.updates.camel40.yaml.CamelYamlStepsInFromRecipe: The YAML DSL backwards compatible mode in Camel 3.14 or older, which allowed 'steps' to be defined as a child of 'route' has been removed. 
* org.apache.camel.updates.camel41.CamelCoreRecipe: Apache Camel Core migration from version 4.0 to 4.1. 
* org.apache.camel.updates.camel41.TracingTag: The Tag Enum containing constants for tagging spans has been deprecated. Instead, use constants from the TagConstants. 
* org.apache.camel.updates.camel41.XmlDslRecipe: Apache Camel XML DSL migration from version 4.0 to 4.1. 
* org.apache.camel.updates.camel41.YamlDslRecipe: If inlined bean is created, parameters `type` and `beanType` has bean changed. 
* org.apache.camel.updates.camel42.CamelMainDebugger: The option camel.main.debugger has been renamed to camel.debug.enabled. 
* org.apache.camel.updates.camel42.CamelSagaRecipe: Apache Camel Core migration from version 4.0 to 4.1. 
* org.apache.camel.updates.camel43.CamelResequenceEIPXmlRecipe: Batch and stream attributes were renamed in Resequence EIP XML DSL. 
* org.apache.camel.updates.camel43.CamelThrottleEIPRecipe: Apache Camel Core migration from version 4.0 to 4.1. 
* org.apache.camel.updates.camel43.KafkaMetadata: The header name for the List metadata has changed also the dsl method for metadata changed. 
* org.apache.camel.updates.camel43.StateRepository: Moved classes MemoryStateRepository and FileStateRepositor from camel-base-engine to  camel-support. 
* org.apache.camel.updates.camel44.CamelCoreRecipe: Apache Camel Core migration from version 4.3 to 4.4. 
* org.apache.camel.updates.camel44.CamelMigrationRecipe: Migrates `camel 4.0` application to `camel 4.4`. 
* org.apache.camel.updates.camel44.DefaultJsonSchemaLoader: Replaces deprecated class with its successor. 
* org.apache.camel.updates.camel44.RouteControllerProperties:  
* org.apache.camel.updates.customRecipes.ChangePropertyKeyWithCaseChange: Change prefix of property with Camel case 
* org.apache.camel.updates.customRecipes.MoveGetterToPluginHelper: Move getter from context to PluginHelper 
* org.openrewrite.csharp.dependencies.DependencyInsight: Finds dependencies in `*.csproj` and `packages.config`. 
* org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck: This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the GitHub Security Advisory Database, which aggregates vulnerability data from several public databases, including the National Vulnerability Database maintained by the United States government. Dependencies following Semantic Versioning will see their _patch_ version updated where applicable. 
* org.openrewrite.csharp.dependencies.UpgradeDependencyVersion: Upgrades dependencies in `*.csproj` and `packages.config`. 
* org.openrewrite.java.jspecify.MigrateFromOpenRewriteAnnotations: Migrate from OpenRewrite's JSR-305 meta-annotations to JSpecify. 
* org.openrewrite.java.migrate.ReplaceLocalizedStreamMethods: Replaces `Runtime.getLocalizedInputStream(InputStream)` and `Runtime.getLocalizedOutputStream(OutputStream)` with their direct arguments. This modification is made because the previous implementation of `getLocalizedInputStream` and `getLocalizedOutputStream` merely returned the arguments provided. 
* org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullWithMessageToObjectsRequireNonNullRecipe: Migrate from Guava `Preconditions.checkNotNull` to Java 8 `java.util.Objects.requireNonNull`. 
* org.openrewrite.java.spring.batch.ListenerSupportClassToInterface: As of 5.0 `*Listener` interfaces default methods (made possible by a Java 8 baseline) can be implemented directly without the need for the adapter. 
* org.openrewrite.java.spring.boot3.RemoveSolrAutoConfigurationExclude: `SolrAutoConfiguration` was removed in Spring Boot 3; remove references to it from exclusions on annotations. 
* org.openrewrite.java.spring.framework.HttpComponentsClientHttpRequestFactoryReadTimeout: `setReadTimeout(..)` was removed in Spring Framework 6.1. 
* org.openrewrite.java.spring.test.SpringRulesToJUnitExtension: Replace JUnit 4's `SpringClassRule` and `SpringMethodRule` with JUnit 5's `SpringExtension` or rely on an existing `@SpringBootTest`. 
* org.openrewrite.java.springdoc.ReplaceSpringFoxDependencies: Replace SpringFox Dependencies. 
* org.openrewrite.java.springdoc.SpringFoxToSpringDoc: Migrate from SpringFox Swagger to SpringDoc and OpenAPI. 
* org.openrewrite.java.testing.assertj.CollapseConsecutiveAssertThatStatements: Collapse consecutive `assertThat` statements into single `assertThat` chained statement. This recipe ignores `assertThat` statements that have method invocation as parameter. 
* org.openrewrite.java.testing.junit5.AddHamcrestJUnitDependency: Add Hamcrest JUnit dependency only if JUnit 4's `assertThat` or `assumeThat` is used. 
* org.openrewrite.java.testing.mockito.RetainStrictnessWarn: Migrating from JUnit 4 to 5 changes the default strictness of the mocks from `WARN` to `STRICT_STUBS`. To prevent tests from failing we restore the original behavior by adding `@MockitoSettings(strictness = Strictness.WARN)`. 
* org.openrewrite.openapi.swagger.UseJakartaSwaggerArtifacts: Migrate from javax Swagger artifacts to Jakarta versions. 
* org.openrewrite.staticanalysis.java.MoveFieldAnnotationToType: Annotations that could be applied to either a field or a type are better applied to the type, because similar annotations may be more restrictive, leading to compile errors like 'scoping construct cannot be annotated with type-use annotation' when migrating later. 

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

* org.openrewrite.maven.ChangePluginGroupIdAndArtifactId was changed:
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