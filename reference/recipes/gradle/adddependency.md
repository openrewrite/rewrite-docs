# Add Gradle dependency

**org.openrewrite.gradle.AddDependency**

_Add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/AddDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.28.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.28.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'com.google.guava:guava:VERSION'. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate 'com.google.guava:guava:VERSION' | `guava` |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. You can also use `latest.release` for the latest available version and `latest.patch` if the current version is a valid semantic version. For more details, you can look at the documentation page of [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors). | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example, Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `String` | configuration | *Optional*. A configuration to use when it is not what can be inferred from usage. Most of the time this will be left empty, but is used when adding a new as of yet unused dependency. | `implementation` |
| `String` | onlyIfUsing | *Optional*. Used to determine if the dependency will be added and in which scope it should be placed. | `org.junit.jupiter.api.*` |
| `String` | classifier | *Optional*. A classifier to add. Commonly used to select variants of a library. | `test` |
| `String` | extension | *Optional*. The extension of the dependency to add. If omitted Gradle defaults to assuming the type is "jar". | `jar` |
| `String` | familyPattern | *Optional*. A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character. | `com.fasterxml.jackson*` |
| `Boolean` | acceptTransitive | *Optional*. Default false. If enabled, the dependency will not be added if it is already on the classpath as a transitive dependency. | `true` |

## Data Tables

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDependencyExample
displayName: Add Gradle dependency example
recipeList:
  - org.openrewrite.gradle.AddDependency:
      groupId: com.google.guava
      artifactId: guava
      version: 29.X
      versionPattern: '-jre'
      configuration: implementation
      onlyIfUsing: org.junit.jupiter.api.*
      classifier: test
      extension: jar
      familyPattern: com.fasterxml.jackson*
      acceptTransitive: true
```
{% endcode %}

Now that `com.yourorg.AddDependencyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("com.yourorg.AddDependencyExample")
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
mod run . --recipe AddDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.AddDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
