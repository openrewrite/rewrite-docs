# No host IPC sharing

** org.openrewrite.kubernetes.NoHostIPCSharing**
_Preventing sharing of host PID/IPC namespace, networking, and ports ensures proper isolation between Docker containers and the underlying host._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.11.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.11.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.11.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.15.8")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.NoHostIPCSharing")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.11.0")
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
        <version>4.17.4</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.NoHostIPCSharing</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.11.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipes=org.openrewrite.kubernetes.NoHostIPCSharing`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * resourceKind: `Pod`
  * configurationPath: `$.spec`
  * value: `hostIPC: false`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.NoHostIPCSharing
displayName: No host IPC sharing
description: Preventing sharing of host PID/IPC namespace, networking, and ports ensures proper isolation between Docker containers and the underlying host.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.AddConfiguration:
      resourceKind: Pod
      configurationPath: $.spec
      value: hostIPC: false

```
{% endtab %}
{% endtabs %}
