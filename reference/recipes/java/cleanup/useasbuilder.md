# Use the builder pattern where possible

** org.openrewrite.java.cleanup.UseAsBuilder**
_When an API has been designed as a builder, use it that way rather than as a series of setter calls._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-java/7.30.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 7.30.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | builderType |  |
| `Boolean` | immutable | *Optional*. The builder is immutable if you must assign the result of calls to intermediate variables or use directly. Defaults to true as many purpose-built builders will be immutable. |
| `String` | builderCreator | *Optional*. The method that creates the builder instance, which may not be a method of the builder itself. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.UseAsBuilderExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseAsBuilderExample
displayName: Use the builder pattern where possible example
recipeList:
  - org.openrewrite.java.cleanup.UseAsBuilder:
      builderType: null
      immutable: null
      builderCreator: null
```
{% endcode %}


Now that `com.yourorg.UseAsBuilderExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.29.0")
}

rewrite {
    activeRecipe("com.yourorg.UseAsBuilderExample")
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
        <version>4.34.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.UseAsBuilderExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.UseAsBuilderExample`
