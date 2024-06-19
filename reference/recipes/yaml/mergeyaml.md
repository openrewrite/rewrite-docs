# Merge YAML snippet

**org.openrewrite.yaml.MergeYaml**

_Merge a YAML snippet with an existing YAML document._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/MergeYaml.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | key | A [JsonPath](https://github.com/json-path/JsonPath) expression used to find matching keys. | `$.metadata` |
| `String` | yaml | The YAML snippet to insert. The snippet will be indented to match the style of its surroundings. | <pre>labels: <br />	label-one: "value-one"</pre> |
| `Boolean` | acceptTheirs | *Optional*. When the YAML snippet to insert conflicts with an existing key value pair and an existing key has a different value, prefer the original value. |  |
| `String` | objectIdentifyingProperty | *Optional*. Name of a property which will be used to identify objects (mapping). This serves as the key to match on when merging entries of a sequence. | `name` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.MergeYamlExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.MergeYamlExample
displayName: Merge YAML snippet example
recipeList:
  - org.openrewrite.yaml.MergeYaml:
      key: $.metadata
      yaml: labels: 
	label-one: "value-one"
      objectIdentifyingProperty: name
```
{% endcode %}

Now that `com.yourorg.MergeYamlExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.MergeYamlExample")
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
            <recipe>com.yourorg.MergeYamlExample</recipe>
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
mod run . --recipe MergeYamlExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.MergeYaml)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Jon Brisbin](mailto:jon@jbrisbin.com), [Sam Snyder](mailto:sam@moderne.io), [Knut Wannheden](mailto:knut@moderne.io), Dmitry Belyaev, [Tim te Beek](mailto:tim@moderne.io), Aaron Gershman, [Mike Solomon](mailto:mike@moderne.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
