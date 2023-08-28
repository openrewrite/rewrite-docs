# Enable Gradle build cache

**org.openrewrite.gradle.EnableGradleBuildCache**

_Enable the Gradle build cache. By enabling build cache the build outputs are stored externally and fetched from the cache when it is determined that those inputs have no changed, avoiding the expensive work of regenerating them. See the [Gradle Build Cache](https://docs.gradle.org/current/userguide/build_cache.html) for more information._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/resources/META-INF/rewrite/gradle.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.4.1/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.4.1


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.2.4")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.EnableGradleBuildCache")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Gradle property](../gradle/addproperty.md)
  * key: `org.gradle.caching`
  * value: `true`
  * filePattern: `gradle.properties`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gradle.EnableGradleBuildCache
displayName: Enable Gradle build cache
description: Enable the Gradle build cache. By enabling build cache the build outputs are stored externally and fetched from the cache when it is determined that those inputs have no changed, avoiding the expensive work of regenerating them. See the [Gradle Build Cache](https://docs.gradle.org/current/userguide/build_cache.html) for more information.
recipeList:
  - org.openrewrite.gradle.AddProperty:
      key: org.gradle.caching
      value: true
      filePattern: gradle.properties

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.EnableGradleBuildCache)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
