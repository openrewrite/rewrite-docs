# Find Gradle wrappers

**org.openrewrite.gradle.search.FindGradleWrapper**

_Find Gradle wrappers._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindGradleWrapper.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | version | *Optional*. A version expression representing the versions to search for |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre |
| `String` | distribution | *Optional*. The distribution of Gradle to find. "bin" includes Gradle binaries. "all" includes Gradle binaries, source code, and documentation. |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|version|`[6,)`|
|versionPattern|`null`|
|distribution|`null`|


{% tabs %}
{% tab title="gradle/wrapper/gradle-wrapper.properties" %}

###### Before
{% code title="gradle/wrapper/gradle-wrapper.properties" %}
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-7.4-all.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```
{% endcode %}

###### After
{% code title="gradle/wrapper/gradle-wrapper.properties" %}
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
~~>distributionUrl=https\\://services.gradle.org/distributions/gradle-7.4-all.zip
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
@@ -3,1 +3,1 @@
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
-distributionUrl=https\\://services.gradle.org/distributions/gradle-7.4-all.zip
+~~>distributionUrl=https\\://services.gradle.org/distributions/gradle-7.4-all.zip
zipStoreBase=GRADLE_USER_HOME
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
    activeRecipe("org.openrewrite.gradle.search.FindGradleWrapper")
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


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://public.moderne.io/recipes/org.openrewrite.gradle.search.FindGradleWrapper)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
