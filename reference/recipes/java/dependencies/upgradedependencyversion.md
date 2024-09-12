# Upgrade Gradle or Maven dependency versions

**org.openrewrite.java.dependencies.UpgradeDependencyVersion**

_For Gradle projects, upgrade the version of a dependency in a `build.gradle` file. Supports updating dependency declarations of various forms:
* `String` notation: `"group:artifact:version"` 
* `Map` notation: `group: 'group', name: 'artifact', version: 'version'`
It is possible to update version numbers which are defined earlier in the same file in variable declarations.

For Maven projects, upgrade the version of a dependency by specifying a group ID and (optionally) an artifact ID using Node Semver advanced range selectors, allowing more precise control over version updates to patch or minor releases._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-java-dependencies/blob/main/src/main/java/org/openrewrite/java/dependencies/UpgradeDependencyVersion.java), [Issue Tracker](https://github.com/openrewrite/rewrite-java-dependencies/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-java-dependencies/1.18.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-java-dependencies
* version: 1.18.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.fasterxml.jackson*` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `jackson-module*` |
| `String` | newVersion | An exact version number or node-style semver selector used to select the version number.  | `29.X` |
| `String` | versionPattern | *Optional*. Allows version selection to be extended beyond the original Node Semver semantics. So for example,Setting 'version' to "25-29" can be paired with a metadata pattern of "-jre" to select Guava 29.0-jre | `-jre` |
| `Boolean` | overrideManagedVersion | *Optional*. For Maven project only, This flag can be set to explicitly override a managed dependency's version. The default for this flag is `false`. |  |
| `List` | retainVersions | *Optional*. For Maven project only, accepts a list of GAVs. For each GAV, if it is a project direct dependency, and it is removed from dependency management after the changes from this recipe, then it will be retained with an explicit version. The version can be omitted from the GAV to use the old value from dependency management. | `com.jcraft:jsch` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UpgradeDependencyVersionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UpgradeDependencyVersionExample
displayName: Upgrade Gradle or Maven dependency versions example
recipeList:
  - org.openrewrite.java.dependencies.UpgradeDependencyVersion:
      groupId: com.fasterxml.jackson*
      artifactId: jackson-module*
      newVersion: 29.X
      versionPattern: '-jre'
      retainVersions: com.jcraft:jsch
```
{% endcode %}

Now that `com.yourorg.UpgradeDependencyVersionExample` has been defined, activate it and take a dependency on org.openrewrite.recipe:rewrite-java-dependencies:1.18.0 in your build file:
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("com.yourorg.UpgradeDependencyVersionExample")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-java-dependencies:1.18.0")
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
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.UpgradeDependencyVersionExample</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-java-dependencies</artifactId>
            <version>1.18.0</version>
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
mod run . --recipe UpgradeDependencyVersionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.dependencies.UpgradeDependencyVersion)

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

