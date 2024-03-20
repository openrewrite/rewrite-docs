# `PlexusStringUtils` Refaster recipes

**org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.codehaus.plexus.PlexusStringUtils`._

## Recipe source

[GitHub](https://github.com/openrewrite/rewrite-apache/blob/main/src/main/java/org/openrewrite/codehaus/plexus/PlexusStringUtils.java), [Issue Tracker](https://github.com/openrewrite/rewrite-apache/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-apache/0.1.2/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-apache
* version: 0.1.2

{% hint style="info" %}
This recipe is composed of more than one recipe. If you want to customize the set of recipes this is composed of, you can find and copy the GitHub source for the recipe from the link above.
{% endhint %}

## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-apache:0.1.2` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.10.0")
}

rewrite {
    activeRecipe("org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-apache:0.1.2")
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
    dependencies { classpath("org.openrewrite:plugin:6.10.0") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-apache:0.1.2")
    }
    rewrite {
        activeRecipe("org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes")
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
        <version>5.25.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-apache</artifactId>
            <version>0.1.2</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-apache:RELEASE -Drewrite.activeRecipes=org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% tab title="Moderne CLI" %}
You will need to have configured the [Moderne CLI](https://docs.moderne.io/moderne-cli/cli-intro) on your machine before you can run the following command.

{% code title="shell" %}
```shell
mod run . --recipe PlexusStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Replace `StringUtils.abbreviate(String, int)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$abbreviaterecipe.md)
* [Replace `StringUtils.capitalise(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$capitaliserecipe.md)
* [Replace `StringUtils.defaultString(Object)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$defaultstringrecipe.md)
* [Replace `StringUtils.defaultString(Object, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Replace `StringUtils.deleteWhitespace(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$deletewhitespacerecipe.md)
* [Replace `StringUtils.equalsIgnoreCase(String, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$equalsignorecaserecipe.md)
* [Replace `StringUtils.equals(String, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$equalsrecipe.md)
* [Replace `StringUtils.lowerCase(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$lowercaserecipe.md)
* [Replace `StringUtils.replace(String, String, String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$replacerecipe.md)
* [Replace `StringUtils.reverse(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$reverserecipe.md)
* [Replace `StringUtils.split(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$splitrecipe.md)
* [Replace `StringUtils.strip(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$striprecipe.md)
* [Replace `StringUtils.trim(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$trimrecipe.md)
* [Replace `StringUtils.upperCase(String)` with JDK provided API](../../codehaus/plexus/plexusstringutilsrecipes$uppercaserecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes
displayName: `PlexusStringUtils` Refaster recipes
description: Refaster template recipes for `org.openrewrite.codehaus.plexus.PlexusStringUtils`.
recipeList:
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$CapitaliseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$SplitRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$StripRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$TrimRecipe
  - org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes$UppercaseRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.codehaus.plexus.PlexusStringUtilsRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
