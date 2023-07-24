# Dependency report

**org.openrewrite.java.dependencies.DependencyList**

_Emits a data table detailing all Gradle and Maven dependencies.This recipe makes no changes to any source file._

## Source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyList.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.0.5/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.0.5

## Options

| Type | Name | Description |
| -- | -- | -- |
| `Scope` | scope | The scope of the dependencies to include in the report. |
| `boolean` | includeTransitive | Whether or not to include transitive dependencies in the report. Defaults to including only direct dependencies. |

## Data Tables (Only available on the [Moderne platform](https://app.moderne.io/))

### Dependency report

_Lists all Gradle and Maven dependencies_

| Column Name | Description |
| ----------- | ----------- |
| Build tool | The build tool used to manage dependencies (Gradle or Maven). |
| Group id | The Group ID of the Gradle project or Maven module requesting the dependency. |
| Artifact id | The Artifact ID of the Gradle project or Maven module requesting the dependency. |
| Version | The version of Gradle project or Maven module requesting the dependency. |
| Dependency group id | The Group ID of the dependency. |
| Dependency artifact id | The Artifact ID of the dependency. |
| Dependency version | The version of the dependency. |
| Direct Dependency | When `true` the project directly depends on the dependency. When `false` the project depends on the dependency transitively through at least one direct dependency. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.DependencyListExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.DependencyListExample
displayName: Dependency report example
recipeList:
  - org.openrewrite.java.dependencies.DependencyList:
      scope: Compile
      includeTransitive: true
```
{% endcode %}

Now that `com.yourorg.DependencyListExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.0.5 in your build file:
{% tabs %}
{% tab title="Gradle" %}
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.1.19")
}

rewrite {
    activeRecipe("com.yourorg.DependencyListExample")
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
        <version>5.3.2</version>
        <configuration>
          <activeRecipes>
            <recipe>com.yourorg.DependencyListExample</recipe>
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

## Contributors
* [Sam Snyder](mailto:sam@moderne.io)
* [Kun Li](mailto:kun@moderne.io)


## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyList)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
