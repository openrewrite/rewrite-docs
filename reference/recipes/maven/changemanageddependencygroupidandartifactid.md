# Change Maven managed dependency groupId, artifactId and optionally the version

**org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId**

_Change the groupId, artifactId and optionally the version of a specified Maven managed dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeManagedDependencyGroupIdAndArtifactId.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.21.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a managed dependency coordinate `com.google.guava:guava:VERSION`. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a managed dependency coordinate `com.google.guava:guava:VERSION`. | `rewrite-testing-frameworks` |
| `String` | newGroupId | The new groupId to use. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifactId | The new artifactId to use. | `rewrite-testing-frameworks` |
| `String` | newVersion | *Optional*. The new version to use. | `2.0.0` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeManagedDependencyGroupIdAndArtifactIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeManagedDependencyGroupIdAndArtifactIdExample
displayName: Change Maven managed dependency groupId, artifactId and optionally the version example
recipeList:
  - org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 2.0.0
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.ChangeManagedDependencyGroupIdAndArtifactIdExample` has been defined activate it in your build file:
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
        <version>5.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeManagedDependencyGroupIdAndArtifactIdExample</recipe>
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
mod run . --recipe ChangeManagedDependencyGroupIdAndArtifactIdExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangeManagedDependencyGroupIdAndArtifactId)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), Tyler Van Gorder, [Tobias Lidskog](mailto:tlidskog@paypal.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
