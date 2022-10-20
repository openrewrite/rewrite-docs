# Manage dependencies

** org.openrewrite.maven.ManageDependencies**
_Make existing dependencies managed by moving their version to be specified in the dependencyManagement section of the POM._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.32.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.32.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupPattern | Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactPattern | *Optional*. Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `Boolean` | addToRootPom | *Optional*. Add to the root pom where root is the eldest parent of the pom within the source set. |
| `Boolean` | skipModelUpdate | *Optional*. Optionally skip updating the dependency model after managing dependencies. Updating the model does not affect the source code of the POM,but will cause the resolved dependency model to reflect the changes made to the POM. If this recipe is ran standalone, it is not necessary to update the model. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ManageDependenciesExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ManageDependenciesExample
displayName: Manage dependencies example
recipeList:
  - org.openrewrite.maven.ManageDependencies:
      groupPattern: com.google.*
      artifactPattern: guava*
      addToRootPom: true
      skipModelUpdate: null
```
{% endcode %}


Now that `com.yourorg.ManageDependenciesExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.30.0")
}

rewrite {
    activeRecipe("com.yourorg.ManageDependenciesExample")
}

repositories {
    mavenCentral()
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
        <version>4.36.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ManageDependenciesExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
{% endtab %}
{% endtabs %}

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.ManageDependenciesExample`
