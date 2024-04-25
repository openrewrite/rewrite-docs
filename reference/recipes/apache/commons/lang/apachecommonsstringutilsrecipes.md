# `ApacheCommonsStringUtils` Refaster recipes

**org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.apache.commons.lang.ApacheCommonsStringUtils`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/apache/commons/lang/ApacheCommonsStringUtils.java), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/1.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 1.1.0

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:1.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.12.0")
}

rewrite {
    activeRecipe("org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:1.1.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.12.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:1.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes")
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
        <version>5.29.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>1.1.0</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe ApacheCommonsStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$abbreviaterecipe.md)
* [Replace `StringUtils.capitalize(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$capitalizerecipe.md)
* [Replace `StringUtils.defaultString(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$defaultstringrecipe.md)
* [Replace `StringUtils.defaultString(String, String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$deletewhitespacerecipe.md)
* [Replace `StringUtils.equalsIgnoreCase(CharSequence, CharSequence)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$equalsignorecaserecipe.md)
* [Replace `StringUtils.equals(CharSequence, CharSequence)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$equalsrecipe.md)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$lowercaserecipe.md)
* [Replace `StringUtils.removeEnd(String, String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$removeendrecipe.md)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$replacerecipe.md)
* [Replace `StringUtils.reverse(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$reverserecipe.md)
* [Replace `StringUtils.split(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$splitrecipe.md)
* [Replace `StringUtils.strip(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$striprecipe.md)
* [Replace `StringUtils.trimToEmpty(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$trimtoemptyrecipe.md)
* [Replace `StringUtils.trimToNull(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$trimtonullrecipe.md)
* [Replace `StringUtils.trim(String)` with JDK provided API](../../../apache/commons/lang/apachecommonsstringutilsrecipes$trimrecipe.md)
* [Replace `StringUtils.upperCase(String)` with JDK internals](../../../apache/commons/lang/apachecommonsstringutilsrecipes$uppercaserecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes
displayName: `ApacheCommonsStringUtils` Refaster recipes
description: Refaster template recipes for `org.openrewrite.apache.commons.lang.ApacheCommonsStringUtils`.
recipeList:
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$CapitalizeRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveEndRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$SplitRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StripRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToEmptyRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToNullRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimRecipe
  - org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes$UppercaseRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.apache.commons.lang.ApacheCommonsStringUtilsRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
