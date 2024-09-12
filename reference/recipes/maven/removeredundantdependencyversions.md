# Remove redundant explicit dependency and plugin versions

**org.openrewrite.maven.RemoveRedundantDependencyVersions**

_Remove explicitly-specified dependency/plugin versions when a parent POM's `dependencyManagement`/`pluginManagement` specifies the version._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/RemoveRedundantDependencyVersions.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.35.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.35.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupPattern | *Optional*. Group glob expression pattern used to match dependencies that should be managed.Group is the first part of a dependency coordinate `com.google.guava:guava:VERSION`. | `com.google.*` |
| `String` | artifactPattern | *Optional*. Artifact glob expression pattern used to match dependencies that should be managed.Artifact is the second part of a dependency coordinate `com.google.guava:guava:VERSION`. | `guava*` |
| `Boolean` | onlyIfVersionsMatch | *Optional*. Only remove the explicit version if it exactly matches the managed dependency version. When `false` explicit versions will be removed if they are older than or equal to the managed dependency version. Default `true`. |  |
| `Comparator` | onlyIfManagedVersionIs | *Optional*. Only remove the explicit version if the managed version has the specified comparative relationship to the explicit version. For example, `gte` will only remove the explicit version if the managed version is the same or newer. Default `eq`. Valid options: `any`, `eq`, `lt`, `lte`, `gt`, `gte` |  |
| `List` | except | *Optional*. Accepts a list of GAVs. Dependencies matching a GAV will be ignored by this recipe. GAV versions are ignored if provided. | `com.jcraft:jsch` |


## Usage

This recipe has no required configuration parameters and comes from a rewrite core library. It can be activated directly without adding any dependencies.
{% tabs %}

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
        <version>5.40.2</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>org.openrewrite.maven.RemoveRedundantDependencyVersions</recipe>
          </activeRecipes>
        </configuration>
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

{% code title="shell" overflow="wrap"%}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.activeRecipes=org.openrewrite.maven.RemoveRedundantDependencyVersions -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RemoveRedundantDependencyVersions
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.RemoveRedundantDependencyVersions)

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


## Contributors
[Nick McKinney](mailto:mckinneynicholas@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Kevin McCarpenter](mailto:kevin@moderne.io), Adriano Machado, [Jonathan Schneider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io), Ryan Hudson, [Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com)
