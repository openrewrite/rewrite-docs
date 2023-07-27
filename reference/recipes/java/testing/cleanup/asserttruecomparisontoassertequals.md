# Junit `assertTrue(a == b)` to `assertEquals(a,b)`

**org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals**

_Using `assertEquals(a,b)` is simpler and more clear._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/cleanup/AssertTrueComparisonToAssertEquals.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.8/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.8

## Example


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.junit.jupiter.api.Assertions;

public class Test {
    void test() {
        int a = 1;
        int b = 1;
        Assertions.assertTrue(a == b, "a does not equal b");
    }
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.junit.jupiter.api.Assertions;

public class Test {
    void test() {
        int a = 1;
        int b = 1;
        Assertions.assertEquals(a, b, "a does not equal b");
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
@@ -7,1 +7,1 @@
        int a = 1;
        int b = 1;
-       Assertions.assertTrue(a == b, "a does not equal b");
+       Assertions.assertEquals(a, b, "a does not equal b");
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.8` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.8")
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
            <recipe>org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
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
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-testing-frameworks:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Yeikel
* [Patrick](mailto:patway99@gmail.com)
* Ties van de Ven
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Nick McKinney](mailto:mckinneynicholas@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.cleanup.AssertTrueComparisonToAssertEquals)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
