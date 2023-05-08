# Add a new property

**org.openrewrite.properties.AddProperty**

_Adds a new property to a property file at the bottom of the file if it's missing. Whitespace before and after the `=` must be included in the property and value._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/AddProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-properties/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-properties
* version: 7.40.6

## Example
* Example 1: 

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | property | The property key to add. |
| `String` | value | The value of the new property key. |
| `String` | delimiter | *Optional*. Property entries support different delimiters (`=`, `:`, or whitespace). The default value is `=` unless provided the delimiter of the new property entry. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


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
      value: null
      delimiter: :
      fileMatcher: '**/application-*.properties'
```
{% endcode %}

Now that `com.yourorg.AddPropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.AddPropertyExample")
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
        <version>4.45.0</version>
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
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.properties.AddProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
