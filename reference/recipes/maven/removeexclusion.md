# Remove exclusion

**org.openrewrite.maven.RemoveExclusion**

_Remove any matching exclusion from any matching dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveExclusion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.14.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.14.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. | `guava` |
| `String` | exclusionGroupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. | `com.google.guava` |
| `String` | exclusionArtifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. | `guava` |
| `Boolean` | onlyIneffective | *Optional*. Default false. If enabled, matching exclusions will only be removed if they are ineffective (if the excluded dependency was not actually a transitive dependency of the target dependency). |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveExclusionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveExclusionExample
displayName: Remove exclusion example
recipeList:
  - org.openrewrite.maven.RemoveExclusion:
      groupId: com.google.guava
      artifactId: guava
      exclusionGroupId: com.google.guava
      exclusionArtifactId: guava
```
{% endcode %}

Now that `com.yourorg.RemoveExclusionExample` has been defined activate it in your build file:
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
        <version>5.21.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.RemoveExclusionExample</recipe>
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
mod run . --recipe RemoveExclusionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveExclusion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Knut Wannheden](mailto:knut.wannheden@mobi.ch), [Patrick](mailto:patway99@gmail.com), [Tim te Beek](mailto:tim@moderne.io), [Guillaume Smet](mailto:guillaume.smet@gmail.com)
