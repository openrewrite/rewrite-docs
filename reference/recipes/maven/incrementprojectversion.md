# Increment Maven project version

**org.openrewrite.maven.IncrementProjectVersion**

_Increase Maven project version by incrementing either the major, minor, or patch version as defined by [semver](https://semver.org/). Other versioning schemes are not supported._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/IncrementProjectVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.25.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.25.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The group ID of the Maven project to change its version. This can be a glob expression. | `org.openrewrite` |
| `String` | artifactId | The artifact ID of the Maven project to change its version. This can be a glob expression. | `*` |
| `SemverDigit` | digit | `MAJOR` increments the first digit, `MINOR` increments the second digit, and `PATCH` increments the third digit. | `PATCH` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.IncrementProjectVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.IncrementProjectVersionExample
displayName: Increment Maven project version example
recipeList:
  - org.openrewrite.maven.IncrementProjectVersion:
      groupId: org.openrewrite
      artifactId: '*'
      digit: PATCH
```
{% endcode %}

Now that `com.yourorg.IncrementProjectVersionExample` has been defined activate it in your build file:
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
        <version>5.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.IncrementProjectVersionExample</recipe>
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
mod run . --recipe IncrementProjectVersionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.IncrementProjectVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
