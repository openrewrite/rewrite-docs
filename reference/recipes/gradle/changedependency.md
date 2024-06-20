# Change Gradle dependency

**org.openrewrite.gradle.ChangeDependency**

_Change a Gradle dependency coordinates. The `newGroupId` or `newArtifactId` **MUST** be different from before._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/ChangeDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | oldGroupId | The old groupId to replace. The groupId is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `org.openrewrite.recipe` |
| `String` | oldArtifactId | The old artifactId to replace. The artifactId is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. Supports glob expressions. | `rewrite-testing-frameworks` |
| `String` | newGroupId | *Optional*. The new groupId to use. Defaults to the existing group id. | `corp.internal.openrewrite.recipe` |
| `String` | newArtifactId | *Optional*. The new artifactId to use. Defaults to the existing artifact id. | `rewrite-testing-frameworks` |
| `String` | newVersion | *Optional*. An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. If the old dependency has a managed version, this flag can be used to explicitly set the version on the new dependency. WARNING: No check is done on the NEW dependency to verify if it is managed, it relies on whether the OLD dependency had a managed version. The default for this flag is `false`. |  |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyExample
displayName: Change Gradle dependency example
recipeList:
  - org.openrewrite.gradle.ChangeDependency:
      oldGroupId: org.openrewrite.recipe
      oldArtifactId: rewrite-testing-frameworks
      newGroupId: corp.internal.openrewrite.recipe
      newArtifactId: rewrite-testing-frameworks
      newVersion: 29.X
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.ChangeDependencyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyExample")
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
mod run . --recipe ChangeDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.ChangeDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Shannon Pamperl](mailto:shanman190@gmail.com), [Joan Viladrosa](mailto:joan@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
