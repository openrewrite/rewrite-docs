---
sidebar_label: "Replace String literals with `MediaType` constants"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Replace String literals with `MediaType` constants

**org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants**

_Replace String literals with `org.springframework.http.MediaType` constants._

## Recipe source

[GitHub: ReplaceStringLiteralsWithMediaTypeConstants.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/http/ReplaceStringLiteralsWithMediaTypeConstants.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `*/*`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.ALL_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/atom+xml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/cbor`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_CBOR_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/x-www-form-urlencoded`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/graphql+json`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_GRAPHQL_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/graphql-response+json`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_GRAPHQL_RESPONSE_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/json`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/json;charset=UTF-8`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/octet-stream`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/pdf`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PDF_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/problem+json`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/problem+json;charset=UTF-8`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/problem+xml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROBLEM_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/x-protobuf`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROTOBUF_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/rss+xml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_RSS_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/x-ndjson`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_NDJSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/stream+json`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_STREAM_JSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/xhtml+xml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/xml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `application/yaml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_YAML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `image/gif`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.IMAGE_GIF_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `image/jpeg`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.IMAGE_JPEG_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `image/png`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.IMAGE_PNG_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `multipart/form-data`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `multipart/mixed`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_MIXED_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `multipart/related`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_RELATED_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `text/event-stream`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `text/html`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_HTML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `text/markdown`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_MARKDOWN_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `text/plain`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_PLAIN_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant)
  * literalValue: `text/xml`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_XML_VALUE`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants
displayName: Replace String literals with `MediaType` constants
description: |
  Replace String literals with `org.springframework.http.MediaType` constants.
recipeList:
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: */*
      fullyQualifiedConstantName: org.springframework.http.MediaType.ALL_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/atom+xml
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/cbor
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_CBOR_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/x-www-form-urlencoded
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/graphql+json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_GRAPHQL_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/graphql-response+json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_GRAPHQL_RESPONSE_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/json;charset=UTF-8
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/octet-stream
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/pdf
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PDF_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/problem+json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/problem+json;charset=UTF-8
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/problem+xml
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROBLEM_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/x-protobuf
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROTOBUF_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/rss+xml
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_RSS_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/x-ndjson
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_NDJSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/stream+json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_STREAM_JSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/xhtml+xml
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/xml
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/yaml
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_YAML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: image/gif
      fullyQualifiedConstantName: org.springframework.http.MediaType.IMAGE_GIF_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: image/jpeg
      fullyQualifiedConstantName: org.springframework.http.MediaType.IMAGE_JPEG_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: image/png
      fullyQualifiedConstantName: org.springframework.http.MediaType.IMAGE_PNG_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: multipart/form-data
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: multipart/mixed
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_MIXED_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: multipart/related
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_RELATED_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: text/event-stream
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: text/html
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_HTML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: text/markdown
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_MARKDOWN_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: text/plain
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_PLAIN_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: text/xml
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_XML_VALUE

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Replace String literals with Spring constants](/recipes/java/spring/boot3/replacestringliteralswithconstants.md)


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants"
  displayName="Replace String literals with `MediaType` constants"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants" />

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
