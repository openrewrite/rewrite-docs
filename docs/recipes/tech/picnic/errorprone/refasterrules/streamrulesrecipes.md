---
sidebar_label: "`StreamRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `StreamRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.StreamRulesRecipes**

_Refaster rules related to expressions dealing with `Stream`s. [Source](https://error-prone.picnic.tech/refasterrules/StreamRules)._

## Recipe source

[GitHub: rewrite-third-party-0.34.0.jar](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.StreamRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `StreamRules.Joining`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$joiningrecipe)
* [Refaster template `StreamRules.StreamOfNullable`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamofnullablerecipe)
* [Refaster template `StreamRules.ConcatOneStream`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$concatonestreamrecipe)
* [Refaster template `StreamRules.ConcatTwoStreams`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$concattwostreamsrecipe)
* [Refaster template `StreamRules.StreamFilterSorted`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamfiltersortedrecipe)
* [Refaster template `StreamRules.StreamFilterSortedWithComparator`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamfiltersortedwithcomparatorrecipe)
* [Refaster template `StreamRules.StreamDistinctSorted`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamdistinctsortedrecipe)
* [Refaster template `StreamRules.StreamDistinctSortedWithComparator`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamdistinctsortedwithcomparatorrecipe)
* [Refaster template `StreamRules.StreamMapFirst`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammapfirstrecipe)
* [Refaster template `StreamRules.StreamFindAnyIsEmpty`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamfindanyisemptyrecipe)
* [Refaster template `StreamRules.StreamFindAnyIsPresent`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamfindanyispresentrecipe)
* [Refaster template `StreamRules.StreamMapFilter`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammapfilterrecipe)
* [Refaster template `StreamRules.StreamMin`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamminrecipe)
* [Refaster template `StreamRules.StreamMinNaturalOrder`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamminnaturalorderrecipe)
* [Refaster template `StreamRules.StreamMax`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammaxrecipe)
* [Refaster template `StreamRules.StreamMaxNaturalOrder`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammaxnaturalorderrecipe)
* [Refaster template `StreamRules.StreamMapToIntSummaryStatistics`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammaptointsummarystatisticsrecipe)
* [Refaster template `StreamRules.StreamMapToDoubleSummaryStatistics`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammaptodoublesummarystatisticsrecipe)
* [Refaster template `StreamRules.StreamMapToLongSummaryStatistics`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammaptolongsummarystatisticsrecipe)
* [Refaster template `StreamRules.StreamCount`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamcountrecipe)
* [Refaster template `StreamRules.StreamReduce`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamreducerecipe)
* [Refaster template `StreamRules.StreamReduceWithIdentity`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamreducewithidentityrecipe)
* [Refaster template `StreamRules.StreamFilterCollect`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamfiltercollectrecipe)
* [Refaster template `StreamRules.StreamMapCollect`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streammapcollectrecipe)
* [Refaster template `StreamRules.StreamFlatMapCollect`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamflatmapcollectrecipe)
* [Refaster template `StreamRules.StreamTakeWhile`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamtakewhilerecipe)
* [Refaster template `StreamRules.StreamIterate`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamiteraterecipe)
* [Refaster template `StreamRules.StreamOf1`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamof1recipe)
* [Refaster template `StreamRules.StreamOf2`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamof2recipe)
* [Refaster template `StreamRules.StreamOf3`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamof3recipe)
* [Refaster template `StreamRules.StreamOf4`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamof4recipe)
* [Refaster template `StreamRules.StreamOf5`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamof5recipe)
* [Refaster template `StreamRules.StreamsStream`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$streamsstreamrecipe)
* [Refaster template `StreamRules.CollectionParallelStream`](../../../../tech/picnic/errorprone/refasterrules/streamrulesrecipes$collectionparallelstreamrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.StreamRulesRecipes
displayName: `StreamRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with `Stream`s. [Source](https://error-prone.picnic.tech/refasterrules/StreamRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$JoiningRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOfNullableRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$ConcatOneStreamRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$ConcatTwoStreamsRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFilterSortedRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFilterSortedWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamDistinctSortedRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamDistinctSortedWithComparatorRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapFirstRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFindAnyIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFindAnyIsPresentRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapFilterRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMinRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMinNaturalOrderRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMaxRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMaxNaturalOrderRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapToIntSummaryStatisticsRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapToDoubleSummaryStatisticsRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapToLongSummaryStatisticsRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamCountRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamReduceRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamReduceWithIdentityRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFilterCollectRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamMapCollectRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamFlatMapCollectRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamTakeWhileRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamIterateRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf1Recipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf2Recipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf3Recipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf4Recipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamOf5Recipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$StreamsStreamRecipe
  - tech.picnic.errorprone.refasterrules.StreamRulesRecipes$CollectionParallelStreamRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/tech/picnic/errorprone/refasterrules/allrefasterrules.md)


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party` in your build file or by running a shell command (in which case no build changes are needed):
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("latest.release")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.StreamRulesRecipes")
    setExportDatatables(true)
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
}
```

2. Run `gradle rewriteRun` to run the recipe.
</TabItem>

<TabItem value="gradle-init-script" label="Gradle init script">

1. Create a file named `init.gradle` in the root of your project.

```groovy title="init.gradle"
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:{{VERSION_REWRITE_GRADLE_PLUGIN}}") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.StreamRulesRecipes")
        setExportDatatables(true)
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
<TabItem value="maven" label="Maven POM">

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
            <recipe>tech.picnic.errorprone.refasterrules.StreamRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}</version>
          </dependency>
        </dependencies>
      </plugin>
    </plugins>
  </build>
</project>
```

2. Run `mvn rewrite:run` to run the recipe.
</TabItem>

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.StreamRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe StreamRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.StreamRulesRecipes" />

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
## Data Tables

<Tabs groupId="data-tables">
<TabItem value="org.openrewrite.table.SourcesFileResults" label="SourcesFileResults">

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

</TabItem>

<TabItem value="org.openrewrite.table.SearchResults" label="SearchResults">

### Source files that had search results
**org.openrewrite.table.SearchResults**

_Search results that were found during the recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path of search result before the run | The source path of the file with the search result markers present. |
| Source path of search result after run the run | A recipe may modify the source path. This is the path after the run. `null` when a source file was deleted during the run. |
| Result | The trimmed printed tree of the LST element that the marker is attached to. |
| Description | The content of the description of the marker. |
| Recipe that added the search marker | The specific recipe that added the Search marker. |

</TabItem>

<TabItem value="org.openrewrite.table.SourcesFileErrors" label="SourcesFileErrors">

### Source files that errored on a recipe
**org.openrewrite.table.SourcesFileErrors**

_The details of all errors produced by a recipe run._

| Column Name | Description |
| ----------- | ----------- |
| Source path | The file that failed to parse. |
| Recipe that made changes | The specific recipe that made a change. |
| Stack trace | The stack trace of the failure. |

</TabItem>

<TabItem value="org.openrewrite.table.RecipeRunStats" label="RecipeRunStats">

### Recipe performance
**org.openrewrite.table.RecipeRunStats**

_Statistics used in analyzing the performance of recipes._

| Column Name | Description |
| ----------- | ----------- |
| The recipe | The recipe whose stats are being measured both individually and cumulatively. |
| Source file count | The number of source files the recipe ran over. |
| Source file changed count | The number of source files which were changed in the recipe run. Includes files created, deleted, and edited. |
| Cumulative scanning time (ns) | The total time spent across the scanning phase of this recipe. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
