# Find licenses in use in third-party dependencies

**org.openrewrite.java.dependencies.DependencyLicenseCheck**

_Locates and reports on all licenses in use._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyLicenseCheck.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.0.5

## Options

| Type | Name | Description |
| -- | -- | -- |
| `String` | scope | Match dependencies with the specified scope |
| `Boolean` | addMarkers | *Optional*. Report each license transitively used by a dependency in search results. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### License report

_Contains a license report of third-party dependencies._

| Column Name | Description |
| ----------- | ----------- |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| License name | The actual name of the license as written in the third-party dependency. |
| License type | The license in use, based on the category of license inferred from the name. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DependencyLicenseCheckExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyLicenseCheckExample
displayName: Find licenses in use in third-party dependencies example
recipeList:
  - org.openrewrite.java.dependencies.DependencyLicenseCheck:
      scope: compile
      addMarkers: null
```
{% endcode %}

Now that `com.yourorg.DependencyLicenseCheckExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.0.5 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.11")
}

rewrite {
    activeRecipe("com.yourorg.DependencyLicenseCheckExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.0.5")
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
        <version>5.2.6</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DependencyLicenseCheckExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.0.5</version>
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyLicenseCheck)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
