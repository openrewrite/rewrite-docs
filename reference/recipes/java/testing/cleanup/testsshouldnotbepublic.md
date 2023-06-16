# Remove `public` visibility of JUnit 5 tests

**org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic**

_Remove `public` and optionally `protected` modifiers from methods with `@Test`, `@ParameterizedTest`, `@RepeatedTest`, `@TestFactory`, `@BeforeEach`, `@AfterEach`, `@BeforeAll`, or `@AfterAll`. They no longer have to be public visibility to be usable by JUnit 5._

### Tags

* RSPEC-5786

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/cleanup/TestsShouldNotBePublic.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Boolean` | removeProtectedModifiers | *Optional*. Also remove protected modifiers from test methods |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|removeProtectedModifiers|`false`|


{% tabs %}
{% tab title="ATest.java" %}

###### Before
{% code title="ATest.java" %}
```java
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

public class ATest {

    @Test
    void testMethod() {
    }

    @Nested
    public class NestedTestClass {

        @Test
        void anotherTestMethod() {
        }
    }

    @Nested
    public class AnotherNestedTestClass {

        private static final String CONSTANT = "foo";

        private void setup() {
        }

        @Test
        void anotherTestMethod() {
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
    void testMethod() {
    }

    @Nested
    class NestedTestClass {

        @Test
        void anotherTestMethod() {
        }
    }

    @Nested
    class AnotherNestedTestClass {

        private static final String CONSTANT = "foo";

        private void setup() {
        }

        @Test
        void anotherTestMethod() {
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
@@ -4,1 +4,1 @@
-public class ATest {
+class ATest {
@@ -11,1 +11,1 @@
-    public class NestedTestClass {
+    class NestedTestClass {
@@ -19,1 +19,1 @@
-    public class AnotherNestedTestClass {
+    class AnotherNestedTestClass {
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
    id("org.openrewrite.rewrite") version("6.1.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic")
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
            <recipe>org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
```
{% endcode %}
{% endtab %}
{% endtabs %}
## Contributors
* [Aurélien Mino](aurelien.mino@gmail.com)
* [Patrick](patway99@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [sullis](github@seansullivan.com)
* [Tim te Beek](tim@moderne.io)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Michael Keppler](bananeweizen@gmx.de)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
