# `PlexusStringUtils` Refaster recipes

**org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes**

_Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`._

## Source

[GitHub](https://github.com/openrewrite/rewrite-migrate-java/blob/main/src/main/java/org/openrewrite/java/migrate/plexus/PlexusStringUtilsRecipes.java), [Issue Tracker](https://github.com/openrewrite/rewrite-migrate-java/issues), [Maven Central](https://central.sonatype.com/artifact/org.openrewrite.recipe/rewrite-migrate-java/2.1.0/jar)

* groupId: org.openrewrite.recipe
* artifactId: rewrite-migrate-java
* version: 2.1.0


## Usage

This recipe has no required configuration options. It can be activated by adding a dependency on `org.openrewrite.recipe:rewrite-migrate-java:2.1.0` in your build file or by running a shell command (in which case no build changes are needed): 
{% tabs %}
{% tab title="Gradle" %}
1. Add the following to your `build.gradle` file:
{% code title="build.gradle" %}
```groovy
plugins {
    id("org.openrewrite.rewrite") version("6.3.8")
}

rewrite {
    activeRecipe("org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes")
}

repositories {
    mavenCentral()
}

dependencies {
    rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.0")
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
    dependencies { classpath("org.openrewrite:plugin:6.3.8") }
}
rootProject {
    plugins.apply(org.openrewrite.gradle.RewritePlugin)
    dependencies {
        rewrite("org.openrewrite.recipe:rewrite-migrate-java:2.1.0")
    }
    rewrite {
        activeRecipe("org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes")
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
        <version>5.5.2</version>
        <configuration>
          <activeRecipes>
            <recipe>org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes</recipe>
          </activeRecipes>
        </configuration>
        <dependencies>
          <dependency>
            <groupId>org.openrewrite.recipe</groupId>
            <artifactId>rewrite-migrate-java</artifactId>
            <version>2.1.0</version>
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
  -Drewrite.activeRecipes=org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes
```
{% endcode %}
{% endtab %}
{% endtabs %}

## Definition

{% tabs %}
{% tab title="Recipe List" %}
* [Refaster template `PlexusStringUtils.Abbreviate`](../../../java/migrate/plexus/plexusstringutilsrecipes$abbreviaterecipe.md)
* [Refaster template `PlexusStringUtils.Capitalize`](../../../java/migrate/plexus/plexusstringutilsrecipes$capitalizerecipe.md)
* [Refaster template `PlexusStringUtils.DefaultString`](../../../java/migrate/plexus/plexusstringutilsrecipes$defaultstringrecipe.md)
* [Refaster template `PlexusStringUtils.DefaultStringFallback`](../../../java/migrate/plexus/plexusstringutilsrecipes$defaultstringfallbackrecipe.md)
* [Refaster template `PlexusStringUtils.DeleteWhitespace`](../../../java/migrate/plexus/plexusstringutilsrecipes$deletewhitespacerecipe.md)
* [Refaster template `PlexusStringUtils.EqualsIgnoreCase`](../../../java/migrate/plexus/plexusstringutilsrecipes$equalsignorecaserecipe.md)
* [Refaster template `PlexusStringUtils.Equals`](../../../java/migrate/plexus/plexusstringutilsrecipes$equalsrecipe.md)
* [Refaster template `PlexusStringUtils.Lowercase`](../../../java/migrate/plexus/plexusstringutilsrecipes$lowercaserecipe.md)
* [Refaster template `PlexusStringUtils.Replace`](../../../java/migrate/plexus/plexusstringutilsrecipes$replacerecipe.md)
* [Refaster template `PlexusStringUtils.Reverse`](../../../java/migrate/plexus/plexusstringutilsrecipes$reverserecipe.md)
* [Refaster template `PlexusStringUtils.Split`](../../../java/migrate/plexus/plexusstringutilsrecipes$splitrecipe.md)
* [Refaster template `PlexusStringUtils.Strip`](../../../java/migrate/plexus/plexusstringutilsrecipes$striprecipe.md)
* [Refaster template `PlexusStringUtils.Trim`](../../../java/migrate/plexus/plexusstringutilsrecipes$trimrecipe.md)
* [Refaster template `PlexusStringUtils.Uppercase`](../../../java/migrate/plexus/plexusstringutilsrecipes$uppercaserecipe.md)

{% endtab %}

{% tab title="Yaml Recipe List" %}
```yaml
---
type: specs.openrewrite.org/v1beta/recipe
name: org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes
displayName: `PlexusStringUtils` Refaster recipes
description: Refaster template recipes for `org.openrewrite.java.migrate.plexus.PlexusStringUtils`.
recipeList:
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$AbbreviateRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$CapitalizeRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DefaultStringFallbackRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$DeleteWhitespaceRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsIgnoreCaseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$EqualsRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$LowercaseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReplaceRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$ReverseRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$SplitRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$StripRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$TrimRecipe
  - org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes$UppercaseRecipe

```
{% endtab %}
{% endtabs %}

## See how this recipe works across multiple open-source repositories

[![Moderne Link Image](/.gitbook/assets/ModerneRecipeButton.png)](https://app.moderne.io/recipes/org.openrewrite.java.migrate.plexus.PlexusStringUtilsRecipes)

The community edition of the Moderne platform enables you to easily run recipes across thousands of open-source repositories.

Please [contact Moderne](https://moderne.io/product) for more information about safely running the recipes on your own codebase in a private SaaS.
