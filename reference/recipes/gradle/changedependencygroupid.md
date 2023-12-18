# Change Gradle dependency group

**org.openrewrite.gradle.ChangeDependencyGroupId**

_Change the group of a specified Gradle dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/ChangeDependencyGroupId.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.11.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.11.2

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.fasterxml.jackson*` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `jackson-module*` |
| `String` | newGroupId | The new groupId to use. | `corp.internal.jackson` |
| `String` | configuration | *Optional*. The dependency configuration to search for dependencies in. | `api` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyGroupIdExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyGroupIdExample
displayName: Change Gradle dependency group example
recipeList:
  - org.openrewrite.gradle.ChangeDependencyGroupId:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      newGroupId: corp.internal.jackson
      configuration: api
```
{% endcode %}

Now that `com.yourorg.ChangeDependencyGroupIdExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.6.1")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyGroupIdExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ChangeDependencyGroupId
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.ChangeDependencyGroupId)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [Shannon Pamperl](mailto:shanman190@gmail.com), [Jonathan Schneider](mailto:jkschneider@gmail.com), [Geoffrey De Smet](mailto:gds.geoffrey.de.smet@gmail.com), [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Tim te Beek](mailto:tim@moderne.io)
