# Use `String` notation for Gradle dependency declarations

**org.openrewrite.gradle.DependencyUseStringNotation**

_In Gradle, dependencies can be expressed as a `String` like `"groupId:artifactId:version"`, or equivalently as a `Map` like `group: 'groupId', name: 'artifactId', version: 'version'`. This recipe replaces dependencies represented as `Maps` with an equivalent dependency represented as a `String`._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/DependencyUseStringNotation.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Example


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java-library'
}

dependencies {
    api(group: 'org.openrewrite', name: 'rewrite-core', version: 'latest.release')
    implementation group: 'group', name: 'artifact', version: 'version'
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
plugins {
    id 'java-library'
}

dependencies {
    api("org.openrewrite:rewrite-core:latest.release")
    implementation "group:artifact:version"
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -6,2 +6,2 @@

dependencies {
-   api(group: 'org.openrewrite', name: 'rewrite-core', version: 'latest.release')
-   implementation group: 'group', name: 'artifact', version: 'version'
+   api("org.openrewrite:rewrite-core:latest.release")
+   implementation "group:artifact:version"
}
```
{% endcode %}
{% endtab %}
{% endtabs %}


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
    activeRecipe("org.openrewrite.gradle.DependencyUseStringNotation")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Shannon Pamperl](shanman190@gmail.com)
* [Jonathan Schnéider](jkschneider@gmail.com)
* [Sam Snyder](sam@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.DependencyUseStringNotation)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
