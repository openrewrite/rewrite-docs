---
description: What's changed in OpenRewrite version 8.45.0.
---

# 8.45.0 release (2025-02-08)

_Total recipe count: 3041_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the releases page.
:::

## New Artifacts
* rewrite-rewrite

## New Recipes

* io.moderne.knowledge.ComprehendCodeWithUnitTestExamples: First runs a scanning recipe to grab all unit tests, then supplements the unit tests examples for the AI-generate descriptions.
* io.moderne.knowledge.search.SearchDesignTechnique: Search for a class that uses the given design technique.
* io.moderne.recipe.hibernate.MigrateToHibernate66: This recipe will apply changes commonly needed when migrating to Hibernate 6.5.x.
* io.moderne.recipe.hibernate.search.FindJPQLDefinitions: Find Java Persistence Query Language definitions in the codebase.
* io.moderne.recipe.hibernate.update66.FixConflictingClassTypeAnnotations: Since Hibernate 6.6 a mapped class can have *either* `@MappedSuperclass` or `@Embeddable`, or `@Entity`. This recipe removes `@Entity` from classes annotated with `@MappedSuperclass` or `@Embeddable`.For the moment die combination of `@MappedSuperclass` or `@Embeddable` is advised to migrate to Single Table Inheritancebut still accepted and therefore stays.
* io.moderne.recipe.hibernate.update66.RemoveTableFromInheritedEntity: For Single Table Inherited Entities Hibernate ignores the `@Table` annotation on child entities. From Version 6.6 it is considered an error.
* io.moderne.recipe.spring.boot3.AddValidToConfigurationPropertiesFields: In Spring Boot 3.4, validation of `@ConfigurationProperties` classes annotated with `@Validated` now follows the Bean Validation specification, only cascading to nested properties if the corresponding field is annotated with `@Valid`. The recipe will add a `@Valid` annotation to each field which has a type that has a field which is annotated with a `jakarta.validation.constraints.*` annotation.
* io.moderne.recipe.spring.boot3.CommentDeprecations: Spring Boot 3.4 deprecates methods that are not commonly used or need manual interaction.
* io.moderne.recipe.spring.boot3.CommentOnMockAndSpyBeansInConfigSpring34: As stated in Spring Docs `@MockitoSpyBean` and `@MockitoBean` will only work in tests, explicitly not in `@Configuration` annotated classes.
* io.moderne.recipe.spring.boot3.ConditionalOnAvailableEndpointMigrationSpring34: Migrate `@ConditionalOnAvailableEndpoint(EndpointExposure.CLOUD_FOUNDRY)` to `@ConditionalOnAvailableEndpoint(EndpointExposure.WEB)` for Spring Boot 3.4.
* io.moderne.recipe.spring.boot3.MigrateEndpointAccessValueSpring34: Migrate manage endpoint access value from `false` to `none` and `true` to `read-only`.
* io.moderne.recipe.spring.boot3.MigrateEndpointAnnotationAccessValueSpring34: Since Spring Boot 3.4 the `@Endpoint` access configuration values are no longer `true|false` but `none|read-only|unrestricted`
* io.moderne.recipe.spring.boot3.RemoveReplaceNoneFromAutoConfigureTestDatabase: `Replace.NONE` is the default value for `@AutoConfigureTestDatabase` since Spring Boot 3.4.
* io.moderne.recipe.spring.boot3.SpringBoot3BestPractices: Applies best practices to Spring Boot 3.4+ applications.
* io.moderne.recipe.spring.boot3.SpringBootManagementEndpointProperties_3_4: Migrate the settings for Management Endpoint Security from `true`|`false` to `read-only`|`none`.
* io.moderne.recipe.spring.boot3.SpringBootProperties_3_4: Migrate properties found in `application.properties` and `application.yml`.
* io.moderne.recipe.spring.boot3.UpgradeGradle7Spring34: Spring Boot 3.4 requires Gradle 7.6.4.
* io.moderne.recipe.spring.boot3.UpgradeGradle8Spring34: Spring Boot 3.4 requires Gradle 8.4+.
* io.moderne.recipe.spring.boot3.UpgradeSpringBoot_3_4: Migrate applications to the latest Spring Boot 3.4 release. This recipe will modify an application's build files, make changes to deprecated/preferred APIs, and migrate configuration settings that have changes between versions. This recipe will also chain additional framework migrations (Spring Framework, Spring Data, etc) that are required as part of the migration to Spring Boot 3.4.
* io.moderne.recipe.spring.cloud2024.DependencyUpgrades: Upgrade dependencies to Spring Cloud 2024 from prior 2023.x version.
* io.moderne.recipe.spring.cloud2024.UpgradeSpringCloud_2024: Migrate applications to the latest Spring Cloud 2024 (Leyton) release.
* io.moderne.recipe.spring.framework.UpgradeSpringFramework_6_2: Migrate applications to the latest Spring Framework 6.2 release.
* io.quarkus.updates.core.quarkus318.RemoveFlywayCleanOnValidationError:
* io.quarkus.updates.core.quarkus37.SetupJavaUpgradeJavaVersion: Update the Java version used by `actions/setup-java` if it is below the expected version number.
* io.quarkus.updates.core.quarkus37.UpgradeJavaVersion: Upgrade build plugin configuration to use the specified Java version. This recipe changes `java.toolchain.languageVersion` in `build.gradle(.kts)` of gradle projects, or maven-compiler-plugin target version and related settings. Will not downgrade if the version is newer than the specified version.
* org.apache.camel.upgrade.CamelMigrationRecipe: Migrates Apache Camel application to 4.9.0
* org.apache.camel.upgrade.camel40.properties.rejectedPolicy: Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs, which could be part of the application.properties.
* org.apache.camel.upgrade.camel49.AwsSecretRecipe: The syntax for retrieving a single field of a secret has been changed..
* org.apache.camel.upgrade.camel49.AzureSecretRecipe: The syntax for retrieving a single field of a secret has been changed..
* org.apache.camel.upgrade.camel49.CamelMigrationRecipe: Migrates `camel 4.8` application to `camel 4.9`.
* org.apache.camel.upgrade.camel49.DebeziumChangeTypes: each camel-debezium module has its own subpackage corresponding to the database type. So for example, all the classes of the module camel-debezium-postgres have been moved to a dedicated package which is org.apache.camel.component.debezium.postgres instead of having everything under the root package org.apache.camel.component.debezium.
* org.apache.camel.upgrade.camel49.GcpSecretRecipe: The syntax for retrieving a single field of a secret has been changed..
* org.apache.camel.upgrade.camel49.HashicorpSecretRecipe: The syntax for retrieving a single field of a secret has been changed..
* org.apache.camel.upgrade.camel49.removedDependencies: Removed deprecated components (camel-groovy-dsl, camel-js-dsl, camel-jsh-dsl, camel-kotlin-api, camel-kotlin-dsl).
* org.apache.camel.upgrade.camel49.renamedAPIs: Renamed classes for API.
* org.apache.camel.upgrade.customRecipes.LiteralRegexpConverterRecipe: Replaces literal, groups from regexp can be used as ${0}, ${1}, ...
* org.openrewrite.codemods.UI5: Runs the UI5 Linter, a static code analysis tool for UI5 projects. It checks JavaScript, TypeScript, XML, JSON, and other files in your project and reports findings.
* org.openrewrite.codemods.migrate.nextjs.v14_0.MetadataToViewportExport: This codemod migrates certain viewport metadata to `viewport` export.
* org.openrewrite.codemods.migrate.nextjs.v6.UrlToWithrouter: Transforms the deprecated automatically injected url property on top-level pages to using `withRouter` and the `router` property it injects. Read more here.
* org.openrewrite.codemods.migrate.nextjs.v8.WithampToConfig: Transforms the `withAmp` HOC into Next.js 9 page configuration.
* org.openrewrite.java.migrate.ChangeDefaultKeyStore: In Java 11 the default keystore was updated from JKS to PKCS12. As a result, applications relying on KeyStore.getDefaultType() may encounter issues after migrating, unless their JKS keystore has been converted to PKCS12. This recipe returns default key store of `jks` when `KeyStore.getDefaultType()` method is called to use the pre Java 11 default keystore.
* org.openrewrite.java.testing.search.FindUnitTests: Produces a data table showing how methods are used in unit tests.
* org.openrewrite.json.format.AutoFormat: Format JSON code using a standard comprehensive set of JSON formatting recipes.
* org.openrewrite.json.format.WrappingAndBraces: Split members into separate lines in JSON.
* org.openrewrite.recipes.JavaRecipeBestPractices: Best practices for Java recipe development.
* org.openrewrite.recipes.RecipeNullabilityBestPractices: Use JSpecify nullable annotations; drop Nonnull annotations; use `NullMarked` on `package-info.java` instead.
* org.openrewrite.recipes.RecipeTestingBestPractices: Best practices for testing recipes.
* org.openrewrite.recipes.rewrite.OpenRewriteRecipeBestPractices: Best practices for OpenRewrite recipe development.
* tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringContainsRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatStringContains {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, CharSequence substring) {
        return assertThat(string.contains(substring)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, CharSequence substring) {
        return assertThat(string).contains(substring);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringDoesNotContainRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatStringDoesNotContain {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, CharSequence substring) {
        return assertThat(string.contains(substring)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, CharSequence substring) {
        return assertThat(string).doesNotContain(substring);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionRootCauseHasMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIOException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).rootCause().hasMessage(message);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionRootCauseHasMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).rootCause().hasMessage(message);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionRootCauseHasMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).rootCause().hasMessage(message);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionRootCauseHasMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).rootCause().hasMessage(message);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByRootCauseHasMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByRootCauseHasMessage {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).havingRootCause().withMessage(message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).rootCause().hasMessage(message);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.CharSequenceRulesRecipes: Refaster rules related to expressions dealing with `CharSequence`s Source.
* tech.picnic.errorprone.refasterrules.CharSequenceRulesRecipes$CharSequenceIsEmptyRecipe: Prefer `CharSequence#isEmpty()` over alternatives that consult the char sequence's length
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanArrayContainsExactly {
    
    @BeforeTemplate
    void before(boolean[] actual, boolean[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean[] actual, boolean[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(boolean[] actual, String message, boolean[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean[] actual, String message, boolean[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatBooleanArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatBooleanArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(boolean[] actual, Supplier<String> message, boolean[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(boolean[] actual, Supplier<String> message, boolean[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatByteArrayContainsExactly {
    
    @BeforeTemplate
    void before(byte[] actual, byte[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(byte[] actual, byte[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatByteArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(byte[] actual, String message, byte[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(byte[] actual, String message, byte[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatByteArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatByteArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(byte[] actual, Supplier<String> message, byte[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(byte[] actual, Supplier<String> message, byte[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatCharArrayContainsExactly {
    
    @BeforeTemplate
    void before(char[] actual, char[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(char[] actual, char[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatCharArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(char[] actual, String message, char[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(char[] actual, String message, char[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatCharArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatCharArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(char[] actual, Supplier<String> message, char[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(char[] actual, Supplier<String> message, char[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayContainsExactly {
    
    @BeforeTemplate
    void before(double[] actual, double[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, double[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayContainsExactlyWithOffsetRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(double[] actual, double[] expected, double delta) {
        assertArrayEquals(expected, actual, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, double[] expected, double delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, String message, double[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageContainsExactlyWithOffsetRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected, double delta) {
        assertArrayEquals(expected, actual, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, String message, double[] expected, double delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(double[] actual, Supplier<String> message, double[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, Supplier<String> message, double[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyWithOffsetRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatDoubleArrayWithFailMessageSupplierContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(double[] actual, Supplier<String> messageSupplier, double[] expected, double delta) {
        assertArrayEquals(expected, actual, delta, messageSupplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, Supplier<String> messageSupplier, double[] expected, double delta) {
        assertThat(actual).withFailMessage(messageSupplier).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayContainsExactly {
    
    @BeforeTemplate
    void before(float[] actual, float[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, float[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayContainsExactlyWithOffsetRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(float[] actual, float[] expected, float delta) {
        assertArrayEquals(expected, actual, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, float[] expected, float delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, String message, float[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageContainsExactlyWithOffsetRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected, float delta) {
        assertArrayEquals(expected, actual, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, String message, float[] expected, float delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(float[] actual, Supplier<String> message, float[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, Supplier<String> message, float[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatFloatArrayWithFailMessageSupplierContainsExactlyWithOffsetRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatFloatArrayWithFailMessageSupplierContainsExactlyWithOffset {
    
    @BeforeTemplate
    void before(float[] actual, Supplier<String> message, float[] expected, float delta) {
        assertArrayEquals(expected, actual, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, Supplier<String> message, float[] expected, float delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatIntArrayContainsExactly {
    
    @BeforeTemplate
    void before(int[] actual, int[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(int[] actual, int[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatIntArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(int[] actual, String message, int[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(int[] actual, String message, int[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIntArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatIntArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(int[] actual, Supplier<String> message, int[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(int[] actual, Supplier<String> message, int[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatLongArrayContainsExactly {
    
    @BeforeTemplate
    void before(long[] actual, long[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(long[] actual, long[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatLongArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(long[] actual, String message, long[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(long[] actual, String message, long[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatLongArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatLongArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(long[] actual, Supplier<String> message, long[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(long[] actual, Supplier<String> message, long[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatObjectArrayContainsExactly {
    
    @BeforeTemplate
    void before(Object[] actual, Object[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, Object[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatObjectArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(Object[] actual, String message, Object[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, String message, Object[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatObjectArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatObjectArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(Object[] actual, Supplier<String> message, Object[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object[] actual, Supplier<String> message, Object[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatShortArrayContainsExactly {
    
    @BeforeTemplate
    void before(short[] actual, short[] expected) {
        assertArrayEquals(expected, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(short[] actual, short[] expected) {
        assertThat(actual).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayWithFailMessageContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatShortArrayWithFailMessageContainsExactly {
    
    @BeforeTemplate
    void before(short[] actual, String message, short[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(short[] actual, String message, short[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatShortArrayWithFailMessageSupplierContainsExactlyRecipe: Recipe created for the following Refaster template:
```java
static final class AssertThatShortArrayWithFailMessageSupplierContainsExactly {
    
    @BeforeTemplate
    void before(short[] actual, Supplier<String> message, short[] expected) {
        assertArrayEquals(expected, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(short[] actual, Supplier<String> message, short[] expected) {
        assertThat(actual).withFailMessage(message).containsExactly(expected);
    }
}
```
.
* tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyDurationRecipe: Prefer `StepVerifier#verify(Duration)` over a dangling `StepVerifier#verifyThenAssertThat(Duration)`
* tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyLaterRecipe: Don't unnecessarily invoke `StepVerifier#verifyLater()` multiple times
* tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierVerifyRecipe: Prefer `StepVerifier#verify()` over a dangling `StepVerifier#verifyThenAssertThat()`
* tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualDoubleArraysWithDeltaRecipe: Recipe created for the following Refaster template:
```java
static final class AssertEqualDoubleArraysWithDelta {
    
    @BeforeTemplate
    void before(double[] actual, double[] expected, double delta) {
        assertEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, double[] expected, double delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualDoubleArraysWithDeltaWithMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertEqualDoubleArraysWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(double[] actual, String message, double[] expected, double delta) {
        assertEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(double[] actual, String message, double[] expected, double delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualFloatArraysWithDeltaRecipe: Recipe created for the following Refaster template:
```java
static final class AssertEqualFloatArraysWithDelta {
    
    @BeforeTemplate
    void before(float[] actual, float[] expected, float delta) {
        assertEquals(actual, expected, delta);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, float[] expected, float delta) {
        assertThat(actual).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualFloatArraysWithDeltaWithMessageRecipe: Recipe created for the following Refaster template:
```java
static final class AssertEqualFloatArraysWithDeltaWithMessage {
    
    @BeforeTemplate
    void before(float[] actual, String message, float[] expected, float delta) {
        assertEquals(actual, expected, delta, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(float[] actual, String message, float[] expected, float delta) {
        assertThat(actual).withFailMessage(message).containsExactly(expected, offset(delta));
    }
}
```
.
* tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantIdentityRecipe: Don't unnecessarily transform an `Instant` to an equivalent instance
* tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToMillisecondsRecipe: Note that `Instant#toEpochMilli()` throws an `ArithmeticException` for dates
  very far in the past or future, while the suggested alternative doesn't.
* tech.picnic.errorprone.refasterrules.TimeRulesRecipes$InstantTruncatedToSecondsRecipe: Prefer `Instant#truncatedTo(TemporalUnit)` over less obvious alternatives

## Removed Recipes

* **io.moderne.ai.SpellCheckCommentsInFrenchPomXml**: Use spellchecker to fix mis-encoded French comments in pom.xml files. Mis-encoded comments will contain either '?' or '�'.
* **org.openrewrite.codemods.migrate.nextjs.v14_0.UseViewportExport**: This codemod migrates certain viewport metadata to `viewport` export.
  See documentation for more information.
* **org.openrewrite.codemods.migrate.nextjs.v6.UrlToWithRouter**: Transforms the deprecated automatically injected url property on top level pages to using `withRouter` and the `router`  property it injects. Read more here: https://nextjs.org/docs/messages/url-deprecated
  See documentation
  for more information.
* **org.openrewrite.codemods.migrate.nextjs.v8.WithAmpToConfig**: Transforms the `withAmp` HOC into Next.js 9 page configuration.
  See documentation
  for more information.
* **org.openrewrite.java.camel.migrate.ChangePropertyValue**: Apache Camel API migration from version 3.20 or higher to 4.0. Removal of deprecated APIs, which could be part of the application.properties.
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringIsEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringIsEmpty {

  @BeforeTemplate
  void before(String string) {
    assertThat(string.isEmpty()).isTrue();
  }

  @AfterTemplate
  @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
  void after(String string) {
    assertThat(string).isEmpty();
  }
}
```
.
* **tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringIsNotEmptyRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatStringIsNotEmpty {

  @BeforeTemplate
  AbstractAssert<?, ?> before(String string) {
    return assertThat(string.isEmpty()).isFalse();
  }

  @AfterTemplate
  @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
  AbstractAssert<?, ?> after(String string) {
    return assertThat(string).isNotEmpty();
  }
}
```
.
* **tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByRecipe**: Recipe created for the following Refaster template:
```java
static final class AssertThatThrownBy {

  @BeforeTemplate
  AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType) {
    return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable);
  }

  @AfterTemplate
  @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
  AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType) {
    return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType);
  }
}
```
.
* **tech.picnic.errorprone.refasterrules.BugCheckerRulesRecipes$ConstantsFormatRecipe**: Recipe created for the following Refaster template:
```java
static final class ConstantsFormat {

  @BeforeTemplate
  String before(String value) {
    return String.format("\"%s\"", Convert.quote(value));
  }

  @AfterTemplate
  String after(String value) {
    return Constants.format(value);
  }
}
```
.

## Changed Recipes

* org.openrewrite.FindParseFailures was changed:
  * Old Options:
    * `maxSnippetLength: { type: Integer, required: false }`
    * `parserType: { type: String, required: false }`
    * `stackTrace: { type: String, required: false }`
  * New Options:
    * `createdAfter: { type: String, required: false }`
    * `maxSnippetLength: { type: Integer, required: false }`
    * `parserType: { type: String, required: false }`
    * `stackTrace: { type: String, required: false }`
* org.openrewrite.java.dependencies.DependencyList was changed:
  * Old Options:
    * `includeTransitive: { type: boolean, required: true }`
    * `scope: { type: Scope, required: true }`
  * New Options:
    * `includeTransitive: { type: boolean, required: true }`
    * `scope: { type: Scope, required: true }`
    * `validateResolvable: { type: boolean, required: true }`
* org.openrewrite.yaml.MergeYaml was changed:
  * Old Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`
  * New Options:
    * `acceptTheirs: { type: Boolean, required: false }`
    * `filePattern: { type: String, required: false }`
    * `insertBefore: { type: String, required: false }`
    * `key: { type: String, required: true }`
    * `objectIdentifyingProperty: { type: String, required: false }`
    * `yaml: { type: String, required: true }`