# Add repository

**org.openrewrite.maven.AddRepository**

_Adds a new Maven Repository or updates a matching repository._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.17.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.17.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | id | A unique name to describe the repository. |  |
| `String` | url | The URL of the repository. |  |
| `String` | repoName | *Optional*. A display name for the repository. |  |
| `String` | layout | *Optional*. The Maven layout of the repository. |  |
| `Boolean` | snapshotsEnabled | *Optional*. Snapshots from the repository are available. |  |
| `String` | snapshotsChecksumPolicy | *Optional*. Governs whether snapshots require checksums. |  |
| `String` | snapshotsUpdatePolicy | *Optional*. The policy governing snapshot updating interval. |  |
| `Boolean` | releasesEnabled | *Optional*. Releases from the repository are available |  |
| `String` | releasesChecksumPolicy | *Optional*. Governs whether releases require checksums. |  |
| `String` | releasesUpdatePolicy | *Optional*. The policy governing release updating interval. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddRepositoryExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddRepositoryExample
displayName: Add repository example
recipeList:
  - org.openrewrite.maven.AddRepository:
      id: null
      url: null
```
{% endcode %}

Now that `com.yourorg.AddRepositoryExample` has been defined activate it in your build file:
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
        <version>5.23.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddRepositoryExample</recipe>
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
mod run . --recipe AddRepositoryExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Alex Boyko](mailto:aboyko@vmware.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), Patrick Way, [Tim te Beek](mailto:tim@moderne.io)
