# Migrate JUnit 4 `TestCase` to JUnit Jupiter

**org.openrewrite.java.testing.junit5.MigrateJUnitTestCase**

_Convert JUnit 4 `TestCase` to JUnit Jupiter._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/junit5/MigrateJUnitTestCase.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Example


{% tabs %}
{% tab title="MathTest.java" %}

###### Before
{% code title="MathTest.java" %}
```java
import junit.framework.TestCase;

public class MathTest extends TestCase {
    protected long value1;
    protected long value2;

    @Override
    protected void setUp() {
        super.setUp();
        value1 = 2;
        value2 = 3;
    }

    public void testAdd() {
        setName("primitive test");
        long result = value1 + value2;
        assertEquals(5, result);
        fail("some Failure message");
    }

    @Override
    protected void tearDown() {
        super.tearDown();
        value1 = 0;
        value2 = 0;
    }
}
```
{% endcode %}

###### After
{% code title="MathTest.java" %}
```java
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class MathTest {
    protected long value1;
    protected long value2;

    @BeforeEach
    public void setUp() {
        value1 = 2;
        value2 = 3;
    }

    @Test
    public void testAdd() {
        //setName("primitive test");
        long result = value1 + value2;
        assertEquals(5, result);
        fail("some Failure message");
    }

    @AfterEach
    public void tearDown() {
        value1 = 0;
        value2 = 0;
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- MathTest.java
+++ MathTest.java
@@ -1,1 +1,3 @@
-import junit.framework.TestCase;
+import org.junit.jupiter.api.AfterEach;
+import org.junit.jupiter.api.BeforeEach;
+import org.junit.jupiter.api.Test;

@@ -3,1 +5,3 @@
import junit.framework.TestCase;

-public class MathTest extends TestCase {
+import static org.junit.jupiter.api.Assertions.*;
+
+public class MathTest {
    protected long value1;
@@ -7,3 +11,2 @@
    protected long value2;

-   @Override
-   protected void setUp() {
-       super.setUp();
+   @BeforeEach
+   public void setUp() {
        value1 = 2;
@@ -14,0 +17,1 @@
    }

+   @Test
    public void testAdd() {
@@ -15,1 +19,1 @@

    public void testAdd() {
-       setName("primitive test");
+       //setName("primitive test");
        long result = value1 + value2;
@@ -21,3 +25,2 @@
    }

-   @Override
-   protected void tearDown() {
-       super.tearDown();
+   @AfterEach
+   public void tearDown() {
        value1 = 0;
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
    activeRecipe("org.openrewrite.java.testing.junit5.MigrateJUnitTestCase")
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
            <recipe>org.openrewrite.java.testing.junit5.MigrateJUnitTestCase</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.junit5.MigrateJUnitTestCase
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* Patrick Way
* [Knut Wannheden](mailto:knut@moderne.io)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Sam Snyder](mailto:sam@moderne.io)
* [Patrick](mailto:patway99@gmail.com)
* [Aaron Gershman](mailto:aegershman@gmail.com)
* Tyler Van Gorder
* [Tim te Beek](mailto:tim.te.beek@jdriven.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.junit5.MigrateJUnitTestCase)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
