# Use modernized `java.net` APIs

**org.openrewrite.java.migrate.net.JavaNetAPIs**

_Certain Java networking APIs have become deprecated and their usages changed, necessitating usage changes._

### Tags

* networking

## Source

[Github](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-net-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/1.21.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 1.21.1

## Contributors
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Sam Snyder](sam@moderne.io)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:1.21.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.net.JavaNetAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:1.21.1")
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
        <version>4.45.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.net.JavaNetAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>1.21.1</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.net.JavaNetAPIs
```
{% endcode %}
{% endtab %}
{% endtabs %}

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
displayName: Use modernized `java.net` APIs
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.net.JavaNetAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
