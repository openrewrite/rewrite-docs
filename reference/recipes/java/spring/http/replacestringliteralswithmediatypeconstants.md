# Replace String literals with `MediaType` constants

**org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants**

_Replace String literals with `org.springframework.http.MediaType` constants._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/replace-MediaType-literals.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-spring
* version: 4.36.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-spring:4.36.0` in your build file or by running a shell command (in which case no build changes are needed): 

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-spring:4.36.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.44.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-spring</artifactId>
            <version>4.36.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-spring:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.ALL_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_CBOR_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_GRAPHQL_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_GRAPHQL_RESPONSE_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PDF_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROBLEM_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_PROTOBUF_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_RSS_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_NDJSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_STREAM_JSON_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.APPLICATION_XML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.IMAGE_GIF_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.IMAGE_JPEG_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.IMAGE_PNG_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_MIXED_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.MULTIPART_RELATED_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_HTML_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_MARKDOWN_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_PLAIN_VALUE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.MediaType.TEXT_XML_VALUE`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants
displayName: Replace String literals with `MediaType` constants
description: Replace String literals with `org.springframework.http.MediaType` constants.
recipeList:
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.ALL_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_ATOM_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_CBOR_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_GRAPHQL_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_GRAPHQL_RESPONSE_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_OCTET_STREAM_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PDF_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROBLEM_JSON_UTF8_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROBLEM_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_PROTOBUF_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_RSS_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_NDJSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_STREAM_JSON_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XHTML_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_XML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.IMAGE_GIF_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.IMAGE_JPEG_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.IMAGE_PNG_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_MIXED_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.MULTIPART_RELATED_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_EVENT_STREAM_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_HTML_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_MARKDOWN_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_PLAIN_VALUE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.MediaType.TEXT_XML_VALUE

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.http.ReplaceStringLiteralsWithMediaTypeConstants)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
