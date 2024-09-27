# Add Gradle or Maven dependency

**org.openrewrite.java.dependencies.AddDependency**

_For a Gradle project, add a gradle dependency to a `build.gradle` file in the correct configuration based on where it is used. Or For a maven project, Add a Maven dependency to a `pom.xml` file in the correct scope based on where it is used._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/AddDependency.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.19.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.19.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION` | `guava` |
| `String` | version | *Optional*. An exact version number or node-style semver selector used to select the version number. | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example, Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `String` | onlyIfUsing | *Optional*. Used to determine if the dependency will be added and in which scope it should be placed. | `org.junit.jupiter.api.*` |
| `String` | classifier | *Optional*. A classifier to add. Commonly used to select variants of a library. | `test` |
| `String` | familyPattern | *Optional*. A pattern, applied to groupIds, used to determine which other dependencies should have aligned version numbers. Accepts '*' as a wildcard character. | `com.fasterxml.jackson*` |
| `String` | extension | *Optional*. For Gradle only, The extension of the dependency to add. If omitted Gradle defaults to assuming the type is "jar". | `jar` |
| `String` | configuration | *Optional*. The Gradle dependency configuration name within which to place the dependency. When omitted the configuration will be determined by the Maven scope parameter. If that parameter is also omitted, configuration will be determined based on where types matching `onlyIfUsing` appear in source code. | `implementation` |
| `String` | scope | *Optional*. The Maven scope within which to place the dependency. When omitted scope will be determined based on where types matching `onlyIfUsing` appear in source code. Valid options: `compile`, `provided`, `runtime`, `test` | `runtime` |
| `Boolean` | releasesOnly | *Optional*. For Maven only, Whether to exclude snapshots from consideration when using a semver selector |  |
| `String` | type | *Optional*. For Maven only, The type of dependency to add. If omitted Maven defaults to assuming the type is "jar". Valid options: `jar`, `pom`, `war` | `jar` |
| `Boolean` | optional | *Optional*. Set the value of the `<optional>` tag. No `<optional>` tag will be added when this is `null`. |  |
| `Boolean` | acceptTransitive | *Optional*. Default false. If enabled, the dependency will not be added if it is already on the classpath as a transitive dependency. | `true` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDependencyExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDependencyExample
displayName: Add Gradle or Maven dependency example
recipeList:
  - org.openrewrite.java.dependencies.AddDependency:
      groupId: com.google.guava
      artifactId: guava
      version: 29.X
      versionPattern: '-jre'
      onlyIfUsing: org.junit.jupiter.api.*
      classifier: test
      familyPattern: com.fasterxml.jackson*
      extension: jar
      configuration: implementation
      scope: runtime
      type: jar
      acceptTransitive: true
```
{% endcode %}

Now that `com.yourorg.AddDependencyExample` has been defined, activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.19.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("com.yourorg.AddDependencyExample")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.19.0")
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
        <version>5.41.0</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.AddDependencyExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.19.0</version>
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
mod run . --recipe AddDependencyExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.AddDependency)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

### Source files that had results
**org.openrewrite.table.SourcesFileResults**

_Source files that were modified by the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path before the run | The source path of the file before the run. `null` when a source file was created during the run. |
| Source path after the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Parent of the recipe that made changes | In a hierarchical recipe, the parent of the recipe that made a change. Empty if this is the root of a hierarchy or if the recipe is not hierarchical at all. |
| Recipe that made changes | The specific recipe that made a change. |
| Estimated time saving | An estimated effort that a developer to fix manually instead of using this recipe, in unit of seconds. |
| Cycle | The recipe cycle in which the change was made. |

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time | The total time spent across the scanning phase of this recipe. |
| 99th percentile scanning time | 99 out of 100 scans completed in this amount of time. |
| Max scanning time | The max time scanning any one source file. |
| Cumulative edit time | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time | 99 out of 100 edits completed in this amount of time. |
| Max edit time | The max time editing any one source file. |

