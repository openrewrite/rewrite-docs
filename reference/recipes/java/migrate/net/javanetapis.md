# Use modernized `java.net` APIs

**org.openrewrite.java.migrate.net.JavaNetAPIs**

_Certain Java networking APIs have become deprecated and their usages changed, necessitating usage changes._

### Tags

* networking

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/resources/META-INF/rewrite/java-net-apis.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Examples
##### Example 1


{% tabs %}
{% tab title="org/openrewrite/example/Test.java" %}

###### Before
{% code title="org/openrewrite/example/Test.java" %}
```java
package org.openrewrite.example;

import java.net.MulticastSocket;

public class Test {
    public static void method() {
        MulticastSocket s = new MulticastSocket(0);
        s.getTTL();
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/example/Test.java" %}
```java
package org.openrewrite.example;

import java.net.MulticastSocket;

public class Test {
    public static void method() {
        MulticastSocket s = new MulticastSocket(0);
        s.getTimeToLive();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/example/Test.java
+++ org/openrewrite/example/Test.java
@@ -8,1 +8,1 @@
    public static void method() {
        MulticastSocket s = new MulticastSocket(0);
-       s.getTTL();
+       s.getTimeToLive();
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="org/openrewrite/example/Test.java" %}

###### Before
{% code title="org/openrewrite/example/Test.java" %}
```java
package org.openrewrite.example;

import java.net.MulticastSocket;

public class Test {
    public static void method() {
        MulticastSocket s = new MulticastSocket(0);
        s.getTTL();
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/example/Test.java" %}
```java
package org.openrewrite.example;

import java.net.MulticastSocket;

public class Test {
    public static void method() {
        MulticastSocket s = new MulticastSocket(0);
        s.getTimeToLive();
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/example/Test.java
+++ org/openrewrite/example/Test.java
@@ -8,1 +8,1 @@
    public static void method() {
        MulticastSocket s = new MulticastSocket(0);
-       s.getTTL();
+       s.getTimeToLive();
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.net.JavaNetAPIs")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.1")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.net.JavaNetAPIs</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.1</version>
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

## Contributors
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)
* [Knut Wannheden](knut@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.net.JavaNetAPIs)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
