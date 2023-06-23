# Find Gradle repository

**org.openrewrite.gradle.search.FindRepository**

_Find a Gradle repository by url._

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/search/FindRepository.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.3/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.3

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | type | *Optional*. The type of the artifact repository |
| `String` | url | *Optional*. The url of the artifact repository |
| `Purpose` | purpose | *Optional*. The purpose of this repository in terms of resolving project or plugin dependencies |

## Example

###### Parameters
| Parameter | Value |
| -- | -- |
|type|`null`|
|url|`https://oss.sonatype.org/content/repositories/snapshots`|
|purpose|`null`|


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
buildscript {
  repositories {
    maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
    maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
    maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
    maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
  }
}

repositories {
  maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
  maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
  maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
  maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
buildscript {
  repositories {
    /*~~>*/maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
    /*~~>*/maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
    /*~~>*/maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
    /*~~>*/maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
  }
}

repositories {
  /*~~>*/maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
  /*~~>*/maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
  /*~~>*/maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
  /*~~>*/maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -3,4 +3,4 @@
buildscript {
  repositories {
-   maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
-   maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
-   maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
-   maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
+   /*~~>*/maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
+   /*~~>*/maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
+   /*~~>*/maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
+   /*~~>*/maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
  }
@@ -11,4 +11,4 @@

repositories {
- maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
- maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
- maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
- maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
+ /*~~>*/maven { url = "https://oss.sonatype.org/content/repositories/snapshots" }
+ /*~~>*/maven { url = uri("https://oss.sonatype.org/content/repositories/snapshots") }
+ /*~~>*/maven { setUrl("https://oss.sonatype.org/content/repositories/snapshots") }
+ /*~~>*/maven { setUrl(uri("https://oss.sonatype.org/content/repositories/snapshots")) }
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
    id("org.openrewrite.rewrite") version("6.1.4")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.search.FindRepository")
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

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.search.FindRepository)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
