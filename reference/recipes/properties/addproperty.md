# Add a new property

**org.openrewrite.properties.AddProperty**

_Adds a new property to a property file. Attempts to place the new property in alphabetical order by the property keys. Whitespace before and after the `=` must be included in the property and value._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/AddProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-properties/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-properties
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | property | The property key to add. | `management.metrics.enable.process.files` |
| `String` | value | The value of the new property key. | `newPropValue` |
| `String` | comment | *Optional*. A comment that will be added to the new property. | `This is a comment` |
| `String` | delimiter | *Optional*. Property entries support different delimiters (`=`, `:`, or whitespace). The default value is `=` unless provided the delimiter of the new property entry. | `:` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPropertyExample
displayName: Add a new property example
recipeList:
  - org.openrewrite.properties.AddProperty:
      property: management.metrics.enable.process.files
      value: newPropValue
      comment: This is a comment
      delimiter: :
```
{% endcode %}

Now that `com.yourorg.AddPropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.AddPropertyExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.AddPropertyExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddPropertyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.properties.AddProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [Tracey Yoshima](mailto:tracey.yoshima@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), Adriano Machado, [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com)
