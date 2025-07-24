---
sidebar_label: "PrimitiveRules Refaster recipes"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# `PrimitiveRules` Refaster recipes

**tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes**

_Refaster rules related to expressions dealing with primitives. [Source](https://error-prone.picnic.tech/refasterrules/PrimitiveRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes), 
[Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), 
[Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/)

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

This recipe is available under the [Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0).


## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Refaster template `PrimitiveRules.LessThan`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$lessthanrecipe)
* [Refaster template `PrimitiveRules.LessThanOrEqualTo`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$lessthanorequaltorecipe)
* [Refaster template `PrimitiveRules.GreaterThan`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$greaterthanrecipe)
* [Refaster template `PrimitiveRules.GreaterThanOrEqualTo`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$greaterthanorequaltorecipe)
* [Refaster template `PrimitiveRules.LongToIntExact`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longtointexactrecipe)
* [Refaster template `PrimitiveRules.BooleanHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$booleanhashcoderecipe)
* [Refaster template `PrimitiveRules.ByteHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$bytehashcoderecipe)
* [Refaster template `PrimitiveRules.CharacterHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$characterhashcoderecipe)
* [Refaster template `PrimitiveRules.ShortHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shorthashcoderecipe)
* [Refaster template `PrimitiveRules.IntegerHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerhashcoderecipe)
* [Refaster template `PrimitiveRules.LongHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longhashcoderecipe)
* [Refaster template `PrimitiveRules.FloatHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floathashcoderecipe)
* [Refaster template `PrimitiveRules.DoubleHashCode`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublehashcoderecipe)
* [Refaster template `PrimitiveRules.CharacterBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$characterbytesrecipe)
* [Refaster template `PrimitiveRules.ShortBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shortbytesrecipe)
* [Refaster template `PrimitiveRules.IntegerBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerbytesrecipe)
* [Refaster template `PrimitiveRules.LongBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longbytesrecipe)
* [Refaster template `PrimitiveRules.FloatBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatbytesrecipe)
* [Refaster template `PrimitiveRules.DoubleBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublebytesrecipe)
* [Refaster template `PrimitiveRules.FloatIsFinite`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatisfiniterecipe)
* [Refaster template `PrimitiveRules.DoubleIsFinite`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doubleisfiniterecipe)
* [Refaster template `PrimitiveRules.IntegerSignumIsPositive`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integersignumispositiverecipe)
* [Refaster template `PrimitiveRules.IntegerSignumIsNegative`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integersignumisnegativerecipe)
* [Refaster template `PrimitiveRules.LongSignumIsPositive`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longsignumispositiverecipe)
* [Refaster template `PrimitiveRules.LongSignumIsNegative`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longsignumisnegativerecipe)
* [Refaster template `PrimitiveRules.IntegerCompareUnsigned`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integercompareunsignedrecipe)
* [Refaster template `PrimitiveRules.LongCompareUnsigned`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longcompareunsignedrecipe)
* [Refaster template `PrimitiveRules.IntegerDivideUnsigned`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerdivideunsignedrecipe)
* [Refaster template `PrimitiveRules.LongDivideUnsigned`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longdivideunsignedrecipe)
* [Refaster template `PrimitiveRules.IntegerRemainderUnsigned`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerremainderunsignedrecipe)
* [Refaster template `PrimitiveRules.LongRemainderUnsigned`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longremainderunsignedrecipe)
* [Refaster template `PrimitiveRules.IntegerParseUnsignedInt`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerparseunsignedintrecipe)
* [Refaster template `PrimitiveRules.LongParseUnsignedLong`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longparseunsignedlongrecipe)
* [Refaster template `PrimitiveRules.IntegerParseUnsignedIntWithRadix`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerparseunsignedintwithradixrecipe)
* [Refaster template `PrimitiveRules.LongParseUnsignedLongWithRadix`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longparseunsignedlongwithradixrecipe)
* [Refaster template `PrimitiveRules.IntegerToUnsignedString`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integertounsignedstringrecipe)
* [Refaster template `PrimitiveRules.LongToUnsignedString`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longtounsignedstringrecipe)
* [Refaster template `PrimitiveRules.IntegerToUnsignedStringWithRadix`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integertounsignedstringwithradixrecipe)
* [Refaster template `PrimitiveRules.LongToUnsignedStringWithRadix`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longtounsignedstringwithradixrecipe)
* [Refaster template `PrimitiveRules.ArraysCompareUnsignedBytes`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedbytesrecipe)
* [Refaster template `PrimitiveRules.ArraysCompareUnsignedInts`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedintsrecipe)
* [Refaster template `PrimitiveRules.ArraysCompareUnsignedLongs`](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$arrayscompareunsignedlongsrecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes
displayName: `PrimitiveRules` Refaster recipes
description: |
  Refaster rules related to expressions dealing with primitives.
  [Source](https://error-prone.picnic.tech/refasterrules/PrimitiveRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LessThanRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LessThanOrEqualToRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$GreaterThanRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$GreaterThanOrEqualToRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToIntExactRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$BooleanHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ByteHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$CharacterHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ShortHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleHashCodeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$CharacterBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ShortBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatIsFiniteRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleIsFiniteRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerSignumIsPositiveRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerSignumIsNegativeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongSignumIsPositiveRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongSignumIsNegativeRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerCompareUnsignedRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongCompareUnsignedRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerDivideUnsignedRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongDivideUnsignedRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerRemainderUnsignedRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongRemainderUnsignedRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerParseUnsignedIntRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongParseUnsignedLongRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerParseUnsignedIntWithRadixRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongParseUnsignedLongWithRadixRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerToUnsignedStringRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToUnsignedStringRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerToUnsignedStringWithRadixRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongToUnsignedStringWithRadixRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedBytesRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedIntsRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ArraysCompareUnsignedLongsRecipe

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
    activeRecipe("tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes")
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
        activeRecipe("tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/user-documentation/moderne-cli/getting-started/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe PrimitiveRulesRecipes
```

If the recipe is not available locally, then you can install it using:
```shell
mod config recipes jar install org.openrewrite.recipe:rewrite-third-party:{{VERSION_ORG_OPENREWRITE_RECIPE_REWRITE_THIRD_PARTY}}
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

import RecipeCallout from '@site/src/components/ModerneLink';

<RecipeCallout link="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes" />

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
| 99th percentile scanning time (ns) | 99 out of 100 scans completed in this amount of time. |
| Max scanning time (ns) | The max time scanning any one source file. |
| Cumulative edit time (ns) | The total time spent across the editing phase of this recipe. |
| 99th percentile edit time (ns) | 99 out of 100 edits completed in this amount of time. |
| Max edit time (ns) | The max time editing any one source file. |

</TabItem>

</Tabs>
