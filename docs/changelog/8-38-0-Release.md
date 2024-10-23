# 8.38.0 release (2024-10-23)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [org.apache.camel.upgrade.camel40.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/camelmigrationrecipe): Migrate `camel3` application to `camel4`. 
* [org.apache.camel.upgrade.camel40.ChangeManagedChoiceMBeanMethodName](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/changemanagedchoicembeanmethodname): MBeans now use a consistent method name of `extendedInformation`. 
* [org.apache.camel.upgrade.camel40.ChangeManagedFailoverLoadBalancerMBeanMethodName](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/changemanagedfailoverloadbalancermbeanmethodname): MBeans now use a consistent method name of `extendedInformation`. 
* [org.apache.camel.upgrade.camel40.ChangeTypes](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/changetypes): Change type of classes related to change of API. 
* [org.apache.camel.upgrade.camel40.UsePluginHelperForContextGetters](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/usepluginhelperforcontextgetters):  
* [org.apache.camel.upgrade.camel40.java.CamelAPIsRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/java/camelapisrecipe): Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs. 
* [org.apache.camel.upgrade.camel40.java.CamelBeanRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/java/camelbeanrecipe): Camel bean recipe. 
* [org.apache.camel.upgrade.camel40.java.CamelEIPRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/java/cameleiprecipe): The InOnly and InOut EIPs have been removed. Instead, use 'SetExchangePattern' or 'To' where you can specify the exchange pattern to use. 
* [org.apache.camel.upgrade.camel40.java.CamelHttpRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/java/camelhttprecipe): Camel Http Extension changes. 
* [org.apache.camel.upgrade.camel40.xml.CircuitBreakerXmlDslRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/xml/circuitbreakerxmldslrecipe): Apache Camel XML DSL Circuit Breaker migration from version 3.20 or higher to 4.0. 
* [org.apache.camel.upgrade.camel40.xml.XmlDslRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/xml/xmldslrecipe): Apache Camel XML DSL migration from version 3.20 or higher to 4.0. 
* [org.apache.camel.upgrade.camel40.yaml.CamelYamlRouteConfigurationSequenceRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/yaml/camelyamlrouteconfigurationsequencerecipe): Camel YAML changes. route-configuration children sequence is replaced with  mappingEntry (with special migration of "on-exception"). 
* [org.apache.camel.upgrade.camel40.yaml.CamelYamlStepsInFromRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel40/yaml/camelyamlstepsinfromrecipe): The YAML DSL backwards compatible mode in Camel 3.14 or older, which allowed 'steps' to be defined as a child of 'route' has been removed. 
* [org.apache.camel.upgrade.camel41.CamelCoreRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel41/camelcorerecipe): Apache Camel Core migration from version 4.0 to 4.1. 
* [org.apache.camel.upgrade.camel41.TracingTag](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel41/tracingtag): The Tag Enum containing constants for tagging spans has been deprecated. Instead, use constants from the TagConstants. 
* [org.apache.camel.upgrade.camel41.XmlDslRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel41/xmldslrecipe): Apache Camel XML DSL migration from version 4.0 to 4.1. 
* [org.apache.camel.upgrade.camel41.YamlDslRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel41/yamldslrecipe): If inlined bean is created, parameters `type` and `beanType` has bean changed. 
* [org.apache.camel.upgrade.camel42.CamelMainDebugger](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel42/camelmaindebugger): The option camel.main.debugger has been renamed to camel.debug.enabled. 
* [org.apache.camel.upgrade.camel42.CamelSagaRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel42/camelsagarecipe): Apache Camel Core migration from version 4.0 to 4.1. 
* [org.apache.camel.upgrade.camel43.CamelResequenceEIPXmlRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel43/camelresequenceeipxmlrecipe): Batch and stream attributes were renamed in Resequence EIP XML DSL. 
* [org.apache.camel.upgrade.camel43.CamelThrottleEIPRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel43/camelthrottleeiprecipe): Apache Camel Core migration from version 4.0 to 4.1. 
* [org.apache.camel.upgrade.camel43.KafkaMetadata](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel43/kafkametadata): The header name for the List metadata has changed also the dsl method for metadata changed. 
* [org.apache.camel.upgrade.camel43.StateRepository](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel43/staterepository): Moved classes MemoryStateRepository and FileStateRepositor from camel-base-engine to  camel-support. 
* [org.apache.camel.upgrade.camel44.CamelCoreRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel44/camelcorerecipe): Apache Camel Core migration from version 4.3 to 4.4. 
* [org.apache.camel.upgrade.camel44.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel44/camelmigrationrecipe): Migrates `camel 4.0` application to `camel 4.4`. 
* [org.apache.camel.upgrade.camel44.DefaultJsonSchemaLoader](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel44/defaultjsonschemaloader): Replaces deprecated class with its successor. 
* [org.apache.camel.upgrade.camel44.RouteControllerProperties](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel44/routecontrollerproperties):  
* [org.apache.camel.upgrade.camel45.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel45/camelmigrationrecipe): Migrates `camel 4.4` application to `camel 4.5`. 
* [org.apache.camel.upgrade.camel45.TraceProperties](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel45/traceproperties):  
* [org.apache.camel.upgrade.camel45.UseExtendedCamelContextGetters](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel45/useextendedcamelcontextgetters):  
* [org.apache.camel.upgrade.camel45.renamedClasses](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel45/renamedclasses): Renamed classes for elasticsearch,opensearch and spring regis. 
* [org.apache.camel.upgrade.camel46.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel46/camelmigrationrecipe): Migrates `camel 4.5` application to `camel 4.6`. 
* [org.apache.camel.upgrade.camel46.XmlDsl46Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel46/xmldsl46recipe): Apache Camel XML DSL migration from version 3.20 or higher to 4.0. 
* [org.apache.camel.upgrade.camel46.YamlDsl46Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel46/yamldsl46recipe): Each bean property is changed to bean properties. 
* [org.apache.camel.upgrade.camel46.renamedClasses](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel46/renamedclasses): Renamed classes for elasticsearch,opensearch and spring regis. 
* [org.apache.camel.upgrade.camel46.renamedDependencies](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel46/renameddependencies): Renamed dependencies. 
* [org.apache.camel.upgrade.camel46.yamStreamCaching](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel46/yamstreamcaching): Renamed streamCaching to streamCache on the route. 
* [org.apache.camel.upgrade.camel47.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel47/camelmigrationrecipe): Migrates `camel 4.6` application to `camel 4.7`. 
* [org.apache.camel.upgrade.camel47.Java47Recipes](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel47/java47recipes): Change of headers with embedded HTTP server (consumer). The headers CamelHttpServletRequest and CamelHttpServletResponse has been removed.. 
* [org.apache.camel.upgrade.camel47.XmlDsl47Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel47/xmldsl47recipe): Apache Camel XML DSL migration from version 4.6 o 4.7. 
* [org.apache.camel.upgrade.camel47.YamlDsl47Recipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel47/yamldsl47recipe): Apache Camel YML DSL migration from version 4.6 o 4.7. 
* [org.apache.camel.upgrade.camel47.removedDependencies](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel47/removeddependencies): Moved the camel-cloudevents api into camel-api and removed the camel-cloudevents. 
* [org.apache.camel.upgrade.camel47.renamedClasses](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel47/renamedclasses): Renamed classes for API. 
* [org.apache.camel.upgrade.customRecipes.ChangePropertyKeyWithCaseChange](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/changepropertykeywithcasechange): Change prefix of property with Camel case 
* [org.apache.camel.upgrade.customRecipes.MoveGetterToExtendedCamelContext](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/movegettertoextendedcamelcontext): Move getter from context to ExtendedCamelContext 
* [org.apache.camel.upgrade.customRecipes.MoveGetterToPluginHelper](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/movegettertopluginhelper): Move getter from context to PluginHelper 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_7_2](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_7_2): Recipes to migrate to Android Gradle Plugin version 7.2. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_7_3](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_7_3): Recipes to migrate to Android Gradle Plugin version 7.3. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_7_4](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_7_4): Recipes to migrate to Android Gradle Plugin version 7.4. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_0](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_0): Recipes to migrate to Android Gradle Plugin version 8.0. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_1](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_1): Recipes to migrate to Android Gradle Plugin version 8.1. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_2](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_2): Recipes to migrate to Android Gradle Plugin version 8.2. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_3](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_3): Recipes to migrate to Android Gradle Plugin version 8.3. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_4](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_4): Recipes to migrate to Android Gradle Plugin version 8.4. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_5](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_5): Recipes to migrate to Android Gradle Plugin version 8.5. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_6](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_6): Recipes to migrate to Android Gradle Plugin version 8.6. 
* [org.openrewrite.android.MigrateToAndroidGradlePlugin_8_7](https://docs.openrewrite.org/recipes/android/migratetoandroidgradleplugin_8_7): Recipes to migrate to Android Gradle Plugin version 8.7. 
* [org.openrewrite.android.UpgradeAndroidGradlePluginVersion](https://docs.openrewrite.org/recipes/android/upgradeandroidgradlepluginversion): Upgrade Android Gradle Plugin (AGP) version and update the Gradle Wrapper version. Compatible versions are published in the [AGP release notes](https://developer.android.com/build/releases/gradle-plugin). 
* [org.openrewrite.java.jackson.codehaus.RemoveDoublyAnnotatedCodehausAnnotations](https://docs.openrewrite.org/recipes/java/jackson/codehaus/removedoublyannotatedcodehausannotations): Remove Codehaus Jackson annotations if they are doubly annotated with Jackson annotations from the `com.fasterxml.jackson` package. 
* [org.openrewrite.java.jspecify.MigrateFromSpringFrameworkAnnotations](https://docs.openrewrite.org/recipes/java/jspecify/migratefromspringframeworkannotations): Migrate from Spring Framework annotations to JSpecify. 
* [org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullWithMessageToObjectsRequireNonNullMessageTypeObjectRecipe](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavarefasterrecipesusdpreconditionschecknotnullwithmessagetoobjectsrequirenonnullmessagetypeobjectrecipe): Migrate from Guava `Preconditions.checkNotNull` to Java 8 `java.util.Objects.requireNonNull`. 
* [org.openrewrite.java.migrate.jakarta.UpdateJakartaAnnotations2](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejakartaannotations2): Update Jakarta EE annotation Dependencies to 2.1.x. 
* [org.openrewrite.java.spring.boot3.MigrateSapCfJavaLoggingSupport](https://docs.openrewrite.org/recipes/java/spring/boot3/migratesapcfjavaloggingsupport): Migrate SAP cloud foundry logging support from `cf-java-logging-support-servlet` to `cf-java-logging-support-servlet-jakarta`, to use Jakarta with Spring Boot 3. 
* [org.openrewrite.java.spring.framework.MigrateResponseStatusExceptionGetStatusCodeMethod](https://docs.openrewrite.org/recipes/java/spring/framework/migrateresponsestatusexceptiongetstatuscodemethod): Migrate Spring Framework 5.3's `ResponseStatusException` method `getStatus()` to Spring Framework 6's `getStatusCode()`. 
* [org.openrewrite.java.testing.mockito.SimplifyMockitoVerifyWhenGiven](https://docs.openrewrite.org/recipes/java/testing/mockito/simplifymockitoverifywhengiven): Fixes Sonar issue `java:S6068`: Call to Mockito method "verify", "when" or "given" should be simplified. 
* [org.openrewrite.maven.liberty.AddOpenLibertyPlugin](https://docs.openrewrite.org/recipes/maven/liberty/addopenlibertyplugin): This recipe adds the Liberty Maven plugin, which provides several goals for managing a Liberty server and applications. 
* [software.amazon.awssdk.v2migration.AddCommentToMethod](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/addcommenttomethod): Add a comment to a method. 
* [software.amazon.awssdk.v2migration.AwsSdkJavaV1ToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/awssdkjavav1tov2): This recipe will apply changes required for migrating from the AWS SDK for Java v1 to the AWS SDK for Java v2. 
* [software.amazon.awssdk.v2migration.ChangeAuthTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changeauthtypes): Change auth related classes from v1 to v2. 
* [software.amazon.awssdk.v2migration.ChangeConfigTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changeconfigtypes): Change config related classes from v1 to v2. 
* [software.amazon.awssdk.v2migration.ChangeExceptionTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changeexceptiontypes): Change SDK Exception types from v1 to v2. 
* [software.amazon.awssdk.v2migration.ChangeRegionTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changeregiontypes): Change region related classes from v1 to v2. 
* [software.amazon.awssdk.v2migration.ChangeSdkCoreTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changesdkcoretypes): Change SDK core types from v1 to v2. 
* [software.amazon.awssdk.v2migration.ChangeSdkType](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changesdktype): Change AWS SDK for Java v1 types to v2 equivalents. 
* [software.amazon.awssdk.v2migration.ConstructorToFluent](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/constructortofluent): A recipe that takes constructor arguments and moves them to the specified fluent setters on the object. 
* [software.amazon.awssdk.v2migration.EnumCasingToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/enumcasingtov2): Transforms V1 enum constants from pascal case to screaming snake case for v2. 
* [software.amazon.awssdk.v2migration.EnumGettersToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/enumgetterstov2): Change v1 enum getters to v2. 
* [software.amazon.awssdk.v2migration.HttpSettingsToHttpClient](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/httpsettingstohttpclient): Move HTTP settings from the ClientOverrideConfiguration to ApacheHttpClient for sync SDK client and NettyNioAsyncHttpClient for async SDK client. 
* [software.amazon.awssdk.v2migration.NewClassToBuilder](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/newclasstobuilder): Transforms 'new' expression for generated model, client objects and client config related objects to the equivalent builder()..build() expression in V2. 
* [software.amazon.awssdk.v2migration.NewClassToBuilderPattern](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/newclasstobuilderpattern): Transform the creation of a class using 'new' to builder pattern. 
* [software.amazon.awssdk.v2migration.NewClassToStaticFactory](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/newclasstostaticfactory): Transforms 'new' expression for client config related objects to the equivalent .create() expression in V2. 
* [software.amazon.awssdk.v2migration.NumberToDuration](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/numbertoduration): Convert the method parameter from numeric types to duration. 
* [software.amazon.awssdk.v2migration.S3MethodsConstructorToFluent](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3methodsconstructortofluent): Change S3 method constructors to fluent builder calls. 
* [software.amazon.awssdk.v2migration.S3NonStreamingRequestToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3nonstreamingrequesttov2): Transform usage of V1 S3 non-streaming requests such as CreateBucket and DeleteBucket to V2. 
* [software.amazon.awssdk.v2migration.S3StreamingRequestToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3streamingrequesttov2): Transform usage of V1 S3 streaming requests such as PutObject to V2. 
* [software.amazon.awssdk.v2migration.S3StreamingResponseToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3streamingresponsetov2): Transform usage of V1 S3Object to V2. 
* [software.amazon.awssdk.v2migration.UpgradeSdkDependencies](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/upgradesdkdependencies): Change v1 Maven/Gradle dependencies to v2. 
* [software.amazon.awssdk.v2migration.V1BuilderVariationsToV2Builder](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/v1buildervariationstov2builder): Transforms V1 builder variations to builder() 
* [software.amazon.awssdk.v2migration.V1GetterToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/v1gettertov2): Transforms V1 getter to fluent getter in V2. 
* [software.amazon.awssdk.v2migration.V1SetterToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/v1settertov2): Transforms V1 setter to fluent setter in V2. 
* [software.amazon.awssdk.v2migration.WrapSdkClientBuilderRegionStr](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/wrapsdkclientbuilderregionstr): Wrap the region string provided on the SDK client builder with Region.of. 

## Removed Recipes

* **org.apache.camel.updates.camel40.CamelMigrationRecipe**: Migrate `camel3` application to `camel4`. 
* **org.apache.camel.updates.camel40.ChangeManagedChoiceMBeanMethodName**: MBeans now use a consistent method name of `extendedInformation`. 
* **org.apache.camel.updates.camel40.ChangeManagedFailoverLoadBalancerMBeanMethodName**: MBeans now use a consistent method name of `extendedInformation`. 
* **org.apache.camel.updates.camel40.ChangeTypes**: Change type of classes related to change of API. 
* **org.apache.camel.updates.camel40.UsePluginHelperForContextGetters**:  
* **org.apache.camel.updates.camel40.java.CamelAPIsRecipe**: Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs. 
* **org.apache.camel.updates.camel40.java.CamelBeanRecipe**: Camel bean recipe. 
* **org.apache.camel.updates.camel40.java.CamelEIPRecipe**: The InOnly and InOut EIPs have been removed. Instead, use 'SetExchangePattern' or 'To' where you can specify the exchange pattern to use. 
* **org.apache.camel.updates.camel40.java.CamelHttpRecipe**: Camel Http Extension changes. 
* **org.apache.camel.updates.camel40.xml.CircuitBreakerXmlDslRecipe**: Apache Camel XML DSL Circuit Breaker migration from version 3.20 or higher to 4.0. 
* **org.apache.camel.updates.camel40.xml.XmlDslRecipe**: Apache Camel XML DSL migration from version 3.20 or higher to 4.0. 
* **org.apache.camel.updates.camel40.yaml.CamelYamlRouteConfigurationSequenceRecipe**: Camel YAML changes. route-configuration children sequence is replaced with  mappingEntry (with special migration of "on-exception"). 
* **org.apache.camel.updates.camel40.yaml.CamelYamlStepsInFromRecipe**: The YAML DSL backwards compatible mode in Camel 3.14 or older, which allowed 'steps' to be defined as a child of 'route' has been removed. 
* **org.apache.camel.updates.camel41.CamelCoreRecipe**: Apache Camel Core migration from version 4.0 to 4.1. 
* **org.apache.camel.updates.camel41.TracingTag**: The Tag Enum containing constants for tagging spans has been deprecated. Instead, use constants from the TagConstants. 
* **org.apache.camel.updates.camel41.XmlDslRecipe**: Apache Camel XML DSL migration from version 4.0 to 4.1. 
* **org.apache.camel.updates.camel41.YamlDslRecipe**: If inlined bean is created, parameters `type` and `beanType` has bean changed. 
* **org.apache.camel.updates.camel42.CamelMainDebugger**: The option camel.main.debugger has been renamed to camel.debug.enabled. 
* **org.apache.camel.updates.camel42.CamelSagaRecipe**: Apache Camel Core migration from version 4.0 to 4.1. 
* **org.apache.camel.updates.camel43.CamelResequenceEIPXmlRecipe**: Batch and stream attributes were renamed in Resequence EIP XML DSL. 
* **org.apache.camel.updates.camel43.CamelThrottleEIPRecipe**: Apache Camel Core migration from version 4.0 to 4.1. 
* **org.apache.camel.updates.camel43.KafkaMetadata**: The header name for the List metadata has changed also the dsl method for metadata changed. 
* **org.apache.camel.updates.camel43.StateRepository**: Moved classes MemoryStateRepository and FileStateRepositor from camel-base-engine to  camel-support. 
* **org.apache.camel.updates.camel44.CamelCoreRecipe**: Apache Camel Core migration from version 4.3 to 4.4. 
* **org.apache.camel.updates.camel44.CamelMigrationRecipe**: Migrates `camel 4.0` application to `camel 4.4`. 
* **org.apache.camel.updates.camel44.DefaultJsonSchemaLoader**: Replaces depricated class withits successor. 
* **org.apache.camel.updates.camel44.RouteControllerProperties**:  
* **org.apache.camel.updates.customRecipes.ChangePropertyKeyWithCaseChange**: Change prefix of property with Camel case 
* **org.apache.camel.updates.customRecipes.MoveGetterToPluginHelper**: Move getter from context to PluginHelper 
* **org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$StringValueOfStringRecipe**: Migrate from `String.valueof(String)` to `String`, mainly as a cleanup after other recipes. 

## Changed Recipes

* [org.openrewrite.codemods.Putout](https://docs.openrewrite.org/recipes/codemods/putout) was changed:
  * Old Options:
    * `rules: { type: Set, required: false }`
  * New Options:
    * `printer: { type: String, required: false }`
    * `rules: { type: Set, required: false }`
* [org.openrewrite.maven.search.ParentPomInsight](https://docs.openrewrite.org/recipes/maven/search/parentpominsight) was changed:
  * Old Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `version: { type: String, required: false }`
  * New Options:
    * `artifactIdPattern: { type: String, required: true }`
    * `groupIdPattern: { type: String, required: true }`
    * `recursive: { type: Boolean, required: false }`
    * `version: { type: String, required: false }`
* [org.openrewrite.staticanalysis.RemoveUnusedLocalVariables](https://docs.openrewrite.org/recipes/staticanalysis/removeunusedlocalvariables) was changed:
  * Old Options:
    * `ignoreVariablesNamed: { type: String[], required: false }`
  * New Options:
    * `ignoreVariablesNamed: { type: String[], required: false }`
    * `withSideEffects: { type: Boolean, required: false }`