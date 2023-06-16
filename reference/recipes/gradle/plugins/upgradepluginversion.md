# Update a Gradle plugin by id

**org.openrewrite.gradle.plugins.UpgradePluginVersion**

_Update a Gradle plugin by id to a later version._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/plugins/UpgradePluginVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | pluginIdPattern | The `ID` part of `plugin { ID }`, as a glob expression. |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|pluginIdPattern|`com.jfrog.bintray`|
|newVersion|`latest.patch`|
|versionPattern|`null`|


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
    id 'com.jfrog.bintray' version '1.7.1'
    id 'com.github.johnrengelman.shadow' version '6.1.0'
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
    id 'com.jfrog.bintray' version '1.7.3'
    id 'com.github.johnrengelman.shadow' version '6.1.0'
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
-    id 'com.jfrog.bintray' version '1.7.1'
+    id 'com.jfrog.bintray' version '1.7.3'
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradePluginVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradePluginVersionExample
displayName: Update a Gradle plugin by id example
recipeList:
  - org.openrewrite.gradle.plugins.UpgradePluginVersion:
      pluginIdPattern: com.jfrog.bintray
      newVersion: 29.X
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.UpgradePluginVersionExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.UpgradePluginVersionExample")
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
* [Sam Snyder](sam@moderne.io)
* [Jonathan Leitschuh](jonathan.leitschuh@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.plugins.UpgradePluginVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
