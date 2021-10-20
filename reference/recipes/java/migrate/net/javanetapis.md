# Migrate deprecated `java.net` APIs

** org.openrewrite.java.migrate.net.JavaNetAPIs**
_Certain Java networking APIs have become deprecated and their usages changed, necessitating usage changes._

### Tags

* networking

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-migrate-java/0.10.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 0.10.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-migrate-java:0.10.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.net.JavaNetAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:0.10.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.13.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.net.JavaNetAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>0.10.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.java.migrate.net.JavaNetAPIs`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Use `java.net.MulticastSocket#setTimeToLive(int)`](../../../java/migrate/net/migratemulticastsocketsetttltosettimetolive.md)
* [Use `java.net.MulticastSocket#getTimeToLive()`](../../../java/migrate/net/migratemulticastsocketgetttltogettimetolive.md)
* [Use `java.net.HttpURLConnection.HTTP_INTERNAL_ERROR`](../../../java/migrate/net/migratehttpurlconnectionhttpservererrortohttpinternalerror.md)
* [Use `java.net.URLDecoder#decode(String, StandardCharsets.UTF_8)`](../../../java/migrate/net/migrateurldecoderdecode.md)
* [Use `java.net.URLEncoder#encode(String, StandardCharsets.UTF_8)`](../../../java/migrate/net/migrateurlencoderencode.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.net.JavaNetAPIs
displayName: Migrate deprecated `java.net` APIs
description: Certain Java networking APIs have become deprecated and their usages changed, necessitating usage changes.
tags:
  - networking
recipeList:
  - org.openrewrite.java.migrate.net.MigrateMulticastSocketSetTTLToSetTimeToLive
  - org.openrewrite.java.migrate.net.MigrateMulticastSocketGetTTLToGetTimeToLive
  - org.openrewrite.java.migrate.net.MigrateHttpURLConnectionHttpServerErrorToHttpInternalError
  - org.openrewrite.java.migrate.net.MigrateURLDecoderDecode
  - org.openrewrite.java.migrate.net.MigrateURLEncoderEncode

```
{% endtab %}
{% endtabs %}
