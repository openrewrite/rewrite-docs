# No host network sharing

** org.openrewrite.kubernetes.NoHostNetworkSharing**
_When using the host network mode for a container, that container’s network stack is not isolated from the Docker host, so the container shares the host’s networking namespace and does not get its own IP-address allocation._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.4.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.4.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.4.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.4.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.NoHostNetworkSharing")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.4.0")
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
        <version>4.8.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.NoHostNetworkSharing</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.4.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.kubernetes.NoHostNetworkSharing`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: `Pod`
  * configurationPath: `/spec/hostNetwork`
  * value: `hostNetwork: false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.NoHostNetworkSharing
displayName: No host network sharing
description: When using the host network mode for a container, that container’s network stack is not isolated from the Docker host, so the container shares the host’s networking namespace and does not get its own IP-address allocation.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.AddConfiguration:
      resourceKind: Pod
      configurationPath: /spec/hostNetwork
      value: hostNetwork: false

```
{% endtab %}
{% endtabs %}
