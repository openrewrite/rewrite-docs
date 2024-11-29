---
sidebar_label: "Migrate to AssertJ assertions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate to AssertJ assertions

**org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ**

_Migrate Hamcrest `assertThat(..)` to AssertJ `Assertions`._

### Tags

* testing
* assertj
* hamcrest

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/hamcrest.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.hamcrest.core.* *(..)`
  * fullyQualifiedTargetTypeName: `org.hamcrest.Matchers`
* [Change method target to static](../../../java/changemethodtargettostatic)
  * methodPattern: `org.hamcrest.collection.* *(..)`
  * fullyQualifiedTargetTypeName: `org.hamcrest.Matchers`
* [Remove Hamcrest `is(Matcher)`](../../../java/testing/hamcrest/removeismatcher)
* [Migrate Hamcrest `is(Object)` to AssertJ](../../../java/testing/hamcrest/hamcrestismatchertoassertj)
* [Migrate `anyOf` Hamcrest Matcher to AssertJ](../../../java/testing/hamcrest/hamcrestofmatcherstoassertj)
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
* [Add Gradle or Maven dependency](../../../java/dependencies/adddependency)
  * groupId: `org.assertj`
  * artifactId: `assertj-core`
  * version: `3.x`
  * onlyIfUsing: `org.assertj.core.api.Assertions`
  * acceptTransitive: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

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
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.hamcrest.core.* *(..)
      fullyQualifiedTargetTypeName: org.hamcrest.Matchers
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.hamcrest.collection.* *(..)
      fullyQualifiedTargetTypeName: org.hamcrest.Matchers
  - org.openrewrite.java.testing.hamcrest.RemoveIsMatcher
  - org.openrewrite.java.testing.hamcrest.HamcrestIsMatcherToAssertJ
  - org.openrewrite.java.testing.hamcrest.HamcrestOfMatchersToAssertJ
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
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.assertj
      artifactId: assertj-core
      version: 3.x
      onlyIfUsing: org.assertj.core.api.Assertions
      acceptTransitive: true

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}")
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
        rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}")
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
            <version>{{VERSION_REWRITE_TESTING_FRAMEWORKS}}</version>
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
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.hamcrest.MigrateHamcrestToAssertJ" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

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

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |


## Contributors
[Tim te Beek](mailto:tim@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), [Aleksandar A Simpson](mailto:alek@asu.me), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
