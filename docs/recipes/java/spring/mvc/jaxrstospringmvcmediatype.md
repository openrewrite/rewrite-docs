---
sidebar_label: "Migrate JAX-RS MediaType to Spring MVC MediaType"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RunRecipe from '@site/src/components/RunRecipe';

# Migrate JAX-RS MediaType to Spring MVC MediaType

**org.openrewrite.java.spring.mvc.JaxrsToSpringMvcMediaType**

_Replaces all JAX-RS MediaType with Spring MVC MediaType._

## Recipe source

[GitHub: JaxrsToSpringMvcMediaType.java](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/java/org/openrewrite/java/spring/mvc/JaxrsToSpringMvcMediaType.java),
[Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Moderne Source Available License](https://docs.moderne.io/licensing/moderne-source-available-license).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_ATOM_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_ATOM_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_ATOM_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_JSON`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_JSON_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_OCTET_STREAM`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_XHTML_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_XHTML_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XHTML_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.APPLICATION_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.MULTIPART_FORM_DATA`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.MULTIPART_FORM_DATA_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_FORM_DATA`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.TEXT_HTML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_HTML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.TEXT_HTML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_HTML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.TEXT_PLAIN`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_PLAIN_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.TEXT_PLAIN_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_PLAIN`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.TEXT_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.TEXT_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.WILDCARD`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.ALL_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `javax.ws.rs.core.MediaType.WILDCARD_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.ALL`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `javax.ws.rs.core.MediaType`
  * newFullyQualifiedTypeName: `org.springframework.http.MediaType`
  * ignoreDefinition: `true`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_ATOM_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_ATOM_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_ATOM_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_JSON`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_JSON_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_OCTET_STREAM`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_XHTML_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_XHTML_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XHTML_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.APPLICATION_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.MULTIPART_FORM_DATA`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.MULTIPART_FORM_DATA_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_FORM_DATA`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.TEXT_HTML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_HTML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.TEXT_HTML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_HTML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.TEXT_PLAIN`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_PLAIN_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.TEXT_PLAIN_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_PLAIN`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.TEXT_XML`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_XML_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.TEXT_XML_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_XML`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.WILDCARD`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.ALL_VALUE`
* [Replace constant with another constant](../../../java/replaceconstantwithanotherconstant)
  * existingFullyQualifiedConstantName: `jakarta.ws.rs.core.MediaType.WILDCARD_TYPE`
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.ALL`
* [Change type](../../../java/changetype)
  * oldFullyQualifiedTypeName: `jakarta.ws.rs.core.MediaType`
  * newFullyQualifiedTypeName: `org.springframework.http.MediaType`
  * ignoreDefinition: `true`

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.mvc.JaxrsToSpringMvcMediaType
displayName: Migrate JAX-RS MediaType to Spring MVC MediaType
description: |
  Replaces all JAX-RS MediaType with Spring MVC MediaType.
recipeList:
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_ATOM_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_ATOM_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_ATOM_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_JSON
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_JSON_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_OCTET_STREAM
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_XHTML_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_XHTML_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XHTML_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.APPLICATION_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.MULTIPART_FORM_DATA
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.MULTIPART_FORM_DATA_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_FORM_DATA
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.TEXT_HTML
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_HTML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.TEXT_HTML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_HTML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.TEXT_PLAIN
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_PLAIN_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.TEXT_PLAIN_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_PLAIN
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.TEXT_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.TEXT_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.WILDCARD
      fullyQualifiedConstantName: org.springframework.http.MediaType.ALL_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: javax.ws.rs.core.MediaType.WILDCARD_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.ALL
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: javax.ws.rs.core.MediaType
      newFullyQualifiedTypeName: org.springframework.http.MediaType
      ignoreDefinition: true
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_ATOM_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_ATOM_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_ATOM_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_FORM_URLENCODED_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_JSON
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_JSON_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_OCTET_STREAM_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_OCTET_STREAM
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_XHTML_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_XHTML_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XHTML_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.APPLICATION_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.MULTIPART_FORM_DATA
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.MULTIPART_FORM_DATA_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_FORM_DATA
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.TEXT_HTML
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_HTML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.TEXT_HTML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_HTML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.TEXT_PLAIN
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_PLAIN_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.TEXT_PLAIN_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_PLAIN
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.TEXT_XML
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_XML_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.TEXT_XML_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_XML
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.WILDCARD
      fullyQualifiedConstantName: org.springframework.http.MediaType.ALL_VALUE
  - org.openrewrite.java.ReplaceConstantWithAnotherConstant:
      existingFullyQualifiedConstantName: jakarta.ws.rs.core.MediaType.WILDCARD_TYPE
      fullyQualifiedConstantName: org.springframework.http.MediaType.ALL
  - org.openrewrite.java.ChangeType:
      oldFullyQualifiedTypeName: jakarta.ws.rs.core.MediaType
      newFullyQualifiedTypeName: org.springframework.http.MediaType
      ignoreDefinition: true

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [Convert JAX-RS annotations to Spring Web](https://docs.moderne.io/user-documentation/recipes/recipe-catalog/java/spring/framework/jaxrstospringweb)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import javax.ws.rs.core.MediaType;
import javax.ws.rs.Produces;

class TestExample {

    @Produces(MediaType.APPLICATION_JSON)
    void updateUser() {}

    String getJsonType() {
        return MediaType.APPLICATION_JSON;
    }

    MediaType getFormType() {
        return MediaType.APPLICATION_FORM_URLENCODED_TYPE;
    }
}
```

###### After
```java
import org.springframework.http.MediaType;

import javax.ws.rs.Produces;

class TestExample {

    @Produces(MediaType.APPLICATION_JSON_VALUE)
    void updateUser() {}

    String getJsonType() {
        return MediaType.APPLICATION_JSON_VALUE;
    }

    MediaType getFormType() {
        return MediaType.APPLICATION_FORM_URLENCODED;
    }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,2 @@
-import javax.ws.rs.core.MediaType;
+import org.springframework.http.MediaType;
+
import javax.ws.rs.Produces;
@@ -6,1 +7,1 @@
class TestExample {

-   @Produces(MediaType.APPLICATION_JSON)
+   @Produces(MediaType.APPLICATION_JSON_VALUE)
    void updateUser() {}
@@ -10,1 +11,1 @@

    String getJsonType() {
-       return MediaType.APPLICATION_JSON;
+       return MediaType.APPLICATION_JSON_VALUE;
    }
@@ -14,1 +15,1 @@

    MediaType getFormType() {
-       return MediaType.APPLICATION_FORM_URLENCODED_TYPE;
+       return MediaType.APPLICATION_FORM_URLENCODED;
    }
```
</TabItem>
</Tabs>


## Usage

<RunRecipe
  recipeName="org.openrewrite.java.spring.mvc.JaxrsToSpringMvcMediaType"
  displayName="Migrate JAX-RS MediaType to Spring MVC MediaType"
  groupId="org.openrewrite.recipe"
  artifactId="rewrite-spring"
  versionKey="VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_SPRING"
  hasDataTables
/>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.java.spring.mvc.JaxrsToSpringMvcMediaType" />

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
