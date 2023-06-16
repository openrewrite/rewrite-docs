# Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`

**org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito**

_Replaces `PowerMockito.mockStatic()` by `Mockito.mockStatic()`. Removes the `@PrepareForTest` annotation._

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/java/org/openrewrite/java/testing/mockito/PowerMockitoMockStaticToMockito.java), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.1

## Example


{% tabs %}
{% tab title="MyTest.java" %}

###### Before
{% code title="MyTest.java" %}
```java
import static org.mockito.Mockito.mockStatic;

import java.util.Calendar;

import org.junit.jupiter.api.Test;
import org.powermock.core.classloader.annotations.PrepareForTest;

@PrepareForTest({Calendar.class})
public class MyTest {

    @Test
    void testStaticMethod() {
        mockStatic(Calendar.class);
    }
}
```
{% endcode %}

###### After
{% code title="MyTest.java" %}
```java
import static org.mockito.Mockito.mockStatic;

import java.util.Calendar;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockedStatic;

public class MyTest {

    private MockedStatic<Calendar> mockedCalendar;

    @BeforeEach
    void setUpStaticMocks() {
        mockedCalendar = mockStatic(Calendar.class);
    }

    @AfterEach
    void tearDownStaticMocks() {
        mockedCalendar.closeOnDemand();
    }

    @Test
    void testStaticMethod() {
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
@@ -5,0 +5,2 @@
import java.util.Calendar;

+import org.junit.jupiter.api.AfterEach;
+import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
@@ -6,1 +8,1 @@

import org.junit.jupiter.api.Test;
-import org.powermock.core.classloader.annotations.PrepareForTest;
+import org.mockito.MockedStatic;

@@ -8,1 +10,0 @@
import org.powermock.core.classloader.annotations.PrepareForTest;

-@PrepareForTest({Calendar.class})
public class MyTest {
@@ -11,0 +12,12 @@
public class MyTest {

+   private MockedStatic<Calendar> mockedCalendar;
+
+   @BeforeEach
+   void setUpStaticMocks() {
+       mockedCalendar = mockStatic(Calendar.class);
+   }
+
+   @AfterEach
+   void tearDownStaticMocks() {
+       mockedCalendar.closeOnDemand();
+   }
+
    @Test
@@ -13,1 +26,0 @@
    @Test
    void testStaticMethod() {
-       mockStatic(Calendar.class);
    }
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
    activeRecipe("org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito")
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
            <recipe>org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Matthias Klauer](matthias.klauer@sap.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Knut Wannheden](knut@moderne.io)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
