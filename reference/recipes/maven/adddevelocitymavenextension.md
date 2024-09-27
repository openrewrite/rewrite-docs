# Add the Develocity Maven extension

**org.openrewrite.maven.AddDevelocityMavenExtension**

_To integrate the Develocity Maven extension into Maven projects, ensure that the `develocity-maven-extension` is added to the `.mvn/extensions.xml` file if not already present. Additionally, configure the extension by adding the `.mvn/develocity.xml` configuration file._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/AddDevelocityMavenExtension.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/8.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-maven
* version: 8.36.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | version | *Optional*. A maven-compatible version number to select the gradle-enterprise-maven-extension version. | `1.17.4` |
| `String` | server | The URL of the Develocity server. | `https://scans.gradle.com/` |
| `Boolean` | allowUntrustedServer | *Optional*. When set to `true` the extension will be configured to allow unencrypted http connections with the server. If set to `false` or omitted, the extension will refuse to communicate without transport layer security enabled. | `true` |
| `Boolean` | fileFingerprints | *Optional*. When set to `true` the extension will capture additional information about the inputs to Maven goals. This increases the size of build scans, but is useful for diagnosing issues with goal caching.  | `true` |
| `Boolean` | uploadInBackground | *Optional*. When set to `false` the extension will not upload build scan in the background. By default, build scans are uploaded in the background after the build has finished to avoid blocking the build process. | `false` |
| `PublishCriteria` | publishCriteria | *Optional*. When set to `Always` the extension will publish build scans of every single build. This is the default behavior when omitted.When set to `Failure` the extension will only publish build scans when the build fails. When set to `Demand` the extension will only publish build scans when explicitly requested. Valid options: `Always`, `Failure`, `Demand` | `Always` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.AddDevelocityMavenExtensionExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:

{% code title="rewrite.yml" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.AddDevelocityMavenExtensionExample
displayName: Add the Develocity Maven extension example
recipeList:
  - org.openrewrite.maven.AddDevelocityMavenExtension:
      version: 1.17.4
      server: https://scans.gradle.com/
      allowUntrustedServer: true
      fileFingerprints: true
      uploadInBackground: false
      publishCriteria: Always
```
{% endcode %}

Now that `com.yourorg.AddDevelocityMavenExtensionExample` has been defined, activate it in your build file:
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
            <recipe>com.yourorg.AddDevelocityMavenExtensionExample</recipe>
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
mod run . --recipe AddDevelocityMavenExtensionExample
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.maven.AddDevelocityMavenExtension)

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

