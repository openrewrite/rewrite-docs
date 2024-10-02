---
sidebar_label: "Change XML tag value"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change XML tag value

**org.openrewrite.xml.ChangeTagValue**

_Alters the value of XML tags matching the provided expression._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-xml/src/main/java/org/openrewrite/xml/ChangeTagValue.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-xml/8.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-xml
* version: 8.36.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | elementName | The name of the element whose value is to be changed. Interpreted as an XPath Expression. | `/settings/servers/server/username` |
| `String` | oldValue | *Optional*. The old value of the tag. | `user` |
| `String` | newValue | The new value for the tag. | `user` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.ChangeTagValueExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.ChangeTagValueExample
displayName: Change XML tag value example
recipeList:
  - org.openrewrite.xml.ChangeTagValue:
      elementName: /settings/servers/server/username
      oldValue: user
      newValue: user
```

Now that `com.yourorg.ChangeTagValueExample` has been defined, activate it in your build file:
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("com.yourorg.ChangeTagValueExample")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>
<TabItem value="maven" title="Maven">
    1. Add the following to your `pom.xml` file:
    ```xml title="pom.xml"
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
                <recipe>com.yourorg.ChangeTagValueExample</recipe>
              </activeRecipes>
            </configuration>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe ChangeTagValueExample
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.xml.ChangeTagValue">
    <img
    src={require("/static/img/ModerneRecipeButton.png").default}
    alt="Moderne Link Image"
    width="50%"
    />
</a>

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
Mark Brophy, [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Tim te Beek](mailto:tim@moderne.io)