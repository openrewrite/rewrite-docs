# Find files

** org.openrewrite.FindSourceFiles**
_Find files by source path._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-core/7.27.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 7.27.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | filePattern | A glob expression representing a file path to search for (relative to the project root). |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindSourceFilesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindSourceFilesExample
displayName: Find files example
recipeList:
  - org.openrewrite.FindSourceFiles:
      filePattern: .github/workflows/*.yml
```
{% endcode %}


Now that `com.yourorg.FindSourceFilesExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.26.1")
}

rewrite {
    activeRecipe("com.yourorg.FindSourceFilesExample")
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
        <version>4.31.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindSourceFilesExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.FindSourceFilesExample`
