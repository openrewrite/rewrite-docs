# Ensure memory limits are set

** org.openrewrite.kubernetes.MissingMemoryLimits**
_With no limit set, kubectl allocates more and more memory to the container until it runs out._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.16.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.16.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.16.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.20.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.MissingMemoryLimits")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.16.0")
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
        <version>4.23.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.MissingMemoryLimits</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.16.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.kubernetes.MissingMemoryLimits`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * configurationPath: `..spec.containers[:1].resources.limits.memory`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.MissingMemoryLimits
displayName: Ensure memory limits are set
description: With no limit set, kubectl allocates more and more memory to the container until it runs out.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.search.FindResourceMissingConfiguration:
      configurationPath: ..spec.containers[:1].resources.limits.memory

```
{% endtab %}
{% endtabs %}
