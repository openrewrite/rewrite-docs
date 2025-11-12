---
description: What's changed in OpenRewrite version 8.66.1.
---

# 8.66.1 release (2025-11-11)

_Total recipe count: 4972_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## Corresponding CLI version

* Stable CLI version `v3.50.1`
* Staging CLI version: `v3.50.1`

## New Recipes

* [com.google.guava.InlineGuavaMethods](https://docs.openrewrite.org/recipes/com/google/guava/inlineguavamethods): Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* [io.moderne.java.spring.boot4.UpgradeSpringBoot_4_0](https://docs.openrewrite.org/recipes/java/spring/boot4/upgradespringboot_4_0-moderne-edition): Migrate applications to the latest Spring Boot 4.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 4.0. 
* [io.moderne.java.spring.framework.NullableSpringWebParameters](https://docs.openrewrite.org/recipes/java/spring/framework/nullablespringwebparameters): In Spring Boot 4, JSpecify's `@Nullable` annotation should be used to indicate that a parameter can be null. This recipe adds `@Nullable` to parameters annotated with `@PathVariable(required = false)` or `@RequestParam(required = false)` and removes the now-redundant `required = false` attribute. 
* [org.apache.logging.log4j.InlineLog4jApiMethods](https://docs.openrewrite.org/recipes/org/apache/logging/log4j/inlinelog4japimethods): Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* [org.openrewrite.github.MigrateSetupUvV6ToV7](https://docs.openrewrite.org/recipes/github/migratesetupuvv6tov7): Migrates `astral-sh/setup-uv` from v6 to v7. Updates the action version and removes the deprecated `server-url` input. See the [v7.0.0 release notes](https://github.com/astral-sh/setup-uv/releases/tag/v7.0.0) for breaking changes. 
* [org.openrewrite.gradle.MigrateDependenciesToVersionCatalog](https://docs.openrewrite.org/recipes/gradle/migratedependenciestoversioncatalog): Migrates Gradle project dependencies to use the [version catalog](https://docs.gradle.org/current/userguide/platforms.html) feature. Supports migrating dependency declarations of various forms:
 * `String` notation: `"group:artifact:version"`
 * `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
 * Property references: `"group:artifact:$version"` or `"group:artifact:${version}"`

The recipe will:
 * Create a `gradle/libs.versions.toml` file with version declarations
 * Replace dependency declarations with catalog references (e.g., `libs.springCore`)
 * Migrate version properties from `gradle.properties` to the version catalog
 * Preserve project dependencies unchanged

**Note:** If a version catalog already exists, the recipe will not modify it. 
* [org.openrewrite.java.migrate.guava.NoGuavaCollections2Transform](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavacollections2transform): Prefer `Collection.stream().map(Function)` over `Collections2.transform(Collection, Function)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaFunctionsCompose](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavafunctionscompose): Prefer `Function.compose(Function)` over `Functions.compose(Function, Function)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaIterablesAnyFilter](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaiterablesanyfilter): Prefer `Collection.stream().anyMatch(Predicate)` over `Iterables.any(Collection, Predicate)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaIterablesTransform](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaiterablestransform): Prefer `Collection.stream().map(Function)` over `Iterables.transform(Collection, Function)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaOptionalAsSet](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaoptionalasset): Prefer `Optional.stream().collect(Collectors.toSet())` over `Optional.asSet()`. 
* [org.openrewrite.java.migrate.guava.NoGuavaPredicate](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavapredicate): Change the type only where no methods are used that explicitly require a Guava `Predicate`. 
* [org.openrewrite.java.migrate.guava.NoGuavaPredicatesEqualTo](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavapredicatesequalto): Prefer `Predicate.isEqual(Object)` over `Predicates.equalTo(Object)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaSetsFilter](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavasetsfilter): Prefer `Collection.stream().filter(Predicate)` over `Sets.filter(Set, Predicate)`. 
* [org.openrewrite.java.migrate.jakarta.JettyUpgradeEE10](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jettyupgradeee10): Update Jetty dependencies from EE9 to EE10, changing the groupId and artifactIds as needed. 
* [org.openrewrite.java.spring.PropertiesToKebabCaseProperties](https://docs.openrewrite.org/recipes/java/spring/propertiestokebabcaseproperties): Normalize Spring `application*.properties` properties to kebab-case. 
* [org.openrewrite.java.spring.PropertiesToKebabCaseYaml](https://docs.openrewrite.org/recipes/java/spring/propertiestokebabcaseyaml): Normalize Spring `application*.{yml,yaml}` properties to kebab-case. 
* [org.openrewrite.java.spring.boot2.MigrateDatabaseCredentialsForToolProperties](https://docs.openrewrite.org/recipes/java/spring/boot2/migratedatabasecredentialsfortoolproperties): Migrate null credentials. 
* [org.openrewrite.java.spring.boot2.MigrateDatabaseCredentialsForToolYaml](https://docs.openrewrite.org/recipes/java/spring/boot2/migratedatabasecredentialsfortoolyaml): Migrate null credentials. 
* [org.openrewrite.java.spring.boot4.SpringBootProperties_4_0](https://docs.openrewrite.org/recipes/java/spring/boot4/springbootproperties_4_0): Migrate properties found in `application.properties` and `application.yml`. 
* [org.openrewrite.java.spring.boot4.UpgradeSpringBoot_4_0](https://docs.openrewrite.org/recipes/java/spring/boot4/upgradespringboot_4_0-community-edition): Migrate applications to the latest Spring Boot 4.0 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs. 
* [org.openrewrite.java.spring.framework.UpgradeSpringFramework_7_0](https://docs.openrewrite.org/recipes/java/spring/framework/upgradespringframework_7_0): Migrate applications to the latest Spring Framework 7.0 release. 
* [org.openrewrite.java.spring.search.FindConfigurationProperties](https://docs.openrewrite.org/recipes/java/spring/search/findconfigurationproperties): Find all classes annotated with `@ConfigurationProperties` and extract their prefix values. This is useful for discovering all externalized configuration properties in Spring Boot applications. 
* [org.openrewrite.java.springdoc.ApiInfoBuilderToInfo](https://docs.openrewrite.org/recipes/java/springdoc/apiinfobuildertoinfo): Migrate SpringFox's `ApiInfoBuilder` to Swagger's `Info`. 
* [org.openrewrite.java.springdoc.SecurityContextToSecurityScheme](https://docs.openrewrite.org/recipes/java/springdoc/securitycontexttosecurityscheme): Replace `ApiKey`, `AuthorizationScope`, and `SecurityScheme` elements with Swagger's equivalents. 
* [org.openrewrite.java.testing.assertj.SimplifySequencedCollectionAssertions](https://docs.openrewrite.org/recipes/java/testing/assertj/simplifysequencedcollectionassertions): Simplify AssertJ assertions on SequencedCollection by using dedicated assertion methods. For example, `assertThat(sequencedCollection.getLast())` can be simplified to `assertThat(sequencedCollection).last()`. 
* [org.openrewrite.staticanalysis.ReorderAnnotationAttributes](https://docs.openrewrite.org/recipes/staticanalysis/reorderannotationattributes): Reorder annotation attributes to be alphabetical. Positional arguments (those without explicit attribute names) are left in their original position. 
* [org.openrewrite.staticanalysis.ReplaceStringConcatenationWithStringValueOf](https://docs.openrewrite.org/recipes/staticanalysis/replacestringconcatenationwithstringvalueof): Replace inefficient string concatenation patterns like `"" + ...` with `String.valueOf(...)`. This improves code readability and may have minor performance benefits. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTimeoutFluxEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxtimeoutfluxemptyrecipe): Prefer `Flux#timeout(Duration, Publisher)` over more contrived or less performant alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationMonoEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationmonoemptyrecipe): Prefer `Mono#timeout(Duration, Mono)` over more contrived or less performant alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationMonoJustRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationmonojustrecipe): Prefer `Mono#timeout(Duration, Mono)` over more contrived or less performant alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutDurationRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutdurationrecipe): Prefer `Mono#timeout(Duration, Mono)` over more contrived or less performant alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherMonoEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublishermonoemptyrecipe): Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less performant alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherMonoJustRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublishermonojustrecipe): Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less performant alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoTimeoutPublisherRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$monotimeoutpublisherrecipe): Prefer `Mono#timeout(Publisher, Mono)` over more contrived or less performant alternatives. 

## Removed Recipes

* **io.moderne.java.spring.security6.UpgradeSpringSecurity_6_4**: Migrate applications to the latest Spring Security 6.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. 
* **org.openrewrite.java.logging.log4j.InlineMethods**: Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 
* **org.openrewrite.java.migrate.UpdateJakartaAnnotationsIfExistsForJakarta**: Counteract the `jakarta.annotation-api` by updating to `jakarta` namespace 
* **org.openrewrite.java.migrate.UpdateJakartaAnnotationsIfForJavax**: Counteract the `jakarta.annotation-api` by updating to `jakarta` namespace 
* **org.openrewrite.java.migrate.guava.NoGuavaInlineMeMethods**: Automatically generated recipes to inline method calls based on `@InlineMe` annotations discovered in the type table. 

## Changed Recipes

* [org.openrewrite.java.format.AutoFormat](https://docs.openrewrite.org/recipes/java/format/autoformat) was changed:
  * Old Options:
    * `None`
  * New Options:
    * `style: { type: String, required: false }`
* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `minimumSeverity: { type: String, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`