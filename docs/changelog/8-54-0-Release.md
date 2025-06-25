---
description: What's changed in OpenRewrite version 8.54.0.
---

# 8.54.0 release (2025-05-29)

_Total recipe count: 3779_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Artifacts
* rewrite-azul
* rewrite-diffblue
* rewrite-dropwizard
* rewrite-vulncheck

## New Recipes

* [io.moderne.azul.EliminateUnusedClasses](https://docs.openrewrite.org/recipes/azul/eliminateunusedclasses): Deprecate and later delete classes that are unused, as detected by Azul Intelligence Cloud.
* [io.moderne.azul.search.FindReachableMethods](https://docs.openrewrite.org/recipes/azul/search/findreachablemethods): Find all methods defined in the repository's source code that are reachable.
* [io.moderne.diffblue.GenerateUnitTests](https://docs.openrewrite.org/recipes/diffblue/generateunittests): Use the Diffblue Cover tool to generate unit tests for Java classes.
* [io.moderne.java.spring.cloud2025.DependencyUpgrades](https://docs.openrewrite.org/recipes/java/spring/cloud2025/dependencyupgrades): Upgrade dependencies to Spring Cloud 2025 from prior 2024.x version.
* [io.moderne.java.spring.cloud2025.UpgradeSpringCloud_2025](https://docs.openrewrite.org/recipes/java/spring/cloud2025/upgradespringcloud_2025): Migrate applications to the latest Spring Cloud 2025 (Northfields) release.
* [io.moderne.vulncheck.FixVulnCheckVulnerabilities](https://docs.openrewrite.org/recipes/vulncheck/fixvulncheckvulnerabilities): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from VulnCheck Vulnerability Intelligence. The recipe has an option to limit fixes to only those vulnerabilities that have evidence of exploitation at various levels of severity.
* [org.openrewrite.gradle.search.ModuleHasDependency](https://docs.openrewrite.org/recipes/gradle/search/modulehasdependency): Searches for Gradle Projects (modules) that have a dependency matching the specified id or implementing class. Places a `SearchResult` marker on all sources within a project with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file that use the dependency, use the `FindDependency` recipe instead.
* [org.openrewrite.hibernate.AddScalarPreferStandardBasicTypes](https://docs.openrewrite.org/recipes/hibernate/addscalarpreferstandardbasictypes): Prefer the use of `StandardBasicTypes.*` in `NativeQuery.addScalar(...)` invocations.
* [org.openrewrite.java.dependencies.search.ModuleHasDependency](https://docs.openrewrite.org/recipes/java/dependencies/search/modulehasdependency): Searches for both Gradle and Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) or pom.xml file applying the plugin, use the `FindDependency` recipe instead.
* [org.openrewrite.java.dependencies.search.RepositoryHasDependency](https://docs.openrewrite.org/recipes/java/dependencies/search/repositoryhasdependency): Searches for both Gradle and Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a repository with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use a springframework dependency, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) or pom.xml file applying the plugin, use the `FindDependency` recipe instead.
* [org.openrewrite.java.dropwizard.AddActuatorConfiguration](https://docs.openrewrite.org/recipes/java/dropwizard/addactuatorconfiguration): Configures Spring Boot Actuator endpoints and health checks in application.properties.
* [org.openrewrite.java.dropwizard.AddCoreExampleProperties](https://docs.openrewrite.org/recipes/java/dropwizard/addcoreexampleproperties): Adds core example properties to the application.properties file.
* [org.openrewrite.java.dropwizard.AddHibernateConfiguration](https://docs.openrewrite.org/recipes/java/dropwizard/addhibernateconfiguration): Configures Spring Boot Hibernate and JPA settings in application.properties.
* [org.openrewrite.java.dropwizard.AddJerseyConfiguration](https://docs.openrewrite.org/recipes/java/dropwizard/addjerseyconfiguration): Configures essential Jersey properties in Spring Boot that complement the JerseyConfig class.
* [org.openrewrite.java.dropwizard.AddMissingApplicationProperties](https://docs.openrewrite.org/recipes/java/dropwizard/addmissingapplicationproperties): This recipe creates an application.properties file in the resources folder if it does not exist.
* [org.openrewrite.java.dropwizard.CodeCleanup](https://docs.openrewrite.org/recipes/java/dropwizard/codecleanup): Clean up the code.
* [org.openrewrite.java.dropwizard.CoreSetup](https://docs.openrewrite.org/recipes/java/dropwizard/coresetup): Creates the main Spring Boot application class.
* [org.openrewrite.java.dropwizard.MigrateConfigurationClass](https://docs.openrewrite.org/recipes/java/dropwizard/migrateconfigurationclass): Converts Dropwizard Configuration to Spring Boot format.
* [org.openrewrite.java.dropwizard.MigrateDropwizardToSpringBoot](https://docs.openrewrite.org/recipes/java/dropwizard/migratedropwizardtospringboot): Apply various changes to migrate Dropwizard applications to Spring Boot.
* [org.openrewrite.java.dropwizard.MigrateHealthChecksAndMetrics](https://docs.openrewrite.org/recipes/java/dropwizard/migratehealthchecksandmetrics): Configures Spring Boot Actuator with basic health endpoints.
* [org.openrewrite.java.dropwizard.MigrateHibernate](https://docs.openrewrite.org/recipes/java/dropwizard/migratehibernate): Converts Dropwizard Resources to Spring Boot format.
* [org.openrewrite.java.dropwizard.MigrateResourcesToSpringJersey](https://docs.openrewrite.org/recipes/java/dropwizard/migrateresourcestospringjersey): Converts Dropwizard Resources to Spring Boot format.
* [org.openrewrite.java.dropwizard.MigrateSecurity](https://docs.openrewrite.org/recipes/java/dropwizard/migratesecurity): Converts Dropwizard health checks to Spring Boot format.
* [org.openrewrite.java.dropwizard.MigrateTasksAndCommands](https://docs.openrewrite.org/recipes/java/dropwizard/migratetasksandcommands): Clean up the code.
* [org.openrewrite.java.dropwizard.MigrateTests](https://docs.openrewrite.org/recipes/java/dropwizard/migratetests): Converts Dropwizard tests to Spring Boot format.
* [org.openrewrite.java.dropwizard.ModifyDropwizardHealthChecksToSpringVariants](https://docs.openrewrite.org/recipes/java/dropwizard/modifydropwizardhealthcheckstospringvariants): Transforms Dropwizard HealthCheck classes to Spring Boot HealthIndicator.
* [org.openrewrite.java.dropwizard.annotation.AddClassAnnotationIfAnnotationExists](https://docs.openrewrite.org/recipes/java/dropwizard/annotation/addclassannotationifannotationexists): Adds annotation if class has any of the specified target annotations.
* [org.openrewrite.java.dropwizard.annotation.AddClassAnnotationIfSuperTypeExists](https://docs.openrewrite.org/recipes/java/dropwizard/annotation/addclassannotationifsupertypeexists): Adds annotation if class extends or implements any of the specified target types.
* [org.openrewrite.java.dropwizard.annotation.micrometer.CodahaleTimedToMicrometerTimed](https://docs.openrewrite.org/recipes/java/dropwizard/annotation/micrometer/codahaletimedtomicrometertimed): Replaces Dropwizard's `@Timed` annotation with Micrometer's `@Timed` annotation, preserving name (mapped to value), absolute, and description attributes.
* [org.openrewrite.java.dropwizard.config.RemoveAndExcludeDependency](https://docs.openrewrite.org/recipes/java/dropwizard/config/removeandexcludedependency): Combines excluding transitive dependencies and removing direct dependencies.
* [org.openrewrite.java.dropwizard.general.RemoveMethodsByPackage](https://docs.openrewrite.org/recipes/java/dropwizard/general/removemethodsbypackage): Removes any method that has a return type or parameter type from the specified package.
* [org.openrewrite.java.dropwizard.general.RemoveVariablesByPackage](https://docs.openrewrite.org/recipes/java/dropwizard/general/removevariablesbypackage): Removes class-level variables from classes in the specified package.
* [org.openrewrite.java.dropwizard.method.ChangeSuperType](https://docs.openrewrite.org/recipes/java/dropwizard/method/changesupertype): Changes the superclass of a specified class to a new superclass.
* [org.openrewrite.java.dropwizard.method.RemoveSuperTypeByType](https://docs.openrewrite.org/recipes/java/dropwizard/method/removesupertypebytype): Removes a specified type from class extends or implements clauses.
* [org.openrewrite.java.dropwizard.method.RemoveUnnecessaryOverride](https://docs.openrewrite.org/recipes/java/dropwizard/method/removeunnecessaryoverride): Removes `@Override` annotations from methods that don't actually override or implement any method. This helps maintain clean code by removing incorrect annotations that could be misleading.
* [org.openrewrite.java.dropwizard.method.RemoveUnnecessarySuperCalls](https://docs.openrewrite.org/recipes/java/dropwizard/method/removeunnecessarysupercalls): Removes calls to `super(...)` or `super.someMethod(...)` if the class does not have a real superclass besides `java.lang.Object`.
* [org.openrewrite.java.migrate.ComIntelliJAnnotationsToOrgJetbrainsAnnotations](https://docs.openrewrite.org/recipes/java/migrate/comintellijannotationstoorgjetbrainsannotations): This recipe will upgrade old dependency of com.intellij:annotations to the newer org.jetbrains:annotations.
* [org.openrewrite.java.spring.cloud2024.DependencyUpgrades](https://docs.openrewrite.org/recipes/java/spring/cloud2024/dependencyupgrades): Upgrade dependencies to Spring Cloud 2024 from prior 2023.x version.
* [org.openrewrite.java.spring.cloud2024.UpgradeSpringCloud_2024](https://docs.openrewrite.org/recipes/java/spring/cloud2024/upgradespringcloud_2024): Migrate applications to the latest Spring Cloud 2024 (Moorgate) release.
* [org.openrewrite.java.testing.mockito.CloseUnclosedStaticMocks](https://docs.openrewrite.org/recipes/java/testing/mockito/closeunclosedstaticmocks): Ensures that all `mockStatic` calls are properly closed. If `mockStatic` is in lifecycle methods like `@BeforeEach` or `@BeforeAll`, creates a class variable and closes it in `@AfterEach` or `@AfterAll`. If `mockStatic` is inside a test method, wraps it in a try-with-resources block.
* [org.openrewrite.maven.search.ModuleHasDependency](https://docs.openrewrite.org/recipes/maven/search/modulehasdependency): Searches for Maven modules that have a dependency matching the specified groupId and artifactId. Places a `SearchResult` marker on all sources within a module with a matching dependency. This recipe is intended to be used as a precondition for other recipes. For example this could be used to limit the application of a spring boot migration to only projects that use spring-boot-starter, limiting unnecessary upgrading. If the search result you want is instead just the build.gradle(.kts) file applying the plugin, use the `FindDependency` recipe instead.
* [org.openrewrite.xml.liberty.WebBeansXmlRule](https://docs.openrewrite.org/recipes/xml/liberty/webbeansxmlrule): This Recipe replaces OpenWebBeans schema in every beans.xml with the standard CDI schema.
* [org.openrewrite.xml.search.DoesNotUseNamespaceUri](https://docs.openrewrite.org/recipes/xml/search/doesnotusenamespaceuri): Find XML root elements that do not have a specific Namespace URI, optionally restricting the search by an XPath expression.

## Removed Recipes

* **io.moderne.java.spring.cloud2024.DependencyUpgrades**: Upgrade dependencies to Spring Cloud 2024 from prior 2023.x version.
* **io.moderne.java.spring.cloud2024.UpgradeSpringCloud_2024**: Migrate applications to the latest Spring Cloud 2024 (Leyton) release.

## Changed Recipes

* [org.openrewrite.gitlab.AddComponent](https://docs.openrewrite.org/recipes/gitlab/addcomponent) was changed:
  * Old Options:
    * `inputs: { type: List, required: true }`
    * `newComponent: { type: String, required: true }`
    * `version: { type: String, required: true }`
  * New Options:
    * `inputs: { type: List, required: false }`
    * `newComponent: { type: String, required: true }`
    * `version: { type: String, required: true }`
* [org.openrewrite.gradle.RemoveRedundantDependencyVersions](https://docs.openrewrite.org/recipes/gradle/removeredundantdependencyversions) was changed:
  * Old Options:
    * `artifactPattern: { type: String, required: false }`
    * `except: { type: List, required: false }`
    * `groupPattern: { type: String, required: false }`
    * `onlyIfManagedVersionIs: { type: Comparator, required: false }`
  * New Options:
    * `artifactPattern: { type: String, required: false }`
    * `groupPattern: { type: String, required: false }`
    * `onlyIfManagedVersionIs: { type: Comparator, required: false }`
* [org.openrewrite.staticanalysis.NoFinalizedLocalVariables](https://docs.openrewrite.org/recipes/staticanalysis/nofinalizedlocalvariables) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `excludeMethodParameters: { type: Boolean, required: false }`
* [org.openrewrite.staticanalysis.RemoveUnusedLocalVariables](https://docs.openrewrite.org/recipes/staticanalysis/removeunusedlocalvariables) was changed:
  * Old Options:
    * `ignoreVariablesNamed: { type: String[], required: false }`
    * `withSideEffects: { type: Boolean, required: false }`
  * New Options:
    * `ignoreVariablesNamed: { type: String[], required: false }`
    * `withSideEffects: { type: Boolean, required: false }`
    * `withType: { type: String, required: false }`
* [org.openrewrite.yaml.UnfoldProperties](https://docs.openrewrite.org/recipes/yaml/unfoldproperties) was changed:
  * Old Options:
    * `exclusions: { type: List, required: true }`
  * New Options:
    * `applyTo: { type: List, required: true }`
    * `exclusions: { type: List, required: true }`