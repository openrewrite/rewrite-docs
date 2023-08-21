# Prefer `Files#createTempDirectory()`

**org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir**

_Replaces Guava `Files#createTempDir()` with Java `Files#createTempDirectory(..)`. Transformations are limited to scopes throwing or catching `java.io.IOException`._

### Tags

* RSPEC-4738
* guava

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/guava/NoGuavaCreateTempDir.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.9/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.9

## Example


{% tabs %}
{% tab title="A.java" %}

###### Before
{% code title="A.java" %}
```java
import java.io.File;
import java.io.IOException;
import com.google.common.io.Files;

class A {
    void doSomething() throws IOException {
        File dir = Files.createTempDir();
        dir.createNewFile();
    }
    void doSomethingElse() throws Exception {
        File dir = Files.createTempDir();
        dir.createNewFile();
    }
}
```
{% endcode %}

###### After
{% code title="A.java" %}
```java
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

class A {
    void doSomething() throws IOException {
        File dir = Files.createTempDirectory(null).toFile();
        dir.createNewFile();
    }
    void doSomethingElse() throws Exception {
        File dir = Files.createTempDirectory(null).toFile();
        dir.createNewFile();
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
@@ -3,1 +3,1 @@
import java.io.File;
import java.io.IOException;
-import com.google.common.io.Files;
+import java.nio.file.Files;

@@ -7,1 +7,1 @@
class A {
    void doSomething() throws IOException {
-       File dir = Files.createTempDir();
+       File dir = Files.createTempDirectory(null).toFile();
        dir.createNewFile();
@@ -11,1 +11,1 @@
    }
    void doSomethingElse() throws Exception {
-       File dir = Files.createTempDir();
+       File dir = Files.createTempDirectory(null).toFile();
        dir.createNewFile();
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
    activeRecipe("org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir")
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
            <recipe>org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Sam Snyder](mailto:sam@moderne.io)
* Tyler Van Gorder
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Aaron Gershman


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.guava.NoGuavaCreateTempDir)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
