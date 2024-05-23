# Add Maven profile

**org.openrewrite.maven.AddProfile**

_Add a maven profile to a `pom.xml` file._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddProfile.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.27.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.27.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | id | The profile id. | `default` |
| `String` | activation | *Optional*. activation details of a maven profile, provided as raw XML. | `<activation><foo>foo</foo></activation>` |
| `String` | properties | *Optional*. properties of a maven profile, provided as raw XML. | `<properties><foo>foo</foo><bar>bar</bar></properties>` |
| `String` | build | *Optional*. build details of a maven profile, provided as raw XML. | `<build><foo>foo</foo></build>` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddProfileExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddProfileExample
displayName: Add Maven profile example
recipeList:
  - org.openrewrite.maven.AddProfile:
      id: default
      activation: <activation><foo>foo</foo></activation>
      properties: <properties><foo>foo</foo><bar>bar</bar></properties>
      build: <build><foo>foo</foo></build>
```
{% endcode %}

Now that `com.yourorg.AddProfileExample` has been defined activate it in your build file:
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.AddProfileExample</recipe>
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
mod run . --recipe AddProfileExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddProfile)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
Mark Brophy, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
