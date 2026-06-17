---
title: "Modernize legacy `jackson-core` feature constants"
sidebar_label: "Modernize legacy `jackson-core` feature constants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Modernize legacy `jackson-core` feature constants

**org.openrewrite.java.jackson.UpgradeJackson\_2\_3\_ModernizeJacksonCoreFeatures**

_Jackson 2.10 moved most flag constants out of `JsonParser.Feature` and `JsonGenerator.Feature` into the new `JsonReadFeature` / `JsonWriteFeature` (for JSON-specific flags) and `StreamReadFeature` / `StreamWriteFeature` (for format-agnostic flags). Jackson 3 keeps only the modern locations. This recipe rewrites every legacy constant to its Jackson 2-modern equivalent so the rest of the Jackson 2 → 3 pipeline (in particular the builder migrations) sees flags the modern API will accept._

### Tags

* [jackson-3](/reference/recipes-by-tag#jackson)

## Recipe source

[GitHub: jackson-2-3.yml](https://github.com/openrewrite/rewrite-jackson/blob/main/src/main/resources/META-INF/rewrite/jackson-2-3.yml),
[Issue Tracker](https://github.com/openrewrite/rewrite-jackson/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-jackson/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_COMMENTS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_JAVA_COMMENTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_YAML_COMMENTS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_YAML_COMMENTS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_UNQUOTED_FIELD_NAMES`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_SINGLE_QUOTES`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_SINGLE_QUOTES`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_UNQUOTED_CONTROL_CHARS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_UNESCAPED_CONTROL_CHARS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_RS_CONTROL_CHAR`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_RS_CONTROL_CHAR`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_NUMERIC_LEADING_ZEROS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_LEADING_ZEROS_FOR_NUMBERS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_LEADING_PLUS_SIGN_FOR_NUMBERS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_LEADING_PLUS_SIGN_FOR_NUMBERS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_TRAILING_DECIMAL_POINT_FOR_NUMBERS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_TRAILING_DECIMAL_POINT_FOR_NUMBERS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_NON_NUMERIC_NUMBERS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_NON_NUMERIC_NUMBERS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_MISSING_VALUES`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_MISSING_VALUES`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_TRAILING_COMMA`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_TRAILING_COMMA`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.AUTO_CLOSE_SOURCE`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamReadFeature.AUTO_CLOSE_SOURCE`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.STRICT_DUPLICATE_DETECTION`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamReadFeature.STRICT_DUPLICATE_DETECTION`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.IGNORE_UNDEFINED`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamReadFeature.IGNORE_UNDEFINED`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.INCLUDE_SOURCE_IN_LOCATION`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamReadFeature.INCLUDE_SOURCE_IN_LOCATION`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.USE_FAST_DOUBLE_PARSER`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamReadFeature.USE_FAST_DOUBLE_PARSER`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonParser.Feature.USE_FAST_BIG_NUMBER_PARSER`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamReadFeature.USE_FAST_BIG_NUMBER_PARSER`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.QUOTE_FIELD_NAMES`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.QUOTE_FIELD_NAMES`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.QUOTE_NON_NUMERIC_NUMBERS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.WRITE_NAN_AS_STRINGS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.WRITE_NUMBERS_AS_STRINGS`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.WRITE_NUMBERS_AS_STRINGS`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.ESCAPE_NON_ASCII`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.ESCAPE_NON_ASCII`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.WRITE_HEX_UPPER_CASE`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.WRITE_HEX_UPPER_CASE`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.ESCAPE_FORWARD_SLASHES`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.ESCAPE_FORWARD_SLASHES`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.COMBINE_UNICODE_SURROGATES_IN_UTF8`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.json.JsonWriteFeature.COMBINE_UNICODE_SURROGATES_IN_UTF8`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.AUTO_CLOSE_TARGET`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.AUTO_CLOSE_TARGET`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.AUTO_CLOSE_JSON_CONTENT`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.AUTO_CLOSE_CONTENT`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.FLUSH_PASSED_TO_STREAM`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.FLUSH_PASSED_TO_STREAM`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.WRITE_BIGDECIMAL_AS_PLAIN`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.WRITE_BIGDECIMAL_AS_PLAIN`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.STRICT_DUPLICATE_DETECTION`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.STRICT_DUPLICATE_DETECTION`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.IGNORE_UNKNOWN`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.IGNORE_UNKNOWN`
* [Replace constant with another constant](../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `com.fasterxml.jackson.core.JsonGenerator.Feature.USE_FAST_DOUBLE_WRITER`
  * fullyQualifiedConstantName: `com.fasterxml.jackson.core.StreamWriteFeature.USE_FAST_DOUBLE_WRITER`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.jackson.UpgradeJackson_2_3_ModernizeJacksonCoreFeatures
displayName: Modernize legacy `jackson-core` feature constants
description: |
  Jackson 2.10 moved most flag constants out of `JsonParser.Feature` and `JsonGenerator.Feature` into the new `JsonReadFeature` / `JsonWriteFeature` (for JSON-specific flags) and `StreamReadFeature` / `StreamWriteFeature` (for format-agnostic flags). Jackson 3 keeps only the modern locations. This recipe rewrites every legacy constant to its Jackson 2-modern equivalent so the rest of the Jackson 2 → 3 pipeline (in particular the builder migrations) sees flags the modern API will accept.
tags:
  - jackson-3
recipeList:
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_COMMENTS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_JAVA_COMMENTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_YAML_COMMENTS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_YAML_COMMENTS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_UNQUOTED_FIELD_NAMES
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_SINGLE_QUOTES
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_SINGLE_QUOTES
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_UNQUOTED_CONTROL_CHARS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_UNESCAPED_CONTROL_CHARS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_RS_CONTROL_CHAR
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_RS_CONTROL_CHAR
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_BACKSLASH_ESCAPING_ANY_CHARACTER
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_NUMERIC_LEADING_ZEROS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_LEADING_ZEROS_FOR_NUMBERS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_LEADING_PLUS_SIGN_FOR_NUMBERS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_LEADING_PLUS_SIGN_FOR_NUMBERS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_LEADING_DECIMAL_POINT_FOR_NUMBERS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_TRAILING_DECIMAL_POINT_FOR_NUMBERS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_TRAILING_DECIMAL_POINT_FOR_NUMBERS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_NON_NUMERIC_NUMBERS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_NON_NUMERIC_NUMBERS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_MISSING_VALUES
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_MISSING_VALUES
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.ALLOW_TRAILING_COMMA
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonReadFeature.ALLOW_TRAILING_COMMA
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.AUTO_CLOSE_SOURCE
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamReadFeature.AUTO_CLOSE_SOURCE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.STRICT_DUPLICATE_DETECTION
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamReadFeature.STRICT_DUPLICATE_DETECTION
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.IGNORE_UNDEFINED
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamReadFeature.IGNORE_UNDEFINED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.INCLUDE_SOURCE_IN_LOCATION
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamReadFeature.INCLUDE_SOURCE_IN_LOCATION
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.USE_FAST_DOUBLE_PARSER
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamReadFeature.USE_FAST_DOUBLE_PARSER
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonParser.Feature.USE_FAST_BIG_NUMBER_PARSER
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamReadFeature.USE_FAST_BIG_NUMBER_PARSER
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.QUOTE_FIELD_NAMES
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.QUOTE_FIELD_NAMES
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.QUOTE_NON_NUMERIC_NUMBERS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.WRITE_NAN_AS_STRINGS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.WRITE_NUMBERS_AS_STRINGS
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.WRITE_NUMBERS_AS_STRINGS
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.ESCAPE_NON_ASCII
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.ESCAPE_NON_ASCII
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.WRITE_HEX_UPPER_CASE
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.WRITE_HEX_UPPER_CASE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.ESCAPE_FORWARD_SLASHES
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.ESCAPE_FORWARD_SLASHES
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.COMBINE_UNICODE_SURROGATES_IN_UTF8
      fullyQualifiedConstantName: com.fasterxml.jackson.core.json.JsonWriteFeature.COMBINE_UNICODE_SURROGATES_IN_UTF8
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.AUTO_CLOSE_TARGET
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.AUTO_CLOSE_TARGET
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.AUTO_CLOSE_JSON_CONTENT
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.AUTO_CLOSE_CONTENT
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.FLUSH_PASSED_TO_STREAM
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.FLUSH_PASSED_TO_STREAM
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.WRITE_BIGDECIMAL_AS_PLAIN
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.WRITE_BIGDECIMAL_AS_PLAIN
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.STRICT_DUPLICATE_DETECTION
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.STRICT_DUPLICATE_DETECTION
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.IGNORE_UNKNOWN
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.IGNORE_UNKNOWN
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: com.fasterxml.jackson.core.JsonGenerator.Feature.USE_FAST_DOUBLE_WRITER
      fullyQualifiedConstantName: com.fasterxml.jackson.core.StreamWriteFeature.USE_FAST_DOUBLE_WRITER

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Migrates from Jackson 2.x to Jackson 3.x](/recipes/java/jackson/upgradejackson_2_3.md)

## Examples
##### Example 1
`UpgradeJackson_2_3_ModernizeJacksonCoreFeaturesTest#allowCommentsRenamedToAllowJavaComments`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;

class A {
    JsonFactory factory = new JsonFactory().enable(JsonParser.Feature.ALLOW_COMMENTS);
}
```

###### After
```java
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.json.JsonReadFeature;

class A {
    JsonFactory factory = new JsonFactory().enable(JsonReadFeature.ALLOW_JAVA_COMMENTS);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
import com.fasterxml.jackson.core.JsonFactory;
-import com.fasterxml.jackson.core.JsonParser;
+import com.fasterxml.jackson.core.json.JsonReadFeature;

@@ -5,1 +5,1 @@

class A {
-   JsonFactory factory = new JsonFactory().enable(JsonParser.Feature.ALLOW_COMMENTS);
+   JsonFactory factory = new JsonFactory().enable(JsonReadFeature.ALLOW_JAVA_COMMENTS);
}
```
</TabItem>
</Tabs>

---

##### Example 2
`UpgradeJackson_2_3_ModernizeJacksonCoreFeaturesTest#allowCommentsRenamedToAllowJavaComments`


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;

class A {
    JsonFactory factory = new JsonFactory().enable(JsonParser.Feature.ALLOW_COMMENTS);
}
```

###### After
```java
import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.json.JsonReadFeature;

class A {
    JsonFactory factory = new JsonFactory().enable(JsonReadFeature.ALLOW_JAVA_COMMENTS);
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -2,1 +2,1 @@
import com.fasterxml.jackson.core.JsonFactory;
-import com.fasterxml.jackson.core.JsonParser;
+import com.fasterxml.jackson.core.json.JsonReadFeature;

@@ -5,1 +5,1 @@

class A {
-   JsonFactory factory = new JsonFactory().enable(JsonParser.Feature.ALLOW_COMMENTS);
+   JsonFactory factory = new JsonFactory().enable(JsonReadFeature.ALLOW_JAVA_COMMENTS);
}
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.jackson.UpgradeJackson_2_3_ModernizeJacksonCoreFeatures"
  displayName="Modernize legacy `jackson-core` feature constants"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-jackson"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_JACKSON"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.jackson.UpgradeJackson_2_3_ModernizeJacksonCoreFeatures" />

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
