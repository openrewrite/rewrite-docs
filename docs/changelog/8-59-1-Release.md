---
description: What's changed in OpenRewrite version 8.59.1.
---

# 8.59.1 release (2025-07-24)

_Total recipe count: 4006_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::

## New Recipes

* [io.moderne.hibernate.update70.MigrateSessionInterface](https://docs.openrewrite.org/recipes/hibernate/update70/migratesessioninterface): Migrates code using deprecated Session interface methods to their Hibernate 7.0 replacements. 
* [io.moderne.hibernate.update70.MigrateSessionSaveUpdateDelete](https://docs.openrewrite.org/recipes/hibernate/update70/migratesessionsaveupdatedelete): Migrates code using deprecated Session save/update/delete methods to their Hibernate 7.0 replacements. Session#save -> Session#persist, Session#update -> Session#merge, Session#saveOrUpdate -> Session#persist or Session#merge, Session#delete -> Session#remove. 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpClientDependencies](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpclientdependencies): Adopt `org.apache.httpcomponents.client5:httpclient5` from `org.apache.httpcomponents` 
* [org.openrewrite.apache.httpclient5.UpgradeApacheHttpCoreNioDependencies](https://docs.openrewrite.org/recipes/apache/httpclient5/upgradeapachehttpcoreniodependencies): Adopt `org.apache.httpcomponents.core5:httpcore5` from `org.apache.httpcomponents:httpcore-nio` 
* [org.openrewrite.gradle.search.DoesNotIncludeDependency](https://docs.openrewrite.org/recipes/gradle/search/doesnotincludedependency): A precondition which returns false if visiting a Gradle file which includes the specified dependency in the classpath of some scope. For compatibility with multimodule projects, this should most often be applied as a precondition. 
* [org.openrewrite.java.AddCommentToMethodInvocations](https://docs.openrewrite.org/recipes/java/addcommenttomethodinvocations): Add a comment to method invocations in a Java source file. 
* [org.openrewrite.java.SimplifySingleElementAnnotation](https://docs.openrewrite.org/recipes/java/simplifysingleelementannotation): This recipe will remove the attribute `value` on single-element annotations. According to JLS, a _single-element annotation_, is a shorthand designed for use with single-element annotation types. 
* [org.openrewrite.java.jackson.JacksonBestPractices](https://docs.openrewrite.org/recipes/java/jackson/jacksonbestpractices): Apply best practices for using Jackson library, including upgrade to Jackson 2.x and removing redundant annotations. 
* [org.openrewrite.java.jackson.RemoveRedundantJsonPropertyValue](https://docs.openrewrite.org/recipes/java/jackson/removeredundantjsonpropertyvalue): Remove `@JsonProperty` annotation or value attribute when the value matches the argument name. 
* [org.openrewrite.java.testing.cleanup.AssertLiteralBooleanRemovedRecipe](https://docs.openrewrite.org/recipes/java/testing/cleanup/assertliteralbooleanremovedrecipe): These assertions are redundant and do not provide any value. They can be safely removed. 
* [org.openrewrite.java.testing.cleanup.AssertLiteralBooleanToFailRecipes](https://docs.openrewrite.org/recipes/java/testing/cleanup/assertliteralbooleantofailrecipes): Using fail is more direct and clear. 
* [org.openrewrite.java.testing.cleanup.AssertLiteralBooleanToFailRecipes$WithMessageRecipe](https://docs.openrewrite.org/recipes/java/testing/cleanup/assertliteralbooleantofailrecipes$withmessagerecipe): Recipe created for the following Refaster template:
```java
static class WithMessage {
    
    @BeforeTemplate
    void assertFalseBefore(String message) {
        assertFalse(true, message);
    }
    
    @BeforeTemplate
    void assertTrueBefore(String message) {
        assertTrue(false, message);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(String message) {
        fail(message);
    }
}
```
. 
* [org.openrewrite.java.testing.cleanup.AssertLiteralBooleanToFailRecipes$WithoutMessageRecipe](https://docs.openrewrite.org/recipes/java/testing/cleanup/assertliteralbooleantofailrecipes$withoutmessagerecipe): Recipe created for the following Refaster template:
```java
static class WithoutMessage {
    
    @BeforeTemplate
    void assertFalseBefore() {
        assertFalse(true);
    }
    
    @BeforeTemplate
    void assertTrueBefore() {
        assertTrue(false);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after() {
        fail();
    }
}
```
. 
* [org.openrewrite.java.testing.mockito.CleanupPowerMockImports](https://docs.openrewrite.org/recipes/java/testing/mockito/cleanuppowermockimports): Removes unused `org.powermock` import symbols. 
* [org.openrewrite.maven.UpdateScmFromGitOrigin](https://docs.openrewrite.org/recipes/maven/updatescmfromgitorigin): Updates the Maven `<scm>` section based on the Git remote origin. 
* [org.openrewrite.maven.search.FindScm](https://docs.openrewrite.org/recipes/maven/search/findscm): Finds any `<scm>` tag directly inside the `<project>` root of a Maven pom.xml file. 
* [org.openrewrite.staticanalysis.CollectionToArrayShouldHaveProperType](https://docs.openrewrite.org/recipes/staticanalysis/collectiontoarrayshouldhavepropertype): Using `Collection.toArray()` without parameters returns an `Object[]`, which requires casting. It is more efficient and clearer to use `Collection.toArray(new T[0])` instead. 
* [org.openrewrite.staticanalysis.OnlyCatchDeclaredExceptions](https://docs.openrewrite.org/recipes/staticanalysis/onlycatchdeclaredexceptions): Replaces `catch(Exception e)` blocks with a multi-catch block (`catch (SpecificException1 | SpecificException2 e)`) containing only the exceptions declared thrown by method or constructor invocations within the `try` block that are not already caught by more specific `catch` clauses. 
* [org.openrewrite.staticanalysis.UnwrapElseAfterReturn](https://docs.openrewrite.org/recipes/staticanalysis/unwrapelseafterreturn): Unwraps the else block when the if block ends with a return or throw statement, reducing nesting and improving code readability. 
* [org.openrewrite.text.FindHardcodedLoopbackAddresses](https://docs.openrewrite.org/recipes/text/findhardcodedloopbackaddresses): Locates mentions of hard-coded IPv4 addresses from the loopback IP range. The loopback IP range includes `127.0.0.0` to `127.255.255.255`. This detects the entire localhost/loopback subnet range, not just the commonly used `127.0.0.1`. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes): These rules simplify and improve the readability of tests by using `Duration`-specific
 AssertJ assertion methods instead of generic assertions.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJDurationRules). 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatHasDaysRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthathasdaysrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasDays {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(Duration duration, long days) {
        return assertThat(duration.toDays()).isEqualTo(days);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration, long days) {
        return assertThat(duration).hasDays(days);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatHasHoursRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthathashoursrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasHours {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(Duration duration, long hours) {
        return assertThat(duration.toHours()).isEqualTo(hours);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration, long hours) {
        return assertThat(duration).hasHours(hours);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatHasMillisRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthathasmillisrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasMillis {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(Duration duration, long millis) {
        return assertThat(duration.toMillis()).isEqualTo(millis);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration, long millis) {
        return assertThat(duration).hasMillis(millis);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatHasMinutesRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthathasminutesrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasMinutes {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(Duration duration, long minutes) {
        return assertThat(duration.toMinutes()).isEqualTo(minutes);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration, long minutes) {
        return assertThat(duration).hasMinutes(minutes);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatHasNanosRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthathasnanosrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasNanos {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(Duration duration, long nanos) {
        return assertThat(duration.toNanos()).isEqualTo(nanos);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration, long nanos) {
        return assertThat(duration).hasNanos(nanos);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatHasSecondsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthathassecondsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasSeconds {
    
    @BeforeTemplate
    AbstractLongAssert<?> before(Duration duration, long seconds) {
        return assertThat(duration.toSeconds()).isEqualTo(seconds);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration, long seconds) {
        return assertThat(duration).hasSeconds(seconds);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatIsNegativeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthatisnegativerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsNegative {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Duration duration) {
        return assertThat(duration.isNegative()).isTrue();
    }
    
    @BeforeTemplate
    AbstractDurationAssert<?> before2(Duration duration) {
        return assertThat(duration).isLessThan(Duration.ZERO);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration) {
        return assertThat(duration).isNegative();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatIsPositiveRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthatispositiverecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsPositive {
    
    @BeforeTemplate
    AbstractDurationAssert<?> before(Duration duration) {
        return assertThat(duration).isGreaterThan(Duration.ZERO);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration) {
        return assertThat(duration).isPositive();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJDurationRulesRecipes$AssertThatIsZeroRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjdurationrulesrecipes$assertthatiszerorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsZero {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Duration duration) {
        return assertThat(duration.isZero()).isTrue();
    }
    
    @BeforeTemplate
    AbstractDurationAssert<?> before2(Duration duration) {
        return assertThat(duration).isEqualTo(Duration.ZERO);
    }
    
    @AfterTemplate
    AbstractDurationAssert<?> after(Duration duration) {
        return assertThat(duration).isZero();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes): These rules simplify and improve the readability of tests by using `Instant`-specific
 AssertJ assertion methods instead of generic assertions.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJInstantRules). 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes$AssertThatIsAfterOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes$assertthatisafterorequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsAfterOrEqualTo {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Instant actual, Instant other) {
        return assertThat(actual.isBefore(other)).isFalse();
    }
    
    @AfterTemplate
    AbstractInstantAssert<?> after(Instant actual, Instant other) {
        return assertThat(actual).isAfterOrEqualTo(other);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes$AssertThatIsAfterRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes$assertthatisafterrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsAfter {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Instant actual, Instant other) {
        return assertThat(actual.isAfter(other)).isTrue();
    }
    
    @AfterTemplate
    AbstractInstantAssert<?> after(Instant actual, Instant other) {
        return assertThat(actual).isAfter(other);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes$AssertThatIsBeforeOrEqualToRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes$assertthatisbeforeorequaltorecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsBeforeOrEqualTo {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Instant actual, Instant other) {
        return assertThat(actual.isAfter(other)).isFalse();
    }
    
    @AfterTemplate
    AbstractInstantAssert<?> after(Instant actual, Instant other) {
        return assertThat(actual).isBeforeOrEqualTo(other);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes$AssertThatIsBeforeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes$assertthatisbeforerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsBefore {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Instant actual, Instant other) {
        return assertThat(actual.isBefore(other)).isTrue();
    }
    
    @AfterTemplate
    AbstractInstantAssert<?> after(Instant actual, Instant other) {
        return assertThat(actual).isBefore(other);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes$AssertThatIsBetweenRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes$assertthatisbetweenrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsBetween {
    
    @BeforeTemplate
    AbstractInstantAssert<?> before(Instant actual, Instant start, Instant end) {
        return Refaster.anyOf(assertThat(actual).isAfterOrEqualTo(start).isBeforeOrEqualTo(end), assertThat(actual).isBeforeOrEqualTo(end).isAfterOrEqualTo(start));
    }
    
    @AfterTemplate
    AbstractInstantAssert<?> after(Instant actual, Instant start, Instant end) {
        return assertThat(actual).isBetween(start, end);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJInstantRulesRecipes$AssertThatIsStrictlyBetweenRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjinstantrulesrecipes$assertthatisstrictlybetweenrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsStrictlyBetween {
    
    @BeforeTemplate
    AbstractInstantAssert<?> before(Instant actual, Instant start, Instant end) {
        return Refaster.anyOf(assertThat(actual).isAfter(start).isBefore(end), assertThat(actual).isBefore(end).isAfter(start));
    }
    
    @AfterTemplate
    AbstractInstantAssert<?> after(Instant actual, Instant start, Instant end) {
        return assertThat(actual).isStrictlyBetween(start, end);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJMapRulesRecipes$AssertThatMapContainsOnlyKeyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjmaprulesrecipes$assertthatmapcontainsonlykeyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatMapContainsOnlyKey<K, V> {
    
    @BeforeTemplate
    AbstractCollectionAssert<?, Collection<? extends K>, K, ?> before(Map<K, V> map, K key) {
        return assertThat(map.keySet()).containsExactly(key);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    MapAssert<K, V> after(Map<K, V> map, K key) {
        return assertThat(map).containsOnlyKeys(key);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatHasSameHashCodeAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthathassamehashcodeasrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasSameHashCodeAs<T> {
    
    @BeforeTemplate
    AbstractIntegerAssert<?> before(T object1, T object2) {
        return assertThat(object1.hashCode()).isEqualTo(object2.hashCode());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object1, T object2) {
        return assertThat(object1).hasSameHashCodeAs(object2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsInstanceOf2Recipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisinstanceof2recipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsInstanceOf2<S, T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(T object, Class<S> clazz) {
        return assertThat(clazz.isInstance(object)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object, Class<S> clazz) {
        return assertThat(object).isInstanceOf(clazz);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsNotNullRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisnotnullrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsNotNull<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatIsNotSameAs")
    AbstractBooleanAssert<? extends AbstractBooleanAssert<?>> before(T object) {
        return Refaster.anyOf(assertThat(object == null).isFalse(), assertThat(object != null).isTrue());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object) {
        return assertThat(object).isNotNull();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsNotSameAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisnotsameasrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsNotSameAs<T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(T object1, T object2) {
        return Refaster.anyOf(assertThat(object1 == object2).isFalse(), assertThat(object1 != object2).isTrue());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object1, T object2) {
        return assertThat(object1).isNotSameAs(object2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsNullRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatisnullrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsNull<T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatIsSameAs")
    void before(T object) {
        assertThat(object == null).isTrue();
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatIsSameAs")
    void before2(T object) {
        assertThat(object != null).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    void after(T object) {
        assertThat(object).isNull();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJObjectRulesRecipes$AssertThatIsSameAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjobjectrulesrecipes$assertthatissameasrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsSameAs<T> {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(T object1, T object2) {
        return Refaster.anyOf(assertThat(object1 == object2).isTrue(), assertThat(object1 != object2).isFalse());
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ObjectAssert<T> after(T object1, T object2) {
        return assertThat(object1).isSameAs(object2);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes): These rules simplify and improve the readability of tests by using `Path`-specific
 AssertJ assertion methods instead of generic assertions.
[Source](https://error-prone.picnic.tech/refasterrules/AssertJPathRules). 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatDoesNotExistRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatdoesnotexistrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatDoesNotExist {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.exists(actual)).isFalse();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).doesNotExist();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatEndsWithRawRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatendswithrawrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatEndsWithRaw {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual, Path other) {
        return assertThat(actual.endsWith(other)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual, Path other) {
        return assertThat(actual).endsWithRaw(other);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatExistsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatexistsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatExists {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.exists(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).exists();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatHasFileNameRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthathasfilenamerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasFileName {
    
    @BeforeTemplate
    AbstractPathAssert<?> before(Path actual, String fileName) {
        return assertThat(actual.getFileName()).hasToString(fileName);
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual, String fileName) {
        return assertThat(actual).hasFileName(fileName);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatHasNoParentRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthathasnoparentrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasNoParent {
    
    @BeforeTemplate
    void before(Path actual) {
        assertThat(actual.getParent()).isNull();
    }
    
    @AfterTemplate
    void after(Path actual) {
        assertThat(actual).hasNoParent();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatHasParentRawRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthathasparentrawrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatHasParentRaw {
    
    @BeforeTemplate
    AbstractPathAssert<?> before(Path actual, Path expected) {
        return assertThat(actual.getParent()).isEqualTo(expected);
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual, Path expected) {
        return assertThat(actual).hasParentRaw(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsAbsoluteRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisabsoluterecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsAbsolute {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(actual.isAbsolute()).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isAbsolute();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsDirectoryRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisdirectoryrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsDirectory {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.isDirectory(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isDirectory();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsExecutableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisexecutablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsExecutable {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.isExecutable(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isExecutable();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsReadableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisreadablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsReadable {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.isReadable(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isReadable();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsRegularFileRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisregularfilerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsRegularFile {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.isRegularFile(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isRegularFile();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsRelativeRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatisrelativerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsRelative {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(actual.isAbsolute()).isFalse();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isRelative();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsSymbolicLinkRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatissymboliclinkrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsSymbolicLink {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.isSymbolicLink(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isSymbolicLink();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatIsWritableRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatiswritablerecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatIsWritable {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual) {
        return assertThat(Files.isWritable(actual)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual) {
        return assertThat(actual).isWritable();
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJPathRulesRecipes$AssertThatStartsWithRawRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjpathrulesrecipes$assertthatstartswithrawrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStartsWithRaw {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(Path actual, Path other) {
        return assertThat(actual.startsWith(other)).isTrue();
    }
    
    @AfterTemplate
    AbstractPathAssert<?> after(Path actual, Path other) {
        return assertThat(actual).startsWithRaw(other);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringDoesNotEndWithRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringdoesnotendwithrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStringDoesNotEndWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.endsWith(prefix)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).doesNotEndWith(prefix);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringDoesNotStartWithRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringdoesnotstartwithrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStringDoesNotStartWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.startsWith(prefix)).isFalse();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).doesNotStartWith(prefix);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringEndsWithRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringendswithrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStringEndsWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.endsWith(prefix)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).endsWith(prefix);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatStringStartsWithRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatstringstartswithrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStringStartsWith {
    
    @BeforeTemplate
    AbstractBooleanAssert<?> before(String string, String prefix) {
        return assertThat(string.startsWith(prefix)).isTrue();
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractStringAssert<?> after(String string, String prefix) {
        return assertThat(string).startsWith(prefix);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AbstractThrowableAssertCauseIsSameAsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$abstractthrowableassertcauseissameasrecipe): Recipe created for the following Refaster template:
```java
static final class AbstractThrowableAssertCauseIsSameAs {
    
    @BeforeTemplate
    @SuppressWarnings(value = "deprecation")
    AbstractThrowableAssert<?, ? extends Throwable> before(AbstractThrowableAssert<?, ? extends Throwable> throwableAssert, Throwable expected) {
        return throwableAssert.hasCauseReference(expected);
    }
    
    @AfterTemplate
    AbstractThrowableAssert<?, ? extends Throwable> after(AbstractThrowableAssert<?, ? extends Throwable> throwableAssert, Throwable expected) {
        return throwableAssert.cause().isSameAs(expected);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassReferenceCastRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/classrulesrecipes$classreferencecastrecipe): Prefer `Class#cast(Object)` method references over lambda expressions that require naming a variable. 
* [tech.picnic.errorprone.refasterrules.ClassRulesRecipes$ClassReferenceIsInstancePredicateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/classrulesrecipes$classreferenceisinstancepredicaterecipe): Prefer `Class#isInstance(Object)` method references over lambda expressions that require naming a variable. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorsMaxRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorsmaxrecipe): Prefer a method reference to `Comparators#max(Comparable, Comparable)` over calling `BinaryOperator#minBy(Comparator)` with `Comparator#naturalOrder()`. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$ComparatorsMinRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$comparatorsminrecipe): Prefer a method reference to `Comparators#min(Comparable, Comparable)` over calling `BinaryOperator#minBy(Comparator)` with `Comparator#naturalOrder()`. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EnumReferenceEqualityLambdaRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/equalityrulesrecipes$enumreferenceequalitylambdarecipe): Prefer reference-based equality for enums. 
* [tech.picnic.errorprone.refasterrules.EqualityRulesRecipes$EqualsPredicateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/equalityrulesrecipes$equalspredicaterecipe): Prefer `Object#equals(Object)` over the equivalent lambda function. 
* [tech.picnic.errorprone.refasterrules.JacksonRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jacksonrulesrecipes): Refaster rules related to Jackson expressions and statements.
[Source](https://error-prone.picnic.tech/refasterrules/JacksonRules). 
* [tech.picnic.errorprone.refasterrules.JacksonRulesRecipes$JsonNodeOptionalIntRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jacksonrulesrecipes$jsonnodeoptionalintrecipe): Prefer `JsonNode#optional(int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.JacksonRulesRecipes$JsonNodeOptionalStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/jacksonrulesrecipes$jsonnodeoptionalstringrecipe): Prefer `JsonNode#optional(String)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$IsNullFunctionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/nullrulesrecipes$isnullfunctionrecipe): Prefer `Objects#isNull(Object)` over the equivalent lambda function or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.NullRulesRecipes$NonNullFunctionRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/nullrulesrecipes$nonnullfunctionrecipe): Prefer `Objects#nonNull(Object)` over the equivalent lambda function or more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.OptionalRulesRecipes$OptionalOrElseThrowMethodReferenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/optionalrulesrecipes$optionalorelsethrowmethodreferencerecipe): Prefer `Optional#orElseThrow()` over the less explicit `Optional#get()`. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedBytesRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedbytesrecipe): Prefer JDK's `Arrays#compareUnsigned(byte[], byte[])` over third-party alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedIntsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedintsrecipe): Prefer JDK's `Arrays#compareUnsigned(int[], int[])` over third-party alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedLongsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedlongsrecipe): Prefer JDK's `Arrays#compareUnsigned(long[], long[])` over third-party alternatives. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes): Refaster rules related to expressions dealing with `RandomGenerator` instances.
[Source](https://error-prone.picnic.tech/refasterrules/RandomGeneratorRules). 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextDoubleRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextdoublerecipe): Prefer `RandomGenerator#nextDouble(double)` over alternatives that yield a smaller domain of values and may result in `Double#isInfinite() inifinity`. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextIntRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextintrecipe): Prefer `RandomGenerator#nextInt(int)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextLongRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextlongrecipe): Additionally, for large bounds, the unnecessary floating point arithmetic prevents some
 `long` values from being generated. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$EmptyStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$emptystringrecipe): Avoid unnecessary creation of new empty `String` objects; use the empty string literal instead. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIdentityRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringidentityrecipe): Avoid unnecessary creation of new `String` objects. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsBlankRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisblankrecipe): Prefer `String#isBlank()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyPredicateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptypredicaterecipe): Prefer a method reference to `String#isEmpty()` over the equivalent lambda function. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsNotEmptyPredicateRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisnotemptypredicaterecipe): Prefer a method reference to `String#isEmpty()` over the equivalent lambda function. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfMethodReferenceRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofmethodreferencerecipe): Prefer direct delegation to `String#valueOf(Object)` over the indirection introduced by `Objects#toString(Object)`. 
* [tech.picnic.errorprone.refasterrules.SuggestedFixRulesRecipes$SuggestedFixToBuilderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/suggestedfixrulesrecipes$suggestedfixtobuilderrecipe): Prefer `SuggestedFix#toBuilder()`} over more contrived alternatives. 

## Removed Recipes

* **io.moderne.devcenter.SecurityOriginalStarter**: This is the same set of recipes as the original DevCenter security card. 
* **org.openrewrite.java.testing.cleanup.AssertLiteralBooleanToFailRecipe**: Using fail is more direct and clear. 
* **org.openrewrite.java.testing.mockito.NoInitializationForInjectMock**: Remove either the `@InjectMocks` annotation from fields, or the initializer, based on the initializer.
 * In the case of a no-args constructor, remove the initializer and retain the annotation.
 * In the case of any other initializer, remove the annotation and retain the initializer. 
* **tech.picnic.errorprone.refasterrules.AssertJEnumerableRulesRecipes$EnumerableAssertIsEmptyRecipe**: Recipe created for the following Refaster template:
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
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionAddAllToCollectionBlockRecipe**: Recipe created for the following Refaster template:
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
* **tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionRemoveAllFromCollectionBlockRecipe**: Recipe created for the following Refaster template:
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

## Changed Recipes

* [org.openrewrite.java.dependencies.DependencyVulnerabilityCheck](https://docs.openrewrite.org/recipes/java/dependencies/dependencyvulnerabilitycheck) was changed:
  * Old Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
  * New Options:
    * `maximumUpgradeDelta: { type: UpgradeDelta, required: false }`
    * `overrideTransitive: { type: Boolean, required: false }`
    * `preferDirectUpgrade: { type: Boolean, required: false }`
    * `scope: { type: String, required: false }`
* [org.openrewrite.java.logging.logback.ConfigureLoggerLevel](https://docs.openrewrite.org/recipes/java/logging/logback/configureloggerlevel) was changed:
  * Old Options:
    * `className: { type: String, required: true }`
    * `logLevel: { type: LogLevel, required: true }`
  * New Options:
    * `className: { type: String, required: true }`
    * `filePattern: { type: String, required: false }`
    * `logLevel: { type: LogLevel, required: true }`