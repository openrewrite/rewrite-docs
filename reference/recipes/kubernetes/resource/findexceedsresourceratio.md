# Find exceeds resource ratio

** org.openrewrite.kubernetes.resource.FindExceedsResourceRatio**
_Find resource manifests that have requests to limits ratios beyond a specific maximum._

## Source

[Github](https://github.com/openrewrite/rewrite-kubernetes), [Issue Tracker](https://github.com/openrewrite/rewrite-kubernetes/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite.recipe/rewrite-kubernetes/1.12.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-kubernetes
* version: 1.12.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | resourceType | The type of resource limit to search for. |
| `String` | ratioLimit | The maximum ratio allowed between requests and limits. |
| `String` | fileMatcher | *Optional*. Matching files will be modified. This is a glob expression. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.FindExceedsResourceRatioExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindExceedsResourceRatioExample
displayName: Find exceeds resource ratio example
recipeList:
  - org.openrewrite.kubernetes.resource.FindExceedsResourceRatio:
      resourceType: memory
      ratioLimit: 2
      fileMatcher: **/pod-*.yml
```
{% endcode %}

Now that `com.yourorg.FindExceedsResourceRatioExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-kubernetes:1.12.0 in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.16.0")
}

rewrite {
    activeRecipe("com.yourorg.FindExceedsResourceRatioExample")
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
        <version>4.18.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.FindExceedsResourceRatioExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-DactiveRecipe=com.yourorg.FindExceedsResourceRatioExample`
