# Remove Maven managed dependency

** org.openrewrite.maven.RemoveManagedDependency**
_Removes a single managed dependency from the <dependencyManagement><dependencies> section of the pom.xml._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.32.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.32.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a managed dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactId | The second part of a managed dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | scope | *Optional*. Only remove managed dependencies if they are in this scope. If 'runtime', this willalso remove managed dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.RemoveManagedDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveManagedDependencyExample
displayName: Remove Maven managed dependency example
recipeList:
  - org.openrewrite.maven.RemoveManagedDependency:
      groupId: com.google.guava
      artifactId: guava
      scope: compile
```
{% endcode %}


Now that `com.yourorg.RemoveManagedDependencyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.31.0")
}

rewrite {
    activeRecipe("com.yourorg.RemoveManagedDependencyExample")
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
            <recipe>com.yourorg.RemoveManagedDependencyExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipes=com.yourorg.RemoveManagedDependencyExample`
