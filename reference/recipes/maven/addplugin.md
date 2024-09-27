# Add Maven plugin

**org.openrewrite.maven.AddPlugin**

_Add the specified Maven plugin to the pom.xml._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddPlugin.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.36.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. | `org.openrewrite.maven` |
| `String` | artifactId | The second part of a dependency coordinate 'org.openrewrite.maven:rewrite-maven-plugin:VERSION'. | `rewrite-maven-plugin` |
| `String` | version | *Optional*. A fixed version of the plugin to add. | `1.0.0` |
| `String` | configuration | *Optional*. Optional plugin configuration provided as raw XML | `<configuration><foo>foo</foo></configuration>` |
| `String` | dependencies | *Optional*. Optional plugin dependencies provided as raw XML. | `<dependencies><dependency><groupId>com.yourorg</groupId><artifactId>core-lib</artifactId><version>1.0.0</version></dependency></dependencies>` |
| `String` | executions | *Optional*. Optional executions provided as raw XML. | `<executions><execution><phase>generate-sources</phase><goals><goal>add-source</goal></goals></execution></executions>` |
| `String` | filePattern | *Optional*. A glob expression that can be used to constrain which directories or source files should be searched. Multiple patterns may be specified, separated by a semicolon `;`. If multiple patterns are supplied any of the patterns matching will be interpreted as a match. When not set, all source files are searched.  | `**/*-parent/grpc-*/pom.xml` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddPluginExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddPluginExample
displayName: Add Maven plugin example
recipeList:
  - org.openrewrite.maven.AddPlugin:
      groupId: org.openrewrite.maven
      artifactId: rewrite-maven-plugin
      version: 1.0.0
      configuration: <configuration><foo>foo</foo></configuration>
      dependencies: <dependencies><dependency><groupId>com.yourorg</groupId><artifactId>core-lib</artifactId><version>1.0.0</version></dependency></dependencies>
      executions: <executions><execution><phase>generate-sources</phase><goals><goal>add-source</goal></goals></execution></executions>
      filePattern: '**/*-parent/grpc-*/pom.xml'
```
{% endcode %}

Now that `com.yourorg.AddPluginExample` has been defined, activate it in your build file:
{% tabs %}

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
            <recipe>com.yourorg.AddPluginExample</recipe>
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
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe AddPluginExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddPlugin)

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
[Jonathan Schneider](mailto:jkschneider@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Daniel Wallman](mailto:daniel.wallman@m.co), [Greg Adams](mailto:greg@moderne.io), [Alex Boyko](mailto:aboyko@pivotal.io), [traceyyoshima](mailto:tracey.yoshima@gmail.com), Tyler Van Gorder, [Aaron Gershman](mailto:aegershman@gmail.com), [Tim te Beek](mailto:tim@moderne.io), Adriano Machado, [Henrik S](mailto:henrik.strath@m.co)
