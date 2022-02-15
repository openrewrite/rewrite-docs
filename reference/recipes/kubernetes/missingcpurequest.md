# Ensure CPU request is set

** org.openrewrite.kubernetes.MissingCpuRequest**
_If a container is created in a namespace that has a default CPU limit, and the container does not specify its own CPU limit, then the container is assigned the default CPU limit._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.12.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.12.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.12.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.10")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.MissingCpuRequest")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.12.0")
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
        <version>4.19.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.MissingCpuRequest</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.12.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.kubernetes.MissingCpuRequest`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Find missing configuration](../kubernetes/search/findresourcemissingconfiguration.md)
  * configurationPath: `..spec.containers[:1].resources.requests.cpu`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.MissingCpuRequest
displayName: Ensure CPU request is set
description: If a container is created in a namespace that has a default CPU limit, and the container does not specify its own CPU limit, then the container is assigned the default CPU limit.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.search.FindResourceMissingConfiguration:
      configurationPath: ..spec.containers[:1].resources.requests.cpu

```
{% endtab %}
{% endtabs %}
