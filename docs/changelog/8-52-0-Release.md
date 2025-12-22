---
description: What's changed in OpenRewrite version 8.52.0.
---

# 8.52.0 release (2025-05-07)

_Total recipe count: 3738_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.moderne.java.spring.boot3.RemoveTestRestTemplateEnableRedirectsOptionRecipe](https://docs.openrewrite.org/recipes/java/spring/boot3/removetestresttemplateenableredirectsoptionrecipe): The `TestRestTemplate` now uses the same follow redirects settings as the regular RestTemplate. The `HttpOption.ENABLE_REDIRECTS` option has also been deprecated. This recipe removes the option from the `TestRestTemplate` constructor arguments. 
* [io.moderne.java.spring.boot3.ReplaceTaskExecutorNameByApplicationTaskExecutorName](https://docs.openrewrite.org/recipes/java/spring/boot3/replacetaskexecutornamebyapplicationtaskexecutorname): Spring Boot 3.5 removed the bean name `taskExecutor`. Where this bean name is used, the recipe replaces the bean name to `applicationTaskExecutor`. This also includes instances where the developer provided their own bean named `taskExecutor`. This also includes scenarios where JSR-250's `@Resource` annotation is used. 
* [io.moderne.java.spring.boot3.ResolveTaskExecutorFromContext](https://docs.openrewrite.org/recipes/java/spring/boot3/resolvetaskexecutorfromcontext): Use bean name `applicationTaskExecutor` instead of `taskExecutor` when resolving `TaskExecutor` Bean from application context 
* [io.moderne.java.spring.boot3.SpringBootProperties_3_5](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_5): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.boot3.UpgradeSpringBoot_3_5](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_5): Migrate applications to the latest Spring Boot 3.5 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.5. 
* [org.apache.camel.upgrade.UpdatePropertiesAndYamlKeys](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/updatepropertiesandyamlkeys): Update properties and yaml configurations file. 
* [org.apache.camel.upgrade.camel411.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel411/camelmigrationrecipe): Migrates `camel 4.10` application to `camel 4.11`. 
* [org.apache.camel.upgrade.camel411.platformHttpFilterStrategy](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel411/platformhttpfilterstrategy): PlatformHttpHeaderFilterStrategy is removed, use HttpHeaderFilterStrategy instead. 
* [org.apache.camel.upgrade.camel411.removedDependencies](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel411/removeddependencies): Removed deprecated components (camel-etcd3). 
* [org.apache.camel.upgrade.camel411.removedLightweight](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel411/removedlightweight): Removed deprecated configuration properties (camel.main.lightweight). 
* [org.apache.camel.upgrade.customRecipes.PropertiesAndYamlKeyUpdate](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/propertiesandyamlkeyupdate): Update Apache Camel configurations keys 
* [org.openrewrite.apache.httpclient5.CredentialsStoreClear](https://docs.openrewrite.org/recipes/apache/httpclient5/credentialsstoreclear): Migrates `BasicCredentialsProvider` methods`clear` to the new `CredentialsStore` interface. 
* [org.openrewrite.apache.httpclient5.CredentialsStoreSetCredentials](https://docs.openrewrite.org/recipes/apache/httpclient5/credentialsstoresetcredentials): Migrates `BasicCredentialsProvider` methods`setCredentials` to the new `CredentialsStore` interface. 
* [org.openrewrite.gradle.search.ModuleHasPlugin](https://docs.openrewrite.org/recipes/gradle/search/modulehasplugin): Searches for Gradle Projects (modules) that have a plugin matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring dependency management plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead. 
* [org.openrewrite.java.ReplaceMethodInvocationWithConstant](https://docs.openrewrite.org/recipes/java/replacemethodinvocationwithconstant): Replace all method invocations matching the method pattern with the specified constant. 
* [org.openrewrite.java.logging.slf4j.WrapExpensiveLogStatementsInConditionals](https://docs.openrewrite.org/recipes/java/logging/slf4j/wrapexpensivelogstatementsinconditionals): When trace, debug and info log statements use methods for constructing log messages, those methods are called regardless of whether the log level is enabled. This recipe encapsulates those log statements in an `if` statement that checks the log level before calling the log method. It then bundles surrounding log statements with the same log level into the `if` statement to improve readability of the resulting code. 
* [org.openrewrite.java.migrate.AccessController](https://docs.openrewrite.org/recipes/java/migrate/accesscontroller): The Security Manager API is unsupported in Java 24. This recipe will remove the usage of `java.security.AccessController`. 
* [org.openrewrite.java.migrate.RemoveSecurityManager](https://docs.openrewrite.org/recipes/java/migrate/removesecuritymanager): The Security Manager API is unsupported in Java 24. This recipe will remove the usage of `java.security.SecurityManager`. 
* [org.openrewrite.java.migrate.RemoveSecurityPolicy](https://docs.openrewrite.org/recipes/java/migrate/removesecuritypolicy): The Security Manager API is unsupported in Java 24. This recipe will remove the use of `java.security.Policy`. 
* [org.openrewrite.java.migrate.SystemGetSecurityManagerToNull](https://docs.openrewrite.org/recipes/java/migrate/systemgetsecuritymanagertonull): The Security Manager API is unsupported in Java 24. This recipe will replace `System.getSecurityManager()` with `null` to make its behavior more obvious and try to simplify execution paths afterwards. 
* [org.openrewrite.java.migrate.UpgradeToJava25](https://docs.openrewrite.org/recipes/java/migrate/upgradetojava25): This recipe will apply changes commonly needed when migrating to Java 25. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 25 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 25. 
* [org.openrewrite.java.recipes.ReorderTestMethods](https://docs.openrewrite.org/recipes/java/recipes/reordertestmethods): Reorders `RewriteTest` methods to place `defaults` first, followed by any `@DocumentExample`s. 
* [org.openrewrite.java.spring.boot3.AddValidToNestedConfigProperties](https://docs.openrewrite.org/recipes/java/spring/boot3/addvalidtonestedconfigproperties): Adds `@Valid` annotation to fields in `@ConfigurationProperties` classes that contain nested properties with validation constraints. 
* [org.openrewrite.java.spring.boot3.ReplaceRestTemplateBuilderRequestFactoryMethod](https://docs.openrewrite.org/recipes/java/spring/boot3/replaceresttemplatebuilderrequestfactorymethod): `RestTemplateBuilder.requestFactory(java.util.function.Function)` was deprecated since Spring Boot 3.4, in favor of `requestFactoryBuilder(ClientHttpRequestFactoryBuilder)`. 
* [org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_4-community-edition): Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs. 
* [org.openrewrite.maven.search.ModuleHasPlugin](https://docs.openrewrite.org/recipes/maven/search/modulehasplugin): Searches for Maven modules that have a plugin matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching plugin. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that apply the spring boot plugin, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindPlugins` recipe instead. 
* [org.openrewrite.search.RepositoryContainsFile](https://docs.openrewrite.org/recipes/search/repositorycontainsfile): Intended to be used primarily as a precondition for other recipes, this recipe checks if a repository contains a specific file or files matching a pattern. If present all files in the repository are marked with a `SearchResult` marker. If you want to get only the matching file as a search result, use `FindSourceFiles` instead. 
* [org.openrewrite.staticanalysis.CustomImportOrder](https://docs.openrewrite.org/recipes/staticanalysis/customimportorder): Updates and reorders Java import declarations according to group and order settings compatible with the Checkstyle 'CustomImportOrder' check. 
* [software.amazon.awssdk.v2migration.AddS3EventNotificationDependency](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/adds3eventnotificationdependency): This recipe will add the Java v2 S3 Event Notification dependency if v1 S3EventNotification is used 
* [software.amazon.awssdk.v2migration.ChangeS3EventNotificationTypes](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changes3eventnotificationtypes): Change SDK S3EventNotification types from v1 to v2. 
* [software.amazon.awssdk.v2migration.S3EventNotificationMethodToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3eventnotificationmethodtov2): S3 Event Notification method to v2 
* [software.amazon.awssdk.v2migration.S3EventNotificationMethodsToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3eventnotificationmethodstov2): Change S3EventNotification methods to v2. 

## Removed Recipes

* **io.moderne.java.spring.framework.UpgradeSpringFramework_6_2**: Migrate applications to the latest Spring Framework 6.2 release. 

## Changed Recipes

* [org.openrewrite.text.Find](https://docs.openrewrite.org/recipes/text/find) was changed:
  * Old Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `description: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
  * New Options:
    * `caseSensitive: { type: Boolean, required: false }`
    * `contextSize: { type: Integer, required: false }`
    * `description: { type: Boolean, required: false }`
    * `dotAll: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `find: { type: String, required: true }`
    * `multiline: { type: Boolean, required: false }`
    * `regex: { type: Boolean, required: false }`
* [org.openrewrite.staticanalysis.AddSerialVersionUidToSerializable](https://docs.openrewrite.org/recipes/staticanalysis/addserialversionuidtoserializable) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `uid: { type: String, required: false }`
* [org.apache.camel.upgrade.customRecipes.ChangePropertyKeyWithCaseChange](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/customrecipes/changepropertykeywithcasechange) was changed:
  * Old Options:
    * `newPrefix: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`
  * New Options:
    * `exclusions: { type: List, required: true }`
    * `newPrefix: { type: String, required: true }`
    * `oldPropertyKey: { type: String, required: true }`