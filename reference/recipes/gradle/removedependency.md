# Remove a Gradle dependency

**org.openrewrite.gradle.RemoveDependency**

_Removes a single dependency from the dependencies section of the `build.gradle`._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/RemoveDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | configuration | *Optional*. The dependency configuration to remove from. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`org.springframework.boot`|
|artifactId|`spring-boot*`|
|configuration|`null`|


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    implementation "org.springframework.boot:spring-boot-starter-web:2.7.0"
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java-library'
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation "org.junit.vintage:junit-vintage-engine:5.6.2"
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,0 @@
-    implementation "org.springframework.boot:spring-boot-starter-web:2.7.0"
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveDependencyExample
displayName: Remove a Gradle dependency example
recipeList:
  - org.openrewrite.gradle.RemoveDependency:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      configuration: api
```
{% endcode %}

Now that `com.yourorg.RemoveDependencyExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.RemoveDependencyExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Shannon Pamperl](shanman190@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Josh Soref](2119212+jsoref@users.noreply.github.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.RemoveDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
