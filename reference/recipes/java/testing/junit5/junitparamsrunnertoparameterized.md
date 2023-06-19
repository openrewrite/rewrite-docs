# Pragmatists @RunWith(JUnitParamsRunner.class) to JUnit Jupiter Parameterized Tests

**org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized**

_Convert Pragmatists Parameterized test to the JUnit Jupiter ParameterizedTest equivalent._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/JUnitParamsRunnerToParameterized.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.2

## Example


{% tabs %}
{% tab title="PersonTests.java" %}

###### Before
{% code title="PersonTests.java" %}
```java
import org.junit.Test;
import org.junit.runner.RunWith;
import junitparams.JUnitParamsRunner;
import junitparams.Parameters;

@RunWith(JUnitParamsRunner.class)
public class PersonTests {

    @Test
    @Parameters
    public void personIsAdult(int age, boolean valid) {
    }

    private Object[] parametersForPersonIsAdult() {
        return new Object[]{new Object[]{13, false}, new Object[]{17, false}};
    }

    @Test
    @Parameters
    public void personIsChild(int age, boolean valid) {
    }

    private Object[] parametersForPersonIsChild() {
        return new Object[]{new Object[]{3, false}, new Object[]{7, false}};
    }
}
```
{% endcode %}

###### After
{% code title="PersonTests.java" %}
```java
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.MethodSource;

public class PersonTests {

    @ParameterizedTest
    @MethodSource("parametersForPersonIsAdult")
    public void personIsAdult(int age, boolean valid) {
    }

    private static Object[] parametersForPersonIsAdult() {
        return new Object[]{new Object[]{13, false}, new Object[]{17, false}};
    }

    @ParameterizedTest
    @MethodSource("parametersForPersonIsChild")
    public void personIsChild(int age, boolean valid) {
    }

    private static Object[] parametersForPersonIsChild() {
        return new Object[]{new Object[]{3, false}, new Object[]{7, false}};
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- PersonTests.java
+++ PersonTests.java
@@ -1,4 +1,2 @@
-import org.junit.Test;
-import org.junit.runner.RunWith;
-import junitparams.JUnitParamsRunner;
-import junitparams.Parameters;
+import org.junit.jupiter.params.ParameterizedTest;
+import org.junit.jupiter.params.provider.MethodSource;

@@ -6,1 +4,0 @@
import junitparams.Parameters;

-@RunWith(JUnitParamsRunner.class)
public class PersonTests {
@@ -9,2 +6,2 @@
public class PersonTests {

-   @Test
-   @Parameters
+   @ParameterizedTest
+   @MethodSource("parametersForPersonIsAdult")
    public void personIsAdult(int age, boolean valid) {
@@ -14,1 +11,1 @@
    }

-   private Object[] parametersForPersonIsAdult() {
+   private static Object[] parametersForPersonIsAdult() {
        return new Object[]{new Object[]{13, false}, new Object[]{17, false}};
@@ -18,2 +15,2 @@
    }

-   @Test
-   @Parameters
+   @ParameterizedTest
+   @MethodSource("parametersForPersonIsChild")
    public void personIsChild(int age, boolean valid) {
@@ -23,1 +20,1 @@
    }

-   private Object[] parametersForPersonIsChild() {
+   private static Object[] parametersForPersonIsChild() {
        return new Object[]{new Object[]{3, false}, new Object[]{7, false}};
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-testing-frameworks:2.0.2")
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
            <recipe>org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-testing-frameworks</artifactId>
            <version>2.0.2</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Patrick Way](pway99@users.noreply.github.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)
* [Knut Wannheden](knut@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.JUnitParamsRunnerToParameterized)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
