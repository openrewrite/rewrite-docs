# Recipe testing best practices

**org.openrewrite.recipes.RecipeTestingBestPractices**

_Best practices for testing recipes._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-recommendations/blob/main/src/main/resources/META-INF/rewrite/openrewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-recommendations/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-recommendations/1.4.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-recommendations
* version: 1.4.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-recommendations:1.4.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.13.0")
}

rewrite {
    activeRecipe("org.openrewrite.recipes.RecipeTestingBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-recommendations:1.4.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.13.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-recommendations:1.4.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.recipes.RecipeTestingBestPractices")
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
        <version>5.30.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.recipes.RecipeTestingBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-recommendations</artifactId>
            <version>1.4.2</version>
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
{% code title="shell" %}
You will need to have [Maven](https://maven.apache.org/download.cgi) installed on your machine before you can run the following command.

```shell
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-recommendations:RELEASE -Drewrite.activeRecipes=org.openrewrite.recipes.RecipeTestingBestPractices
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe RecipeTestingBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Order imports](../java/orderimports.md)
* [RewriteTest classes should not be public](../java/recipes/rewritetestclassesshouldnotbepublic.md)
* [Automatically select recipe examples from the unit test cases of a recipe](../java/recipes/selectrecipeexamples.md)
* [Minimal indentation for `SourceSpecs` text blocks](../java/recipes/sourcespectextblockindentation.md)
* [Remove `test` prefix from JUnit 5 tests](../java/testing/cleanup/removetestprefix.md)
* [Remove `public` visibility of JUnit 5 tests](../java/testing/cleanup/testsshouldnotbepublic.md)
* [Add missing `@Override` to overriding and implementing methods](../staticanalysis/missingoverrideannotation.md)
* [Remove `System.out#println` statements](../staticanalysis/removesystemoutprintln.md)
* [Recipe nullability best practices](../recipes/recipenullabilitybestpractices.md)
* [End files with a single newline](../java/format/emptynewlineatendoffile.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.recipes.RecipeTestingBestPractices
displayName: Recipe testing best practices
description: Best practices for testing recipes.
recipeList:
  - org.openrewrite.java.OrderImports
  - org.openrewrite.java.recipes.RewriteTestClassesShouldNotBePublic
  - org.openrewrite.java.recipes.SelectRecipeExamples
  - org.openrewrite.java.recipes.SourceSpecTextBlockIndentation
  - org.openrewrite.java.testing.cleanup.RemoveTestPrefix
  - org.openrewrite.java.testing.cleanup.TestsShouldNotBePublic
  - org.openrewrite.staticanalysis.MissingOverrideAnnotation
  - org.openrewrite.staticanalysis.RemoveSystemOutPrintln
  - org.openrewrite.recipes.RecipeNullabilityBestPractices
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.recipes.RecipeTestingBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
