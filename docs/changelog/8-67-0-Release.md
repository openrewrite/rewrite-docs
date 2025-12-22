---
description: What's changed in OpenRewrite version 8.67.0.
---

# 8.67.0 release (2025-11-20)

_Total recipe count: 5005_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.51.2`
* Staging CLI version: `v3.51.3`

## New Artifacts

* rewrite-angular
* rewrite-javascript
* rewrite-react

## New Recipes

* [com.google.guava.InlineGuavaMethods](https://docs.openrewrite.org/recipes/com/google/guava/inlineguavamethods): Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* [io.moderne.devcenter.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/devcenter/dependencyvulnerabilitycheck): Determine the current state of a repository relative to its vulnerabilities. 
* [io.moderne.java.spring.boot3.MigrateAbstractDiscoveredEndpointConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/migrateabstractdiscoveredendpointconstructor): The boolean-parameter constructor of `AbstractDiscoveredEndpoint` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new constructor with an `Access` parameter. 
* [io.moderne.java.spring.boot3.MigrateAbstractExposableEndpointConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/migrateabstractexposableendpointconstructor): The boolean-parameter constructor of `AbstractExposableEndpoint` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new constructor with an `Access` parameter instead of boolean `enableByDefault`. 
* [io.moderne.java.spring.boot3.MigrateEndpointDiscovererConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/migrateendpointdiscovererconstructor): The 4-parameter constructor of `EndpointDiscoverer` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new 5-parameter constructor with an additional Collection parameter. 
* [io.moderne.java.spring.boot3.MigrateEntityManagerFactoryBuilderConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/migrateentitymanagerfactorybuilderconstructor): The constructors of `EntityManagerFactoryBuilder` have been deprecated in Spring Boot 3.4. This recipe transforms them to use the new constructor with a Function parameter for property mapping. 
* [io.moderne.java.spring.boot3.MigrateJmxEndpointDiscovererConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/migratejmxendpointdiscovererconstructor): The 4-parameter constructor of `JmxEndpointDiscoverer` has been deprecated in Spring Boot 3.4. This recipe transforms it to use the new 5-parameter constructor with an additional Collection parameter. 
* [io.moderne.java.spring.boot3.MigrateWebEndpointDiscovererConstructor](https://docs.openrewrite.org/recipes/java/spring/boot3/migratewebendpointdiscovererconstructor): The 6-parameter constructor of `WebEndpointDiscoverer` has been deprecated in Spring Boot 3.3. This recipe adds two new parameters (`AdditionalPathsMapper` and `OperationFilter<WebOperation>`) to the constructor and updates the Bean method signature to inject them as `ObjectProvider` types. 
* [io.moderne.java.spring.boot3.ResolveDeprecationsSpringBoot_3_3](https://docs.openrewrite.org/recipes/java/spring/boot3/resolvedeprecationsspringboot_3_3): Migrates Deprecations in the Spring Boot 3.3 Release. Contains: - Removal of `DefaultJmsListenerContainerFactoryConfigurer.setObservationRegistry` - New parameter of `WebEndpointDiscoverer` constructor 
* [io.moderne.java.spring.boot3.SpringBoot34Deprecations](https://docs.openrewrite.org/recipes/java/spring/boot3/springboot34deprecations): Migrate deprecated classes and methods that have been marked for removal in Spring Boot 4.0. This includes constructor changes for `EntityManagerFactoryBuilder`, `HikariCheckpointRestoreLifecycle`, and various actuator endpoint discovery classes. 
* [io.moderne.java.spring.boot4.ReplaceDeprecatedRequestMatcherProvider](https://docs.openrewrite.org/recipes/java/spring/boot4/replacedeprecatedrequestmatcherprovider): Replaces the deprecated `org.springframework.boot.autoconfigure.security.servlet.RequestMatcherProvider` with `org.springframework.boot.actuate.autoconfigure.security.servlet.RequestMatcherProvider`. The new interface adds an `HttpMethod` parameter to the `getRequestMatcher` method. 
* [org.apache.logging.log4j.InlineLog4jApiMethods](https://docs.openrewrite.org/recipes/org/apache/logging/log4j/inlinelog4japimethods): Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* [org.openrewrite.OrderImports](https://docs.openrewrite.org/recipes/core/orderimports): Sort top-level imports alphabetically within groups: no qualifier, asterisk, multiple, single. 
* [org.openrewrite.angular.search.FindAngularComponent](https://docs.openrewrite.org/recipes/angular/search/findangularcomponent): Locates usages of Angular components across the codebase including template elements and other references. If `componentName` is `null`, finds all Angular components. 
* [org.openrewrite.github.IsGitHubActionsWorkflow](https://docs.openrewrite.org/recipes/github/isgithubactionsworkflow): Checks if the file is a GitHub Actions workflow file. 
* [org.openrewrite.gradle.search.EffectiveGradlePluginRepositories](https://docs.openrewrite.org/recipes/gradle/search/effectivegradlepluginrepositories): Lists the Gradle plugin repositories that would be used for plugin resolution, in order of precedence. This includes Maven repositories defined in the settings.gradle pluginManagement section and build.gradle buildscript repositories as determined when the LST was produced. 
* [org.openrewrite.gradle.search.EffectiveGradleRepositories](https://docs.openrewrite.org/recipes/gradle/search/effectivegradlerepositories): Lists the Gradle project repositories that would be used for dependency resolution, in order of precedence. This includes Maven repositories defined in the Gradle build files and settings as determined when the LST was produced. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_JsonGeneratorMethodRenames](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_jsongeneratormethodrenames): Rename JsonGenerator methods that were renamed in 3.x (e.g., `writeObject()` to `writePOJO()`, `getCurrentValue()` to `currentValue()`). 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_JsonNodeMethodRenames](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_jsonnodemethodrenames): Rename JsonNode methods that were renamed in 3.x (e.g., `elements()` to `values()`, `fields()` to `entries()`). 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_JsonParserMethodRenames](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_jsonparsermethodrenames): Rename JsonParser methods that were renamed in 3.x (e.g., `getTextCharacters()` to `getStringCharacters()`, `getCurrentValue()` to `currentValue()`). 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_RemoveModules](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_removemodules): Remove Jackson modules such as `jackson-module-parameter-names`, `jackson-datatype-jdk8`, and `jackson-datatype-jsr310` to depend on `jackson-databind` in Jackson 3.x. 
* [org.openrewrite.java.migrate.AddLombokMapstructBindingMavenDependencyOnly](https://docs.openrewrite.org/recipes/java/migrate/addlombokmapstructbindingmavendependencyonly): Add the `lombok-mapstruct-binding` when both MapStruct and Lombok are used, and the dependency does not already exist. Only to be called from `org.openrewrite.java.migrate.AddLombokMapstructBinding` to reduce redundant checks 
* [org.openrewrite.java.migrate.guava.NoGuavaIterablesAll](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaiterablesall): Prefer `Collection.stream().allMatch(Predicate)` over `Iterables.all(Collection, Predicate)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaPredicatesInstanceOf](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavapredicatesinstanceof): Prefer `A.class::isInstance` over `Predicates.instanceOf(A.class)`. 
* [org.openrewrite.java.migrate.jakarta.MigrateFastjsonForJakarta10](https://docs.openrewrite.org/recipes/java/migrate/jakarta/migratefastjsonforjakarta10): Update Fastjson to be compatible with Jakarta EE 10. 
* [org.openrewrite.java.migrate.jakarta.MigratePluginsForJakarta10](https://docs.openrewrite.org/recipes/java/migrate/jakarta/migratepluginsforjakarta10): Update plugin to be compatible with Jakarta EE 10. 
* [org.openrewrite.java.migrate.javax.MigrateJaxBWSPlugin](https://docs.openrewrite.org/recipes/java/migrate/javax/migratejaxbwsplugin): Upgrade the JAXB-WS Maven plugin to be compatible with Java 11. 
* [org.openrewrite.java.recipes.RecipeClassesShouldBePublic](https://docs.openrewrite.org/recipes/java/recipes/recipeclassesshouldbepublic): Ensures that classes extending Recipe are declared as public for proper visibility and accessibility. 
* [org.openrewrite.java.spring.batch.SpringBatch5To6Migration](https://docs.openrewrite.org/recipes/java/spring/batch/springbatch5to6migration): Migrate applications built on Spring Batch 5.2 to the latest Spring Batch 6.0 release. 
* [org.openrewrite.java.spring.boot4.MigrateToModularStarters](https://docs.openrewrite.org/recipes/java/spring/boot4/migratetomodularstarters): Removes monolithic starters and adds the necessary Spring Boot 4.0 starter dependencies based on package usage. Spring Boot 4.0 has a modular design requiring explicit starters for each feature. This recipe detects feature usage via package imports and adds the appropriate starters.
Note: Higher-level starters (like data-jpa) include lower-level ones (like jdbc) transitively, so only the highest-level detected starter is added for each technology. 
* [org.openrewrite.java.spring.boot4.ReplaceMockBeanAndSpyBean](https://docs.openrewrite.org/recipes/java/spring/boot4/replacemockbeanandspybean): Replaces `@MockBean` and `@SpyBean` annotations with `@MockitoBean` and `@MockitoSpyBean`. 
* [org.openrewrite.java.spring.doc.ApiInfoBuilderToInfo](https://docs.openrewrite.org/recipes/java/spring/doc/apiinfobuildertoinfo): Migrate SpringFox's `ApiInfoBuilder` to Swagger's `Info`. 
* [org.openrewrite.java.spring.doc.SecurityContextToSecurityScheme](https://docs.openrewrite.org/recipes/java/spring/doc/securitycontexttosecurityscheme): Replace `ApiKey`, `AuthorizationScope`, and `SecurityScheme` elements with Swagger's equivalents. 
* [org.openrewrite.java.spring.security7.UpgradeSpringSecurity_7_0](https://docs.openrewrite.org/recipes/java/spring/security7/upgradespringsecurity_7_0): Migrate applications to the latest Spring Security 7.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* [org.openrewrite.java.testing.testcontainers.AddTestcontainersAnnotations](https://docs.openrewrite.org/recipes/java/testing/testcontainers/addtestcontainersannotations): Convert Testcontainers `@Rule`/`@ClassRule` to JUnit 5 `@Container` and add `@Testcontainers`. 
* [org.openrewrite.javascript.migrate.es6.modernize-octal-escape-sequences](https://docs.openrewrite.org/recipes/javascript/migrate/es6/modernize-octal-escape-sequences): Convert old-style octal escape sequences (e.g., `\0`, `\123`) to modern hex escape sequences (e.g., `\x00`, `\x53`) or Unicode escape sequences (e.g., `\u0000`, `\u0053`). 
* [org.openrewrite.javascript.migrate.es6.modernize-octal-literals](https://docs.openrewrite.org/recipes/javascript/migrate/es6/modernize-octal-literals): Convert old-style octal literals (e.g., `0777`) to modern ES6 syntax (e.g., `0o777`). 
* [org.openrewrite.javascript.migrate.es6.remove-duplicate-object-keys](https://docs.openrewrite.org/recipes/javascript/migrate/es6/remove-duplicate-object-keys): Remove duplicate keys in object literals, keeping only the last occurrence (last-wins semantics). 
* [org.openrewrite.javascript.migrate.typescript.export-assignment-to-export-default](https://docs.openrewrite.org/recipes/javascript/migrate/typescript/export-assignment-to-export-default): Converts TypeScript `export =` syntax to ES module `export default` syntax for compatibility with ECMAScript modules. 
* [org.openrewrite.node.migrate.buffer.replace-deprecated-slice](https://docs.openrewrite.org/recipes/node/migrate/buffer/replace-deprecated-slice): Replace deprecated `buffer.slice()` calls with `buffer.subarray()` for compatibility with Uint8Array.prototype.slice(). 
* [org.openrewrite.node.migrate.crypto.replace-hash-constructor](https://docs.openrewrite.org/recipes/node/migrate/crypto/replace-hash-constructor): Replace deprecated `new crypto.Hash(algorithm)` constructor calls with `crypto.createHash(algorithm)` and `new crypto.Hmac(algorithm, key)` with `crypto.createHmac(algorithm, key)` factory methods. 
* [org.openrewrite.node.migrate.process.remove-usage-of-features-tls-underscore_constants](https://docs.openrewrite.org/recipes/node/migrate/process/remove-usage-of-features-tls-underscore_constants): Remove references to deprecated `process.features.tls_*` properties, replace with `process.features.tls`. 
* [org.openrewrite.node.migrate.util.replace-util-extend](https://docs.openrewrite.org/recipes/node/migrate/util/replace-util-extend): Replace deprecated `util._extend(target, source)` calls with `Object.assign(target, source)` which preserves the mutation behavior. 
* [org.openrewrite.node.migrate.util.replace-util-log](https://docs.openrewrite.org/recipes/node/migrate/util/replace-util-log): Replace deprecated `util.log()` calls with `console.log()`. Note: `util.log()` included timestamps, but `console.log()` does not. 
* [org.openrewrite.node.migrate.util.use-native-type-checking-methods](https://docs.openrewrite.org/recipes/node/migrate/util/use-native-type-checking-methods): The `util` module's type-checking methods have been removed in Node 22. 
* [org.openrewrite.react.search.FindPropUsage](https://docs.openrewrite.org/recipes/react/search/findpropusage): Locates usages of a specific prop of a React component. 
* [org.openrewrite.react.search.FindReactComponent](https://docs.openrewrite.org/recipes/react/search/findreactcomponent): Locates usages of React components across the codebase including JSX elements and other references. If `componentName` is `null`, finds all React components. 
* [org.openrewrite.staticanalysis.AnnotateRequiredParameters](https://docs.openrewrite.org/recipes/staticanalysis/annotaterequiredparameters): Add `@NonNull` to parameters of public methods that are explicitly checked for `null` and throw an exception if null. By default `org.jspecify.annotations.NonNull` is used, but through the `nonNullAnnotationClass` option a custom annotation can be provided. When providing a custom `nonNullAnnotationClass` that annotation should be meta annotated with `@Target(TYPE_USE)`. This recipe scans for methods that do not already have parameters annotated with `@NonNull` annotation and checks for null validation patterns that throw exceptions, such as `if (param == null) throw new IllegalArgumentException()`. 
* [org.openrewrite.text.RemoveByteOrderMark](https://docs.openrewrite.org/recipes/text/removebyteordermark): Removes UTF-8 byte order marks from the beginning of files.

The BOM character (U+FEFF) is generally unnecessary in UTF-8 files and can cause issues with some tools. 

## Removed Recipes

* **ai.timefold.solver.migration.fork.TimefoldChangeDependencies**: Migrate all Maven and Gradle groupIds and artifactIds from OptaPlanner to Timefold. 
* **ai.timefold.solver.migration.v8.AsConstraintRecipe**: Use `penalize().asConstraint()` and `reward().asConstraint()` instead of the deprecated `penalize()` and `reward()` methods. 
* **ai.timefold.solver.migration.v8.ConstraintRefRecipe**: Use `getConstraintRef()` instead of `getConstraintId()` et al. 
* **ai.timefold.solver.migration.v8.NullableRecipe**: Removes references to null vars and replace them with unassigned values. 
* **ai.timefold.solver.migration.v8.RemoveConstraintPackageRecipe**: Remove the use of constraint package from `asConstraint(package, name)`. 
* **ai.timefold.solver.migration.v8.ScoreGettersRecipe**: Use `score()` instead of `getScore()` on `Score` implementations. 
* **ai.timefold.solver.migration.v8.ScoreManagerMethodsRecipe**: Use `explain()` and `update()`    instead of `explainScore()`, `updateScore()` and `getSummary()`. 
* **ai.timefold.solver.migration.v8.SingleConstraintAssertionMethodsRecipe**: Use `penalizesBy/rewardsWith(String, int)` instead of `penalizesBy/rewardsWith(int, String)` on `SingleConstraintAssertion` tests. 
* **ai.timefold.solver.migration.v8.SolutionManagerRecommendAssignmentRecipe**: Use recommendAssignment() instead of recommendFit(). 
* **ai.timefold.solver.migration.v8.SolverManagerBuilderRecipe**: Use `solveBuilder()` instead of deprecated solve methods on `SolveManager`. 
* **com.google.guava.InlineGuavaMethods**: Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* **io.moderne.java.spring.boot4.SpringBootProperties_4_0**: Migrate properties found in `application.properties` and `application.yml`. 
* **org.apache.logging.log4j.InlineLog4jApiMethods**: Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* **org.openrewrite.java.spring.boot3.ReplaceMockBeanAndSpyBean**: Replaces `@MockBean` and `@SpyBean` annotations with `@MockitoBean` and `@MockitoSpyBean`. 
* **org.openrewrite.java.springdoc.ApiInfoBuilderToInfo**: Migrate SpringFox's `ApiInfoBuilder` to Swagger's `Info`. 
* **org.openrewrite.java.springdoc.SecurityContextToSecurityScheme**: Replace `ApiKey`, `AuthorizationScope`, and `SecurityScheme` elements with Swagger's equivalents. 

## Changed Recipes

* [org.openrewrite.gradle.search.FindDependency](https://docs.openrewrite.org/recipes/gradle/search/finddependency) was changed:
  * Old Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
  * New Options:
    * `artifactId: { type: String, required: true }`
    * `configuration: { type: String, required: false }`
    * `groupId: { type: String, required: true }`
    * `version: { type: String, required: false }`
    * `versionPattern: { type: String, required: false }`
* [org.openrewrite.csharp.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/csharp/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `addMarkers: { type: Boolean, required: false }`
  * New Options:
    * `addMarkers: { type: Boolean, required: false }`
    * `cvePattern: { type: String, required: false }`
* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `minimumSeverity: { type: String, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `cvePattern: { type: String, required: false }`
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `minimumSeverity: { type: String, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`