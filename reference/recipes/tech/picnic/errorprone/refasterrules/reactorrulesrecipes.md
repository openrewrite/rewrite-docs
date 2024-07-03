# Refaster rules related to Reactor expressions and statements

**tech.picnic.errorprone.refasterrules.ReactorRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.ReactorRules`. [Source](https://error-prone.picnic.tech/refasterrules/ReactorRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.ReactorRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-third-party
* version: 0.5.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-third-party:0.5.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.3")
}

rewrite {
    activeRecipe("tech.picnic.errorprone.refasterrules.ReactorRulesRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.16.3") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-third-party:0.5.2")
    }
    rewrite {
        activeRecipe("tech.picnic.errorprone.refasterrules.ReactorRulesRecipes")
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
        <version>5.35.0</version>
        <configuration>
          
          <activeRecipes>
            <recipe>tech.picnic.errorprone.refasterrules.ReactorRulesRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-third-party</artifactId>
            <version>0.5.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.ReactorRulesRecipes 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ReactorRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `Flux#just(Object)` over more contrived alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$fluxjustrecipe.md)
* [Prefer `StepVerifier.LastStep#verifyComplete()` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifycompleterecipe.md)
* [Prefer `StepVerifier.LastStep#verifyError()` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorrecipe.md)
* [Prefer `StepVerifier.LastStep#verifyErrorMatches(Predicate)` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrormatchesrecipe.md)
* [Prefer `StepVerifier.LastStep#verifyErrorSatisfies(Consumer)` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrorsatisfiesrecipe.md)
* [Prefer `StepVerifier.LastStep#verifyErrorMessage(String)` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifyerrormessagerecipe.md)
* [Prefer `StepVerifier.LastStep#verifyTimeout(Duration)` over more verbose alternatives](../../../../tech/picnic/errorprone/refasterrules/reactorrulesrecipes$stepverifierlaststepverifytimeoutrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.ReactorRulesRecipes
displayName: Refaster rules related to Reactor expressions and statements
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.ReactorRules`. [Source](https://error-prone.picnic.tech/refasterrules/ReactorRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$FluxJustRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyCompleteRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorMatchesRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorSatisfiesRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyErrorMessageRecipe
  - tech.picnic.errorprone.refasterrules.ReactorRulesRecipes$StepVerifierLastStepVerifyTimeoutRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.ReactorRulesRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
