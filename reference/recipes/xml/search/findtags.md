# Find XML tags

** org.openrewrite.xml.search.FindTags**
_Find XML tags by XPath expression._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-xml/7.31.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 7.31.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | xPath | An XPath expression used to find matching tags. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindTagsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindTagsExample
displayName: Find XML tags example
recipeList:
  - org.openrewrite.xml.search.FindTags:
      xPath: /dependencies/dependency
```
{% endcode %}


Now that `com.yourorg.FindTagsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("com.yourorg.FindTagsExample")
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
        <version>4.35.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindTagsExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.FindTagsExample`
