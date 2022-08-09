# Demonstrate rendering of recipe exceptions

** org.openrewrite.java.RecipeExceptionDemonstration**
_Show how recipe exceptions are rendered in various forms of OpenRewrite tooling._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.27.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.27.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns.md) that is used to find matching method declarations/invocations. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.RecipeExceptionDemonstrationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RecipeExceptionDemonstrationExample
displayName: Demonstrate rendering of recipe exceptions example
recipeList:
  - org.openrewrite.java.RecipeExceptionDemonstration:
      methodPattern: org.mockito.Matchers anyVararg()
```
{% endcode %}


Now that `com.yourorg.RecipeExceptionDemonstrationExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.3")
}

rewrite {
    activeRecipe("com.yourorg.RecipeExceptionDemonstrationExample")
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
        <version>4.31.3</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RecipeExceptionDemonstrationExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.RecipeExceptionDemonstrationExample`
