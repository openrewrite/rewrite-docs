# Replace String literals with `HttpHeaders` constants

**org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants**

_Replace String literals with `org.springframework.http.HttpHeaders` constants._

## Source

[Github](https://github.com/openrewrite/rewrite-spring/blob/main/src/main/resources/META-INF/rewrite/replace-HttpHeaders-literals.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-spring/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-spring/4.36.0/jar)

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
    activeRecipe("org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants")
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
            <recipe>org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_CHARSET`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_ENCODING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_LANGUAGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_PATCH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCEPT_RANGES`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_MAX_AGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.AGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ALLOW`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.AUTHORIZATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CACHE_CONTROL`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONNECTION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_ENCODING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_DISPOSITION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_LANGUAGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_LENGTH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_LOCATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_RANGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.CONTENT_TYPE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.COOKIE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.DATE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ETAG`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.EXPECT`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.EXPIRES`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.FROM`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.HOST`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_MATCH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_MODIFIED_SINCE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_NONE_MATCH`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_RANGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.IF_UNMODIFIED_SINCE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.LAST_MODIFIED`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.LINK`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.LOCATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.MAX_FORWARDS`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.ORIGIN`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.PRAGMA`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.PROXY_AUTHENTICATE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.PROXY_AUTHORIZATION`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.RANGE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.REFERER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.RETRY_AFTER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.SERVER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.SET_COOKIE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.SET_COOKIE2`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.TE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.TRAILER`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.TRANSFER_ENCODING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.UPGRADE`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.USER_AGENT`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.VARY`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.VIA`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.WARNING`
* [Replace String literal with constant](../../../java/replacestringliteralwithconstant.md)
  * fullyQualifiedConstantName: `org.springframework.http.HttpHeaders.WWW_AUTHENTICATE`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants
displayName: Replace String literals with `HttpHeaders` constants
description: Replace String literals with `org.springframework.http.HttpHeaders` constants.
recipeList:
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_CHARSET
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_ENCODING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_LANGUAGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_PATCH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCEPT_RANGES
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_CREDENTIALS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_HEADERS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_METHODS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_MAX_AGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_HEADERS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.AGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ALLOW
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.AUTHORIZATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CACHE_CONTROL
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONNECTION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_ENCODING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_DISPOSITION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_LANGUAGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_LENGTH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_LOCATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_RANGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.CONTENT_TYPE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.COOKIE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.DATE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ETAG
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.EXPECT
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.EXPIRES
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.FROM
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.HOST
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_MATCH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_MODIFIED_SINCE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_NONE_MATCH
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_RANGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.IF_UNMODIFIED_SINCE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.LAST_MODIFIED
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.LINK
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.LOCATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.MAX_FORWARDS
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.ORIGIN
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.PRAGMA
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.PROXY_AUTHENTICATE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.PROXY_AUTHORIZATION
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.RANGE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.REFERER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.RETRY_AFTER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.SERVER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.SET_COOKIE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.SET_COOKIE2
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.TE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.TRAILER
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.TRANSFER_ENCODING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.UPGRADE
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.USER_AGENT
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.VARY
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.VIA
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.WARNING
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      fullyQualifiedConstantName: org.springframework.http.HttpHeaders.WWW_AUTHENTICATE

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.spring.http.ReplaceStringLiteralsWithHttpHeadersConstants)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
