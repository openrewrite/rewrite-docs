# Update Gradle wrapper

**org.openrewrite.gradle.UpdateGradleWrapper**

_Update the version of Gradle used in an existing Gradle wrapper._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateGradleWrapper.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | An exact version number or node-style semver selector used to select the version number. |
| `String` | distribution | *Optional*. The distribution of Gradle to use. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. Defaults to "bin". |
| `String` | repositoryUrl | The URL of the repository to download the Gradle distribution from. Currently only supports repositories like services.gradle.org, not arbitrary maven or ivy repositories. Defaults to `https://services.gradle.org/versions/all`. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|version|`7.4.2`|
|distribution|`null`|
|repositoryUrl|`null`|


{% tabs %}
{% tab title="gradle/wrapper/gradle-wrapper.properties" %}

###### Before
{% code title="gradle/wrapper/gradle-wrapper.properties" %}
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-7.4-all.zip
distributionSha256Sum=cd5c2958a107ee7f0722004a12d0f8559b4564c34daad7df06cffd4d12a426d0
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```
{% endcode %}

###### After
{% code title="gradle/wrapper/gradle-wrapper.properties" %}
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-7.4.2-bin.zip
distributionSha256Sum=29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- gradle/wrapper/gradle-wrapper.properties
+++ gradle/wrapper/gradle-wrapper.properties
@@ -3,2 +3,2 @@
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
-distributionUrl=https\://services.gradle.org/distributions/gradle-7.4-all.zip
-distributionSha256Sum=cd5c2958a107ee7f0722004a12d0f8559b4564c34daad7df06cffd4d12a426d0
+distributionUrl=https\://services.gradle.org/distributions/gradle-7.4.2-bin.zip
+distributionSha256Sum=29e49b10984e585d8118b7d0bc452f944e386458df27371b49b4ac1dec4b7fda
zipStoreBase=GRADLE_USER_HOME
```
{% endcode %}
{% endtab %}
{% endtabs %}


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpdateGradleWrapperExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpdateGradleWrapperExample
displayName: Update Gradle wrapper example
recipeList:
  - org.openrewrite.gradle.UpdateGradleWrapper:
      version: 7.x
      distribution: null
      repositoryUrl: https://services.gradle.org/versions/all
```
{% endcode %}

Now that `com.yourorg.UpdateGradleWrapperExample` has been defined activate it in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("com.yourorg.UpdateGradleWrapperExample")
}

repositories {
    mavenCentral()
}
```
{% endcode %}
{% endtab %}

{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.UpdateGradleWrapper)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
