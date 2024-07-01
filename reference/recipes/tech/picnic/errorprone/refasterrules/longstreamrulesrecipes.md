# Refaster rules related to expressions dealing with `LongStream`s

**tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.LongStreamRules`. [Source](https://error-prone.picnic.tech/refasterrules/LongStreamRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

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
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.2") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.1")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes")
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
        <version>5.34.1</version>
        <configuration>
          
          <activeRecipes>
            <recipe>tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes 
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

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.LongStreamRulesRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
