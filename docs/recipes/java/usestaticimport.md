---
sidebar_label: "Use static import"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Use static import

**org.openrewrite.java.UseStaticImport**

_Removes unnecessary receiver types from static method invocations. For example, `Collections.emptyList()` becomes `emptyList()`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite/blob/main/rewrite-java/src/main/java/org/openrewrite/java/UseStaticImport.java), [Issue Tracker](https://github.com/openrewrite/rewrite/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite/rewrite-java/8.36.0/jar)

* groupId: org.openrewrite
* artifactId: rewrite-java
* version: 8.36.0

## Options

| Type | Name | Description | Example |
| -- | -- | -- | -- |
| `String` | methodPattern | A [method pattern](/reference/method-patterns) that is used to find matching method invocations. | `java.util.Collections emptyList()` |


## Usage

This recipe has required configuration parameters. Recipes with required configuration parameters cannot be activated directly. To activate this recipe you must create a new recipe which fills in the required parameters. In your `rewrite.yml` create a new recipe with a unique name. For example: `com.yourorg.UseStaticImportExample`.
Here's how you can define and customize such a recipe within your rewrite.yml:
```yaml title="rewrite.yml"
---
type: specs.openrewrite.org/v1beta/recipe
name: com.yourorg.UseStaticImportExample
displayName: Use static import example
recipeList:
  - org.openrewrite.java.UseStaticImport:
      methodPattern: java.util.Collections emptyList()
```

Now that `com.yourorg.UseStaticImportExample` has been defined, activate it in your build file:
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("com.yourorg.UseStaticImportExample")
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
                <recipe>com.yourorg.UseStaticImportExample</recipe>
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
    mod run . --recipe UseStaticImportExample
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/org.openrewrite.java.UseStaticImport">
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
[Jonathan Leitschuh](mailto:jonathan.leitschuh@gmail.com), [Sam Snyder](mailto:sam@moderne.io), [Michael Keppler](mailto:bananeweizen@gmx.de), [Niklas Gustavsson](mailto:niklas@protocol7.com), [Tim te Beek](mailto:tim@moderne.io), [Jonathan Schnéider](mailto:jkschneider@gmail.com), [Peter Streef](mailto:peter@moderne.io), [Knut Wannheden](mailto:knut@moderne.io)