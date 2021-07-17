# Ensure lifecycle rule on `StorageBucket`

** org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket**
_When defining a rule, you can specify any set of conditions for any action. The following configuration defines a rule to delete all objects older than 7 days in a bucket._

### Tags

* kubernetes

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.3.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.3.0


## Usage

This recipe has no required configuration options and can be activated directly after taking a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.3.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.3.0")
}

rewrite {
    activeRecipe("org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.3.0")
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
        <version>4.7.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.3.0</version>
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

Recipes can also be activated directly from the command line by adding the argument `-DactiveRecipe=org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket`

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Add Kubernetes configuration](../kubernetes/addconfiguration.md)
  * apiVersion: `storage.cnrm.cloud.google.com/v1beta1`
  * resourceKind: `StorageBucket`
  * configurationPath: `/spec/lifecycleRule`
  * value: `lifecycleRule:
  - action:
      type: Delete
    condition:
      age: 7`

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.kubernetes.LifecycleRuleOnStorageBucket
displayName: Ensure lifecycle rule on `StorageBucket`
description: When defining a rule, you can specify any set of conditions for any action. The following configuration defines a rule to delete all objects older than 7 days in a bucket.
tags:
  - kubernetes
recipeList:
  - org.openrewrite.kubernetes.AddConfiguration:
      apiVersion: storage.cnrm.cloud.google.com/v1beta1
      resourceKind: StorageBucket
      configurationPath: /spec/lifecycleRule
      value: lifecycleRule:
  - action:
      type: Delete
    condition:
      age: 7

```
{% endtab %}
{% endtabs %}
