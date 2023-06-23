# Add a new property

**org.openrewrite.properties.AddProperty**

_Adds a new property to a property file at the bottom of the file if it's missing. Whitespace before and after the `=` must be included in the property and value._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-properties/src/main/java/org/openrewrite/properties/AddProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-properties/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-properties
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | property | The property key to add. |
| `String` | value | The value of the new property key. |
| `String` | delimiter | *Optional*. Property entries support different delimiters (`=`, `:`, or whitespace). The default value is `=` unless provided the delimiter of the new property entry. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|property|`management.metrics.enable.process.files`|
|value|`true`|
|delimiter|`null`|


{% tabs %}
{% tab title="properties" %}

###### Before
{% code %}
```properties
management=true
```
{% endcode %}

###### After
{% code %}
```properties
management=true
management.metrics.enable.process.files=true
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
@@ -2,0 +2,1 @@
management=true
+management.metrics.enable.process.files=true

```
{% endcode %}
{% endtab %}
{% endtabs %}


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
```
{% endcode %}

Now that `com.yourorg.AddPropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
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
        <version>5.2.2</version>
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

## Contributors
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Aaron Gershman](5619476+aegershman@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.properties.AddProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
