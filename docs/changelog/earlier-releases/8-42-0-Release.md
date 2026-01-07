# 8.42.0 release (2024-12-18)

_Total recipe count: 2922_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Recipes

* org.openrewrite.codemods.migrate.angular.v18: Upgrade to Angular v18
* org.openrewrite.codemods.migrate.angular.v19: Upgrade to Angular v19
* org.openrewrite.gitlab.AddStages: Add or Update the set of stages defined in `.gitlab-ci.yml`.
* org.openrewrite.gradle.AddJUnitPlatformLauncher: Add the JUnit Platform Launcher to the buildscript dependencies.
* org.openrewrite.gradle.RemoveRedundantDependencyVersions: Remove explicitly-specified dependency versions that are managed by a Gradle `platform`/`enforcedPlatform`.
* org.openrewrite.java.boot3.ReplaceMockBeanAndSpyBean: Replaces `@MockBean` and `@SpyBean` annotations with `@MockitoBean` and `@MockitoSpyBean`.
* org.openrewrite.java.logging.log4j.LoggerSetLevelToConfiguratorRecipe: Converts `org.apache.log4j.Logger.setLevel` to `org.apache.logging.log4j.core.config.Configurator.setLevel`.
* org.openrewrite.java.migrate.IllegalArgumentExceptionToAlreadyConnectedException: Replace `IllegalArgumentException` with `AlreadyConnectedException` for DatagramChannel.send() to ensure compatibility with Java 11+.
* org.openrewrite.java.migrate.joda.NoJodaTime: Before Java 8, Java lacked a robust date and time library, leading to the widespread use of Joda-Time to fill this gap. With the release of Java 8, the `java.time` package was introduced, incorporating most of Joda-Time's concepts. Features deemed too specialized or bulky for `java.time` were included in the ThreeTen-Extra library.  This recipe migrates Joda-Time types to `java.time` and `threeten-extra` types.
* org.openrewrite.java.migrate.lang.ExplicitRecordImport: Add explicit import for `Record` classes when upgrading past Java 14+, to avoid conflicts with `java.lang.Record`.
* org.openrewrite.java.migrate.lombok.UseLombokGetter: Convert trivial getter methods to `@Getter` annotations on their respective fields.
* org.openrewrite.java.migrate.lombok.UseLombokSetter: Convert trivial setter methods to `@Setter` annotations on their respective fields.
* org.openrewrite.java.testing.easymock.EasyMockToMockito: This recipe will apply changes commonly needed when migrating from EasyMock to Mockito.
* org.openrewrite.java.testing.easymock.EasyMockVerifyToMockitoVerify: Replace `EasyMock.verify(dependency)` with individual `Mockito.verify(dependency).method()` calls based on expected methods.
* org.openrewrite.java.testing.easymock.RemoveExtendsEasyMockSupport: Modify test classes by removing extends EasyMockSupport and replacing EasyMock methods with Mockito equivalents.
* org.openrewrite.java.testing.hamcrest.ConsistentHamcrestMatcherImports: Use consistent imports for Hamcrest matchers, and remove wrapping `is(Matcher)` calls ahead of further changes.
* org.openrewrite.java.testing.hamcrest.HamcrestInstanceOfToJUnit5: Migrate from Hamcrest `instanceOf` and `isA` matcher to JUnit5 `assertInstanceOf` assertion.
* org.openrewrite.java.testing.hamcrest.HamcrestMatcherToJUnit5: Migrate from Hamcrest `Matcher` to JUnit 5 assertions.
* org.openrewrite.java.testing.hamcrest.MigrateHamcrestToJUnit5: Migrate Hamcrest `assertThat(..)` to JUnit Jupiter `Assertions`.
* org.openrewrite.java.testing.mockito.NoInitializationForInjectMock: Removes unnecessary initialization for fields annotated with `@InjectMocks` in Mockito tests.
* org.openrewrite.java.testing.mockito.RemoveTimesZeroAndOne: Remove `Mockito.times(0)` and `Mockito.times(0)` from `Mockito.verify()` calls.
* org.openrewrite.java.testing.testng.TestNgAssertEqualsToAssertThat: Convert TestNG-style `assertEquals()` to AssertJ's `assertThat().isEqualTo()`.
* org.openrewrite.java.testing.testng.TestNgAssertNotEqualsToAssertThat: Convert TestNG-style `assertNotEquals()` to AssertJ's `assertThat().isNotEqualTo()`.
* org.openrewrite.java.testing.testng.TestNgToAssertj: Convert assertions from `org.testng.Assert` to `org.assertj.core.api.Assertions`.
* org.openrewrite.kubernetes.search.FindHarcodedIPAddresses: Find hardcoded IP address anywhere in text-based files.
* org.openrewrite.openapi.swagger.MigrateApiImplicitParamDataTypeClass: Migrate `@ApiImplicitParam(dataTypeClass=Foo.class)` to `@Parameter(schema=@Schema(implementation=Foo.class))`.
* org.openrewrite.reactive.reactor.ReactorBestPractices: This recipe applies best practices for using Reactor.
* org.openrewrite.staticanalysis.URLEqualsHashCodeRecipes: Uses of `equals()` and `hashCode()` cause `java.net.URL` to make blocking internet connections. Instead, use `java.net.URI`.
* org.openrewrite.staticanalysis.URLEqualsHashCodeRecipes$URLEqualsRecipe: Uses of `equals()` cause `java.net.URL` to make blocking internet connections. Instead, use `java.net.URI`.
* org.openrewrite.staticanalysis.URLEqualsHashCodeRecipes$URLHashCodeRecipe: Uses of `hashCode()` cause `java.net.URL` to make blocking internet connections. Instead, use `java.net.URI`.

## Changed Recipes

* org.openrewrite.java.migrate.lang.StringFormatted was changed:
  * Old Options:
    * `None`
  * New Options:
    * `addParentheses: { type: Boolean, required: false }`
* org.openrewrite.xml.ChangeTagValue was changed:
  * Old Options:
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
  * New Options:
    * `elementName: { type: String, required: true }`
    * `newValue: { type: String, required: true }`
    * `oldValue: { type: String, required: false }`
    * `regex: { type: Boolean, required: false }`
* org.openrewrite.yaml.CommentOutProperty was changed:
  * Old Options:
    * `commentText: { type: String, required: true }`
    * `propertyKey: { type: String, required: true }`
  * New Options:
    * `commentOutProperty: { type: Boolean, required: false }`
    * `commentText: { type: String, required: true }`
    * `propertyKey: { type: String, required: true }`