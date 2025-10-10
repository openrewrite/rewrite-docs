---
sidebar_label: "`CollectionRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `CollectionRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.CollectionRulesRecipes**

_Refaster rules related to expressions dealing with (arbitrary) collections. [Source](https://error-prone.picnic.tech/refasterrules/CollectionRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.CollectionRulesRecipes), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `CollectionRules.CollectionIsEmpty`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionisemptyrecipe)
* [Refaster template `CollectionRules.CollectionSize`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionsizerecipe)
* [Refaster template `CollectionRules.CollectionContains`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectioncontainsrecipe)
* [Refaster template `CollectionRules.CollectionAddAllToCollectionExpression`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionaddalltocollectionexpressionrecipe)
* [Refaster template `CollectionRules.CollectionRemoveAllFromCollectionExpression`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionremoveallfromcollectionexpressionrecipe)
* [Refaster template `CollectionRules.SetStream`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$setstreamrecipe)
* [Refaster template `CollectionRules.NewArrayListFromCollection`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$newarraylistfromcollectionrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionAsList`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectionaslistrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionStream`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectionstreamrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionContains`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectioncontainsrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionParallelStream`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectionparallelstreamrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionToString`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectiontostringrecipe)
* [Refaster template `CollectionRules.CollectionToArray`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectiontoarrayrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionToArrayWithArray`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectiontoarraywitharrayrecipe)
* [Refaster template `CollectionRules.ImmutableCollectionToArrayWithGenerator`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$immutablecollectiontoarraywithgeneratorrecipe)
* [Refaster template `CollectionRules.CollectionIterator`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectioniteratorrecipe)
* [Refaster template `CollectionRules.OptionalFirstCollectionElement`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$optionalfirstcollectionelementrecipe)
* [Refaster template `CollectionRules.RemoveOptionalFirstNavigableSetElement`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$removeoptionalfirstnavigablesetelementrecipe)
* [Refaster template `CollectionRules.CollectionForEach`](../../../../tech/picnic/errorprone/refasterrules/collectionrulesrecipes$collectionforeachrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.CollectionRulesRecipes
displayName: `CollectionRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with (arbitrary) collections. [Source](https://error-prone.picnic.tech/refasterrules/CollectionRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionSizeRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionContainsRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionAddAllToCollectionExpressionRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionRemoveAllFromCollectionExpressionRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$SetStreamRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$NewArrayListFromCollectionRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionAsListRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionStreamRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionContainsRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionParallelStreamRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToStringRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionToArrayRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayWithArrayRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$ImmutableCollectionToArrayWithGeneratorRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionIteratorRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$OptionalFirstCollectionElementRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$RemoveOptionalFirstNavigableSetElementRecipe
  - tech.picnic.errorprone.refasterrules.CollectionRulesRecipes$CollectionForEachRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/tech/picnic/errorprone/refasterrules/tech/picnic/errorprone/refasterrules/allrefasterrules.md)


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
    activeRecipe("tech.picnic.errorprone.refasterrules.CollectionRulesRecipes")
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
        activeRecipe("tech.picnic.errorprone.refasterrules.CollectionRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.CollectionRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.CollectionRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe CollectionRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.CollectionRulesRecipes" />

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
