# Add Kubernetes configuration

** org.openrewrite.kubernetes.AddConfiguration**
_Add default required configuration when it is missing._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.9.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.9.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | apiVersion | *Optional*. The Kubernetes resource API version to use. |
| `String` | resourceKind | The Kubernetes resource type the configured is required on. |
| `String` | configurationPath | A JsonPath expression to locate Kubernetes configuration. Must be an absolute path. |
| `String` | value | The configuration that is added when necessary, including the key. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddConfigurationExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddConfigurationExample
displayName: Add Kubernetes configuration example
recipeList:
  - org.openrewrite.kubernetes.AddConfiguration:
      apiVersion: policy/v1beta1
      resourceKind: PodSecurityPolicy
      configurationPath: $.spec
      value: privileged: false
```
{% endcode %}

Now that `com.yourorg.AddConfigurationExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.9.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.13.1")
}

rewrite {
    activeRecipe("com.yourorg.AddConfigurationExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-kubernetes:1.9.0")
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
        <version>4.13.1</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddConfigurationExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-kubernetes</artifactId>
            <version>1.9.0</version>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.AddConfigurationExample`
