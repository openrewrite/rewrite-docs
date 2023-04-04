# Merge YAML snippet

**org.openrewrite.yaml.MergeYaml**

_Merge a YAML snippet with an existing YAML document._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/MergeYaml.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/7.39.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 7.39.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | A JsonPath expression used to find matching keys. |
| `String` | yaml | The YAML snippet to insert. The snippet will be indented to match the style of its surroundings. |
| `Boolean` | acceptTheirs | *Optional*. When the YAML snippet to insert conflicts with an existing key value pair and an existing key has a different value, prefer the original value. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |
| `String` | objectIdentifyingProperty | *Optional*. Name of a property which will be used to identify objects (mapping). This serves as the key to match on when merging entries of a sequence. |


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
      acceptTheirs: null
      fileMatcher: '**/application-*.yml'
      objectIdentifyingProperty: name
```
{% endcode %}


Now that `com.yourorg.MergeYamlExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.39.0")
}

rewrite {
    activeRecipe("com.yourorg.MergeYamlExample")
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
        <version>4.43.0</version>
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
{% endtab %}
{% endtabs %}


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.yaml.MergeYaml)

The Moderne public SaaS instance enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
