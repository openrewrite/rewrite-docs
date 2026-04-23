---
description: What's changed in OpenRewrite version 8.80.0.
---

# 8.80.0 release (2026-04-21)

_Total recipe count: 4332_

:::info
This changelog only shows what recipes have been added, removed, or changed. OpenRewrite may do releases that do not include these types of changes. To see these changes, please go to the [releases page](https://github.com/openrewrite/rewrite/releases).
:::



## New Recipes

* [org.openrewrite.FindStyles](https://docs.openrewrite.org/recipes/core/findstyles): Find and report the styles attached to each source file. Styles are output as valid OpenRewrite style YAML that can be used directly in rewrite.yml configuration. 
* [org.openrewrite.apache.commons.PreferJavaStandardLibrary](https://docs.openrewrite.org/recipes/apache/commons/preferjavastandardlibrary): Prefer the Java standard library instead of Apache Commons. These recipes replace various Apache Commons utilities with their JDK equivalents, where available in Java 11+. 
* [org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$ReadFileToStringWithCharsetRecipe](https://docs.openrewrite.org/recipes/apache/commons/io/apachecommonsfileutilsrecipes$readfiletostringwithcharsetrecipe): Replace deprecated `FileUtils.readFileToString(File)` with `FileUtils.readFileToString(File, StandardCharsets.UTF_8)`. 
* [org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$ReadLinesWithCharsetRecipe](https://docs.openrewrite.org/recipes/apache/commons/io/apachecommonsfileutilsrecipes$readlineswithcharsetrecipe): Replace deprecated `FileUtils.readLines(File)` with `FileUtils.readLines(File, StandardCharsets.UTF_8)`. 
* [org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteAppendWithCharsetRecipe](https://docs.openrewrite.org/recipes/apache/commons/io/apachecommonsfileutilsrecipes$writeappendwithcharsetrecipe): Replace deprecated `FileUtils.write(File, CharSequence, boolean)` with `FileUtils.write(File, CharSequence, StandardCharsets.UTF_8, boolean)`. 
* [org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteStringToFileAppendWithCharsetRecipe](https://docs.openrewrite.org/recipes/apache/commons/io/apachecommonsfileutilsrecipes$writestringtofileappendwithcharsetrecipe): Replace deprecated `FileUtils.writeStringToFile(File, String, boolean)` with `FileUtils.writeStringToFile(File, String, StandardCharsets.UTF_8, boolean)`. 
* [org.openrewrite.apache.commons.io.ApacheCommonsFileUtilsRecipes$WriteWithCharsetRecipe](https://docs.openrewrite.org/recipes/apache/commons/io/apachecommonsfileutilsrecipes$writewithcharsetrecipe): Replace deprecated `FileUtils.write(File, CharSequence)` with `FileUtils.write(File, CharSequence, StandardCharsets.UTF_8, false)`. 
* [org.openrewrite.github.GitHubActionsBestPractices](https://docs.openrewrite.org/recipes/github/githubactionsbestpractices): Applies best practices to GitHub Actions workflows, including enabling dependency caching, using cached distributions, finding missing timeouts, removing unused inputs, and preferring block-style job dependencies. 
* [org.openrewrite.github.PreferBlockStyleJobDependencies](https://docs.openrewrite.org/recipes/github/preferblockstylejobdependencies): Convert flow-style `needs` sequences (e.g. `needs: [dep1, dep2]`) to block-style in GitHub Actions workflow jobs when a job depends on more than one other job. Block style improves readability and produces cleaner diffs in source control. 
* [org.openrewrite.hibernate.MigrateDialect](https://docs.openrewrite.org/recipes/hibernate/migratedialect): Migrate all Hibernate version-specific dialect classes to their generic equivalents. Version-specific dialects were deprecated in Hibernate 6.0 and removed in Hibernate 6.2. 
* [org.openrewrite.java.jackson.UpgradeJackson_2_3_ObjectNodeMethodRenames](https://docs.openrewrite.org/recipes/java/jackson/upgradejackson_2_3_objectnodemethodrenames): Rename ObjectNode methods deprecated in Jackson 2 and removed in 3.x (`put(String, JsonNode)` to `set`, `putAll` to `setAll`). 
* [org.openrewrite.java.migrate.AddSurefireFailsafeArgLine](https://docs.openrewrite.org/recipes/java/migrate/addsurefirefailsafeargline): Adds the specified arguments to the `argLine` configuration of the Maven Surefire and Failsafe plugins, merging with any existing argLine value without duplicating arguments. 
* [org.openrewrite.java.migrate.AddSurefireFailsafeArgLineForMockito](https://docs.openrewrite.org/recipes/java/migrate/addsurefirefailsafearglineformockito): Adds `--add-opens` JVM arguments required by Mockito and ByteBuddy to the Maven Surefire and Failsafe plugin `argLine` configuration. Only applied when the project depends on Mockito. 
* [org.openrewrite.java.migrate.UpgradeBuildToJava25ForKotlin](https://docs.openrewrite.org/recipes/java/migrate/upgradebuildtojava25forkotlin): Upgrades build files to Java 25 for Kotlin modules already on Kotlin 2.3 or later. 
* [org.openrewrite.java.migrate.guava.NoGuavaImmutableListCopyOf](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaimmutablelistcopyof): Replaces `.common.collect.ImmutableList.copyOf(..)` if the returned type is immediately down-cast. 
* [org.openrewrite.java.migrate.guava.NoGuavaImmutableMapCopyOf](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaimmutablemapcopyof): Replaces `.common.collect.ImmutableMap.copyOf(..)` if the returned type is immediately down-cast. 
* [org.openrewrite.java.migrate.guava.NoGuavaImmutableSetCopyOf](https://docs.openrewrite.org/recipes/java/migrate/guava/noguavaimmutablesetcopyof): Replaces `.common.collect.ImmutableSet.copyOf(..)` if the returned type is immediately down-cast. 
* [org.openrewrite.java.migrate.lang.RenameUnderscoreIdentifier](https://docs.openrewrite.org/recipes/java/migrate/lang/renameunderscoreidentifier): Renames single-underscore identifiers to double-underscore in Java source files with source compatibility of Java 8 or below. In Java 9+, `_` is a reserved keyword and causes a compile error. 
* [org.openrewrite.java.migrate.search.ModuleHasKotlinSource](https://docs.openrewrite.org/recipes/java/migrate/search/modulehaskotlinsource): Marks all files in modules that contain at least one Kotlin source file (`.kt`). Intended as a precondition to scope recipes to projects that actually compile Kotlin, as opposed to projects that merely pick up `kotlin-stdlib` transitively. 
* [org.openrewrite.java.spring.boot2.AddSpringBootStarterValidation](https://docs.openrewrite.org/recipes/java/spring/boot2/addspringbootstartervalidation): Add `spring-boot-starter-validation` when validation constraints are used, unless the project already declares an explicit validation API dependency. 
* [org.openrewrite.java.spring.boot3.RenameLogbackToLogbackSpring](https://docs.openrewrite.org/recipes/java/spring/boot3/renamelogbacktologbackspring): Spring Boot only processes Spring-specific logback extensions (`<springProfile>`, `<springProperty>`) when the configuration file is named `logback-spring.xml`. A plain `logback.xml` is loaded too early by logback itself, before Spring's `Environment` is ready, so these extensions are silently ignored. This recipe renames `logback.xml` to `logback-spring.xml` when Spring extensions are detected. 
* [org.openrewrite.java.testing.junit5.UpdateMockWebServerDispatcher](https://docs.openrewrite.org/recipes/java/testing/junit5/updatemockwebserverdispatcher): In mockwebserver3 5.x, `Dispatcher.dispatch()` returns `MockResponse`, not `MockResponse.Builder`. Pre-pin the return type to `mockwebserver3.MockResponse` and wrap return expressions with `.build()`, so the subsequent blanket `MockResponse` → `Builder` type change leaves `dispatch()` alone. 
* [org.openrewrite.java.testing.mockito.AddMockitoSettingsWithWarnStrictness](https://docs.openrewrite.org/recipes/java/testing/mockito/addmockitosettingswithwarnstrictness): Adds `@MockitoSettings(strictness = Strictness.WARN)` to test classes that have `@ExtendWith(MockitoExtension.class)` but do not already have a `@MockitoSettings` annotation. This preserves the lenient stubbing behavior from Mockito 1.x/2.x migrations and prevents `UnnecessaryStubbingException` from strict stubbing defaults. 
* [org.openrewrite.java.testing.mockito.AddMockitoSettingsWithWarnStrictnessForLegacyMockito](https://docs.openrewrite.org/recipes/java/testing/mockito/addmockitosettingswithwarnstrictnessforlegacymockito): Adds `@MockitoSettings(strictness = Strictness.WARN)` to test classes annotated with `@ExtendWith(MockitoExtension.class)` only when the module depends on a pre-3.0 version of Mockito. This preserves the lenient stubbing behavior from Mockito 1.x/2.x and prevents `UnnecessaryStubbingException` errors once MockitoExtension's strict stubbing default kicks in. 
* [org.openrewrite.java.testing.testcontainers.MigrateToKafkaNative](https://docs.openrewrite.org/recipes/java/testing/testcontainers/migratetokafkanative): Replace `confluentinc/cp-kafka` with the much faster `apache/kafka-native` image and migrate from `org.testcontainers.containers.KafkaContainer` to `org.testcontainers.kafka.KafkaContainer`. 
* [org.openrewrite.java.testing.testcontainers.ReplaceContainerImageName](https://docs.openrewrite.org/recipes/java/testing/testcontainers/replacecontainerimagename): Replace a Docker image name in `DockerImageName.parse(image)` or `new DockerImageName(image)` constructor arguments for a specific container class. 
* [org.openrewrite.javascript.dependencies.remove-dependency](https://docs.openrewrite.org/recipes/javascript/dependencies/remove-dependency): Removes a dependency from `package.json` and updates the lock file by running the package manager. 
* [org.openrewrite.quarkus.spring.ConfigurationPropertiesToConfigMapping](https://docs.openrewrite.org/recipes/quarkus/spring/configurationpropertiestoconfigmapping): Converts Spring Boot @ConfigurationProperties classes to Quarkus @ConfigMapping interfaces. Changes the class to an interface, converts getter methods to interface method declarations, and removes fields, setters, and constructors. 
* [org.openrewrite.quarkus.spring.MongoRepositoryToPanacheMongoRepository](https://docs.openrewrite.org/recipes/quarkus/spring/mongorepositorytopanachemongorepository): Transforms Spring Data `MongoRepository<T, ID>` interfaces to Quarkus `PanacheMongoRepository<T>`, dropping the ID type parameter. 
* [org.openrewrite.staticanalysis.RemoveMethodsOnlyCallSuper](https://docs.openrewrite.org/recipes/staticanalysis/removemethodsonlycallsuper): Methods that override a parent method but only call `super` with the same arguments are redundant and should be removed. 
* [org.openrewrite.staticanalysis.RemoveUnusedLabels](https://docs.openrewrite.org/recipes/staticanalysis/removeunusedlabels): Remove labels that are not referenced by any `break` or `continue` statement. 
* [org.openrewrite.staticanalysis.SillyEqualsCheck](https://docs.openrewrite.org/recipes/staticanalysis/sillyequalscheck): Detects `.equals()` calls that compare incompatible types and will always return `false`. Replaces `.equals(null)` with `== null` and array `.equals()` with `Arrays.equals()`. Flags comparisons between unrelated types or between arrays and non-arrays. 
* [org.openrewrite.staticanalysis.SingleLineCommentSpacing](https://docs.openrewrite.org/recipes/staticanalysis/singlelinecommentspacing): Ensures there is exactly one space after // in single-line comments when missing. 
* [org.openrewrite.staticanalysis.StaticAccessViaInstance](https://docs.openrewrite.org/recipes/staticanalysis/staticaccessviainstance): Accessing static fields or calling static methods on an instance reference is misleading. Static members should be accessed using the declaring class name instead. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatContainsAllRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatcontainsallrecipe): Prefer `AbstractIterableAssert#containsAll(Iterable)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatContainsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatcontainsrecipe): Prefer `ObjectEnumerableAssert#contains(Object[])` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJIterableRulesRecipes$AssertThatDoesNotContainRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjiterablerulesrecipes$assertthatdoesnotcontainrecipe): Prefer `ObjectEnumerableAssert#doesNotContain(Object[])` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsAnyOfVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainsanyofvarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsAnyOfVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsAnyOf")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsAnyOf")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsAnyOf")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsAnyOf(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsAnyOf(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyInAnyOrderVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainsexactlyinanyordervarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyInAnyOrderVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsExactlyInAnyOrder")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsExactlyInAnyOrder")
    AbstractCollectionAssert<?, ?, T, ?> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Multiset<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactlyInAnyOrder(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsExactlyOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsExactlyInAnyOrder(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsExactlyVarargsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainsexactlyvarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsExactlyVarargs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsExactly")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsExactly(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsExactly(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsOnlyVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainsonlyvarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsOnlyVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsOnly")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsOnly")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsOnly")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsOnly(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsOnly(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSequenceVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainssequencevarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSequenceVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsSequence")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSequence(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsSequence(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsSubsequenceVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainssubsequencevarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsSubsequenceVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContainsSubsequence")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).containsSubsequence(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableContainsOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).containsSubsequence(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamContainsVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamcontainsvarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamContainsVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContains")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).contains(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContains")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).contains(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamContains")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).contains(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).contains(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainSequenceVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamdoesnotcontainsequencevarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainSequenceVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContainSequence")
    ListAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContainSequence(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @SuppressWarnings(value = "ObjectEnumerableDoesNotContainOneElement")
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).doesNotContainSequence(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamDoesNotContainVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamdoesnotcontainvarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamDoesNotContainVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContain")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContain")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamDoesNotContain")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).doesNotContain(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).doesNotContain(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJRulesRecipes$AssertThatStreamIsSubsetOfVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjrulesrecipes$assertthatstreamissubsetofvarargsrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatStreamIsSubsetOfVarArgs<S, T extends S, U extends T> {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamIsSubsetOf")
    IterableAssert<T> before(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Iterable<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamIsSubsetOf")
    AbstractCollectionAssert<?, Collection<? extends T>, T, ObjectAssert<T>> before2(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends Collection<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(Refaster.asVarargs(elements));
    }
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatStreamIsSubsetOf")
    ListAssert<T> before3(Stream<S> stream, @Repeated
    U elements, Collector<S, ?, ? extends List<T>> collector) {
        return assertThat(stream.collect(collector)).isSubsetOf(Refaster.asVarargs(elements));
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    ListAssert<S> after(Stream<S> stream, @Repeated
    U elements) {
        return assertThat(stream).isSubsetOf(elements);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatIsBlankRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisblankrecipe): Prefer `AbstractStringAssert#isBlank()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatIsEqualToIgnoringCaseRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisequaltoignoringcaserecipe): Prefer `AbstractStringAssert#isEqualToIgnoringCase(CharSequence)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatIsNotBlankRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisnotblankrecipe): Prefer `AbstractStringAssert#isNotBlank()` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJStringRulesRecipes$AssertThatIsNotEqualToIgnoringCaseRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjstringrulesrecipes$assertthatisnotequaltoignoringcaserecipe): Prefer `AbstractStringAssert#isNotEqualToIgnoringCase(CharSequence)` over less explicit alternatives. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AbstractThrowableAssertHasMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$abstractthrowableasserthasmessagerecipe): Recipe created for the following Refaster template:
```java
static final class AbstractThrowableAssertHasMessage {
    
    @BeforeTemplate
    AbstractThrowableAssert<?, ? extends Throwable> before(AbstractThrowableAssert<?, ? extends Throwable> abstractThrowableAssert, String message, @Repeated
    Object parameters) {
        return abstractThrowableAssert.hasMessage(message.formatted(parameters));
    }
    
    @AfterTemplate
    AbstractThrowableAssert<?, ? extends Throwable> after(AbstractThrowableAssert<?, ? extends Throwable> abstractThrowableAssert, String message, @Repeated
    Object parameters) {
        return abstractThrowableAssert.hasMessage(message, parameters);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AbstractThrowableAssertWithFailMessageRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$abstractthrowableassertwithfailmessagerecipe): Recipe created for the following Refaster template:
```java
static final class AbstractThrowableAssertWithFailMessage {
    
    @BeforeTemplate
    AbstractThrowableAssert<?, ? extends Throwable> before(AbstractThrowableAssert<?, ? extends Throwable> abstractThrowableAssert, String message, @Repeated
    Object args) {
        return abstractThrowableAssert.withFailMessage(message.formatted(args));
    }
    
    @AfterTemplate
    AbstractThrowableAssert<?, ? extends Throwable> after(AbstractThrowableAssert<?, ? extends Throwable> abstractThrowableAssert, String message, @Repeated
    Object args) {
        return abstractThrowableAssert.withFailMessage(message, args);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByHasMessageParametersRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyhasmessageparametersrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByAsInstanceOfThrowable")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message, @Repeated
    Object parameters) {
        return assertThatExceptionOfType(exceptionType).isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, Class<? extends Throwable> exceptionType, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(exceptionType).hasMessage(message, parameters);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIOExceptionHasMessageParametersRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyioexceptionhasmessageparametersrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIOExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIOException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatIOException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IOException.class).hasMessage(message, parameters);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageNotContainingAnyRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessagenotcontaininganyrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessageNotContainingAny {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, @Repeated
    CharSequence values) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessageNotContainingAny(values);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, @Repeated
    CharSequence values) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessageNotContainingAny(values);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalArgumentExceptionHasMessageParametersRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalargumentexceptionhasmessageparametersrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalArgumentExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalArgumentException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatIllegalArgumentException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalArgumentException.class).hasMessage(message, parameters);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByIllegalStateExceptionHasMessageParametersRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbyillegalstateexceptionhasmessageparametersrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByIllegalStateExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByIllegalStateException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatIllegalStateException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(IllegalStateException.class).hasMessage(message, parameters);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.AssertJThrowingCallableRulesRecipes$AssertThatThrownByNullPointerExceptionHasMessageParametersRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/assertjthrowingcallablerulesrecipes$assertthatthrownbynullpointerexceptionhasmessageparametersrecipe): Recipe created for the following Refaster template:
```java
static final class AssertThatThrownByNullPointerExceptionHasMessageParameters {
    
    @BeforeTemplate
    @SuppressWarnings(value = "AssertThatThrownByNullPointerException")
    AbstractObjectAssert<?, ?> before(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatNullPointerException().isThrownBy(throwingCallable).withMessage(message, parameters);
    }
    
    @AfterTemplate
    @UseImportPolicy(value = STATIC_IMPORT_ALWAYS)
    AbstractObjectAssert<?, ?> after(ThrowingCallable throwingCallable, String message, @Repeated
    Object parameters) {
        return assertThatThrownBy(throwingCallable).isInstanceOf(NullPointerException.class).hasMessage(message, parameters);
    }
}
```
. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionsDisjointRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionsdisjointrecipe): Prefer `Collections#disjoint(Collection, Collection)` over non-JDK or less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SetOfVarargsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/collectionrulesrecipes$setofvarargsrecipe): Prefer `Set#of(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$GreatestNaturalOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$greatestnaturalorderrecipe): Prefer `Comparators#greatest(int, Comparator)` with `Comparator#naturalOrder()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$GreatestRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$greatestrecipe): Prefer `Comparators#greatest(int, Comparator)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$LeastNaturalOrderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$leastnaturalorderrecipe): Prefer `Comparators#least(int, Comparator)` with `Comparator#naturalOrder()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$LeastRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$leastrecipe): Prefer `Comparators#least(int, Comparator)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MaxOfVarargsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$maxofvarargsrecipe): Avoid unnecessary creation of a `Stream` to determine the maximum of a known collection of values. 
* [tech.picnic.errorprone.refasterrules.ComparatorRulesRecipes$MinOfVarargsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/comparatorrulesrecipes$minofvarargsrecipe): Avoid unnecessary creation of a `Stream` to determine the minimum of a known collection of values. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewbufferedreaderrecipe): Prefer `Files#newBufferedReader(Path)` over more verbose or contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderWithCharsetRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewbufferedreaderwithcharsetrecipe): Prefer `Files#newBufferedReader(Path, Charset)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewInputStreamPathOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewinputstreampathofrecipe): Prefer `Files#newInputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewInputStreamToPathRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewinputstreamtopathrecipe): Prefer `Files#newInputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewOutputStreamPathOfRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewoutputstreampathofrecipe): Prefer `Files#newOutputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewOutputStreamToPathRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$filesnewoutputstreamtopathrecipe): Prefer `Files#newOutputStream(Path, OpenOption...)` over less idiomatic alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathOfStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$pathofstringrecipe): Prefer the more idiomatic `Path#of(String, String...)` over `Paths#get(String, String...)`. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathResolveSiblingPathRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$pathresolvesiblingpathrecipe): Prefer `Path#resolveSibling(Path)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.FileRulesRecipes$PathResolveSiblingStringRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/filerulesrecipes$pathresolvesiblingstringrecipe): Prefer `Path#resolveSibling(String)` over the more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableEnumSetRulesRecipes$SetsImmutableEnumSetVarArgsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutableenumsetrulesrecipes$setsimmutableenumsetvarargsrecipe): Prefer `Sets#immutableEnumSet(Enum, Enum[])` for enum collections to take advantage of the internally used `EnumSet`. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListSortedCopyOfIteratorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipes$immutablelistsortedcopyofiteratorrecipe): Prefer `ImmutableList.sortedCopyOf(iterable).iterator()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableListRulesRecipes$ImmutableListSortedCopyOfIteratorWithComparatorRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablelistrulesrecipes$immutablelistsortedcopyofiteratorwithcomparatorrecipe): Prefer `ImmutableList.sortedCopyOf(cmp, iterable).iterator()` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.ImmutableMapRulesRecipes$ImmutableMapOfEntriesRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/immutablemaprulesrecipes$immutablemapofentriesrecipe): Prefer `ImmutableMap#ofEntries(Map.Entry[])` over alternatives that don't communicate the immutability of the resulting map at the type level. 
* [tech.picnic.errorprone.refasterrules.JUnitRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junitrulesrecipes): Refaster rules related to JUnit expressions and statements.
[Source](https://error-prone.picnic.tech/refasterrules/JUnitRules). 
* [tech.picnic.errorprone.refasterrules.JUnitRulesRecipes$ArgumentsEnumerationRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/junitrulesrecipes$argumentsenumerationrecipe): Prefer statically imported `Arguments#arguments` over `Arguments#of` calls. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$MathClampDoubleRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$mathclampdoublerecipe): Prefer `Math#clamp(double, double, double)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$MathClampFloatRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$mathclampfloatrecipe): Prefer `Math#clamp(float, float, float)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$MathClampIntRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$mathclampintrecipe): Prefer `Math#clamp(long, int, int)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$MathClampLongRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/primitiverulesrecipes$mathclamplongrecipe): Prefer `Math#clamp(long, long, long)` over more verbose alternatives. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextDoubleWithOriginRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextdoublewithoriginrecipe): Prefer `RandomGenerator#nextDouble(double origin, double bound)` over alternatives that may silently yield an ununiform domain of values. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextIntWithOriginRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextintwithoriginrecipe): Prefer `RandomGenerator#nextInt(int origin, int bound)` over alternatives that may silently yield values outside the intended domain. 
* [tech.picnic.errorprone.refasterrules.RandomGeneratorRulesRecipes$RandomGeneratorNextLongWithOriginRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/randomgeneratorrulesrecipes$randomgeneratornextlongwithoriginrecipe): Prefer `RandomGenerator#nextLong(long origin, long bound)` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustArrayRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustarrayrecipe): Prefer `Flux#just(Object[])` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamCollectLeastNaturalOrderStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamcollectleastnaturalorderstreamrecipe): Prefer `Comparators#least(int, Comparator)` over alternatives that require space proportional to the size of the input stream, rather than space proportional to the result stream. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamCollectLeastStreamRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamcollectleaststreamrecipe): Prefer `Comparators#least(int, Comparator)` over alternatives that require space proportional to the size of the input stream, rather than space proportional to the result stream. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFindFirstRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamfindfirstrecipe): Prefer `Stream#findFirst()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamSortedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamsortedrecipe): Prefer `Stream#sorted()` over more contrived alternatives. 
* [tech.picnic.errorprone.refasterrules.StringBuilderRulesRecipes](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringbuilderrulesrecipes): Refaster rules related to expressions dealing with `StringBuilder`s.
[Source](https://error-prone.picnic.tech/refasterrules/StringBuilderRules). 
* [tech.picnic.errorprone.refasterrules.StringBuilderRulesRecipes$StringBuilderRepeatRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringbuilderrulesrecipes$stringbuilderrepeatrecipe): <strong>Warning:</strong> this rule is not behavior preserving: while the original code
 throws a `NullPointerException` if the repeated string is `null`, the replacement
 code will repeat the literal string `"null"`. 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringFormattedRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringformattedrecipe): Prefer `String#formatted(Object...)` over `String#format(String, Object...)`, as the former works more nicely with text blocks, while the latter does not appear advantageous in any circumstance (assuming one targets JDK 15+). 
* [tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringJoinDelimiterVarargsRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringjoindelimitervarargsrecipe): Prefer `String#join(CharSequence, CharSequence...)` over less efficient alternatives. 
* [tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$RequestHeadersUriSpecUriRecipe](https://docs.openrewrite.org/recipes/tech/picnic/errorprone/refasterrules/webclientrulesrecipes$requestheadersurispecurirecipe): Don't unnecessarily use `RequestHeadersUriSpec#uri(Function)`. 

## Removed Recipes

* **org.openrewrite.github.PreferSecretsInheritWorkflow**: Pass all secrets to a reusable workflow using `secrets: inherit`. See [Simplify using secrets with reusable workflows](https://github.blog/changelog/2022-05-03-github-actions-simplify-using-secrets-with-reusable-workflows/) for details. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$DisjointCollectionsRecipe**: Don't unnecessarily copy collections before passing them to `Collections#disjoint(Collection, Collection)`. 
* **tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$DisjointSetsRecipe**: Prefer `Collections#disjoint(Collection, Collection)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderPathOfRecipe**: Prefer `Files#newBufferedReader(Path)` over more verbose or contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderPathOfWithCharsetRecipe**: Prefer `Files#newBufferedReader(Path, Charset)` over more contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderToPathRecipe**: Prefer `Files#newBufferedReader(Path)` over more verbose or contrived alternatives. 
* **tech.picnic.errorprone.refasterrules.FileRulesRecipes$FilesNewBufferedReaderToPathWithCharsetRecipe**: Prefer `Files#newBufferedReader(Path, Charset)` over more contrived alternatives. 
