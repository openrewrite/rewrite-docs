# Find Maven dependency

**org.openrewrite.maven.search.FindDependency**

_Finds first-order dependency uses, i.e. dependencies that are defined directly in a project._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/FindDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.21.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. Supports glob. | `guava` |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. | `3.0.0` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindDependencyExample
displayName: Find Maven dependency example
recipeList:
  - org.openrewrite.maven.search.FindDependency:
      groupId: com.google.guava
      artifactId: guava
      version: 3.0.0
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.FindDependencyExample` has been defined activate it in your build file:
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
            <recipe>com.yourorg.FindDependencyExample</recipe>
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
mod run . --recipe FindDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.FindDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Greg Adams](mailto:greg@moderne.io), [Tim te Beek](mailto:tim@moderne.io), [Sam Snyder](mailto:sam@moderne.io)
