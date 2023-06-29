# Replace String literal with constant

**org.openrewrite.java.ReplaceStringLiteralWithConstant**

_Replace String literal with constant, adding import on class if needed._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/ReplaceStringLiteralWithConstant.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | literalValue | *Optional*. The literal that is to be replaced. If not configured, the value of the specified constant will be used by default. |
| `String` | fullyQualifiedConstantName |  |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|literalValue|`EXAMPLE_STRING_CONSTANT`|
|fullyQualifiedConstantName|`EXAMPLE_STRING_FQN`|


{% tabs %}
{% tab title="org/openrewrite/java/Test.java" %}

###### Before
{% code title="org/openrewrite/java/Test.java" %}
```java
package org.openrewrite.java;

class Test {
    Object o = "Hello World!";
}
```
{% endcode %}

###### After
{% code title="org/openrewrite/java/Test.java" %}
```java
package org.openrewrite.java;

class Test {
    Object o = ReplaceStringLiteralWithConstantTest.EXAMPLE_STRING_CONSTANT;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- org/openrewrite/java/Test.java
+++ org/openrewrite/java/Test.java
@@ -4,1 +4,1 @@

class Test {
-   Object o = "Hello World!";
+   Object o = ReplaceStringLiteralWithConstantTest.EXAMPLE_STRING_CONSTANT;
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ReplaceStringLiteralWithConstantExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ReplaceStringLiteralWithConstantExample
displayName: Replace String literal with constant example
recipeList:
  - org.openrewrite.java.ReplaceStringLiteralWithConstant:
      literalValue: application/json
      fullyQualifiedConstantName: org.springframework.http.MediaType.APPLICATION_JSON_VALUE
```
{% endcode %}

Now that `com.yourorg.ReplaceStringLiteralWithConstantExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.ReplaceStringLiteralWithConstantExample")
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
        <version>5.2.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ReplaceStringLiteralWithConstantExample</recipe>
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
* [AlexanderSkrock](alexanderskrock@gmx.de)
* [srmalkan](smitmalkan99@gmail.com)
* [Tim te Beek](tim@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.ReplaceStringLiteralWithConstant)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
