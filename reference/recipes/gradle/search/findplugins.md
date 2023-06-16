# Find Gradle plugin

**org.openrewrite.gradle.search.FindPlugins**

_Find a Gradle plugin by id._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindPlugins.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginId | The `ID` part of `plugin { ID }`. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|pluginId|`com.jfrog.bintray`|


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
    id 'com.jfrog.bintray' version '1.8.5'
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
    /*~~>*/id 'com.jfrog.bintray' version '1.8.5'
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -2,1 +2,1 @@
-    id 'com.jfrog.bintray' version '1.8.5'
+    /*~~>*/id 'com.jfrog.bintray' version '1.8.5'
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindPluginsExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindPluginsExample
displayName: Find Gradle plugin example
recipeList:
  - org.openrewrite.gradle.search.FindPlugins:
      pluginId: '`com.jfrog.bintray`'
```
{% endcode %}

Now that `com.yourorg.FindPluginsExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.FindPluginsExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Jonathan Schneider](jkschneider@gmail.com)
* [Shannon Pamperl](shanman190@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.search.FindPlugins)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
