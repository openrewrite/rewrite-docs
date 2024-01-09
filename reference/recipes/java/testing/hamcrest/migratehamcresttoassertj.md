# Migrate to AssertJ assertions

**org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ**

_Migrate Hamcrest `assertThat(..)` to AssertJ `Assertions`._

### Tags

* testing
* assertj
* hamcrest

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/hamcrest.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.1.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.1.5

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.6.4") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.1.5")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.1.5</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe MigrateHamcrestToAssertJ
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove Hamcrest `is(Matcher)`](../../../java/testing/hamcrest/removeismatcher.md)
* [Migrate Hamcrest `is(Object)` to AssertJ](../../../java/testing/hamcrest/hamcrestismatchertoassertj.md)
* [Migrate `anyOf` Hamcrest Matcher to AssertJ](../../../java/testing/hamcrest/hamcrestofmatcherstoassertj.md)
* [Migrate Hamcrest `assertThat(boolean, Matcher)` to AssertJ](../../../java/testing/hamcrest/assertthatbooleantoassertj.md)
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `comparesEqualTo`
  * assertion: `isEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `equalTo`
  * assertion: `isEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `greaterThanOrEqualTo`
  * assertion: `isGreaterThanOrEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `greaterThan`
  * assertion: `isGreaterThan`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasToString`
  * assertion: `hasToString`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `lessThanOrEqualTo`
  * assertion: `isLessThanOrEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `lessThan`
  * assertion: `isLessThan`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `notNullValue`
  * assertion: `isNotNull`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `not`
  * assertion: `isNotEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `nullValue`
  * assertion: `isNull`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `sameInstance`
  * assertion: `isSameAs`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `instanceOf`
  * assertion: `isInstanceOf`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `isA`
  * assertion: `isInstanceOf`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `arrayContaining`
  * assertion: `containsExactly`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `arrayContainingInAnyOrder`
  * assertion: `containsExactlyInAnyOrder`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `arrayWithSize`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `emptyArray`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasItemInArray`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `blankString`
  * assertion: `isBlank`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `containsString`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `containsStringIgnoringCase`
  * assertion: `containsIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `emptyOrNullString`
  * assertion: `isNullOrEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `emptyString`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `endsWith`
  * assertion: `endsWith`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `endsWithIgnoringCase`
  * assertion: `endsWithIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `equalToIgnoringCase`
  * assertion: `isEqualToIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `equalToIgnoringWhiteSpace`
  * assertion: `isEqualToIgnoringWhitespace`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasLength`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `isEmptyString`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `isEmptyOrNullString`
  * assertion: `isNullOrEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `matchesPattern`
  * assertion: `matches`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `matchesRegex`
  * assertion: `matches`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `startsWith`
  * assertion: `startsWith`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `startsWithIgnoringCase`
  * assertion: `startsWithIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `contains`
  * assertion: `containsExactly`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `containsInAnyOrder`
  * assertion: `containsExactlyInAnyOrder`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `empty`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasSize`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasItem`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasItems`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `in`
  * assertion: `isIn`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `isIn`
  * assertion: `isIn`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasEntry`
  * assertion: `containsEntry`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasKey`
  * assertion: `containsKey`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `hasValue`
  * assertion: `containsValue`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `aMapWithSize`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `anEmptyMap`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj.md)
  * matcher: `closeTo`
  * assertion: `isCloseTo`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `equalTo`
  * assertion: `isNotEqualTo`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `hasToString`
  * assertion: `doesNotHaveToString`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `in`
  * assertion: `isNotIn`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `isIn`
  * assertion: `isNotIn`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `instanceOf`
  * assertion: `isNotInstanceOf`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `nullValue`
  * assertion: `isNotNull`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `sameInstance`
  * assertion: `isNotSameAs`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `equalToIgnoringCase`
  * assertion: `isNotEqualToIgnoringCase`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `equalToIgnoringWhiteSpace`
  * assertion: `isNotEqualToIgnoringWhitespace`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `containsString`
  * assertion: `doesNotContain`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `containsStringIgnoringCase`
  * assertion: `doesNotContainIgnoringCase`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `startsWith`
  * assertion: `doesNotStartWith`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `endsWith`
  * assertion: `doesNotEndWith`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `matchesPattern`
  * assertion: `doesNotMatch`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `matchesRegex`
  * assertion: `doesNotMatch`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `blankString`
  * assertion: `isNotBlank`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj.md)
  * notMatcher: `emptyString`
  * assertion: `isNotEmpty`
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency.md)
  * groupId: `org.assertj`
  * artifactId: `assertj-core`
  * version: `3.x`
  * onlyIfUsing: `org.assertj.core.api.Assertions`
  * acceptTransitive: `true`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ
displayName: Migrate to AssertJ assertions
description: Migrate Hamcrest `assertThat(..)` to AssertJ `Assertions`.
tags:
  - testing
  - assertj
  - hamcrest
recipeList:
  - org.openrewrite.java.testing.hamcrest.RemoveIsMatcher
  - org.openrewrite.java.testing.hamcrest.HamcrestIsMatcherToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestOfMatchersToAssertJ
  - org.openrewrite.java.testing.hamcrest.AssertThatBooleanToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: comparesEqualTo
      assertion: isEqualTo
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: equalTo
      assertion: isEqualTo
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: greaterThanOrEqualTo
      assertion: isGreaterThanOrEqualTo
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: greaterThan
      assertion: isGreaterThan
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasToString
      assertion: hasToString
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: lessThanOrEqualTo
      assertion: isLessThanOrEqualTo
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: lessThan
      assertion: isLessThan
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: notNullValue
      assertion: isNotNull
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: not
      assertion: isNotEqualTo
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: nullValue
      assertion: isNull
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: sameInstance
      assertion: isSameAs
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: instanceOf
      assertion: isInstanceOf
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: isA
      assertion: isInstanceOf
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: arrayContaining
      assertion: containsExactly
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: arrayContainingInAnyOrder
      assertion: containsExactlyInAnyOrder
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: arrayWithSize
      assertion: hasSize
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: emptyArray
      assertion: isEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasItemInArray
      assertion: contains
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: blankString
      assertion: isBlank
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: containsString
      assertion: contains
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: containsStringIgnoringCase
      assertion: containsIgnoringCase
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: emptyOrNullString
      assertion: isNullOrEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: emptyString
      assertion: isEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: endsWith
      assertion: endsWith
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: endsWithIgnoringCase
      assertion: endsWithIgnoringCase
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: equalToIgnoringCase
      assertion: isEqualToIgnoringCase
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: equalToIgnoringWhiteSpace
      assertion: isEqualToIgnoringWhitespace
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasLength
      assertion: hasSize
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: isEmptyString
      assertion: isEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: isEmptyOrNullString
      assertion: isNullOrEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: matchesPattern
      assertion: matches
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: matchesRegex
      assertion: matches
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: startsWith
      assertion: startsWith
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: startsWithIgnoringCase
      assertion: startsWithIgnoringCase
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: contains
      assertion: containsExactly
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: containsInAnyOrder
      assertion: containsExactlyInAnyOrder
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: empty
      assertion: isEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasSize
      assertion: hasSize
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasItem
      assertion: contains
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasItems
      assertion: contains
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: in
      assertion: isIn
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: isIn
      assertion: isIn
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasEntry
      assertion: containsEntry
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasKey
      assertion: containsKey
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: hasValue
      assertion: containsValue
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: aMapWithSize
      assertion: hasSize
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: anEmptyMap
      assertion: isEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: closeTo
      assertion: isCloseTo
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: equalTo
      assertion: isNotEqualTo
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: hasToString
      assertion: doesNotHaveToString
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: in
      assertion: isNotIn
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: isIn
      assertion: isNotIn
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: instanceOf
      assertion: isNotInstanceOf
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: nullValue
      assertion: isNotNull
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: sameInstance
      assertion: isNotSameAs
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: equalToIgnoringCase
      assertion: isNotEqualToIgnoringCase
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: equalToIgnoringWhiteSpace
      assertion: isNotEqualToIgnoringWhitespace
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: containsString
      assertion: doesNotContain
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: containsStringIgnoringCase
      assertion: doesNotContainIgnoringCase
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: startsWith
      assertion: doesNotStartWith
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: endsWith
      assertion: doesNotEndWith
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: matchesPattern
      assertion: doesNotMatch
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: matchesRegex
      assertion: doesNotMatch
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: blankString
      assertion: isNotBlank
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: emptyString
      assertion: isNotEmpty
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.assertj
      artifactId: assertj-core
      version: 3.x
      onlyIfUsing: org.assertj.core.api.Assertions
      acceptTransitive: true

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Aleksandar A Simpson](mailto:alek@asu.me)
