# `ApacheCommonsStringUtils` Refaster recipes

**org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/apache/commons/lang/ApacheCommonsStringUtilsRecipes.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.0.10/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.0.10


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.0.10` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.5")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.10")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.5") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.0.10")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes")
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
        <version>5.5.0</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.0.10</version>
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
mvn -U org.openrewrite.maven:rewrite-maven-plugin:run \
  -Drewrite.recipeArtifactCoordinates=org.openrewrite.recipe:rewrite-migrate-java:RELEASE \
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Refaster template `ApacheCommonsStringUtils.Abbreviate`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$abbreviaterecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Capitalize`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$capitalizerecipe.md)
* [Refaster template `ApacheCommonsStringUtils.DefaultString`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$defaultstringrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.DefaultStringFallback`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.DeleteWhitespace`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$deletewhitespacerecipe.md)
* [Refaster template `ApacheCommonsStringUtils.EqualsIgnoreCase`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$equalsignorecaserecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Equals`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$equalsrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.IsAlphanumeric`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$isalphanumericrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.IsAlpha`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$isalpharecipe.md)
* [Refaster template `ApacheCommonsStringUtils.IsEmpty`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$isemptyrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Lowercase`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$lowercaserecipe.md)
* [Refaster template `ApacheCommonsStringUtils.RemoveEnd`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$removeendrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Replace`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$replacerecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Reverse`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$reverserecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Split`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$splitrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Strip`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$striprecipe.md)
* [Refaster template `ApacheCommonsStringUtils.TrimToEmpty`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$trimtoemptyrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.TrimToNull`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$trimtonullrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Trim`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$trimrecipe.md)
* [Refaster template `ApacheCommonsStringUtils.Uppercase`](../../../../../java/migrate/apache/commons/lang/apachecommonsstringutilsrecipes$uppercaserecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes
displayName: `ApacheCommonsStringUtils` Refaster recipes
description: Refaster template recipes for `org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtils`.
recipeList:
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$CapitalizeRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$IsAlphanumericRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$IsAlphaRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$IsEmptyRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$RemoveEndRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$SplitRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$StripRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToEmptyRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimToNullRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$TrimRecipe
  - org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes$UppercaseRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.apache.commons.lang.ApacheCommonsStringUtilsRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
