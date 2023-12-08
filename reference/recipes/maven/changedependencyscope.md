# Change Maven dependency scope

**org.openrewrite.maven.ChangeDependencyScope**

_Add or alter the scope of the specified dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeDependencyScope.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.11.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.11.1

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| `String` | newScope | *Optional*. Scope to apply to specified Maven dependency. May be omitted, which indicates that no scope should be added and any existing scope be removed from the dependency. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyScopeExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyScopeExample
displayName: Change Maven dependency scope example
recipeList:
  - org.openrewrite.maven.ChangeDependencyScope:
      groupId: com.google.guava
      artifactId: guava
      newScope: compile
```
{% endcode %}

Now that `com.yourorg.ChangeDependencyScopeExample` has been defined activate it in your build file:
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
        <version>5.15.4</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeDependencyScopeExample</recipe>
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
mod run . --recipe ChangeDependencyScope
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangeDependencyScope)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io)
