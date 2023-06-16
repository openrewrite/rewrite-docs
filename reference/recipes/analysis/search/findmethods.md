# Find method usages

**org.openrewrite.analysis.search.FindMethods**

_Find method usages by pattern._

## Source

[GitHub](https://github.com/openrewrite/rewrite-analysis/blob/main/src/main/java/org/openrewrite/analysis/search/FindMethods.java), [Issue Tracker](https://github.com/openrewrite/rewrite-analysis/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.meta/rewrite-analysis/2.0.1/jar)

* groupId: org.openrewrite.meta
* artifactId: rewrite-analysis
* version: 2.0.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method invocations. |
| `Boolean` | matchOverrides | *Optional*. When enabled, find methods that are overrides of the [method pattern](/reference/method-patterns.md). |
| `String` | flow | *Optional*. When enabled, show the data or taint flow of the method invocation. |

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
|flow|`null`|


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
  - org.openrewrite.analysis.search.FindMethods:
      methodPattern: java.util.List add(..)
      matchOverrides: null
      flow: null
```
{% endcode %}

Now that `com.yourorg.FindMethodsExample` has been defined activate it and take a dependency on org.openrewrite.meta:rewrite-analysis:2.0.1 in your build file:
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

dependencies {
    rewrite("org.openrewrite.meta:rewrite-analysis:2.0.1")
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
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.meta</groupId>
            <artifactId>rewrite-analysis</artifactId>
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
{% endtabs %}

## Contributors
* [Jonathan Leitschuh](Jonathan.Leitschuh@gmail.com)
* [Knut Wannheden](knut@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.analysis.search.FindMethods)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
