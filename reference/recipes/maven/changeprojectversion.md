# Change Maven Project Version

**org.openrewrite.maven.ChangeProjectVersion**

_Change the project version of a Maven pom.xml. Identifies the project to be changed by its groupId and artifactId. If the version is defined as a property, this recipe will only change the property value if the property exists within the same pom._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeProjectVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.5.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.5.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The groupId of the maven project to change its version. This can be a glob expression. |
| `String` | artifactId | The artifactId of the maven project to change its version. This can be a glob expression. |
| `String` | newVersion | The new version to replace the maven project version. |
| `Boolean` | overrideParentVersion | *Optional*. This flag can be set to explicitly override the inherited parent version. Default `false`. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeProjectVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeProjectVersionExample
displayName: Change Maven Project Version example
recipeList:
  - org.openrewrite.maven.ChangeProjectVersion:
      groupId: org.openrewrite
      artifactId: '*'
      newVersion: 8.4.2
      overrideParentVersion: null
```
{% endcode %}

Now that `com.yourorg.ChangeProjectVersionExample` has been defined activate it in your build file:
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
        <version>5.5.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeProjectVersionExample</recipe>
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
{% endtabs %}

## Contributors
* [Joan Viladrosa](mailto:joan@moderne.io)
* [Sam Snyder](mailto:sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangeProjectVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
