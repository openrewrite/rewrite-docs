# Replace PowerMock with raw Mockito

**org.openrewrite.java.testing.mockito.ReplacePowerMockito**

_Replace PowerMock with raw Mockito._

### Tags

* testing
* mockito

## Source

[GitHub](https://github.com/openrewrite/rewrite-testing-frameworks/blob/main/src/main/resources/META-INF/rewrite/mockito.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-testing-frameworks/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-testing-frameworks/2.0.7/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-testing-frameworks
* version: 2.0.7

## Examples
##### Example 1


{% tabs %}
{% tab title="StaticMethodTest.java" %}

###### Before
{% code title="StaticMethodTest.java" %}
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

@PrepareForTest(value = {Calendar.class, Currency.class})
public class StaticMethodTest {

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @Test
    void testWithCalendar() {
        PowerMockito.mockStatic(Calendar.class);
        PowerMockito.mockStatic(Currency.class);
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
    }
}
```
{% endcode %}

###### After
{% code title="StaticMethodTest.java" %}
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class StaticMethodTest {

    private MockedStatic<Currency> mockedCurrency;

    private MockedStatic<Calendar> mockedCalendar;

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @BeforeMethod
    void setUpStaticMocks() {
        mockedCurrency = Mockito.mockStatic(Currency.class);
        mockedCalendar = Mockito.mockStatic(Calendar.class);
    }

    @AfterMethod(alwaysRun = true)
    void tearDownStaticMocks() {
        mockedCalendar.closeOnDemand();
        mockedCurrency.closeOnDemand();
    }

    @Test
    void testWithCalendar() {
        mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- StaticMethodTest.java
+++ StaticMethodTest.java
@@ -7,0 +7,1 @@
import java.util.Locale;

+import org.mockito.MockedStatic;
import org.mockito.Mockito;
@@ -8,2 +9,1 @@

import org.mockito.Mockito;
-import org.powermock.api.mockito.PowerMockito;
-import org.powermock.core.classloader.annotations.PrepareForTest;
+import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
@@ -11,0 +11,1 @@
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
+import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
@@ -13,1 +14,0 @@
import org.testng.annotations.Test;

-@PrepareForTest(value = {Calendar.class, Currency.class})
public class StaticMethodTest {
@@ -16,0 +16,4 @@
public class StaticMethodTest {

+   private MockedStatic<Currency> mockedCurrency;
+
+   private MockedStatic<Calendar> mockedCalendar;
+
    private Calendar calendarMock;
@@ -23,0 +27,12 @@
    }

+   @BeforeMethod
+   void setUpStaticMocks() {
+       mockedCurrency = Mockito.mockStatic(Currency.class);
+       mockedCalendar = Mockito.mockStatic(Calendar.class);
+   }
+
+   @AfterMethod(alwaysRun = true)
+   void tearDownStaticMocks() {
+       mockedCalendar.closeOnDemand();
+       mockedCurrency.closeOnDemand();
+   }
+
    @Test
@@ -25,3 +41,1 @@
    @Test
    void testWithCalendar() {
-       PowerMockito.mockStatic(Calendar.class);
-       PowerMockito.mockStatic(Currency.class);
-       Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
+       mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
@@ -29,1 +43,1 @@
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
-       Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
+       mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}

---

##### Example 2


{% tabs %}
{% tab title="StaticMethodTest.java" %}

###### Before
{% code title="StaticMethodTest.java" %}
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.Mockito;
import org.powermock.api.mockito.PowerMockito;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

@PrepareForTest(value = {Calendar.class, Currency.class})
public class StaticMethodTest {

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @Test
    void testWithCalendar() {
        PowerMockito.mockStatic(Calendar.class);
        PowerMockito.mockStatic(Currency.class);
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
    }
}
```
{% endcode %}

###### After
{% code title="StaticMethodTest.java" %}
```java
import static org.testng.Assert.assertEquals;

import java.util.Calendar;
import java.util.Currency;
import java.util.Locale;

import org.mockito.MockedStatic;
import org.mockito.Mockito;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class StaticMethodTest {

    private MockedStatic<Currency> mockedCurrency;

    private MockedStatic<Calendar> mockedCalendar;

    private Calendar calendarMock;

    @BeforeClass
    void setUp() {
        calendarMock = Mockito.mock(Calendar.class);
    }

    @BeforeMethod
    void setUpStaticMocks() {
        mockedCurrency = Mockito.mockStatic(Currency.class);
        mockedCalendar = Mockito.mockStatic(Calendar.class);
    }

    @AfterMethod(alwaysRun = true)
    void tearDownStaticMocks() {
        mockedCalendar.closeOnDemand();
        mockedCurrency.closeOnDemand();
    }

    @Test
    void testWithCalendar() {
        mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
        mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- StaticMethodTest.java
+++ StaticMethodTest.java
@@ -7,0 +7,1 @@
import java.util.Locale;

+import org.mockito.MockedStatic;
import org.mockito.Mockito;
@@ -8,2 +9,1 @@

import org.mockito.Mockito;
-import org.powermock.api.mockito.PowerMockito;
-import org.powermock.core.classloader.annotations.PrepareForTest;
+import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
@@ -11,0 +11,1 @@
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.testng.annotations.BeforeClass;
+import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
@@ -13,1 +14,0 @@
import org.testng.annotations.Test;

-@PrepareForTest(value = {Calendar.class, Currency.class})
public class StaticMethodTest {
@@ -16,0 +16,4 @@
public class StaticMethodTest {

+   private MockedStatic<Currency> mockedCurrency;
+
+   private MockedStatic<Calendar> mockedCalendar;
+
    private Calendar calendarMock;
@@ -23,0 +27,12 @@
    }

+   @BeforeMethod
+   void setUpStaticMocks() {
+       mockedCurrency = Mockito.mockStatic(Currency.class);
+       mockedCalendar = Mockito.mockStatic(Calendar.class);
+   }
+
+   @AfterMethod(alwaysRun = true)
+   void tearDownStaticMocks() {
+       mockedCalendar.closeOnDemand();
+       mockedCurrency.closeOnDemand();
+   }
+
    @Test
@@ -25,3 +41,1 @@
    @Test
    void testWithCalendar() {
-       PowerMockito.mockStatic(Calendar.class);
-       PowerMockito.mockStatic(Currency.class);
-       Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
+       mockedCalendar.when(() -> Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
@@ -29,1 +43,1 @@
        Mockito.when(Calendar.getInstance(Locale.ENGLISH)).thenReturn(calendarMock);
        assertEquals(Calendar.getInstance(Locale.ENGLISH), calendarMock);
-       Mockito.verify(Currency.getAvailableCurrencies(), Mockito.never());
+       mockedCurrency.verify(Currency::getAvailableCurrencies, Mockito.never());
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
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.java.testing.mockito.ReplacePowerMockito")
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
            <recipe>org.openrewrite.java.testing.mockito.ReplacePowerMockito</recipe>
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
  -Drewrite.activeRecipes=org.openrewrite.java.testing.mockito.ReplacePowerMockito
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove annotation](../../../java/removeannotation.md)
  * annotationPattern: `@org.powermock.core.classloader.annotations.PowerMockIgnore`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.powermock.api.mockito.PowerMockito mockStatic(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
  * returnType: `org.mockito.MockedStatic`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.powermock.api.mockito.PowerMockito do*(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.powermock.api.mockito.PowerMockito mock(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.powermock.api.mockito.PowerMockito spy(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
* [Change method target to static](../../../java/changemethodtargettostatic.md)
  * methodPattern: `org.powermock.api.mockito.PowerMockito when(..)`
  * fullyQualifiedTargetTypeName: `org.mockito.Mockito`
* [Replace `PowerMock.mockStatic()` with `Mockito.mockStatic()`](../../../java/testing/mockito/powermockitomockstatictomockito.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.testing.mockito.ReplacePowerMockito
displayName: Replace PowerMock with raw Mockito
description: Replace PowerMock with raw Mockito.
tags:
  - testing
  - mockito
recipeList:
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @org.powermock.core.classloader.annotations.PowerMockIgnore
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.powermock.api.mockito.PowerMockito mockStatic(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
      returnType: org.mockito.MockedStatic
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.powermock.api.mockito.PowerMockito do*(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.powermock.api.mockito.PowerMockito mock(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.powermock.api.mockito.PowerMockito spy(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
  - org.openrewrite.java.ChangeMethodTargetToStatic:
      methodPattern: org.powermock.api.mockito.PowerMockito when(..)
      fullyQualifiedTargetTypeName: org.mockito.Mockito
  - org.openrewrite.java.testing.mockito.PowerMockitoMockStaticToMockito

```
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Matthias Klauer](mailto:matthias.klauer@sap.com)
* [Knut Wannheden](mailto:knut@moderne.io)
* Josh Soref


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.testing.mockito.ReplacePowerMockito)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
