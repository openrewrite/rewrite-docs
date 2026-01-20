---
sidebar_label: "`StringRules` Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `StringRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.StringRulesRecipes**

_Refaster rules related to expressions dealing with `String`s. [Source](https://error-prone.picnic.tech/refasterrules/StringRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.StringRulesRecipes),
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues),
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `StringRules.EmptyString`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$emptystringrecipe)
* [Refaster template `StringRules.StringIdentity`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringidentityrecipe)
* [Refaster template `StringRules.StringIsEmpty`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptyrecipe)
* [Refaster template `StringRules.StringIsEmptyPredicate`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisemptypredicaterecipe)
* [Refaster template `StringRules.StringIsNotEmptyPredicate`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisnotemptypredicaterecipe)
* [Refaster template `StringRules.StringIsNullOrEmpty`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisnulloremptyrecipe)
* [Refaster template `StringRules.StringIsBlank`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringisblankrecipe)
* [Refaster template `StringRules.OptionalNonEmptyString`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$optionalnonemptystringrecipe)
* [Refaster template `StringRules.FilterEmptyString`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$filteremptystringrecipe)
* [Refaster template `StringRules.JoinStrings`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$joinstringsrecipe)
* [Refaster template `StringRules.StringValueOf`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofrecipe)
* [Refaster template `StringRules.NewStringFromCharArraySubSequence`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$newstringfromchararraysubsequencerecipe)
* [Refaster template `StringRules.NewStringFromCharArray`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$newstringfromchararrayrecipe)
* [Refaster template `StringRules.StringValueOfMethodReference`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringvalueofmethodreferencerecipe)
* [Refaster template `StringRules.SubstringRemainder`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$substringremainderrecipe)
* [Refaster template `StringRules.Utf8EncodedLength`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$utf8encodedlengthrecipe)
* [Refaster template `StringRules.StringIndexOfCharFromIndex`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofcharfromindexrecipe)
* [Refaster template `StringRules.StringIndexOfCharBetweenIndices`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofcharbetweenindicesrecipe)
* [Refaster template `StringRules.StringIndexOfStringFromIndex`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofstringfromindexrecipe)
* [Refaster template `StringRules.StringIndexOfStringBetweenIndices`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringindexofstringbetweenindicesrecipe)
* [Refaster template `StringRules.StringLastIndexOfChar`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofcharrecipe)
* [Refaster template `StringRules.StringLastIndexOfString`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofstringrecipe)
* [Refaster template `StringRules.StringLastIndexOfCharWithIndex`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofcharwithindexrecipe)
* [Refaster template `StringRules.StringLastIndexOfStringWithIndex`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringlastindexofstringwithindexrecipe)
* [Refaster template `StringRules.StringStartsWith`](../../../../tech/picnic/errorprone/refasterrules/stringrulesrecipes$stringstartswithrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.StringRulesRecipes
displayName: `StringRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with `String`s. [Source](https://error-prone.picnic.tech/refasterrules/StringRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$EmptyStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIdentityRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsEmptyPredicateRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsNotEmptyPredicateRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsNullOrEmptyRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIsBlankRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$OptionalNonEmptyStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$FilterEmptyStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$JoinStringsRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewStringFromCharArraySubSequenceRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$NewStringFromCharArrayRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringValueOfMethodReferenceRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$SubstringRemainderRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$Utf8EncodedLengthRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharFromIndexRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfCharBetweenIndicesRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringFromIndexRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringIndexOfStringBetweenIndicesRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfCharRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfStringRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfCharWithIndexRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringLastIndexOfStringWithIndexRecipe
  - tech.picnic.errorprone.refasterrules.StringRulesRecipes$StringStartsWithRecipe

```
</TabItem>
</Tabs>

## Used by

This recipe is used as part of the following composite recipes:

* [All Picnic Refaster rules](/recipes/tech/picnic/errorprone/refasterrules/allrefasterrules.md)

## Example


<Tabs groupId="beforeAfter">
<TabItem value="java" label="java">


###### Before
```java
import java.util.Objects;
class Test {
  String test(Object object) {
    return Objects.toString(object);
  }
}
```

###### After
```java
class Test {
  String test(Object object) {
    return String.valueOf(object);
  }
}
```

</TabItem>
<TabItem value="diff" label="Diff" >

```diff
@@ -1,1 +1,0 @@
-import java.util.Objects;
class Test {
@@ -4,1 +3,1 @@
class Test {
  String test(Object object) {
-   return Objects.toString(object);
+   return String.valueOf(object);
  }
```
</TabItem>
</Tabs>


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
    activeRecipe("tech.picnic.errorprone.refasterrules.StringRulesRecipes")
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
        activeRecipe("tech.picnic.errorprone.refasterrules.StringRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.StringRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.StringRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe StringRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.StringRulesRecipes" />

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
