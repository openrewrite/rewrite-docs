# Use `Map` notation for Gradle dependency declarations

**org.openrewrite.gradle.DependencyUseMapNotation**

_In Gradle, dependencies can be expressed as a `String` like `"groupId:artifactId:version"`, or equivalently as a `Map` like `group: 'groupId', name: 'artifactId', version: 'version'`. This recipe replaces dependencies represented as `Strings` with an equivalent dependency represented as a `Map`._

## Source

[Github](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/DependencyUseMapNotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/7.40.6/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.40.6

## Example
* Example 1: 

## Contributors
* [Sam Snyder](sam@moderne.io)
* [Shannon Pamperl](shanman190@gmail.com)
* [traceyyoshima](tracey.yoshima@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Kun Li](kun@moderne.io)


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
    activeRecipe("org.openrewrite.gradle.DependencyUseMapNotation")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.DependencyUseMapNotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
