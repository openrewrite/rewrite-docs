# Assertion arguments should be passed in the correct order

**org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder**

_Assertions such as `org.junit.Assert.assertEquals` expect the first argument to be the expected value and the second argument to be the actual value; for `org.testng.Assert`, it’s the other way around.  This recipe detects `J.Literal`, `J.NewArray`, and `java.util.Iterable` arguments swapping them if necessary so that the error messages will be confusing._

### Tags

* RSPEC-3415

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/cleanup/AssertionsArgumentOrder.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import static org.junit.jupiter.api.Assertions.assertEquals;

class MyTest {
    void someMethod() {
        assertEquals(result(), "result");
        assertEquals(result(), "result", "message");
        assertEquals(0L, 1L);
    }
    String result() {
        return "result";
    }
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import static org.junit.jupiter.api.Assertions.assertEquals;

class MyTest {
    void someMethod() {
        assertEquals("result", result());
        assertEquals("result", result(), "message");
        assertEquals(0L, 1L);
    }
    String result() {
        return "result";
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MyTest.java
+++ MyTest.java
@@ -5,2 +5,2 @@
class MyTest {
    void someMethod() {
-       assertEquals(result(), "result");
-       assertEquals(result(), "result", "message");
+       assertEquals("result", result());
+       assertEquals("result", result(), "message");
        assertEquals(0L, 1L);
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.7")
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
            <recipe>org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.7</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Patrick](mailto:patway99@gmail.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.cleanup.AssertionsArgumentOrder)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
