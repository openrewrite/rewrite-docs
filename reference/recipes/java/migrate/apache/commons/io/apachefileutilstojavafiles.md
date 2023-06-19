# Prefer `java.nio.file.Files`

**org.openrewrite.java.migrate.apache.commons.io.ApacheFileUtilsToJavaFiles**

_Prefer the Java standard library's `java.nio.file.Files` over third-party usage of apache's `apache.commons.io.FileUtils`._

### Tags

* apache
* commons

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/apache/commons/io/ApacheFileUtilsToJavaFiles.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.1

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import java.io.File;
import java.nio.charset.Charset;
import org.apache.commons.io.FileUtils;
import java.util.List;

class A {
    byte[] readFileBytes(File file) {
        return FileUtils.readFileToByteArray(file);
    }
    List<String> readLines(File file) {
        return FileUtils.readLines(file);
    }
    List<String> readLinesWithCharset(File file, Charset charset) {
        return FileUtils.readLines(file, charset);
    }
    List<String> readLinesWithCharsetId(File file) {
        return FileUtils.readLines(file, "UTF_8");
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import java.io.File;
import java.nio.charset.Charset;
import java.nio.file.Files;

import java.util.List;

class A {
    byte[] readFileBytes(File file) {
        return Files.readAllBytes(file.toPath());
    }
    List<String> readLines(File file) {
        return Files.readAllLines(file.toPath());
    }
    List<String> readLinesWithCharset(File file, Charset charset) {
        return Files.readAllLines(file.toPath(), charset);
    }
    List<String> readLinesWithCharsetId(File file) {
        return Files.readAllLines(file.toPath(), Charset.forName("UTF_8"));
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- A.java
+++ A.java
@@ -3,1 +3,2 @@
import java.io.File;
import java.nio.charset.Charset;
-import org.apache.commons.io.FileUtils;
+import java.nio.file.Files;
+
import java.util.List;
@@ -8,1 +9,1 @@
class A {
    byte[] readFileBytes(File file) {
-       return FileUtils.readFileToByteArray(file);
+       return Files.readAllBytes(file.toPath());
    }
@@ -11,1 +12,1 @@
    }
    List<String> readLines(File file) {
-       return FileUtils.readLines(file);
+       return Files.readAllLines(file.toPath());
    }
@@ -14,1 +15,1 @@
    }
    List<String> readLinesWithCharset(File file, Charset charset) {
-       return FileUtils.readLines(file, charset);
+       return Files.readAllLines(file.toPath(), charset);
    }
@@ -17,1 +18,1 @@
    }
    List<String> readLinesWithCharsetId(File file) {
-       return FileUtils.readLines(file, "UTF_8");
+       return Files.readAllLines(file.toPath(), Charset.forName("UTF_8"));
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.io.ApacheFileUtilsToJavaFiles")
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
        <version>5.2.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.apache.commons.io.ApacheFileUtilsToJavaFiles</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.apache.commons.io.ApacheFileUtilsToJavaFiles
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick](patway99@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.apache.commons.io.ApacheFileUtilsToJavaFiles)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
