# Refaster rules related to expressions dealing with `LongStream`s

**tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.LongStreamRules`. [Source](https://error-prone.picnic.tech/refasterrules/LongStreamRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.7.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `LongStream#range(long, long)` over the more contrived alternative](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamclosedopenrangerecipe.md)
* [Don't unnecessarily call `Streams#concat(LongStream...)`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$concatonelongstreamrecipe.md)
* [Prefer `LongStream#concat(LongStream, LongStream)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$concattwolongstreamsrecipe.md)
* [Apply `LongStream#filter(LongPredicate)` before `LongStream#sorted()` to reduce the number of elements to sort](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamfiltersortedrecipe.md)
* [In order to test whether a stream has any element, simply try to find one](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamisemptyrecipe.md)
* [In order to test whether a stream has any element, simply try to find one](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamisnotemptyrecipe.md)
* [Refaster template `LongStreamRules.LongStreamMin`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamminrecipe.md)
* [Prefer `LongStream#noneMatch(LongPredicate)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamnonematchrecipe.md)
* [Prefer `LongStream#anyMatch(LongPredicate)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamanymatchrecipe.md)
* [Refaster template `LongStreamRules.LongStreamAllMatch`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamallmatchrecipe.md)
* [Refaster template `LongStreamRules.LongStreamTakeWhile`](../../../../tech/picnic/errorprone/refasterrules/longstreamrulesrecipes$longstreamtakewhilerecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
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
{% endtab %}
{% endtabs %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.7.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.23.3")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes")
    exportDatatables = true
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.7.1")
}
```
{% endcode %}
2. Run `gradle rewriteRun` to run the recipe.
{% endtab %}

{% tab title="Gradle init script" %}
1. Create a file named `init.gradle` in the root of your project.
{% code title="init.gradle" %}
```groovy
initscript {
    repositories {
        maven { url "https://plugins.gradle.org/m2" }
    }
    dependencies { classpath("org.openrewrite:plugin:6.23.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.7.1")
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
{% endcode %}
2. Run the recipe.
{% code title="shell" overflow="wrap"%}
```shell
gradle --init-script init.gradle rewriteRun
```
{% endcode %}
{% endtab %}
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
            <recipe>tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.7.1</version>
          </dependency>
        </dependencies>
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

{% code title="shell" overflow="wrap" %}
```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe LongStreamRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes)

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

