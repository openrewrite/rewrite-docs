# Change a Gradle plugin

**org.openrewrite.gradle.plugins.ChangePlugin**

_Changes the selected Gradle plugin to the new plugin._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/plugins/ChangePlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.7.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.7.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginId | The current Gradle plugin id. |
| `String` | newPluginId | The new Gradle plugin id. |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangePluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangePluginExample
displayName: Change a Gradle plugin example
recipeList:
  - org.openrewrite.gradle.plugins.ChangePlugin:
      pluginId: org.openrewrite.rewrite
      newPluginId: org.openrewrite.rewrite
      newVersion: 7.x
```
{% endcode %}

Now that `com.yourorg.ChangePluginExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.16")
}

rewrite {
    activeRecipe("com.yourorg.ChangePluginExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% endtabs %}

## Contributors
* [Shannon Pamperl](mailto:shanman190@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.plugins.ChangePlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
