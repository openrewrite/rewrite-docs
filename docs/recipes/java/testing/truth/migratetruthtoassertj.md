---
sidebar_label: "Migrate Google Truth to AssertJ"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Migrate Google Truth to AssertJ

**org.openrewrite.java.testing.truth.MigrateTruthToAssertJ**

_Migrate Google Truth assertions to AssertJ assertions._

### Tags

* [truth](/reference/recipes-by-tag#truth)
* [testing](/reference/recipes-by-tag#testing)
* [assertj](/reference/recipes-by-tag#assertj)

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/truth.yml),
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
  * onlyIfUsing: `com.google.common.truth.*`
  * acceptTransitive: `true`
* [Convert Truth `assert_()` to AssertJ](../../../java/testing/truth/truthasserttoassertthat)
* [Convert Truth `assertWithMessage` to AssertJ](../../../java/testing/truth/truthassertwithmessagetoassertj)
* [Convert Truth Throwable assertions to AssertJ](../../../java/testing/truth/truththrowableassertions)
* [Migrate Truth custom subjects to AssertJ](../../../java/testing/truth/truthcustomsubjectstoassertj)
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth..* hasLength(int)`
  * newMethodName: `hasSize`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.StringSubject containsMatch(..)`
  * newMethodName: `matches`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.StringSubject doesNotContainMatch(..)`
  * newMethodName: `doesNotMatch`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.StringSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractStringAssert`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.ComparableSubject isAtLeast(..)`
  * newMethodName: `isGreaterThanOrEqualTo`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.ComparableSubject isAtMost(..)`
  * newMethodName: `isLessThanOrEqualTo`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.ComparableSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractComparableAssert`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.Subject isSameInstanceAs(..)`
  * newMethodName: `isSameAs`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.Subject isNotSameInstanceAs(..)`
  * newMethodName: `isNotSameAs`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.Subject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractObjectAssert`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.IterableSubject containsExactlyElementsIn(..)`
  * newMethodName: `containsExactlyElementsOf`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.IterableSubject containsAnyIn(..)`
  * newMethodName: `containsAnyElementsOf`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.IterableSubject containsNoneIn(..)`
  * newMethodName: `doesNotContainAnyElementsOf`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.IterableSubject containsAllIn(..)`
  * newMethodName: `containsAll`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.IterableSubject containsAllOf(..)`
  * newMethodName: `contains`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.IterableSubject containsNoneOf(..)`
  * newMethodName: `doesNotContain`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.IterableSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractIterableAssert`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.OptionalSubject hasValue(..)`
  * newMethodName: `contains`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.OptionalSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractOptionalAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.GuavaOptionalSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractOptionalAssert`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `org.assertj.core.api.AbstractMapAssert containsEntries(..)`
  * newMethodName: `contains`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.MapSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractMapAssert`
* [Change method name](../../../java/changemethodname)
  * methodPattern: `com.google.common.truth.ObjectArraySubject asList()`
  * newMethodName: `containsExactly`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.ObjectArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractObjectArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.BooleanSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractBooleanAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.IntegerSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractIntegerAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.LongSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractLongAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.DoubleSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractDoubleAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.FloatSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractFloatAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.BigDecimalSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractBigDecimalAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveBooleanArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractBooleanArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveIntArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractIntArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveLongArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractLongArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveDoubleArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractDoubleArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveFloatArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractFloatArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveByteArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractByteArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveCharArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractCharArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PrimitiveShortArraySubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractShortArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.Truth8`
  * newFullyQualifiedTypeName: `org.assertj.core.api.Assertions`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.OptionalIntSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractOptionalIntAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.OptionalLongSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractOptionalLongAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.OptionalDoubleSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractOptionalDoubleAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.StreamSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.ListAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.IntStreamSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractIntArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.LongStreamSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractLongArrayAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.PathSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractPathAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.ClassSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractClassAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.ThrowableSubject`
  * newFullyQualifiedTypeName: `org.assertj.core.api.AbstractThrowableAssert`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `com.google.common.truth.Truth`
  * newFullyQualifiedTypeName: `org.assertj.core.api.Assertions`
* [Remove a Gradle or Maven dependency](../../../java/dependencies/removedependency)
  * groupId: `com.google.truth`
  * artifactId: `truth`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.truth.MigrateTruthToAssertJ
displayName: Migrate Google Truth to AssertJ
description: |
  Migrate Google Truth assertions to AssertJ assertions.
tags:
  - truth
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: org.assertj
      artifactId: assertj-core
      version: 3.x
      onlyIfUsing: com.google.common.truth.*
      acceptTransitive: true
  - org.openrewrite.java.testing.truth.TruthAssertToAssertThat
  - org.openrewrite.java.testing.truth.TruthAssertWithMessageToAssertJ
  - org.openrewrite.java.testing.truth.TruthThrowableAssertions
  - org.openrewrite.java.testing.truth.TruthCustomSubjectsToAssertJ
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth..* hasLength(int)
      newMethodName: hasSize
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.StringSubject containsMatch(..)
      newMethodName: matches
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.StringSubject doesNotContainMatch(..)
      newMethodName: doesNotMatch
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.StringSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractStringAssert
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.ComparableSubject isAtLeast(..)
      newMethodName: isGreaterThanOrEqualTo
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.ComparableSubject isAtMost(..)
      newMethodName: isLessThanOrEqualTo
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.ComparableSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractComparableAssert
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.Subject isSameInstanceAs(..)
      newMethodName: isSameAs
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.Subject isNotSameInstanceAs(..)
      newMethodName: isNotSameAs
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.Subject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractObjectAssert
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.IterableSubject containsExactlyElementsIn(..)
      newMethodName: containsExactlyElementsOf
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.IterableSubject containsAnyIn(..)
      newMethodName: containsAnyElementsOf
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.IterableSubject containsNoneIn(..)
      newMethodName: doesNotContainAnyElementsOf
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.IterableSubject containsAllIn(..)
      newMethodName: containsAll
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.IterableSubject containsAllOf(..)
      newMethodName: contains
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.IterableSubject containsNoneOf(..)
      newMethodName: doesNotContain
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.IterableSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractIterableAssert
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.OptionalSubject hasValue(..)
      newMethodName: contains
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.OptionalSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractOptionalAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.GuavaOptionalSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractOptionalAssert
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: org.assertj.core.api.AbstractMapAssert containsEntries(..)
      newMethodName: contains
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.MapSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractMapAssert
  - org.openrewrite.java.ChangeMethodName:
      methodPattern: com.google.common.truth.ObjectArraySubject asList()
      newMethodName: containsExactly
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.ObjectArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractObjectArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.BooleanSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractBooleanAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.IntegerSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractIntegerAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.LongSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractLongAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.DoubleSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractDoubleAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.FloatSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractFloatAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.BigDecimalSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractBigDecimalAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveBooleanArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractBooleanArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveIntArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractIntArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveLongArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractLongArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveDoubleArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractDoubleArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveFloatArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractFloatArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveByteArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractByteArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveCharArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractCharArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PrimitiveShortArraySubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractShortArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.Truth8
      newFullyQualifiedTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.OptionalIntSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractOptionalIntAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.OptionalLongSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractOptionalLongAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.OptionalDoubleSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractOptionalDoubleAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.StreamSubject
      newFullyQualifiedTypeName: org.assertj.core.api.ListAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.IntStreamSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractIntArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.LongStreamSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractLongArrayAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.PathSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractPathAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.ClassSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractClassAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.ThrowableSubject
      newFullyQualifiedTypeName: org.assertj.core.api.AbstractThrowableAssert
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: com.google.common.truth.Truth
      newFullyQualifiedTypeName: org.assertj.core.api.Assertions
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.google.truth
      artifactId: truth

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [AssertJ best practices](/recipes/java/testing/assertj/assertj-best-practices.md)

## Examples
##### Example 1
`MigrateTruthToAssertJTest#basicAssertThatConversion`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static com.google.common.truth.Truth.assertThat;

class Test {
    void test() {
        String actual = "hello";
        assertThat(actual).isEqualTo("hello");
        assertThat(actual).isNotEqualTo("world");
        assertThat(actual).isNotNull();
        assertThat(actual).contains("ell");
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class Test {
    void test() {
        String actual = "hello";
        assertThat(actual).isEqualTo("hello");
        assertThat(actual).isNotEqualTo("world");
        assertThat(actual).isNotNull();
        assertThat(actual).contains("ell");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import static com.google.common.truth.Truth.assertThat;
+import static org.assertj.core.api.Assertions.assertThat;

```
</TabItem>
</Tabs>

---

##### Example 2
`TruthThrowableAssertionsTest#hasMessageThatContains`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static com.google.common.truth.Truth.assertThat;

class Test {
    void test() {
        Exception e = new IllegalArgumentException("Invalid argument provided");
        assertThat(e).hasMessageThat().contains("Invalid");
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class Test {
    void test() {
        Exception e = new IllegalArgumentException("Invalid argument provided");
        assertThat(e).hasMessageContaining("Invalid");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import static com.google.common.truth.Truth.assertThat;
+import static org.assertj.core.api.Assertions.assertThat;

@@ -6,1 +6,1 @@
    void test() {
        Exception e = new IllegalArgumentException("Invalid argument provided");
-       assertThat(e).hasMessageThat().contains("Invalid");
+       assertThat(e).hasMessageContaining("Invalid");
    }
```
</TabItem>
</Tabs>

---

##### Example 3
`MigrateTruthToAssertJTest#basicAssertThatConversion`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static com.google.common.truth.Truth.assertThat;

class Test {
    void test() {
        String actual = "hello";
        assertThat(actual).isEqualTo("hello");
        assertThat(actual).isNotEqualTo("world");
        assertThat(actual).isNotNull();
        assertThat(actual).contains("ell");
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class Test {
    void test() {
        String actual = "hello";
        assertThat(actual).isEqualTo("hello");
        assertThat(actual).isNotEqualTo("world");
        assertThat(actual).isNotNull();
        assertThat(actual).contains("ell");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import static com.google.common.truth.Truth.assertThat;
+import static org.assertj.core.api.Assertions.assertThat;

```
</TabItem>
</Tabs>

---

##### Example 4
`TruthThrowableAssertionsTest#hasMessageThatContains`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static com.google.common.truth.Truth.assertThat;

class Test {
    void test() {
        Exception e = new IllegalArgumentException("Invalid argument provided");
        assertThat(e).hasMessageThat().contains("Invalid");
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class Test {
    void test() {
        Exception e = new IllegalArgumentException("Invalid argument provided");
        assertThat(e).hasMessageContaining("Invalid");
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,1 @@
-import static com.google.common.truth.Truth.assertThat;
+import static org.assertj.core.api.Assertions.assertThat;

@@ -6,1 +6,1 @@
    void test() {
        Exception e = new IllegalArgumentException("Invalid argument provided");
-       assertThat(e).hasMessageThat().contains("Invalid");
+       assertThat(e).hasMessageContaining("Invalid");
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
    activeRecipe("org.openrewrite.java.testing.truth.MigrateTruthToAssertJ")
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
        activeRecipe("org.openrewrite.java.testing.truth.MigrateTruthToAssertJ")
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
            <recipe>org.openrewrite.java.testing.truth.MigrateTruthToAssertJ</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.truth.MigrateTruthToAssertJ -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe MigrateTruthToAssertJ
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.truth.MigrateTruthToAssertJ" />

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
