# OpenRewrite best practices

**org.openrewrite.recipes.OpenRewriteBestPractices**

_Best practices for OpenRewrite recipe development._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-recommendations/blob/main/src/main/resources/META-INF/rewrite/openrewrite.yml), [Issue Tracker](https://github.com/openrewrite/rewrite-recommendations/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-recommendations/1.6.1/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-recommendations
* version: 1.6.1

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-recommendations:1.6.1` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.16.2")
}

rewrite {
    activeRecipe("org.openrewrite.recipes.OpenRewriteBestPractices")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-recommendations:1.6.1")
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
        rewrite("org.openrewrite.recipe:rewrite-recommendations:1.6.1")
    }
    rewrite {
        activeRecipe("org.openrewrite.recipes.OpenRewriteBestPractices")
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
            <recipe>org.openrewrite.recipes.OpenRewriteBestPractices</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-recommendations</artifactId>
            <version>1.6.1</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-recommendations:RELEASE -Drewrite.activeRecipes=org.openrewrite.recipes.OpenRewriteBestPractices 
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe OpenRewriteBestPractices
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Java Recipe best practices](../recipes/javarecipebestpractices.md)
* [Recipe testing best practices](../recipes/recipetestingbestpractices.md)
* [Recipe nullability best practices](../recipes/recipenullabilitybestpractices.md)
* [Order imports](../java/orderimports.md)
* [End files with a single newline](../java/format/emptynewlineatendoffile.md)
* [Inline variable](../staticanalysis/inlinevariable.md)
* [Add missing `@Override` to overriding and implementing methods](../staticanalysis/missingoverrideannotation.md)
* [Use diamond operator](../staticanalysis/usediamondoperator.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.recipes.OpenRewriteBestPractices
displayName: OpenRewrite best practices
description: Best practices for OpenRewrite recipe development.
recipeList:
  - org.openrewrite.recipes.JavaRecipeBestPractices
  - org.openrewrite.recipes.RecipeTestingBestPractices
  - org.openrewrite.recipes.RecipeNullabilityBestPractices
  - org.openrewrite.java.OrderImports
  - org.openrewrite.java.format.EmptyNewlineAtEndOfFile
  - org.openrewrite.staticanalysis.InlineVariable
  - org.openrewrite.staticanalysis.MissingOverrideAnnotation
  - org.openrewrite.staticanalysis.UseDiamondOperator

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.recipes.OpenRewriteBestPractices)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
