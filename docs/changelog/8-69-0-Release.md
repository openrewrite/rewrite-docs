---
description: What's changed in OpenRewrite version 8.69.0.
---

# 8.69.0 release (2025-12-16)

_Total recipe count: 5116_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.53.2`
* Staging CLI version: `v3.54.1`

## New Artifacts

* rewrite-ai

## New Recipes

* [io.moderne.ai.FindAgentsInUse](https://docs.openrewrite.org/recipes/ai/findagentsinuse): Scans codebases to identify usage of AI agents by looking at the agent configuration files present in the repository. 
* [io.moderne.ai.FindLibrariesInUse](https://docs.openrewrite.org/recipes/ai/findlibrariesinuse): Scans codebases to identify usage of AI services. Detects AI libraries across Java dependencies. Useful for auditing and understanding AI integration patterns. 
* [io.moderne.ai.FindModelsInUse](https://docs.openrewrite.org/recipes/ai/findmodelsinuse): Scans codebases to identify usage of Large Language Models (LLMs). Detects model references and configuration patterns across Java classes, properties files, YAML configs... Useful for identifying model usage. 
* [io.moderne.java.spring.boot.AddSpringBootApplication](https://docs.openrewrite.org/recipes/java/spring/boot/addspringbootapplication): Adds a `@SpringBootApplication` class containing a main method to bootify your Spring Framework application. 
* [io.moderne.java.spring.boot4.AddAutoConfigureMockMvc](https://docs.openrewrite.org/recipes/java/spring/boot4/addautoconfiguremockmvc): Adds `@AutoConfigureMockMvc` annotation to classes annotated with `@SpringBootTest` that use `MockMvc`. 
* [io.moderne.java.spring.boot4.AdoptJackson3](https://docs.openrewrite.org/recipes/java/spring/boot4/adoptjackson3): Adopt Jackson 3 which is supported by Spring Boot 4 and Jackson 2 support is deprecated. 
* [io.moderne.java.spring.boot4.MigrateToModularStarters](https://docs.openrewrite.org/recipes/java/spring/boot4/migratetomodularstarters): Removes monolithic starters and adds the necessary Spring Boot 4.0 starter dependencies based on package usage. Spring Boot 4.0 has a modular design requiring explicit starters for each feature. This recipe detects feature usage via package imports and adds the appropriate starters.
Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology. 
* [io.moderne.java.spring.boot4.ModuleStarterRelocations](https://docs.openrewrite.org/recipes/java/spring/boot4/modulestarterrelocations): Relocate types and packages for Spring Boot 4.0 modular starters. 
* [io.moderne.java.spring.framework.JaxRsToSpringWeb](https://docs.openrewrite.org/recipes/java/spring/framework/jaxrstospringweb): Converts JAX-RS annotations such as `@Path`, `@GET`, `@POST`, etc., to their Spring Web equivalents like `@RestController`, `@RequestMapping`, `@GetMapping`, etc. 
* [io.moderne.java.spring.framework.MigrateDefaultResponseErrorHandler](https://docs.openrewrite.org/recipes/java/spring/framework/migratedefaultresponseerrorhandler): Migrates overridden `handleError(ClientHttpResponse response)` methods to the new signature `handleError(URI url, HttpMethod method, ClientHttpResponse response)` in classes extending `DefaultResponseErrorHandler`. The old single-argument method was removed in Spring Framework 7.0. 
* [io.moderne.java.spring.framework.ModularSpringFrameworkDependencies](https://docs.openrewrite.org/recipes/java/spring/framework/modularspringframeworkdependencies): Adds Spring Framework modular dependencies based on package usage, replacing legacy monolithic `org.springframework:spring`. 
* [io.quarkus.updates.core.quarkus331.AddExtensionsTrueToQuarkusMavenPlugin](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/addextensionstruetoquarkusmavenplugin): Add <extensions>true</extensions> to the quarkus-maven-plugin configuration if not already present. 
* [io.quarkus.updates.core.quarkus331.CoreUpdate331](https://docs.openrewrite.org/recipes/io/quarkus/updates/core/quarkus331/coreupdate331):  
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate60](https://docs.openrewrite.org/recipes/hibernate/migratetohypersistenceutilshibernate60-community-edition): This recipe will migrate any existing dependencies on `com.vladmihalcea:hibernate-types` to `io.hypersistence:hypersistence-utils-hibernate-60`. This migration will include the adjustment from `com.vladmihalcea` to `io.hypersistence.utils` package name. 
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate62](https://docs.openrewrite.org/recipes/hibernate/migratetohypersistenceutilshibernate62-community-edition): This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-60` to `io.hypersistence:hypersistence-utils-hibernate-62`. 
* [org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate63](https://docs.openrewrite.org/recipes/hibernate/migratetohypersistenceutilshibernate63-community-edition): This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-62` to `io.hypersistence:hypersistence-utils-hibernate-63`. 
* [org.openrewrite.java.jackson.Jackson3JsonNodeFieldIterators](https://docs.openrewrite.org/recipes/java/jackson/jackson3jsonnodefielditerators): `JSONNode` fields are using `Collections` instead of `Iterator` singe Jackson 3. To mimic Jackson 2s behavior an additional call to `Collection#iterator()`is needed. 
* [org.openrewrite.java.jackson.SimplifyJacksonExceptionCatch](https://docs.openrewrite.org/recipes/java/jackson/simplifyjacksonexceptioncatch): In Jackson 3, `JacksonException` and its subtypes extend `RuntimeException`. This recipe simplifies multi-catch clauses by removing Jackson exception types when `RuntimeException` is also caught, since catching both is redundant. For example, `catch (JacksonException | RuntimeException e)` becomes `catch (RuntimeException e)`. 
* [org.openrewrite.java.jackson.UpdateSerializationInclusionConfiguration](https://docs.openrewrite.org/recipes/java/jackson/updateserializationinclusionconfiguration): In Jackson 3, `mapper.setSerializationInclusion(JsonInclude.Include.NON_NULL)` is no longer supported and should be replaced by `changeDefaultPropertyInclusion()` for both `valueInclusion` and `contentInclusion`. 
* [org.openrewrite.java.jackson.UseFormatAlignedObjectMappers](https://docs.openrewrite.org/recipes/java/jackson/useformatalignedobjectmappers): Replace wrapping `ObjectMapper` calls with their format aligned implementation. 
* [org.openrewrite.java.recipes.RemoveImportBeforeAddImport](https://docs.openrewrite.org/recipes/java/recipes/removeimportbeforeaddimport): Reorders `maybeAddImport` and `maybeRemoveImport` calls so that imports are removed before new imports are added. This ordering prevents potential conflicts when the import being added and the import being removed resolve to the same simple class name. 
* [org.openrewrite.java.spring.boot4.MigrateAutoconfigurePackages](https://docs.openrewrite.org/recipes/java/spring/boot4/migrateautoconfigurepackages): Migrate to new packages used for autoconfiguration by Spring Boot 4.0 modules. 
* [org.openrewrite.java.testing.cleanup.KotlinTestMethodsShouldReturnUnit](https://docs.openrewrite.org/recipes/java/testing/cleanup/kotlintestmethodsshouldreturnunit): Kotlin test methods annotated with `@Test`, `@ParameterizedTest`, `@RepeatedTest`, `@TestTemplate` should have `Unit` return type. Other return types can cause test discovery issues, and warnings as of JUnit 5.13+. This recipe changes the return type to `Unit` and removes `return` statements. 
* [org.openrewrite.javascript.change-import](https://docs.openrewrite.org/recipes/javascript/change-import): Changes an import from one module/member to another, updating all type attributions. 
* [org.openrewrite.javascript.cleanup.add-parse-int-radix](https://docs.openrewrite.org/recipes/javascript/cleanup/add-parse-int-radix): Adds the radix parameter (base 10) to `parseInt()` calls that are missing it, preventing potential parsing issues. 
* [org.openrewrite.javascript.cleanup.async-callback-in-sync-array-method](https://docs.openrewrite.org/recipes/javascript/cleanup/async-callback-in-sync-array-method): Detects async callbacks passed to array methods like .some(), .every(), .filter() which don't await promises. This is a common bug where Promise objects are always truthy. 
* [org.openrewrite.javascript.cleanup.order-imports](https://docs.openrewrite.org/recipes/javascript/cleanup/order-imports): Sort imports by category and module path. Categories: side-effect, namespace, default, named, type. Within each category, imports are sorted alphabetically by module path. Named specifiers within each import are also sorted alphabetically. 
* [org.openrewrite.javascript.cleanup.prefer-optional-chain](https://docs.openrewrite.org/recipes/javascript/cleanup/prefer-optional-chain): Converts ternary expressions like `foo ? foo.bar : undefined` to use optional chaining syntax `foo?.bar`. 
* [org.openrewrite.javascript.dependencies.add-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/add-dependency): Adds a new dependency to `package.json` and updates the lock file by running the package manager. 
* [org.openrewrite.javascript.dependencies.upgrade-transitive-dependency-version](https://docs.openrewrite.org/recipes/javascript/dependencies/upgrade-transitive-dependency-version): Upgrades the version of a transitive dependency by adding override/resolution entries to `package.json` and updates the lock file by running the package manager. 
* [org.openrewrite.javascript.format.auto-format](https://docs.openrewrite.org/recipes/javascript/format/auto-format): Format JavaScript and TypeScript code using formatting rules auto-detected from the project's existing code style. 
* [org.openrewrite.javascript.search.DependencyInsight](https://docs.openrewrite.org/recipes/javascript/search/dependencyinsight): Find direct and transitive npm dependencies matching a package name pattern. Results include dependencies that either directly match or transitively include a matching dependency. 
* [org.openrewrite.maven.cleanup.ExplicitDependencyVersion](https://docs.openrewrite.org/recipes/maven/cleanup/explicitdependencyversion): Add explicit dependency versions to POMs for reproducibility, as the `LATEST` and `RELEASE` version keywords are deprecated. 
* [org.openrewrite.micrometer.MicrometerBestPractices](https://docs.openrewrite.org/recipes/micrometer/micrometerbestpractices): This recipe will apply a set of best practice refactorings for Micrometer, like adopting `Observations` instead of `Timers`. 
* [org.openrewrite.node.dependency-vulnerability-check](https://docs.openrewrite.org/recipes/node/dependency-vulnerability-check): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe by default only upgrades to the latest **patch** version. If a minor or major upgrade is required to reach the fixed version, this can be controlled using the `maximumUpgradeDelta` option. Vulnerability information comes from the GitHub Security Advisory Database. 
* [org.openrewrite.node.migrate.tls.replace-internal-modules](https://docs.openrewrite.org/recipes/node/migrate/tls/replace-internal-modules): Replace deprecated internal TLS module imports `require('node:_tls_common')` and `require('node:_tls_wrap')` with the public `node:tls` module. 
* [org.openrewrite.okhttp.UpgradeMockWebServer3](https://docs.openrewrite.org/recipes/okhttp/upgrademockwebserver3): Migrate from the legacy `mockwebserver` artifact to `mockwebserver3` core module without JUnit dependency. 
* [org.openrewrite.okhttp.UpgradeMockWebServer3JUnit4](https://docs.openrewrite.org/recipes/okhttp/upgrademockwebserver3junit4): Migrate from the legacy `mockwebserver` artifact to `mockwebserver3-junit4` with JUnit 4 integration. 
* [org.openrewrite.okhttp.UpgradeMockWebServer3JUnit5](https://docs.openrewrite.org/recipes/okhttp/upgrademockwebserver3junit5): Migrate from the legacy `mockwebserver` artifact to `mockwebserver3-junit5` with JUnit 5 integration. 

## Removed Recipes

* **io.moderne.java.spring.boot3.AddSpringBootApplication**: Adds a `@SpringBootApplication` class containing a main method to bootify your Spring Framework application. 
* **org.openrewrite.OrderImports**: Sort top-level imports alphabetically within groups: no qualifier, asterisk, multiple, single. 
* **org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.0**: This recipe will migrate any existing dependencies on `com.vladmihalcea:hibernate-types` to `io.hypersistence:hypersistence-utils-hibernate-60`. This migration will include the adjustment from `com.vladmihalcea` to `io.hypersistence.utils` package name. 
* **org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.2**: This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-60` to `io.hypersistence:hypersistence-utils-hibernate-62`. 
* **org.openrewrite.hibernate.MigrateToHypersistenceUtilsHibernate6.3**: This recipe will migrate any existing dependencies on `io.hypersistence:hypersistence-utils-hibernate-62` to `io.hypersistence:hypersistence-utils-hibernate-63`. 
* **org.openrewrite.micrometer.UpgradeMicrometer**: This recipe will apply changes commonly needed when migrating Micrometer. 

## Changed Recipes

* [org.openrewrite.java.migrate.util.UseEnumSetOf](https://docs.openrewrite.org/recipes/java/migrate/util/useenumsetof) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `convertEmptySet: { type: Boolean, required: false }`