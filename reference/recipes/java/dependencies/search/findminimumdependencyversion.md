# Find the oldest matching dependency version in use

**org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion**

_The oldest dependency version in use is the lowest dependency version in use in any source set of any subproject of a repository. It is possible that, for example, the main source set of a project uses Jackson 2.11, but a test source set uses Jackson 2.16. In this case, the oldest Jackson version in use is Java 2.11._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/search/FindMinimumDependencyVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.11.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.11.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupIdPattern | Group ID glob pattern used to match dependencies. | `com.fasterxml.jackson.module` |
| `String` | artifactIdPattern | Artifact ID glob pattern used to match dependencies. | `jackson-module-*` |
| `String` | version | *Optional*. Match only dependencies with the specified version. Node-style [version selectors](https://docs.openrewrite.org/reference/dependency-version-selectors) may be used. All versions are searched by default. | `1.x` |

## Data Tables

### Dependencies in use

_Direct and transitive dependencies in use._

| Column Name | Description |
| ----------- | ----------- |
| Project name | The name of the project that contains the dependency. |
| Source set | The source set that contains the dependency. |
| Group | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Artifact | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. |
| Version | The resolved version. |
| Dated snapshot version | The resolved dated snapshot version or `null` if this dependency is not a snapshot. |
| Scope | Dependency scope. This will be `compile` if the dependency is direct and a scope is not explicitly specified in the POM. |
| Depth | How many levels removed from a direct dependency. This will be 0 for direct dependencies. |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.FindMinimumDependencyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.FindMinimumDependencyVersionExample
displayName: Find the oldest matching dependency version in use example
recipeList:
  - org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion:
      groupIdPattern: com.fasterxml.jackson.module
      artifactIdPattern: jackson-module-*
      version: 1.x
```
{% endcode %}

Now that `com.yourorg.FindMinimumDependencyVersionExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.11.1 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("com.yourorg.FindMinimumDependencyVersionExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.11.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.1</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.FindMinimumDependencyVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.11.1</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```
{% endcode %}
2. Run `mvn rewrite:run` to run the recipe.
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe FindMinimumDependencyVersionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.search.FindMinimumDependencyVersion)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
