# Update Gradle wrapper

**org.openrewrite.gradle.UpdateGradleWrapper**

_Update the version of Gradle used in an existing Gradle wrapper._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/UpdateGradleWrapper.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.13/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.13

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. Defaults to the latest release if not specified. |
| `String` | distribution | *Optional*. The distribution of Gradle to use. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. Defaults to "bin". |
| `String` | repositoryUrl | *Optional*. The URL of the repository to download the Gradle distribution from. Currently only supports repositories like services.gradle.org, not arbitrary maven or ivy repositories. Defaults to `https://services.gradle.org/versions/all`. |
| `Boolean` | addIfMissing | *Optional*. Add a Gradle wrapper, if it's missing. Defaults to `true`. |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.UpdateGradleWrapper")
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
