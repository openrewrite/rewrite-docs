## New Artifacts
* rewrite-cloud-suitability-analyzer

## New Recipes
* [org.openrewrite.FindParseFailures](https://docs.openrewrite.org/reference/recipes/findparsefailures): This recipe explores parse failures after an AST is produced for classifying the types of failures that can occur and prioritizing fixes according to the most common problems. 
* [org.openrewrite.config.CompositeRecipe](https://docs.openrewrite.org/reference/recipes/config/compositerecipe):  
* [org.openrewrite.gradle.AddProperty](https://docs.openrewrite.org/reference/recipes/gradle/addproperty): Add a property to the `gradle.properties` file. 
* [org.openrewrite.gradle.plugins.AddGradleEnterprise](https://docs.openrewrite.org/reference/recipes/gradle/plugins/addgradleenterprise): Add the Gradle Enterprise plugin to `settings.gradle(.kts)`. 
* [org.openrewrite.gradle.plugins.UpgradePluginVersion](https://docs.openrewrite.org/reference/recipes/gradle/plugins/upgradepluginversion): Update a Gradle plugin by id to a later version. 
* [org.openrewrite.gradle.search.EnableGradleParallelExecution](https://docs.openrewrite.org/reference/recipes/gradle/search/enablegradleparallelexecution): Most builds consist of more than one project and some of those projects are usually independent of one another. Yet Gradle will only run one task at a time by default, regardless of the project structure. By using the `--parallel` switch, you can force Gradle to execute tasks in parallel as long as those tasks are in different projects. See the [Gradle performance documentation](https://docs.gradle.org/current/userguide/performance.html#parallel_execution) for more. 
* [org.openrewrite.gradle.search.FindGradleProject](https://docs.openrewrite.org/reference/recipes/gradle/search/findgradleproject): Gradle projects are those with `build.gradle` or `build.gradle.kts` files. 
* [org.openrewrite.gradle.search.FindPlugins](https://docs.openrewrite.org/reference/recipes/gradle/search/findplugins): Find a Gradle plugin by id. 
* [org.openrewrite.java.cleanup.AvoidBoxedBooleanExpressions](https://docs.openrewrite.org/reference/recipes/java/cleanup/avoidboxedbooleanexpressions): Under certain conditions the `java.lang.Boolean` type is used as an expression, and it may throw a `NullPointerException` if the value is null. 
* [org.openrewrite.java.cleanup.FixStringFormatExpressions](https://docs.openrewrite.org/reference/recipes/java/cleanup/fixstringformatexpressions): Fix `String#format` and `String#formatted` expressions by replacing `\n` newline characters with `%n` and removing any unused arguments. Note this recipe is scoped to only transform format expressions which do not specify the argument index. 
* [org.openrewrite.java.cleanup.RemoveEmptyJavaDocParameters](https://docs.openrewrite.org/reference/recipes/java/cleanup/removeemptyjavadocparameters): Removes `@params`, `@return`, and `@throws` with no description from JavaDocs. 
* [org.openrewrite.java.cleanup.RemoveUnusedPrivateFields](https://docs.openrewrite.org/reference/recipes/java/cleanup/removeunusedprivatefields): If a private field is declared but not used in the program, it can be considered dead code and should therefore be removed. 
* [org.openrewrite.java.cleanup.ReplaceThreadRunWithThreadStart](https://docs.openrewrite.org/reference/recipes/java/cleanup/replacethreadrunwiththreadstart): `Thread.run()` should not be called directly. 
* [org.openrewrite.java.cleanup.UpperCaseLiteralSuffixes](https://docs.openrewrite.org/reference/recipes/java/cleanup/uppercaseliteralsuffixes): Using upper case literal suffixes for declaring literals is less ambiguous, e.g., `1l` versus `1L`. 
* [org.openrewrite.java.cleanup.UseForEachRemoveInsteadOfSetRemoveAll](https://docs.openrewrite.org/reference/recipes/java/cleanup/useforeachremoveinsteadofsetremoveall): Using `java.util.Collection#forEach(Set::remove)` rather than `java.util.Set#removeAll(java.util.Collection)` may improve performance due to a possible O(n^2) complexity. 
* [org.openrewrite.java.cleanup.UseListSort](https://docs.openrewrite.org/reference/recipes/java/cleanup/uselistsort): The `java.util.Collections#sort(..)` implementation defers to the `java.util.List#sort(Comparator)`, replaced it with the `java.util.List#sort(Comparator)` implementation for better readability. 
* [org.openrewrite.java.logging.slf4j.Slf4jBestPractices](https://docs.openrewrite.org/reference/recipes/java/logging/slf4j/slf4jbestpractices): Applies best practices to logging with SLF4J. 
* [org.openrewrite.java.migrate.UpgradeToJava17](https://docs.openrewrite.org/reference/recipes/java/migrate/upgradetojava17): This recipe will apply changes commonly needed when migrating to Java 17. Specifically, for those applications that are built on Java 8, this recipe will update and add dependencies on J2EE libraries that are no longer directly bundled with the JDK. This recipe will also replace deprecated API with equivalents when there is a clear migration strategy. Build files will also be updated to use Java 17 as the target/source and plugins will be also be upgraded to versions that are compatible with Java 17.
* [org.openrewrite.java.migrate.jakarta.ChangeJavaxAnnotationToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/changejavaxannotationtojakarta): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`. 
* [org.openrewrite.java.migrate.jakarta.EhcacheJavaxToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/ehcachejavaxtojakarta):  
* [org.openrewrite.java.migrate.jakarta.JacksonJavaxToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/jacksonjavaxtojakarta):  
* [org.openrewrite.java.migrate.jakarta.JavaxActivationMigrationToJakartaActivation](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxactivationmigrationtojakartaactivation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationMigrationToJakartaAnnotation](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxannotationmigrationtojakartaannotation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationPackageToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxannotationpackagetojakarta): Change type of classes in the `javax.annotation` package to jakarta. 
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationSecurityPackageToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxannotationsecuritypackagetojakarta): Change type of classes in the `javax.annotation.security` package to jakarta. 
* [org.openrewrite.java.migrate.jakarta.JavaxAnnotationSqlPackageToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxannotationsqlpackagetojakarta): Change type of classes in the `javax.annotation.sql` package to jakarta. 
* [org.openrewrite.java.migrate.jakarta.JavaxBatchMigrationToJakartaBatch](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxbatchmigrationtojakartabatch): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxDecoratorToJakartaDecorator](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxdecoratortojakartadecorator): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxEjbToJakartaEjb](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxejbtojakartaejb): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxElToJakartaEl](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxeltojakartael): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxEnterpriseToJakartaEnterprise](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxenterprisetojakartaenterprise): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxFacesToJakartaFaces](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxfacestojakartafaces): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxInjectMigrationToJakartaInject](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxinjectmigrationtojakartainject): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxInterceptorToJakartaInterceptor](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxinterceptortojakartainterceptor): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxJmsToJakartaJms](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxjmstojakartajms): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxJsonToJakartaJson](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxjsontojakartajson): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxJwsToJakartaJws](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxjwstojakartajws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxMailToJakartaMail](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxmailtojakartamail): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxmigrationtojakarta): Jakarta EE 9 is the first version of Jakarta EE that uses the new `jakarta` namespace. 
* [org.openrewrite.java.migrate.jakarta.JavaxPeristenceXmlToJakartaPersistenceXml](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxperistencexmltojakartapersistencexml):  
* [org.openrewrite.java.migrate.jakarta.JavaxPersistenceToJakartaPersistence](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxpersistencetojakartapersistence): Java EE has been rebranded to Jakarta EE, necessitating a package relocation 
* [org.openrewrite.java.migrate.jakarta.JavaxResourceToJakartaResource](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxresourcetojakartaresource): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxSecurityToJakartaSecurity](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxsecuritytojakartasecurity): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxServletToJakartaServlet](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxservlettojakartaservlet): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxTransactionMigrationToJakartaTransaction](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxtransactionmigrationtojakartatransaction): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxValidationMigrationToJakartaValidation](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxvalidationmigrationtojakartavalidation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxWebsocketToJakartaWebsocket](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxwebsockettojakartawebsocket): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxWsToJakartaWs](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxwstojakartaws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxXmlBindMigrationToJakartaXmlBind](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxxmlbindmigrationtojakartaxmlbind): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxXmlSoapToJakartaXmlSoap](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxxmlsoaptojakartaxmlsoap): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxXmlWsMigrationToJakartaXmlWs](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/javaxxmlwsmigrationtojakartaxmlws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.jakarta.JohnzonJavaxToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/johnzonjavaxtojakarta):  
* [org.openrewrite.java.migrate.jakarta.RestAssuredJavaxToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/jakarta/restassuredjavaxtojakarta):  
* [org.openrewrite.java.migrate.lombok.UpdateLombokToJava17](https://docs.openrewrite.org/reference/recipes/java/migrate/lombok/updatelomboktojava17): Update Lombok dependency to a version that is compatible with Java 17. 
* [org.openrewrite.java.security.secrets.FindArtifactorySecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findartifactorysecrets): Locates Artifactory secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindAwsSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findawssecrets): Locates AWS secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindAzureSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findazuresecrets): Locates Azure secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindDiscordSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/finddiscordsecrets): Locates Discord secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindGenericSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findgenericsecrets): Locates generic secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindGitHubSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findgithubsecrets): Locates GitHub secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindGoogleSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findgooglesecrets): Locates Google secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindHerokuSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findherokusecrets): Locates Heroku secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindJwtSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findjwtsecrets): Locates JWTs stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindMailChimpSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findmailchimpsecrets): Locates MailChimp secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindMailgunSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findmailgunsecrets): Locates Mailgun secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindNpmSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findnpmsecrets): Locates NPM secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindPasswordInUrlSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findpasswordinurlsecrets): Locates URLs that contain passwords in plain text. 
* [org.openrewrite.java.security.secrets.FindPayPalSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findpaypalsecrets): Locates PayPal secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindPgpSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findpgpsecrets): Locates PGP secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindPicaticSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findpicaticsecrets): Locates Picatic secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindRsaSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findrsasecrets): Locates RSA private keys stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findsecrets): Locates secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindSecretsByPattern](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findsecretsbypattern): A secret is a literal that matches any one of the provided patterns. 
* [org.openrewrite.java.security.secrets.FindSendGridSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findsendgridsecrets): Locates SendGrid secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindSlackSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findslacksecrets): Locates Slack secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindSquareSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findsquaresecrets): Locates Square secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindSshSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findsshsecrets): Locates SSH secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindStripeSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findstripesecrets): Locates Stripe secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindTelegramSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findtelegramsecrets): Locates Telegram secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindTwilioSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findtwiliosecrets): Locates Twilio secrets stored in plain text in code. 
* [org.openrewrite.java.security.secrets.FindTwitterSecrets](https://docs.openrewrite.org/reference/recipes/java/security/secrets/findtwittersecrets): Locates Twitter secrets stored in plain text in code. 
* [org.openrewrite.java.spring.AddSpringProperty](https://docs.openrewrite.org/reference/recipes/java/spring/addspringproperty):  
* [org.openrewrite.java.spring.ChangeSpringPropertyKey](https://docs.openrewrite.org/reference/recipes/java/spring/changespringpropertykey):  
* [org.openrewrite.java.spring.DeleteSpringProperty](https://docs.openrewrite.org/reference/recipes/java/spring/deletespringproperty):  
* [org.openrewrite.java.spring.boot2.MigrateHibernateContraintsToJavax](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/migratehibernatecontraintstojavax): `org.hibernate.validator.constraints` were deprecated in 1.x. in favor of their javax counterparts. 
* [org.openrewrite.java.spring.boot3.ActuatorEndpointSanitization](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/actuatorendpointsanitization): Spring Boot 3.0 removed the key-based sanitization mechanism used in Spring Boot 2.x in favor of a unified approach. This recipe maintains the previous behavior but adds a warning comment that these settings should be reviewed. See https://github.com/openrewrite/rewrite-spring/issues/228 
* [org.openrewrite.java.spring.boot3.LegacyJmxExposure](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/legacyjmxexposure): Spring Boot 3.0 only exposes the health endpoint via JMX. This change exposes all actuator endpoints via JMX to maintain parity with Spring Boot 2.x. See See https://github.com/openrewrite/rewrite-spring/issues/229 
* [org.openrewrite.java.spring.boot3.Saml](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/saml): Renames spring.security.saml2.relyingparty.registration.(any).identityprovider to spring.security.saml2.relyingparty.registration.(any).assertingparty. 
* [org.openrewrite.java.spring.boot3.SpringBoot2To3Migration](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/springboot2to3migration): Migrates Spring Boot 2.x to latest version of 3.x 
* [org.openrewrite.java.spring.boot3.SpringBootProperties_3_0_0](https://docs.openrewrite.org/reference/recipes/java/spring/boot3/springbootproperties_3_0_0): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.java.spring.framework.MigrateHandlerInterceptor](https://docs.openrewrite.org/reference/recipes/java/spring/framework/migratehandlerinterceptor): Deprecated as of 5.3 in favor of implementing `HandlerInterceptor` and/or `AsyncHandlerInterceptor`. 
* [org.openrewrite.java.spring.framework.MigrateWebMvcConfigurerAdapter](https://docs.openrewrite.org/reference/recipes/java/spring/framework/migratewebmvcconfigureradapter): As of 5.0 `WebMvcConfigurer` has default methods (made possible by a Java 8 baseline) and can be implemented directly without the need for this adapter. 
* [org.openrewrite.java.spring.framework.UpgradeSpringFramework_5_0](https://docs.openrewrite.org/reference/recipes/java/spring/framework/upgradespringframework_5_0): Upgrade to Spring Framework to 5.0 from any prior version. 
* [org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder](https://docs.openrewrite.org/reference/recipes/java/testing/cleanup/assertionsargumentorder): Assertions such as `org.junit.Assert.assertEquals` expect the first argument to be the expected value and the second argument to be the actual value; for `org.testng.Assert`, it’s the other way around.  This recipe detects `J.Literal`, `J.NewArray`, and `java.util.Iterable` arguments swapping them if necessary so that the error messages will be confusing. 
* [org.openrewrite.maven.AddRepository](https://docs.openrewrite.org/reference/recipes/maven/addrepository):  
* [org.openrewrite.maven.search.EffectiveMavenRepositories](https://docs.openrewrite.org/reference/recipes/maven/search/effectivemavenrepositories): Lists the Maven repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Maven settings file (and those contributed by active profiles) as determined when the AST was produced. 
* [org.openrewrite.xml.security.AddOwaspDateBoundSuppressions](https://docs.openrewrite.org/reference/recipes/xml/security/addowaspdateboundsuppressions): Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html. 
* [org.openrewrite.xml.security.RemoveOwaspSuppressions](https://docs.openrewrite.org/reference/recipes/xml/security/removeowaspsuppressions): Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files: https://jeremylong.github.io/DependencyCheck/general/suppression.html. 
* [org.openrewrite.xml.security.UpdateOwaspSuppressionDate](https://docs.openrewrite.org/reference/recipes/xml/security/updateowaspsuppressiondate): Updates the expiration date for OWASP suppressions having a matching cve tag. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html. 

## Removed Recipes
* [org.openrewrite.gradle.UpgradePluginVersion](https://docs.openrewrite.org/reference/recipes/gradle/upgradepluginversion): Update a Gradle plugin by id to a later version. 
* [org.openrewrite.gradle.search.FindPlugin](https://docs.openrewrite.org/reference/recipes/gradle/search/findplugin): Find a Gradle plugin by id. 
* [org.openrewrite.java.migrate.ChangeJavaxAnnotationToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/changejavaxannotationtojakarta): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. Excludes `javax.annotation.processing`. 
* [org.openrewrite.java.migrate.JavaxActivationMigrationToJakartaActivation](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxactivationmigrationtojakartaactivation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxAnnotationMigrationToJakartaAnnotation](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxannotationmigrationtojakartaannotation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxAnnotationPackageToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxannotationpackagetojakarta): Change type of classes in the `javax.annotation` package to jakarta. 
* [org.openrewrite.java.migrate.JavaxAnnotationSecurityPackageToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxannotationsecuritypackagetojakarta): Change type of classes in the `javax.annotation.security` package to jakarta. 
* [org.openrewrite.java.migrate.JavaxAnnotationSqlPackageToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxannotationsqlpackagetojakarta): Change type of classes in the `javax.annotation.sql` package to jakarta. 
* [org.openrewrite.java.migrate.JavaxBatchMigrationToJakartaBatch](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxbatchmigrationtojakartabatch): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxDecoratorToJakartaDecorator](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxdecoratortojakartadecorator): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxEjbToJakartaEjb](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxejbtojakartaejb): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxElToJakartaEl](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxeltojakartael): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxEnterpriseToJakartaEnterprise](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxenterprisetojakartaenterprise): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxFacesToJakartaFaces](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxfacestojakartafaces): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxInjectMigrationToJakartaInject](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxinjectmigrationtojakartainject): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxInterceptorToJakartaInterceptor](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxinterceptortojakartainterceptor): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxJmsToJakartaJms](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxjmstojakartajms): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxJsonToJakartaJson](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxjsontojakartajson): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxJwsToJakartaJws](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxjwstojakartajws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxMailToJakartaMail](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxmailtojakartamail): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxMigrationToJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxmigrationtojakarta): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxPeristenceXmlToJakartaPersistenceXml](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxperistencexmltojakartapersistencexml):  
* [org.openrewrite.java.migrate.JavaxPersistenceToJakartaPersistence](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxpersistencetojakartapersistence): Java EE has been rebranded to Jakarta EE, necessitating a package relocation 
* [org.openrewrite.java.migrate.JavaxResourceToJakartaResource](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxresourcetojakartaresource): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxSecurityToJakartaSecurity](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxsecuritytojakartasecurity): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxServletToJakartaServlet](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxservlettojakartaservlet): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxTransactionMigrationToJakartaTransaction](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxtransactionmigrationtojakartatransaction): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxValidationMigrationToJakartaValidation](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxvalidationmigrationtojakartavalidation): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxWebsocketToJakartaWebsocket](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxwebsockettojakartawebsocket): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxWsToJakartaWs](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxwstojakartaws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxXmlBindMigrationToJakartaXmlBind](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxxmlbindmigrationtojakartaxmlbind): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxXmlSoapToJakartaXmlSoap](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxxmlsoaptojakartaxmlsoap): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.JavaxXmlWsMigrationToJakartaXmlWs](https://docs.openrewrite.org/reference/recipes/java/migrate/javaxxmlwsmigrationtojakartaxmlws): Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* [org.openrewrite.java.migrate.UpgradeJava17](https://docs.openrewrite.org/reference/recipes/java/migrate/upgradejava17): This recipe will apply changes commonly needed when migrating to Java 17, including intermediate versions. 
* [org.openrewrite.java.migrate.javax.ReplaceJavaxJaxbWithJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/replacejavaxjaxbwithjakarta): This recipe will replace the legacy `javax-api` artifact with the Jakarta EE equivalent. 
* [org.openrewrite.java.migrate.javax.ReplaceJavaxJaxwsWithJakarta](https://docs.openrewrite.org/reference/recipes/java/migrate/javax/replacejavaxjaxwswithjakarta): This recipe will replace the legacy javax `jaxws-api` artifact with the Jakarta EE equivalent. The jakarta JAX-WS API 2.3.x is part of JakartaEE 8 and still uses `javax` packaging. 
* [org.openrewrite.java.spring.boot2.MigrateNotBlankPackageName](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/migratenotblankpackagename): `org.hibernate.validator.constraints.NotBlank` was deprecated in 1.x. 
* [org.openrewrite.java.spring.boot2.MigrateNotEmptyPackageName](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/migratenotemptypackagename): `org.hibernate.validator.constraints.NotEmpty` was deprecated in 1.x. 
* [org.openrewrite.java.spring.boot2.SpringBoot2To3Migration](https://docs.openrewrite.org/reference/recipes/java/spring/boot2/springboot2to3migration): Migrates Spring Boot 2.x to latest version of 3.x 
* [org.openrewrite.java.spring.cve.Spring4Shell](https://docs.openrewrite.org/reference/recipes/java/spring/cve/spring4shell): See the [blog post](https://spring.io/blog/2022/03/31/spring-framework-rce-early-announcement#status) on the issue. This recipe can be further refined as more information becomes available. 
* [org.openrewrite.xml.security.DateBoundSuppressions](https://docs.openrewrite.org/reference/recipes/xml/security/dateboundsuppressions): Adds an expiration date to all OWASP suppressions in order to ensure that they are periodically reviewed. For use with the OWASP `dependency-check` tool. More details: https://jeremylong.github.io/DependencyCheck/general/suppression.html 
* [org.openrewrite.xml.security.RemoveSuppressions](https://docs.openrewrite.org/reference/recipes/xml/security/removesuppressions): Remove all OWASP suppressions with a suppression end date in the past, as these are no longer valid. For use with the OWASP `dependency-check` tool. More details on OWASP suppression files: https://jeremylong.github.io/DependencyCheck/general/suppression.html 

## Changed Recipes
* [org.openrewrite.FindQuarks](https://docs.openrewrite.org/reference/recipes/findquarks) was changed:
  * Old Options:
    * `includeAll: { type: Boolean, required: false }`
  * New Options:
    * `None`
* [org.openrewrite.java.cleanup.MethodNameCasing](https://docs.openrewrite.org/reference/recipes/java/cleanup/methodnamecasing) was changed:
  * Old Options:
    * `includeTestSources: { type: Boolean, required: false }`
  * New Options:
    * `includeTestSources: { type: Boolean, required: false }`
    * `renamePublicMethods: { type: Boolean, required: false }`
* [org.openrewrite.java.search.FindAnnotations](https://docs.openrewrite.org/reference/recipes/java/search/findannotations) was changed:
  * Old Options:
    * `annotationPattern: { type: String, required: true }`
  * New Options:
    * `annotationPattern: { type: String, required: true }`
    * `matchMetaAnnotations: { type: Boolean, required: false }`
* [org.openrewrite.java.logging.ParameterizedLogging](https://docs.openrewrite.org/reference/recipes/java/logging/parameterizedlogging) was changed:
  * Old Options:
    * `methodPattern: { type: String, required: true }`
  * New Options:
    * `methodPattern: { type: String, required: true }`
    * `removeToString: { type: Boolean, required: false }`
* [org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId](https://docs.openrewrite.org/reference/recipes/maven/changemanageddependencygroupidandartifactid) was changed:
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
* [org.openrewrite.java.spring.ExpandProperties](https://docs.openrewrite.org/reference/recipes/java/spring/expandproperties) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `sourceFileMask: { type: String, required: false }`