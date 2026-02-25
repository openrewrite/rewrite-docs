---
sidebar_label: "Migrate Hamcrest assertions to AssertJ"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Hamcrest assertions to AssertJ

**org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ**

_Migrate Hamcrest `assertThat(..)` to AssertJ `Assertions`._

### Tags

* [testing](/reference/recipes-by-tag#testing)
* [assertj](/reference/recipes-by-tag#assertj)
* [hamcrest](/reference/recipes-by-tag#hamcrest)

## Recipe source

[GitHub: hamcrest.yml](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/hamcrest.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.assertj`
  * artifactId: `assertj-core`
  * version: `3.x`
  * onlyIfUsing: `org.hamcrest.*`
  * acceptTransitive: `true`
* [Use consistent Hamcrest matcher imports](../../../java/testing/hamcrest/consistenthamcrestmatcherimports)
* [Migrate `anyOf` Hamcrest Matcher to AssertJ](../../../java/testing/hamcrest/hamcrestofmatcherstoassertj)
* [Migrate Hamcrest `hasProperty` to AssertJ](../../../java/testing/hamcrest/hamcresthaspropertytoassertj)
* [Migrate Hamcrest `everyItem` to AssertJ](../../../java/testing/hamcrest/hamcresteveryitemtoassertj)
* [Migrate Hamcrest `hasItem(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcresthasitemmatchertoassertj)
* [Migrate Hamcrest `is(Object)` to AssertJ](../../../java/testing/hamcrest/hamcrestismatchertoassertj)
* [Migrate Hamcrest `assertThat(boolean, Matcher)` to AssertJ](../../../java/testing/hamcrest/assertthatbooleantoassertj)
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `comparesEqualTo`
  * assertion: `isEqualTo`
  * argumentType: `java.lang.String`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `comparesEqualTo`
  * assertion: `isEqualByComparingTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `lessThan`
  * assertion: `isBefore`
  * argumentType: `java.util.Date`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `lessThanOrEqualTo`
  * assertion: `isBeforeOrEqualTo`
  * argumentType: `java.util.Date`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `greaterThan`
  * assertion: `isAfter`
  * argumentType: `java.util.Date`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `greaterThanOrEqualTo`
  * assertion: `isAfterOrEqualTo`
  * argumentType: `java.util.Date`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `lessThan`
  * assertion: `isBefore`
  * argumentType: `java.time.Instant`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `lessThanOrEqualTo`
  * assertion: `isBeforeOrEqualTo`
  * argumentType: `java.time.Instant`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `greaterThan`
  * assertion: `isAfter`
  * argumentType: `java.time.Instant`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `greaterThanOrEqualTo`
  * assertion: `isAfterOrEqualTo`
  * argumentType: `java.time.Instant`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `equalTo`
  * assertion: `isEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `greaterThanOrEqualTo`
  * assertion: `isGreaterThanOrEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `greaterThan`
  * assertion: `isGreaterThan`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasToString`
  * assertion: `hasToString`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `lessThanOrEqualTo`
  * assertion: `isLessThanOrEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `lessThan`
  * assertion: `isLessThan`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `notNullValue`
  * assertion: `isNotNull`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `not`
  * assertion: `isNotEqualTo`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `nullValue`
  * assertion: `isNull`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `sameInstance`
  * assertion: `isSameAs`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `instanceOf`
  * assertion: `isInstanceOf`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `isA`
  * assertion: `isInstanceOf`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `arrayContaining`
  * assertion: `containsExactly`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `arrayContainingInAnyOrder`
  * assertion: `containsExactlyInAnyOrder`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `arrayWithSize`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `emptyArray`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasItemInArray`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `blankString`
  * assertion: `isBlank`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `containsString`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `containsStringIgnoringCase`
  * assertion: `containsIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `emptyOrNullString`
  * assertion: `isNullOrEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `emptyString`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `endsWith`
  * assertion: `endsWith`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `endsWithIgnoringCase`
  * assertion: `endsWithIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `equalToIgnoringCase`
  * assertion: `isEqualToIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `equalToIgnoringWhiteSpace`
  * assertion: `isEqualToIgnoringWhitespace`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasLength`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `isEmptyString`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `isEmptyOrNullString`
  * assertion: `isNullOrEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `matchesPattern`
  * assertion: `matches`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `matchesRegex`
  * assertion: `matches`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `startsWith`
  * assertion: `startsWith`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `startsWithIgnoringCase`
  * assertion: `startsWithIgnoringCase`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `contains`
  * assertion: `containsExactly`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `containsInAnyOrder`
  * assertion: `containsExactlyInAnyOrder`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `empty`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasSize`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasItem`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasItems`
  * assertion: `contains`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `in`
  * assertion: `isIn`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `isIn`
  * assertion: `isIn`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasEntry`
  * assertion: `containsEntry`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasKey`
  * assertion: `containsKey`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `hasValue`
  * assertion: `containsValue`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `aMapWithSize`
  * assertion: `hasSize`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `anEmptyMap`
  * assertion: `isEmpty`
* [Migrate from Hamcrest `Matcher` to AssertJ](../../../java/testing/hamcrest/hamcrestmatchertoassertj)
  * matcher: `closeTo`
  * assertion: `isCloseTo`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `equalTo`
  * assertion: `isNotEqualTo`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `hasToString`
  * assertion: `doesNotHaveToString`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `in`
  * assertion: `isNotIn`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `isIn`
  * assertion: `isNotIn`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `instanceOf`
  * assertion: `isNotInstanceOf`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `nullValue`
  * assertion: `isNotNull`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `sameInstance`
  * assertion: `isNotSameAs`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `equalToIgnoringCase`
  * assertion: `isNotEqualToIgnoringCase`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `equalToIgnoringWhiteSpace`
  * assertion: `isNotEqualToIgnoringWhitespace`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `containsString`
  * assertion: `doesNotContain`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `containsStringIgnoringCase`
  * assertion: `doesNotContainIgnoringCase`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `startsWith`
  * assertion: `doesNotStartWith`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `endsWith`
  * assertion: `doesNotEndWith`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `matchesPattern`
  * assertion: `doesNotMatch`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `matchesRegex`
  * assertion: `doesNotMatch`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `blankString`
  * assertion: `isNotBlank`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `emptyString`
  * assertion: `isNotEmpty`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `hasItem`
  * assertion: `doesNotContain`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `hasItems`
  * assertion: `doesNotContain`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `empty`
  * assertion: `isNotEmpty`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `hasKey`
  * assertion: `doesNotContainKey`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `hasValue`
  * assertion: `doesNotContainValue`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `hasEntry`
  * assertion: `doesNotContainEntry`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `anEmptyMap`
  * assertion: `isNotEmpty`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `isEmptyOrNullString`
  * assertion: `isNotEmpty`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `emptyOrNullString`
  * assertion: `isNotEmpty`
* [Migrate Hamcrest `not(Matcher)` to AssertJ](../../../java/testing/hamcrest/hamcrestnotmatchertoassertj)
  * notMatcher: `isA`
  * assertion: `isNotInstanceOf`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ
displayName: Migrate Hamcrest assertions to AssertJ
description: |
  Migrate Hamcrest `assertThat(..)` to AssertJ `Assertions`.
tags:
  - testing
  - assertj
  - hamcrest
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.assertj
      artifactId: assertj-core
      version: 3.x
      onlyIfUsing: org.hamcrest.*
      acceptTransitive: true
  - org.openrewrite.java.testing.hamcrest.ConsistentHamcrestMatcherImports
  - org.openrewrite.java.testing.hamcrest.HamcrestOfMatchersToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestHasPropertyToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestEveryItemToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestHasItemMatcherToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestIsMatcherToAssertJ
  - org.openrewrite.java.testing.hamcrest.AssertThatBooleanToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: comparesEqualTo
      assertion: isEqualTo
      argumentType: java.lang.String
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: comparesEqualTo
      assertion: isEqualByComparingTo
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: lessThan
      assertion: isBefore
      argumentType: java.util.Date
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: lessThanOrEqualTo
      assertion: isBeforeOrEqualTo
      argumentType: java.util.Date
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: greaterThan
      assertion: isAfter
      argumentType: java.util.Date
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: greaterThanOrEqualTo
      assertion: isAfterOrEqualTo
      argumentType: java.util.Date
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: lessThan
      assertion: isBefore
      argumentType: java.time.Instant
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: lessThanOrEqualTo
      assertion: isBeforeOrEqualTo
      argumentType: java.time.Instant
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: greaterThan
      assertion: isAfter
      argumentType: java.time.Instant
  - org.openrewrite.java.testing.hamcrest.HamcrestMatcherToAssertJ:
      matcher: greaterThanOrEqualTo
      assertion: isAfterOrEqualTo
      argumentType: java.time.Instant
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
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: hasItem
      assertion: doesNotContain
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: hasItems
      assertion: doesNotContain
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: empty
      assertion: isNotEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: hasKey
      assertion: doesNotContainKey
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: hasValue
      assertion: doesNotContainValue
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: hasEntry
      assertion: doesNotContainEntry
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: anEmptyMap
      assertion: isNotEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: isEmptyOrNullString
      assertion: isNotEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: emptyOrNullString
      assertion: isNotEmpty
  - org.openrewrite.java.testing.hamcrest.HamcrestNotMatcherToAssertJ:
      notMatcher: isA
      assertion: isNotInstanceOf

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [AssertJ best practices](/recipes/java/testing/assertj/assertj-best-practices.md)

## Examples
##### Example 1
`MigrateHamcrestToAssertJTest#isEqualTo`


###### Unchanged
```java
class Biscuit {
    String name;
    Biscuit(String name) {
        this.name = name;
    }

    int getChocolateChipCount() {
        return 10;
    }

    int getHazelnutCount() {
        return 3;
    }
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class BiscuitTest {
    @Test
    public void biscuits() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");
        assertThat(theBiscuit, equalTo(myBiscuit));
        assertThat("chocolate chips", theBiscuit.getChocolateChipCount(), equalTo(10));
        assertThat("hazelnuts", theBiscuit.getHazelnutCount(), equalTo(3));
    }
}
```

###### After
```java
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BiscuitTest {
    @Test
    public void biscuits() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");
        assertThat(theBiscuit).isEqualTo(myBiscuit);
        assertThat(theBiscuit.getChocolateChipCount()).as("chocolate chips").isEqualTo(10);
        assertThat(theBiscuit.getHazelnutCount()).as("hazelnuts").isEqualTo(3);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,1 @@
import org.junit.jupiter.api.Test;

-import static org.hamcrest.MatcherAssert.assertThat;
-import static org.hamcrest.Matchers.*;
+import static org.assertj.core.api.Assertions.assertThat;

@@ -11,3 +10,3 @@
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");
-       assertThat(theBiscuit, equalTo(myBiscuit));
-       assertThat("chocolate chips", theBiscuit.getChocolateChipCount(), equalTo(10));
-       assertThat("hazelnuts", theBiscuit.getHazelnutCount(), equalTo(3));
+       assertThat(theBiscuit).isEqualTo(myBiscuit);
+       assertThat(theBiscuit.getChocolateChipCount()).as("chocolate chips").isEqualTo(10);
+       assertThat(theBiscuit.getHazelnutCount()).as("hazelnuts").isEqualTo(3);
    }
```
</TabItem>
</Tabs>

---

##### Example 2
`MigrateHamcrestToAssertJTest#isEqualTo`


###### Unchanged
```java
class Biscuit {
    String name;
    Biscuit(String name) {
        this.name = name;
    }

    int getChocolateChipCount() {
        return 10;
    }

    int getHazelnutCount() {
        return 3;
    }
}
```

<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import org.junit.jupiter.api.Test;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;

public class BiscuitTest {
    @Test
    public void biscuits() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");
        assertThat(theBiscuit, equalTo(myBiscuit));
        assertThat("chocolate chips", theBiscuit.getChocolateChipCount(), equalTo(10));
        assertThat("hazelnuts", theBiscuit.getHazelnutCount(), equalTo(3));
    }
}
```

###### After
```java
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BiscuitTest {
    @Test
    public void biscuits() {
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");
        assertThat(theBiscuit).isEqualTo(myBiscuit);
        assertThat(theBiscuit.getChocolateChipCount()).as("chocolate chips").isEqualTo(10);
        assertThat(theBiscuit.getHazelnutCount()).as("hazelnuts").isEqualTo(3);
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -3,2 +3,1 @@
import org.junit.jupiter.api.Test;

-import static org.hamcrest.MatcherAssert.assertThat;
-import static org.hamcrest.Matchers.*;
+import static org.assertj.core.api.Assertions.assertThat;

@@ -11,3 +10,3 @@
        Biscuit theBiscuit = new Biscuit("Ginger");
        Biscuit myBiscuit = new Biscuit("Ginger");
-       assertThat(theBiscuit, equalTo(myBiscuit));
-       assertThat("chocolate chips", theBiscuit.getChocolateChipCount(), equalTo(10));
-       assertThat("hazelnuts", theBiscuit.getHazelnutCount(), equalTo(3));
+       assertThat(theBiscuit).isEqualTo(myBiscuit);
+       assertThat(theBiscuit.getChocolateChipCount()).as("chocolate chips").isEqualTo(10);
+       assertThat(theBiscuit.getHazelnutCount()).as("hazelnuts").isEqualTo(3);
    }
```
</TabItem>
</Tabs>


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ")
        setExportDatatables(true)
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

2. Run the recipe.

```shell title="shell"
gradle --init-script init.gradle rewriteRun
```

</TabItem>
<TabItem value="maven" label="Maven POM">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateHamcrestToAssertJ
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
