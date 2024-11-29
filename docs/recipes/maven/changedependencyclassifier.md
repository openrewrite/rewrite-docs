---
sidebar_label: "Change Maven dependency classifier"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change Maven dependency classifier

**org.openrewrite.maven.ChangeDependencyClassifier**

_Add or alter the classifier of the specified dependency._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-maven/src/main/java/org/openrewrite/maven/ChangeDependencyClassifier.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-maven/)

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | groupId | The first part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `com.google.guava` |
| `String` | artifactId | The second part of a dependency coordinate `com.google.guava:guava:VERSION`. This can be a glob expression. | `guava` |
| `String` | newClassifier | *Optional*. Classifier to apply to specified Maven dependency. May be omitted, which indicates that no classifier should be added and any existing scope be removed from the dependency. | `jar` |
| `Boolean` | changeManagedDependency | *Optional*. This flag can be set to explicitly change the classifier in Maven management dependency section. Default `false`. | `true` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeDependencyClassifierExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeDependencyClassifierExample
displayName: Change Maven dependency classifier example
recipeList:
  - org.openrewrite.maven.ChangeDependencyClassifier:
      groupId: com.google.guava
      artifactId: guava
      newClassifier: jar
      changeManagedDependency: true
```

Now that `com.yourorg.ChangeDependencyClassifierExample` has been defined, activate it in your build file:
<Tabs groupId="projectType">

<TabItem value="maven" label="Maven">

1. Add the following to your `pom.xml` file:

```xml title="pom.xml"
<project>
  <build>
    <plugins>
      <plugin>
        <groupId>org.openrewrite.maven</groupId>
        <artifactId>rewrite-maven-plugin</artifactId>
        <version>{{VERSION_REWRITE_MAVEN_PLUGIN}}</version>
        <configuration>
          <exportDatatables>true</exportDatatables>
          <activeRecipes>
            <recipe>com.yourorg.ChangeDependencyClassifierExample</recipe>
          </activeRecipes>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```
2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe ChangeDependencyClassifier --recipe-option "groupId=com.google.guava" --recipe-option "artifactId=guava" --recipe-option "newClassifier=jar" --recipe-option "changeManagedDependency=true"
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite:rewrite-maven:{{VERSION_REWRITE_MAVEN}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/org.openrewrite.maven.ChangeDependencyClassifier" />

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
[Alex Boyko](mailto:aboyko@pivotal.io), [Andrii Bohutskyi](mailto:Ferioney@gmail.com), [Jonathan Schnéider](mailto:jkschneider@gmail.com), Tyler Van Gorder, Valentin Delaye, [Sam Snyder](mailto:sam@moderne.io), [Tim te Beek](mailto:tim@moderne.io)
