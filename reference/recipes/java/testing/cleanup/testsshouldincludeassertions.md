# Include an assertion in tests

**org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions**

_For tests not having any assertions, wrap the statements with JUnit Jupiter's `Assertions#assertThrowDoesNotThrow(..)`._

### Tags

* RSPEC-2699

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/cleanup/TestsShouldIncludeAssertions.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | additionalAsserts | *Optional*. A comma delimited list of packages and/or classes that will be identified as assertions. I.E. a common assertion utility `org.foo.TestUtil`. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|additionalAsserts|`null`|


{% tabs %}
{% tab title="AaTest.java" %}

###### Before
{% code title="AaTest.java" %}
```java
import org.junit.jupiter.api.Test;
public class AaTest {
    @Test
    public void methodTest() {
        Integer it = Integer.valueOf("2");
        System.out.println(it);
    }
}
```
{% endcode %}

###### After
{% code title="AaTest.java" %}
```java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;

public class AaTest {
    @Test
    public void methodTest() {
        assertDoesNotThrow(() -> {
            Integer it = Integer.valueOf("2");
            System.out.println(it);
        });
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- AaTest.java
+++ AaTest.java
@@ -2,0 +2,3 @@
import org.junit.jupiter.api.Test;
+
+import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
+
public class AaTest {
@@ -5,2 +8,4 @@
    @Test
    public void methodTest() {
-       Integer it = Integer.valueOf("2");
-       System.out.println(it);
+       assertDoesNotThrow(() -> {
+           Integer it = Integer.valueOf("2");
+           System.out.println(it);
+       });
    }
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
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions")
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
        <version>5.3.1</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Tracey Yoshima](mailto:tracey.yoshima@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Patrick](mailto:patway99@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Knut Wannheden](mailto:knut@moderne.io)
* [Michael Keppler](mailto:bananeweizen@gmx.de)
* [Aaron Gershman](mailto:aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.cleanup.TestsShouldIncludeAssertions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
