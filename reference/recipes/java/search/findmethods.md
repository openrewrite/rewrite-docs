# Find method usages

**org.openrewrite.java.search.FindMethods**

_Find method usages by pattern._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindMethods.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations. |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |

## Data Tables (Only available on the [Moderne platform](https://public.moderne.io/))

### Method calls

_The text of matching method invocations._

| Column Name | Description |
| ----------- | ----------- |
| Source file | The source file that the method call occurred in. |
| Method call | The text of the method call. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|methodPattern|`A <constructor>(String)`|
|matchOverrides|`false`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
class Test {
    A a = new A("test");
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
class Test {
    A a = /*~~>*/new A("test");
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -2,1 +2,1 @@
class Test {
-   A a = new A("test");
+   A a = /*~~>*/new A("test");
}
```
{% endcode %}
{% endtab %}
{% endtabs %}

###### Unchanged
{% code title="A.java" %}
```java
class A {
    public A(String s) {}
}
```
{% endcode %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindMethodsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindMethodsExample
displayName: Find method usages example
recipeList:
  - org.openrewrite.java.search.FindMethods:
      methodPattern: java.util.List add(..)
      matchOverrides: null
```
{% endcode %}

Now that `com.yourorg.FindMethodsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.FindMethodsExample")
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
        <version>5.2.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindMethodsExample</recipe>
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
* [Jonathan Schneider](jkschneider@gmail.com)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Greg Adams](greg@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.search.FindMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
