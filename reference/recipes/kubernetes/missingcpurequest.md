# Ensure CPU request is set

**org.openrewrite.kubernetes.MissingCpuRequest**
_If a container is created in a namespace that has a default CPU limit, and the container does not specify its own CPU limit, then the container is assigned the default CPU limit._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.26.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.26.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.26.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.33.2")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.MissingCpuRequest")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.26.0")
}
```
{% endcode %}
{% endtab %}

{% tab title="Maven POM" %}
{% code title="pom.xml" %}
```markup
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>4.38.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.MissingCpuRequest</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.26.0</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}

{% tab title="Maven Command Line" %}
{% code title="shell" %}
```shell
mvn org.openrewrite.maven:rewrite-maven-plugin:4.38.2:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-kubernetes:1.26.0 \
  -DactiveRecipes=org.openrewrite.kubernetes.MissingCpuRequest
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the command line by adding the argument `-Drewrite.activeRecipes=org.openrewrite.kubernetes.MissingCpuRequest`

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
