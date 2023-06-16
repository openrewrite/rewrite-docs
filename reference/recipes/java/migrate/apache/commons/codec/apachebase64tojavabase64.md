# Prefer `java.util.Base64`

**org.openrewrite.java.migrate.apache.commons.codec.ApacheBase64ToJavaBase64**

_Prefer the Java standard library's `java.util.Base64` over third-party usage of apache's `apache.commons.codec.binary.Base64`._

### Tags

* apache
* commons

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/apache/commons/codec/ApacheBase64ToJavaBase64.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.apache.commons.codec.binary.Base64;

class Test {
    static byte[] decodeBytes(byte[] encodedBytes) {
        return Base64.decodeBase64(encodedBytes);
    }
    static byte[] decodeToBytes(String encodedString) {
        return Base64.decodeBase64(encodedString);
    }
    static String encodeToString(byte[] decodedByteArr) {
        return Base64.encodeBase64String(decodedByteArr);
    }
    static byte[] encodeBase64(byte[] binaryData) {
        return Base64.encodeBase64(binaryData);
    }
    static byte[] encodeBytesUrlSafe(byte [] encodeBytes) {
        return Base64.encodeBase64URLSafe(encodeBytes);
    }
    static String encodeBytesUrlSafeString(byte [] encodeBytes) {
        return Base64.encodeBase64URLSafeString(encodeBytes);
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.util.Base64;

class Test {
    static byte[] decodeBytes(byte[] encodedBytes) {
        return Base64.getDecoder().decode(encodedBytes);
    }
    static byte[] decodeToBytes(String encodedString) {
        return Base64.getDecoder().decode(encodedString);
    }
    static String encodeToString(byte[] decodedByteArr) {
        return Base64.getEncoder().encodeToString(decodedByteArr);
    }
    static byte[] encodeBase64(byte[] binaryData) {
        return Base64.getEncoder().encode(binaryData);
    }
    static byte[] encodeBytesUrlSafe(byte [] encodeBytes) {
        return Base64.getUrlEncoder().withoutPadding().encode(encodeBytes);
    }
    static String encodeBytesUrlSafeString(byte [] encodeBytes) {
        return Base64.getUrlEncoder().withoutPadding().encodeToString(encodeBytes);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -1,1 +1,1 @@
-import org.apache.commons.codec.binary.Base64;
+import java.util.Base64;
@@ -5,1 +5,1 @@
-        return Base64.decodeBase64(encodedBytes);
+        return Base64.getDecoder().decode(encodedBytes);
@@ -8,1 +8,1 @@
-        return Base64.decodeBase64(encodedString);
+        return Base64.getDecoder().decode(encodedString);
@@ -11,1 +11,1 @@
-        return Base64.encodeBase64String(decodedByteArr);
+        return Base64.getEncoder().encodeToString(decodedByteArr);
@@ -14,1 +14,1 @@
-        return Base64.encodeBase64(binaryData);
+        return Base64.getEncoder().encode(binaryData);
@@ -17,1 +17,1 @@
-        return Base64.encodeBase64URLSafe(encodeBytes);
+        return Base64.getUrlEncoder().withoutPadding().encode(encodeBytes);
@@ -20,1 +20,1 @@
-        return Base64.encodeBase64URLSafeString(encodeBytes);
+        return Base64.getUrlEncoder().withoutPadding().encodeToString(encodeBytes);
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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.codec.ApacheBase64ToJavaBase64")
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
            <recipe>org.openrewrite.java.migrate.apache.commons.codec.ApacheBase64ToJavaBase64</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.apache.commons.codec.ApacheBase64ToJavaBase64
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Patrick](patway99@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.migrate.apache.commons.codec.ApacheBase64ToJavaBase64)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
