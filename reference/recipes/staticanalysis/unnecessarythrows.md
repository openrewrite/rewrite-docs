# Unnecessary throws

**org.openrewrite.staticanalysis.UnnecessaryThrows**

_Remove unnecessary `throws` declarations. This recipe will only remove unused, checked exception if:

- The declaring class or the method declaration is `final`.
- The method declaration is `static` or `private`.
- If the method overriding a method declaration in a super class and the super does not throw the exception.
- If the method is `public` or `protected` and the exception is not documented via a JavaDoc as a `@throws` tag._

### Tags

* RSPEC-1130

## Source

[GitHub](https://github.com/openrewrite/rewrite-static-analysis/blob/main/src/main/java/org/openrewrite/staticanalysis/UnnecessaryThrows.java), [Issue Tracker](https://github.com/openrewrite/rewrite-static-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-static-analysis/1.0.4/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-static-analysis
* version: 1.0.4

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UncheckedIOException;
class Test {
    private void test() throws FileNotFoundException, UncheckedIOException {
    }

    void test() throws IOException, UncheckedIOException {
        new FileInputStream("test");
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UncheckedIOException;
class Test {
    private void test() throws UncheckedIOException {
    }

    void test() throws IOException, UncheckedIOException {
        new FileInputStream("test");
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
@@ -2,1 +2,0 @@
import java.io.FileInputStream;
-import java.io.FileNotFoundException;
import java.io.IOException;
@@ -6,1 +5,1 @@
import java.io.UncheckedIOException;
class Test {
-   private void test() throws FileNotFoundException, UncheckedIOException {
+   private void test() throws UncheckedIOException {
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-static-analysis:1.0.4` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.staticanalysis.UnnecessaryThrows")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-static-analysis:1.0.4")
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
            <recipe>org.openrewrite.staticanalysis.UnnecessaryThrows</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-static-analysis</artifactId>
            <version>1.0.4</version>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-static-analysis:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.staticanalysis.UnnecessaryThrows
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* Tyler Van Gorder
* [Sam Snyder](mailto:sam@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.staticanalysis.UnnecessaryThrows)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
