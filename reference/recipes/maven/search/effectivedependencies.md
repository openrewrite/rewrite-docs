# Effective dependencies

**org.openrewrite.maven.search.EffectiveDependencies**

_Emit the data of binary dependency relationships._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/search/EffectiveDependencies.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.12.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.12.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | scope | Match dependencies with the specified scope Valid options: `compile`, `test`, `runtime`, `provided` | `compile` |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Dependency graph

_Relationships between dependencies._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency. |
| Source set | The source set that contains the dependency. |
| From dependency | What depends on the 'to' dependency. |
| From dependency | A dependency. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.EffectiveDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.EffectiveDependenciesExample
displayName: Effective dependencies example
recipeList:
  - org.openrewrite.maven.search.EffectiveDependencies:
      scope: compile
```
{% endcode %}

Now that `com.yourorg.EffectiveDependenciesExample` has been defined activate it in your build file:
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
        <version>5.17.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.EffectiveDependenciesExample</recipe>
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
mod run . --recipe EffectiveDependencies
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.search.EffectiveDependencies)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Schneider](mailto:jkschneider@gmail.com)
