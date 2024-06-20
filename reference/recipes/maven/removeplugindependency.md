# Remove Maven plugin dependency

**org.openrewrite.maven.RemovePluginDependency**

_Removes a dependency from the <dependencies> section of a plugin in the pom.xml._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemovePluginDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | pluginGroupId | Group ID of the plugin from which the dependency will be removed. Supports glob.A Group ID is the first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. | `org.openrewrite.maven` |
| `String` | pluginArtifactId | Artifact ID of the plugin from which the dependency will be removed. Supports glob.The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. | `rewrite-maven-plugin` |
| `String` | groupId | The first part of a plugin dependency coordinate. Supports glob. | `com.google.guava` |
| `String` | artifactId | The second part of a plugin dependency coordinate. Supports glob. | `guava` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemovePluginDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemovePluginDependencyExample
displayName: Remove Maven plugin dependency example
recipeList:
  - org.openrewrite.maven.RemovePluginDependency:
      pluginGroupId: org.openrewrite.maven
      pluginArtifactId: rewrite-maven-plugin
      groupId: com.google.guava
      artifactId: guava
```
{% endcode %}

Now that `com.yourorg.RemovePluginDependencyExample` has been defined activate it in your build file:
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.RemovePluginDependencyExample</recipe>
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
mod run . --recipe RemovePluginDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemovePluginDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
