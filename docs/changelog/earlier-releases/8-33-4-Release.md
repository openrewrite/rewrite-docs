# 8.33.4 release (2024-08-12)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Artifacts
* rewrite-feature-flags
* rewrite-reactive-streams

## Removed Artifacts
* rewrite-launchdarkly

## New Recipes

* org.openrewrite.featureflags.RemoveBooleanFlag: Replace method invocations for feature key with value, and simplify constant if branch execution. 
* org.openrewrite.featureflags.ff4j.RemoveCheck: Replace `check()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* org.openrewrite.featureflags.ff4j.search.FindFeatureFlag: Find a FF4j feature flag. 
* org.openrewrite.featureflags.launchdarkly.ChangeVariationDefault: Change the default value for `Variation` invocations for feature key. 
* org.openrewrite.featureflags.launchdarkly.MigrateUserToContext: Migrate from `LDUser` and `LDUser.Builder` to `LDContext` and `ContextBuilder`. 
* org.openrewrite.featureflags.launchdarkly.RemoveBoolVariation: Replace `boolVariation` invocations for feature key with value, and simplify constant if branch execution. 
* org.openrewrite.featureflags.launchdarkly.UpgradeLaunchDarkly6: This recipe will apply changes commonly needed when migrating to LaunchDarkly 6.x. 
* org.openrewrite.featureflags.launchdarkly.UpgradeLaunchDarkly7: This recipe will apply changes commonly needed when migrating to LaunchDarkly 7.x. 
* org.openrewrite.featureflags.launchdarkly.search.FindFeatureFlag: Find a LaunchDarkly feature flag. 
* org.openrewrite.featureflags.openfeature.RemoveGetBooleanValue: Replace `getBooleanValue()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* org.openrewrite.featureflags.openfeature.search.FindFeatureFlag: Find an OpenFeature feature flag. 
* org.openrewrite.featureflags.search.FindFeatureFlag: Find a feature flag matching method pattern. 
* org.openrewrite.featureflags.unleash.RemoveIsEnabled: Replace `isEnabled()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* org.openrewrite.featureflags.unleash.search.FindFeatureFlag: Find an Unleash feature flag. 
* org.openrewrite.java.dependencies.SoftwareBillOfMaterials: Produces a software bill of materials (SBOM) for a project. An SBOM is a complete list of all dependencies used in a project, including transitive dependencies. The produced SBOM is in the CycloneDX XML format. Supports Gradle and Maven. Places a file named sbom.xml adjacent to the Gradle or Maven build file. 
* org.openrewrite.java.migrate.RemovedRuntimeTraceMethods: The `traceInstructions` and `traceMethodCalls` methods in `java.lang.Runtime` were deprecated in Java SE 9 and are no longer available in Java SE 13 and later.  The recipe removes the invocations of these methods since the method invocations do nothing functionally. 
* org.openrewrite.java.migrate.guava.NoGuavaMapsNewTreeMap: Prefer the Java standard library over third-party usage of Guava in simple cases like this. 
* org.openrewrite.java.migrate.guava.NoGuavaPrimitiveAsList: Migrate from Guava `com.google.common.primitives.* asList(..)` to `Arrays.asList(..)`. 
* org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes: Recipes that migrate from Guava to Java, using Refaster style templates for cases beyond what declarative recipes can cover. 
* org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullToObjectsRequireNonNullRecipe: Migrate from Guava `Preconditions.checkNotNull` to Java 8 `java.util.Objects.requireNonNull`. 
* org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$StringValueOfStringRecipe: Migrate from `String.valueof(String)` to `String`, mainly as a cleanup after other recipes. 
* org.openrewrite.java.search.ClasspathTypeCounts: Emit one data table row per source set in a project, with the number of types in the source set. 
* org.openrewrite.java.spring.batch.MigrateStepBuilderFactory: `StepBuilderFactory` was deprecated in spring-batch 5.x. It is replaced by `StepBuilder`. 
* org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_1: Migrate applications to the latest Spring Framework 6.1 release. 
* org.openrewrite.java.testing.assertj.SimplifyAssertJAssertion: Simplify AssertJ assertions by replacing them with more expressiove dedicated assertions. 
* org.openrewrite.java.testing.assertj.SimplifyAssertJAssertions: Replace AssertJ assertions where a dedicated assertion is available for the same actual value. 
* org.openrewrite.java.testing.cleanup.AssertLiteralBooleanToFailRecipe: Using fail is more direct and clear. 
* org.openrewrite.micrometer.UpgradeMicrometer_1_13: Migrate applications to the latest Micrometer 1.13 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions as described in the Micrometer 1.13 migration guide. 
* org.openrewrite.nodejs.DependencyVulnerabilityCheck: This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the GitHub Security Advisory Database, which aggregates vulnerability data from several public databases, including the National Vulnerability Database maintained by the United States government. Dependencies following Semantic Versioning will see their _patch_ version updated where applicable. 
* org.openrewrite.nodejs.search.DatabaseInteractionInsights: Discover which popular javascript database interaction libraries (Sequelize, TypeORM, Mongoose, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.FormHandlingInsights: Discover which popular javascript form handling libraries (Formik, React Hook Form, Yup, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.LintingFormattingInsights: Discover which popular javascript linting and formatting libraries (ESLint, Prettier, Stylelint, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.RealTimeCommunicationInsights: Discover which popular javascript real-time communication libraries (Socket.io, Ws, SockJS, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.SecurityInsights: Discover which popular javascript security libraries (Helmet, Cors, Bcrypt, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.ServerSideFrameworksInsights: Discover which popular javascript server-side frameworks (Express, Koa, Hapi, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.StateManagementInsights: Discover which popular javascript state management libraries (Redux, MobX, Vuex, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.TaskRunnersBuildToolsInsights: Discover which popular javascript task runners and build tools (Webpack, Parcel, Gulp, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.TestingInsights: Discover which popular javascript testing libraries (Jest, Mocha, Chai, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.UIInsights: Discover which popular javascript UI libraries (React, Vue.js, Angular, etc.) are being used in your projects. 
* org.openrewrite.nodejs.search.UtilityInsights: Discover which popular javascript utility libraries (Lodash, Moment.js, Date-fns, etc.) are being used in your projects. 
* org.openrewrite.reactive.reactor.ReactorProcessorCacheToSinkRecipes: As of 3.5 Processors are deprecated and Sinks are preferred. 
* org.openrewrite.reactive.reactor.ReactorProcessorCacheToSinkRecipes$ReplayProcessorCacheDefaultToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCacheToSinkRecipes$ReplayProcessorCacheToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes: As of 3.5 Processors are deprecated and Sinks are preferred. 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$DirectProcessorCreateToSinkRecipe: As of 3.5 DirectProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateBooleanToSinkRecipe: As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateIntBooleanToSinkRecipe: As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateIntToSinkRecipe: As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateToSinkRecipe: As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$MonoProcessorCreateToSinkRecipe: As of 3.5 MonoProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateIntLiteralFalseToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateIntLiteralTrueToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateIntToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateSizeAndTimeoutSchedulerToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateSizeAndTimeoutToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateTimeoutSchedulerToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateTimeoutToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateToSinkRecipe: As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateQueueConsumerDisposableToSinkRecipe: As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateQueueDisposableToSinkRecipe: As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateQueueToSinkRecipe: As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateToSinkRecipe: As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* org.openrewrite.reactive.reactor.UpgradeReactor_3_5: Adopt to breaking changes in Reactor 3.5. 
* org.openrewrite.scala.migrate.UpgradeScala_2_12: Upgrade the Scala version for compatibility with newer Java versions. 
* tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesCreateTempFileToFileRecipe: Recipe created for the following Refaster template:<br />```java<br />static final class FilesCreateTempFileToFile {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S5443")<br />    File before(String prefix, String suffix) throws IOException {<br />        return Refaster.anyOf(File.createTempFile(prefix, suffix), File.createTempFile(prefix, suffix, null));<br />    }<br />    <br />    @AfterTemplate<br />    @SuppressWarnings(value = "java:S5443")<br />    File after(String prefix, String suffix) throws IOException {<br />        return Files.createTempFile(prefix, suffix).toFile();<br />    }<br />}<br />```<br />. 

## Removed Recipes

* **org.openrewrite.java.migrate.jakarta.JavaxAnnotationSecurityPackageToJakarta**: Change type of classes in the `javax.annotation.security` package to jakarta. 
* **org.openrewrite.java.migrate.jakarta.JavaxAnnotationSqlPackageToJakarta**: Change type of classes in the `javax.annotation.sql` package to jakarta. 
* **org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion**: This recipe will upgrade Wro4j to a more recent version compatible with Java 11. 
* **org.openrewrite.java.testing.assertj.IsEqualToBoolean**: Adopt idiomatic AssertJ assertion for true booleans. 
* **org.openrewrite.java.testing.assertj.IsEqualToEmptyString**: Adopt idiomatic AssertJ assertion for empty Strings. 
* **org.openrewrite.micrometer.UpgradeMicrometer13**: Migrate applications to the latest Micrometer 1.13 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions as described in the Micrometer 1.13 migration guide. 

