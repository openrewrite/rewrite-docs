# Upgrade Gradle dependency versions

**org.openrewrite.gradle.UpgradeDependencyVersion**

_Upgrade the version of a dependency in a build.gradle file. Supports updating dependency declarations of various forms:
* `String` notation: `"group:artifact:version"` 
* `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
Can update version numbers which are defined earlier in the same file in variable declarations._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpgradeDependencyVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number. |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |

## Data Tables (Only available on the [Moderne platform](https://public.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|groupId|`com.google.guava`|
|artifactId|`guava`|
|newVersion|`30.x`|
|versionPattern|`-jre`|


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
  compileOnly 'com.google.guava:guava:29.0-jre'
  runtimeOnly ('com.google.guava:guava:29.0-jre') {
      force = true
  }
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
  compileOnly 'com.google.guava:guava:30.1.1-jre'
  runtimeOnly ('com.google.guava:guava:30.1.1-jre') {
      force = true
  }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -10,2 +10,2 @@

dependencies {
- compileOnly 'com.google.guava:guava:29.0-jre'
- runtimeOnly ('com.google.guava:guava:29.0-jre') {
+ compileOnly 'com.google.guava:guava:30.1.1-jre'
+ runtimeOnly ('com.google.guava:guava:30.1.1-jre') {
      force = true
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeDependencyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeDependencyVersionExample
displayName: Upgrade Gradle dependency versions example
recipeList:
  - org.openrewrite.gradle.UpgradeDependencyVersion:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      newVersion: 29.X
      versionPattern: '-jre'
```
{% endcode %}

Now that `com.yourorg.UpgradeDependencyVersionExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeDependencyVersionExample")
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
* [Geoffrey De Smet](gds.geoffrey.de.smet@gmail.com)
* [Shannon Pamperl](shanman190@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.UpgradeDependencyVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
