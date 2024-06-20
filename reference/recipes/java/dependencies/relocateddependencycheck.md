# Find relocated dependencies

**org.openrewrite.java.dependencies.RelocatedDependencyCheck**

_Find Maven and Gradle dependencies and Maven plugins that have relocated to a new `groupId` or `artifactId`. Relocation information comes from the [oga-maven-plugin](https://github.com/jonathanlermitage/oga-maven-plugin/) maintained by Jonathan Lermitage, Filipe Roque and others.

This recipe makes no changes to any source file by default. Add `changeDependencies=true` to change dependencies, but note that you might need to run additional recipes to update imports and adopt other breaking changes._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/RelocatedDependencyCheck.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.11.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.11.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `Boolean` | changeDependencies | *Optional*. Whether to change dependencies to their relocated groupId and artifactId. |  |

## Data Tables

### Relocated dependencies

_A list of dependencies in use that have relocated._

| Column Name | Description |
| ----------- | ----------- |
| Dependency group id | The Group ID of the dependency in use. |
| Dependency artifact id | The Artifact ID of the dependency in use. |
| Relocated dependency group id | The Group ID of the relocated dependency. |
| Relocated ependency artifact id | The Artifact ID of the relocated dependency. |
| Context | Context for the relocation, if any. |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:1.11.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("org.openrewrite.java.dependencies.RelocatedDependencyCheck")
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

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.11.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.dependencies.RelocatedDependencyCheck")
    }
    afterEvaluate {
        if (repositories.isEmpty()) {
            repositories {
                mavenCentral()
            }
        }
    }
}
```
{% endcode %}
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
{% endtab %}
{% tab title="Maven POM" %}
1. Add the following to your `pom.xml` file:
{% code title="pom.xml" %}
```xml
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>5.34.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.dependencies.RelocatedDependencyCheck</recipe>
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

{% tab title="Maven Command Line" %}

You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-dependencies:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.dependencies.RelocatedDependencyCheck -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RelocatedDependencyCheck
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.RelocatedDependencyCheck)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
