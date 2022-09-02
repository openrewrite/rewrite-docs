# Remove interface implementations

** org.openrewrite.java.RemoveImplements**
_Removes `implements` clauses from classes implementing the specified interface. Removes `@Overrides` annotations from methods which no longer override anything._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.29.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.29.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | interfaceType | The fully qualified name of the interface to remove. |
| `String` | filter | Only apply the interface removal to classes with fully qualified names that begin with this filter. `null` or empty matches all classes. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.RemoveImplementsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveImplementsExample
displayName: Remove interface implementations example
recipeList:
  - org.openrewrite.java.RemoveImplements:
      interfaceType: java.io.Serializable
      filter: com.yourorg.
```
{% endcode %}


Now that `com.yourorg.RemoveImplementsExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.28.0")
}

rewrite {
    activeRecipe("com.yourorg.RemoveImplementsExample")
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
        <version>4.33.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveImplementsExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.RemoveImplementsExample`
