# Add or update annotation attribute

**org.openrewrite.java.AddOrUpdateAnnotationAttribute**

_Some annotations accept arguments. This recipe sets an existing argument to the specified value, or adds the argument if it is not already set._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/AddOrUpdateAnnotationAttribute.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.4.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.4.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | annotationType | The fully qualified name of the annotation. |
| `String` | attributeName | *Optional*. The name of attribute to change. If omitted defaults to 'value'. |
| `String` | attributeValue | The value to set the attribute to. Set to `null` to remove the attribute. |
| `Boolean` | addOnly | When set to `true` will not change existing annotation attribute values. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddOrUpdateAnnotationAttributeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddOrUpdateAnnotationAttributeExample
displayName: Add or update annotation attribute example
recipeList:
  - org.openrewrite.java.AddOrUpdateAnnotationAttribute:
      annotationType: org.junit.Test
      attributeName: timeout
      attributeValue: 500
      addOnly: null
```
{% endcode %}

Now that `com.yourorg.AddOrUpdateAnnotationAttributeExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("com.yourorg.AddOrUpdateAnnotationAttributeExample")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddOrUpdateAnnotationAttributeExample</recipe>
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
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.AddOrUpdateAnnotationAttribute)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
