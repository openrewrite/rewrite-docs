# Remove Maven managed dependency

**org.openrewrite.maven.RemoveManagedDependency**

_Removes a single managed dependency from the <dependencyManagement><dependencies> section of the pom.xml._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveManagedDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.27.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.27.4

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a managed dependency coordinate `com.google.guava:guava:VERSION`. | `com.google.guava` |
| `String` | artifactId | The second part of a managed dependency coordinate `com.google.guava:guava:VERSION`. | `guava` |
| `String` | scope | *Optional*. Only remove managed dependencies if they are in this scope. If `runtime`, this willalso remove managed dependencies in the 'compile' scope because `compile` dependencies are part of the runtime dependency set. Valid options: `compile`, `test`, `runtime`, `provided` | `compile` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveManagedDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveManagedDependencyExample
displayName: Remove Maven managed dependency example
recipeList:
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.google.guava
      artifactId: guava
      scope: compile
```
{% endcode %}

Now that `com.yourorg.RemoveManagedDependencyExample` has been defined activate it in your build file:
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
        <version>5.33.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.RemoveManagedDependencyExample</recipe>
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
mod run . --recipe RemoveManagedDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveManagedDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Guillaume Smet](mailto:guillaume.smet@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Nick McKinney](mailto:mckinneynicholas@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
