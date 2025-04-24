---
description: What's changed in OpenRewrite version 8.51.0.
---

# 8.51.0 release (2025-04-25)

_Total recipe count: 3707_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.moderne.java.spring.boot3.UpgradeSpringCloudAWSToSpringBoot_3_4](https://docs.openrewrite.org/recipes/java/spring/boot3/upgradespringcloudawstospringboot_3_4): Upgrade the Spring Cloud AWS dependency to a version compatible with Spring Boot 3.4. 
* [org.openrewrite.apache.commons.lang3.UseStandardCharsets](https://docs.openrewrite.org/recipes/apache/commons/lang3/usestandardcharsets): Prefer the Java standard library's `java.nio.charset.StandardCharsets` over `org.apache.commons.lang3.CharEncoding`. 
* [org.openrewrite.gradle.gradle8.JacocoReportDeprecations](https://docs.openrewrite.org/recipes/gradle/gradle8/jacocoreportdeprecations): Set the `enabled` to `required` and the `destination` to `outputLocation` for Reports deprecations that were removed in gradle 8. See [the gradle docs on this topic](https://docs.gradle.org/current/userguide/upgrading_version_7.html#report_and_testreport_api_cleanup). 
* [org.openrewrite.java.ChangePackageInStringLiteral](https://docs.openrewrite.org/recipes/java/changepackageinstringliteral): A recipe that will rename a package name in String literals. 
* [org.openrewrite.java.ChangeTypeInStringLiteral](https://docs.openrewrite.org/recipes/java/changetypeinstringliteral): Change a given type to another when used in a String literal. 
* [org.openrewrite.java.dependencies.search.FindMinimumJUnitVersion](https://docs.openrewrite.org/recipes/java/dependencies/search/findminimumjunitversion): A recipe to find the minimum version of JUnit dependencies. This recipe is designed to return the minimum version of JUnit in a project. It will search for JUnit 4 and JUnit 5 dependencies in the project. If both versions are found, it will return the minimum version of JUnit 4.
If a minimumVersion is provided, the recipe will search to see if the minimum version of JUnit used by the project is no lower than the minimumVersion.
For example: if the minimumVersion is 4, and the project has JUnit 4.12 and JUnit 5.7, the recipe will return JUnit 4.12. If the project has only JUnit 5.7, the recipe will return JUnit 5.7.
Another example: if the minimumVersion is 5, and the project has JUnit 4.12 and JUnit 5.7, the recipe will not return any results. 
* [org.openrewrite.java.migrate.BounceCastleFromJdk15OntoJdk18On](https://docs.openrewrite.org/recipes/java/migrate/bouncecastlefromjdk15ontojdk18on): This recipe will upgrade BouncyCastle dependencies from -jdk15on to -jdk18on. 
* [org.openrewrite.java.migrate.jakarta.Faces4xMigrationToFaces41x](https://docs.openrewrite.org/recipes/java/migrate/jakarta/faces4xmigrationtofaces41x): Jakarta EE 11 uses Faces 4.1 a minor upgrade. 
* [org.openrewrite.java.migrate.jakarta.JakartaEE11](https://docs.openrewrite.org/recipes/java/migrate/jakarta/jakartaee11): These recipes help with the Migration to Jakarta EE 11, flagging and updating deprecated methods. 
* [org.openrewrite.java.migrate.jakarta.OmniFacesNamespaceMigration](https://docs.openrewrite.org/recipes/java/migrate/jakarta/omnifacesnamespacemigration): Find and replace legacy OmniFaces namespaces. 
* [org.openrewrite.java.migrate.jakarta.UpdateJakartaFacesApi41](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejakartafacesapi41): Update Jakarta EE Java Faces Dependencies to 4.1.x. 
* [org.openrewrite.java.migrate.jakarta.UpdateJakartaPlatform11](https://docs.openrewrite.org/recipes/java/migrate/jakarta/updatejakartaplatform11): Update Jakarta EE Platform Dependencies to 11.0.x. 
* [org.openrewrite.java.migrate.jakarta.UpgradeFaces41OpenSourceLibraries](https://docs.openrewrite.org/recipes/java/migrate/jakarta/upgradefaces41opensourcelibraries): Upgrade OmniFaces and MyFaces/Mojarra libraries to Jakarta EE11 versions. 
* [org.openrewrite.java.migrate.lombok.AdoptLombokGetterMethodNames](https://docs.openrewrite.org/recipes/java/migrate/lombok/adoptlombokgettermethodnames): Rename methods that are effectively getter to the name Lombok would give them.

Limitations:
 - If two methods in a class are effectively the same getter then one's name will be corrected and the others name will be left as it is.
 - If the correct name for a method is already taken by another method then the name will not be corrected.
 - Method name swaps or circular renaming within a class cannot be performed because the names block each other.
E.g. `int getFoo() { return ba; } int getBa() { return foo; }` stays as it is. 
* [org.openrewrite.java.recipes.ExamplesExtractor](https://docs.openrewrite.org/recipes/java/recipes/examplesextractor): Extract the before/after sources from tests annotated with `@DocumentExample`, and generate a YAML file with those examples to be shown in the documentation to show usage. 
* [org.openrewrite.java.recipes.JavaRecipeBestPractices](https://docs.openrewrite.org/recipes/java/recipes/javarecipebestpractices): Best practices for Java recipe development. 
* [org.openrewrite.java.recipes.RecipeNullabilityBestPractices](https://docs.openrewrite.org/recipes/java/recipes/recipenullabilitybestpractices): Use JSpecify nullable annotations; drop Nonnull annotations; use `NullMarked` on `package-info.java` instead. 
* [org.openrewrite.java.recipes.RecipeTestingBestPractices](https://docs.openrewrite.org/recipes/java/recipes/recipetestingbestpractices): Best practices for testing recipes. 
* [org.openrewrite.java.recipes.SourceSpecTextBlockNewLine](https://docs.openrewrite.org/recipes/java/recipes/sourcespectextblocknewline): Text blocks that assert before and after source code should have a new line after it is closed. 
* [org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbigintegerrulesrecipes): Adopt AssertJ BigInteger Assertions. Favor semantically explicit methods (e.g. `myBigInteger.isZero()` over `myBigInteger.isEqualTo(0)`). 
* [org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbigintegerrulesrecipesusdabstractbigintegerassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbigintegerrulesrecipesusdabstractbigintegerassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbigintegerrulesrecipesusdabstractbigintegerassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbigintegerrulesrecipesusdabstractbigintegerassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJBigIntegerRulesRecipes$AbstractBigIntegerAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbigintegerrulesrecipesusdabstractbigintegerassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbyterulesrecipes): Adopt AssertJ Byte Assertions. Favor semantically explicit methods (e.g. `myByte.isZero()` over `myByte.isEqualTo(0)`). 
* [org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes$AbstractByteAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbyterulesrecipesusdabstractbyteassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes$AbstractByteAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbyterulesrecipesusdabstractbyteassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes$AbstractByteAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbyterulesrecipesusdabstractbyteassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes$AbstractByteAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbyterulesrecipesusdabstractbyteassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJByteRulesRecipes$AbstractByteAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjbyterulesrecipesusdabstractbyteassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipes): Adopt AssertJ Double Assertions. Favor semantically explicit methods (e.g. `myDouble.isZero()` over `myDouble.isEqualTo(0.0)`). 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsCloseToWithOffsetRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipesusdabstractdoubleassertisclosetowithoffsetrecipe): Replace `isEqualTo` with `isCloseTo` when `offset` or `percentage` is provided. 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipesusdabstractdoubleassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipesusdabstractdoubleassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipesusdabstractdoubleassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipesusdabstractdoubleassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJDoubleRulesRecipes$AbstractDoubleAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjdoublerulesrecipesusdabstractdoubleassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipes): Adopt AssertJ Float Assertions. Favor semantically explicit methods (e.g. `myFloat.isZero()` over `myFloat.isEqualTo(0.0f)`). 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes$AbstractFloatAssertIsCloseToWithOffsetRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipesusdabstractfloatassertisclosetowithoffsetrecipe): Replace `isEqualTo` with `isCloseTo` when `offset` or `percentage` is provided. 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes$AbstractFloatAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipesusdabstractfloatassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes$AbstractFloatAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipesusdabstractfloatassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes$AbstractFloatAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipesusdabstractfloatassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes$AbstractFloatAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipesusdabstractfloatassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJFloatRulesRecipes$AbstractFloatAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjfloatrulesrecipesusdabstractfloatassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjintegerrulesrecipes): Adopt AssertJ Integer Assertions. Favor semantically explicit methods (e.g. `myInteger.isZero()` over `myInteger.isEqualTo(0)`). 
* [org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjintegerrulesrecipesusdabstractintegerassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjintegerrulesrecipesusdabstractintegerassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjintegerrulesrecipesusdabstractintegerassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjintegerrulesrecipesusdabstractintegerassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJIntegerRulesRecipes$AbstractIntegerAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjintegerrulesrecipesusdabstractintegerassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjlongrulesrecipes): Adopt AssertJ Long Assertions. Favor semantically explicit methods (e.g. `myLong.isZero()` over `myLong.isEqualTo(0)`). 
* [org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes$AbstractLongAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjlongrulesrecipesusdabstractlongassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes$AbstractLongAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjlongrulesrecipesusdabstractlongassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes$AbstractLongAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjlongrulesrecipesusdabstractlongassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes$AbstractLongAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjlongrulesrecipesusdabstractlongassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJLongRulesRecipes$AbstractLongAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjlongrulesrecipesusdabstractlongassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjshortrulesrecipes): Adopt AssertJ Short Assertions. Favor semantically explicit methods (e.g. `myShort.isZero()` over `myShort.isEqualTo(0)`). 
* [org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes$AbstractShortAssertIsEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjshortrulesrecipesusdabstractshortassertisequaltorecipe): Replace `isCloseTo` with `isEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes$AbstractShortAssertIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjshortrulesrecipesusdabstractshortassertisnotequaltorecipe): Replace `isNotCloseTo` with `isNotEqualTo` when `offset` or `percentage` is zero. 
* [org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes$AbstractShortAssertIsNotZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjshortrulesrecipesusdabstractshortassertisnotzerorecipe): Replace `isNotEqualTo(0)` with `isNotZero()`. 
* [org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes$AbstractShortAssertIsOneRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjshortrulesrecipesusdabstractshortassertisonerecipe): Replace `isEqualTo(1)` with `isOne()`. 
* [org.openrewrite.java.testing.assertj.AssertJShortRulesRecipes$AbstractShortAssertIsZeroRecipe](https://docs.openrewrite.org/recipes/java/testing/assertj/assertjshortrulesrecipesusdabstractshortassertiszerorecipe): Replace `isEqualTo(0)` with `isZero()`. 
* [org.openrewrite.java.testing.junit5.EnvironmentVariables](https://docs.openrewrite.org/recipes/java/testing/junit5/environmentvariables): Replaces usage of the JUnit 4 `@Rule EnvironmentVariables` with the JUnit 5-compatible `SystemStubsExtension` and `@SystemStub EnvironmentVariables` from the System Stubs library. 
* [org.openrewrite.java.testing.mockito.MockitoJUnitRunnerToExtension](https://docs.openrewrite.org/recipes/java/testing/mockito/mockitojunitrunnertoextension): Replace JUnit 4 MockitoJUnitRunner annotations with JUnit 5 `@ExtendWith(MockitoExtension.class)` using the appropriate strictness levels (LENIENT, WARN, STRICT_STUBS). 
* [org.openrewrite.java.testing.mockito.RemoveInitMocksIfRunnersSpecified](https://docs.openrewrite.org/recipes/java/testing/mockito/removeinitmocksifrunnersspecified): Remove `MockitoAnnotations.initMocks(this)` if specified class-level JUnit runners `@RunWith(MockitoJUnitRunner.class)` or `@ExtendWith(MockitoExtension.class)`. 
* [org.openrewrite.java.testing.mockito.ReplaceInitMockToOpenMock](https://docs.openrewrite.org/recipes/java/testing/mockito/replaceinitmocktoopenmock): Replace `MockitoAnnotations.initMocks(this)` to `MockitoAnnotations.openMocks(this)` and generate `AutoCloseable` mocks. 
* [org.openrewrite.maven.plugin.DependencyPluginGoalResolveSources](https://docs.openrewrite.org/recipes/maven/plugin/dependencyplugingoalresolvesources): Migrate from `sources` to `resolve-sources` for the `maven-dependency-plugin`. 
* [software.amazon.awssdk.v2migration.S3AddImportsAndComments](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3addimportsandcomments): Add imports and comments to unsupported S3 transforms. 
* [software.amazon.awssdk.v2migration.S3TypesToV2](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/s3typestov2): Change S3 types to v2. 
* [software.amazon.awssdk.v2migration.openrewrite.ChangeMethodInvocationReturnType](https://docs.openrewrite.org/recipes/software/amazon/awssdk/v2migration/openrewrite/changemethodinvocationreturntype): Changes the return type of a method invocation. 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJComparableRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJComparableRules). 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes$AssertThatIsEqualByComparingToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipesusdassertthatisequalbycomparingtorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsEqualByComparingTo<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T actual, T expected) {
        return assertThat(actual.compareTo(expected)).isEqualTo(0);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractComparableAssert<?, ?> after(T actual, T expected) {
        return assertThat(actual).isEqualByComparingTo(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes$AssertThatIsGreaterThanOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipesusdassertthatisgreaterthanorequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsGreaterThanOrEqualTo<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T actual, T expected) {
        return assertThat(actual.compareTo(expected)).isNotNegative();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractComparableAssert<?, ?> after(T actual, T expected) {
        return assertThat(actual).isGreaterThanOrEqualTo(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes$AssertThatIsGreaterThanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipesusdassertthatisgreaterthanrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsGreaterThan<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T actual, T expected) {
        return assertThat(actual.compareTo(expected)).isPositive();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractComparableAssert<?, ?> after(T actual, T expected) {
        return assertThat(actual).isGreaterThan(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes$AssertThatIsLessThanOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipesusdassertthatislessthanorequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsLessThanOrEqualTo<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T actual, T expected) {
        return assertThat(actual.compareTo(expected)).isNotPositive();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractComparableAssert<?, ?> after(T actual, T expected) {
        return assertThat(actual).isLessThanOrEqualTo(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes$AssertThatIsLessThanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipesusdassertthatislessthanrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsLessThan<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T actual, T expected) {
        return assertThat(actual.compareTo(expected)).isNegative();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractComparableAssert<?, ?> after(T actual, T expected) {
        return assertThat(actual).isLessThan(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJComparableRulesRecipes$AssertThatIsNotEqualByComparingToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjcomparablerulesrecipesusdassertthatisnotequalbycomparingtorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsNotEqualByComparingTo<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T actual, T expected) {
        return assertThat(actual.compareTo(expected)).isNotEqualTo(0);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractComparableAssert<?, ?> after(T actual, T expected) {
        return assertThat(actual).isNotEqualByComparingTo(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJEnumerableRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJEnumerableRules). 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSameSizeAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassamesizeasrecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSameSizeAs<S, E> {
    
    @BeforeTemplate
    EnumerableAssert<?, S> before(EnumerableAssert<?, S> enumAssert, Iterable<E> iterable) {
        return enumAssert.hasSize(Iterables.size(iterable));
    }
    
    @BeforeTemplate
    EnumerableAssert<?, S> before(EnumerableAssert<?, S> enumAssert, Collection<E> iterable) {
        return enumAssert.hasSize(iterable.size());
    }
    
    @BeforeTemplate
    EnumerableAssert<?, S> before(EnumerableAssert<?, S> enumAssert, E[] iterable) {
        return enumAssert.hasSize(iterable.length);
    }
    
    @BeforeTemplate
    EnumerableAssert<?, S> before(EnumerableAssert<?, S> enumAssert, CharSequence iterable) {
        return enumAssert.hasSize(iterable.length());
    }
    
    @AfterTemplate
    EnumerableAssert<?, S> after(EnumerableAssert<?, S> enumAssert, Iterable<E> iterable) {
        return enumAssert.hasSameSizeAs(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSizeBetweenRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassizebetweenrecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSizeBetween<E> {
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert, int lower, int upper) {
        return enumAssert.size().isBetween(lower, upper).returnToIterable();
    }
    
    @BeforeTemplate
    AbstractIterableSizeAssert<?, ?, E, ?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert, int lower, int upper) {
        return enumAssert.size().isBetween(lower, upper);
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert, int lower, int upper) {
        return enumAssert.hasSizeBetween(lower, upper);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSizeGreaterThanOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassizegreaterthanorequaltorecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSizeGreaterThanOrEqualTo<E> {
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isGreaterThanOrEqualTo(size).returnToIterable();
    }
    
    @BeforeTemplate
    AbstractIterableSizeAssert<?, ?, E, ?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isGreaterThanOrEqualTo(size);
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert, int size) {
        return enumAssert.hasSizeGreaterThanOrEqualTo(size);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSizeGreaterThanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassizegreaterthanrecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSizeGreaterThan<E> {
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isGreaterThan(size).returnToIterable();
    }
    
    @BeforeTemplate
    AbstractIterableSizeAssert<?, ?, E, ?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isGreaterThan(size);
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert, int size) {
        return enumAssert.hasSizeGreaterThan(size);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSizeLessThanOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassizelessthanorequaltorecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSizeLessThanOrEqualTo<E> {
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isLessThanOrEqualTo(size).returnToIterable();
    }
    
    @BeforeTemplate
    AbstractIterableSizeAssert<?, ?, E, ?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isLessThanOrEqualTo(size);
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert, int size) {
        return enumAssert.hasSizeLessThanOrEqualTo(size);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSizeLessThanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassizelessthanrecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSizeLessThan<E> {
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isLessThan(size).returnToIterable();
    }
    
    @BeforeTemplate
    AbstractIterableSizeAssert<?, ?, E, ?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isLessThan(size);
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert, int size) {
        return enumAssert.hasSizeLessThan(size);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertHasSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableasserthassizerecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertHasSize<E> {
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isEqualTo(size).returnToIterable();
    }
    
    @BeforeTemplate
    AbstractIterableSizeAssert<?, ?, E, ?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert, int size) {
        return enumAssert.size().isEqualTo(size);
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert, int size) {
        return enumAssert.hasSize(size);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableassertisemptyrecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertIsEmpty<E> {
    
    @BeforeTemplate
    void before(EnumerableAssert<?, E> enumAssert) {
        Refaster.anyOf(enumAssert.hasSize(0), enumAssert.hasSizeLessThanOrEqualTo(0), enumAssert.hasSizeLessThan(1));
    }
    
    @BeforeTemplate
    void before(AbstractIterableAssert<?, ?, E, ?> enumAssert) {
        enumAssert.size().isNotPositive();
    }
    
    @AfterTemplate
    void after(EnumerableAssert<?, E> enumAssert) {
        enumAssert.isEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjenumerablerulesrecipesusdenumerableassertisnotemptyrecipe): Recipe created for the following Refaster template:
```java
static final class EnumerableAssertIsNotEmpty<E> {
    
    @BeforeTemplate
    EnumerableAssert<?, E> before(EnumerableAssert<?, E> enumAssert) {
        return Refaster.anyOf(enumAssert.hasSizeGreaterThan(0), enumAssert.hasSizeGreaterThanOrEqualTo(1));
    }
    
    @BeforeTemplate
    AbstractIterableAssert<?, ?, E, ?> before(AbstractIterableAssert<?, ?, E, ?> enumAssert) {
        return Refaster.anyOf(enumAssert.size().isNotEqualTo(0).returnToIterable(), enumAssert.size().isPositive().returnToIterable());
    }
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before2(AbstractIterableAssert<?, ?, E, ?> enumAssert) {
        return Refaster.anyOf(enumAssert.size().isNotEqualTo(0), enumAssert.size().isPositive());
    }
    
    @AfterTemplate
    EnumerableAssert<?, E> after(EnumerableAssert<?, E> enumAssert) {
        return enumAssert.isNotEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJIterableRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJIterableRules). 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableHasOneElementEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipesusdassertthatiterablehasoneelementequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIterableHasOneElementEqualTo<S, E extends S> {
    
    @BeforeTemplate
    ObjectAssert<S> before(Iterable<S> iterable, E element) {
        return assertThat(Iterables.getOnlyElement(iterable)).isEqualTo(element);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    IterableAssert<S> after(Iterable<S> iterable, E element) {
        return assertThat(iterable).containsExactly(element);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipesusdassertthatiterableisemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIterableIsEmpty<E> {
    
    @BeforeTemplate
    void before(Iterable<E> iterable) {
        assertThat(iterable.iterator()).isExhausted();
    }
    
    @BeforeTemplate
    void before(Collection<E> iterable) {
        assertThat(iterable.isEmpty()).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Collection<E> iterable) {
        assertThat(iterable).isEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipesusdassertthatiterableisnotemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIterableIsNotEmpty<E> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Iterable<E> iterable) {
        return assertThat(iterable.iterator()).hasNext();
    }
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Collection<E> iterable) {
        return assertThat(iterable.isEmpty()).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    IterableAssert<E> after(Iterable<E> iterable) {
        return assertThat(iterable).isNotEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatIterableSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipesusdassertthatiterablesizerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIterableSize<E> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(Iterable<E> iterable) {
        return assertThat(Iterables.size(iterable));
    }
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(Collection<E> iterable) {
        return assertThat(iterable.size());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractIntegerAssert<?> after(Iterable<E> iterable) {
        return assertThat(iterable).size();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJIteratorRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiteratorrulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJIteratorRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJIteratorRules). 
* [tech.picnic.errorprone.refasterrules.AssertJIteratorRulesRecipes$AssertThatHasNextRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiteratorrulesrecipesusdassertthathasnextrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasNext<T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Iterator<T> iterator) {
        return assertThat(iterator.hasNext()).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    IteratorAssert<T> after(Iterator<T> iterator) {
        return assertThat(iterator).hasNext();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJIteratorRulesRecipes$AssertThatIsExhaustedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiteratorrulesrecipesusdassertthatisexhaustedrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsExhausted<T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Iterator<T> iterator) {
        return assertThat(iterator.hasNext()).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    IteratorAssert<T> after(Iterator<T> iterator) {
        return assertThat(iterator).isExhausted();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJMapRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJMapRules). 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AbstractMapAssertContainsExactlyEntriesOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdabstractmapassertcontainsexactlyentriesofrecipe): Recipe created for the following Refaster template:
```java
static final class AbstractMapAssertContainsExactlyEntriesOf<K, V> {
    
    @BeforeTemplate
    AbstractMapAssert<?, ?, K, V> before(AbstractMapAssert<?, ?, K, V> mapAssert, K key, V value) {
        return mapAssert.containsExactlyInAnyOrderEntriesOf(ImmutableMap.of(key, value));
    }
    
    @AfterTemplate
    AbstractMapAssert<?, ?, K, V> after(AbstractMapAssert<?, ?, K, V> mapAssert, K key, V value) {
        return mapAssert.containsExactlyEntriesOf(ImmutableMap.of(key, value));
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AbstractMapAssertContainsExactlyInAnyOrderEntriesOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdabstractmapassertcontainsexactlyinanyorderentriesofrecipe): Recipe created for the following Refaster template:
```java
static final class AbstractMapAssertContainsExactlyInAnyOrderEntriesOf<K, V> {
    
    @BeforeTemplate
    AbstractMapAssert<?, ?, K, V> before(AbstractMapAssert<?, ?, K, V> mapAssert, Map<? extends K, ? extends V> map) {
        return mapAssert.isEqualTo(map);
    }
    
    @AfterTemplate
    AbstractMapAssert<?, ?, K, V> after(AbstractMapAssert<?, ?, K, V> mapAssert, Map<? extends K, ? extends V> map) {
        return mapAssert.containsExactlyInAnyOrderEntriesOf(map);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AbstractMapAssertHasSameSizeAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdabstractmapasserthassamesizeasrecipe): Recipe created for the following Refaster template:
```java
static final class AbstractMapAssertHasSameSizeAs<K, V> {
    
    @BeforeTemplate
    AbstractMapAssert<?, ?, K, V> before(AbstractMapAssert<?, ?, K, V> mapAssert, Map<?, ?> map) {
        return mapAssert.hasSize(map.size());
    }
    
    @AfterTemplate
    AbstractMapAssert<?, ?, K, V> after(AbstractMapAssert<?, ?, K, V> mapAssert, Map<?, ?> map) {
        return mapAssert.hasSameSizeAs(map);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsKeyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdassertthatmapcontainskeyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsKey<K, V> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Map<K, V> map, K key) {
        return assertThat(map.containsKey(key)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key) {
        return assertThat(map).containsKey(key);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsOnlyKeysRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdassertthatmapcontainsonlykeysrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsOnlyKeys<K, V> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends K>, K, ?> before(Map<K, V> map, Iterable<? extends K> keys) {
        return assertThat(map.keySet()).hasSameElementsAs(keys);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, Iterable<? extends K> keys) {
        return assertThat(map).containsOnlyKeys(keys);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdassertthatmapcontainsvaluerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsValue<K, V> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Map<K, V> map, V value) {
        return assertThat(map.containsValue(value)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, V value) {
        return assertThat(map).containsValue(value);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapDoesNotContainKeyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdassertthatmapdoesnotcontainkeyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapDoesNotContainKey<K, V> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Map<K, V> map, K key) {
        return assertThat(map.containsKey(key)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key) {
        return assertThat(map).doesNotContainKey(key);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapDoesNotContainValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdassertthatmapdoesnotcontainvaluerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapDoesNotContainValue<K, V> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Map<K, V> map, V value) {
        return assertThat(map.containsValue(value)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, V value) {
        return assertThat(map).doesNotContainValue(value);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipesusdassertthatmapisemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapIsEmpty<K, V> {
    
    @BeforeTemplate
    void before(Map<K, V> map) {
        Refaster.anyOf(assertThat(map).hasSize(0), assertThat(map.isEmpty()).isTrue(), assertThat(map.size()).isEqualTo(0L), assertThat(map.size()).isNotPositive());
    }
    
    @BeforeTemplate
    void before2(Map<K, V> map) {
        assertThat(Refaster.anyOf(map.keySet(), map.values(), map.entrySet())).isEmpty();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Map<K, V> map) {
        assertThat(map).isEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJObjectRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJObjectRules). 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatHasToStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipesusdassertthathastostringrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasToString<T> {
    
    @BeforeTemplate
    AbstractStringAssert<?> before(T object, String str) {
        return assertThat(object.toString()).isEqualTo(str);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object, String str) {
        return assertThat(object).hasToString(str);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsIsEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipesusdassertthatisisequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsIsEqualTo<S, T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(S object1, T object2) {
        return assertThat(object1.equals(object2)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<S> after(S object1, T object2) {
        return assertThat(object1).isEqualTo(object2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsIsNotEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipesusdassertthatisisnotequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsIsNotEqualTo<S, T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(S object1, T object2) {
        return assertThat(object1.equals(object2)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<S> after(S object1, T object2) {
        return assertThat(object1).isNotEqualTo(object2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipes): Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssertJOptionalRules`.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJOptionalRules). 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AbstractOptionalAssertContainsSameRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdabstractoptionalassertcontainssamerecipe): Recipe created for the following Refaster template:
```java
static final class AbstractOptionalAssertContainsSame<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(AbstractOptionalAssert<?, T> optionalAssert, T value) {
        return Refaster.anyOf(optionalAssert.get().isSameAs(value), optionalAssert.isPresent().isSameAs(value));
    }
    
    @AfterTemplate
    AbstractOptionalAssert<?, T> after(AbstractOptionalAssert<?, T> optionalAssert, T value) {
        return optionalAssert.containsSame(value);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AbstractOptionalAssertHasValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdabstractoptionalasserthasvaluerecipe): Recipe created for the following Refaster template:
```java
static final class AbstractOptionalAssertHasValue<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(AbstractOptionalAssert<?, T> optionalAssert, T value) {
        return Refaster.anyOf(optionalAssert.get().isEqualTo(value), optionalAssert.isEqualTo(Optional.of(value)), optionalAssert.contains(value), optionalAssert.isPresent().hasValue(value));
    }
    
    @AfterTemplate
    AbstractOptionalAssert<?, T> after(AbstractOptionalAssert<?, T> optionalAssert, T value) {
        return optionalAssert.hasValue(value);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AbstractOptionalAssertIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdabstractoptionalassertisemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AbstractOptionalAssertIsEmpty<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(AbstractOptionalAssert<?, T> optionalAssert) {
        return Refaster.anyOf(optionalAssert.isNotPresent(), optionalAssert.isEqualTo(Optional.empty()));
    }
    
    @AfterTemplate
    AbstractOptionalAssert<?, T> after(AbstractOptionalAssert<?, T> optionalAssert) {
        return optionalAssert.isEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AbstractOptionalAssertIsPresentRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdabstractoptionalassertispresentrecipe): Recipe created for the following Refaster template:
```java
static final class AbstractOptionalAssertIsPresent<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(AbstractOptionalAssert<?, T> optionalAssert) {
        return Refaster.anyOf(optionalAssert.isNotEmpty(), optionalAssert.isNotEqualTo(Optional.empty()));
    }
    
    @AfterTemplate
    AbstractOptionalAssert<?, T> after(AbstractOptionalAssert<?, T> optionalAssert) {
        return optionalAssert.isPresent();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalHasValueMatchingRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdassertthatoptionalhasvaluematchingrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalHasValueMatching<T> {
    
    @BeforeTemplate
    AbstractOptionalAssert<?, T> before(Optional<T> optional, Predicate<? super T> predicate) {
        return assertThat(optional.filter(predicate)).isPresent();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, T> after(Optional<T> optional, Predicate<? super T> predicate) {
        return assertThat(optional).get().matches(predicate);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdassertthatoptionalisemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalIsEmpty<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Optional<T> optional) {
        return Refaster.anyOf(assertThat(optional.isEmpty()).isTrue(), assertThat(optional.isPresent()).isFalse());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalAssert<T> after(Optional<T> optional) {
        return assertThat(optional).isEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalIsPresentRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdassertthatoptionalispresentrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatOptionalIsPresent<T> {
    
    @BeforeTemplate
    AbstractAssert<?, ?> before(Optional<T> optional) {
        return Refaster.anyOf(assertThat(optional.isPresent()).isTrue(), assertThat(optional.isEmpty()).isFalse());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    OptionalAssert<T> after(Optional<T> optional) {
        return assertThat(optional).isPresent();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJOptionalRulesRecipes$AssertThatOptionalRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjoptionalrulesrecipesusdassertthatoptionalrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatOptional<T> {
    
    @BeforeTemplate
    ObjectAssert<T> before(Optional<T> optional) {
        return assertThat(optional.orElseThrow());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, T> after(Optional<T> optional) {
        return assertThat(optional).get();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatListsAreEqualRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatlistsareequalrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatListsAreEqual<S, T extends S> {
    
    @BeforeTemplate
    ListAssert<S> before(List<S> list1, Iterable<T> list2) {
        return assertThat(list1).isEqualTo(list2);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(List<S> list1, Iterable<T> list2) {
        return assertThat(list1).containsExactlyElementsOf(list2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatMapContainsEntryRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatmapcontainsentryrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsEntry<K, V> {
    
    @BeforeTemplate
    ObjectAssert<?> before(Map<K, V> map, K key, V value) {
        return assertThat(map.get(key)).isEqualTo(value);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key, V value) {
        return assertThat(map).containsEntry(key, value);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatMultisetsAreEqualRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatmultisetsareequalrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMultisetsAreEqual<S, T extends S> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, S, ?> before(Multiset<S> multiset1, Iterable<T> multiset2) {
        return assertThat(multiset1).isEqualTo(multiset2);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractCollectionAssert<?, ?, S, ?> after(Multiset<S> multiset1, Iterable<T> multiset2) {
        return assertThat(multiset1).containsExactlyInAnyOrderElementsOf(multiset2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatPredicateAcceptsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatpredicateacceptsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatPredicateAccepts<T> {
    
    @BeforeTemplate
    void before(Predicate<T> predicate, T object) {
        assertThat(predicate.test(object)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Predicate<T> predicate, T object) {
        assertThat(predicate).accepts(object);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatPredicateRejectsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatpredicaterejectsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatPredicateRejects<T> {
    
    @BeforeTemplate
    void before(Predicate<T> predicate, T object) {
        assertThat(predicate.test(object)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Predicate<T> predicate, T object) {
        assertThat(predicate).rejects(object);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatSetContainsExactlyOneElementRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatsetcontainsexactlyoneelementrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatSetContainsExactlyOneElement<S, T extends S> {
    
    @BeforeTemplate
    ObjectEnumerableAssert<?, S> before(Set<S> set, T element) {
        return assertThat(set).containsOnly(element);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectEnumerableAssert<?, S> after(Set<S> set, T element) {
        return assertThat(set).containsExactly(element);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatSetsAreEqualRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatsetsareequalrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatSetsAreEqual<S, T extends S> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, S, ?> before(Set<S> set1, Iterable<T> set2) {
        return Refaster.anyOf(assertThat(set1).isEqualTo(set2), assertThat(set1).containsExactlyInAnyOrderElementsOf(set2));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractCollectionAssert<?, ?, S, ?> after(Set<S> set1, Iterable<T> set2) {
        return assertThat(set1).hasSameElementsAs(set2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAllRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsallrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAll<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAll(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAll(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsAll(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAnyElementsOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsanyelementsofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAnyElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyElementsOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsAnyElementsOf(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAnyOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsanyofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAnyOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsAnyOf(array);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyElementsOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsexactlyelementsofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsExactlyElementsOf(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyInAnyOrderElementsOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsexactlyinanyorderelementsofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyInAnyOrderElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrderElementsOf(iterable);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, T, ?> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Multiset<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrderElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsExactlyInAnyOrderElementsOf(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyInAnyOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsexactlyinanyorderrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyInAnyOrder<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(array);
    }
    
    @BeforeTemplate
    AbstractCollectionAssert<?, ?, T, ?> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends Multiset<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsExactlyInAnyOrder(array);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsexactlyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactly<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactly(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsExactly(array);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsOnlyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsonlyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsOnly<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).containsOnly(array);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContains<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).contains(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).contains(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).contains(array);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSequenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainssequencerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSequence<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSequence(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSequence(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsSequence(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSubsequenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamcontainssubsequencerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSubsequence<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSubsequence(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSubsequence(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).containsSubsequence(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainAnyElementsOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamdoesnotcontainanyelementsofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainAnyElementsOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainAnyElementsOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainAnyElementsOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).doesNotContainAnyElementsOf(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamdoesnotcontainrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContain<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] array, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(array);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, U[] array, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(array);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] array) {
        return assertThat(stream).doesNotContain(array);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainSequenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamdoesnotcontainsequencerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainSequence<S, T extends S, U extends T> {
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainSequence(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainSequence(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).doesNotContainSequence(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamHasSameElementsAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamhassameelementsasrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamHasSameElementsAs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).hasSameElementsAs(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).hasSameElementsAs(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, Iterable<U> iterable) {
        return assertThat(stream).hasSameElementsAs(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamHasSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamhassizerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamHasSize<T> {
    
    @BeforeTemplate
    void before(Stream<T> stream, int size) {
        assertThat(stream.count()).isEqualTo(size);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Stream<T> stream, int size) {
        assertThat(stream).hasSize(size);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamisemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamIsEmpty<S, T extends S> {
    
    @BeforeTemplate
    void before(Stream<S> stream, Collector<S, ?, ? extends Iterable<T>> collector) {
        assertThat(stream.collect(collector)).isEmpty();
    }
    
    @BeforeTemplate
    void before2(Stream<S> stream, Collector<S, ?, ? extends List<T>> collector) {
        assertThat(stream.collect(collector)).isEmpty();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Stream<S> stream) {
        assertThat(stream).isEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsNotEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamisnotemptyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamIsNotEmpty<S, T extends S> {
    
    @BeforeTemplate
    void before(Stream<S> stream, Collector<S, ?, ? extends Iterable<T>> collector) {
        assertThat(stream.collect(collector)).isNotEmpty();
    }
    
    @BeforeTemplate
    void before2(Stream<S> stream, Collector<S, ?, ? extends List<T>> collector) {
        assertThat(stream.collect(collector)).isNotEmpty();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Stream<S> stream) {
        assertThat(stream).isNotEmpty();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsSubsetOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdassertthatstreamissubsetofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamIsSubsetOf<S, T extends S, U extends T> {
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    IterableAssert<T> before(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, Iterable<U> iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @BeforeTemplate
    ListAssert<T> before2(Stream<S> stream, U[] iterable, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(iterable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, U[] iterable) {
        return assertThat(stream).isSubsetOf(iterable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableContainsOneElementRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdobjectenumerablecontainsoneelementrecipe): Recipe created for the following Refaster template:
```java
static final class ObjectEnumerableContainsOneElement<S, T extends S> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> before(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return Refaster.anyOf(iterAssert.containsAnyOf(element), iterAssert.containsSequence(element), iterAssert.containsSubsequence(element));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> after(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return iterAssert.contains(element);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$ObjectEnumerableDoesNotContainOneElementRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipesusdobjectenumerabledoesnotcontainoneelementrecipe): Recipe created for the following Refaster template:
```java
static final class ObjectEnumerableDoesNotContainOneElement<S, T extends S> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> before(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return iterAssert.doesNotContainSequence(element);
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "unchecked")
    ObjectEnumerableAssert<?, S> after(ObjectEnumerableAssert<?, S> iterAssert, T element) {
        return iterAssert.doesNotContain(element);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByAsInstanceOfThrowableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipesusdassertthatthrownbyasinstanceofthrowablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByAsInstanceOfThrowable<T extends Throwable> {
    
    @BeforeTemplate
    ThrowableAssertAlternative<T> before(ThrowingCallable throwingCallable, Class<T> exceptionType) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractThrowableAssert<?, T> after(ThrowingCallable throwingCallable, Class<T> exceptionType) {
        return assertThatThrownBy(throwingCallable).asInstanceOf(throwable(exceptionType));
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipesusdassertthatthrownbyisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(ThrowingCallable throwingCallable, Class<T> exceptionType) {
        Refaster.anyOf(assertThatThrownBy(throwingCallable).asInstanceOf(throwable(exceptionType)), assertThatThrownBy(throwingCallable).asInstanceOf(type(exceptionType)));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Class<T> exceptionType) {
        assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$DisjointCollectionsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipesusddisjointcollectionsrecipe): Don't unnecessarily copy collections before passing them to `Collections#disjoint(Collection, Collection)`. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$DisjointSetsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipesusddisjointsetsrecipe): Prefer `Collections#disjoint(Collection, Collection)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$IterableIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipesusditerableisemptyrecipe): Prefer `Iterables#isEmpty(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$IteratorGetNextOrDefaultRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipesusditeratorgetnextordefaultrecipe): Prefer `Iterators#getNext(Iterator, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$UnboundedSingleElementStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assortedrulesrecipesusdunboundedsingleelementstreamrecipe): Prefer `Stream#generate(java.util.function.Supplier)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/classrulesrecipes): Refaster rules related to expressions dealing with classes.
[Source](https://error-prone.picnic.tech/refasterrules/ClassRules). 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassIsInstanceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/classrulesrecipesusdclassisinstancerecipe): Prefer `Class#isInstance(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes): Refaster rules related to expressions dealing with (arbitrary) collections.
[Source](https://error-prone.picnic.tech/refasterrules/CollectionRules). 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionAddAllToCollectionBlockRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionaddalltocollectionblockrecipe): Recipe created for the following Refaster template:
```java
static final class CollectionAddAllToCollectionBlock<T, S extends T> {
    
    @BeforeTemplate
    void before(Collection<T> addTo, Collection<S> elementsToAdd) {
        elementsToAdd.forEach(addTo::add);
    }
    
    @BeforeTemplate
    void before2(Collection<T> addTo, Collection<S> elementsToAdd) {
        for (T element : elementsToAdd) {
            addTo.add(element);
        }
    }
    
    @BeforeTemplate
    void before3(Collection<T> addTo, Collection<S> elementsToAdd) {
        for (S element : elementsToAdd) {
            addTo.add(element);
        }
    }
    
    @AfterTemplate
    void after(Collection<T> addTo, Collection<S> elementsToAdd) {
        addTo.addAll(elementsToAdd);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionAddAllToCollectionExpressionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionaddalltocollectionexpressionrecipe): Don't call `Iterables#addAll(Collection, Iterable)` when the elements to be added are already part of a `Collection`. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionContainsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectioncontainsrecipe): Prefer `Collection#contains(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionForEachRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionforeachrecipe): Prefer `Collection#forEach(Consumer)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionisemptyrecipe): Prefer `Collection#isEmpty()` over alternatives that consult the collection's size or are otherwise more contrived. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionIteratorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectioniteratorrecipe): Prefer `Collection#iterator()` over more contrived or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionRemoveAllFromCollectionBlockRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionremoveallfromcollectionblockrecipe): Recipe created for the following Refaster template:
```java
static final class CollectionRemoveAllFromCollectionBlock<T, S extends T> {
    
    @BeforeTemplate
    void before(Collection<T> removeFrom, Collection<S> elementsToRemove) {
        elementsToRemove.forEach(removeFrom::remove);
    }
    
    @BeforeTemplate
    void before2(Collection<T> removeFrom, Collection<S> elementsToRemove) {
        for (T element : elementsToRemove) {
            removeFrom.remove(element);
        }
    }
    
    @BeforeTemplate
    void before3(Collection<T> removeFrom, Collection<S> elementsToRemove) {
        for (S element : elementsToRemove) {
            removeFrom.remove(element);
        }
    }
    
    @AfterTemplate
    void after(Collection<T> removeFrom, Collection<S> elementsToRemove) {
        removeFrom.removeAll(elementsToRemove);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionRemoveAllFromCollectionExpressionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionremoveallfromcollectionexpressionrecipe): Don't call `Iterables#removeAll(Iterable, Collection)` when the elements to be removed are already part of a `Collection`. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectionsizerecipe): Prefer `Collection#size()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionToArrayRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdcollectiontoarrayrecipe): Prefer calling `Collection#toArray()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionAsListRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectionaslistrecipe): Prefer `ImmutableCollection#asList()` over the more verbose alternative. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionContainsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectioncontainsrecipe): Don't call `ImmutableCollection#asList()` if `Collection#contains(Object)` is called on the result; call it directly. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionParallelStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectionparallelstreamrecipe): Don't call `ImmutableCollection#asList()` if `ImmutableCollection#parallelStream()` is called on the result; call it directly. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectionstreamrecipe): Don't call `ImmutableCollection#asList()` if the result is going to be streamed; stream directly. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayWithArrayRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectiontoarraywitharrayrecipe): Don't call `ImmutableCollection#asList()` if `ImmutableCollection#toArray(Object[])`` is called on the result; call it directly. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayWithGeneratorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectiontoarraywithgeneratorrecipe): Don't call `ImmutableCollection#asList()` if `ImmutableCollection#toArray(IntFunction)`} is called on the result; call it directly. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdimmutablecollectiontostringrecipe): Don't call `ImmutableCollection#asList()` if `ImmutableCollection#toString()` is called on the result; call it directly. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$NewArrayListFromCollectionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdnewarraylistfromcollectionrecipe): Prefer `ArrayList#ArrayList(Collection)` over the Guava alternative. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$OptionalFirstCollectionElementRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdoptionalfirstcollectionelementrecipe): Don't use the ternary operator to extract the first element of a possibly-empty `Collection` as an `Optional`, and (when applicable) prefer `Stream#findFirst()` over `Stream#findAny()` to communicate that the collection's first element (if any, according to iteration order) will be returned. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$RemoveOptionalFirstNavigableSetElementRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdremoveoptionalfirstnavigablesetelementrecipe): Avoid contrived constructions when extracting the first element from a possibly empty `NavigableSet`. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SetStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipesusdsetstreamrecipe): Don't unnecessarily call `Stream#distinct()` on an already-unique stream of elements. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes): Refaster rules related to expressions dealing with `Comparator`s.
[Source](https://error-prone.picnic.tech/refasterrules/ComparatorRules). 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMaxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdcollectionsmaxrecipe): Prefer `Collections#max(Collection)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMaxWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdcollectionsmaxwithcomparatorrecipe): Avoid unnecessary creation of a `Stream` to determine the maximum of a known collection of values. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMinRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdcollectionsminrecipe): Prefer `Collections#min(Collection)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsMinWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdcollectionsminwithcomparatorrecipe): Avoid unnecessary creation of a `Stream` to determine the minimum of a known collection of values. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CollectionsSortRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdcollectionssortrecipe): Prefer `Collections#sort(List)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$CompareToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdcomparetorecipe): Prefer `Comparable#compareTo(Object)`} over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$IsLessThanOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdislessthanorequaltorecipe): Don't explicitly compare enums by their ordinal. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$IsLessThanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdislessthanrecipe): Don't explicitly compare enums by their ordinal. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MaxByNaturalOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdmaxbynaturalorderrecipe): Prefer `Comparator#naturalOrder()` over `Comparator#reverseOrder()` where possible. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MaxOfArrayRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdmaxofarrayrecipe): Avoid unnecessary creation of a `Stream` to determine the maximum of a known collection of values. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MinByNaturalOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdminbynaturalorderrecipe): Prefer `Comparator#naturalOrder()` over `Comparator#reverseOrder()` where possible. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MinOfArrayRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdminofarrayrecipe): Avoid unnecessary creation of a `Stream` to determine the minimum of a known collection of values. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ReverseOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdreverseorderrecipe): Prefer `Comparator#reverseOrder()` over more complicated constructs. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingCustomRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparingcustomrecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingCustomReversedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparingcustomreversedrecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingDoubleRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparingdoublerecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingIntRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparingintrecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingLongRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparinglongrecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparingrecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ThenComparingReversedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipesusdthencomparingreversedrecipe): Don't explicitly create `Comparator`s unnecessarily. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EnumReferenceEqualityRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/equalityrulesrecipesusdenumreferenceequalityrecipe): Prefer reference-based equality for enums. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/equalityrulesrecipesusdequalsrecipe): Avoid contrived ways of handling `null` values during equality testing. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$ObjectsEqualsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/equalityrulesrecipesusdobjectsequalsrecipe): Avoid contrived ways of handling `null` values during equality testing. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipes): Refaster rules related to expressions dealing with `com.google.common.collect.ImmutableEnumSet`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableEnumSetRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSet1Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumset1recipe): Prefer `Sets#immutableEnumSet(Enum, Enum[])` for enum collections to take advantage of the internally used `EnumSet`. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSet2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumset2recipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the `ImmutableSet#of` expression produces a set that iterates over its elements in the listed order,
 the replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSet3Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumset3recipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the `ImmutableSet#of` expression produces a set that iterates over its elements in the listed order,
 the replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSet4Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumset4recipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the `ImmutableSet#of` expression produces a set that iterates over its elements in the listed order,
 the replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSet5Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumset5recipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the `ImmutableSet#of` expression produces a set that iterates over its elements in the listed order,
 the replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSet6Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumset6recipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the
 original code produces a set that iterates over its elements in the listed order, the
 replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSetArraysAsListRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumsetarraysaslistrecipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the
 original code produces a set that iterates over its elements in the same order as defined in
 the array, the replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSetIterableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdsetsimmutableenumsetiterablerecipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the
 original code produces a set that iterates over its elements in the same order as the input
 `Iterable`, the replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$StreamToImmutableEnumSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipesusdstreamtoimmutableenumsetrecipe): <strong>Warning:</strong> this rule is not completely behavior preserving: while the
 original code produces a set that iterates over its elements in encounter order, the
 replacement code iterates over the elements in enum definition order. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipes): Refaster rules related to expressions dealing with `ImmutableListMultimap`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableListMultimapRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$EmptyImmutableListMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipesusdemptyimmutablelistmultimaprecipe): Prefer `ImmutableListMultimap#of()` over more contrived or less-specific alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$EntryToImmutableListMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipesusdentrytoimmutablelistmultimaprecipe): Prefer `ImmutableListMultimap#of(Object, Object)` over more contrived or less-specific alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$ImmutableListMultimapBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipesusdimmutablelistmultimapbuilderrecipe): Prefer `ImmutableListMultimap#builder()` over the associated constructor on constructions that produce a less-specific type. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$IterableToImmutableListMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipesusditerabletoimmutablelistmultimaprecipe): Prefer `ImmutableListMultimap#copyOf(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$PairToImmutableListMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipesusdpairtoimmutablelistmultimaprecipe): Prefer `ImmutableListMultimap#of(Object, Object)` over more contrived or less-specific alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListMultimapRulesRecipes$TransformMultimapValuesToImmutableListMultimap2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistmultimaprulesrecipesusdtransformmultimapvaluestoimmutablelistmultimap2recipe): Prefer creating an immutable copy of the result of `Multimaps#transformValues(Multimap, com.google.common.base.Function)` over creating and directly collecting a stream. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipes): Refaster rules related to expressions dealing with `ImmutableList`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableListRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistbuilderrecipe): Prefer `ImmutableList#builder()` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOf1Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistof1recipe): Prefer `ImmutableList#of(Object)` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting list at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOf2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistof2recipe): Prefer `ImmutableList#of(Object, Object)` over alternatives that don't communicate the immutability of the resulting list at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOf3Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistof3recipe): Prefer `ImmutableList#of(Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting list at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOf4Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistof4recipe): Prefer `ImmutableList#of(Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting list at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOf5Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistof5recipe): Prefer `ImmutableList#of(Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting list at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistofrecipe): Prefer `ImmutableList#of()` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting list at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListSortedCopyOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistsortedcopyofrecipe): Prefer `ImmutableList#sortedCopyOf(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListSortedCopyOfWithCustomComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdimmutablelistsortedcopyofwithcustomcomparatorrecipe): Prefer `ImmutableList#sortedCopyOf(Comparator, Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$IterableToImmutableListRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusditerabletoimmutablelistrecipe): Prefer `ImmutableList#copyOf(Iterable)` and variants over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$StreamToDistinctImmutableListRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdstreamtodistinctimmutablelistrecipe): Collecting to an `ImmutableSet` and converting the result to an `ImmutableList` may be more efficient than deduplicating a stream and collecting the result to an `ImmutableList`. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$StreamToImmutableListRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipesusdstreamtoimmutablelistrecipe): Prefer `ImmutableList#toImmutableList()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes): Refaster rules related to expressions dealing with `ImmutableMap`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableMapRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$EntryIterableToImmutableMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdentryiterabletoimmutablemaprecipe): Prefer `ImmutableMap#copyOf(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$EntryToImmutableMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdentrytoimmutablemaprecipe): Prefer `ImmutableMap#of(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderBuildOrThrowRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapbuilderbuildorthrowrecipe): Prefer `ImmutableMap.Builder#buildOrThrow()` over the less explicit `ImmutableMap.Builder#build()`. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapbuilderrecipe): Prefer `ImmutableMap#builder()` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf1Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapof1recipe): Prefer `ImmutableMap#of(Object, Object)` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapof2recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf3Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapof3recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf4Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapof4recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOf5Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapof5recipe): Prefer `ImmutableMap#of(Object, Object, Object, Object, Object, Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipesusdimmutablemapofrecipe): Prefer `ImmutableMap#of()` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemultisetrulesrecipes): Refaster rules related to expressions dealing with `ImmutableMultiset`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableMultisetRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$EmptyImmutableMultisetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemultisetrulesrecipesusdemptyimmutablemultisetrecipe): Prefer `ImmutableMultiset#of()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$ImmutableMultisetBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemultisetrulesrecipesusdimmutablemultisetbuilderrecipe): Prefer `ImmutableMultiset#builder()` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$IterableToImmutableMultisetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemultisetrulesrecipesusditerabletoimmutablemultisetrecipe): Prefer `ImmutableMultiset#copyOf(Iterable)` and variants over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMultisetRulesRecipes$StreamToImmutableMultisetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemultisetrulesrecipesusdstreamtoimmutablemultisetrecipe): Prefer `ImmutableMultiset#toImmutableMultiset()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipes): Refaster rules related to expressions dealing with `ImmutableSetMultimap`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableSetMultimapRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$EmptyImmutableSetMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipesusdemptyimmutablesetmultimaprecipe): Prefer `ImmutableSetMultimap#of()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$EntryToImmutableSetMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipesusdentrytoimmutablesetmultimaprecipe): Prefer `ImmutableSetMultimap#of(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$ImmutableSetMultimapBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipesusdimmutablesetmultimapbuilderrecipe): Prefer `ImmutableSetMultimap#builder()` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$IterableToImmutableSetMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipesusditerabletoimmutablesetmultimaprecipe): Prefer `ImmutableSetMultimap#copyOf(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$PairToImmutableSetMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipesusdpairtoimmutablesetmultimaprecipe): Prefer `ImmutableSetMultimap#of(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetMultimapRulesRecipes$TransformMultimapValuesToImmutableSetMultimap2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetmultimaprulesrecipesusdtransformmultimapvaluestoimmutablesetmultimap2recipe): Prefer creating an immutable copy of the result of `Multimaps#transformValues(Multimap, com.google.common.base.Function)` over creating and directly collecting a stream. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipes): Refaster rules related to expressions dealing with `ImmutableSet`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableSetRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetbuilderrecipe): Prefer `ImmutableSet#builder()` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetCopyOfSetViewRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetcopyofsetviewrecipe): Prefer `SetView#immutableCopy()` over the more verbose alternative. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOf1Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetof1recipe): Prefer `ImmutableSet#of(Object)` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting set at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOf2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetof2recipe): Prefer `ImmutableSet#of(Object, Object)` over alternatives that don't communicate the immutability of the resulting set at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOf3Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetof3recipe): Prefer `ImmutableSet#of(Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting set at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOf4Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetof4recipe): Prefer `ImmutableSet#of(Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting set at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOf5Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetof5recipe): Prefer `ImmutableSet#of(Object, Object, Object, Object, Object)` over alternatives that don't communicate the immutability of the resulting set at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$ImmutableSetOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdimmutablesetofrecipe): Prefer `ImmutableSet#of()` over more contrived alternatives or alternatives that don't communicate the immutability of the resulting set at the type level. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$IterableToImmutableSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusditerabletoimmutablesetrecipe): Prefer `ImmutableSet#copyOf(Iterable)` and variants over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsdifferencemaprecipe): Prefer an immutable copy of `Sets#difference(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsdifferencemultimaprecipe): Prefer an immutable copy of `Sets#difference(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsDifferenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsdifferencerecipe): Prefer an immutable copy of `Sets#difference(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsintersectionmaprecipe): Prefer an immutable copy of `Sets#intersection(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionMultimapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsintersectionmultimaprecipe): Prefer an immutable copy of `Sets#intersection(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsIntersectionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsintersectionrecipe): Prefer an immutable copy of `Sets#intersection(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$SetsUnionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdsetsunionrecipe): Prefer an immutable copy of `Sets#union(Set, Set)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSetRulesRecipes$StreamToImmutableSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesetrulesrecipesusdstreamtoimmutablesetrecipe): Prefer `ImmutableSet#toImmutableSet()` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipes): Refaster rules related to expressions dealing with `ImmutableSortedMap`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableSortedMapRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$EmptyImmutableSortedMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusdemptyimmutablesortedmaprecipe): Prefer `ImmutableSortedMap#of()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$EntryToImmutableSortedMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusdentrytoimmutablesortedmaprecipe): Prefer `ImmutableSortedMap#of(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusdimmutablesortedmapbuilderrecipe): Prefer `ImmutableSortedMap#orderedBy(Comparator)` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapNaturalOrderBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusdimmutablesortedmapnaturalorderbuilderrecipe): Prefer `ImmutableSortedMap#naturalOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$ImmutableSortedMapReverseOrderBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusdimmutablesortedmapreverseorderbuilderrecipe): Prefer `ImmutableSortedMap#reverseOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$IterableToImmutableSortedMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusditerabletoimmutablesortedmaprecipe): Prefer `ImmutableSortedMap#copyOf(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMapRulesRecipes$PairToImmutableSortedMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmaprulesrecipesusdpairtoimmutablesortedmaprecipe): Prefer `ImmutableSortedMap#of(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipes): Refaster rules related to expressions dealing with `ImmutableSortedMultiset`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableSortedMultisetRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$EmptyImmutableSortedMultisetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipesusdemptyimmutablesortedmultisetrecipe): Prefer `ImmutableSortedMultiset#of()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipesusdimmutablesortedmultisetbuilderrecipe): Prefer `ImmutableSortedMultiset#orderedBy(Comparator)` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetNaturalOrderBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipesusdimmutablesortedmultisetnaturalorderbuilderrecipe): Prefer `ImmutableSortedMultiset#naturalOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$ImmutableSortedMultisetReverseOrderBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipesusdimmutablesortedmultisetreverseorderbuilderrecipe): Prefer `ImmutableSortedMultiset#reverseOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$IterableToImmutableSortedMultisetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipesusditerabletoimmutablesortedmultisetrecipe): Prefer `ImmutableSortedMultiset#copyOf(Iterable)` and variants over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedMultisetRulesRecipes$StreamToImmutableSortedMultisetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedmultisetrulesrecipesusdstreamtoimmutablesortedmultisetrecipe): Prefer `ImmutableSortedMultiset#toImmutableSortedMultiset(Comparator)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipes): Refaster rules related to expressions dealing with `ImmutableSortedSet`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableSortedSetRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$EmptyImmutableSortedSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipesusdemptyimmutablesortedsetrecipe): Prefer `ImmutableSortedSet#of()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipesusdimmutablesortedsetbuilderrecipe): Prefer `ImmutableSortedSet#orderedBy(Comparator)` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetNaturalOrderBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipesusdimmutablesortedsetnaturalorderbuilderrecipe): Prefer `ImmutableSortedSet#naturalOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$ImmutableSortedSetReverseOrderBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipesusdimmutablesortedsetreverseorderbuilderrecipe): Prefer `ImmutableSortedSet#reverseOrder()` over the alternative that requires explicitly providing the `Comparator`. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$IterableToImmutableSortedSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipesusditerabletoimmutablesortedsetrecipe): Prefer `ImmutableSortedSet#copyOf(Iterable)` and variants over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableSortedSetRulesRecipes$StreamToImmutableSortedSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablesortedsetrulesrecipesusdstreamtoimmutablesortedsetrecipe): Prefer `ImmutableSortedSet#toImmutableSortedSet(Comparator)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutabletablerulesrecipes): Refaster rules related to expressions dealing with `ImmutableTable`s.
[Source](https://error-prone.picnic.tech/refasterrules/ImmutableTableRules). 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$CellToImmutableTableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutabletablerulesrecipesusdcelltoimmutabletablerecipe): Prefer `ImmutableTable#of(Object, Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableBuilderBuildOrThrowRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutabletablerulesrecipesusdimmutabletablebuilderbuildorthrowrecipe): Prefer `ImmutableTable.Builder#buildOrThrow()` over the less explicit `ImmutableTable.Builder#build()`. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutabletablerulesrecipesusdimmutabletablebuilderrecipe): Prefer `ImmutableTable#builder()` over the associated constructor. 
* [tech.picnic.errorprone.refasterrules.ImmutableTableRulesRecipes$ImmutableTableOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutabletablerulesrecipesusdimmutabletableofrecipe): Prefer `ImmutableTable#of()` over more contrived alternatives . 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsInstanceOf<T> {
    
    @BeforeTemplate
    void before(Object actual, Class<T> clazz) {
        assertInstanceOf(clazz, actual);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Class<T> clazz) {
        assertThat(actual).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByIsExactlyInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatthrownbyisexactlyinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIsExactlyInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, Class<T> clazz) {
        assertThrowsExactly(clazz, throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).isExactlyInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatthrownbyisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, Class<T> clazz) {
        assertThrows(clazz, throwingCallable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageStringIsExactlyInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatthrownbywithfailmessagestringisexactlyinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageStringIsExactlyInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, String message, Class<T> clazz) {
        assertThrowsExactly(clazz, throwingCallable, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, String message, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(message).isExactlyInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageStringIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatthrownbywithfailmessagestringisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageStringIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, String message, Class<T> clazz) {
        assertThrows(clazz, throwingCallable, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, String message, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(message).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageSupplierIsExactlyInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatthrownbywithfailmessagesupplierisexactlyinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageSupplierIsExactlyInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, Supplier<String> supplier, Class<T> clazz) {
        assertThrowsExactly(clazz, throwingCallable, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Supplier<String> supplier, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(supplier).isExactlyInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatThrownByWithFailMessageSupplierIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatthrownbywithfailmessagesupplierisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByWithFailMessageSupplierIsInstanceOf<T extends Throwable> {
    
    @BeforeTemplate
    void before(Executable throwingCallable, Supplier<String> supplier, Class<T> clazz) {
        assertThrows(clazz, throwingCallable, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable throwingCallable, Supplier<String> supplier, Class<T> clazz) {
        assertThatThrownBy(throwingCallable).withFailMessage(supplier).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageStringIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatwithfailmessagestringisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageStringIsInstanceOf<T> {
    
    @BeforeTemplate
    void before(Object actual, String message, Class<T> clazz) {
        assertInstanceOf(clazz, actual, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, String message, Class<T> clazz) {
        assertThat(actual).withFailMessage(message).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$AssertThatWithFailMessageSupplierIsInstanceOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdassertthatwithfailmessagesupplierisinstanceofrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatWithFailMessageSupplierIsInstanceOf<T> {
    
    @BeforeTemplate
    void before(Object actual, Supplier<String> supplier, Class<T> clazz) {
        assertInstanceOf(clazz, actual, supplier);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Object actual, Supplier<String> supplier, Class<T> clazz) {
        assertThat(actual).withFailMessage(supplier).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdfailrecipe): Recipe created for the following Refaster template:
```java
static final class Fail<T> {
    
    @BeforeTemplate
    T before() {
        return Assertions.fail();
    }
    
    @AfterTemplate
    @DoNotCall
    T after() {
        return fail();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithMessageAndThrowableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdfailwithmessageandthrowablerecipe): Recipe created for the following Refaster template:
```java
static final class FailWithMessageAndThrowable<T> {
    
    @BeforeTemplate
    T before(String message, Throwable throwable) {
        return Assertions.fail(message, throwable);
    }
    
    @AfterTemplate
    T after(String message, Throwable throwable) {
        return fail(message, throwable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdfailwithmessagerecipe): Recipe created for the following Refaster template:
```java
static final class FailWithMessage<T> {
    
    @BeforeTemplate
    T before(String message) {
        return Assertions.fail(message);
    }
    
    @AfterTemplate
    T after(String message) {
        return fail(message);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.JUnitToAssertJRulesRecipes$FailWithThrowableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junittoassertjrulesrecipesusdfailwiththrowablerecipe): Recipe created for the following Refaster template:
```java
static final class FailWithThrowable<T> {
    
    @BeforeTemplate
    T before(Throwable throwable) {
        return Assertions.fail(throwable);
    }
    
    @AfterTemplate
    @DoNotCall
    T after(Throwable throwable) {
        return fail(throwable);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mapentryrulesrecipes): Refaster rules related to expressions dealing with `Map.Entry` instances.
[Source](https://error-prone.picnic.tech/refasterrules/MapEntryRules). 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByKeyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mapentryrulesrecipesusdmapentrycomparingbykeyrecipe): Prefer `Map.Entry#comparingByKey()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByKeyWithCustomComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mapentryrulesrecipesusdmapentrycomparingbykeywithcustomcomparatorrecipe): Prefer `Map.Entry#comparingByKey(Comparator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mapentryrulesrecipesusdmapentrycomparingbyvaluerecipe): Prefer `Map.Entry#comparingByValue()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryComparingByValueWithCustomComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mapentryrulesrecipesusdmapentrycomparingbyvaluewithcustomcomparatorrecipe): Prefer `Map.Entry#comparingByValue(Comparator)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.MapEntryRulesRecipes$MapEntryRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mapentryrulesrecipesusdmapentryrecipe): <strong>Warning:</strong> while both `Maps#immutableEntry(Object, Object)` and `AbstractMap.SimpleImmutableEntry` allow `null` keys and values, the preferred @link
 Map#entry(Object, Object)} variant does not. Moreover, the `Map.Entry` instances produced
 by the former approaches is `java.io.Serializable`, while this does not hold for the
 object returned by the preferred approach. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipes): Refaster rules related to expressions dealing with `Map` instances.
[Source](https://error-prone.picnic.tech/refasterrules/MapRules). 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapContainsKeyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapcontainskeyrecipe): Prefer `Map#containsKey(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapContainsValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapcontainsvaluerecipe): Prefer `Map#containsValue(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapGetOrDefaultRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapgetordefaultrecipe): Prefer `Map#getOrDefault(Object, Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapGetOrNullRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapgetornullrecipe): Recipe created for the following Refaster template:
```java
static final class MapGetOrNull<K, V, T> {
    
    @BeforeTemplate
    @Nullable
    V before(Map<K, V> map, T key) {
        return map.getOrDefault(key, null);
    }
    
    @AfterTemplate
    @Nullable
    V after(Map<K, V> map, T key) {
        return map.get(key);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapisemptyrecipe): Prefer `Map#isEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapKeyStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapkeystreamrecipe): Don't unnecessarily use `Map#entrySet()`. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapsizerecipe): Prefer `Map#size()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MapRulesRecipes$MapValueStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/maprulesrecipesusdmapvaluestreamrecipe): Don't unnecessarily use `Map#entrySet()`. 
* [tech.picnic.errorprone.refasterrules.MockitoRulesRecipes$VerifyOnceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/mockitorulesrecipesusdverifyoncerecipe): Prefer `Mockito#verify(Object)` over explicitly specifying that the associated invocation must happen precisely once; this is the default behavior. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipes): Refaster rules related to expressions dealing with `Multimap`s.
[Source](https://error-prone.picnic.tech/refasterrules/MultimapRules). 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapContainsKeyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapcontainskeyrecipe): Prefer `Multimap#containsKey(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapContainsValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapcontainsvaluerecipe): Prefer `Multimap#containsValue(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapGetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapgetrecipe): <strong>Warning:</strong> this rewrite rule is not completely behavior preserving: the
 original code will yield `null` for unknown keys, while the replacement code will return
 an empty collection for unknown keys. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapisemptyrecipe): Prefer `Multimap#isEmpty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapKeySetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapkeysetrecipe): Prefer `Multimap#keySet()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapKeysStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapkeysstreamrecipe): Don't unnecessarily use `Multimap#entries()`. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapSizeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapsizerecipe): Prefer `Multimap#size()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.MultimapRulesRecipes$MultimapValuesStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/multimaprulesrecipesusdmultimapvaluesstreamrecipe): Don't unnecessarily use `Multimap#entries()`. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$RequireNonNullElseGetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/nullrulesrecipesusdrequirenonnullelsegetrecipe): Prefer `Objects#requireNonNullElseGet(Object, Supplier)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$RequireNonNullElseRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/nullrulesrecipesusdrequirenonnullelserecipe): Prefer `Objects#requireNonNullElse(Object, Object)` over non-JDK or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipes): Refaster rules related to expressions dealing with `Optional`s.
[Source](https://error-prone.picnic.tech/refasterrules/OptionalRules). 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$MapOptionalToBooleanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdmapoptionaltobooleanrecipe): Prefer `Optional#filter(Predicate)` over `Optional#map(Function)` when converting an `Optional` to a boolean. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalemptyrecipe): Prefer `Optional#empty()` over the more contrived alternative. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalEqualsOptionalRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalequalsoptionalrecipe): Prefer `Optional#equals(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalFilterRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalfilterrecipe): Avoid unnecessary `Optional` to `Stream` conversion when filtering a value of the former type. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalFirstIteratorElementRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalfirstiteratorelementrecipe): Don't use the ternary operator to extract the first element of a possibly-empty `Iterator` as an `Optional`. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalisemptyrecipe): Prefer `Optional#isEmpty()` over the more verbose alternative. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalIsPresentRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalispresentrecipe): Prefer `Optional#isPresent()` over the inverted alternative. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalmaprecipe): Avoid unnecessary `Optional` to `Stream` conversion when mapping a value of the former type. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOfNullableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalofnullablerecipe): Recipe created for the following Refaster template:
```java
static final class OptionalOfNullable<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "TernaryOperatorOptionalNegativeFiltering")
    Optional<T> before(@Nullable
    T object) {
        return object == null ? Optional.empty() : Optional.of(object);
    }
    
    @AfterTemplate
    Optional<T> after(T object) {
        return Optional.ofNullable(object);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrElseThrowRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalorelsethrowrecipe): Prefer `Optional#orElseThrow()` over the less explicit `Optional#get()`. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrOtherOptionalRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalorotheroptionalrecipe): Prefer `Optional#or(Supplier)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdoptionalstreamrecipe): Prefer `Optional#stream()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OrOrElseThrowRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdororelsethrowrecipe): Recipe created for the following Refaster template:
```java
static final class OrOrElseThrow<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "NullAway")
    T before(Optional<T> o1, Optional<T> o2) {
        return o1.orElseGet(()->o2.orElseThrow());
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "NullAway")
    T after(Optional<T> o1, Optional<T> o2) {
        return o1.or(()->o2).orElseThrow();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$StreamFlatMapOptionalRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipesusdstreamflatmapoptionalrecipe): Flatten a stream of `Optional`s using `Optional#stream()`, rather than using one of the more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/preconditionsrulesrecipes): Refaster templates related to statements dealing with `Preconditions`.
[Source](https://error-prone.picnic.tech/refasterrules/PreconditionsRules). 
* [tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes$RequireNonNullRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/preconditionsrulesrecipesusdrequirenonnullrecipe): Prefer `Objects#requireNonNull(Object)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.PreconditionsRulesRecipes$RequireNonNullWithMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/preconditionsrulesrecipesusdrequirenonnullwithmessagerecipe): Prefer `Objects#requireNonNull(Object, String)` over non-JDK alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$ConcatMapIterableIdentityRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdconcatmapiterableidentityrecipe): Prefer `Flux#concatMapIterable(Function)` over alternatives that require an additional subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$ConcatMapIterableIdentityWithPrefetchRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdconcatmapiterableidentitywithprefetchrecipe): Prefer `Flux#concatMapIterable(Function, int)` over alternatives that require an additional subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxAsStepVerifierExpectNextRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxasstepverifierexpectnextrecipe): Avoid list collection when verifying that a `Flux` emits exactly one value. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxCollectToImmutableListRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxcollecttoimmutablelistrecipe): Prefer `Flux#collect(Collector)` with `ImmutableList#toImmutableList()` over alternatives that do not explicitly return an immutable collection. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxCollectToImmutableSetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxcollecttoimmutablesetrecipe): Prefer `Flux#collect(Collector)` with `ImmutableSet#toImmutableSet()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDefaultIfEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxdefaultifemptyrecipe): Prefer `Flux#defaultIfEmpty(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDeferredErrorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxdeferrederrorrecipe): Don't unnecessarily defer `Flux#error(Throwable)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxDoOnErrorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxdoonerrorrecipe): Prefer `Flux#doOnError(Class, Consumer)` over `Flux#doOnError(Predicate, Consumer)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxemptyrecipe): Prefer `Flux#empty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxErrorSupplierRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxerrorsupplierrecipe): Don't unnecessarily pass `Flux#error(Supplier)` a method reference or lambda expression. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFilterSortRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxfiltersortrecipe): Apply `Flux#filter(Predicate)` before `Flux#sort()` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFilterSortWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxfiltersortwithcomparatorrecipe): Apply `Flux#filter(Predicate)` before `Flux#sort(Comparator)` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromIterableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxfromiterablerecipe): Prefer `Flux#fromIterable(Iterable)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxFromStreamSupplierRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxfromstreamsupplierrecipe): Prefer `Flux#fromStream(Supplier)` over `Flux#fromStream(Stream)`, as the former yields a `Flux` that is more likely to behave as expected when subscribed to more than once. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxjustrecipe): Prefer `Flux#just(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxMapNotNullOrElseRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxmapnotnullorelserecipe): Prefer `Flux#mapNotNull(Function)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOfTypeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxoftyperecipe): Prefer `Flux#ofType(Class)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompletePredicateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxonerrorcompletepredicaterecipe): Prefer `Flux#onErrorComplete(Predicate)`} over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorCompleteRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxonerrorcompleterecipe): Prefer `Flux#onErrorComplete()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorContinueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxonerrorcontinuerecipe): Prefer `Flux#onErrorContinue(Class, BiConsumer)` over `Flux#onErrorContinue(Predicate, BiConsumer)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxonerrormaprecipe): Prefer `Flux#onErrorMap(Class, Function)` over `Flux#onErrorMap(Predicate, Function)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorResumeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxonerrorresumerecipe): Prefer `Flux#onErrorResume(Class, Function)` over `Flux#onErrorResume(Predicate, Function)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxOnErrorReturnRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxonerrorreturnrecipe): Prefer `Flux#onErrorReturn(Class, Object)` over `Flux#onErrorReturn(Predicate, Object)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxSortRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxsortrecipe): Prefer `Flux#sort()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxSwitchIfEmptyOfEmptyPublisherRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxswitchifemptyofemptypublisherrecipe): Don't unnecessarily pass an empty publisher to `Flux#switchIfEmpty(Publisher)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTakeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxtakerecipe): In Reactor versions prior to 3.5.0, `Flux#take(long)` makes an unbounded request
 upstream, and is equivalent to `Flux#take(long, false)`. From version 3.5.0 onwards, the
 behavior of `Flux#take(long)` instead matches `Flux#take(long, true)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTakeWhileRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxtakewhilerecipe): Do not unnecessarily `Flux#filter(Predicate) filter` the result of `Flux#takeWhile(Predicate)` using the same `Predicate`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxthenemptyrecipe): Avoid vacuous invocations of `Flux#ignoreElements()`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenManyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxthenmanyrecipe): Avoid vacuous invocations of `Flux#ignoreElements()`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenMonoRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxthenmonorecipe): Avoid vacuous invocations of `Flux#ignoreElements()`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxThenRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxthenrecipe): Avoid vacuous invocations of `Flux#ignoreElements()`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMaxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxtransformmaxrecipe): Prefer `MathFlux#max(Publisher)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMaxWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxtransformmaxwithcomparatorrecipe): Prefer `MathFlux#max(Publisher, Comparator)` over less efficient or more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMinRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxtransformminrecipe): Prefer `MathFlux#min(Publisher)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxTransformMinWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxtransformminwithcomparatorrecipe): Prefer `MathFlux#min(Publisher, Comparator)` over less efficient or more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxziprecipe): Prefer `Flux#zip(Publisher, Publisher)` over a chained `Flux#zipWith(Publisher)`, as the former better conveys that the `Publisher`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithCombinatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxzipwithcombinatorrecipe): Prefer `Flux#zip(Publisher, Publisher)` with a chained combinator over a chained `Flux#zipWith(Publisher, BiFunction)`, as the former better conveys that the `Publisher`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableBiFunctionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxzipwithiterablebifunctionrecipe): Prefer `Flux#zipWithIterable(Iterable, BiFunction)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableMapFunctionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxzipwithiterablemapfunctionrecipe): Prefer `Flux#zipWithIterable(Iterable)` with a chained combinator over `Flux#zipWithIterable(Iterable, BiFunction)`, as the former generally yields more readable code. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxZipWithIterableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdfluxzipwithiterablerecipe): Prefer `Flux#zipWithIterable(Iterable)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MathFluxMaxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmathfluxmaxrecipe): Prefer `MathFlux#max(Publisher)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MathFluxMinRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmathfluxminrecipe): Prefer `MathFlux#min(Publisher)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDefaultIfEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonodefaultifemptyrecipe): Prefer `Mono#defaultIfEmpty(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDeferMonoJustOrEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonodefermonojustoremptyrecipe): Prefer `Mono#defer(Supplier) deferring` `Mono#justOrEmpty(Optional)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDeferredErrorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonodeferrederrorrecipe): Don't unnecessarily defer `Mono#error(Throwable)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoDoOnErrorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonodoonerrorrecipe): Prefer `Mono#doOnError(Class, Consumer)` over `Mono#doOnError(Predicate, Consumer)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoemptyrecipe): Prefer `Mono#empty()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoErrorSupplierRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoerrorsupplierrecipe): Don't unnecessarily pass `Mono#error(Supplier)` a method reference or lambda expression. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFlatMapIterableIdentityRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoflatmapiterableidentityrecipe): Prefer `Mono#flatMapIterable(Function)` to flatten a `Mono` of some `Iterable` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFluxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonofluxrecipe): Prefer `Mono#flux()`} over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetAllRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonofromfutureasyncloadingcachegetallrecipe): Don't propagate `Mono` cancellations to upstream cache value computations, as completion of such computations may benefit concurrent or subsequent cache usages. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureAsyncLoadingCacheGetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonofromfutureasyncloadingcachegetrecipe): Don't propagate `Mono` cancellations to an upstream cache value computation, as completion of such computations may benefit concurrent or subsequent cache usages. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureSupplierBooleanRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonofromfuturesupplierbooleanrecipe): Prefer `Mono#fromFuture(Supplier, boolean)` over `Mono#fromFuture(CompletableFuture, boolean)`, as the former may defer initiation of the asynchronous computation until subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromFutureSupplierRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonofromfuturesupplierrecipe): Prefer `Mono#fromFuture(Supplier)` over `Mono#fromFuture(CompletableFuture)`, as the former may defer initiation of the asynchronous computation until subscription. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoFromOptionalSwitchIfEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonofromoptionalswitchifemptyrecipe): In particular, avoid mixing of the `Optional` and `Mono` APIs. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoIdentityRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoidentityrecipe): Don't unnecessarily transform a `Mono` to an equivalent instance. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptyObjectRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonojustoremptyobjectrecipe): Prefer `Mono#justOrEmpty(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustOrEmptyOptionalRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonojustoremptyoptionalrecipe): Prefer `Mono#justOrEmpty(Optional)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoJustRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonojustrecipe): Prefer `Mono#just(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOfTypeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonooftyperecipe): Prefer `Mono#ofType(Class)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteClassRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrorcompleteclassrecipe): Prefer `Mono#onErrorComplete(Class)`} over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompletePredicateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrorcompletepredicaterecipe): Prefer `Mono#onErrorComplete(Predicate)`} over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorCompleteRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrorcompleterecipe): Prefer `Mono#onErrorComplete()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorContinueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrorcontinuerecipe): Prefer `Mono#onErrorContinue(Class, BiConsumer)` over `Mono#onErrorContinue(Predicate, BiConsumer)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorMapRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrormaprecipe): Prefer `Mono#onErrorMap(Class, Function)` over `Mono#onErrorMap(Predicate, Function)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorResumeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrorresumerecipe): Prefer `Mono#onErrorResume(Class, Function)` over `Mono#onErrorResume(Predicate, Function)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoOnErrorReturnRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoonerrorreturnrecipe): Prefer `Mono#onErrorReturn(Class, Object)` over `Mono#onErrorReturn(Predicate, Object)` where possible. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoSingleOptionalRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonosingleoptionalrecipe): Prefer `Mono#singleOptional()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoSingleRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonosinglerecipe): Don't unnecessarily transform a `Mono` to a `Flux` to expect exactly one item. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonothenemptyrecipe): Avoid vacuous invocations of `Mono#ignoreElement()`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenManyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonothenmanyrecipe): Avoid vacuous operations prior to invocation of `Mono#thenMany(Publisher)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenMonoFluxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonothenmonofluxrecipe): Prefer explicit invocation of `Mono#flux()` over implicit conversions from `Mono` to `Flux`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenMonoRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonothenmonorecipe): Avoid vacuous operations prior to invocation of `Mono#then(Mono)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonothenrecipe): Prefer direct invocation of `Mono#then()`} over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoThenReturnRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonothenreturnrecipe): Prefer `Mono#thenReturn(Object)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonoziprecipe): Prefer `Mono#zip(Mono, Mono)` over a chained `Mono#zipWith(Mono)`, as the former better conveys that the `Mono`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$MonoZipWithCombinatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdmonozipwithcombinatorrecipe): Prefer `Mono#zip(Mono, Mono)` with a chained combinator over a chained `Mono#zipWith(Mono, BiFunction)`, as the former better conveys that the `Mono`s may be subscribed to concurrently, and generalizes to combining three or more reactive streams. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$OptionalMapMonoJustRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdoptionalmapmonojustrecipe): Try to avoid expressions of type `Optional<Mono<T>>`, but if you must map an `Optional` to this type, prefer using `Mono#just(Object)`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasCancelledRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeassertwascancelledrecipe): Prefer `PublisherProbe#assertWasCancelled()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotCancelledRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeassertwasnotcancelledrecipe): Prefer `PublisherProbe#assertWasNotCancelled()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotRequestedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeassertwasnotrequestedrecipe): Prefer `PublisherProbe#assertWasNotRequested()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasNotSubscribedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeassertwasnotsubscribedrecipe): Prefer `PublisherProbe#assertWasNotSubscribed()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasRequestedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeassertwasrequestedrecipe): Prefer `PublisherProbe#assertWasRequested()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeAssertWasSubscribedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeassertwassubscribedrecipe): Prefer `PublisherProbe#assertWasSubscribed()` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$PublisherProbeEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdpublisherprobeemptyrecipe): Prefer `PublisherProbe#empty()`} over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierFromFluxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdstepverifierfromfluxrecipe): Prefer `Flux#as(Function)` when creating a `StepVerifier`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierFromMonoRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdstepverifierfrommonorecipe): Prefer `Mono#as(Function)` when creating a `StepVerifier`. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorClassRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdstepverifierlaststepverifyerrorclassrecipe): Prefer `StepVerifier.LastStep#verifyError(Class)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorSatisfiesAssertJRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdstepverifierlaststepverifyerrorsatisfiesassertjrecipe): Prefer `StepVerifier.LastStep#verifyErrorSatisfies(Consumer)` with AssertJ over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierStepExpectNextRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipesusdstepverifierstepexpectnextrecipe): Prefer `StepVerifier.Step#expectNext(Object)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FlowableToFluxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdflowabletofluxrecipe): Use `RxJava2Adapter#flowableToFlux` to convert a `Flowable` to a `Flux`, and do so using the fluent API style. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FluxToFlowableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdfluxtoflowablerecipe): Use `RxJava2Adapter#fluxToFlowable` to convert a `Flux` to a `Flowable`, and do so using the fluent API style. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$FluxToObservableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdfluxtoobservablerecipe): Use `RxJava2Adapter#fluxToObservable` to convert a `Flux` to a `Observable`, and do so using the fluent API style. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MaybeToMonoRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdmaybetomonorecipe): Use the fluent API style when using `RxJava2Adapter#maybeToMono`. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToCompletableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdmonotocompletablerecipe): Use `RxJava2Adapter#monoToCompletable` to convert a `Mono` to a `Completable`, and do so using the fluent API style. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToFlowableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdmonotoflowablerecipe): Use `RxJava2Adapter#monoToFlowable` to convert a `Mono` to a `Flowable`, and do so using the fluent API style. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToMaybeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdmonotomayberecipe): Use the fluent API style when using `RxJava2Adapter#monoToMaybe`. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$MonoToSingleRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdmonotosinglerecipe): Use `RxJava2Adapter#monoToSingle` to convert a `Mono` to a `Single`, and do so using the fluent API style. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$ObservableToFluxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdobservabletofluxrecipe): Use the fluent API style when using `RxJava2Adapter#observableToFlux`. 
* [tech.picnic.errorprone.refasterrules.RxJava2AdapterRulesRecipes$SingleToMonoRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/rxjava2adapterrulesrecipesusdsingletomonorecipe): Use the fluent API style when using `RxJava2Adapter#singleToMono`. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$ConcatOneStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdconcatonestreamrecipe): Don't unnecessarily call `Streams#concat(Stream...)`. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$ConcatTwoStreamsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdconcattwostreamsrecipe): Prefer `Stream#concat(Stream, Stream)` over the Guava alternative. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$EmptyStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdemptystreamrecipe): Prefer `Stream#empty()` over less clear alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamCountRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamcountrecipe): Recipe created for the following Refaster template:
```java
static final class StreamCount<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    long before(Stream<T> stream) {
        return stream.collect(counting());
    }
    
    @AfterTemplate
    long after(Stream<T> stream) {
        return stream.count();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFilterCollectRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamfiltercollectrecipe): Recipe created for the following Refaster template:
```java
static final class StreamFilterCollect<T, R> {
    
    @BeforeTemplate
    R before(Stream<T> stream, Predicate<? super T> predicate, Collector<? super T, ?, R> collector) {
        return stream.collect(filtering(predicate, collector));
    }
    
    @AfterTemplate
    R after(Stream<T> stream, Predicate<? super T> predicate, Collector<? super T, ?, R> collector) {
        return stream.filter(predicate).collect(collector);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFilterSortedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamfiltersortedrecipe): Apply `Stream#filter(Predicate)` before `Stream#sorted()` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFilterSortedWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamfiltersortedwithcomparatorrecipe): Apply `Stream#filter(Predicate)` before `Stream#sorted(Comparator)` to reduce the number of elements to sort. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFindAnyIsEmptyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamfindanyisemptyrecipe): In order to test whether a stream has any element, simply try to find one. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFindAnyIsPresentRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamfindanyispresentrecipe): Prefer `Stream#findAny()` over `Stream#findFirst()` if one only cares whether the stream is nonempty. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFlatMapCollectRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamflatmapcollectrecipe): Recipe created for the following Refaster template:
```java
static final class StreamFlatMapCollect<T, U, R> {
    
    @BeforeTemplate
    R before(Stream<T> stream, Function<? super T, ? extends Stream<? extends U>> mapper, Collector<? super U, ?, R> collector) {
        return stream.collect(flatMapping(mapper, collector));
    }
    
    @AfterTemplate
    R after(Stream<T> stream, Function<? super T, ? extends Stream<? extends U>> mapper, Collector<? super U, ?, R> collector) {
        return stream.flatMap(mapper).collect(collector);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamIterateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamiteraterecipe): Prefer `Stream#iterate(Object, Predicate, UnaryOperator)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapCollectRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammapcollectrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMapCollect<T, U, R> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    R before(Stream<T> stream, Function<? super T, ? extends U> mapper, Collector<? super U, ?, R> collector) {
        return stream.collect(mapping(mapper, collector));
    }
    
    @AfterTemplate
    R after(Stream<T> stream, Function<? super T, ? extends U> mapper, Collector<? super U, ?, R> collector) {
        return stream.map(mapper).collect(collector);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapFilterRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammapfilterrecipe): Prefer an unconditional `Map#get(Object)` call followed by a `null` check over a call to `Map#containsKey(Object)`, as the former avoids a second lookup operation. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammapfirstrecipe): Where possible, clarify that a mapping operation will be applied only to a single stream element. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapToDoubleSummaryStatisticsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammaptodoublesummarystatisticsrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMapToDoubleSummaryStatistics<T> {
    
    @BeforeTemplate
    DoubleSummaryStatistics before(Stream<T> stream, ToDoubleFunction<T> mapper) {
        return stream.collect(summarizingDouble(mapper));
    }
    
    @AfterTemplate
    DoubleSummaryStatistics after(Stream<T> stream, ToDoubleFunction<T> mapper) {
        return stream.mapToDouble(mapper).summaryStatistics();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapToIntSummaryStatisticsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammaptointsummarystatisticsrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMapToIntSummaryStatistics<T> {
    
    @BeforeTemplate
    IntSummaryStatistics before(Stream<T> stream, ToIntFunction<T> mapper) {
        return stream.collect(summarizingInt(mapper));
    }
    
    @AfterTemplate
    IntSummaryStatistics after(Stream<T> stream, ToIntFunction<T> mapper) {
        return stream.mapToInt(mapper).summaryStatistics();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapToLongSummaryStatisticsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammaptolongsummarystatisticsrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMapToLongSummaryStatistics<T> {
    
    @BeforeTemplate
    LongSummaryStatistics before(Stream<T> stream, ToLongFunction<T> mapper) {
        return stream.collect(summarizingLong(mapper));
    }
    
    @AfterTemplate
    LongSummaryStatistics after(Stream<T> stream, ToLongFunction<T> mapper) {
        return stream.mapToLong(mapper).summaryStatistics();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMaxNaturalOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammaxnaturalorderrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMaxNaturalOrder<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    Optional<T> before(Stream<T> stream) {
        return Refaster.anyOf(stream.min(reverseOrder()), Streams.findLast(stream.sorted()));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    Optional<T> after(Stream<T> stream) {
        return stream.max(naturalOrder());
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMaxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreammaxrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMax<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    Optional<T> before(Stream<T> stream, Comparator<? super T> comparator) {
        return Refaster.anyOf(stream.min(comparator.reversed()), Streams.findLast(stream.sorted(comparator)), stream.collect(maxBy(comparator)));
    }
    
    @AfterTemplate
    Optional<T> after(Stream<T> stream, Comparator<? super T> comparator) {
        return stream.max(comparator);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMinNaturalOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamminnaturalorderrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMinNaturalOrder<T extends Comparable<? super T>> {
    
    @BeforeTemplate
    Optional<T> before(Stream<T> stream) {
        return Refaster.anyOf(stream.max(reverseOrder()), stream.sorted().findFirst());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    Optional<T> after(Stream<T> stream) {
        return stream.min(naturalOrder());
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMinRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamminrecipe): Recipe created for the following Refaster template:
```java
static final class StreamMin<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    Optional<T> before(Stream<T> stream, Comparator<? super T> comparator) {
        return Refaster.anyOf(stream.max(comparator.reversed()), stream.sorted(comparator).findFirst(), stream.collect(minBy(comparator)));
    }
    
    @AfterTemplate
    Optional<T> after(Stream<T> stream, Comparator<? super T> comparator) {
        return stream.min(comparator);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf1Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamof1recipe): Prefer `Stream#of(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamof2recipe): Prefer `Stream#of(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf3Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamof3recipe): Prefer `Stream#of(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf4Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamof4recipe): Prefer `Stream#of(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf5Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamof5recipe): Prefer `Stream#of(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOfNullableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamofnullablerecipe): Prefer `Stream#ofNullable(Object)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamReduceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamreducerecipe): Recipe created for the following Refaster template:
```java
static final class StreamReduce<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    Optional<T> before(Stream<T> stream, BinaryOperator<T> accumulator) {
        return stream.collect(reducing(accumulator));
    }
    
    @AfterTemplate
    Optional<T> after(Stream<T> stream, BinaryOperator<T> accumulator) {
        return stream.reduce(accumulator);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamReduceWithIdentityRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamreducewithidentityrecipe): Recipe created for the following Refaster template:
```java
static final class StreamReduceWithIdentity<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "java:S4266")
    T before(Stream<T> stream, T identity, BinaryOperator<T> accumulator) {
        return stream.collect(reducing(identity, accumulator));
    }
    
    @AfterTemplate
    T after(Stream<T> stream, T identity, BinaryOperator<T> accumulator) {
        return stream.reduce(identity, accumulator);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamTakeWhileRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipesusdstreamtakewhilerecipe): Recipe created for the following Refaster template:
```java
static final class StreamTakeWhile<T> {
    
    @BeforeTemplate
    Stream<T> before(Stream<T> stream, Predicate<? super T> predicate) {
        return stream.takeWhile(predicate).filter(predicate);
    }
    
    @AfterTemplate
    Stream<T> after(Stream<T> stream, Predicate<? super T> predicate) {
        return stream.takeWhile(predicate);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIterableIterationOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertequaliterableiterationorderrecipe): Recipe created for the following Refaster template:
```java
static final class AssertEqualIterableIterationOrder<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterable<S> actual, Iterable<T> expected) {
        assertEquals(actual, expected);
    }
    
    @BeforeTemplate
    void before(Collection<S> actual, Collection<T> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterable<S> actual, Iterable<T> expected) {
        assertThat(actual).containsExactlyElementsOf(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIterableIterationOrderWithMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertequaliterableiterationorderwithmessagerecipe): Recipe created for the following Refaster template:
```java
static final class AssertEqualIterableIterationOrderWithMessage<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterable<S> actual, String message, Iterable<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @BeforeTemplate
    void before(Collection<S> actual, String message, Collection<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterable<S> actual, String message, Iterable<T> expected) {
        assertThat(actual).withFailMessage(message).containsExactlyElementsOf(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIteratorIterationOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertequaliteratoriterationorderrecipe): Recipe created for the following Refaster template:
```java
static final class AssertEqualIteratorIterationOrder<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterator<S> actual, Iterator<T> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterator<S> actual, Iterator<T> expected) {
        assertThat(actual).toIterable().containsExactlyElementsOf(ImmutableList.copyOf(expected));
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualIteratorIterationOrderWithMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertequaliteratoriterationorderwithmessagerecipe): Recipe created for the following Refaster template:
```java
static final class AssertEqualIteratorIterationOrderWithMessage<S, T extends S> {
    
    @BeforeTemplate
    void before(Iterator<S> actual, String message, Iterator<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Iterator<S> actual, String message, Iterator<T> expected) {
        assertThat(actual).toIterable().withFailMessage(message).containsExactlyElementsOf(ImmutableList.copyOf(expected));
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualSetsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertequalsetsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertEqualSets<S, T extends S> {
    
    @BeforeTemplate
    void before(Set<S> actual, Set<T> expected) {
        assertEquals(actual, expected);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Set<S> actual, Set<T> expected) {
        assertThat(actual).hasSameElementsAs(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertEqualSetsWithMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertequalsetswithmessagerecipe): Recipe created for the following Refaster template:
```java
static final class AssertEqualSetsWithMessage<S, T extends S> {
    
    @BeforeTemplate
    void before(Set<S> actual, String message, Set<T> expected) {
        assertEquals(actual, expected, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(Set<S> actual, String message, Set<T> expected) {
        assertThat(actual).withFailMessage(message).hasSameElementsAs(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.TestNGToAssertJRulesRecipes$AssertThrowsWithTypeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/testngtoassertjrulesrecipesusdassertthrowswithtyperecipe): Recipe created for the following Refaster template:
```java
static final class AssertThrowsWithType<T extends Throwable> {
    
    @BeforeTemplate
    void before(ThrowingRunnable runnable, Class<T> clazz) {
        assertThrows(clazz, runnable);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(ThrowingCallable runnable, Class<T> clazz) {
        assertThatThrownBy(runnable).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$BodyValueRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/webclientrulesrecipesusdbodyvaluerecipe): Prefer `RequestBodySpec#bodyValue(Object)` over more contrived alternatives. 

## Removed Recipes

* **org.openrewrite.recipes.JavaRecipeBestPractices**: Best practices for Java recipe development. 
* **org.openrewrite.recipes.RecipeNullabilityBestPractices**: Use JSpecify nullable annotations; drop Nonnull annotations; use `NullMarked` on `package-info.java` instead. 
* **org.openrewrite.recipes.RecipeTestingBestPractices**: Best practices for testing recipes. 

## Changed Recipes

* [org.openrewrite.kubernetes.services.FindServiceExternalIPs](https://docs.openrewrite.org/recipes/kubernetes/services/findserviceexternalips) was changed:
  * Old Options:
    * `externalIPs: { type: Set, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `findMissing: { type: boolean, required: false }`
  * New Options:
    * `externalIPs: { type: Set, required: true }`
    * `fileMatcher: { type: String, required: false }`
    * `findMissing: { type: Boolean, required: false }`