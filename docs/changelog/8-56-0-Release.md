---
description: What's changed in OpenRewrite version 8.56.0.
---

# 8.56.0 release (2025-06-25)

_Total recipe count: 3892_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Artifacts
* rewrite-cryptography
* rewrite-devcenter
* rewrite-netty

## New Recipes

* [io.moderne.cryptography.FindHardcodedAlgorithmChoice](https://docs.openrewrite.org/recipes/cryptography/findhardcodedalgorithmchoice): Locate hardcoded algorithm choices in cryptographic code. 
* [io.moderne.cryptography.FindHardcodedAlgorithmSpecificParameters](https://docs.openrewrite.org/recipes/cryptography/findhardcodedalgorithmspecificparameters): Locate hardcoded algorithm specific parameters in cryptographic code. 
* [io.moderne.cryptography.FindHardcodedCertificate](https://docs.openrewrite.org/recipes/cryptography/findhardcodedcertificate): Detects hardcoded PEM certificates passed into `CertificateFactory.generateCertificate()`. 
* [io.moderne.cryptography.FindHardcodedCipherSuitesOnSslSocket](https://docs.openrewrite.org/recipes/cryptography/findhardcodedciphersuitesonsslsocket): Detects hardcoded cipher suites in SSL socket configurations, which can lead to security vulnerabilities. 
* [io.moderne.cryptography.FindHardcodedCiphersuiteChoice](https://docs.openrewrite.org/recipes/cryptography/findhardcodedciphersuitechoice): Locate hardcoded ciphersuite choices in cryptographic code. 
* [io.moderne.cryptography.FindHardcodedKeyPairGenerator](https://docs.openrewrite.org/recipes/cryptography/findhardcodedkeypairgenerator): Detects hardcoded cryptographic algorithms. 
* [io.moderne.cryptography.FindHardcodedPrivateKey](https://docs.openrewrite.org/recipes/cryptography/findhardcodedprivatekey): Detects hardcoded PEM private keys passed into `KeyFactory.generatePrivate()`. 
* [io.moderne.cryptography.FindHardcodedProtocolChoice](https://docs.openrewrite.org/recipes/cryptography/findhardcodedprotocolchoice): Locate hardcoded protocol choices in cryptographic code. 
* [io.moderne.cryptography.FindHardcodedProtocolsOnSSLSocketCreation](https://docs.openrewrite.org/recipes/cryptography/findhardcodedprotocolsonsslsocketcreation): Finds hardcoded protocols in SSL socket creation methods, such as `SSLContext.getInstance(String)`. 
* [io.moderne.cryptography.FindHardcodedProtocolsOnSSLSocketSetProtocols](https://docs.openrewrite.org/recipes/cryptography/findhardcodedprotocolsonsslsocketsetprotocols): Detects hardcoded protocol versions in SSL socket configurations, which can hinder adaptability and security. 
* [io.moderne.cryptography.FindHardcodedRSAKeyGenParameterSpec](https://docs.openrewrite.org/recipes/cryptography/findhardcodedrsakeygenparameterspec): It is usually insecure to pass hardcoded numbers passed into `RSAKeyGenParameterSpec`. 
* [io.moderne.cryptography.FindHardcodedSecretKeySpec](https://docs.openrewrite.org/recipes/cryptography/findhardcodedsecretkeyspec): Detects hardcoded cryptographic algorithms. 
* [io.moderne.cryptography.FindSecurityProviderEditing](https://docs.openrewrite.org/recipes/cryptography/findsecurityproviderediting): Locate programmatic edits of the `Security` provider list. 
* [io.moderne.cryptography.FindSecuritySetProperties](https://docs.openrewrite.org/recipes/cryptography/findsecuritysetproperties): There is a defined set of properties that should not be set using `Security.setProperty(..)` as they can lead to security vulnerabilities. 
* [io.moderne.cryptography.FindSslConfiguration](https://docs.openrewrite.org/recipes/cryptography/findsslconfiguration): The configuration of Secure Socket Layer (SSL) and Transport Layer Security (TLS) is a key aspect of making a secure  application. This recipe detects and enumerates these configurations. 
* [io.moderne.cryptography.FindSslContextDefault](https://docs.openrewrite.org/recipes/cryptography/findsslcontextdefault): This includes anywhere where `SSLContext.setDefault` is called. 
* [io.moderne.cryptography.PostQuantumCryptography](https://docs.openrewrite.org/recipes/cryptography/postquantumcryptography): Locate cryptographic configuration which may need to be updated for a brave new post-quantum-supremacy world. 
* [io.moderne.devcenter.DevCenterStarter](https://docs.openrewrite.org/recipes/devcenter/devcenterstarter): This is a default DevCenter configuration that can be used as a starting point for your own DevCenter configuration. It includes a combination of upgrades, migrations, and security fixes. You can customize this configuration to suit your needs.
For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/dev-center/). 
* [io.moderne.devcenter.JUnitJupiterUpgrade](https://docs.openrewrite.org/recipes/devcenter/junitjupiterupgrade): Move to JUnit Jupiter. 
* [io.moderne.devcenter.JavaVersionUpgrade](https://docs.openrewrite.org/recipes/devcenter/javaversionupgrade): Determine the current state of a repository relative to a desired Java version upgrade. 
* [io.moderne.devcenter.LibraryUpgrade](https://docs.openrewrite.org/recipes/devcenter/libraryupgrade): Determine the current state of a repository relative to a desired library upgrade. 
* [io.moderne.devcenter.ParentPomUpgrade](https://docs.openrewrite.org/recipes/devcenter/parentpomupgrade): Determine the current state of a repository relative to a desired parent POM upgrade. 
* [io.moderne.devcenter.ReportAsSecurityIssues](https://docs.openrewrite.org/recipes/devcenter/reportassecurityissues): Look for results produced by recipes in the same recipe list that this recipe is part of, and report them as security issues in DevCenter. 
* [io.moderne.devcenter.SecurityOriginalStarter](https://docs.openrewrite.org/recipes/devcenter/securityoriginalstarter): This is the same set of recipes as the original DevCenter security card. 
* [io.moderne.devcenter.SecurityStarter](https://docs.openrewrite.org/recipes/devcenter/securitystarter): This recipe is a starter card to reveal common OWASP Top 10 issues in your source code. You can customize this configuration to suit your needs.
For more information on how to customize your DevCenter configuration, see the [DevCenter documentation](https://docs.moderne.io/user-documentation/moderne-platform/getting-started/dev-center/). 
* [io.moderne.hibernate.MigrateToHibernate70](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate70): This recipe will apply changes commonly needed when migrating to Hibernate 7.0.x. 
* [io.moderne.java.spring.cloud2020.SpringCloudProperties_2020](https://docs.openrewrite.org/recipes/java/spring/cloud2020/springcloudproperties_2020): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.cloud2021.SpringCloudProperties_2021](https://docs.openrewrite.org/recipes/java/spring/cloud2021/springcloudproperties_2021): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.cloud2022.SpringCloudProperties_2022](https://docs.openrewrite.org/recipes/java/spring/cloud2022/springcloudproperties_2022): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.cloud2023.SpringCloudProperties_2023](https://docs.openrewrite.org/recipes/java/spring/cloud2023/springcloudproperties_2023): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.cloud2024.SpringCloudProperties_2024](https://docs.openrewrite.org/recipes/java/spring/cloud2024/springcloudproperties_2024): Migrate properties found in `application.properties` and `application.yml`. 
* [io.moderne.java.spring.cloud2025.ChangeDeprecatedArtifacts](https://docs.openrewrite.org/recipes/java/spring/cloud2025/changedeprecatedartifacts):  
* [io.moderne.java.spring.cloud2025.SpringCloudProperties_2025](https://docs.openrewrite.org/recipes/java/spring/cloud2025/springcloudproperties_2025): Migrate properties found in `application.properties` and `application.yml`. 
* [io.quarkus.updates.camel.camel411.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel411/camelquarkusmigrationrecipe): Migrates `camel 4.10` quarkus application to `camel 4.11`. 
* [io.quarkus.updates.camel.camel412.CamelQuarkusMigrationRecipe](https://docs.openrewrite.org/recipes/io/quarkus/updates/camel/camel412/camelquarkusmigrationrecipe): Migrates `camel 4.11` quarkus application to `camel 4.12`. 
* [io.quarkus.updates.core.quarkus323.HibernateORMSchemaManagementProperties](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus323/hibernateormschemamanagementproperties):  
* [io.quarkus.updates.core.quarkus324.AddHibernateAnnotationProcessorIfNewJpaModelgenDependency](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/addhibernateannotationprocessorifnewjpamodelgendependency):  
* [io.quarkus.updates.core.quarkus324.AddHibernateAnnotationProcessorIfOldJpaModelgenDependency](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/addhibernateannotationprocessorifoldjpamodelgendependency):  
* [io.quarkus.updates.core.quarkus324.LogConsoleAsyncEnable](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/logconsoleasyncenable):  
* [io.quarkus.updates.core.quarkus324.MigrateFromHibernateOrmSessionMethodsRemovedIn7](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/migratefromhibernateormsessionmethodsremovedin7):  
* [io.quarkus.updates.core.quarkus324.MigrateFromHibernateOrmVariousRemovedIn7](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/migratefromhibernateormvariousremovedin7):  
* [io.quarkus.updates.core.quarkus324.RemoveJpaModelgenDependencies](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/removejpamodelgendependencies):  
* [io.quarkus.updates.core.quarkus324.ReplaceNewJpaModelgenAnnotationProcessor](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/replacenewjpamodelgenannotationprocessor):  
* [io.quarkus.updates.core.quarkus324.ReplaceOldJpaModelgenAnnotationProcessor](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus324/replaceoldjpamodelgenannotationprocessor):  
* [org.apache.camel.upgrade.camel412.CamelMigrationRecipe](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel412/camelmigrationrecipe): Migrates `camel 4.11` application to `camel 4.12`. 
* [org.apache.camel.upgrade.camel412.Java412Recipes](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel412/java412recipes): Apache Camel Java DSL migration from version 4.11 to 4.12. 
* [org.apache.camel.upgrade.camel412.scanClassesMoved](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel412/scanclassesmoved): The package scan classes has moved from camel-base-engine to camel-support JAR and moved to a new package - java. 
* [org.apache.camel.upgrade.camel412.scanClassesMovedMaven](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel412/scanclassesmovedmaven): The package scan classes has moved from camel-base-engine to camel-support JAR and moved to a new package - maven. 
* [org.apache.camel.upgrade.camel412.xmlDslBearer](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel412/xmldslbearer): Rest definition in XML DSL with security constraints, then bearer in YAML and XML DSL has been renamed to bearerToken to be aligned with Java DSL. 
* [org.apache.camel.upgrade.camel412.yamlDslBearer](https://docs.openrewrite.org/recipes/org/apache/camel/upgrade/camel412/yamldslbearer): Rest definition in Yaml DSL with security constraints, then bearer in YAML and XML DSL has been renamed to bearerToken to be aligned with Java DSL. 
* [org.openrewrite.MoveFile](https://docs.openrewrite.org/recipes/core/movefile): Move a file to a different directory. The file name will remain the same. 
* [org.openrewrite.apache.httpclient5.ChangeArgumentToTimeValue](https://docs.openrewrite.org/recipes/apache/httpclient5/changeargumenttotimevalue): In Apache Http Client 5.x migration, some methods that previously took a single long argument have changed to take a `TimeValue`. Previously in 4.x, all these methods were implicitly having the value expressed in milliseconds. By default this recipe uses `TimeUnit.MILLISECONDS` for the `TimeUnit` when creating a `TimeValue`. It is possible to specify this as a parameter. Since all affected methods of the Apache Http Client 5.x migration only have one long argument, the recipe applies with matched method invocations of exactly one parameter. 
* [org.openrewrite.apache.httpclient5.MigrateStringEntityStringCharsetConstructor](https://docs.openrewrite.org/recipes/apache/httpclient5/migratestringentitystringcharsetconstructor): Replace `new StringEntity(String, String)` with `new StringEntity(String, Charset)` to eliminate literal usage for charset parameters. 
* [org.openrewrite.apache.httpclient5.NewRequestLine](https://docs.openrewrite.org/recipes/apache/httpclient5/newrequestline): `HttpRequestBase::getStatusLine()` was removed in 5.x when `HttpRequestBase` was migrated to `HttpUriRequestBase`, so we replace it with `new RequestLine(HttpRequest)`. Ideally we will try to simply method chains for `getMethod`, `getUri` and `getProtocolVersion`, but there are some scenarios where `RequestLine` object is assigned or used directly, and we need to instantiate the object. 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpCore_5_NioClassMapping](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpcore_5_nioclassmapping): Mapping of all the compatible classes of Apache HttpCore 5.x from Apache HttpCore Nio 4.4.x. 
* [org.openrewrite.gitlab.ChangeComponent](https://docs.openrewrite.org/recipes/gitlab/changecomponent): Change a GitLab Component in use. 
* [org.openrewrite.gradle.AddPlatformDependency](https://docs.openrewrite.org/recipes/gradle/addplatformdependency): Add a gradle platform dependency to a `build.gradle` file in the correct configuration based on where it is used. 
* [org.openrewrite.java.flyway.AddFlywayModuleMySQL](https://docs.openrewrite.org/recipes/java/flyway/addflywaymodulemysql): Database modules for Flyway 10 have been split out into separate modules for maintainability. Add the `flyway-mysql` dependency if you are using MySQL with Flyway 10, as detailed on https://github.com/flyway/flyway/issues/3780. 
* [org.openrewrite.java.flyway.AddFlywayModuleOracle](https://docs.openrewrite.org/recipes/java/flyway/addflywaymoduleoracle): Database modules for Flyway 10 have been split out into separate modules for maintainability. Add the `flyway-database-oracle` dependency if you are using Oracle with Flyway 10, as detailed on https://github.com/flyway/flyway/issues/3780. 
* [org.openrewrite.java.flyway.AddFlywayModulePostgreSQL](https://docs.openrewrite.org/recipes/java/flyway/addflywaymodulepostgresql): Database modules for Flyway 10 have been split out in to separate modules for maintainability. Add the `flyway-database-postgresql` dependency if you are using PostgreSQL with Flyway 10, as detailed on https://github.com/flyway/flyway/issues/3780. 
* [org.openrewrite.java.flyway.MigrateToFlyway10](https://docs.openrewrite.org/recipes/java/flyway/migratetoflyway10): Migrate to Flyway 10. See details at [Flyway V10 has landed](https://documentation.red-gate.com/fd/flyway-v10-has-landed-222627771.html). 
* [org.openrewrite.java.jspecify.JSpecifyBestPractices](https://docs.openrewrite.org/recipes/java/jspecify/jspecifybestpractices): Apply JSpecify best practices, such as migrating off of alternatives, and adding missing `@Nullable` annotations. 
* [org.openrewrite.java.jspecify.MigrateToJSpecify](https://docs.openrewrite.org/recipes/java/jspecify/migratetojspecify): This recipe will migrate to JSpecify annotations from various other nullability annotation standards. 
* [org.openrewrite.java.liberty.ReplaceWSPrincipalGetCredential](https://docs.openrewrite.org/recipes/java/liberty/replacewsprincipalgetcredential): Replaces `WSCredential credential = WSPrincipal.getCredential();` with a `null` initializer + `try/catch` lookup. 
* [org.openrewrite.java.logging.ChangeLoggersToPrivate](https://docs.openrewrite.org/recipes/java/logging/changeloggerstoprivate): Ensures that logger fields are declared as `private` to encapsulate logging mechanics within the class. 
* [org.openrewrite.java.logging.slf4j.MatchIsLogLevelEnabledWithLogStatements](https://docs.openrewrite.org/recipes/java/logging/slf4j/matchisloglevelenabledwithlogstatements): Change any `if (is*Enabled())` statements that do not match the maximum log level used in the `then` part to use the matching `is*Enabled()` method for that log level. This ensures that the logging condition is consistent with the actual logging statements. 
* [org.openrewrite.java.logging.slf4j.StripToStringFromArguments](https://docs.openrewrite.org/recipes/java/logging/slf4j/striptostringfromarguments): Remove `.toString()` from logger call arguments; SLF4J will automatically call `toString()` on an argument when not a string, and do so only if the log level is enabled. 
* [org.openrewrite.java.migrate.AddStaticVariableOnProducerSessionBean](https://docs.openrewrite.org/recipes/java/migrate/addstaticvariableonproducersessionbean): Ensures that the fields annotated with `@Produces` which is inside the session bean (`@Stateless`, `@Stateful`, or `@Singleton`) are declared `static`. 
* [org.openrewrite.java.migrate.SwitchPatternMatching](https://docs.openrewrite.org/recipes/java/migrate/switchpatternmatching): ->- [JEP 441](https://openjdk.org/jeps/441) describes how some switch statements can be improved with pattern matching. This recipe applies some of those improvements where applicable. 
* [org.openrewrite.java.migrate.WasDevMvnChangeParentArtifactId](https://docs.openrewrite.org/recipes/java/migrate/wasdevmvnchangeparentartifactid): This recipe changes the artifactId of the `<parent>` tag in the `pom.xml` from `java8-parent` to `parent`. 
* [org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakartaFaces3x](https://docs.openrewrite.org/recipes/java/migrate/jakarta/faces2xmigrationtojakartafaces3x): Jakarta EE 9 uses Faces 3.0, a major upgrade to Jakarta packages and XML namespaces. 
* [org.openrewrite.java.migrate.jakarta.Faces3xMigrationToFaces4x](https://docs.openrewrite.org/recipes/java/migrate/jakarta/faces3xmigrationtofaces4x): Jakarta EE 10 uses Faces 4.0. 
* [org.openrewrite.java.migrate.jakarta.JakartaFacesConfigXml4](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartafacesconfigxml4): Jakarta EE 10 uses Faces version 4. 
* [org.openrewrite.java.migrate.jakarta.JakartaFacesTagLibraryXml4](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartafacestaglibraryxml4): Faces 4 uses facelet-taglib 4.0. 
* [org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE10](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartafacesxhtmlee10): Find and replace legacy JSF namespace URIs with Jakarta Faces URNs in XHTML files. 
* [org.openrewrite.java.migrate.jakarta.JakartaFacesXhtmlEE9](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartafacesxhtmlee9): Find and replace javax references to jakarta in XHTML files. 
* [org.openrewrite.java.migrate.jakarta.JakartaWebFragmentXml6](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartawebfragmentxml6): Faces 4 uses web-fragment 6.0. 
* [org.openrewrite.java.migrate.jakarta.JakartaWebXml6](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartawebxml6): Faces 4 uses web-app 6.0. 
* [org.openrewrite.java.migrate.jakarta.UpdateJakartaFacesApi3](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejakartafacesapi3): Java EE has been rebranded to Jakarta EE, necessitating a package relocation and upgrade. 
* [org.openrewrite.java.migrate.jakarta.UpdateManagedBeanToNamed](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatemanagedbeantonamed): Faces ManagedBean was deprecated in JSF 2.3 (EE8) and removed in Jakarta Faces 4.0 (EE10). Replace `@ManagedBean` with `@Named` for CDI-based bean management. 
* [org.openrewrite.java.migrate.jakarta.UpgradeFaces3OpenSourceLibraries](https://docs.openrewrite.org/recipes/java/migrate/jakarta/upgradefaces3opensourcelibraries): Upgrade PrimeFaces, OmniFaces, and MyFaces libraries to Jakarta EE9 versions. 
* [org.openrewrite.java.migrate.jakarta.UpgradeFaces4OpenSourceLibraries](https://docs.openrewrite.org/recipes/java/migrate/jakarta/upgradefaces4opensourcelibraries): Upgrade PrimeFaces, OmniFaces, and MyFaces libraries to Jakarta EE10 versions. 
* [org.openrewrite.java.migrate.javax.AddJaxbAPIDependencies](https://docs.openrewrite.org/recipes/java/migrate/javax/addjaxbapidependencies): This recipe will add explicit API dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well. 
* [org.openrewrite.java.migrate.javax.AddJaxbDependenciesWithRuntime](https://docs.openrewrite.org/recipes/java/migrate/javax/addjaxbdependencieswithruntime): This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well. 
* [org.openrewrite.java.migrate.javax.AddJaxbDependenciesWithoutRuntime](https://docs.openrewrite.org/recipes/java/migrate/javax/addjaxbdependencieswithoutruntime): This recipe will add explicit API dependencies without runtime dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing API dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. All JAXB runtime implementation dependencies are removed. 
* [org.openrewrite.java.migrate.lang.FindNonVirtualExecutors](https://docs.openrewrite.org/recipes/java/migrate/lang/findnonvirtualexecutors): Find all places where static `java.util.concurrent.Executors` method creates a non-virtual `java.util.concurrent.ExecutorService`. This recipe can be used to search fro `ExecutorService` that can be replaced by Virtual Thread executor. 
* [org.openrewrite.java.migrate.lang.FindVirtualThreadOpportunities](https://docs.openrewrite.org/recipes/java/migrate/lang/findvirtualthreadopportunities): Find opportunities to convert existing code to use Virtual Threads. 
* [org.openrewrite.java.migrate.lang.IfElseIfConstructToSwitch](https://docs.openrewrite.org/recipes/java/migrate/lang/ifelseifconstructtoswitch): Replace if-else-if-else with switch statements. In order to be replaced with a switch, all conditions must be on the same variable and there must be at least three cases. 
* [org.openrewrite.java.migrate.lang.NullCheckAsSwitchCase](https://docs.openrewrite.org/recipes/java/migrate/lang/nullcheckasswitchcase): In later Java 21+, null checks are valid in switch cases. This recipe will only add null checks to existing switch cases if there are no other statements in between them or if the block in the if statement is not impacting the flow of the switch. 
* [org.openrewrite.java.migrate.lang.RefineSwitchCases](https://docs.openrewrite.org/recipes/java/migrate/lang/refineswitchcases): Use guarded switch case labels and guards if all the statements in the switch block do if/else if/else on the guarded label. 
* [org.openrewrite.java.migrate.lang.SwitchCaseEnumGuardToLabel](https://docs.openrewrite.org/recipes/java/migrate/lang/switchcaseenumguardtolabel): Use switch case labels when a guard is checking equality with an enum. 
* [org.openrewrite.java.netty.EventLoopGroupToMultiThreadIoEventLoopGroupRecipes](https://docs.openrewrite.org/recipes/java/netty/eventloopgrouptomultithreadioeventloopgrouprecipes): Replaces Netty's `new *EventLoopGroup` with `new MultiThreadIoEventLoopGroup(*IoHandler.newFactory())`. 
* [org.openrewrite.java.netty.EventLoopGroupToMultiThreadIoEventLoopGroupRecipes$EpollEventLoopGroupFactoryRecipe](https://docs.openrewrite.org/recipes/java/netty/eventloopgrouptomultithreadioeventloopgrouprecipesusdepolleventloopgroupfactoryrecipe): Replace `new EpollEventLoopGroup()` with `new MultiThreadIoEventLoopGroup(EpollIoHandler.newFactory())`. 
* [org.openrewrite.java.netty.EventLoopGroupToMultiThreadIoEventLoopGroupRecipes$LocalEventLoopGroupFactoryRecipe](https://docs.openrewrite.org/recipes/java/netty/eventloopgrouptomultithreadioeventloopgrouprecipesusdlocaleventloopgroupfactoryrecipe): Replace `new LocalEventLoopGroup()` with `new MultiThreadIoEventLoopGroup(LocalIoHandler.newFactory())`. 
* [org.openrewrite.java.netty.EventLoopGroupToMultiThreadIoEventLoopGroupRecipes$NioEventLoopGroupFactoryRecipe](https://docs.openrewrite.org/recipes/java/netty/eventloopgrouptomultithreadioeventloopgrouprecipesusdnioeventloopgroupfactoryrecipe): Replace `new NioEventLoopGroup()` with `new MultiThreadIoEventLoopGroup(NioIoHandler.newFactory())`. 
* [org.openrewrite.java.recipes.IsLiteralNullRecipe](https://docs.openrewrite.org/recipes/java/recipes/isliteralnullrecipe): Recipe created for the following Refaster template:
```java
public class IsLiteralNull {
    
    @BeforeTemplate
    boolean before(Expression expression) {
        return expression instanceof J.Literal && ((J.Literal)expression).getValue() == null;
    }
    
    @AfterTemplate
    boolean after(Expression expression) {
        return J.Literal.isLiteralValue(expression, null);
    }
}
```
. 
* [org.openrewrite.java.recipes.SingleDocumentExample](https://docs.openrewrite.org/recipes/java/recipes/singledocumentexample): Ensures that there is only one `@DocumentExample` annotation per test class, as that looks best in the documentation. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipes): Replace the usage of static `Traits` methods with the corresponding constructor calls, as the `Traits` classes were an early abstraction with undesirable import conflicts. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$AnnotationMatcherRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdannotationmatcherrecipe): Removes the usage of static `org.openrewrite.java.trait.Traits.annotated(AnnotationMatcher)`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$ClassTypeRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdclasstyperecipe): Removes the usage of static `org.openrewrite.java.trait.Traits.annotated(Class<?>)`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$DependencyRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusddependencyrecipe): Removes the usage of static `org.openrewrite.gradle.trait.Traits.gradleDependency()`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$JvmTestSuiteRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdjvmtestsuiterecipe): Removes the usage of static `org.openrewrite.gradle.trait.Traits.jvmTestSuite()`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$LiteralRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdliteralrecipe): Removes the usage of static `org.openrewrite.java.trait.Traits.literal()`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$MethodMatcherRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdmethodmatcherrecipe): Removes the usage of static `org.openrewrite.java.trait.Traits.methodAccess(MethodMatcher)`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$PluginRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdpluginrecipe): Removes the usage of static `org.openrewrite.maven.trait.Traits.mavenPlugin()`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$StringSignatureRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdstringsignaturerecipe): Removes the usage of static `org.openrewrite.java.trait.Traits.annotated(String)`. 
* [org.openrewrite.java.recipes.migrate.RemoveTraitsUsageRecipes$VariableAccessRecipe](https://docs.openrewrite.org/recipes/java/recipes/migrate/removetraitsusagerecipesusdvariableaccessrecipe): Removes the usage of static `org.openrewrite.java.trait.Traits.variableAccess()`. 
* [org.openrewrite.java.spring.boot3.ChangeCassandraGroupId](https://docs.openrewrite.org/recipes/java/spring/boot3/changecassandragroupid): Change `groupId` from `com.datastax.oss` to `org.apache.cassandra` and adopt the Spring Boot 3.3 managed version. 
* [org.openrewrite.java.spring.doc.MigrateDocketBeanToGroupedOpenApiBean](https://docs.openrewrite.org/recipes/java/spring/doc/migratedocketbeantogroupedopenapibean): Migrate a `Docket` bean to a `GroupedOpenAPI` bean preserving group name, packages and paths. When possible the recipe will prefer property based configuration. 
* [org.openrewrite.java.spring.doc.RemoveBeanValidatorPluginsConfiguration](https://docs.openrewrite.org/recipes/java/spring/doc/removebeanvalidatorpluginsconfiguration): As Springdoc OpenAPI supports Bean Validation out of the box, the BeanValidatorPluginsConfiguration is no longer supported nor needed. Thus remove @Import(BeanValidatorPluginsConfiguration.class). 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_2_2](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_2_2): Upgrade to SpringDoc v2.2. 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_2_5](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_2_5): Upgrade to SpringDoc v2.5. 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_2_6](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_2_6): Upgrade to SpringDoc v2.6. 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_2_8](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_2_8): Upgrade to SpringDoc v2.8. 
* [org.openrewrite.java.testing.junit5.ExcludeJUnit4UnlessUsingTestcontainers](https://docs.openrewrite.org/recipes/java/testing/junit5/excludejunit4unlessusingtestcontainers): Excludes JUnit 4, as it ought not to be necessary in a JUnit 5 project, unless Testcontainers is used. 
* [org.openrewrite.netty.UpgradeNetty_4_1_to_4_2](https://docs.openrewrite.org/recipes/netty/upgradenetty_4_1_to_4_2): Migrate applications to the latest Netty 4.2.x release. 
* [org.openrewrite.openapi.swagger.ConvertApiResponseToContent](https://docs.openrewrite.org/recipes/openapi/swagger/convertapiresponsetocontent): Convert API response to content annotation 
* [org.openrewrite.staticanalysis.AnnotateNullableParameters](https://docs.openrewrite.org/recipes/staticanalysis/annotatenullableparameters): Add `@Nullable` to parameters of public methods that are explicitly checked for `null`. By default `org.jspecify.annotations.Nullable` is used, but through the `nullableAnnotationClass` option a custom annotation can be provided. When providing a custom `nullableAnnotationClass` that annotation should be meta annotated with `@Target(TYPE_USE)`. This recipe scans for methods that do not already have parameters annotated with `@Nullable` annotation and checks their usages for potential null checks. 
* [org.openrewrite.staticanalysis.ReorderAnnotations](https://docs.openrewrite.org/recipes/staticanalysis/reorderannotations): Consistently order annotations by comparing their simple name. 
* [software.amazon.awssdk.v2migration.ChangeTransferManagerSimpleMethods](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/changetransfermanagersimplemethods): Change TransferManager simple methods to v2. 
* [software.amazon.awssdk.v2migration.S3TmAddComments](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3tmaddcomments): Add imports and comments to unsupported S3 transfer manager transforms. 

## Removed Recipes

* **org.openrewrite.java.jspecify.MigrateToJspecify**: This recipe will migrate to JSpecify annotations from various other nullability annotation standards. 
* **org.openrewrite.java.migrate.jakarta.Faces2xMigrationToJakarta4x**: Jakarta EE 10 uses Faces 4.0 a major upgrade to Jakarta packages and XML namespaces. 
* **org.openrewrite.java.migrate.jakarta.JakartaFacesXhtml**: Find and replace legacy JSF namespaces and javax references with Jakarta Faces values in XHTML files. 
* **org.openrewrite.java.migrate.jakarta.JavaxFacesToJakartaFaces**: Java EE has been rebranded to Jakarta EE, necessitating a package relocation. 
* **org.openrewrite.java.migrate.jakarta.UpgradeFacesOpenSourceLibraries**: Upgrade PrimeFaces, OmniFaces, and MyFaces libraries to Jakarta EE10 versions. 
* **org.openrewrite.java.migrate.javax.AddJaxbDependencies**: This recipe will add explicit dependencies for Jakarta EE 8 when a Java 8 application is using JAXB. Any existing dependencies will be upgraded to the latest version of Jakarta EE 8. The artifacts are moved to Jakarta EE 8 version 2.x which allows for the continued use of the `javax.xml.bind` namespace. Running a full javax to Jakarta migration using `org.openrewrite.java.migrate.jakarta.JavaxMigrationToJakarta` will update to versions greater than 3.x which necessitates the package change as well. 
* **org.openrewrite.java.recipes.SetDefaultEstimatedEffortPerOccurrence**: Retrofit recipes with a default estimated effort per occurrence. 

## Changed Recipes

* [org.openrewrite.gitlab.AddComponent](https://docs.openrewrite.org/recipes/gitlab/addcomponent) was changed:
  * Old Options:
    * `inputs: { type: List, required: false }`
    * `newComponent: { type: String, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `inputs: { type: List, required: false }`
    * `insertMode: { type: InsertMode, required: false }`
    * `newComponent: { type: String, required: true }`
    * `version: { type: String, required: true }`
* [org.openrewrite.gitlab.AddStages](https://docs.openrewrite.org/recipes/gitlab/addstages) was changed:
  * Old Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `stages: { type: List, required: true }`
  * New Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `insertMode: { type: InsertMode, required: false }`
    * `stages: { type: List, required: true }`
* [org.openrewrite.gitlab.AddTemplate](https://docs.openrewrite.org/recipes/gitlab/addtemplate) was changed:
  * Old Options:
    * `newTemplate: { type: String, required: true }`
  * New Options:
    * `insertMode: { type: InsertMode, required: false }`
    * `newTemplate: { type: String, required: true }`
* [org.openrewrite.gradle.search.FindJVMTestSuites](https://docs.openrewrite.org/recipes/gradle/search/findjvmtestsuites) was changed:
  * Old Options:
    * `definesDependencies: { type: Boolean, required: true }`
    * `insertRows: { type: Boolean, required: true }`
  * New Options:
    * `insertRows: { type: Boolean, required: true }`
* [io.quarkus.updates.core.quarkus37.ChangeMavenCompilerAnnotationProcessorGroupIdAndArtifactId](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus37/changemavencompilerannotationprocessorgroupidandartifactid) was changed:
  * Old Options:
    * `enforceManagedVersion: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`
  * New Options:
    * `enforceManagedVersion: { type: Boolean, required: false }`
    * `newArtifactId: { type: String, required: false }`
    * `newGroupId: { type: String, required: false }`
    * `newVersion: { type: String, required: false }`
    * `oldArtifactId: { type: String, required: true }`
    * `oldGroupId: { type: String, required: true }`
    * `overrideManagedVersion: { type: Boolean, required: false }`
    * `removeVersionIfManaged: { type: Boolean, required: false }`
    * `versionPattern: { type: String, required: false }`