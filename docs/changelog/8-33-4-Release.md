# 8.33.4 release (2024-08-12)

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Artifacts
* rewrite-feature-flags
* rewrite-reactive-streams

## Removed Artifacts
* rewrite-launchdarkly

## New Recipes

* [org.openrewrite.featureflags.RemoveBooleanFlag](../recipes/featureflags/removebooleanflag): Replace method invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.ff4j.RemoveCheck](../recipes/featureflags/ff4j/removecheck): Replace `check()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.ff4j.search.FindFeatureFlag](../recipes/featureflags/ff4j/search/findfeatureflag): Find a FF4j feature flag. 
* [org.openrewrite.featureflags.launchdarkly.ChangeVariationDefault](../recipes/featureflags/launchdarkly/changevariationdefault): Change the default value for `Variation` invocations for feature key. 
* [org.openrewrite.featureflags.launchdarkly.MigrateUserToContext](../recipes/featureflags/launchdarkly/migrateusertocontext): Migrate from `LDUser` and `LDUser.Builder` to `LDContext` and `ContextBuilder`. 
* [org.openrewrite.featureflags.launchdarkly.RemoveBoolVariation](../recipes/featureflags/launchdarkly/removeboolvariation): Replace `boolVariation` invocations for feature key with value, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.launchdarkly.UpgradeLaunchDarkly6](../recipes/featureflags/launchdarkly/upgradelaunchdarkly6): This recipe will apply changes commonly needed when migrating to LaunchDarkly 6.x. 
* [org.openrewrite.featureflags.launchdarkly.UpgradeLaunchDarkly7](../recipes/featureflags/launchdarkly/upgradelaunchdarkly7): This recipe will apply changes commonly needed when migrating to LaunchDarkly 7.x. 
* [org.openrewrite.featureflags.launchdarkly.search.FindFeatureFlag](../recipes/featureflags/launchdarkly/search/findfeatureflag): Find a LaunchDarkly feature flag. 
* [org.openrewrite.featureflags.openfeature.RemoveGetBooleanValue](../recipes/featureflags/openfeature/removegetbooleanvalue): Replace `getBooleanValue()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.openfeature.search.FindFeatureFlag](../recipes/featureflags/openfeature/search/findfeatureflag): Find an OpenFeature feature flag. 
* [org.openrewrite.featureflags.search.FindFeatureFlag](../recipes/featureflags/search/findfeatureflag): Find a feature flag matching method pattern. 
* [org.openrewrite.featureflags.unleash.RemoveIsEnabled](../recipes/featureflags/unleash/removeisenabled): Replace `isEnabled()` invocations for `featureKey` with `replacementValue`, and simplify constant if branch execution. 
* [org.openrewrite.featureflags.unleash.search.FindFeatureFlag](../recipes/featureflags/unleash/search/findfeatureflag): Find an Unleash feature flag. 
* [org.openrewrite.java.dependencies.SoftwareBillOfMaterials](../recipes/java/dependencies/softwarebillofmaterials): Produces a software bill of materials (SBOM) for a project. An SBOM is a complete list of all dependencies used in a project, including transitive dependencies. The produced SBOM is in the [CycloneDX](https://cyclonedx.org/) XML format. Supports Gradle and Maven. Places a file named sbom.xml adjacent to the Gradle or Maven build file. 
* [org.openrewrite.java.migrate.RemovedRuntimeTraceMethods](../recipes/java/migrate/removedruntimetracemethods): The `traceInstructions` and `traceMethodCalls` methods in `java.lang.Runtime` were deprecated in Java SE 9 and are no longer available in Java SE 13 and later.  The recipe removes the invocations of these methods since the method invocations do nothing functionally. 
* [org.openrewrite.java.migrate.guava.NoGuavaMapsNewTreeMap](../recipes/java/migrate/guava/noguavamapsnewtreemap): Prefer the Java standard library over third-party usage of Guava in simple cases like this. 
* [org.openrewrite.java.migrate.guava.NoGuavaPrimitiveAsList](../recipes/java/migrate/guava/noguavaprimitiveaslist): Migrate from Guava `com.google.common.primitives.* asList(..)` to `Arrays.asList(..)`. 
* [org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes](../recipes/java/migrate/guava/noguavarefasterrecipes): Recipes that migrate from Guava to Java, using Refaster style templates for cases beyond what declarative recipes can cover. 
* [org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$PreconditionsCheckNotNullToObjectsRequireNonNullRecipe](../recipes/java/migrate/guava/noguavarefasterrecipesusdpreconditionschecknotnulltoobjectsrequirenonnullrecipe): Migrate from Guava `Preconditions.checkNotNull` to Java 8 `java.util.Objects.requireNonNull`. 
* [org.openrewrite.java.migrate.guava.NoGuavaRefasterRecipes$StringValueOfStringRecipe](../recipes/java/migrate/guava/noguavarefasterrecipesusdstringvalueofstringrecipe): Migrate from `String.valueof(String)` to `String`, mainly as a cleanup after other recipes. 
* [org.openrewrite.java.search.ClasspathTypeCounts](../recipes/java/search/classpathtypecounts): Emit one data table row per source set in a project, with the number of types in the source set. 
* [org.openrewrite.java.spring.batch.MigrateStepBuilderFactory](../recipes/java/spring/batch/migratestepbuilderfactory): `StepBuilderFactory` was deprecated in spring-batch 5.x. It is replaced by `StepBuilder`. 
* [org.openrewrite.java.spring.framework.UpgradeSpringFramework_6_1](../recipes/java/spring/framework/upgradespringframework_6_1): Migrate applications to the latest Spring Framework 6.1 release. 
* [org.openrewrite.java.testing.assertj.SimplifyAssertJAssertion](../recipes/java/testing/assertj/simplifyassertjassertion): Simplify AssertJ assertions by replacing them with more expressiove dedicated assertions. 
* [org.openrewrite.java.testing.assertj.SimplifyAssertJAssertions](../recipes/java/testing/assertj/simplifyassertjassertions): Replace AssertJ assertions where a dedicated assertion is available for the same actual value. 
* [org.openrewrite.java.testing.cleanup.AssertLiteralBooleanToFailRecipe](../recipes/java/testing/cleanup/assertliteralbooleantofailrecipe): Using fail is more direct and clear. 
* [org.openrewrite.micrometer.UpgradeMicrometer_1_13](../recipes/micrometer/upgrademicrometer_1_13): Migrate applications to the latest Micrometer 1.13 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions as described in the [Micrometer 1.13 migration guide](https://github.com/micrometer-metrics/micrometer/wiki/1.13-Migration-Guide). 
* [org.openrewrite.nodejs.DependencyVulnerabilityCheck](../recipes/nodejs/dependencyvulnerabilitycheck): This software composition analysis (SCA) tool detects and upgrades dependencies with publicly disclosed vulnerabilities. This recipe both generates a report of vulnerable dependencies and upgrades to newer versions with fixes. This recipe **only** upgrades to the latest **patch** version.  If a minor or major upgrade is required to reach the fixed version, this recipe will not make any changes. Vulnerability information comes from the [GitHub Security Advisory Database](https://docs.github.com/en/code-security/security-advisories/global-security-advisories/about-the-github-advisory-database), which aggregates vulnerability data from several public databases, including the [National Vulnerability Database](https://nvd.nist.gov/) maintained by the United States government. Dependencies following [Semantic Versioning](https://semver.org/) will see their _patch_ version updated where applicable. 
* [org.openrewrite.nodejs.search.DatabaseInteractionInsights](../recipes/nodejs/search/databaseinteractioninsights): Discover which popular javascript database interaction libraries (Sequelize, TypeORM, Mongoose, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.FormHandlingInsights](../recipes/nodejs/search/formhandlinginsights): Discover which popular javascript form handling libraries (Formik, React Hook Form, Yup, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.LintingFormattingInsights](../recipes/nodejs/search/lintingformattinginsights): Discover which popular javascript linting and formatting libraries (ESLint, Prettier, Stylelint, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.RealTimeCommunicationInsights](../recipes/nodejs/search/realtimecommunicationinsights): Discover which popular javascript real-time communication libraries (Socket.io, Ws, SockJS, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.SecurityInsights](../recipes/nodejs/search/securityinsights): Discover which popular javascript security libraries (Helmet, Cors, Bcrypt, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.ServerSideFrameworksInsights](../recipes/nodejs/search/serversideframeworksinsights): Discover which popular javascript server-side frameworks (Express, Koa, Hapi, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.StateManagementInsights](../recipes/nodejs/search/statemanagementinsights): Discover which popular javascript state management libraries (Redux, MobX, Vuex, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.TaskRunnersBuildToolsInsights](../recipes/nodejs/search/taskrunnersbuildtoolsinsights): Discover which popular javascript task runners and build tools (Webpack, Parcel, Gulp, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.TestingInsights](../recipes/nodejs/search/testinginsights): Discover which popular javascript testing libraries (Jest, Mocha, Chai, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.UIInsights](../recipes/nodejs/search/uiinsights): Discover which popular javascript UI libraries (React, Vue.js, Angular, etc.) are being used in your projects. 
* [org.openrewrite.nodejs.search.UtilityInsights](../recipes/nodejs/search/utilityinsights): Discover which popular javascript utility libraries (Lodash, Moment.js, Date-fns, etc.) are being used in your projects. 
* [org.openrewrite.reactive.reactor.ReactorProcessorCacheToSinkRecipes](../recipes/reactive/reactor/reactorprocessorcachetosinkrecipes): As of 3.5 Processors are deprecated and Sinks are preferred. 
* [org.openrewrite.reactive.reactor.ReactorProcessorCacheToSinkRecipes$ReplayProcessorCacheDefaultToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcachetosinkrecipesusdreplayprocessorcachedefaulttosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCacheToSinkRecipes$ReplayProcessorCacheToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcachetosinkrecipesusdreplayprocessorcachetosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipes): As of 3.5 Processors are deprecated and Sinks are preferred. 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$DirectProcessorCreateToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusddirectprocessorcreatetosinkrecipe): As of 3.5 DirectProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateBooleanToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdemitterprocessorcreatebooleantosinkrecipe): As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateIntBooleanToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdemitterprocessorcreateintbooleantosinkrecipe): As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateIntToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdemitterprocessorcreateinttosinkrecipe): As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$EmitterProcessorCreateToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdemitterprocessorcreatetosinkrecipe): As of 3.5 EmitterProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$MonoProcessorCreateToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdmonoprocessorcreatetosinkrecipe): As of 3.5 MonoProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateIntLiteralFalseToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreateintliteralfalsetosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateIntLiteralTrueToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreateintliteraltruetosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateIntToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreateinttosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateSizeAndTimeoutSchedulerToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreatesizeandtimeoutschedulertosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateSizeAndTimeoutToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreatesizeandtimeouttosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateTimeoutSchedulerToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreatetimeoutschedulertosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateTimeoutToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreatetimeouttosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$ReplayProcessorCreateToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdreplayprocessorcreatetosinkrecipe): As of 3.5 ReplayProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateQueueConsumerDisposableToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdunicastprocessorcreatequeueconsumerdisposabletosinkrecipe): As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateQueueDisposableToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdunicastprocessorcreatequeuedisposabletosinkrecipe): As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateQueueToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdunicastprocessorcreatequeuetosinkrecipe): As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.ReactorProcessorCreateToSinkRecipes$UnicastProcessorCreateToSinkRecipe](../recipes/reactive/reactor/reactorprocessorcreatetosinkrecipesusdunicastprocessorcreatetosinkrecipe): As of 3.5 UnicastProcessor is deprecated and Sinks are preferred 
* [org.openrewrite.reactive.reactor.UpgradeReactor_3_5](../recipes/reactive/reactor/upgradereactor_3_5): Adopt to [breaking changes in Reactor 3.5](https://projectreactor.io/docs/core/3.4.26/api/deprecated-list.html). 
* [org.openrewrite.scala.migrate.UpgradeScala_2_12](../recipes/scala/migrate/upgradescala_2_12): Upgrade the Scala version for compatibility with newer Java versions. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesCreateTempFileToFileRecipe](../recipes/tech/picnic/errorprone/refasterrules/filerulesrecipesusdfilescreatetempfiletofilerecipe): Recipe created for the following Refaster template:<br />```java<br />static final class FilesCreateTempFileToFile {<br />    <br />    @BeforeTemplate<br />    @SuppressWarnings(value = "java:S5443")<br />    File before(String prefix, String suffix) throws IOException {<br />        return Refaster.anyOf(File.createTempFile(prefix, suffix), File.createTempFile(prefix, suffix, null));<br />    }<br />    <br />    @AfterTemplate<br />    @SuppressWarnings(value = "java:S5443")<br />    File after(String prefix, String suffix) throws IOException {<br />        return Files.createTempFile(prefix, suffix).toFile();<br />    }<br />}<br />```<br />. 

## Removed Recipes

* **org.openrewrite.java.migrate.jakarta.JavaxAnnotationSecurityPackageToJakarta**: Change type of classes in the `javax.annotation.security` package to jakarta. 
* **org.openrewrite.java.migrate.jakarta.JavaxAnnotationSqlPackageToJakarta**: Change type of classes in the `javax.annotation.sql` package to jakarta. 
* **org.openrewrite.java.migrate.wro4j.UpgradeWro4jMavenPluginVersion**: This recipe will upgrade Wro4j to a more recent version compatible with Java 11. 
* **org.openrewrite.java.testing.assertj.IsEqualToBoolean**: Adopt idiomatic AssertJ assertion for true booleans. 
* **org.openrewrite.java.testing.assertj.IsEqualToEmptyString**: Adopt idiomatic AssertJ assertion for empty Strings. 
* **org.openrewrite.micrometer.UpgradeMicrometer13**: Migrate applications to the latest Micrometer 1.13 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions as described in the [Micrometer 1.13 migration guide](https://github.com/micrometer-metrics/micrometer/wiki/1.13-Migration-Guide). 
