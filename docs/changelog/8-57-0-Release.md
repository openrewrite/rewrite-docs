---
description: What's changed in OpenRewrite version 8.57.0.
---

# 8.57.0 release (2025-07-10)

_Total recipe count: 3921_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [com.oracle.weblogic.rewrite.ChangeJakartaWebServiceRSAPIDependencyScope](https://docs.openrewrite.org/recipes/com/oracle/weblogic/rewrite/changejakartawebservicersapidependencyscope): This recipe will change the jakarta.ws.rs-api dependency scope to provided when jakarta.jakartaee-api version 9.x is provided in WebLogic 15.1.1. This prevents the jakarta.ws.rs-api jar from being deployed to WebLogic which can cause class conflicts. 
* [io.moderne.cryptography.FindInsecureSecuritySetProperties](https://docs.openrewrite.org/recipes/cryptography/findinsecuresecuritysetproperties): Locate calls to `Security.setProperty` that set insecure properties. 
* [io.moderne.java.spring.boot.IsLikelyNotSpringBoot](https://docs.openrewrite.org/recipes/java/spring/boot/islikelynotspringboot): Marks the project if it's likely not a Spring Boot project. 
* [io.moderne.java.spring.boot.IsLikelySpringBoot](https://docs.openrewrite.org/recipes/java/spring/boot/islikelyspringboot): Marks the project if it's likely a Spring Boot project. 
* [io.moderne.java.spring.boot.MigrateSpringFrameworkDependenciesToSpringBoot](https://docs.openrewrite.org/recipes/java/spring/boot/migratespringframeworkdependenciestospringboot): Migrate Spring Framework Dependencies to Spring Boot. 
* [io.moderne.java.spring.boot.SpringToSpringBoot](https://docs.openrewrite.org/recipes/java/spring/boot/springtospringboot): Migrate non Spring Boot applications to the latest compatible Spring Boot release. This recipe will modify an application's build files introducing Maven dependency management for Spring Boot, or adding the Gradle Spring Boot build plugin. 
* [io.moderne.java.spring.framework.IsLikelySpringFramework](https://docs.openrewrite.org/recipes/java/spring/framework/islikelyspringframework): Marks the project if it's likely a Spring Framework project. 
* [io.moderne.java.spring.framework.webxml.DeleteEmptyWebXml](https://docs.openrewrite.org/recipes/java/spring/framework/webxml/deleteemptywebxml): Deletes `web.xml` files that contain only an empty `<web-app>` root element with no child elements. 
* [io.moderne.java.spring.framework.webxml.WebXmlToWebApplicationInitializer](https://docs.openrewrite.org/recipes/java/spring/framework/webxml/webxmltowebapplicationinitializer): Migrate `web.xml` to `WebApplicationInitializer` for Spring applications. This allows for programmatic configuration of the web application context, replacing the need for XML-based configuration. This recipe only picks up `web.xml` files located in the `src/main/webapp/WEB-INF` directory to avoid inference with tests. 
* [org.openrewrite.github.ReplaceOssrhSecretsWithSonatype](https://docs.openrewrite.org/recipes/github/replaceossrhsecretswithsonatype): Replace deprecated OSSRH_S01 secrets with new Sonatype secrets in GitHub Actions workflows. This is an example use of the `ReplaceSecrets` and `ReplaceSecretKeys` recipes combined used to update the Maven publishing secrets in OpenRewrite's GitHub organization. 
* [org.openrewrite.github.ReplaceSecretKeys](https://docs.openrewrite.org/recipes/github/replacesecretkeys): Replace key names used for secrets in GitHub Actions workflow files. 
* [org.openrewrite.github.ReplaceSecrets](https://docs.openrewrite.org/recipes/github/replacesecrets): Replace references to GitHub Action secrets in workflow files. 
* [org.openrewrite.gradle.GradleBestPractices](https://docs.openrewrite.org/recipes/gradle/gradlebestpractices): Apply a set of [Gradle best practices](https://docs.gradle.org/current/userguide/best_practices_general.html) to the build files, for more efficient and ideomatic builds. 
* [org.openrewrite.java.flyway.AddFlywayModuleSqlServer](https://docs.openrewrite.org/recipes/java/flyway/addflywaymodulesqlserver): Database modules for Flyway 10 have been split out into separate modules for maintainability. Add the `flyway-sqlserver` dependency if you are using SQL Server with Flyway 10, as detailed on https://github.com/flyway/flyway/issues/3780. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3): Migrate applications to the latest Jackson 3.x release. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_And_3_Base_Exceptions](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_and_3_base_exceptions): Jackson 3 contains new base exceptions which were also backported to 2.x. This recipe will migrate usage to the new base exceptions to prepare for a 3.x upgrade. 
* [org.openrewrite.java.migrate.BouncyCastleFromJdk15OnToJdk15to18](https://docs.openrewrite.org/recipes/java/migrate/bouncycastlefromjdk15ontojdk15to18): This recipe replaces the Bouncy Castle artifacts from `jdk15on` to `jdk15to18`. `jdk15on` isn't maintained anymore and `jdk18on` is only for Java 8 and above. The `jdk15to18` artifact is the up-to-date replacement of the unmaintained `jdk15on` for Java < 8. 
* [org.openrewrite.java.migrate.jakarta.HasNoJakartaAnnotations](https://docs.openrewrite.org/recipes/java/migrate/jakarta/hasnojakartaannotations): Mark all source as found per `JavaProject` where no Jakarta annotations are found. This is useful mostly as a precondition for recipes that require Jakarta annotations to be present 
* [org.openrewrite.java.migrate.lombok.LombokOnXToOnX_](https://docs.openrewrite.org/recipes/java/migrate/lombok/lombokonxtoonx_): Migrates Lombok's `onX` annotations from the Java 7 style using `@__` to the Java 8+ style using `onX_`. For example, `@Getter(onMethod=@__({@Id}))` becomes `@Getter(onMethod_={@Id})`. 
* [org.openrewrite.java.spring.data.MigrateQueryToNativeQuery](https://docs.openrewrite.org/recipes/java/spring/data/migratequerytonativequery): Replace `@Query` annotation by `@NativeQuery` when `nativeQuery = true`. `@NativeQuery` was introduced in Spring Data JPA 3.4. 
* [org.openrewrite.java.spring.data.UpgradeSpringData_3_4](https://docs.openrewrite.org/recipes/java/spring/data/upgradespringdata_3_4): Migrate applications to the latest Spring Data 3.4 release. 
* [org.openrewrite.jenkins.CreateJenkinsfile](https://docs.openrewrite.org/recipes/jenkins/createjenkinsfile): Creates a simple base Jenkinsfile in Groovy for a Declarative Pipeline - located in the root of the project. 
* [org.openrewrite.jenkins.JenkinsfileAsGroovy](https://docs.openrewrite.org/recipes/jenkins/jenkinsfileasgroovy): Parse any `Jenkinsfile` as Groovy code. 
* [org.openrewrite.quarkus.Slf4jToQuarkusLogger](https://docs.openrewrite.org/recipes/quarkus/slf4jtoquarkuslogger): Removes usage of SLF4J Logger fields, adjusts imports, and replaces logger method calls with static Quarkus Log calls, including message formatting and method renaming for parameterized logging. 
* [org.openrewrite.spring.webxml.MigrateToJakartaEEServletConfiguration](https://docs.openrewrite.org/recipes/spring/webxml/migratetojakartaeeservletconfiguration): Migrates `web.xml` content to Spring Boot Configuration classes using Jakarta EE namespace. 
* [org.openrewrite.spring.webxml.MigrateToJavaXServletConfiguration](https://docs.openrewrite.org/recipes/spring/webxml/migratetojavaxservletconfiguration): Migrates `web.xml` content to Spring Boot Configuration classes using Java EE javax namespace. 
* [org.openrewrite.spring.webxml.RemoveWebXml](https://docs.openrewrite.org/recipes/spring/webxml/removewebxml): Migrates `web.xml` content to Spring Boot Configuration classes with respect to Java EE or Jakarta EE usage. 
* [org.openrewrite.staticanalysis.RemoveRedundantNullCheckBeforeInstanceof](https://docs.openrewrite.org/recipes/staticanalysis/removeredundantnullcheckbeforeinstanceof): Removes redundant null checks before instanceof operations since instanceof returns false for null. 
* [org.openrewrite.staticanalysis.SimplifyArraysAsList](https://docs.openrewrite.org/recipes/staticanalysis/simplifyarraysaslist): Simplifies `Arrays.asList()` method calls that use explicit array creation to use varargs instead. For example, `Arrays.asList(new String[]{"a", "b", "c"})` becomes `Arrays.asList("a", "b", "c")`. 

