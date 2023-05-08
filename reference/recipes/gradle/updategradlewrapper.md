# Update Gradle wrapper

**org.openrewrite.gradle.UpdateGradleWrapper**

_Update the version of Gradle used in an existing Gradle wrapper._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateGradleWrapper.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.40.6

## Example
* Example 1: 

## Contributors
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Alexis Tual](alexis.tual@gmail.com)
* [Shannon Pamperl](shanman190@gmail.com)
* [Tyler Van Gorder](tkvangorder@users.noreply.github.com)
* [Nate Danner](nate@moderne.io)
* [Tracey Yoshima](tracey.yoshima@gmail.com)

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number or node-style semver selector used to select the version number. |
| `String` | distribution | *Optional*. The distribution of Gradle to use. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. Defaults to "bin". |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateGradleWrapperExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateGradleWrapperExample
displayName: Update Gradle wrapper example
recipeList:
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 7.x
      distribution: null
```
{% endcode %}

Now that `com.yourorg.UpdateGradleWrapperExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("com.yourorg.UpdateGradleWrapperExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.UpdateGradleWrapper)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
