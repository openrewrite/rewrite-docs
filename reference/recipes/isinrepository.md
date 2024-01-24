# Is in repository

**org.openrewrite.IsInRepository**

_A search recipe which marks files that are in a repository with one of the supplied names. Intended for use as a precondition for other recipes being run over many different repositories._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-core/src/main/java/org/openrewrite/IsInRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-core/8.14.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-core
* version: 8.14.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `Set` | allowedRepositories | The names of the repositories that are allowed to be searched. Determines repository name according to git metadata recorded in the `GitProvenance` marker. | `rewrite` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.IsInRepositoryExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.IsInRepositoryExample
displayName: Is in repository example
recipeList:
  - org.openrewrite.IsInRepository:
      allowedRepositories: rewrite
```
{% endcode %}

Now that `com.yourorg.IsInRepositoryExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.8.0")
}

rewrite {
    activeRecipe("com.yourorg.IsInRepositoryExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
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
            <recipe>com.yourorg.IsInRepositoryExample</recipe>
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
mod run . --recipe IsInRepositoryExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.IsInRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [Kevin Carpenter™️](mailto:kevin@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
