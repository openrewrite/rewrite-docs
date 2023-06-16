# Find annotations

**org.openrewrite.java.search.FindAnnotations**

_Find all annotations matching the annotation pattern._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/search/FindAnnotations.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | annotationPattern | An annotation pattern, expressed as a [method pattern](/reference/method-patterns.md). |
| `Boolean` | matchMetaAnnotations | *Optional*. When enabled, matches on meta annotations of the annotation pattern. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|annotationPattern|`@javax.annotation.Nonnull`|
|matchMetaAnnotations|`true`|


{% tabs %}
{% tab title="Test.java" %}

###### Before
{% code title="Test.java" %}
```java
import org.openrewrite.internal.lang.Nullable;
public class Test {
    @Nullable String name;
}
```
{% endcode %}

###### After
{% code title="Test.java" %}
```java
import org.openrewrite.internal.lang.Nullable;
public class Test {
    /*~~>*/@Nullable String name;
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- Test.java
+++ Test.java
@@ -3,1 +3,1 @@
-    @Nullable String name;
+    /*~~>*/@Nullable String name;
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindAnnotationsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindAnnotationsExample
displayName: Find annotations example
recipeList:
  - org.openrewrite.java.search.FindAnnotations:
      annotationPattern: '@java.lang.SuppressWarnings("deprecation")'
      matchMetaAnnotations: null
```
{% endcode %}

Now that `com.yourorg.FindAnnotationsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.FindAnnotationsExample")
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
            <recipe>com.yourorg.FindAnnotationsExample</recipe>
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
* [Greg Adams](greg@moderne.io)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Sam Snyder](sam@moderne.io)
* [Patrick Way](pway99@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.java.search.FindAnnotations)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
