---
sidebar_label: "Simplify AssertJ chained assertions"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Simplify AssertJ chained assertions

**org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions**

_Replace AssertJ assertions where a method is called on the actual value with a dedicated assertion._

### Tags

* testing
* assertj

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/assertj.yml), 
[Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getString`
  * assertToReplace: `hasSize`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `equals`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEqualTo`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `equalsIgnoreCase`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEqualToIgnoringCase`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `contains`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `contains`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `contains`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotContain`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `startsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `startsWith`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `startsWith`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotStartWith`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `endsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `endsWith`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `endsWith`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotEndWith`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `matches`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `matches`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `matches`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotMatch`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `trim`
  * assertToReplace: `isEmpty`
  * dedicatedAssertion: `isBlank`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `length`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `length`
  * assertToReplace: `hasSize`
  * dedicatedAssertion: `hasSameSizeAs`
  * requiredType: `java.lang.String`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getFile`
  * assertToReplace: `hasSize`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `length`
  * assertToReplace: `isZero`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `length`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `canRead`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `canRead`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `canWrite`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `canWrite`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `exists`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `exists`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getName`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasName`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getParent`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasParent`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getParentFile`
  * assertToReplace: `isNull`
  * dedicatedAssertion: `hasNoParent`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isAbsolute`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isRelative`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isDirectory`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isDirectory`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isFile`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isFile`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `list`
  * assertToReplace: `isEmpty`
  * dedicatedAssertion: `isEmptyDirectory`
  * requiredType: `java.io.File`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `startsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `startsWithRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `endsWith`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `endsWithRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getParent`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasParentRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `getParent`
  * assertToReplace: `isNull`
  * dedicatedAssertion: `hasNoParentRaw`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isAbsolute`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isAbsolute`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isRelative`
  * requiredType: `java.nio.file.Path`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `size`
  * assertToReplace: `isZero`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `size`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `contains`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `contains`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `contains`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `doesNotContain`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `containsAll`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `containsAll`
  * requiredType: `java.util.Collection`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `size`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasSize`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `containsKey`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `containsKey`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `keySet`
  * assertToReplace: `contains`
  * dedicatedAssertion: `containsKey`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `keySet`
  * assertToReplace: `containsOnly`
  * dedicatedAssertion: `containsOnlyKeys`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `containsValue`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `containsValue`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `values`
  * assertToReplace: `contains`
  * dedicatedAssertion: `containsValue`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `get`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `containsEntry`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.util.Map`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isPresent`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isPresent`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEmpty`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isPresent`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotPresent`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `isEmpty`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isNotEmpty`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `get`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `contains`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `get`
  * assertToReplace: `isSameAs`
  * dedicatedAssertion: `containsSame`
  * requiredType: `java.util.Optional`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `hasNext`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `hasNext`
  * requiredType: `java.util.Iterator`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `hasNext`
  * assertToReplace: `isFalse`
  * dedicatedAssertion: `isExhausted`
  * requiredType: `java.util.Iterator`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `toString`
  * assertToReplace: `isEqualTo`
  * dedicatedAssertion: `hasToString`
  * requiredType: `java.lang.Object`
* [Simplify AssertJ chained assertions](../../../java/testing/assertj/simplifychainedassertjassertion)
  * chainedAssertion: `equals`
  * assertToReplace: `isTrue`
  * dedicatedAssertion: `isEqualTo`
  * requiredType: `java.lang.Object`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions
displayName: Simplify AssertJ chained assertions
description: |
  Replace AssertJ assertions where a method is called on the actual value with a dedicated assertion.
tags:
  - testing
  - assertj
recipeList:
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getString
      assertToReplace: hasSize
      dedicatedAssertion: isEmpty
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: equals
      assertToReplace: isTrue
      dedicatedAssertion: isEqualTo
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: equalsIgnoreCase
      assertToReplace: isTrue
      dedicatedAssertion: isEqualToIgnoringCase
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isTrue
      dedicatedAssertion: contains
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isFalse
      dedicatedAssertion: doesNotContain
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: startsWith
      assertToReplace: isTrue
      dedicatedAssertion: startsWith
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: startsWith
      assertToReplace: isFalse
      dedicatedAssertion: doesNotStartWith
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: endsWith
      assertToReplace: isTrue
      dedicatedAssertion: endsWith
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: endsWith
      assertToReplace: isFalse
      dedicatedAssertion: doesNotEndWith
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: matches
      assertToReplace: isTrue
      dedicatedAssertion: matches
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: matches
      assertToReplace: isFalse
      dedicatedAssertion: doesNotMatch
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: trim
      assertToReplace: isEmpty
      dedicatedAssertion: isBlank
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: hasSize
      dedicatedAssertion: hasSameSizeAs
      requiredType: java.lang.String
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getFile
      assertToReplace: hasSize
      dedicatedAssertion: isEmpty
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: isZero
      dedicatedAssertion: isEmpty
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: length
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: canRead
      assertToReplace: isTrue
      dedicatedAssertion: canRead
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: canWrite
      assertToReplace: isTrue
      dedicatedAssertion: canWrite
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: exists
      assertToReplace: isTrue
      dedicatedAssertion: exists
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getName
      assertToReplace: isEqualTo
      dedicatedAssertion: hasName
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParent
      assertToReplace: isEqualTo
      dedicatedAssertion: hasParent
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParentFile
      assertToReplace: isNull
      dedicatedAssertion: hasNoParent
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isTrue
      dedicatedAssertion: isAbsolute
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isFalse
      dedicatedAssertion: isRelative
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isDirectory
      assertToReplace: isTrue
      dedicatedAssertion: isDirectory
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isFile
      assertToReplace: isTrue
      dedicatedAssertion: isFile
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: list
      assertToReplace: isEmpty
      dedicatedAssertion: isEmptyDirectory
      requiredType: java.io.File
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: startsWith
      assertToReplace: isTrue
      dedicatedAssertion: startsWithRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: endsWith
      assertToReplace: isTrue
      dedicatedAssertion: endsWithRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParent
      assertToReplace: isEqualTo
      dedicatedAssertion: hasParentRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: getParent
      assertToReplace: isNull
      dedicatedAssertion: hasNoParentRaw
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isTrue
      dedicatedAssertion: isAbsolute
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isAbsolute
      assertToReplace: isFalse
      dedicatedAssertion: isRelative
      requiredType: java.nio.file.Path
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: size
      assertToReplace: isZero
      dedicatedAssertion: isEmpty
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: size
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isTrue
      dedicatedAssertion: contains
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: contains
      assertToReplace: isFalse
      dedicatedAssertion: doesNotContain
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: containsAll
      assertToReplace: isTrue
      dedicatedAssertion: containsAll
      requiredType: java.util.Collection
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: size
      assertToReplace: isEqualTo
      dedicatedAssertion: hasSize
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: containsKey
      assertToReplace: isTrue
      dedicatedAssertion: containsKey
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: keySet
      assertToReplace: contains
      dedicatedAssertion: containsKey
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: keySet
      assertToReplace: containsOnly
      dedicatedAssertion: containsOnlyKeys
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: containsValue
      assertToReplace: isTrue
      dedicatedAssertion: containsValue
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: values
      assertToReplace: contains
      dedicatedAssertion: containsValue
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: get
      assertToReplace: isEqualTo
      dedicatedAssertion: containsEntry
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.util.Map
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isPresent
      assertToReplace: isTrue
      dedicatedAssertion: isPresent
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isTrue
      dedicatedAssertion: isEmpty
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isPresent
      assertToReplace: isFalse
      dedicatedAssertion: isNotPresent
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: isEmpty
      assertToReplace: isFalse
      dedicatedAssertion: isNotEmpty
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: get
      assertToReplace: isEqualTo
      dedicatedAssertion: contains
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: get
      assertToReplace: isSameAs
      dedicatedAssertion: containsSame
      requiredType: java.util.Optional
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: hasNext
      assertToReplace: isTrue
      dedicatedAssertion: hasNext
      requiredType: java.util.Iterator
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: hasNext
      assertToReplace: isFalse
      dedicatedAssertion: isExhausted
      requiredType: java.util.Iterator
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: toString
      assertToReplace: isEqualTo
      dedicatedAssertion: hasToString
      requiredType: java.lang.Object
  - org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertion:
      chainedAssertion: equals
      assertToReplace: isTrue
      dedicatedAssertion: isEqualTo
      requiredType: java.lang.Object

```
</TabItem>
</Tabs>
## Examples
##### Example 1


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void testMethod() {
        String s = "hello world";
        assertThat(s.isEmpty()).isTrue();
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void testMethod() {
        String s = "hello world";
        assertThat(s).isEmpty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,1 +6,1 @@
    void testMethod() {
        String s = "hello world";
-       assertThat(s.isEmpty()).isTrue();
+       assertThat(s).isEmpty();
    }
```
</TabItem>
</Tabs>

---

##### Example 2


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void testMethod() {
        String s = "hello world";
        assertThat(s.isEmpty()).isTrue();
    }
}
```

###### After
```java
import static org.assertj.core.api.Assertions.assertThat;

class MyTest {
    void testMethod() {
        String s = "hello world";
        assertThat(s).isEmpty();
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -6,1 +6,1 @@
    void testMethod() {
        String s = "hello world";
-       assertThat(s.isEmpty()).isTrue();
+       assertThat(s).isEmpty();
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
    id("org.openrewrite.rewrite") version("{{VERSION_REWRITE_GRADLE_PLUGIN}}")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions")
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
        activeRecipe("org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions")
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
            <recipe>org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe SimplifyChainedAssertJAssertions
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-testing-frameworks:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_TESTING_FRAMEWORKS}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.testing.assertj.SimplifyChainedAssertJAssertions" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>

## Contributors
[Aleksandar A Simpson](mailto:alek@asu.me), [Jacob van Lingen](mailto:jacobvanlingen@hotmail.com), Marvin, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Jeremy Tymes](mailto:jeremy@jtymes.net), [Tim te Beek](mailto:timtebeek@gmail.com)
