# Set Maven project packaging

**org.openrewrite.maven.ChangePackaging**

_Sets the packaging type of Maven projects. Either adds the packaging tag if it is missing or changes its context if present._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangePackaging.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.7.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.7.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The groupId of the project whose packaging should be changed. Accepts glob patterns. |
| `String` | artifactId | The artifactId of the project whose packaging should be changed. Accepts glob patterns. |
| `String` | packaging | The type of packaging to set. If `null` specified the packaging tag will be removed |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePackagingExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePackagingExample
displayName: Set Maven project packaging example
recipeList:
  - org.openrewrite.maven.ChangePackaging:
      groupId: org.openrewrite.*
      artifactId: rewrite-*
      packaging: jar
```
{% endcode %}

Now that `com.yourorg.ChangePackagingExample` has been defined activate it in your build file:
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
        <version>5.8.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangePackagingExample</recipe>
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
mod run <PATH> --recipe ChangePackaging
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Contributors
* [Sam Snyder](mailto:sam@moderne.io)
* [Jonathan Schnéider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.ChangePackaging)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
