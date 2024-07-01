# Dependency resolution diagnostic

**org.openrewrite.java.dependencies.DependencyResolutionDiagnostic**

_Recipes which manipulate dependencies must be able to successfully access the artifact repositories and resolve dependencies from them. This recipe produces two data tables used to understand the state of dependency resolution. 

The Repository accessibility report lists all the artifact repositories known to the project and whether respond to network access. The network access is attempted while the recipe is run and so is representative of current conditions. 

The Gradle dependency configuration errors lists all the dependency configurations that failed to resolve one or more dependencies when the project was parsed. This is representative of conditions at the time the LST was parsed._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/DependencyResolutionDiagnostic.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.11.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.11.1

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | *Optional*. The group ID of a dependency to attempt to download from the repository. Default value is "com.fasterxml.jackson.core". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core. | `com.fasterxml.jackson.core` |
| `String` | artifactId | *Optional*. The artifact ID of a dependency to attempt to download from the repository. Default value is "jackson-core". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core. | `jackson-core` |
| `String` | version | *Optional*. The version of a dependency to attempt to download from the repository. Default value is "2.16.0". If this dependency is not found in the repository the error will be noted in the report. There is no need to specify an alternate value for this parameter unless the repository is known not to contain jackson-core. | `2.16.0` |

## Data Tables

### Repository accessibility report

_Listing of all dependency repositories and whether they are accessible._

| Column Name | Description |
| ----------- | ----------- |
| Repository URI | The URI of the repository |
| Ping exception type | Empty if the repository responded to a ping. Otherwise, the type of exception encountered when attempting to access the repository. |
| Ping error message | Empty if the repository was accessible. Otherwise, the error message encountered when attempting to access the repository. |
| Ping HTTP code | The HTTP response code returned by the repository. May be empty for non-HTTP repositories. |
| Dependency resolution exception type | Empty if ping failed, or if the repository successfully downloaded the specified dependency. Otherwise, the type of exception encountered when attempting to access the repository. |
| Dependency resolution error message | Empty if ping failed, or if the repository successfully downloaded the specified dependency. Otherwise, the error message encountered when attempting to access the repository. |

### Gradle dependency configuration errors

_Records Gradle dependency configurations which failed to resolve during parsing. Partial success/failure is common, a failure in this list does not mean that every dependency failed to resolve._

| Column Name | Description |
| ----------- | ----------- |
| Project path | The path of the project which contains the dependency configuration. |
| Configuration name | The name of the dependency configuration which failed to resolve. |
| Exception type | The type of exception encountered when attempting to resolve the dependency configuration. |
| Error message | The error message encountered when attempting to resolve the dependency configuration. |


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-java-dependencies:1.11.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.java.dependencies.DependencyResolutionDiagnostic")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.11.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.dependencies.DependencyResolutionDiagnostic")
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
        <version>5.34.1</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.java.dependencies.DependencyResolutionDiagnostic</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-java-dependencies:RELEASE -Drewrite.activeRecipes=org.openrewrite.java.dependencies.DependencyResolutionDiagnostic -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe DependencyResolutionDiagnostic
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.DependencyResolutionDiagnostic)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
