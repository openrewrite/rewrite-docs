# Find text

**org.openrewrite.java.search.FindText**

_Find occurrences of regular expression based patterns in comments and literals._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindText.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `List` | patterns | A list of regular expressions to search for. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|patterns|`Arrays.asList("test", "12.*")`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
// not this one
// test
// not this one, either
// comment 123
class Test {
    int n = 123;
    String s = "test";
    String s = "mytest";
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
// not this one
/*~~>*/// test
// not this one, either
/*~~>*/// comment 123
class Test {
    int n = /*~~>*/123;
    String s = /*~~>*/"test";
    String s = /*~~>*/"mytest";
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
// not this one
-// test
+/*~~>*/// test
// not this one, either
@@ -4,1 +4,1 @@
// test
// not this one, either
-// comment 123
+/*~~>*/// comment 123
class Test {
@@ -6,3 +6,3 @@
// comment 123
class Test {
-   int n = 123;
-   String s = "test";
-   String s = "mytest";
+   int n = /*~~>*/123;
+   String s = /*~~>*/"test";
+   String s = /*~~>*/"mytest";
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindTextExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindTextExample
displayName: Find text example
recipeList:
  - org.openrewrite.java.search.FindText:
      patterns: -----BEGIN RSA PRIVATE KEY-----
```
{% endcode %}

Now that `com.yourorg.FindTextExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.FindTextExample")
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
            <recipe>com.yourorg.FindTextExample</recipe>
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
* [Sam Snyder](sam@moderne.io)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)
* [Aaron Gershman](aegershman@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.search.FindText)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
