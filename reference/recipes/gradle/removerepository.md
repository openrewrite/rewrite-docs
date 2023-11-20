# Remove repository

**org.openrewrite.gradle.RemoveRepository**

_Removes a repository from Gradle build scripts. Named repositories include "jcenter", "mavenCentral", "mavenLocal", and "google"._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/RemoveRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.9.4/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.9.4

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | repository | The name of the repository to remove |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveRepositoryExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveRepositoryExample
displayName: Remove repository example
recipeList:
  - org.openrewrite.gradle.RemoveRepository:
      repository: jcenter
```
{% endcode %}

Now that `com.yourorg.RemoveRepositoryExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.5.4")
}

rewrite {
    activeRecipe("com.yourorg.RemoveRepositoryExample")
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
mod run . --recipe RemoveRepository
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.RemoveRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
* [Sam Snyder](mailto:sam@moderne.io), * [Jonathan Schnéider](mailto:jkschneider@gmail.com), * [Patrick](mailto:patway99@gmail.com)
