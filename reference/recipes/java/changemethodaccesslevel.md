# Change method access level

**org.openrewrite.java.ChangeMethodAccessLevel**

_Change the access level (public, protected, private, package private) of a method._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ChangeMethodAccessLevel.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method declarations/invocations. |
| `String` | newAccessLevel | New method access level to apply to the method. |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|methodPattern|`com.abc.A aMethod(..)`|
|newAccessLevel|`private`|
|matchOverrides|`null`|


{% tabs %}
{% tab title="com/abc/A.java" %}

###### Before
{% code title="com/abc/A.java" %}
```java
package com.abc;

class A {
    @SuppressWarnings("ALL") // comment
    public void aMethod(String s) {
    }

    // comment
    @SuppressWarnings("ALL")
    public void aMethod() {
    }

    // comment
    public void aMethod(Integer i) {
    }

    public void aMethod(Double i) {
    }
}
```
{% endcode %}

###### After
{% code title="com/abc/A.java" %}
```java
package com.abc;

class A {
    @SuppressWarnings("ALL") // comment
    private void aMethod(String s) {
    }

    // comment
    @SuppressWarnings("ALL")
    private void aMethod() {
    }

    // comment
    private void aMethod(Integer i) {
    }

    private void aMethod(Double i) {
    }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- com/abc/A.java
+++ com/abc/A.java
@@ -5,1 +5,1 @@
class A {
    @SuppressWarnings("ALL") // comment
-   public void aMethod(String s) {
+   private void aMethod(String s) {
    }
@@ -10,1 +10,1 @@
    // comment
    @SuppressWarnings("ALL")
-   public void aMethod() {
+   private void aMethod() {
    }
@@ -14,1 +14,1 @@

    // comment
-   public void aMethod(Integer i) {
+   private void aMethod(Integer i) {
    }
@@ -17,1 +17,1 @@
    }

-   public void aMethod(Double i) {
+   private void aMethod(Double i) {
    }
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeMethodAccessLevelExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeMethodAccessLevelExample
displayName: Change method access level example
recipeList:
  - org.openrewrite.java.ChangeMethodAccessLevel:
      methodPattern: org.mockito.Matchers anyVararg()
      newAccessLevel: public
      matchOverrides: null
```
{% endcode %}

Now that `com.yourorg.ChangeMethodAccessLevelExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.ChangeMethodAccessLevelExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}
{% tab title="Maven" %}
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
            <recipe>com.yourorg.ChangeMethodAccessLevelExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ChangeMethodAccessLevel)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
