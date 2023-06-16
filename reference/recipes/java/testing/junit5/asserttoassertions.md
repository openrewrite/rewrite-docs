# JUnit 4 `Assert` To JUnit Jupiter `Assertions`

**org.openrewrite.java.testing.junit5.AssertToAssertions**

_Change JUnit 4's `org.junit.Assert` into JUnit Jupiter's `org.junit.jupiter.api.Assertions`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/AssertToAssertions.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import org.junit.Test;

import static org.junit.Assert.assertFalse;

public class MyTest {
    T t = new T();
    @Test
    public void test() {
        assertFalse(t.getName(), MyTest.class.isAssignableFrom(t.getClass()));
    }

    class T {
        String getName() {
            return "World";
        }
    }
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import org.junit.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;

public class MyTest {
    T t = new T();
    @Test
    public void test() {
        assertFalse(MyTest.class.isAssignableFrom(t.getClass()), t.getName());
    }

    class T {
        String getName() {
            return "World";
        }
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
@@ -3,1 +3,1 @@
-import static org.junit.Assert.assertFalse;
+import static org.junit.jupiter.api.Assertions.assertFalse;
@@ -9,1 +9,1 @@
-        assertFalse(t.getName(), MyTest.class.isAssignableFrom(t.getClass()));
+        assertFalse(MyTest.class.isAssignableFrom(t.getClass()), t.getName());
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
    activeRecipe("org.openrewrite.java.testing.junit5.AssertToAssertions")
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
            <recipe>org.openrewrite.java.testing.junit5.AssertToAssertions</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.AssertToAssertions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Greg Adams](gadams@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Nick McKinney](mckinneynicholas@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Patrick Way](pway99@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick](patway99@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Michael Keppler](bananeweizen@gmx.de)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.junit5.AssertToAssertions)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
