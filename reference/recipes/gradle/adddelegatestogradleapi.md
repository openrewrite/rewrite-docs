# Add `@DelegatesTo` to the Gradle API

**org.openrewrite.gradle.AddDelegatesToGradleApi**

_The Gradle API has methods which accept `groovy.lang.Closure`. Typically, there is an overload which accepts an `org.gradle.api.Action`.This recipe takes the type declared as the receiver of the `Action` overload and adds an appropriate `@groovy.lang.DelegatesTo` annotation to the `Closure` overload._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/AddDelegatesToGradleApi.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.40.6

## Example
* Example 1: 

## Contributors
* [Sam Snyder](sam@moderne.io)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Tracey Yoshima](tracey.yoshima@gmail.com)
* [Nick McKinney](mckinneynicholas@gmail.com)


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.40.4")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.AddDelegatesToGradleApi")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.AddDelegatesToGradleApi)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
