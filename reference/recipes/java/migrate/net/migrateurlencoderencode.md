# Use `java.net.URLEncoder#encode(String, StandardCharsets.UTF_8)`

**org.openrewrite.java.migrate.net.MigrateURLEncoderEncode**

_Use `java.net.URLEncoder#encode(String, StandardCharsets.UTF_8)` instead of the deprecated `java.net.URLEncoder#encode(String)` in Java 10 or higher._

### Tags

* deprecated

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/net/MigrateURLEncoderEncode.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.9

## Example


{% tabs %}
{% tab title="org/openrewrite/example/Test.java" %}

###### Before
{% code title="org/openrewrite/example/Test.java" %}
```java
package org.openrewrite.example;

import java.net.URLEncoder;

class Test {
    public static void method(String url) {
        String message = URLEncoder.encode(url);
    }
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/example/Test.java" %}
```java
package org.openrewrite.example;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

class Test {
    public static void method(String url) {
        String message = URLEncoder.encode(url, StandardCharsets.UTF_8);
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
@@ -4,0 +4,1 @@

import java.net.URLEncoder;
+import java.nio.charset.StandardCharsets;

@@ -7,1 +8,1 @@
class Test {
    public static void method(String url) {
-       String message = URLEncoder.encode(url);
+       String message = URLEncoder.encode(url, StandardCharsets.UTF_8);
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.9` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.25")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.net.MigrateURLEncoderEncode")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.9")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.net.MigrateURLEncoderEncode</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.9</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.net.MigrateURLEncoderEncode
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Aaron Gershman
* [Knut Wannheden](mailto:knut@moderne.io)
* Tyler Van Gorder
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.net.MigrateURLEncoderEncode)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
