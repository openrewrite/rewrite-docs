# Change Extra Property

**org.openrewrite.gradle.ChangeExtraProperty**

_Gradle's [ExtraPropertiesExtension](https://docs.gradle.org/current/dsl/org.gradle.api.plugins.ExtraPropertiesExtension.html) is a commonly used mechanism for setting arbitrary key/value pairs on a project. This recipe will change the value of a property with the given key name if that key can be found. It assumes that the value being set is a String literal. Does not add the value if it does not already exist._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/ChangeExtraProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.21.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.21.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | key | The key of the property to change. | `foo` |
| `String` | value | The new value to set. The value will be treated the contents of a string literal. | `bar` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeExtraPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeExtraPropertyExample
displayName: Change Extra Property example
recipeList:
  - org.openrewrite.gradle.ChangeExtraProperty:
      key: foo
      value: bar
```
{% endcode %}

Now that `com.yourorg.ChangeExtraPropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeExtraPropertyExample")
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
mod run . --recipe ChangeExtraPropertyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.ChangeExtraProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
