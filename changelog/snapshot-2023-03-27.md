# Snapshot (2023-03-27)

{% hint style="info" %}
Want to learn how to use snapshot versions in your project? Check out our [snapshot version guide](/reference/snapshot-instructions.md).
{% endhint %}

## New Recipes
* [org.openrewrite.java.logging.slf4j.CompleteExceptionLogging](https://docs.openrewrite.org/reference/recipes/java/logging/slf4j/completeexceptionlogging): It is a common mistake to call Exception.getMessage() when passing an exception into a log method. Not all exception types have useful messages, and even if the message is useful this omits the stack trace. Including a complete stack trace of the error along with the exception message in the log allows developers to better understand the context of the exception and identify the source of the error more quickly and accurately. 
* [org.openrewrite.java.migrate.jakarta.MaybeAddJakartaServletApi](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/maybeaddjakartaservletapi): Adds the jakarta.servlet-api dependency, unless the project already uses spring-boot-starter-web, which transitively includes a compatible implementation under a different GAV 
* [org.openrewrite.java.spring.boot3.MigrateThymeleafDependencies](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/migratethymeleafdependencies): Migrate thymeleaf dependencies to the new artifactId, since these are changed with Spring Boot 3. 
* [org.openrewrite.java.spring.security5.UpdateArgon2PasswordEncoder](https://docs.openrewrite.org/reference/recipes/java/spring/security5/updateargon2passwordencoder): In Spring Security 5.8 some `Argon2PasswordEncoder` constructors have been deprecated in favor of factory methods. Refer to the [ Spring Security migration docs](https://docs.spring.io/spring-security/reference/5.8/migration/index.html#_update_argon2passwordencoder) for more information. 
* [org.openrewrite.java.spring.security5.UpdatePbkdf2PasswordEncoder](https://docs.openrewrite.org/reference/recipes/java/spring/security5/updatepbkdf2passwordencoder): In Spring Security 5.8 some `Pbkdf2PasswordEncoder` constructors have been deprecated in favor of factory methods. Refer to the [ Spring Security migration docs](https://docs.spring.io/spring-security/reference/5.8/migration/index.html#_update_pbkdf2passwordencoder) for more information. 
* [org.openrewrite.java.spring.security5.UpdateSCryptPasswordEncoder](https://docs.openrewrite.org/reference/recipes/java/spring/security5/updatescryptpasswordencoder): In Spring Security 5.8 some `SCryptPasswordEncoder` constructors have been deprecated in favor of factory methods. Refer to the [ Spring Security migration docs](https://docs.spring.io/spring-security/reference/5.8/migration/index.html#_update_scryptpasswordencoder) for more information. 
* [org.openrewrite.java.spring.security5.UpgradeSpringSecurity_5_8](https://docs.openrewrite.org/reference/recipes/java/spring/security5/upgradespringsecurity_5_8): Migrate applications to the latest Spring Security 5.8 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [org.openrewrite.java.spring.security5.UseNewSecurityMatchers](https://docs.openrewrite.org/reference/recipes/java/spring/security5/usenewsecuritymatchers): In Spring Security 5.8, the `HttpSecurity#antMatcher()`, `HttpSecurity#mvcMatcher()`, and `HttpSecurity#regexMatcher()` methods were deprecated in favor of new `HttpSecurity#securityMatcher()` method. Refer to the [Spring Security docs](https://docs.spring.io/spring-security/reference/5.8/migration/servlet/config.html#use-new-security-matchers) for more information. 
* [org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses](https://docs.openrewrite.org/reference/recipes/java/spring/security5/search/findencryptorsqueryabletextuses): `Encryptors.queryableText()` is insecure and is removed in Spring Security 6. 
* [org.openrewrite.java.spring.security6.RequireExplicitSavingOfSecurityContextRepository](https://docs.openrewrite.org/reference/recipes/java/spring/security6/requireexplicitsavingofsecuritycontextrepository): Remove explicit `SecurityContextConfigurer.requireExplicitSave(true)` opt-in as that is the new default in Spring Security 6. See the corresponding [Sprint Security 6.0 migration step](https://docs.spring.io/spring-security/reference/6.0.0/migration/servlet/session-management.html#_require_explicit_saving_of_securitycontextrepository) for details. 

## Removed Recipes
* **org.openrewrite.java.spring.security6.MavenPomUpgrade**: Upgrade Maven POM to Spring Security 6.0 from prior 5.x version. 
* **org.openrewrite.java.testing.cucumber.CucumberAnnotationToSuite**: Replace @Cucumber with @Suite and @SelectClasspathResource("cucumber/annotated/class/package"). 
* **org.openrewrite.java.testing.cucumber.CucumberJava8HookDefinitionToCucumberJava**: Replace LambdaGlue hook definitions with new annotated methods with the same body. 
* **org.openrewrite.java.testing.cucumber.CucumberJava8StepDefinitionToCucumberJava**: Replace StepDefinitionBody methods with StepDefinitionAnnotations on new methods with the same body. 
* **org.openrewrite.java.testing.cucumber.CucumberJava8ToJava**: Migrates Cucumber-Java8 step definitions and LambdaGlue hooks to Cucumber-Java annotated methods. 
* **org.openrewrite.java.testing.cucumber.CucumberToJunitPlatformSuite**: Migrates Cucumber tests to JUnit Test Suites. 
* **org.openrewrite.java.testing.cucumber.DropSummaryPrinter**: Replace SummaryPrinter with Plugin, if not already present. 
* **org.openrewrite.java.testing.cucumber.RegexToCucumberExpression**: Strip regex prefix and suffix from step annotation expressions arguments where possible. 
* **org.openrewrite.java.testing.cucumber.UpgradeCucumber2x**: Upgrade to Cucumber-JVM 2.x from any previous version. 
* **org.openrewrite.java.testing.cucumber.UpgradeCucumber5x**: Upgrade to Cucumber-JVM 5.x from any previous version. 
* **org.openrewrite.java.testing.cucumber.UpgradeCucumber7x**: Upgrade to Cucumber-JVM 7.x from any previous version. 

## Changed Recipes
* [org.openrewrite.FindBuildToolFailures](https://docs.openrewrite.org/reference/recipes/findbuildtoolfailures) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `suppressLogOutput: { type: Boolean, required: false }`
* [org.openrewrite.java.migrate.lang.UseTextBlocks](https://docs.openrewrite.org/reference/recipes/java/migrate/lang/usetextblocks) was changed:
  * Old Options:
    * `endLineDelimiter: { type: String, required: false }`
  * New Options:
    * `convertStringsWithoutNewlines: { type: boolean, required: false }`