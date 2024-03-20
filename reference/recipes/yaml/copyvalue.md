# Copy YAML value

**org.openrewrite.yaml.CopyValue**

_Copies a YAML value from one key to another. The existing key/value pair remains unaffected by this change. Attempts to merge the copied value into the new key if it already exists. Attempts to create the new key if it does not exist._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/CopyValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.21.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldKeyPath | A [JsonPath](https://github.com/json-path/JsonPath) expression to locate a YAML key/value pair to copy. | `$.source.kind` |
| `String` | oldFilePath | *Optional*. The file path to the YAML file to copy the value from. If `null` then the value will be copied from any yaml file it appears within. | `src/main/resources/application.yaml` |
| `String` | newKey | A [JsonPath](https://github.com/json-path/JsonPath) expression defining where the value should be written. | `$.dest.kind` |
| `String` | newFilePath | *Optional*. The file path to the YAML file to copy the value to. If `null` then the value will be copied only into the same file it was found in. | `src/main/resources/application.yaml` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CopyValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CopyValueExample
displayName: Copy YAML value example
recipeList:
  - org.openrewrite.yaml.CopyValue:
      oldKeyPath: $.source.kind
      oldFilePath: src/main/resources/application.yaml
      newKey: $.dest.kind
      newFilePath: src/main/resources/application.yaml
```
{% endcode %}

Now that `com.yourorg.CopyValueExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("com.yourorg.CopyValueExample")
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
        <version>5.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.CopyValueExample</recipe>
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
mod run . --recipe CopyValueExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.CopyValue)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
