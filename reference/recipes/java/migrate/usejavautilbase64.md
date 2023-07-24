# Prefer `java.util.Base64` instead of `sun.misc`

**org.openrewrite.java.migrate.UseJavaUtilBase64**

_Prefer `java.util.Base64` instead of using `sun.misc` in Java 8 or higher. `sun.misc` is not exported by the Java module system and accessing this class will result in a warning in Java 11 and an error in Java 17._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/UseJavaUtilBase64.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.8

## Example


{% tabs %}
{% tab title="test/sun/misc/Test.java" %}

###### Before
{% code title="test/sun/misc/Test.java" %}
```java
package test.sun.misc;

import test.sun.misc.BASE64Encoder;
import test.sun.misc.BASE64Decoder;
import java.io.IOException;

class Test {
    void test(byte[] bBytes) {
        BASE64Encoder encoder = new BASE64Encoder();
        String encoded = encoder.encode(bBytes);
        encoded += encoder.encodeBuffer(bBytes);
        try {
            byte[] decoded = new BASE64Decoder().decodeBuffer(encoded);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```
{% endcode %}

###### After
{% code title="test/sun/misc/Test.java" %}
```java
package test.sun.misc;

import java.util.Base64;

class Test {
    void test(byte[] bBytes) {
        Base64.Encoder encoder = Base64.getEncoder();
        String encoded = encoder.encodeToString(bBytes);
        encoded += encoder.encodeToString(bBytes);
        byte[] decoded = Base64.getDecoder().decode(encoded);
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- test/sun/misc/Test.java
+++ test/sun/misc/Test.java
@@ -3,3 +3,1 @@
package test.sun.misc;

-import test.sun.misc.BASE64Encoder;
-import test.sun.misc.BASE64Decoder;
-import java.io.IOException;
+import java.util.Base64;

@@ -9,8 +7,4 @@
class Test {
    void test(byte[] bBytes) {
-       BASE64Encoder encoder = new BASE64Encoder();
-       String encoded = encoder.encode(bBytes);
-       encoded += encoder.encodeBuffer(bBytes);
-       try {
-           byte[] decoded = new BASE64Decoder().decodeBuffer(encoded);
-       } catch (IOException e) {
-           e.printStackTrace();
-       }
+       Base64.Encoder encoder = Base64.getEncoder();
+       String encoded = encoder.encodeToString(bBytes);
+       encoded += encoder.encodeToString(bBytes);
+       byte[] decoded = Base64.getDecoder().decode(encoded);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.UseJavaUtilBase64")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.8")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.UseJavaUtilBase64</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.8</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.UseJavaUtilBase64
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.UseJavaUtilBase64)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
