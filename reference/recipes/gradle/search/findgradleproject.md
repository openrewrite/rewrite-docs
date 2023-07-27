# Find Gradle projects

**org.openrewrite.gradle.search.FindGradleProject**

_Gradle projects are those with `build.gradle` or `build.gradle.kts` files._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindGradleProject.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.13/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.13

## Options

| Type | Name | Description |
| -- | -- | -- |
| `SearchCriteria` | searchCriteria | Whether to identify gradle projects by source file name or the presence of a marker |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindGradleProjectExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindGradleProjectExample
displayName: Find Gradle projects example
recipeList:
  - org.openrewrite.gradle.search.FindGradleProject:
      searchCriteria: Marker
```
{% endcode %}

Now that `com.yourorg.FindGradleProjectExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("com.yourorg.FindGradleProjectExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Jonathan Schneider](mailto:jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.search.FindGradleProject)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
