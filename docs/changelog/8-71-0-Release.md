---
description: What's changed in OpenRewrite version 8.71.0.
---

# 8.71.0 release (2026-01-07)

_Total recipe count: 5095_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.53.2`
* Staging CLI version: `v3.54.5`

## Removed Artifacts

* rewrite-comprehension

## New Recipes

* [io.moderne.hibernate.MigrateToHibernate72](https://docs.openrewrite.org/recipes/hibernate/migratetohibernate72-moderne-edition): This recipe will apply changes commonly needed when migrating to Hibernate 7.2.x. 
* [io.moderne.java.spring.boot4.AddModularStarters](https://docs.openrewrite.org/recipes/java/spring/boot4/addmodularstarters): Add Spring Boot 4.0 starter dependencies based on package usage.
Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology. 
* [io.moderne.java.spring.cloud20251.SpringCloudProperties_2025_1](https://docs.openrewrite.org/recipes/java/spring/cloud20251/springcloudproperties_2025_1): Migrate properties found in `application.properties` and `application.yml` for Spring Cloud 2025.1 (Oakwood). This includes the stubrunner property prefix migration from `stubrunner.` to `spring.cloud.contract.stubrunner.`. 
* [io.moderne.java.spring.cloud20251.UpgradeSpringCloud_2025_1](https://docs.openrewrite.org/recipes/java/spring/cloud20251/upgradespringcloud_2025_1): Upgrade to Spring Cloud 2025.1 (Oakwood). This release is based on Spring Framework 7 and Spring Boot 4. Each Spring Cloud project has been updated to version 5.0.0. 
* [io.moderne.java.spring.security7.ModularizeSpringSecurity7](https://docs.openrewrite.org/recipes/java/spring/security7/modularizespringsecurity7): Spring Security Core was modularized in version 7, deprecated classes that are still a crucial part of some applications are moved to `spring-security-access`. 
* [org.openrewrite.featureflags.quarkus.RemoveGetInt](https://docs.openrewrite.org/recipes/featureflags/quarkus/removegetint): Replace `getInt()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.quarkus.RemoveGetString](https://docs.openrewrite.org/recipes/featureflags/quarkus/removegetstring): Replace `getString()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.quarkus.RemoveIsEnabled](https://docs.openrewrite.org/recipes/featureflags/quarkus/removeisenabled): Replace `isEnabled()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.quarkus.search.FindFeatureFlag](https://docs.openrewrite.org/recipes/featureflags/quarkus/search/findfeatureflag): Find a Quarkus feature flag. 
* [org.openrewrite.gradle.RemoveRedundantSecurityResolutionRules](https://docs.openrewrite.org/recipes/gradle/removeredundantsecurityresolutionrules): Remove `resolutionStrategy.eachDependency` rules that pin dependencies to versions that are already being managed by a platform/BOM to equal or newer versions. Only removes rules that have a security advisory identifier (CVE or GHSA) in the `because` clause, unless a custom pattern is specified. 
* [org.openrewrite.java.dependencies.RemoveRedundantDependencies](https://docs.openrewrite.org/recipes/java/dependencies/removeredundantdependencies): Remove explicit dependencies that are already provided transitively by a specified dependency. This recipe downloads and resolves the parent dependency's POM to determine its true transitive dependencies, allowing it to detect redundancies even when both dependencies are explicitly declared. 
* [org.openrewrite.java.migrate.io.AddInputStreamBulkReadMethod](https://docs.openrewrite.org/recipes/java/migrate/io/addinputstreambulkreadmethod): Adds a `read(byte[], int, int)` method to `InputStream` subclasses that only override the single-byte `read()` method. Java's default `InputStream.read(byte[], int, int)` implementation calls the single-byte `read()` method in a loop, which can cause severe performance degradation (up to 350x slower) for bulk reads. This recipe detects `InputStream` implementations that delegate to another stream and adds the missing bulk read method to delegate bulk reads as well. 
* [org.openrewrite.java.spring.boot2.UpgradeSpockToGroovy3](https://docs.openrewrite.org/recipes/java/spring/boot2/upgradespocktogroovy3): Upgrade Spock dependencies to a Groovy 3 compatible 2.0 variant when Groovy 3 is on the classpath. 
* [org.openrewrite.java.spring.boot4.AddSpringBootStarterFlyway](https://docs.openrewrite.org/recipes/java/spring/boot4/addspringbootstarterflyway): Adds the necessary Spring Boot 4.0 Flyway starter for autoconfiguration based on dependency usage. 
* [org.openrewrite.java.springdoc.UpgradeSpringDoc_3_0](https://docs.openrewrite.org/recipes/java/springdoc/upgradespringdoc_3_0): Upgrade to SpringDoc v3.0. 
* [org.openrewrite.java.testing.junit5.HandleExternalResourceRules](https://docs.openrewrite.org/recipes/java/testing/junit5/handleexternalresourcerules): Handles the usage of the ExternalResourceRule fields by adding the @ExtendWith(ExternalResourceSupport.class) annotation to the test class. 
* [org.openrewrite.java.testing.junit5.UpgradeToJUnit513](https://docs.openrewrite.org/recipes/java/testing/junit5/upgradetojunit513): Upgrades JUnit 5 to 5.13.x and migrates all deprecated APIs. 
* [org.openrewrite.java.testing.testcontainers.ConvertToRawType](https://docs.openrewrite.org/recipes/java/testing/testcontainers/converttorawtype): Convert parameterized types of a specified Java class to their raw types. 
* [org.openrewrite.json.CopyValue](https://docs.openrewrite.org/recipes/json/copyvalue): Copies a JSON value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to create the new key if it does not exist. 
* [org.openrewrite.kotlin.OrderImports](https://docs.openrewrite.org/recipes/kotlin/orderimports): Groups and orders import statements. If a [style has been defined](https://docs.openrewrite.org/concepts-and-explanations/styles), this recipe will order the imports according to that style. If no style is detected, this recipe will default to ordering imports in the same way that IntelliJ IDEA does. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_33](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_33): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.33. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_34](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_34): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.34. 
* [org.openrewrite.kubernetes.migrate.MigrateToAPIv1_35](https://docs.openrewrite.org/recipes/kubernetes/migrate/migratetoapiv1_35): This recipe will apply changes commonly needed when migrating to Kubernetes API v1.35. 

## Removed Recipes

* **org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveModules**: Remove Jackson modules such as `jackson-module-parameter-names`, `jackson-datatype-jdk8`, and `jackson-datatype-jsr310` to depend on `jackson-databind` in Jackson 3.x. 
* **org.openrewrite.java.testing.search.FindUnitTests**: Produces a data table showing how methods are used in unit tests. 

## Changed Recipes

* [org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/csharp/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
  * New Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
    * `minimumSeverity: { type: String, required: false }`
* [org.openrewrite.json.AddKeyValue](https://docs.openrewrite.org/recipes/json/addkeyvalue) was changed:
  * Old Options:
    * `key: { type: String, required: true }`
    * `keyPath: { type: String, required: true }`
    * `prepend: { type: boolean, required: false }`
    * `value: { type: String, required: true }`
  * New Options:
    * `key: { type: String, required: true }`
    * `keyPath: { type: String, required: true }`
    * `prepend: { type: Boolean, required: false }`
    * `value: { type: String, required: true }`
* [org.openrewrite.nodejs.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/nodejs/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
  * New Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
    * `minimumSeverity: { type: String, required: false }`
* [org.openrewrite.yaml.CopyValue](https://docs.openrewrite.org/recipes/yaml/copyvalue) was changed:
  * Old Options:
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`
  * New Options:
    * `createNewKeys: { type: Boolean, required: false }`
    * `newFilePath: { type: String, required: false }`
    * `newKey: { type: String, required: true }`
    * `oldFilePath: { type: String, required: false }`
    * `oldKeyPath: { type: String, required: true }`