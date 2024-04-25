# Change Maven plugin group and artifact ID

**org.openrewrite.maven.ChangePluginGroupIdAndArtifactId**

_Change the groupId and/or the artifactId of a specified Maven plugin._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePluginGroupIdAndArtifactId.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.24.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.24.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old group ID to replace. The group ID is the first part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifactId to replace. The artifact ID is the second part of a plugin coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `my-deprecated-maven-plugin` |
| `String` | newGroupId | *Optional*. The new group ID to use. Defaults to the existing group ID. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifact | *Optional*. The new artifact ID to use. Defaults to the existing artifact ID. | `my-new-maven-plugin` |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePluginGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginGroupIdAndArtifactIdExample
displayName: Change Maven plugin group and artifact ID example
recipeList:
  - org.openrewrite.maven.ChangePluginGroupIdAndArtifactId:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: my-deprecated-maven-plugin
      newGroupId: corp.internal.openrewrite.recipe
      newArtifact: my-new-maven-plugin
```
{% endcode %}

Now that `com.yourorg.ChangePluginGroupIdAndArtifactIdExample` has been defined activate it in your build file:
{% tabs %}

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
        <version>5.29.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePluginGroupIdAndArtifactIdExample</recipe>
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
mod run . --recipe ChangePluginGroupIdAndArtifactIdExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangePluginGroupIdAndArtifactId)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[George Gastaldi](mailto:gegastaldi@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
