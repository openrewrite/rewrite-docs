# Update Gradle project Java compatibility

**org.openrewrite.gradle.UpdateJavaCompatibility**

_Find and updates the Java compatibility for the Gradle project._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateJavaCompatibility.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.9.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.9.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Integer` | version | The Java version to upgrade to. |
| `CompatibilityType` | compatibilityType | *Optional*. The compatibility type to change |
| `DeclarationStyle` | declarationStyle | *Optional*. The desired style to write the new version as when being written to the `sourceCompatibility` or `targetCompatibility` variables. Default, match current source style. (ex. Enum: `JavaVersion.VERSION_11`, Number: 11, or String: "11") |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateJavaCompatibilityExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateJavaCompatibilityExample
displayName: Update Gradle project Java compatibility example
recipeList:
  - org.openrewrite.gradle.UpdateJavaCompatibility:
      version: 11
      compatibilityType: null
      declarationStyle: null
```
{% endcode %}

Now that `com.yourorg.UpdateJavaCompatibilityExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.UpdateJavaCompatibilityExample")
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
mod run . --recipe UpdateJavaCompatibility
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateJavaCompatibility)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Shannon Pamperl](mailto:shanman190@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com)
