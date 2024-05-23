# 8.27.1 release (2024-05-22)

{% hint style="info" %}
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
{% endhint %}

## Removed Artifacts
* rewrite-cloud-suitability-analyzer

## New Recipes

* [org.openrewrite.gradle.RemoveEnableFeaturePreview](https://docs.openrewrite.org/recipes/gradle/removeenablefeaturepreview): Remove an enabled Gradle preview feature from `settings.gradle`. 
* [org.openrewrite.java.migrate.RemovedModifierAndConstantBootstrapsConstructors](https://docs.openrewrite.org/recipes/java/migrate/removedmodifierandconstantbootstrapsconstructors): The `java.lang.reflect.Modifier()` and `java.lang.invoke.ConstantBootstraps()` constructors have been removed in Java SE 15 because both classes only contain static methods. This recipe converts the usage of all methods in the two classes to be  static. For more information on these changes, see https://docs.oracle.com/en/java/javase/15/migrate/index.html#GUID-233853B8-0782-429E-BEF7-7532EE610E63 
* [org.openrewrite.java.migrate.RemovedSubjectMethods](https://docs.openrewrite.org/recipes/java/migrate/removedsubjectmethods): Replaces the `javax.security.auth.Subject.getSubject()` and `javax.security.auth.Subject.doAs()` methods with `javax.security.auth.Subject.current()` and `javax.security.auth.Subject.callAs()`. 
* [org.openrewrite.java.migrate.RemovedToolProviderConstructor](https://docs.openrewrite.org/recipes/java/migrate/removedtoolproviderconstructor): The `javax.tools.ToolProvider()` constructor has been removed in Java SE 16 since the class only contains static methods. The recipe converts `javax.tools.ToolProvider getSystemJavaCompiler()`, `javax.tools.ToolProvider getSystemDocumentationTool()` and `javax.tools.ToolProvider getSystemToolClassLoader()` to static methods. 
* [org.openrewrite.java.migrate.UpgradeBuildToJava11](https://docs.openrewrite.org/recipes/java/migrate/upgradebuildtojava11): Updates build files to use Java 11 as the target/source. 
* [org.openrewrite.java.migrate.UpgradeBuildToJava17](https://docs.openrewrite.org/recipes/java/migrate/upgradebuildtojava17): Updates build files to use Java 17 as the target/source. 
* [org.openrewrite.java.migrate.UpgradeBuildToJava21](https://docs.openrewrite.org/recipes/java/migrate/upgradebuildtojava21): Updates build files to use Java 21 as the target/source. 
* [org.openrewrite.java.migrate.UpgradePluginsForJava11](https://docs.openrewrite.org/recipes/java/migrate/upgradepluginsforjava11): Updates plugins to version compatible with Java 11. 
* [org.openrewrite.java.migrate.UpgradePluginsForJava17](https://docs.openrewrite.org/recipes/java/migrate/upgradepluginsforjava17): Updates plugins to version compatible with Java 17. 
* [org.openrewrite.java.migrate.UpgradePluginsForJava21](https://docs.openrewrite.org/recipes/java/migrate/upgradepluginsforjava21): Updates plugins and dependencies to version compatible with Java 21. 
* [org.openrewrite.java.migrate.jakarta.JavaxBeanValidationXmlToJakartaBeanValidationXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxbeanvalidationxmltojakartabeanvalidationxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.migrate.jakarta.JavaxEjbJarXmlToJakartaEjbJarXml](https://docs.openrewrite.org/recipes/java/migrate/jakarta/javaxejbjarxmltojakartaejbjarxml): Java EE has been rebranded to Jakarta EE, necessitating an XML namespace relocation. 
* [org.openrewrite.java.search.HasBuildToolVersion](https://docs.openrewrite.org/recipes/java/search/hasbuildtoolversion): Finds Java source files built with a particular build tool. This is useful especially as a precondition for other recipes. 
* [org.openrewrite.java.spring.boot3.SpringBootProperties_3_3](https://docs.openrewrite.org/recipes/java/spring/boot3/springbootproperties_3_3): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.java.spring.boot3.UpgradeSpringBoot_3_3](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringboot_3_3): Migrate applications to the latest Spring Boot 3.3 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.2. 
* [org.openrewrite.java.spring.data.UpgradeSpringData_2_7](https://docs.openrewrite.org/recipes/java/spring/data/upgradespringdata_2_7): Migrate applications to the latest Spring Data 2.7 release. 
* [org.openrewrite.java.spring.data.UseJpaRepositoryGetReferenceById](https://docs.openrewrite.org/recipes/java/spring/data/usejparepositorygetreferencebyid): `JpaRepository#getOne(ID)` was deprecated in 2.5 and `JpaRepository#getById(ID)` was deprecated in 2.7. 
* [org.openrewrite.java.spring.http.SimplifyWebTestClientCalls](https://docs.openrewrite.org/recipes/java/spring/http/simplifywebtestclientcalls): Simplifies various types of WebTestClient expressions to improve code readability. 
* [org.openrewrite.java.testing.junit5.UpgradeSurefirePlugin](https://docs.openrewrite.org/recipes/java/testing/junit5/upgradesurefireplugin): Upgrades the Maven Surefire Plugin to the latest version if still using an older Maven version. 
* [org.openrewrite.jenkins.UpgradeJavaVersion](https://docs.openrewrite.org/recipes/jenkins/upgradejavaversion): Upgrades the version of java specified in Jenkins groovy scripts. Will not downgrade if the version is newer than the specified version. 
* [org.openrewrite.maven.ModernizeObsoletePoms](https://docs.openrewrite.org/recipes/maven/modernizeobsoletepoms): Very old Maven poms are no longer supported by current versions of Maven. This recipe updates poms with `<pomVersion>3</pomVersion>` to `<modelVersion>4.0.0</modelVersion>` of the Maven pom schema. This does not attempt to upgrade old dependencies or plugins and is best regarded as the starting point of a migration rather than an end-point. 
* [org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrToString](https://docs.openrewrite.org/recipes/staticanalysis/renamemethodsnamedhashcodeequalortostring): Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. 

## Removed Recipes

* **org.openrewrite.staticanalysis.RenameMethodsNamedHashcodeEqualOrTostring**: Methods should not be named `hashcode`, `equal`, or `tostring`. Any of these are confusing as they appear to be intended as overridden methods from the `Object` base class, despite being case-insensitive. 

## Changed Recipes

* [org.openrewrite.maven.RemoveRedundantDependencyVersions](https://docs.openrewrite.org/recipes/maven/removeredundantdependencyversions) was changed:
  * Old Options:
    * `artifactPattern: { type: String, required: false }`
    * `except: { type: List, required: false }`
    * `groupPattern: { type: String, required: false }`
    * `onlyIfVersionsMatch: { type: Boolean, required: false }`
  * New Options:
    * `artifactPattern: { type: String, required: false }`
    * `except: { type: List, required: false }`
    * `groupPattern: { type: String, required: false }`
    * `onlyIfManagedVersionIs: { type: Comparator, required: false }`
    * `onlyIfVersionsMatch: { type: Boolean, required: false }`