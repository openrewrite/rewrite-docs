# Add a comment to a `Maven` dependency

** org.openrewrite.maven.AddCommentToMavenDependency**
_Adds a comment as the first element in a `Maven` dependency._

## Source

[Github](https://github.com/openrewrite/rewrite), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://search.maven.org/artifact/org.openrewrite/rewrite-maven/7.25.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 7.25.0

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | xPath | An XPath expression used to find matching tags. |
| `String` | groupId | The first part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | artifactId | The second part of a dependency coordinate 'com.google.guava:guava:VERSION'. |
| `String` | commentText | The text to add as a comment.. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your rewrite.yml create a new recipe with a unique name. For example: `com.yourorg.AddCommentToMavenDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddCommentToMavenDependencyExample
displayName: Add a comment to a `Maven` dependency example
recipeList:
  - org.openrewrite.maven.AddCommentToMavenDependency:
      xPath: /project/dependencies/dependency
      groupId: com.google.guava
      artifactId: guava
      commentText: This is excluded due to CVE <X> and will be removed when we upgrade the next version is available.
```
{% endcode %}


Now that `com.yourorg.AddCommentToMavenDependencyExample` has been defined activate it in your build file:

{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("5.24.0")
}

rewrite {
    activeRecipe("com.yourorg.AddCommentToMavenDependencyExample")
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
        <version>4.27.0</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.AddCommentToMavenDependencyExample</recipe>
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

Recipes can also be activated directly from the commandline by adding the argument `-Drewrite.activeRecipescom.yourorg.AddCommentToMavenDependencyExample`
