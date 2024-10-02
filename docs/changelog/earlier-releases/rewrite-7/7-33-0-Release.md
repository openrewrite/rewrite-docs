# 7.33.0 Release (2022-11-16)

### New Artifacts

* rewrite-cloud-suitability-analyzer

### New Recipes

* [org.openrewrite.FindParseFailures](../../../recipes/findparsefailures): This recipe explores parse failures after an AST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems.
* [org.openrewrite.config.CompositeRecipe](../../../recipes/config/compositerecipe):
* [org.openrewrite.gradle.AddProperty](../../../recipes/gradle/addproperty): Add a property to the `gradle.properties` file.
* [org.openrewrite.gradle.plugins.AddGradleEnterprise](../../../recipes/gradle/plugins/addgradleenterprise): Add the Gradle Enterprise plugin to `settings.gradle(.kts)`.
* [org.openrewrite.gradle.plugins.UpgradePluginVersion](../../../recipes/gradle/plugins/upgradepluginversion): Update a Gradle plugin by id to a later version.
* [org.openrewrite.gradle.search.EnableGradleParallelExecution](../../../recipes/gradle/search/enablegradleparallelexecution): Most builds consist of more than one project and some of those projects are usually independent of one another. Yet Gradle will only run one task at a time by default, regardless of the project structure. By using the `--parallel` switch, you can force Gradle to execute tasks in parallel as long as those tasks are in different projects. See the [Gradle performance documentation](https://docs.gradle.org/current/userguide/performance.html#parallel\_execution) for more.
* [org.openrewrite.gradle.search.FindGradleProject](../../../recipes/gradle/search/findgradleproject): Gradle projects are those with `build.gradle` or `build.gradle.kts` files.
* [org.openrewrite.gradle.search.FindPlugins](../../../recipes/gradle/search/findplugins): Find a Gradle plugin by id.
* [org.openrewrite.java.cleanup.AvoidBoxedBooleanExpressions](../../../recipes/java/cleanup/avoidboxedbooleanexpressions): Under certain conditions the `java.lang.Boolean` type is used as an expression, and it may throw a `NullPointerException` if the value is null.
* [org.openrewrite.java.cleanup.FixStringFormatExpressions](../../../recipes/java/cleanup/fixstringformatexpressions): Fix `String#format` and `String#formatted` expressions by replacing  newline characters with `%n` and removing any unused arguments. Note this recipe is scoped to only transform format expressions which do not specify the argument index.
* [org.openrewrite.java.cleanup.RemoveEmptyJavaDocParameters](../../../recipes/java/cleanup/removeemptyjavadocparameters): Removes `@param`, `@return`, and `@throws` with no description from JavaDocs.
* [org.openrewrite.java.cleanup.RemoveUnusedPrivateFields](../../../recipes/java/cleanup/removeunusedprivatefields): If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed.
* [org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart](../../../recipes/java/cleanup/replacethreadrunwiththreadstart): `Thread.run()` should not be called directly.
* [org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes](../../../recipes/java/cleanup/uppercaseliteralsuffixes): Using upper case literal suffixes for declaring literals is less ambiguous, e.g., `1l` versus `1L`.
* [org.openrewrite.java.cleanup.UseForEachRemoveInsteadOfSetRemoveAll](../../../recipes/java/cleanup/useforeachremoveinsteadofsetremoveall): Using `java.util.Collection#forEach(Set::remove)` rather than `java.util.Set#removeAll(java.util.Collection)` may improve performance due to a possible O(n^2) complexity.
* [org.openrewrite.java.cleanup.UseListSort](../../../recipes/java/cleanup/uselistsort): The `java.util.Collections#sort(..)` implementation defers to the `java.util.List#sort(Comparator)`, replaced it with the `java.util.List#sort(Comparator)` implementation for better readability.
* [org.openrewrite.java.logging.slf4j.Slf4jBestPractices](../../../recipes/java/logging/slf4j/slf4jbestpractices): Applies best practices to logging with SLF4J.
* [org.openrewrite.java.migrate.UpgradeToJava17](../../../recipes/java/migrate/upgradetojava17): This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.
* [org.openrewrite.java.migrate.jakarta.ChangeJavaxAnnotationToJakarta](../../../recipes/java/migrate/jakarta/changejavaxannotationtojakarta): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`.
* [org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta](../../../recipes/java/migrate/jakarta/ehcachejavaxtojakarta):
* [org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta](../../../recipes/java/migrate/jakarta/jacksonjavaxtojakarta):
* [org.openrewrite.java.migrate.jakarta.JavaxActivationMigrationToJakartaActivation](../../../recipes/java/migrate/jakarta/javaxactivationmigrationtojakartaactivation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationMigrationToJakartaAnnotation](../../../recipes/java/migrate/jakarta/javaxannotationmigrationtojakartaannotation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationPackageToJakarta](../../../recipes/java/migrate/jakarta/javaxannotationpackagetojakarta): Change type of classes in the `javax.annotation` package to jakarta.
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationSecurityPackageToJakarta](../../../recipes/java/migrate/jakarta/javaxannotationsecuritypackagetojakarta): Change type of classes in the `javax.annotation.security` package to jakarta.
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationSqlPackageToJakarta](../../../recipes/java/migrate/jakarta/javaxannotationsqlpackagetojakarta): Change type of classes in the `javax.annotation.sql` package to jakarta.
* [org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch](../../../recipes/java/migrate/jakarta/javaxbatchmigrationtojakartabatch): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxDecoratorToJakartaDecorator](../../../recipes/java/migrate/jakarta/javaxdecoratortojakartadecorator): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb](../../../recipes/java/migrate/jakarta/javaxejbtojakartaejb): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxElToJakartaEl](../../../recipes/java/migrate/jakarta/javaxeltojakartael): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxEnterpriseToJakartaEnterprise](../../../recipes/java/migrate/jakarta/javaxenterprisetojakartaenterprise): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxFacesToJakartaFaces](../../../recipes/java/migrate/jakarta/javaxfacestojakartafaces): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxInjectMigrationToJakartaInject](../../../recipes/java/migrate/jakarta/javaxinjectmigrationtojakartainject): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxInterceptorToJakartaInterceptor](../../../recipes/java/migrate/jakarta/javaxinterceptortojakartainterceptor): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxJmsToJakartaJms](../../../recipes/java/migrate/jakarta/javaxjmstojakartajms): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxJsonToJakartaJson](../../../recipes/java/migrate/jakarta/javaxjsontojakartajson): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxJwsToJakartaJws](../../../recipes/java/migrate/jakarta/javaxjwstojakartajws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxMailToJakartaMail](../../../recipes/java/migrate/jakarta/javaxmailtojakartamail): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta](../../../recipes/java/migrate/jakarta/javaxmigrationtojakarta): Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace.
* [org.openrewrite.java.migrate.jakarta.JavaxPersistenceXmlToJakartaPersistenceXml](../../../recipes/java/migrate/jakarta/javaxpersistencexmltojakartapersistencexml):
* [org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence](../../../recipes/java/migrate/jakarta/javaxpersistencetojakartapersistence): Java EE has been rebranded to Jakarta EE, necessitating a package relocation
* [org.openrewrite.java.migrate.jakarta.JavaxResourceToJakartaResource](../../../recipes/java/migrate/jakarta/javaxresourcetojakartaresource): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxSecurityToJakartaSecurity](../../../recipes/java/migrate/jakarta/javaxsecuritytojakartasecurity): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxServletToJakartaServlet](../../../recipes/java/migrate/jakarta/javaxservlettojakartaservlet): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxTransactionMigrationToJakartaTransaction](../../../recipes/java/migrate/jakarta/javaxtransactionmigrationtojakartatransaction): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation](../../../recipes/java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxWebsocketToJakartaWebsocket](../../../recipes/java/migrate/jakarta/javaxwebsockettojakartawebsocket): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxWsToJakartaWs](../../../recipes/java/migrate/jakarta/javaxwstojakartaws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind](../../../recipes/java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxXmlSoapToJakartaXmlSoap](../../../recipes/java/migrate/jakarta/javaxxmlsoaptojakartaxmlsoap): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs](../../../recipes/java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation.
* [org.openrewrite.java.migrate.jakarta.JohnzonJavaxToJakarta](../../../recipes/java/migrate/jakarta/johnzonjavaxtojakarta):
* [org.openrewrite.java.migrate.jakarta.RestAssuredJavaxToJakarta](../../../recipes/java/migrate/jakarta/restassuredjavaxtojakarta):
* [org.openrewrite.java.migrate.lombok.UpdateLombokToJava17](../../../recipes/java/migrate/lombok/updatelomboktojava17): Update Lombok dependency to a version that is compatible with Java 17.
* [org.openrewrite.java.security.secrets.FindArtifactorySecrets](../../../recipes/java/security/secrets/findartifactorysecrets): Locates Artifactory secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindAwsSecrets](../../../recipes/java/security/secrets/findawssecrets): Locates AWS secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindAzureSecrets](../../../recipes/java/security/secrets/findazuresecrets): Locates Azure secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindDiscordSecrets](../../../recipes/java/security/secrets/finddiscordsecrets): Locates Discord secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindGenericSecrets](../../../recipes/java/security/secrets/findgenericsecrets): Locates generic secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindGitHubSecrets](../../../recipes/java/security/secrets/findgithubsecrets): Locates GitHub secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindGoogleSecrets](../../../recipes/java/security/secrets/findgooglesecrets): Locates Google secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindHerokuSecrets](../../../recipes/java/security/secrets/findherokusecrets): Locates Heroku secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindJwtSecrets](../../../recipes/java/security/secrets/findjwtsecrets): Locates JWTs stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindMailChimpSecrets](../../../recipes/java/security/secrets/findmailchimpsecrets): Locates MailChimp secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindMailgunSecrets](../../../recipes/java/security/secrets/findmailgunsecrets): Locates Mailgun secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindNpmSecrets](../../../recipes/java/security/secrets/findnpmsecrets): Locates NPM secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindPasswordInUrlSecrets](../../../recipes/java/security/secrets/findpasswordinurlsecrets): Locates URLs that contain passwords in plain text.
* [org.openrewrite.java.security.secrets.FindPayPalSecrets](../../../recipes/java/security/secrets/findpaypalsecrets): Locates PayPal secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindPgpSecrets](../../../recipes/java/security/secrets/findpgpsecrets): Locates PGP secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindPicaticSecrets](../../../recipes/java/security/secrets/findpicaticsecrets): Locates Picatic secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindRsaSecrets](../../../recipes/java/security/secrets/findrsasecrets): Locates RSA private keys stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindSecrets](../../../recipes/java/security/secrets/findsecrets): Locates secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindSecretsByPattern](../../../recipes/java/security/secrets/findsecretsbypattern): A secret is a literal that matches any one of the provided patterns.
* [org.openrewrite.java.security.secrets.FindSendGridSecrets](../../../recipes/java/security/secrets/findsendgridsecrets): Locates SendGrid secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindSlackSecrets](../../../recipes/java/security/secrets/findslacksecrets): Locates Slack secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindSquareSecrets](../../../recipes/java/security/secrets/findsquaresecrets): Locates Square secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindSshSecrets](../../../recipes/java/security/secrets/findsshsecrets): Locates SSH secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindStripeSecrets](../../../recipes/java/security/secrets/findstripesecrets): Locates Stripe secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindTelegramSecrets](../../../recipes/java/security/secrets/findtelegramsecrets): Locates Telegram secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindTwilioSecrets](../../../recipes/java/security/secrets/findtwiliosecrets): Locates Twilio secrets stored in plain text in code.
* [org.openrewrite.java.security.secrets.FindTwitterSecrets](../../../recipes/java/security/secrets/findtwittersecrets): Locates Twitter secrets stored in plain text in code.
* [org.openrewrite.java.spring.AddSpringProperty](../../../recipes/java/spring/addspringproperty):
* [org.openrewrite.java.spring.ChangeSpringPropertyKey](../../../recipes/java/spring/changespringpropertykey):
* [org.openrewrite.java.spring.DeleteSpringProperty](../../../recipes/java/spring/deletespringproperty):
* [org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax](../../../recipes/java/spring/boot2/migratehibernatecontraintstojavax): `org.hibernate.validator.constraints` were deprecated in 1.x. in favor of their javax counterparts.
* [org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization](../../../recipes/java/spring/boot3/actuatorendpointsanitization): Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. This recipe maintains the previous behavior but adds a warning comment that these settings should be reviewed. See https://github.com/openrewrite/rewrite-spring/issues/228
* [org.openrewrite.java.spring.boot3.LegacyJmxExposure](../../../recipes/java/spring/boot3/legacyjmxexposure): Spring Boot 3.0 only exposes the health endpoint via JMX. This change exposes all actuator endpoints via JMX to maintain parity with Spring Boot 2.x. See https://github.com/openrewrite/rewrite-spring/issues/229
* [org.openrewrite.java.spring.boot3.Saml](../../../recipes/java/spring/boot3/saml): Renames spring.security.saml2.relyingparty.registration.(any).identityprovider to spring.security.saml2.relyingparty.registration.(any).assertingparty.
* [org.openrewrite.java.spring.boot3.SpringBoot2To3Migration](../../../recipes/java/spring/boot3/springboot2to3migration): Migrates Spring Boot 2.x to latest version of 3.x
* [org.openrewrite.java.spring.boot3.SpringBootProperties\_3\_0\_0](../../../recipes/java/spring/boot3/springbootproperties\_3\_0\_0): Migrate properties found in `application.properties` and `application.yml`.
* [org.openrewrite.java.spring.framework.MigrateHandlerInterceptor](../../../recipes/java/spring/framework/migratehandlerinterceptor): Deprecated as of 5.3 in favor of implementing `HandlerInterceptor` and/or `AsyncHandlerInterceptor`.
* [org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter](../../../recipes/java/spring/framework/migratewebmvcconfigureradapter): As of 5.0 `WebMvcConfigurer` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter.
* [org.openrewrite.java.spring.framework.UpgradeSpringFramework\_5\_0](../../../recipes/java/spring/framework/upgradespringframework\_5\_0): Upgrade to Spring Framework to 5.0 from any prior version.
* [org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder](../../../recipes/java/testing/cleanup/assertionsargumentorder): Assertions such as `org.junit.Assert.assertEquals` expect the first argument to be the expected value and the second argument to be the actual value; for `org.testng.Assert`, it’s the other way around. This recipe detects `J.Literal`, `J.NewArray`, and `java.util.Iterable` arguments swapping them if necessary so that the error messages will be confusing.
* [org.openrewrite.maven.AddRepository](../../../recipes/maven/addrepository):
* [org.openrewrite.maven.search.EffectiveMavenRepositories](../../../recipes/maven/search/effectivemavenrepositories): Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the AST was produced.
* [org.openrewrite.xml.security.AddOwaspDateBoundSuppressions](../../../recipes/xml/security/addowaspdateboundsuppressions): Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html.
* [org.openrewrite.xml.security.RemoveOwaspSuppressions](../../../recipes/xml/security/removeowaspsuppressions): Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files: https://jeremylong.github.io/DependencyCheck/general/suppression.html.
* [org.openrewrite.xml.security.UpdateOwaspSuppressionDate](../../../recipes/xml/security/updateowaspsuppressiondate): Updates the expiration date for OWASP suppressions having a matching cve tag. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html.

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
* **org.openrewrite.java.spring.cve.Spring4Shell**: See the [blog post](https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement#status) on the issue. This recipe can be further refined as more information becomes available.
* **org.openrewrite.xml.security.DateBoundSuppressions**: Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html
* **org.openrewrite.xml.security.RemoveSuppressions**: Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files: https://jeremylong.github.io/DependencyCheck/general/suppression.html

### Changed Recipes

* [org.openrewrite.FindQuarks](../../../recipes/findquarks) was changed:
  * Old Options:
    * `includeAll: { type: Boolean, required: false }`
  * New Options:
    * `None`
* [org.openrewrite.java.cleanup.MethodNameCasing](../../../recipes/java/cleanup/methodnamecasing) was changed:
  * Old Options:
    * `includeTestSources: { type: Boolean, required: false }`
  * New Options:
    * `includeTestSources: { type: Boolean, required: false }`
    * `renamePublicMethods: { type: Boolean, required: false }`
* [org.openrewrite.java.search.FindAnnotations](../../../recipes/java/search/findannotations) was changed:
  * Old Options:
    * `annotationPattern: { type: String, required: true }`
  * New Options:
    * `annotationPattern: { type: String, required: true }`
    * `matchMetaAnnotations: { type: Boolean, required: false }`
* [org.openrewrite.java.logging.ParameterizedLogging](../../../recipes/java/logging/parameterizedlogging) was changed:
  * Old Options:
    * `methodPattern: { type: String, required: true }`
  * New Options:
    * `methodPattern: { type: String, required: true }`
    * `removeToString: { type: Boolean, required: false }`
* [org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId](../../../recipes/maven/changemanageddependencygroupidandartifactid) was changed:
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
* [org.openrewrite.java.spring.ExpandProperties](../../../recipes/java/spring/expandproperties) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `sourceFileMask: { type: String, required: false }`
