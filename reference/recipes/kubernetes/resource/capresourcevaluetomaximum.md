# Cap exceeds resource value

** org.openrewrite.kubernetes.resource.CapResourceValueToMaximum**
_Cap resource values that exceed a specific maximum._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.14.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.14.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceValueType | The type of resource to search for. |
| `String` | resourceType | The type of resource value to search for. |
| `String` | resourceLimit | The resource maximum to search for to find resources that request more than the maximum. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.CapResourceValueToMaximumExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.CapResourceValueToMaximumExample
displayName: Cap exceeds resource value example
recipeList:
  - org.openrewrite.kubernetes.resource.CapResourceValueToMaximum:
      resourceValueType: limits
      resourceType: memory
      resourceLimit: 2Gi
      fileMatcher: '**/pod-*.yml'
```
{% endcode %}

Now that `com.yourorg.CapResourceValueToMaximumExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.14.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.19.0")
}

rewrite {
    activeRecipe("com.yourorg.CapResourceValueToMaximumExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.14.0")
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
        <version>4.22.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.CapResourceValueToMaximumExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.14.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.CapResourceValueToMaximumExample`
