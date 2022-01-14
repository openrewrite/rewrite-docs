# Find Gradle `dependencies` blocks

** org.openrewrite.gradle.search.FindDependencyHandler**
_Find the dependency handler containing any number of dependency definitions._

## Source

[Github](https://github.com/openrewrite/rewrite-gradle), [Issue Tracker](https://github.com/openrewrite/rewrite-gradle/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-gradle/7.17.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-gradle
* version: 7.17.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite:rewrite-gradle:7.17.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.3")
}

rewrite {
    activeRecipe("org.openrewrite.gradle.search.FindDependencyHandler")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite:rewrite-gradle:7.17.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.17.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.gradle.search.FindDependencyHandler</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite</groupId>
            <artifactId>rewrite-gradle</artifactId>
            <version>7.17.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.gradle.search.FindDependencyHandler`

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
