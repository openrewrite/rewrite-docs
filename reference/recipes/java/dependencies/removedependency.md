# Remove a Gradle or Maven dependency

**org.openrewrite.java.dependencies.RemoveDependency**

_For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`.
For Maven project, removes a single dependency from the <dependencies> section of the pom.xml._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/RemoveDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.9.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.9.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}
## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.fasterxml.jackson*` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `jackson-module*` |
| `String` | configuration | *Optional*. The dependency configuration to remove from. | `api` |
| `String` | scope | *Optional*. Only remove dependencies if they are in this scope. If 'runtime', this willalso remove dependencies in the 'compile' scope because 'compile' dependencies are part of the runtime dependency set Valid options: `compile`, `test`, `runtime`, `provided` | `compile` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.RemoveDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.RemoveDependencyExample
displayName: Remove a Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.RemoveDependency:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      configuration: api
      scope: compile
```
{% endcode %}

Now that `com.yourorg.RemoveDependencyExample` has been defined activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.9.2 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.14.0")
}

rewrite {
    activeRecipe("com.yourorg.RemoveDependencyExample")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.9.2")
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
        <version>5.32.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>com.yourorg.RemoveDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.9.2</version>
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
mod run . --recipe RemoveDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Remove a Gradle dependency](../../gradle/removedependency.md)
* [Remove Maven dependency](../../maven/removedependency.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
        ---
        type: specs.openrewrite.org/v1beta/recipe
        name: org.openrewrite.java.dependencies.RemoveDependency
        displayName: Remove a Gradle or Maven dependency
        description: For Gradle project, removes a single dependency from the dependencies section of the `build.gradle`.
For Maven project, removes a single dependency from the <dependencies> section of the pom.xml.




recipeList:
  - org.openrewrite.gradle.RemoveDependency
  - org.openrewrite.maven.RemoveDependency

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RemoveDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.

## Contributors
[Kun Li](mailto:kun@moderne.io), [Jonathan Schneider](mailto:jkschneider@gmail.com)
