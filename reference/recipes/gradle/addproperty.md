# Add Gradle property

**org.openrewrite.gradle.AddProperty**

_Add a property to the `gradle.properties` file._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/AddProperty.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.4.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.4.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | key | The name of the property to add. |
| `String` | value | The value of the property to add. |
| `Boolean` | overwrite | If a property with the same key exists, overwrite. |
| `String` | filePattern | A glob expression that can be used to constrain which directories or source files should be searched. When not set, all source files are searched. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPropertyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPropertyExample
displayName: Add Gradle property example
recipeList:
  - org.openrewrite.gradle.AddProperty:
      key: org.gradle.caching
      value: null
      overwrite: Enable the Gradle build cache
      filePattern: '**/*.properties'
```
{% endcode %}

Now that `com.yourorg.AddPropertyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("com.yourorg.AddPropertyExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.AddProperty)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
