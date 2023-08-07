# Append to sequence

**org.openrewrite.yaml.AppendToSequence**

_Append item to YAML sequence._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/AppendToSequence.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.1.14/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.1.14

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | sequencePath | A [JsonPath](https://github.com/json-path/JsonPath) expression to locate a YAML sequence. |
| `String` | value | The new value to be appended to the sequence. |
| `List` | existingSequenceValues | *Optional*. If specified, the item will only be appended if the existing sequence matches these values. |
| `Boolean` | matchExistingSequenceValuesInAnyOrder | *Optional*. If specified in combination with the above parameter, the item will only be appended if the existing sequence has the specified values in any order. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AppendToSequenceExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AppendToSequenceExample
displayName: Append to sequence example
recipeList:
  - org.openrewrite.yaml.AppendToSequence:
      sequencePath: $.universe.planets
      value: earth
      existingSequenceValues: existingValue1
      matchExistingSequenceValuesInAnyOrder: true
```
{% endcode %}

Now that `com.yourorg.AppendToSequenceExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.22")
}

rewrite {
    activeRecipe("com.yourorg.AppendToSequenceExample")
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
        <version>5.4.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AppendToSequenceExample</recipe>
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
* [sullis](mailto:github@seansullivan.com)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)
* [Mike Solomon](mailto:mike@moderne.io)
* [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.AppendToSequence)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
