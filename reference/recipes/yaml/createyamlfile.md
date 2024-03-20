# Create YAML file

**org.openrewrite.yaml.CreateYamlFile**

_Create a new YAML file._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-yaml/src/main/java/org/openrewrite/yaml/CreateYamlFile.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-yaml/8.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-yaml
* version: 8.21.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | relativeFileName | File path of new file. | `foo/bar/baz.yaml` |
| `String` | fileContents | *Optional*. Multiline text content for the file. | <pre>a:<br />property: value<br />another:<br />property: value</pre> |
| `Boolean` | overwriteExisting | *Optional*. If there is an existing file, should it be overwritten. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.CreateYamlFileExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CreateYamlFileExample
displayName: Create YAML file example
recipeList:
  - org.openrewrite.yaml.CreateYamlFile:
      relativeFileName: foo/bar/baz.yaml
      fileContents: a:
property: value
another:
property: value
```
{% endcode %}

Now that `com.yourorg.CreateYamlFileExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("com.yourorg.CreateYamlFileExample")
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
            <recipe>com.yourorg.CreateYamlFileExample</recipe>
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
mod run . --recipe CreateYamlFileExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.yaml.CreateYamlFile)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
