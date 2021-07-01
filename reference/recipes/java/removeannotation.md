# Remove annotation

 **org.openrewrite.java.RemoveAnnotation** _Remove matching annotations wherever they occur._

## Source

[Github](https://github.com/openrewrite/rewrite-java), [Issue Tracker](https://github.com/openrewrite/rewrite-java/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.8.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.8.0

## Options

| Type | Name | Description |
| :--- | :--- | :--- |
| `String` | annotationPattern | An annotation pattern, expressed as a [pointcut expression](https://github.com/openrewrite/rewrite-docs/tree/62ee4f2f98d7989196cf8b806bace39e85cbc740/v1beta/pointcut-expressions/README.md). |

## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.RemoveAnnotationExample`. Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveAnnotationExample
displayName: Remove annotation example
recipeList:
  - org.openrewrite.java.RemoveAnnotation:
      annotationPattern: @java.lang.SuppressWarnings("deprecation")
```
{% endcode %}

Now that `com.yourorg.RemoveAnnotationExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
}

rewrite {
    activeRecipe("com.yourorg.RemoveAnnotationExample")
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
        <version>4.6.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveAnnotationExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.RemoveAnnotationExample`

