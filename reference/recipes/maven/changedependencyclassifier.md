# Change Maven dependency classifier

** org.openrewrite.maven.ChangeDependencyClassifier**
_Add or alter the classifier of the specified dependency._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.25.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.25.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | newClassifier | *Optional*. Classifier to apply to specified Maven dependency. May be omitted, which indicates that no classifier should be added and any existing scope be removed from the dependency. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyClassifierExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyClassifierExample
displayName: Change Maven dependency classifier example
recipeList:
  - org.openrewrite.maven.ChangeDependencyClassifier:
      groupId: com.google.guava
      artifactId: guava
      newClassifier: jar
```
{% endcode %}


Now that `com.yourorg.ChangeDependencyClassifierExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.23.0")
}

rewrite {
    activeRecipe("com.yourorg.ChangeDependencyClassifierExample")
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
        <version>4.26.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.ChangeDependencyClassifierExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.ChangeDependencyClassifierExample`
