# Refaster rules related to expressions dealing with `IntStream`s

**tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.IntStreamRules`. [Source](https://error-prone.picnic.tech/refasterrules/IntStreamRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.1")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.1") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes")
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
2. Run `gradle --init-script init.gradle rewriteRun` to run the recipe.
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
        <version>5.34.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe IntStreamRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `IntStream#range(int, int)` over the more contrived alternative](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamclosedopenrangerecipe.md)
* [Don't unnecessarily call `Streams#concat(IntStream...)`](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$concatoneintstreamrecipe.md)
* [Prefer `IntStream#concat(IntStream, IntStream)` over the Guava alternative](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$concattwointstreamsrecipe.md)
* [Apply `IntStream#filter(IntPredicate)` before `IntStream#sorted()` to reduce the number of elements to sort](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamfiltersortedrecipe.md)
* [In order to test whether a stream has any element, simply try to find one](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamisemptyrecipe.md)
* [In order to test whether a stream has any element, simply try to find one](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamisnotemptyrecipe.md)
* [Refaster template `IntStreamRules.IntStreamMin`](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamminrecipe.md)
* [Prefer `IntStream#noneMatch(IntPredicate)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamnonematchrecipe.md)
* [Prefer `IntStream#anyMatch(IntPredicate)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamanymatchrecipe.md)
* [Refaster template `IntStreamRules.IntStreamAllMatch`](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamallmatchrecipe.md)
* [Refaster template `IntStreamRules.IntStreamTakeWhile`](../../../../tech/picnic/errorprone/refasterrules/intstreamrulesrecipes$intstreamtakewhilerecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes
displayName: Refaster rules related to expressions dealing with `IntStream`s
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.IntStreamRules`. [Source](https://error-prone.picnic.tech/refasterrules/IntStreamRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamClosedOpenRangeRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$ConcatOneIntStreamRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$ConcatTwoIntStreamsRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamFilterSortedRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamIsEmptyRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamIsNotEmptyRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamMinRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamNoneMatchRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamAnyMatchRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamAllMatchRecipe
  - tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes$IntStreamTakeWhileRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.IntStreamRulesRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
