---
sidebar_label: "Refaster rules related to expressions dealing with LongStreams"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refaster rules related to expressions dealing with `LongStream`s

**tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.LongStreamRules`. [Source](https://error-prone.picnic.tech/refasterrules/LongStreamRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.8.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipe-type">
<TabItem value="recipe-list" title="Recipe List" >
* [Prefer `LongStream#range(long, long)` over the more contrived alternative](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamclosedopenrangerecipe)
* [Don't unnecessarily call `Streams#concat(LongStream...)`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$concatonelongstreamrecipe)
* [Prefer `LongStream#concat(LongStream, LongStream)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$concattwolongstreamsrecipe)
* [Apply `LongStream#filter(LongPredicate)` before `LongStream#sorted()` to reduce the number of elements to sort](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfiltersortedrecipe)
* [In order to test whether a stream has any element, simply try to find one](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamisemptyrecipe)
* [In order to test whether a stream has any element, simply try to find one](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamisnotemptyrecipe)
* [Refaster template `LongStreamRules.LongStreamMin`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamminrecipe)
* [Prefer `LongStream#noneMatch(LongPredicate)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamnonematchrecipe)
* [Prefer `LongStream#anyMatch(LongPredicate)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamanymatchrecipe)
* [Refaster template `LongStreamRules.LongStreamAllMatch`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamallmatchrecipe)
* [Refaster template `LongStreamRules.LongStreamTakeWhile`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamtakewhilerecipe)

</TabItem>

<TabItem value="yaml-recipe-list" title="Yaml Recipe List">
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes
displayName: Refaster rules related to expressions dealing with `LongStream`s
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.LongStreamRules`. [Source](https://error-prone.picnic.tech/refasterrules/LongStreamRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamClosedOpenRangeRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$ConcatOneLongStreamRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$ConcatTwoLongStreamsRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamFilterSortedRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamIsNotEmptyRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamMinRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamNoneMatchRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamAnyMatchRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamAllMatchRecipe
  - tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes$LongStreamTakeWhileRecipe

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
        activeRecipe("tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes")
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
            activeRecipe("tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes")
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
                <recipe>tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes</recipe>
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
    mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes -Drewrite.exportDatatables=true
    ```
</TabItem>
<TabItem value="moderne-cli" title="Moderne CLI">
    You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

    ```shell title="shell"
    mod run . --recipe LongStreamRulesRecipes
    ```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes">
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
