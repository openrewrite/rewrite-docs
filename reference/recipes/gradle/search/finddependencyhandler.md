# Find Gradle `dependencies` blocks

**org.openrewrite.gradle.search.FindDependencyHandler**

_Find the dependency handler containing any number of dependency definitions._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/resources/META-INF/rewrite/gradle.yml), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.3")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.search.FindDependencyHandler")
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
* [Find method usages](../../java/search/findmethods.md)
  * methodPattern: `RewriteGradleProject dependencies(groovy.lang.Closure)`
  * matchOverrides: `false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.gradle.search.FindDependencyHandler
displayName: Find Gradle `dependencies` blocks
description: Find the dependency handler containing any number of dependency definitions.
recipeList:
  - org.openrewrite.java.search.FindMethods:
      methodPattern: RewriteGradleProject dependencies(groovy.lang.Closure)
      matchOverrides: false

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.search.FindDependencyHandler)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
