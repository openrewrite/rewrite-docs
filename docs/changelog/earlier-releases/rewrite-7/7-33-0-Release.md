# 7.33.0 Release (2022-11-16)

### New Artifacts

* rewrite-cloud-suitability-analyzer

### New Recipes

* org.openrewrite.FindParseFailures: This recipe explores parse failures after an AST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems.
* org.openrewrite.config.CompositeRecipe:
* org.openrewrite.gradle.AddProperty: Add a property to the `gradle.properties` file.
* org.openrewrite.gradle.plugins.AddGradleEnterprise: Add the Gradle Enterprise plugin to `settings.gradle(.kts)`.
* org.openrewrite.gradle.plugins.UpgradePluginVersion: Update a Gradle plugin by id to a later version.
* org.openrewrite.gradle.search.EnableGradleParallelExecution: Most builds consist of more than one project and some of those projects are usually independent of one another. Yet Gradle will only run one task at a time by default, regardless of the project structure. By using the `--parallel` switch, you can force Gradle to execute tasks in parallel as long as those tasks are in different projects. See the Gradle performance documentation for more.
* org.openrewrite.gradle.search.FindGradleProject: Gradle projects are those with `build.gradle` or `build.gradle.kts` files.
* org.openrewrite.gradle.search.FindPlugins: Find a Gradle plugin by id.
* org.openrewrite.java.cleanup.AvoidBoxedBooleanExpressions: Under certain conditions the `java.lang.Boolean` type is used as an expression, and it may throw a `NullPointerException` if the value is null.
* org.openrewrite.java.cleanup.FixStringFormatExpressions: Fix `String#format` and `String#formatted` expressions by replacing  newline characters with `%n` and removing any unused arguments. Note this recipe is scoped to only transform format expressions which do not specify the argument index.
* org.openrewrite.java.cleanup.RemoveEmptyJavaDocParameters: Removes `@param`, `@return`, and `@throws` with no description from JavaDocs.
* org.openrewrite.java.cleanup.RemoveUnusedPrivateFields: If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed.
* org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart: `Thread.run()` should not be called directly.
* org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes: Using upper case literal suffixes for declaring literals is less ambiguous, e.g., `1l` versus `1L`.
* org.openrewrite.java.cleanup.UseForEachRemoveInsteadOfSetRemoveAll: Using `java.util.Collection#forEach(Set::remove)` rather than `java.util.Set#removeAll(java.util.Collection)` may improve performance due to a possible O(n^2) complexity.
* org.openrewrite.java.cleanup.UseListSort: The `java.util.Collections#sort(..)` implementation defers to the `java.util.List#sort(Comparator)`, replaced it with the `java.util.List#sort(Comparator)` implementation for better readability.
* org.openrewrite.java.logging.slf4j.Slf4jBestPractices: Applies best practices to logging with SLF4J.
* org.openrewrite.java.migrate.UpgradeToJava17: This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.
* org.openrewrite.java.migrate.jakarta.ChangeJavaxAnnotationToJakarta: Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`.
* org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta:
* org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta:
* org.openrewrite.java.migrate.jakarta.JavaxActivationMigrationToJakartaActivation: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxAnnotationMigrationToJakartaAnnotation: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxAnnotationPackageToJakarta: Change type of classes in the `javax.annotation` package to jakarta.
* org.openrewrite.java.migrate.jakarta.JavaxAnnotationSecurityPackageToJakarta: Change type of classes in the `javax.annotation.security` package to jakarta.
* org.openrewrite.java.migrate.jakarta.JavaxAnnotationSqlPackageToJakarta: Change type of classes in the `javax.annotation.sql` package to jakarta.
* org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxDecoratorToJakartaDecorator: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxElToJakartaEl: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxEnterpriseToJakartaEnterprise: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxFacesToJakartaFaces: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxInjectMigrationToJakartaInject: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxInterceptorToJakartaInterceptor: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxJmsToJakartaJms: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxJsonToJakartaJson: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxJwsToJakartaJws: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxMailToJakartaMail: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta: Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace.
* org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml:
* org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence: Java EE has been rebranded to Jakarta EE, necessitating a package relocation
* org.openrewrite.java.migrate.jakarta.JavaxResourceToJakartaResource: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxSecurityToJakartaSecurity: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxServletToJakartaServlet: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxTransactionMigrationToJakartaTransaction: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxWebsocketToJakartaWebsocket: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxWsToJakartaWs: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxXmlSoapToJakartaXmlSoap: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* org.openrewrite.java.migrate.jakarta.JohnzonJavaxToJakarta:
* org.openrewrite.java.migrate.jakarta.RestAssuredJavaxToJakarta:
* org.openrewrite.java.migrate.lombok.UpdateLombokToJava17: Update Lombok dependency to a version that is compatible with Java 17.
* org.openrewrite.java.security.secrets.FindArtifactorySecrets: Locates Artifactory secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindAwsSecrets: Locates AWS secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindAzureSecrets: Locates Azure secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindDiscordSecrets: Locates Discord secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindGenericSecrets: Locates generic secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindGitHubSecrets: Locates GitHub secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindGoogleSecrets: Locates Google secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindHerokuSecrets: Locates Heroku secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindJwtSecrets: Locates JWTs stored in plain text in code.
* org.openrewrite.java.security.secrets.FindMailChimpSecrets: Locates MailChimp secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindMailgunSecrets: Locates Mailgun secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindNpmSecrets: Locates NPM secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindPasswordInUrlSecrets: Locates URLs that contain passwords in plain text.
* org.openrewrite.java.security.secrets.FindPayPalSecrets: Locates PayPal secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindPgpSecrets: Locates PGP secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindPicaticSecrets: Locates Picatic secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindRsaSecrets: Locates RSA private keys stored in plain text in code.
* org.openrewrite.java.security.secrets.FindSecrets: Locates secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindSecretsByPattern: A secret is a literal that matches any one of the provided patterns.
* org.openrewrite.java.security.secrets.FindSendGridSecrets: Locates SendGrid secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindSlackSecrets: Locates Slack secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindSquareSecrets: Locates Square secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindSshSecrets: Locates SSH secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindStripeSecrets: Locates Stripe secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindTelegramSecrets: Locates Telegram secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindTwilioSecrets: Locates Twilio secrets stored in plain text in code.
* org.openrewrite.java.security.secrets.FindTwitterSecrets: Locates Twitter secrets stored in plain text in code.
* org.openrewrite.java.spring.AddSpringProperty:
* org.openrewrite.java.spring.ChangeSpringPropertyKey:
* org.openrewrite.java.spring.DeleteSpringProperty:
* org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax: `org.hibernate.validator.constraints` were deprecated in 1.x. in favor of their javax counterparts.
* org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization: Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. This recipe maintains the previous behavior but adds a warning comment that these settings should be reviewed. See https://github.com/openrewrite/rewrite-spring/issues/228
* org.openrewrite.java.spring.boot3.LegacyJmxExposure: Spring Boot 3.0 only exposes the health endpoint via JMX. This change exposes all actuator endpoints via JMX to maintain parity with Spring Boot 2.x. See https://github.com/openrewrite/rewrite-spring/issues/229
* org.openrewrite.java.spring.boot3.Saml: Renames spring.security.saml2.relyingparty.registration.(any).identityprovider to spring.security.saml2.relyingparty.registration.(any).assertingparty.
* org.openrewrite.java.spring.boot3.SpringBoot2To3Migration: Migrates Spring Boot 2.x to latest version of 3.x
* org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_0\_0: Migrate properties found in `application.properties` and `application.yml`.
* org.openrewrite.java.spring.framework.MigrateHandlerInterceptor: Deprecated as of 5.3 in favor of implementing `HandlerInterceptor` and/or `AsyncHandlerInterceptor`.
* org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter: As of 5.0 `WebMvcConfigurer` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter.
* org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_0: Upgrade to Spring Framework to 5.0 from any prior version.
* org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder: Assertions such as `org.junit.Assert.assertEquals` expect the first argument to be the expected value and the second argument to be the actual value; for `org.testng.Assert`, it’s the other way around. This recipe detects `J.Literal`, `J.NewArray`, and `java.util.Iterable` arguments swapping them if necessary so that the error messages will be confusing.
* org.openrewrite.maven.AddRepository:
* org.openrewrite.maven.search.EffectiveMavenRepositories: Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the AST was produced.
* org.openrewrite.xml.security.AddOwaspDateBoundSuppressions: Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html.
* org.openrewrite.xml.security.RemoveOwaspSuppressions: Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files: https://jeremylong.github.io/DependencyCheck/general/suppression.html.
* org.openrewrite.xml.security.UpdateOwaspSuppressionDate: Updates the expiration date for OWASP suppressions having a matching cve tag. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html.

### Removed Recipes

* **org.openrewrite.gradle.UpgradePluginVersion**: Update a Gradle plugin by id to a later version.
* **org.openrewrite.gradle.search.FindPlugin**: Find a Gradle plugin by id.
* **org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`.
* **org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta**: Change type of classes in the `javax.annotation` package to jakarta.
* **org.openrewrite.java.migrate.JavaxAnnotationSecurityPackageToJakarta**: Change type of classes in the `javax.annotation.security` package to jakarta.
* **org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta**: Change type of classes in the `javax.annotation.sql` package to jakarta.
* **org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxDecoratorToJakartaDecorator**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxEjbToJakartaEjb**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxElToJakartaEl**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxFacesToJakartaFaces**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxInjectMigrationToJakartaInject**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxInterceptorToJakartaInterceptor**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxJmsToJakartaJms**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxJsonToJakartaJson**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxJwsToJakartaJws**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxMailToJakartaMail**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxMigrationToJakarta**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxPeristenceXmlToJakartaPersistenceXml**:
* **org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation
* **org.openrewrite.java.migrate.JavaxResourceToJakartaResource**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxSecurityToJakartaSecurity**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxServletToJakartaServlet**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxWebsocketToJakartaWebsocket**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxWsToJakartaWs**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxXmlSoapToJakartaXmlSoap**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* **org.openrewrite.java.migrate.UpgradeJava17**: This recipe will apply changes commonly needed when migrating to Java 17, including intermediate versions.
* **org.openrewrite.java.migrate.javax.ReplaceJavaxJaxbWithJakarta**: This recipe will replace the legacy `javax-api` artifact with the Jakarta EE equivalent.
* **org.openrewrite.java.migrate.javax.ReplaceJavaxJaxwsWithJakarta**: This recipe will replace the legacy javax `jaxws-api` artifact with the Jakarta EE equivalent. The jakarta JAX-WS API 2.3.x is part of JakartaEE 8 and still uses `javax` packaging.
* **org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName**: `org.hibernate.validator.constraints.NotBlank` was deprecated in 1.x.
* **org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName**: `org.hibernate.validator.constraints.NotEmpty` was deprecated in 1.x.
* **org.openrewrite.java.spring.boot2.SpringBoot2To3Migration**: Migrates Spring Boot 2.x to latest version of 3.x
* **org.openrewrite.java.spring.cve.Spring4Shell**: See the blog post on the issue. This recipe can be further refined as more information becomes available.
* **org.openrewrite.xml.security.DateBoundSuppressions**: Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html
* **org.openrewrite.xml.security.RemoveSuppressions**: Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files: https://jeremylong.github.io/DependencyCheck/general/suppression.html

### Changed Recipes

* org.openrewrite.FindQuarks was changed:
  * Old Options:
    * `includeAll: { type: Boolean, required: false }`
  * New Options:
    * `None`
* org.openrewrite.java.cleanup.MethodNameCasing was changed:
  * Old Options:
    * `includeTestSources: { type: Boolean, required: false }`
  * New Options:
    * `includeTestSources: { type: Boolean, required: false }`
    * `renamePublicMethods: { type: Boolean, required: false }`
* org.openrewrite.java.search.FindAnnotations was changed:
  * Old Options:
    * `annotationPattern: { type: String, required: true }`
  * New Options:
    * `annotationPattern: { type: String, required: true }`
    * `matchMetaAnnotations: { type: Boolean, required: false }`
* org.openrewrite.java.logging.ParameterizedLogging was changed:
  * Old Options:
    * `methodPattern: { type: String, required: true }`
  * New Options:
    * `methodPattern: { type: String, required: true }`
    * `removeToString: { type: Boolean, required: false }`
* org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId was changed:
  * Old Options:
    * `newArtifactId: { type: String, required: true }`
    * `newGroupId: { type: String, required: true }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
  * New Options:
    * `newArtifactId: { type: String, required: true }`
    * `newGroupId: { type: String, required: true }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `versionPattern: { type: String, required: false }`
* org.openrewrite.java.spring.ExpandProperties was changed:
  * Old Options:
    * `None`
  * New Options:
    * `sourceFileMask: { type: String, required: false }`
