# Remove `test` prefix from JUnit 5 tests

**org.openrewrite.java.testing.cleanup.RemoveTestPrefix**

_Remove `test` from methods with `@Test`, `@ParameterizedTest`, `@RepeatedTest` or `@TestFactory`. They no longer have to prefix test to be usable by JUnit 5._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/cleanup/RemoveTestPrefix.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Example


{% tabs %}
{% tab title="ATest.java" %}

###### Before
{% code title="ATest.java" %}
```java
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class ATest {
    @Test
    void testMethod() {
    }

    @Test
    void test_snake_case() {
    }

    @Nested
    class NestedTestClass {
        @Test
        void testAnotherTestMethod() {
        }
    }

    @Nested
    class AnotherNestedTestClass {
        @Test
        void testYetAnotherTestMethod() {
        }
    }
}
```
{% endcode %}

###### After
{% code title="ATest.java" %}
```java
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

class ATest {
    @Test
    void method() {
    }

    @Test
    void snake_case() {
    }

    @Nested
    class NestedTestClass {
        @Test
        void anotherTestMethod() {
        }
    }

    @Nested
    class AnotherNestedTestClass {
        @Test
        void yetAnotherTestMethod() {
        }
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- ATest.java
+++ ATest.java
@@ -6,1 +6,1 @@
-    void testMethod() {
+    void method() {
@@ -10,1 +10,1 @@
-    void test_snake_case() {
+    void snake_case() {
@@ -16,1 +16,1 @@
-        void testAnotherTestMethod() {
+        void anotherTestMethod() {
@@ -23,1 +23,1 @@
-        void testYetAnotherTestMethod() {
+        void yetAnotherTestMethod() {
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cleanup.RemoveTestPrefix")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.1")
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
            <recipe>org.openrewrite.java.testing.cleanup.RemoveTestPrefix</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.cleanup.RemoveTestPrefix
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Tim te Beek](tim.te.beek@jdriven.com)
* [Knut Wannheden](knut@moderne.io)
* [Patrick](patway99@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Michael Keppler](bananeweizen@gmx.de)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.cleanup.RemoveTestPrefix)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
