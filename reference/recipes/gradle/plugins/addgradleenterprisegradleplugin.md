# Add the Gradle Enterprise Gradle plugin

**org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin**

_Add the Gradle Enterprise Gradle plugin to settings.gradle files._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/plugins/AddGradleEnterpriseGradlePlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.10/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.10

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number or node-style semver selector used to select the plugin version. |
| `String` | server | *Optional*. The URL of the Gradle Enterprise server. If omitted the recipe will set no URL and Gradle will direct scans to https://scans.gradle.com/ |
| `Boolean` | allowUntrustedServer | *Optional*. When set to `true` the plugin will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the plugin will refuse to communicate without transport layer security enabled. |
| `Boolean` | captureTaskInputFiles | *Optional*. When set to `true` the plugin will capture additional information about the inputs to Gradle tasks. This increases the size of build scans, but is useful for diagnosing issues with task caching.  |
| `Boolean` | uploadInBackground | *Optional*. When set to `true` the plugin will capture additional information about the outputs of Gradle tasks. This increases the size of build scans, but is useful for diagnosing issues with task caching.  |
| `PublishCriteria` | publishCriteria | *Optional*. When set to `always` the plugin will publish build scans of every single build. When set to `failure` the plugin will only publish build scans when the build fails. When omitted scans will be published only when the `--scan` option is passed to the build. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Maven metadata failures

_Attempts to resolve maven metadata that failed._

| Column Name | Description |
| ----------- | ----------- |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddGradleEnterpriseGradlePluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddGradleEnterpriseGradlePluginExample
displayName: Add the Gradle Enterprise Gradle plugin example
recipeList:
  - org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin:
      version: 3.x
      server: https://ge.openrewrite.org/
      allowUntrustedServer: true
      captureTaskInputFiles: true
      uploadInBackground: true
      publishCriteria: Always
```
{% endcode %}

Now that `com.yourorg.AddGradleEnterpriseGradlePluginExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.16")
}

rewrite {
    activeRecipe("com.yourorg.AddGradleEnterpriseGradlePluginExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Sam Snyder](mailto:sam@moderne.io)
* [Shannon Pamperl](mailto:shanman190@gmail.com)
* [Jonathan Schneider](mailto:jkschneider@gmail.com)
* [Alexis Tual](mailto:atual@gradle.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.plugins.AddGradleEnterpriseGradlePlugin)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
