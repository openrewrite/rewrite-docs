# Refaster rules related to expressions dealing with primitives

**tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.PrimitiveRules`. [Source](https://error-prone.picnic.tech/refasterrules/PrimitiveRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.7.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.7.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Avoid contrived ways of expressing the "less than" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$lessthanrecipe.md)
* [Avoid contrived ways of expressing the "less than or equal to" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$lessthanorequaltorecipe.md)
* [Avoid contrived ways of expressing the "greater than" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$greaterthanrecipe.md)
* [Avoid contrived ways of expressing the "greater than or equal to" relationship](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$greaterthanorequaltorecipe.md)
* [Prefer `Math#toIntExact(long)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longtointexactrecipe.md)
* [Prefer `Boolean#hashCode(boolean)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$booleanhashcoderecipe.md)
* [Prefer `Byte#hashCode(byte)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$bytehashcoderecipe.md)
* [Prefer `Character#hashCode(char)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$characterhashcoderecipe.md)
* [Prefer `Short#hashCode(short)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shorthashcoderecipe.md)
* [Prefer `Integer#hashCode(int)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerhashcoderecipe.md)
* [Prefer `Long#hashCode(long)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longhashcoderecipe.md)
* [Prefer `Float#hashCode(float)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floathashcoderecipe.md)
* [Prefer `Double#hashCode(double)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublehashcoderecipe.md)
* [Prefer `Boolean#compare(boolean, boolean)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$booleancomparerecipe.md)
* [Prefer `Character#compare(char, char)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$charactercomparerecipe.md)
* [Prefer `Short#compare(short, short)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shortcomparerecipe.md)
* [Prefer `Integer#compare(int, int)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integercomparerecipe.md)
* [Prefer `Long#compare(long, long)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longcomparerecipe.md)
* [Prefer `Float#compare(float, float)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatcomparerecipe.md)
* [Prefer `Double#compare(double, double)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublecomparerecipe.md)
* [Prefer `Character#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$characterbytesrecipe.md)
* [Prefer `Short#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$shortbytesrecipe.md)
* [Prefer `Integer#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integerbytesrecipe.md)
* [Prefer `Long#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longbytesrecipe.md)
* [Prefer `Float#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatbytesrecipe.md)
* [Prefer `Double#BYTES` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doublebytesrecipe.md)
* [Prefer `Float#isFinite(float)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$floatisfiniterecipe.md)
* [Prefer `Double#isFinite(double)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$doubleisfiniterecipe.md)
* [Prefer an `Integer#signum(int)` comparison to 1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integersignumispositiverecipe.md)
* [Prefer an `Integer#signum(int)` comparison to -1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$integersignumisnegativerecipe.md)
* [Prefer an `Long#signum(long)` comparison to 1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longsignumispositiverecipe.md)
* [Prefer an `Long#signum(long)` comparison to -1 over less clear alternatives](../../../../tech/picnic/errorprone/refasterrules/primitiverulesrecipes$longsignumisnegativerecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
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
    activeRecipe("tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes -Drewrite.exportDatatables=true
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe PrimitiveRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.PrimitiveRulesRecipes)

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

