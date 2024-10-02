---
sidebar_label: "Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refaster rules"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refaster rules

**tech.picnic.errorprone.refasterrules.AssortedRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssortedRules`. [Source](https://error-prone.picnic.tech/refasterrules/AssortedRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.AssortedRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.8.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Prefer `Objects#checkIndex(int, int)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/assortedrulesrecipes$checkindexrecipe)
* [Don't unnecessarily repeat boolean expressions](../../../../tech/picnic/errorprone/refasterrules/assortedrulesrecipes$logicalimplicationrecipe)
* [Prefer `Splitter#splitToStream(CharSequence)` over less efficient alternatives](../../../../tech/picnic/errorprone/refasterrules/assortedrulesrecipes$splittostreamrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.AssortedRulesRecipes
displayName: Assorted Refaster rules that do not (yet) belong in one of the other classes with more topical Refaster rules
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.AssortedRules`. [Source](https://error-prone.picnic.tech/refasterrules/AssortedRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$CheckIndexRecipe
  - tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$LogicalImplicationRecipe
  - tech.picnic.errorprone.refasterrules.AssortedRulesRecipes$SplitToStreamRecipe

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.8.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="project-type">
<TabItem value="gradle" title="Gradle">
    1. Add the following to your `build.gradle` file:
    ```groovy title="build.gradle"
    plugins {
        id("org.openrewrite.rewrite") version("6.24.0")
    }
    
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.AssortedRulesRecipes")
        exportDatatables = true
    }
    
    repositories {
        mavenCentral()
    }
    
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.8.0")
    }
    ```
    2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" title="Gradle init script">
    1. Create a file named `init.gradle` in the root of your project.
    ```groovy title="init.gradle"
    initscript {
        repositories {
            maven { url "https://plugins.gradle.org/m2" }
        }
        dependencies { classpath("org.openrewrite:plugin:6.24.0") }
    }
    rootProject {
        plugins.apply(org.openrewrite.gradle.RewritePlugin)
        dependencies {
            rewrite("org.openrewrite.recipe:rewrite-third-party:0.8.0")
        }
        rewrite {
            activeRecipe("tech.picnic.errorprone.refasterrules.AssortedRulesRecipes")
            exportDatatables = true
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
    2. Run the recipe.
    ```shell title="shell"
    gradle --init-script init.gradle rewriteRun
    ```
</TabItem>
<TabItem value="maven" title="Maven POM">
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
                <recipe>tech.picnic.errorprone.refasterrules.AssortedRulesRecipes</recipe>
              </activeRecipes>
            </configuration>
            <dependencies>
              <dependency>
                <groupId>org.openrewrite.recipe</groupId>
                <artifactId>rewrite-third-party</artifactId>
                <version>0.8.0</version>
              </dependency>
            </dependencies>
          </plugin>
        </plugins>
      </build>
    </project>
    ```
    2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" title="Maven Command Line">
    You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

    ```shell title="shell"
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.AssortedRulesRecipes -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe AssortedRulesRecipes
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.AssortedRulesRecipes">
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
