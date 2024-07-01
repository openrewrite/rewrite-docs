# Refaster rules related to expressions dealing with `org.springframework.web.reactive.function.client.WebClient` and related types

**tech.picnic.errorprone.refasterrules.WebClientRulesRecipes**

_Refaster template recipes for `tech.picnic.errorprone.refasterrules.WebClientRules`. [Source](https://error-prone.picnic.tech/refasterrules/WebClientRules)._

## Recipe source

[GitHub](https://github.com/search?type=code&q=tech.picnic.errorprone.refasterrules.WebClientRulesRecipes), [Issue Tracker](https://github.com/openrewrite/rewrite-third-party/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-third-party/0.5.1/jar)

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
    activeRecipe("tech.picnic.errorprone.refasterrules.WebClientRulesRecipes")
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
        activeRecipe("tech.picnic.errorprone.refasterrules.WebClientRulesRecipes")
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
            <recipe>tech.picnic.errorprone.refasterrules.WebClientRulesRecipes</recipe>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-third-party:RELEASE -Drewrite.activeRecipes=tech.picnic.errorprone.refasterrules.WebClientRulesRecipes 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe WebClientRulesRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Prefer `WebClient#get()` over `WebClient#method(HttpMethod)` with `HttpMethod#GET`](../../../../tech/picnic/errorprone/refasterrules/webclientrulesrecipes$webclientgetrecipe.md)
* [Prefer `WebClient#head()` over `WebClient#method(HttpMethod)` with `HttpMethod#HEAD`](../../../../tech/picnic/errorprone/refasterrules/webclientrulesrecipes$webclientheadrecipe.md)
* [Prefer `WebClient#options()` over `WebClient#method(HttpMethod)` with `HttpMethod#OPTIONS`](../../../../tech/picnic/errorprone/refasterrules/webclientrulesrecipes$webclientoptionsrecipe.md)
* [Prefer `WebClient#patch()` over `WebClient#method(HttpMethod)` with `HttpMethod#PATCH`](../../../../tech/picnic/errorprone/refasterrules/webclientrulesrecipes$webclientpatchrecipe.md)
* [Prefer `WebClient#post()` over `WebClient#method(HttpMethod)` with `HttpMethod#POST`](../../../../tech/picnic/errorprone/refasterrules/webclientrulesrecipes$webclientpostrecipe.md)
* [Prefer `WebClient#put()` over `WebClient#method(HttpMethod)` with `HttpMethod#PUT`](../../../../tech/picnic/errorprone/refasterrules/webclientrulesrecipes$webclientputrecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: tech.picnic.errorprone.refasterrules.WebClientRulesRecipes
displayName: Refaster rules related to expressions dealing with `org.springframework.web.reactive.function.client.WebClient` and related types
description: Refaster template recipes for `tech.picnic.errorprone.refasterrules.WebClientRules`. [Source](https://error-prone.picnic.tech/refasterrules/WebClientRules).
recipeList:
  - tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$WebClientGetRecipe
  - tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$WebClientHeadRecipe
  - tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$WebClientOptionsRecipe
  - tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$WebClientPatchRecipe
  - tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$WebClientPostRecipe
  - tech.picnic.errorprone.refasterrules.WebClientRulesRecipes$WebClientPutRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/tech.picnic.errorprone.refasterrules.WebClientRulesRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
