# Use HTTPS for repositories

**org.openrewrite.gradle.security.UseHttpsForRepositories**

_Use HTTPS for repository urls._

### Tags

* security

## Source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-gradle/src/main/java/org/openrewrite/gradle/security/UseHttpsForRepositories.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-gradle/8.1.2/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 8.1.2

## Example


{% tabs %}
{% tab title="build.gradle" %}

###### Before
{% code title="build.gradle" %}
```groovy
repositories {
    maven { url 'http://repo.spring.example.com/libs-release-local' }
}
```
{% endcode %}

###### After
{% code title="build.gradle" %}
```groovy
repositories {
    maven { url 'https://repo.spring.example.com/libs-release-local' }
}
```
{% endcode %}

{% endtab %}
{% tab title="Diff" %}
{% code %}
```diff
--- build.gradle
+++ build.gradle
@@ -2,1 +2,1 @@
repositories {
-   maven { url 'http://repo.spring.example.com/libs-release-local' }
+   maven { url 'https://repo.spring.example.com/libs-release-local' }
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
    activeRecipe("org.openrewrite.gradle.security.UseHttpsForRepositories")
}

repositories {
    mavenCentral()
}

```
{% endcode %}
{% endtab %}

{% endtabs %}

## Contributors
* [Jonathan Leitschuh](Jonathan.Leitschuh@gmail.com)
* [Jonathan Schneider](jkschneider@gmail.com)
* [Patrick](patway99@gmail.com)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.gradle.security.UseHttpsForRepositories)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
