# Find YAML entries

** org.openrewrite.yaml.search.FindKey**
_Find YAML entries by XPath expression._

## Source

[Github](https://github.com/openrewrite/rewrite-yaml), [Issue Tracker](https://github.com/openrewrite/rewrite-yaml/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-yaml/7.8.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 7.8.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | XPath expression used to find matching keys. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindKeyExample`. 
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindKeyExample
displayName: Find YAML entries example
recipeList:
  - org.openrewrite.yaml.search.FindKey:
      key: /subjects/kind
```
{% endcode %}


Now that `com.yourorg.FindKeyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.2.0")
}

rewrite {
    activeRecipe("com.yourorg.FindKeyExample")
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
            <recipe>com.yourorg.FindKeyExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FindKeyExample`
