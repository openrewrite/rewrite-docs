# 7.39.1 Release (2023-04-04)

## Notable changes

* The code was optimized to eliminate redundant POM resolutions. You should see a substantial increase in speed when running recipes across multiple repositories.

## New Recipes

* org.openrewrite.java.ReplaceConstantWithAnotherConstant: Replace constant with another constant, adding/removing import on class if needed.
* org.openrewrite.java.cleanup.RemoveSystemOutPrintln: Print statements are often left accidentally after debugging an issue.
* org.openrewrite.java.logging.slf4j.CompleteExceptionLogging: It is a common mistake to call Exception.getMessage() when passing an exception into a log method. Not all exception types have useful messages, and even if the message is useful this omits the stack trace. Including a complete stack trace of the error along with the exception message in the log allows developers to better understand the context of the exception and identify the source of the error more quickly and accurately.
* org.openrewrite.java.migrate.JavaVersion20: Change maven.compiler.source and maven.compiler.target values to 20.
* org.openrewrite.java.migrate.UpgradeToJava20: This recipe will apply changes commonly needed when migrating to Java 20. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 20 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 20.
* org.openrewrite.java.migrate.guava.NoGuavaOptionalFromJavaUtil: Replaces `com.google.common.base.Optional#fromJavaUtil(java.util.Optional)` with argument.
* org.openrewrite.java.migrate.guava.NoGuavaOptionalToJavaUtil: Remove calls to `com.google.common.base.Optional#toJavaUtil()`.
* org.openrewrite.java.migrate.guava.PreferJavaUtilOptional: Prefer `java.util.Optional` instead of using `com.google.common.base.Optional`.
* org.openrewrite.java.migrate.guava.PreferJavaUtilOptionalOrElseNull: Replaces `com.google.common.base.Optional#orNull()` with `java.util.Optional#orElse(null)`.
* org.openrewrite.java.migrate.guava.PreferJavaUtilOptionalOrSupplier: Prefer `java.util.Optional#or(Supplier<T extends java.util.Optional<T>>)` over \`com.google.common.base.Optional#or(com.google.common.base.Optional).
* org.openrewrite.java.migrate.jakarta.MaybeAddJakartaServletApi: Adds the jakarta.servlet-api dependency, unless the project already uses spring-boot-starter-web, which transitively includes a compatible implementation under a different GAV
* org.openrewrite.java.migrate.lang.UseTextBlocks: Text blocks are easier to read than concatenated strings.
* org.openrewrite.java.recipes.UseJavaParserBuilderInJavaTemplate: Because we can now clone `JavaParser.Builder`, there is no need to fully build the parser inside a `Supplier<JavaParser>`. This also makes room for `JavaTemplate` to add shared `JavaTypeCache` implementations to parsers used to compile templates.
* org.openrewrite.java.search.FindImplementations: Find source files that contain a class declaration implementing a specific interface.
* org.openrewrite.java.spring.boot3.AddRouteTrailingSlash: This is part of Spring MVC and WebFlux URL Matching Changes, as of Spring Framework 6.0, the trailing slash matching configuration option has been deprecated and its default value set to false. This means that previously, a controller `@GetMapping("/some/greeting")` would match both `GET /some/greeting` and `GET /some/greeting/`, but it doesn't match `GET /some/greeting/` anymore by default and will result in an HTTP 404 error. This recipe is to add declaration of additional route explicitly on the controller handler (like `@GetMapping("/some/greeting", "/some/greeting/")`.
* org.openrewrite.java.spring.boot3.AddSetUseTrailingSlashMatch: This is part of Spring MVC and WebFlux URL Matching Changes, as of Spring Framework 6.0, the trailing slash matching configuration option has been deprecated and its default value set to false. This means that previously, a controller `@GetMapping("/some/greeting")` would match both `GET /some/greeting` and `GET /some/greeting/`, but it doesn't match `GET /some/greeting/` anymore by default and will result in an HTTP 404 error. This recipe is change the default with the global Spring MVC or Webflux configuration.
* org.openrewrite.java.spring.boot3.MaintainTrailingSlashURLMappings: This is part of Spring MVC and WebFlux URL Matching Changes, as of Spring Framework 6.0, the trailing slash matching configuration option has been deprecated and its default value set to false. This means that previously, a controller `@GetMapping("/some/greeting")` would match both `GET /some/greeting` and `GET /some/greeting/`, but it doesn't match `GET /some/greeting/` anymore by default and will result in an HTTP 404 error. This recipe is to maintain trailing slash in all HTTP url mappings.
* org.openrewrite.java.spring.boot3.MigrateThymeleafDependencies: Migrate thymeleaf dependencies to the new artifactId, since these are changed with Spring Boot 3.
* org.openrewrite.java.spring.cloud2022.MavenPomUpgrade: Upgrade Maven POM to Spring Cloud 2022 from prior 2021.x version.
* org.openrewrite.java.spring.cloud2022.MigrateCloudSleuthToMicrometerTracing: Spring Cloud Sleuth has been discontinued and only compatible with Spring Boot 2.x.
* org.openrewrite.java.spring.cloud2022.UpgradeSpringCloud\_2022: Migrate applications to the latest Spring Cloud 2022 (Kilburn) release.
* org.openrewrite.java.spring.security5.UpdateArgon2PasswordEncoder: In Spring Security 5.8 some `Argon2PasswordEncoder` constructors have been deprecated in favor of factory methods. Refer to the Spring Security migration docs for more information.
* org.openrewrite.java.spring.security5.UpdatePbkdf2PasswordEncoder: In Spring Security 5.8 some `Pbkdf2PasswordEncoder` constructors have been deprecated in favor of factory methods. Refer to the Spring Security migration docs for more information.
* org.openrewrite.java.spring.security5.UpdateSCryptPasswordEncoder: In Spring Security 5.8 some `SCryptPasswordEncoder` constructors have been deprecated in favor of factory methods. Refer to the Spring Security migration docs for more information.
* org.openrewrite.java.spring.security5.UpgradeSpringSecurity\_5\_8: Migrate applications to the latest Spring Security 5.8 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.
* org.openrewrite.java.spring.security5.UseNewSecurityMatchers: In Spring Security 5.8, the `HttpSecurity#antMatcher()`, `HttpSecurity#mvcMatcher()`, and `HttpSecurity#regexMatcher()` methods were deprecated in favor of new `HttpSecurity#securityMatcher()` method. Refer to the Spring Security docs for more information.
* org.openrewrite.java.spring.security5.search.FindEncryptorsQueryableTextUses: `Encryptors.queryableText()` is insecure and is removed in Spring Security 6.
* org.openrewrite.java.spring.security6.PropagateAuthenticationServiceExceptions: Remove any calls matching `AuthenticationEntryPointFailureHandler.setRethrowAuthenticationServiceException(true)`. See the corresponding Sprint Security 6.0 migration step for details.
* org.openrewrite.java.spring.security6.RequireExplicitSavingOfSecurityContextRepository: Remove explicit `SecurityContextConfigurer.requireExplicitSave(true)` opt-in as that is the new default in Spring Security 6. See the corresponding Sprint Security 6.0 migration step for details.
* org.openrewrite.java.spring.security6.UpgradeSpringSecurity\_6\_0: Migrate applications to the latest Spring Security 6.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions.
* org.openrewrite.java.spring.security6.UseSha256InRememberMe: As of Spring Security 6.0 the SHA-256 algorithm is the default for the encoding and matching algorithm used by `TokenBasedRememberMeServices` and does thus no longer need to be explicitly configured. See the corresponding Sprint Security 6.0 migration step for details.
* org.openrewrite.java.testing.junit5.MigrateAssumptions: Many of JUnit 4's `Assume#assume(..)` methods have no direct counterpart in JUnit 5 and require Hamcrest JUnit's `MatcherAssume`.
* org.openrewrite.maven.ChangePluginGroupIdAndArtifactId: Change the groupId and/or the artifactId of a specified Maven plugin.
* org.openrewrite.maven.RenamePropertyKey: Rename the specified Maven project property key leaving the value unchanged.

## Removed Recipes

_Cucumber recipes have been moved to_ _this repository__._

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

* org.openrewrite.FindBuildToolFailures was changed:
  * Old Options:
    * `None`
  * New Options:
    * `suppressLogOutput: { type: Boolean, required: false }`
* org.openrewrite.gradle.plugins.AddGradleEnterprise was changed:
  * Old Options:
    * `version: { type: String, required: true }`
  * New Options:
    * `allowUntrustedServer: { type: Boolean, required: false }`
    * `captureTaskInputFiles: { type: Boolean, required: false }`
    * `publishCriteria: { type: PublishCriteria, required: false }`
    * `server: { type: String, required: false }`
    * `uploadInBackground: { type: Boolean, required: false }`
    * `version: { type: String, required: true }`
* org.openrewrite.java.ReplaceStringLiteralWithConstant was changed:
  * Old Options:
    * `fullyQualifiedConstantName: { type: String, required: true }`
    * `literalValue: { type: String, required: true }`
  * New Options:
    * `fullyQualifiedConstantName: { type: String, required: true }`
    * `literalValue: { type: String, required: false }`
* org.openrewrite.java.spring.boot3.ConfigurationOverEnableSecurity was changed:
  * Old Options:
    * `None`
  * New Options:
    * `forceAddConfiguration: { type: boolean, required: true }`
