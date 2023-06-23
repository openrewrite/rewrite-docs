# Gradle dependency insight

**org.openrewrite.gradle.search.DependencyInsight**

_Find direct and transitive dependencies matching a group, artifact, and optionally a configuration name. Results include dependencies that either directly match or transitively include a matching dependency._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/DependencyInsight.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupIdPattern | Group glob pattern used to match dependencies. |
| `String` | artifactIdPattern | Artifact glob pattern used to match dependencies. |
| `String` | configuration | *Optional*. Match dependencies with the specified scope. If not specified, all configurations will be searched. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Dependencies in use

_Direct and transitive dependencies in use._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency. |
| Source set | The source set that contains the dependency. |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Dated snapshot version | The resolved dated snapshot version or `null` if this dependency is not a snapshot. |
| Scope | Dependency scope. This will be `compile` if the dependency is direct and a scope is not explicitly specified in the POM. |
| Depth | How many levels removed from a direct dependency. This will be 0 for direct dependencies. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupIdPattern|`com.google.guava`|
|artifactIdPattern|`failureaccess`|
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
    implementation 'com.google.guava:guava:31.1-jre'
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
    /*~~(com.google.guava:failureaccess:1.0.1)~~>*/implementation 'com.google.guava:guava:31.1-jre'
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,1 +10,1 @@

dependencies {
-   implementation 'com.google.guava:guava:31.1-jre'
+   /*~~(com.google.guava:failureaccess:1.0.1)~~>*/implementation 'com.google.guava:guava:31.1-jre'
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DependencyInsightExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyInsightExample
displayName: Gradle dependency insight example
recipeList:
  - org.openrewrite.gradle.search.DependencyInsight:
      groupIdPattern: com.fasterxml.jackson.module
      artifactIdPattern: jackson-module-*
      configuration: compileClasspath
```
{% endcode %}

Now that `com.yourorg.DependencyInsightExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("com.yourorg.DependencyInsightExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Tim te Beek](tim@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.search.DependencyInsight)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
