---
sidebar_label: "Refaster rules related to expressions dealing with primitives"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Refaster rules related to expressions dealing with primitives

**tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.PrimitiveRules`. [Source](https://error-prone.picnic.tech/refasterrules/PrimitiveRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.8.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.8.0

:::info
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
:::

## Definition

<Tabs groupId="recipeType">
<TabItem value="recipe-list" label="Recipe List" >
* [Avoid contrived ways of expressing the "less than" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$lessthanrecipe)
* [Avoid contrived ways of expressing the "less than or equal to" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$lessthanorequaltorecipe)
* [Avoid contrived ways of expressing the "greater than" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$greaterthanrecipe)
* [Avoid contrived ways of expressing the "greater than or equal to" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$greaterthanorequaltorecipe)
* [Prefer `Math#toIntExact(long)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longtointexactrecipe)
* [Prefer `Boolean#hashCode(boolean)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$booleanhashcoderecipe)
* [Prefer `Byte#hashCode(byte)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$bytehashcoderecipe)
* [Prefer `Character#hashCode(char)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$characterhashcoderecipe)
* [Prefer `Short#hashCode(short)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shorthashcoderecipe)
* [Prefer `Integer#hashCode(int)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerhashcoderecipe)
* [Prefer `Long#hashCode(long)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longhashcoderecipe)
* [Prefer `Float#hashCode(float)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floathashcoderecipe)
* [Prefer `Double#hashCode(double)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublehashcoderecipe)
* [Prefer `Boolean#compare(boolean, boolean)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$booleancomparerecipe)
* [Prefer `Character#compare(char, char)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$charactercomparerecipe)
* [Prefer `Short#compare(short, short)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shortcomparerecipe)
* [Prefer `Integer#compare(int, int)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integercomparerecipe)
* [Prefer `Long#compare(long, long)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longcomparerecipe)
* [Prefer `Float#compare(float, float)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatcomparerecipe)
* [Prefer `Double#compare(double, double)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublecomparerecipe)
* [Prefer `Character#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$characterbytesrecipe)
* [Prefer `Short#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shortbytesrecipe)
* [Prefer `Integer#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerbytesrecipe)
* [Prefer `Long#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longbytesrecipe)
* [Prefer `Float#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatbytesrecipe)
* [Prefer `Double#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublebytesrecipe)
* [Prefer `Float#isFinite(float)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatisfiniterecipe)
* [Prefer `Double#isFinite(double)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doubleisfiniterecipe)
* [Prefer an `Integer#signum(int)` comparison to 1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integersignumispositiverecipe)
* [Prefer an `Integer#signum(int)` comparison to -1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integersignumisnegativerecipe)
* [Prefer an `Long#signum(long)` comparison to 1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longsignumispositiverecipe)
* [Prefer an `Long#signum(long)` comparison to -1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longsignumisnegativerecipe)

</TabItem>

<TabItem value="yaml-recipe-list" label="Yaml Recipe List">

```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes
displayName: Refaster rules related to expressions dealing with primitives
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.PrimitiveRules`. [Source](https://error-prone.picnic.tech/refasterrules/PrimitiveRules).
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
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$BooleanCompareRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$CharacterCompareRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$ShortCompareRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$IntegerCompareRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$LongCompareRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$FloatCompareRecipe
  - tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes$DoubleCompareRecipe
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

```
</TabItem>
</Tabs>

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.8.0` in your build file or by running a shell command (in which case no build changes are needed): 
<Tabs groupId="projectType">
<TabItem value="gradle" label="Gradle">

1. Add the following to your `build.gradle` file:

```groovy title="build.gradle"
plugins {
    id("org.openrewrite.rewrite") version("6.24.0")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes")
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

<TabItem value="gradle-init-script" label="Gradle init script">

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
        activeRecipe("tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes")
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
<TabItem value="maven" label="Maven POM">

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
            <recipe>tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes</recipe>
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

<TabItem value="maven-command-line" label="Maven Command Line">
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell title="shell"
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes -Drewrite.exportDatatables=true
```
</TabItem>
<TabItem value="moderne-cli" label="Moderne CLI">

You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

```shell title="shell"
mod run . --recipe PrimitiveRulesRecipes
```
</TabItem>
</Tabs>

## See how this recipe works across multiple open-source repositories

<a href="https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes">
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

